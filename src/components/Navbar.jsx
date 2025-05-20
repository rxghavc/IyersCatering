import React from 'react';
import logo from '../assets/images/iyerslogo.jpg';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ onMenuClick }) => {
  return (
    <nav className="w-full flex flex-col" style={{ backgroundColor: '#e9e8e7' }}>
      <div className="flex items-center justify-between px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
        {/* Logo and tagline on the left, responsive */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 min-w-0">
          <img src={logo} alt="Iyer's Catering Logo" className="h-24 w-auto object-contain min-w-[40px]" />
          {/* Tagline: show on sm and up, hide on xs */}
          <span className="hidden sm:inline text-xs sm:text-sm md:text-base font-medium text-[color:var(--gold-primary)] whitespace-nowrap font-montserrat">
            Authentic | Home Made | Vegetarian
          </span>
        </div>
        {/* Links on the right (desktop) */}
        <ul className="hidden lg:flex gap-4 sm:gap-6 md:gap-8 nav-links">
          <li>
            <Link to="/" style={{ color: 'var(--gold-primary)' }} className="text-base sm:text-lg font-black font-montserrat relative group nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ color: 'var(--gold-primary)' }} className="text-base sm:text-lg font-black font-montserrat relative group nav-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/menu" style={{ color: 'var(--gold-primary)' }} className="text-base sm:text-lg font-black font-montserrat relative group nav-link">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ color: 'var(--gold-primary)' }} className="text-base sm:text-lg font-black font-montserrat relative group nav-link">
              Contact
            </Link>
          </li>
        </ul>
        {/* Hamburger menu icon (mobile/tablet) */}
        <button
          className="menu-toggle flex lg:hidden ml-2 p-0 bg-transparent border-none shadow-none outline-none focus:outline-none items-center justify-center"
          onClick={onMenuClick}
          aria-label="Open menu"
          style={{ color: 'var(--gold-primary)', background: 'none', border: 'none', boxShadow: 'none' }}
        >
          <FaBars size={28} />
        </button>
      </div>
      <div className="w-full h-1 bg-[color:var(--gold-primary)]" />
    </nav>
  );
};

export default Navbar;
