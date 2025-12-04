import React from 'react';
import { Users, Store, Award } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-20 bg-gradient-to-br from-brand-blue/5 to-brand-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-purple font-bold tracking-wider uppercase text-sm">Our Presence</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">In Stores & Communities</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From local markets to major retailers, Gracies products are loved by communities across Kenya.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-brand-green/20">
            <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-brand-green" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">5,000+</h3>
            <p className="text-gray-600">Partnered Farmers</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-brand-blue/20">
            <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Store className="w-8 h-8 text-brand-blue" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">100+</h3>
            <p className="text-gray-600">Retail Locations</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-brand-red/20">
            <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">14+</h3>
            <p className="text-gray-600">Years of Excellence</p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/images/02.jpeg"
              alt="Gracies Yoghurt in Retail Stores"
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Nationwide Distribution</h3>
                <p className="text-gray-200">Available in supermarkets and stores across Kenya</p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/images/09.jpeg"
              alt="Gracies Yoghurt Community Events"
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Community Events</h3>
                <p className="text-gray-200">Engaging with our customers at local markets and events</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
