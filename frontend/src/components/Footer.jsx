import React from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gray-950 text-white py-20 px-6 border-t border-white/10 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Samvit Labs
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              End-to-end AI solutions from data to deployment.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-gray-400 font-bold">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block">
                  Data Collection
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block">
                  Data Labelling
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block">
                  Model Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block">
                  Model Deployment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-gray-400 font-bold">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-gray-400 font-bold">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all hover:scale-110" 
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all hover:scale-110" 
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all hover:scale-110" 
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all hover:scale-110" 
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2025 Samvit Labs. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
