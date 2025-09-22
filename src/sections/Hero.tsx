import React from 'react';
import InteractiveCard from '../components/InteractiveCard';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center section-container" id="home">
      <div className="max-w-6xl flex flex-col lg:flex-row items-center gap-8">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-secondary/10 border-2 border-secondary flex items-center justify-center">
          {/* This is a placeholder div for the image. Replace src when you have your image */}
          <div className="text-secondary text-sm">Image Placeholder</div>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-textSecondary">
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
              className="bg-transparent border-2 border-secondary text-secondary px-6 py-3 rounded-lg hover:bg-secondary/10 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-secondary text-primary px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
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