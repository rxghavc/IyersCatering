import React from 'react';

const Sidebar = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed top-0 right-0 h-full w-64 max-w-[80vw] bg-white shadow-lg p-8 flex flex-col gap-8 z-50 animate-slide-in-left">
      <button className="self-end mb-4 text-2xl bg-transparent border-none p-0" onClick={onClose} aria-label="Close menu">&times;</button>
      <a href="#" style={{ color: 'var(--gold-primary)' }} className="text-lg font-black font-montserrat nav-link" onClick={onClose}>Home</a>
      <a href="#" style={{ color: 'var(--gold-primary)' }} className="text-lg font-black font-montserrat nav-link" onClick={onClose}>About Us</a>
      <a href="#" style={{ color: 'var(--gold-primary)' }} className="text-lg font-black font-montserrat nav-link" onClick={onClose}>Menu</a>
      <a href="#" style={{ color: 'var(--gold-primary)' }} className="text-lg font-black font-montserrat nav-link" onClick={onClose}>Contact</a>
    </div>
  );
};

export default Sidebar;
