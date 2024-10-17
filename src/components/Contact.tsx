import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-800 bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="w-6 h-6 text-blue-400 mr-2" />
                <span>info@aiglobal.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-6 h-6 text-blue-400 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-400 mr-2" />
                <span>123 AI Street, Tech City, 12345</span>
              </li>
            </ul>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 rounded bg-gray-700 text-white" />
            <input type="email" placeholder="Your Email" className="w-full p-2 rounded bg-gray-700 text-white" />
            <textarea placeholder="Your Message" rows={4} className="w-full p-2 rounded bg-gray-700 text-white"></textarea>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;