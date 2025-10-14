import React, { useEffect, useRef, useState } from 'react';
import { mockData } from '../mock';
import { TrendingUp, Award, Database, Users } from 'lucide-react';

const icons = [Database, TrendingUp, Award, Users];

const Stats = () => {
  const { stats } = mockData;
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;
      let step = 0;

      return setInterval(() => {
        if (step < steps) {
          current += increment;
          step++;
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = current;
            return newCounters;
          });
        } else {
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = stat.value;
            return newCounters;
          });
        }
      }, duration / steps);
    });

    return () => intervals.forEach(clearInterval);
  }, [isVisible, stats]);

  const formatNumber = (num, suffix) => {
    if (suffix === 'M+') {
      return num.toFixed(0);
    }
    if (suffix === '%') {
      return num.toFixed(1);
    }
    return Math.floor(num);
  };

  return (
    <section ref={sectionRef} className="relative py-32 px-6 bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index} 
                className="group relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-3xl transition-all duration-500" />
                
                <div className="relative">
                  <Icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                  <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-2">
                    {formatNumber(counters[index], stat.suffix)}
                    <span className="text-cyan-400">{stat.suffix}</span>
                  </div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
