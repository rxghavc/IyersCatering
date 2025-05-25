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
    <section id="contact" className="py-20 bg-white">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-10 bg-white rounded-xl shadow-lg border p-8"
        style={{ borderColor: 'var(--gold-secondary)', boxShadow: '0 4px 6px var(--gold-secondary)' }}
      >
        {/* Info text on the left */}
        <div className="md:w-1/2 flex flex-col justify-center mb-8 md:mb-0 md:pr-8" style={{ fontFamily: 'Fira Code, monospace', color: '#111' }}>
          <p className="text-base md:text-lg mb-6 font-fira">
            Let us elevate your next event with our top-notch catering services. Reach out to us to discuss your catering needs and start planning an unforgettable experience.
          </p>
          <p className="text-base md:text-lg font-fira">
            For orders & enquiries, please contact Iyers at <span className="font-bold">07738904569</span> or <span className="font-bold">07488369652</span> or email us at <a href="mailto:contact@iyers.co.uk" className="underline hover:text-[var(--gold-secondary)]">contact@iyers.co.uk</a>
          </p>
        </div>
        {/* Contact form on the right */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-black md:text-center">Contact Us</h2>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="flex-1">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded border focus:outline-none transition-colors text-black bg-white border-gold-secondary"
                  style={{ background: '#fff', color: '#111', borderColor: 'var(--gold-secondary)' }}
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded border focus:outline-none transition-colors text-black bg-white border-gold-secondary"
                  style={{ background: '#fff', color: '#111', borderColor: 'var(--gold-secondary)' }}
                />
              </div>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded border focus:outline-none transition-colors text-black bg-white border-gold-secondary"
              style={{ background: '#fff', color: '#111', borderColor: 'var(--gold-secondary)' }}
            />
            <textarea
              name="message"
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="px-4 py-3 rounded border focus:outline-none transition-colors resize-none text-black bg-white border-gold-secondary"
              style={{ background: '#fff', color: '#111', borderColor: 'var(--gold-secondary)' }}
            />
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded bg-[var(--gold-secondary)] text-black font-semibold text-lg shadow hover:opacity-90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed border-none"
              style={{ background: 'var(--gold-secondary)', color: '#111', border: 'none' }}
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {result && (
            <div className="mt-4 text-center text-sm" style={{ color: result.includes('success') ? 'var(--gold-secondary)' : '#b91c1c' }}>
              {result}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
