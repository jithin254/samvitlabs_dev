import React from 'react';
import { ChevronDown } from 'lucide-react';
import { mockData } from '../mock';

const Hero = ({ scrollY }) => {
  const { hero } = mockData;
  const rotation = scrollY * 0.2;

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background graphic */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ transform: `rotate(${rotation}deg)`, opacity: 0.05 }}
      >
        <div className="w-[600px] h-[600px] border-[60px] border-black rounded-full" />
        <div className="absolute w-[400px] h-[400px] border-[40px] border-black rounded-full" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1 
          className="text-8xl md:text-9xl font-light tracking-tight mb-6 animate-fadeInUp"
          style={{ fontWeight: 300, letterSpacing: '-0.02em' }}
        >
          {hero.title}
        </h1>
        <p 
          className="text-3xl md:text-4xl font-light text-gray-600 mb-4 animate-fadeInUp"
          style={{ animationDelay: '0.2s' }}
        >
          {hero.subtitle}
        </p>
        <p 
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto animate-fadeInUp"
          style={{ animationDelay: '0.4s' }}
        >
          {hero.description}
        </p>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to services"
      >
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;
