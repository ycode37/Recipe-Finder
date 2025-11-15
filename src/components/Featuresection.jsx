import React from 'react';
import { Clock, ChefHat, Heart, BookOpen } from 'lucide-react';

const Featuresection = () => {
  const features = [
    {
      image:
        'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <Clock className="w-6 h-6" />,
      title: 'Quick & Easy',
      description:
        'All recipes ready in under 30 minutes, perfect for busy weeknights and hectic schedules.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1064&auto=format&fit=crop',
      icon: <ChefHat className="w-6 h-6" />,
      title: 'Step-by-Step Guide',
      description:
        'Clear instructions with photos to guide you through every step of the cooking process.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1064&auto=format&fit=crop',
      icon: <Heart className="w-6 h-6" />,
      title: 'Nutritious & Delicious',
      description:
        "Healthy ingredients that don't compromise on flavor. Good food that's good for you.",
    },
    {
      image:
        'https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1064&auto=format&fit=crop',
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Beginner Friendly',
      description:
        'No fancy techniques or hard-to-find ingredients. Just simple, approachable cooking.',
    },
  ];

  return (
    <div className="bg-white py-16 px-6 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What You'll Get
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to cook confidently and enjoy delicious meals
            every day
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Icon Badge */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-500 shadow-lg">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featuresection;
