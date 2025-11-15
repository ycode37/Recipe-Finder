import React from 'react';
import Herosection from '../components/Herosection';
import Featuresection from '../components/Featuresection';
import Aboutsection from '../components/Aboutsection';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div>
      <Herosection />
      <Featuresection />
      <Aboutsection />
      <Footer />
    </div>
  );
};

export default Homepage;
