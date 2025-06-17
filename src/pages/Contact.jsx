import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import ContactForm from '../components/contact';

const Contact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Retail Craft Asia",
    "description": "Get in touch with our retail consultancy experts. Contact us for sales, merchandising, brand activation, market expansion, and digital marketing solutions.",
    "url": "https://retailcraftasia.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Retail Craft Asia",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+65-1234-5678",
        "contactType": "customer service",
        "availableLanguage": ["English", "Chinese", "Malay"],
        "areaServed": "Asia Pacific"
      }
    }
  };

  return (
    <>
      <SEOHelmet
        title="Contact Us - Retail Craft Asia | Get Expert Retail Consulting"
        description="Contact Retail Craft Asia for expert retail consultancy services. Reach out to our team for sales, merchandising, brand activation, market expansion, and digital marketing solutions across Asia."
        keywords="contact retail craft asia, retail consultancy contact, retail consulting inquiry, retail services contact, Asia retail consultants"
        url="https://retailcraftasia.com/contact"
        structuredData={structuredData}
      />
      
      <div>
        <ContactForm />
      </div>
    </>
  );
}

export default Contact;
