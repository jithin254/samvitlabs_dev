import React from 'react';
import { Sparkles, Cpu } from 'lucide-react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="ai-visual">
          {/* Robot and human hands */}
          <div className="robot-hand hand-1">
            <div className="hand-glow"></div>
          </div>
          <div className="human-hand hand-2">
            <div className="hand-glow"></div>
          </div>
          <div className="robot-hand hand-3">
            <div className="hand-glow"></div>
          </div>
          <div className="human-hand hand-4">
            <div className="hand-glow"></div>
          </div>
          
          {/* Orbital rings */}
          <div className="connection-line line-1"></div>
          <div className="connection-line line-2"></div>
          <div className="connection-line line-3"></div>
          
          {/* Orbiting dots */}
          <div className="orbiting-dot dot-1"></div>
          <div className="orbiting-dot dot-2"></div>
          <div className="orbiting-dot dot-3"></div>
          <div className="orbiting-dot dot-4"></div>
        </div>
        <div className="gradient-overlay"></div>
      </div>

      {/* Main Content */}
      <section className="main-section">
        <div className="content-wrapper">
          <h1 className="main-title">Samvit Labs</h1>
          
          <div className="badge-container">
            <div className="solutions-badge">
              <Cpu size={18} />
              <span>End to End AI Solutions</span>
            </div>
          </div>
          
          <p className="tagline">Transform Your Business with AI Innovation</p>
          
          <div className="coming-soon-container">
            <button className="coming-soon-btn">
              <span className="btn-text">Coming Soon</span>
              <div className="btn-glow"></div>
              <div className="btn-particles">
                <span className="particle"></span>
                <span className="particle"></span>
                <span className="particle"></span>
                <span className="particle"></span>
              </div>
            </button>
            <p className="coming-soon-tagline">
              <Sparkles size={16} className="inline-icon" />
              Revolutionizing AI Solutions
            </p>
          </div>
          
          {/* Contact Bar */}
          <div className="contact-bar">
            <div className="contact-glow"></div>
            <p className="contact-text">
              Contact us at <a href="mailto:admin@samvitlabs.com" className="contact-link">admin@samvitlabs.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;