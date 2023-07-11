import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-700 py-3 sticky top-0">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-white font-bold text-lg">
          {/* Add your logo here */}
          <span>Medical Website</span>
        </div>
        <button
          className="text-white focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="heroicon-ui"
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <ul
          className={`md:flex md:items-center hidden space-x-4 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <li>
            <a
              className="text-white hover:text-blue-100"
              href="#home"
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-white hover:text-blue-100"
              href="#about"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-white hover:text-blue-100"
              href="#services"
              onClick={toggleMenu}
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="text-white hover:text-blue-100"
              href="#contact"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
