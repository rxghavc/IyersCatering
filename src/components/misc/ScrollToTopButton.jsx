import React, { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center shadow-lg transition-opacity duration-300 text-2xl border ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{
        boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
        background: '#fff',
        border: '2px solid #bfa046',
        color: '#bfa046',
        borderRadius: '50%',
        padding: 0,
        outline: 'none',
      }}
      onMouseOver={e => {
        e.currentTarget.style.background = '#bfa046';
        e.currentTarget.style.border = '2px solid #bfa046';
        const svg = e.currentTarget.querySelector('svg path');
        if (svg) svg.setAttribute('stroke', '#111');
      }}
      onMouseOut={e => {
        e.currentTarget.style.background = '#fff';
        e.currentTarget.style.border = '2px solid #bfa046';
        const svg = e.currentTarget.querySelector('svg path');
        if (svg) svg.setAttribute('stroke', '#bfa046');
      }}
      onFocus={e => {
        e.currentTarget.style.outline = '2px solid #bfa046';
      }}
      onBlur={e => {
        e.currentTarget.style.outline = 'none';
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19V5M12 5L6 11M12 5L18 11" stroke="#bfa046" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}
