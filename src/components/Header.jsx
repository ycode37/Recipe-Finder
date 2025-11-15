import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full border-b border-gray-200 py-3 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between">
        {/* Logo - Left */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* DESKTOP NAV - Center Links */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {/* Links with underline animation */}
          {['Home', 'About', 'Recipes'].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              className="relative inline-block group font-medium text-gray-800"
            >
              {item}
              <span
                className="
                  absolute left-0 -bottom-1 h-[2px] bg-black 
                  w-0 block 
                  transition-all duration-300 
                  group-hover:w-full
                "
              ></span>
            </Link>
          ))}
        </nav>

        {/* Browse Recipes Button - Right (Desktop) */}
        <Link
          to="/recipes"
          className="
            hidden lg:inline-block
            px-4 py-2 rounded-full font-medium text-gray-800 
            border border-gray-300 
            hover:bg-gray-100 hover:border-gray-400 
            transition-all
          "
        >
          Browse Recipes
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label="toggle-mobile-menu"
          className="
            lg:hidden p-2 rounded-lg border border-gray-300 
            hover:bg-gray-100 hover:border-gray-400 
            transition-all
          "
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu - Conditional Rendering */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="max-w-[1200px] mx-auto px-5 py-6 flex flex-col items-center gap-6">
            {['Home', 'About', 'Recipes'].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase()}`}
                onClick={toggleMenu}
                className="
                  text-lg font-medium text-gray-800 
                  hover:text-black 
                  transition-colors
                "
              >
                {item}
              </Link>
            ))}
            <Link
              to="/recipes"
              onClick={toggleMenu}
              className="
                px-4 py-2 rounded-full font-medium text-gray-800 
                border border-gray-300 
                hover:bg-gray-100 hover:border-gray-400 
                transition-all
              "
            >
              Browse Recipes
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
