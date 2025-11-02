import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="ai-icon">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="40" height="40" rx="8" stroke="url(#gradient)" strokeWidth="2" />
            <circle cx="32" cy="35" r="4" fill="url(#gradient)" />
            <circle cx="48" cy="35" r="4" fill="url(#gradient)" />
            <path d="M30 50 Q40 55 50 50" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
          </svg>
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <div className="orbit orbit-3"></div>
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
        </div>
        <h2 className="loading-text">Samvit Labs</h2>
        <p className="loading-subtext">Initializing AI Solutions...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;