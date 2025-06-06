import React from 'react';
import { FaUtensils, FaCalendarAlt, FaBriefcase, FaUsers, FaStar, FaTruck, FaListAlt, FaCoffee } from 'react-icons/fa';

const menuCards = [
  {
    icon: <FaCalendarAlt size={38} className="mb-3" />, // Event Catering
    title: 'Event Catering',
    desc: 'Custom catering packages for any occasion (Upanayanam, Seemantham, Baby Showers, Birthdays, House Warming, etc)',
  },
  {
    icon: <FaCoffee size={38} className="mb-3" />, // Weekday/Weekend Catering
    title: 'Weekday/Weekend Catering',
    desc: 'Celebrate with our exquisite catering options, available any day of the week.',
  },
  {
    icon: <FaBriefcase size={38} className="mb-3" />, // Corporate Catering
    title: 'Corporate Catering',
    desc: 'Professional catering services for your business needs.',
  },
  {
    icon: <FaUsers size={38} className="mb-3" />, // Private Parties
    title: 'Private Parties',
    desc: 'Create unforgettable memories with our private party catering services.',
  },
  {
    icon: <FaStar size={38} className="mb-3" />, // Special Events
    title: 'Special Events',
    desc: 'Tailored menus for special occasions and gatherings (Festive Events, Religious, New Year celebrations).',
  },
  {
    icon: <FaUtensils size={38} className="mb-3" />, // Breakfast/Brunch Buffet
    title: 'Breakfast / Brunch Buffet, Tiffin Options',
    desc: 'Perfect for events with a variety of tastes.',
  },
  {
    icon: <FaTruck size={38} className="mb-3" />, // Delivery Service
    title: 'Delivery Service',
    desc: 'Convenient delivery of our delicious dishes to your doorstep.',
  },
  {
    icon: <FaListAlt size={38} className="mb-3" />, // Custom Menus
    title: 'Custom Menus',
    desc: 'Personalized menus / thali’s to suit your specific preferences.',
  },
];

const Menu = () => (
  <section className="w-full max-w-4xl mx-auto px-4 py-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black font-montserrat text-center">Our Menu</h2>
    <div className="text-center text-lg text-gray-800 font-fira mb-8">
      <p>Explore our delicious range of authentic vegetarian Indian dishes, sweets, and savouries. We cater to all events and dietary needs. Please contact us for custom menus and pricing.</p>
    </div>
    <button
      className="btn-gold mt-6 mb-12"
      onClick={() => window.location.href = '/food'}
    >
      Explore Menu
    </button>
    {/* Responsive menu cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {menuCards.map((card, idx) => (
        <div
          key={`${card.title}-${idx}`}
          className="flex flex-col items-center justify-center text-center border-2 rounded-2xl bg-white p-8 shadow-sm transition-transform hover:scale-105 min-h-[260px]"
          style={{ borderColor: 'var(--gold-primary)' }}
        >
          <div className="flex items-start justify-center w-full" style={{ minHeight: 56, color: 'var(--gold-primary)' }}>
            {React.cloneElement(card.icon, { className: "mb-3 mx-auto", color: 'var(--gold-primary)' })}
          </div>
          <h3 className="text-xl font-bold font-montserrat mb-2" style={{ color: 'var(--gold-primary)' }}>
            {card.title}
          </h3>
          <p className="text-base font-fira text-gray-900">
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Menu;