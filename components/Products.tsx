import React, { useState } from 'react';
import { ProductItem } from '../types';

const products: ProductItem[] = [
  {
    id: 'y1',
    name: 'Gracies Yoghurt',
    category: 'Yoghurt',
    description: 'Thick, creamy, and Deliciously Yummy. Available in multiple flavors and sizes.',
    flavors: ['Vanilla', 'Strawberry', 'Passion', 'Lemon Biscuit', 'Chocolate'],
    image: '/images/Yoghurt.png'
  },
  {
    id: 'm1',
    name: 'Gracies Lala',
    category: 'Milk',
    description: 'Rich Buttermilk. Smooth, nutritious, and perfect for digestion (500ml).',
    image: '/images/Mala.png'
  },
  {
    id: 'c1',
    name: 'Mozzarella Cheese',
    category: 'Cheese',
    description: 'Freshly Crafted in Kenya. Perfect stretch for your favorite pizzas.',
    image: '/images/Mozzarella Cheese.jpeg'
  },
  {
    id: 'c2',
    name: 'Paneer Cheese',
    category: 'Cheese',
    description: 'Premium quality Paneer. ideal for cooking and grilling.',
    image: '/images/Paneer Cheese.jpeg'
  },
  {
    id: 'c3',
    name: 'Feta Cheese',
    category: 'Cheese',
    description: 'Classic crumbly Feta. Freshly crafted for salads and savory dishes.',
    image: '/images/Feta Cheese.jpeg'
  },
  {
    id: 'c4',
    name: 'Mild Cheddar',
    category: 'Cheese',
    description: 'A smooth, mild cheddar cheese. A family favorite.',
    image: '/images/Cheddar Cheese.jpeg'
  },
  {
    id: 'm2',
    name: 'Fresh Whole Milk',
    category: 'Milk',
    description: 'Pasteurized and Homogenized. Farm fresh nutrition in every drop.',
    image: '/images/Pasteurized 5L.png'
  },
];

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Yoghurt', 'Cheese', 'Milk'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-red font-bold tracking-wider uppercase text-sm">Our Shop</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-white">Deliciously Yummy Products</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            From our famous Gracies Yoghurt to our freshly crafted cheeses, explore our premium range.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-brand-red text-white shadow-lg scale-105' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-gray-800 rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 bg-white/90 text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                
                {product.flavors && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {product.flavors.map(flavor => (
                      <span key={flavor} className="text-xs bg-gray-700  px-2 py-1 rounded-md border border-gray-600">
                        {flavor}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;