import React from 'react';
import ContactCarosel from '../components/contact/ContactCarosel';
import ContactSection from '../components/contact/ContactSection..jsx';
import ScrollToTopButton from '../components/misc/ScrollToTopButton';
import Footer from '../components/misc/Footer';

const Contact = () => (
  <>
    <ContactCarosel />
    <ContactSection />
    <ScrollToTopButton />
    <Footer />
  </>
);

export default Contact;