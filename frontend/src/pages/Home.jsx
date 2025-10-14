import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Capabilities from '../components/Capabilities';
import Stats from '../components/Stats';
import CaseStudies from '../components/CaseStudies';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white">
      <Hero scrollY={scrollY} />
      <Services />
      <Capabilities />
      <Stats />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
