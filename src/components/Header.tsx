import React from 'react';
import { Brain } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-900 bg-opacity-50 backdrop-blur-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Brain className="w-8 h-8 text-blue-400 mr-2" />
          <span className="text-2xl font-bold text-white">AI Global</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;