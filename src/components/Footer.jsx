import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 bg-white py-6 mt-10">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - Brand */}
        <p className="text-gray-700 font-medium">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </p>

        {/* Center - Navigation */}
        <div className="flex gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-black transition">
            About
          </Link>
          <Link to="/recipes" className="hover:text-black transition">
            Recipes
          </Link>
          <Link to="/contact" className="hover:text-black transition">
            Contact
          </Link>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-4">
          <a href="#" className="text-gray-600 hover:text-black transition">
            Instagram
          </a>
          <a href="#" className="text-gray-600 hover:text-black transition">
            Twitter
          </a>
          <a href="#" className="text-gray-600 hover:text-black transition">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
