import React from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-light mb-4" style={{ fontWeight: 300 }}>
              Samvit Labs
            </h3>
            <p className="text-gray-400 text-sm">
              End-to-end AI solutions from data to deployment.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 text-gray-400">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Data Collection</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Data Labelling</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Model Development</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Model Deployment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 text-gray-400">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 text-gray-400">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 Samvit Labs. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
