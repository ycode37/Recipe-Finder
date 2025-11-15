import React from 'react';
import familyimg from '../assets/family.png';

const Aboutsection = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Built For Real Life
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cooking should not be complicated. This comes under{' '}
              <span className="text-red-500 font-semibold">30 minutes</span> of
              active time, fit busy schedules, and taste just good enough to
              repeat.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you are new to the kitchen or just need fresh ideas, we've
              got you covered.
            </p>
          </div>

          {/* Image Content */}
          <div className="relative">
            <img
              src={familyimg}
              alt="Family cooking together"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
