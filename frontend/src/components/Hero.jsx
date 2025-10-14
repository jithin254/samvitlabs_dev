import React from 'react';
import { ChevronDown } from 'lucide-react';
import { mockData } from '../mock';

const Hero = ({ scrollY }) => {
  const { hero } = mockData;
  const rotation = scrollY * 0.15;
  const parallaxY = scrollY * 0.5;

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Animated geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large rotating rings */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
        >
          <div className="w-[800px] h-[800px] border-[2px] border-gray-200 rounded-full opacity-40" />
        </div>
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ transform: `translate(-50%, -50%) rotate(${-rotation * 0.7}deg)` }}
        >
          <div className="w-[600px] h-[600px] border-[2px] border-gray-300 rounded-full opacity-30" />
        </div>
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ transform: `translate(-50%, -50%) rotate(${rotation * 1.3}deg)` }}
        >
          <div className="w-[400px] h-[400px] border-[3px] border-black rounded-full opacity-10" />
        </div>

        {/* Floating gradient orbs */}
        <div 
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"
          style={{ transform: `translateY(${parallaxY * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-pink-100 to-orange-100 rounded-full blur-3xl opacity-25"
          style={{ transform: `translateY(${-parallaxY * 0.4}px)` }}
        />
        <div 
          className="absolute top-1/3 left-1/4 w-48 h-48 bg-gradient-to-br from-green-100 to-teal-100 rounded-full blur-3xl opacity-20"
          style={{ transform: `translateY(${parallaxY * 0.2}px)` }}
        />

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl">
        <div className="mb-6 animate-fadeInUp">
          <span className="inline-block px-6 py-2 bg-black text-white text-sm uppercase tracking-wider rounded-full mb-8">
            AI Excellence
          </span>
        </div>
        
        <h1 
          className="text-8xl md:text-9xl font-bold tracking-tight mb-6 animate-fadeInUp bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent"
          style={{ animationDelay: '0.1s', fontWeight: 700, letterSpacing: '-0.03em' }}
        >
          {hero.title}
        </h1>
        
        <p 
          className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6 animate-fadeInUp"
          style={{ animationDelay: '0.2s', fontWeight: 600 }}
        >
          {hero.subtitle}
        </p>
        
        <p 
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fadeInUp"
          style={{ animationDelay: '0.3s', fontWeight: 400 }}
        >
          {hero.description}
        </p>

        <div 
          className="mt-12 flex gap-4 justify-center animate-fadeInUp"
          style={{ animationDelay: '0.4s' }}
        >
          <button
            onClick={scrollToServices}
            className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Explore Services
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group"
        aria-label="Scroll to services"
      >
        <ChevronDown className="w-10 h-10 text-gray-400 group-hover:text-black transition-colors" />
      </button>
    </section>
  );
};

export default Hero;
