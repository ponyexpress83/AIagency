import React from 'react';
import { Bot, Brain, Cpu, Database } from 'lucide-react';

const services = [
  { icon: Bot, title: 'Chatbots & Virtual Assistants', description: 'Enhance customer experience with AI-powered conversational interfaces.' },
  { icon: Brain, title: 'Machine Learning Solutions', description: 'Leverage data-driven insights with custom ML models.' },
  { icon: Cpu, title: 'AI Consulting', description: 'Expert guidance on integrating AI into your business processes.' },
  { icon: Database, title: 'Big Data Analytics', description: 'Unlock the power of your data with advanced AI analytics.' },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-800 bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <service.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;