import React, { useEffect, useRef, useState } from 'react';
import { Database, Tag, Brain, Rocket, ChevronRight } from 'lucide-react';
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
    <section id="services" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-gray-100 text-gray-700 text-sm uppercase tracking-wider rounded-full mb-6">
            Our Services
          </span>
          <h2 
            className="text-6xl md:text-7xl font-bold tracking-tight mb-6"
            style={{ fontWeight: 700, letterSpacing: '-0.03em' }}
          >
            Comprehensive AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your data into actionable intelligence with our end-to-end AI services
          </p>
        </div>

        <Accordion type="single" value={openItem} onValueChange={setOpenItem} className="space-y-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <AccordionItem 
                key={service.id} 
                value={service.id}
                ref={(el) => (serviceRefs.current[index] = el)}
                data-service-id={service.id}
                className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-gray-400 transition-all duration-500 hover:shadow-2xl"
              >
                <AccordionTrigger className="px-10 py-8 hover:no-underline group data-[state=open]:bg-gray-50">
                  <div className="flex items-center gap-6 text-left w-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center group-hover:from-black group-hover:to-gray-800 group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:scale-110">
                      <Icon className="w-9 h-9" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-2" style={{ fontWeight: 700 }}>{service.title}</h3>
                      <p className="text-gray-500 text-base">{service.shortDesc}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-10 pb-10">
                  <div className="pl-26 space-y-8 mt-4">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {service.fullDesc}
                    </p>
                    
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-gray-900">Key Features</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <ChevronRight className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl border-l-4 border-black">
                      <p className="text-gray-800 text-lg">
                        <span className="font-bold text-black">Impact:</span> {service.benefits}
                      </p>
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
