import React from 'react';
import { Truck, BadgeDollarSign, HeartHandshake, Sprout, Syringe, Landmark } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  { 
    title: 'Timely Raw Milk Collection', 
    description: 'We ensure raw milk is collected promptly to maintain freshness and quality.',
    icon: 'truck'
  },
  { 
    title: 'Competitive Prices', 
    description: 'We offer fair and competitive market rates to value our farmers\' hard work.',
    icon: 'money'
  },
  { 
    title: 'Good Customer Service', 
    description: 'We prioritize our partners with responsive and helpful support whenever needed.',
    icon: 'service'
  },
  { 
    title: 'Animal Feeds Support', 
    description: 'Our programme provides access to high-quality feeds to boost productivity.',
    icon: 'feed'
  },
  { 
    title: 'AI and Veterinary Services', 
    description: 'Expert veterinary support and Artificial Insemination services for healthy herds.',
    icon: 'vet'
  },
  { 
    title: 'Financial Services Link', 
    description: 'We connect our farmers to financial institutions for loans and financial growth.',
    icon: 'loan'
  },
];

const Services: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'truck': return <Truck className="w-6 h-6" />;
      case 'money': return <BadgeDollarSign className="w-6 h-6" />;
      case 'service': return <HeartHandshake className="w-6 h-6" />;
      case 'feed': return <Sprout className="w-6 h-6" />;
      case 'vet': return <Syringe className="w-6 h-6" />;
      case 'loan': return <Landmark className="w-6 h-6" />;
      default: return null;
    }
  };

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Farmers First</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Why Partner With Us</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Our partnership guarantees growth, stability, and support for all our dairy farmers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 group border border-gray-100 hover:border-brand-green/30">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-sm text-brand-green mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-green group-hover:text-white">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;