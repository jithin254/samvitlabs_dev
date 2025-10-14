import React from 'react';
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

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-6xl font-light tracking-tight mb-4 text-center"
          style={{ fontWeight: 300, letterSpacing: '-0.02em' }}
        >
          Our Services
        </h2>
        <p className="text-xl text-gray-500 text-center mb-16 max-w-3xl mx-auto">
          Comprehensive AI solutions that transform your data into actionable intelligence
        </p>

        <Accordion type="single" collapsible className="space-y-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <AccordionItem 
                key={service.id} 
                value={service.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 transition-all duration-300 hover:shadow-lg"
              >
                <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                  <div className="flex items-center gap-6 text-left w-full">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-light mb-1">{service.title}</h3>
                      <p className="text-gray-500 text-sm">{service.shortDesc}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="pl-22 space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                      {service.fullDesc}
                    </p>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <ChevronRight className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-gray-700">
                        <span className="font-medium">Impact:</span> {service.benefits}
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
