"use client";

import { useState } from "react";
import { CheckCircle, ArrowRight, Mail } from "lucide-react";
import SEOHelmet from './SEOHelmet';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    linkedin: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="text-center mt-32 py-12 space-y-4 bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-xl shadow-md max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4 mx-auto animate-bounce">
          <CheckCircle className="h-8 w-8 text-yellow-600" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800">Thank You!</h3>
        <p className="text-gray-600 text-base">
          Your application has been received. We'll review your information and get back to you soon.
        </p>
        <button
          className="mt-6 bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2.5 rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-2 mx-auto text-sm"
          onClick={() => setIsSubmitted(false)}
        >
          Submit Another Application <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    );
  }

  const handleSubmitCareers = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwYliAL6T8echuR0Lg4zboqEaV0uw8Crr6q7NvmTxcrbvhSpshoV3hblfFFDfWXzIem4A/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify({
            type: "careers",
            ...formState,
          }),
        }
      );

      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        company: "",
        phone: "",
        linkedin: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHelmet
        title="Careers - Join Our Team at Retail Craft Asia"
        description="Explore exciting career opportunities at Retail Craft Asia. Join our team and make an impact in the retail industry."
        keywords="Retail Craft Asia Careers, Job Opportunities, Join Our Team"
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        {/* Career Heading Section */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center bg-yellow-100 text-yellow-800 rounded-full px-4 py-1.5 mb-4 text-sm font-medium">
            We're Hiring!
          </div>
          <h1
  className="uppercase tracking-wide text-3xl md:text-5xl font-extrabold 
    bg-[linear-gradient(180deg,#FFD700_0%,#FFB700_30%,#E6A700_50%,#FFCC00_70%,#FFD700_100%)] 
    bg-clip-text text-transparent 
    [text-shadow:0_1px_0_#B8860B,0_2px_2px_rgba(0,0,0,0.6)] 
    text-center mb-3"
>
  Join Our Team
</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to take the next step in your career? Fill out the form below and we'll contact you about exciting opportunities.
          </p>
        </div>

        {/* Resume Submission Notice */}
        <div className="mb-8 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-md">
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-yellow-600 mt-0.5" />
            <p className="text-sm text-gray-700">
              <span className="font-medium">Note:</span> After submitting this form, please send your resume to{" "}
              <a
                href="mailto:careers@retailcraftasia.com"
                className="text-yellow-700 underline hover:text-yellow-800"
              >
                careers@retailcraftasia.com
              </a>{" "}
              with the subject line <em>"Application for [Position Name]"</em>.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <form onSubmit={handleSubmitCareers} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                />
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Company + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Company
                </label>
                <input
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  placeholder="Where do you currently work?"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="+66 123 456 789"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* LinkedIn */}
            <div>
              <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                LinkedIn Profile URL
              </label>
              <input
                id="linkedin"
                name="linkedin"
                type="url"
                value={formState.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/yourprofile"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
              />
              <p className="text-xs text-gray-500 mt-1">Optional but recommended</p>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Tell Us More About Yourself <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell us about your experience, skills, and why you'd be a great fit..."
                rows={5}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-medium py-3 px-5 rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
