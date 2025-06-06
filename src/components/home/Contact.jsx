import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setResult(res.ok ? 'Message sent successfully!' : (data.error || 'Failed to send message.'));
      if (res.ok) setForm({ firstName: '', lastName: '', email: '', message: '' });
    } catch (err) {
      setResult('Something went wrong. Please try again later.');
    }
    setSubmitting(false);
  };

  React.useEffect(() => {
    if (result) {
      const timer = setTimeout(() => setResult(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  return (
    <>
      {/* Top SVG tilt triangle divider */}
      <div className="w-full hidden md:block" style={{ lineHeight: 0, background: '#e9e8e7' }}>
        <svg
          width="100%"
          height="100"
          viewBox="0 0 100 8"
          preserveAspectRatio="none"
          style={{ display: 'block' }}
        >
          <polygon points="0,0 100,0 0,8" fill="#fff" />
        </svg>
      </div>
      {/* Contact section content */}
      <section id="contact" className="py-32 bg-[#e9e8e7]">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">Contact Us Today</h2>
          <p className="text-base md:text-lg mb-4 text-black font-fira max-w-3xl mx-auto" style={{ lineHeight: 1.7 }}>
            Let us elevate your next event with our top-notch catering services. Reach out to us to discuss your catering needs and start planning an unforgettable experience.
          </p>
          <a
            href="/contact"
            className="btn-gold px-6 py-2 rounded font-semibold text-base md:text-lg shadow hover:opacity-90 transition-colors mt-2"
            style={{ background: '#bfa046', color: '#111', border: 'none' }}
          >
            Get in Touch
          </a>
        </div>
      </section>
      {/* Bottom SVG tilt triangle divider */}
      <div className="w-full hidden md:block" style={{ lineHeight: 0, background: '#e9e8e7' }}>
        <svg
          width="100%"
          height="100"
          viewBox="0 0 100 8"
          preserveAspectRatio="none"
          style={{ display: 'block' }}
        >
          <polygon points="0,8 100,8 100,0" fill="#fff" />
        </svg>
      </div>
    </>
  );
}
