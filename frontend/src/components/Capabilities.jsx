import React, { useEffect, useRef, useState } from 'react';
import { mockData } from '../mock';

const Capabilities = () => {
  const { capabilities } = mockData;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-6xl font-light tracking-tight mb-4 text-center"
          style={{ fontWeight: 300, letterSpacing: '-0.02em' }}
        >
          Technical Capabilities
        </h2>
        <p className="text-xl text-gray-500 text-center mb-16 max-w-3xl mx-auto">
          World-class expertise across industries, technologies, and AI disciplines
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-2xl font-light mb-6 pb-3 border-b border-gray-300">
                {capability.title}
              </h3>
              <ul className="space-y-3">
                {capability.items.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="text-gray-600 hover:text-black transition-colors duration-200 cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
