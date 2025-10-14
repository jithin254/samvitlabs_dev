import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { mockData } from '../mock';

const Hero = ({ scrollY }) => {
  const { hero } = mockData;
  const parallaxY = scrollY * 0.5;

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-gradient-shift" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse-slow"
          style={{ transform: `translateY(${parallaxY * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-purple-400 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse-slow"
          style={{ transform: `translateY(${-parallaxY * 0.4}px)`, animationDelay: '1s' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-teal-400 to-green-500 rounded-full blur-3xl opacity-15 animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-6xl">
        <div className="mb-8 animate-fadeInUp">
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white text-sm font-medium uppercase tracking-wider rounded-full shadow-lg hover:bg-white/20 transition-all duration-300">
            <Sparkles className="w-4 h-4" />
            AI Excellence Redefined
          </span>
        </div>
        
        <h1 
          className="text-7xl md:text-9xl font-black tracking-tight mb-6 animate-fadeInUp"
          style={{ 
            animationDelay: '0.1s',
            background: 'linear-gradient(to right, #ffffff, #e0e7ff, #c7d2fe)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {hero.title}
        </h1>
        
        <p 
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-6 animate-fadeInUp"
          style={{ animationDelay: '0.2s' }}
        >
          {hero.subtitle}
        </p>
        
        <p 
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fadeInUp"
          style={{ animationDelay: '0.3s' }}
        >
          {hero.description}
        </p>

        <div 
          className="mt-12 flex gap-6 justify-center animate-fadeInUp"
          style={{ animationDelay: '0.4s' }}
        >
          <button
            onClick={scrollToServices}
            className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
          >
            <span className="relative z-10">Explore Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 border-2 border-white/30 backdrop-blur-sm text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Get Started
          </button>
        </div>

        {/* Floating stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          {[
            { value: '150+', label: 'AI Models' },
            { value: '2B+', label: 'Data Points' },
            { value: '96.5%', label: 'Accuracy' },
            { value: '94%', label: 'Satisfaction' }
          ].map((stat, i) => (
            <div key={i} className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer group"
        aria-label="Scroll to services"
      >
        <div className="animate-bounce">
          <ChevronDown className="w-12 h-12 text-white/50 group-hover:text-white transition-colors" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
