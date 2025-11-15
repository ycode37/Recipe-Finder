import React from 'react';
import { Users, Target, Heart, Award } from 'lucide-react';

const Aboutpage = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: '10K+',
      label: 'Happy Home Cooks',
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: '500+',
      label: 'Tested Recipes',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: '95%',
      label: 'Success Rate',
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: '4.8/5',
      label: 'Average Rating',
    },
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Simplicity First',
      description:
        'We believe cooking should be straightforward and enjoyable, not overwhelming or complex.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community Driven',
      description:
        'Built by home cooks, for home cooks. We listen to your feedback and grow together.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Quality Focused',
      description:
        'Every recipe is tested multiple times to ensure it works perfectly in your kitchen.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Health Conscious',
      description:
        'Nutritious ingredients and balanced meals that fuel your body and delight your taste buds.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            We believe that healthy eating should not be complicated, time
            consuming or boring. Our goal is to make nutritious cooking
            accessible to everyone.
          </p>
        </div>
      </section>

      {/* Stats & Image Section */}
      <section className="py-16 px-6 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center text-orange-500 mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Fresh healthy ingredients"
              className="w-full h-[400px] lg:h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-50 py-16 px-6 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutpage;
