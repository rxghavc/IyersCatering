import React from 'react';
import foodHygieneImg from '../../assets/images/foodhygienerating.jpeg';

const AboutMain = () => (
  <section className="w-full flex flex-col items-center justify-center px-4 py-4 bg-white relative">
    <div className="max-w-3xl w-full mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black font-montserrat text-center">About Us</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-8 mt-4">
        <p className="text-base md:text-lg text-gray-900 font-fira text-justify md:text-left">
          Iyers Catering specialises in authentic, homemade vegetarian Indian food for all kinds of events. We are officially registered with the Royal Borough of Windsor and Maidenhead Council and have a 5 Star Food Hygiene Rating.
        </p>
        <img
          src={foodHygieneImg}
          alt="5 Star Food Hygiene Rating"
          className="w-2/3 md:w-1/3 max-w-xs h-auto rounded shadow border border-gray-200 mx-auto md:mx-0"
        />
      </div>
      
      <p className="text-base md:text-lg text-gray-900 font-fira mb-6">
        Our Head Chef, Akila started catering from home as a hobby in 2014, and she has since then been catering for several events, birthdays, functions & occasions. Akila is very talented with skills, attentive and makes sure that customer’s order is taken care of and delivered on time. Since inception, she has had a good customer base over the last 10 years and felt the need to expand this service more broadly under the banner of Iyers.
      </p>
      <h3 className="text-2xl font-bold mt-10 mb-4 text-black font-montserrat text-center">Our Commitment</h3>
      <p className="text-base md:text-lg text-gray-900 font-fira mb-6">
        We take great pride in stating that our food is prepared with great care and attention to detail, ensuring that every food item is bursting in flavour.  We only use the freshest ingredients and take great care in our cooking techniques, resulting in dishes that are both healthy and delicious. We are passionate about our customer needs to ensure customer satisfaction.
      </p>
      <h3 className="text-2xl font-bold mt-10 mb-4 text-black font-montserrat text-center">Why choose us?</h3>
      <ul className="text-base md:text-lg text-gray-900 font-fira mb-8 text-left max-w-xl mx-auto list-disc list-inside">
        <li>High quality vegetarian catering services</li>
        <li>Catered according to customer needs & dietary requirements</li>
        <li>Variety of food choices including sweets & savouries</li>
        <li>Authentic Homemade and Vegetarian</li>
        <li>5 Star Food Hygiene Rating</li>
        <li>Excellent Customer Satisfaction</li>
        <li>Delivery options available</li>
      </ul>
    </div>
  </section>
);

export default AboutMain;
