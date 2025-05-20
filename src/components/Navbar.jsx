import React from 'react';
import logo from '../assets/images/iyerslogo.jpg';

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo and tagline on the left */}
      <div className="flex items-center gap-6">
        <img src={logo} alt="Iyer's Catering Logo" className="h-30 w-auto object-contain" />
        <span className="hidden md:inline text-base font-medium text-[color:var(--gold-primary)] whitespace-nowrap font-montserrat">
          Authentic | Home Made | Vegetarian
        </span>
      </div>
      {/* Links on the right */}
      <div className="hidden md:flex gap-8">
        <a href="#" style={{ color: 'var(--gold-primary)' }} className="text-lg font-black transition-colors font-montserrat relative group">Home
          <span className="block h-1 bg-[color:var(--gold-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full mt-1"></span>
        </a>
        <a href="#" style={{ color: 'var(--gold-primary)' }} className="text-lg font-black transition-colors font-montserrat relative group">About Us
          <span className="block h-1 bg-[color:var(--gold-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full mt-1"></span>
        </a>
        <a href="#" style={{ color: 'var(--gold-primary)' }} className="text-lg font-black transition-colors font-montserrat relative group">Menu
          <span className="block h-1 bg-[color:var(--gold-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full mt-1"></span>
        </a>
        <a href="#" style={{ color: 'var(--gold-primary)' }} className="text-lg font-black transition-colors font-montserrat relative group">Contact
          <span className="block h-1 bg-[color:var(--gold-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full mt-1"></span>
        </a>
      </div>
      {/* Mobile menu (optional: can add hamburger menu here later) */}
    </nav>
  );
};

export default Navbar;
