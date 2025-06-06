import React, { useState } from 'react';

const ContactSection = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('Thank you for contacting us! We will get back to you soon.');
        setForm({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  return (
    <section className="w-full max-w-xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black font-montserrat text-center">Contact Us</h2>
      <form className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4" onSubmit={handleSubmit}>
        <label htmlFor="firstName" className="text-black font-montserrat text-base font-semibold">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="Your First Name"
          required
          className="border border-gray-300 rounded-lg px-4 py-2 font-fira text-lg text-black focus:outline-none focus:ring-2 placeholder-gray-400"
          style={{ '--tw-ring-color': 'var(--gold-primary)' }}
        />
        <label htmlFor="lastName" className="text-black font-montserrat text-base font-semibold">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Your Last Name"
          required
          className="border border-gray-300 rounded-lg px-4 py-2 font-fira text-lg text-black focus:outline-none focus:ring-2 placeholder-gray-400"
          style={{ '--tw-ring-color': 'var(--gold-primary)' }}
        />
        <label htmlFor="email" className="text-black font-montserrat text-base font-semibold">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="border border-gray-300 rounded-lg px-4 py-2 font-fira text-lg text-black focus:outline-none focus:ring-2 placeholder-gray-400"
          style={{ '--tw-ring-color': 'var(--gold-primary)' }}
        />
        <label htmlFor="message" className="text-black font-montserrat text-base font-semibold">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={4}
          className="border border-gray-300 rounded-lg px-4 py-2 font-fira text-lg text-black focus:outline-none focus:ring-2 placeholder-gray-400"
          style={{ '--tw-ring-color': 'var(--gold-primary)' }}
        />
        <button
          type="submit"
          disabled={loading}
          className="btn-gold font-montserrat text-lg rounded-lg py-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {status && <div className="text-center font-semibold mt-2" style={{ color: 'var(--gold-primary)' }}>{status}</div>}
      </form>
    </section>
  );
};

export default ContactSection;

