import React from 'react';
import { Users, Award, ShoppingBag, Tractor } from 'lucide-react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { label: 'Employees', value: '300', icon: 'users' },
  { label: 'Awards Won', value: '10', icon: 'award' },
  { label: 'Customers', value: '500', icon: 'shop' },
  { label: 'Farmers', value: '5,000', icon: 'tractor' },
];

const Stats: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'users': return <Users className="w-8 h-8" />;
      case 'award': return <Award className="w-8 h-8" />;
      case 'shop': return <ShoppingBag className="w-8 h-8" />;
      case 'tractor': return <Tractor className="w-8 h-8" />;
      default: return null;
    }
  };

  return (
    <section className="py-12 bg-white relative -mt-16 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-widest">Our Achievement</h2>
            <div className="w-16 h-1 bg-brand-green mx-auto mt-2 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="bg-blue-50 p-4 rounded-full text-brand-blue mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  {getIcon(stat.icon)}
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-500 font-medium uppercase text-sm tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;