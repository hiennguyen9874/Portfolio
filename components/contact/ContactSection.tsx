"use client";

import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const ContactSection = () => {
  const handleDownloadCV = () => {
    console.log('Download CV clicked');
    // In a real app, this would trigger a file download
  };

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactInfo />
            <ContactForm />
          </div>
          
          <div className="text-center mt-12">
            <button 
              className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition duration-300"
              onClick={handleDownloadCV}
              tabIndex={0}
              aria-label="Download full CV"
              onKeyDown={(e) => e.key === 'Enter' && handleDownloadCV()}
            >
              <i className="fas fa-download mr-2"></i> Download Full CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 