"use client"

import { useState } from "react";
import { CheckCircle, ArrowRight, Linkedin, Mail } from "lucide-react";
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
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="text-center mt-40 py-12 space-y-4 bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-4 mx-auto animate-bounce">
          <CheckCircle className="h-10 w-10 text-yellow-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
        <p className="text-gray-600 text-lg">
          Your application has been received. We'll review your information and get back to you soon.
        </p>
        <button
          className="mt-6 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
          onClick={() => setIsSubmitted(false)}
        >
          Submit Another Application <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    );
  }

  const handleSubmitCareers = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwYliAL6T8echuR0Lg4zboqEaV0uw8Crr6q7NvmTxcrbvhSpshoV3hblfFFDfWXzIem4A/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          type: "careers",
          ...formState
        }),
      });
      
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
        openGraph={{
          title: "Careers - Join Our Team at Retail Craft Asia",
          description: "Explore exciting career opportunities at Retail Craft Asia. Join our team and make an impact in the retail industry.",
          image: "../assets/careers-banner.png",
          url: "https://www.retailcraftasia.com/career"
        }}
        twitter={{
          card: "summary_large_image",
          title: "Careers - Join Our Team at Retail Craft Asia",
          description: "Explore exciting career opportunities at Retail Craft Asia. Join our team and make an impact in the retail industry.",
          image: "../assets/careers-banner.png"
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "JobPosting",
          "title": "Join Our Team",
          "description": "Explore exciting career opportunities at Retail Craft Asia. Join our team and make an impact in the retail industry.",
          "hiringOrganization": {
            "@type": "Organization",
            "name": "Retail Craft Asia",
            "sameAs": "https://www.retailcraftasia.com"
          },
      "jobLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
        "addressLocality": "Bangkok",
        "addressCountry": "TH"
            }
          }
        }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Career Heading Section */}
        <div className="text-center mt-20 mb-16">
          <div className="inline-flex items-center justify-center bg-yellow-100 text-yellow-800 rounded-full px-6 py-2 mb-6">
            <span className="font-medium">We're Hiring!</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take the next step in your career? Fill out the form below and we'll contact you about exciting opportunities at our company.
          </p>
        </div>

        {/* Resume Submission Notice */}
        <div className="mb-8 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Mail className="h-5 w-5 text-yellow-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-800">
                  <span className="font-semibold">Please note:</span> After submitting this form, please send your resume to{' '}
                  <a href="mailto:careers@example.com" className="text-yellow-700 underline hover:text-yellow-800">
                    careers@retailcraftasia.com
                  </a>{' '}
                  with the subject line "Application for [Position Name]".
                </p>
              </div>
            </div>
          </div>

        {/* Form Section */}
        <div className="bg-gradient-to-br from-white to-amber-50 p-8 md:p-10 rounded-2xl shadow-lg border border-amber-100 transform hover:shadow-yellow-600 hover:scale-[1.005] transition-transform duration-300">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-1.5 bg-yellow-500 rounded-full"></div>
            <h3 className="text-2xl font-bold text-gray-800">Application Form</h3>
          </div>
          
          <form onSubmit={handleSubmitCareers} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Current Company
                </label>
                <input
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  placeholder="Where do you currently work?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="+1 (123) 456-7890"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
            
            {/* LinkedIn Profile Field */}
            <div className="space-y-3">
              <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                LinkedIn Profile URL
              </label>
              <div className="relative">
                {/* <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Linkedin className="h-5 w-5 text-gray-400" />
                </div> */}
                <input
                  id="linkedin"
                  name="linkedin"
                  type="url"
                  value={formState.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Please provide your LinkedIn profile URL (optional but recommended)</p>
            </div>
            
            <div className="space-y-3">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Tell Us More About Yourself <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell us about your experience, skills, and why you'd be a great fit for our team..."
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-medium py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="h-5 w-5" />
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