import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../assets/herosection.webp';

const Herosection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content - Left Side */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Healthy Options, <br className="hidden md:block" />
              No Fuss
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover eight quick, whole food recipes that you can cook tonight
              - no processed junk, no guesswork
            </p>

            <Link to="/recipes">
              <button
                className="
                px-8 py-3 rounded-full font-medium text-white
                bg-gray-900 
                hover:bg-gray-800 
                transition-all duration-300
                shadow-lg hover:shadow-xl
                transform hover:-translate-y-0.5
              "
              >
                Start Exploring
              </button>
            </Link>
          </div>

          {/* Image - Right Side */}
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={pic}
                alt="Healthy food recipe"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
