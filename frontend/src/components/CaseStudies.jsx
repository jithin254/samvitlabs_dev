import React from 'react';
import { ArrowRight } from 'lucide-react';
import { mockData } from '../mock';

const CaseStudies = () => {
  const { caseStudies, testimonials } = mockData;

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-6xl font-light tracking-tight mb-4 text-center"
          style={{ fontWeight: 300, letterSpacing: '-0.02em' }}
        >
          Success Stories
        </h2>
        <p className="text-xl text-gray-500 text-center mb-16 max-w-3xl mx-auto">
          Real results from real partnerships
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg hover:shadow-xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-light mb-3 group-hover:text-gray-600 transition-colors">
                {study.title}
              </h3>
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">
                {study.client}
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Challenge</p>
                  <p className="text-gray-700">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Result</p>
                  <p className="text-gray-900 font-medium">{study.result}</p>
                </div>
              </div>
              <div className="mt-6 flex items-center text-gray-400 group-hover:text-black transition-colors">
                <span className="text-sm mr-2">Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-10 rounded-lg max-w-4xl mx-auto"
            >
              <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-medium text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
