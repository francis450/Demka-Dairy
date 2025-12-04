import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative">
             {/* Decorative blob background */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-brand-green/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-brand-blue/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            
            <div className="relative grid grid-cols-2 gap-4">
              <img src="public\images\01.jpeg" alt="Demka Dairy Event Tent" className="rounded-2xl shadow-lg transform translate-y-8 object-cover h-full w-full" />
              <img src="public\images\08.jpeg" alt="Staff Serving Customers" className="rounded-2xl shadow-lg object-cover h-full w-full" />
            </div>
          </div>

          <div>
            <span className="text-brand-green font-bold tracking-wider uppercase text-sm">Who We Are</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Demka Dairy
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Demka Dairy, a leading milk processor based in <span className="text-brand-blue font-semibold">Nyeri</span> and <span className="text-brand-blue font-semibold">Murang'a</span> counties, has been proudly serving the community for over a decade. We take pride in our rich heritage of producing premium-quality products.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Every day, we partner with over <span className="font-bold text-gray-800">5,000 dedicated farmers</span> to source fresh raw milk, which we expertly process into a variety of high-quality dairy products, including yoghurt, cheese, butter, and mala.
            </p>
            
            <div className="flex flex-wrap gap-4">
                <div className="bg-white border-l-4 border-brand-purple p-4 shadow-sm w-full sm:w-auto">
                    <p className="font-bold text-gray-800">Premium Quality</p>
                    <p className="text-sm text-gray-500">Deliciously Yummy Products</p>
                </div>
                <div className="bg-white border-l-4 border-brand-red p-4 shadow-sm w-full sm:w-auto">
                    <p className="font-bold text-gray-800">Community Heritage</p>
                    <p className="text-sm text-gray-500">Processing with Love</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;