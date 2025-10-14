import React, { useEffect, useRef, useState } from 'react';
import { mockData } from '../mock';

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
      const duration = 2000; // 2 seconds
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
    if (suffix === 'B+') {
      return num.toFixed(0);
    }
    if (suffix === '%') {
      return num.toFixed(1);
    }
    return Math.floor(num);
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-3" style={{ fontWeight: 300 }}>
                {formatNumber(counters[index], stat.suffix)}
                <span className="text-gray-400">{stat.suffix}</span>
              </div>
              <p className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
