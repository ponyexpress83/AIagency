import React from 'react';
import { Brain, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Brain className="w-8 h-8 text-blue-400 mr-2" />
            <span className="text-2xl font-bold text-white">AI Global</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-gray-400">
          <p>&copy; 2024 AI Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;