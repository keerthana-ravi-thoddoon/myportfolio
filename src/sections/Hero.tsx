import React from 'react';
import InteractiveCard from '../components/InteractiveCard';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center section-container" id="home">
      <div className="max-w-6xl flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-secondary [text-shadow:_0_0_10px_rgba(0,255,157,0.5)]">
            Full-Stack Software Engineer
          </h2>
          <p className="text-lg mb-8 text-textSecondary max-w-2xl">
            Full-stack software engineer with 4+ years of US enterprise development experience at Fidelity and State Street.
            Specialized in building scalable web applications using React, Spring Boot, and cloud technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/keerthana-ravi-thoddoon"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-secondary text-secondary px-6 py-3 rounded-lg hover:bg-secondary/10 transition-all duration-300 shadow-[0_0_15px_0_rgba(0,255,157,0.3)] hover:shadow-[0_0_25px_0_rgba(0,255,157,0.5)]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-accent text-primary px-6 py-3 rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-[0_0_15px_0_rgba(255,0,245,0.3)] hover:shadow-[0_0_25px_0_rgba(255,0,245,0.5)]"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="lg:w-[400px] w-full">
          <InteractiveCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;