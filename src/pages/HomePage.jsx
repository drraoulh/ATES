import React from 'react';
import Hero from '../components/Hero';
import EneoPartner from '../components/EneoPartner';
import Services from '../components/Services';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <EneoPartner />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
    </div>
  );
}
