import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering the Future with <span className="text-blue-400">Artificial Intelligence</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            AI Global is at the forefront of AI innovation, delivering cutting-edge solutions to businesses worldwide.
          </p>
          <a href="#contact" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;