"use client";

import { useState, FormEvent, ChangeEvent } from 'react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would send this data to your backend
    alert('Message sent successfully! (Demo only)');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-gray-800 rounded-xl p-8">
      <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
          <input 
            type="text" 
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            placeholder="Your name"
            required
            aria-required="true"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input 
            type="email" 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            placeholder="your@email.com"
            required
            aria-required="true"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
          <input 
            type="text" 
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            placeholder="Subject"
            required
            aria-required="true"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
          <textarea 
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4} 
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            placeholder="Your message"
            required
            aria-required="true"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300"
          aria-label="Send message"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 