import React, { useEffect, useRef, useState } from 'react';
import { Database, Tag, Brain, Rocket, ChevronRight, Zap } from 'lucide-react';
import { mockData } from '../mock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const iconMap = {
  database: Database,
  tag: Tag,
  brain: Brain,
  rocket: Rocket
};

const gradients = [
  'from-cyan-500 to-blue-600',
  'from-purple-500 to-pink-600',
  'from-orange-500 to-red-600',
  'from-green-500 to-teal-600'
];

const Services = () => {
  const { services } = mockData;
  const [openItem, setOpenItem] = useState('');
  const serviceRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const serviceId = entry.target.getAttribute('data-service-id');
          if (serviceId) {
            setOpenItem(serviceId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      serviceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="services" className="relative py-32 px-6 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 text-cyan-400 text-sm font-semibold uppercase tracking-wider rounded-full mb-8 animate-fadeInUp">
            <Zap className="w-4 h-4" />
            Our Services
          </div>
          <h2 
            className="text-6xl md:text-7xl font-black tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 animate-fadeInUp"
            style={{ animationDelay: '0.1s' }}
          >
            Comprehensive AI Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Transform your data into actionable intelligence with our end-to-end AI services
          </p>
        </div>

        <Accordion type="single" value={openItem} onValueChange={setOpenItem} className="space-y-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const gradient = gradients[index % gradients.length];
            
            return (
              <AccordionItem 
                key={service.id} 
                value={service.id}
                ref={(el) => (serviceRefs.current[index] = el)}
                data-service-id={service.id}
                className="relative backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 group"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <AccordionTrigger className="relative px-10 py-8 hover:no-underline data-[state=open]:bg-white/5">
                  <div className="flex items-center gap-6 text-left w-full">
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                      <Icon className="w-10 h-10 text-white" />
                      <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-black text-white mb-2">{service.title}</h3>
                      <p className="text-gray-400 text-base font-medium">{service.shortDesc}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-10 pb-10">
                  <div className="pl-26 space-y-8 mt-6">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {service.fullDesc}
                    </p>
                    
                    <div>
                      <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                        <div className={`w-1 h-6 bg-gradient-to-b ${gradient} rounded-full`} />
                        Key Features
                      </h4>
                      <ul className="space-y-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 group/item">
                            <ChevronRight className={`w-5 h-5 text-cyan-400 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform`} />
                            <span className="text-gray-400 leading-relaxed group-hover/item:text-gray-300 transition-colors">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`relative bg-gradient-to-r ${gradient} p-[2px] rounded-2xl overflow-hidden`}>
                      <div className="bg-gray-900/90 backdrop-blur-xl p-8 rounded-2xl">
                        <p className="text-gray-200 text-lg">
                          <span className="font-black text-white">Impact:</span> {service.benefits}
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default Services;
