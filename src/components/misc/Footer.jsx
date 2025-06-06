import React from 'react';

const socialLinks = [
  {
    href: 'https://www.facebook.com/iyerscatering4u',
    label: 'Facebook',
    svg: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="hover:opacity-80" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 2.1h-2.6c-2.7 0-4.3 1.5-4.3 4.1v1.8H7.1c-.3 0-.6.3-.6.6v2.5c0 .3.3.6.6.6h2.9v7.7c0 .3.3.6.6.6h2.7c.3 0 .6-.3.6-.6v-7.7h2.3c.3 0 .6-.3.6-.6l.1-2.5c0-.3-.3-.6-.6-.6h-2.4V6.4c0-.7.2-1 .9-1h1.6c.3 0 .6-.3.6-.6V2.7c0-.3-.3-.6-.6-.6z" fill="#bfa046"/>
      </svg>
    ),
  },
  {
    href: 'https://x.com/iyerscatering',
    label: 'Twitter',
    svg: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="hover:opacity-80" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.46 5.92c-.8.36-1.67.6-2.58.71a4.48 4.48 0 0 0 1.97-2.48 8.94 8.94 0 0 1-2.83 1.08A4.48 4.48 0 0 0 12 9.03c0 .35.04.7.11 1.03-3.73-.19-7.04-1.97-9.25-4.68a4.48 4.48 0 0 0-.6 2.26c0 1.56.8 2.94 2.02 3.75-.74-.02-1.44-.23-2.05-.57v.06c0 2.18 1.55 4 3.6 4.41-.38.1-.78.16-1.2.16-.29 0-.57-.03-.84-.08.57 1.77 2.23 3.06 4.2 3.1A8.98 8.98 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.7 12.7 0 0 0 8.29 21.9c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54.8-.58 1.5-1.3 2.05-2.13z" fill="#bfa046"/>
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/iyers_catering',
    label: 'Instagram',
    svg: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="hover:opacity-80" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="6" fill="none" stroke="#bfa046" strokeWidth="2"/>
        <circle cx="12" cy="12" r="5" fill="none" stroke="#bfa046" strokeWidth="2"/>
        <circle cx="17.5" cy="6.5" r="1.5" fill="#bfa046"/>
      </svg>
    ),
  },
  {
    href: 'https://www.youtube.com/@IyersCatering',
    label: 'YouTube',
    svg: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="hover:opacity-80" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="6" width="20" height="12" rx="4" fill="none" stroke="#bfa046" strokeWidth="2"/>
        <polygon points="10,9 16,12 10,15" fill="#bfa046"/>
      </svg>
    ),
  },
];

const Footer = () => (
  <footer className="w-full py-10 px-4 bg-white mt-12">
    <div className="max-w-7xl mx-auto flex flex-col gap-2">
      <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between gap-4">
        {/* Nav links left, icons right, stacked on mobile */}
        <nav className="flex flex-row flex-wrap gap-4 justify-center sm:justify-start w-full sm:w-auto mb-2 sm:mb-0">
          <a href="/" className="nav-link font-fira text-base font-normal">Home</a>
          <a href="/about" className="nav-link font-fira text-base font-normal">About</a>
          <a href="/menu" className="nav-link font-fira text-base font-normal">Menu</a>
          <a href="/contact" className="nav-link font-fira text-base font-normal">Contact</a>
        </nav>
        <div className="flex flex-row gap-3 justify-center sm:justify-end w-full sm:w-auto">
          {socialLinks.map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="transition-transform hover:scale-110">
              {link.svg}
            </a>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center sm:justify-start">
        <span className="text-base font-fira font-medium tracking-wide mt-4" style={{ color: '#bfa046' }}>@ 2025 IYERS</span>
        </div>
    </div>
  </footer>
);

export default Footer;
