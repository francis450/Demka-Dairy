import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Dairy Farm Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-green/80 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="sm:max-w-2xl">
          <div className="inline-block px-4 py-1 mb-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
            <span className="text-white font-semibold tracking-wider text-sm uppercase">Since 2011</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Deliciously <span className="text-brand-red bg-white px-2 transform -skew-x-6 inline-block">Yummy</span> <br/>
            Dairy Products
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 mb-8 font-light">
            Processed with love in Nyeri & Murang'a. We partner with over 5,000 farmers to bring nature's best straight to your table.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a href="#products" className="group bg-white text-brand-blue px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
              Our Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#partners" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center">
              Partner With Us
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;