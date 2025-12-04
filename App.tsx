import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import DairyChat from './components/DairyChat';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Products />
      </main>

      {/* Contact / Footer Section */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Brand Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">DEMKA<span className="text-brand-green">DAIRY</span></h3>
              <p className="text-sm leading-relaxed mb-4">
                Proudly serving Kenya with the freshest, high-quality dairy products for over a decade.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-brand-blue transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="hover:text-brand-blue transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="hover:text-brand-blue transition-colors"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Our Products</a></li>
                <li><a href="#partners" className="hover:text-white transition-colors">Farmer Partners</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-green flex-shrink-0" />
                  <span>Othaya, Nyeri County &<br/>Murang'a County, Kenya</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-green flex-shrink-0" />
                  <span>+254 723 734 158</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-green flex-shrink-0" />
                  <span>finance@demkadairy.co.ke</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Demka Dairy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* AI Chat Bot Component */}
      <DairyChat />
    </div>
  );
};

export default App;