import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary/90 backdrop-blur-sm py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://github.com/keerthana-ravi-thoddoon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/keerthana-thoddoon-ravi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:keerthana.tr.work@gmail.com"
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              Email
            </a>
          </div>
          <p className="text-textSecondary text-sm">
            © {new Date().getFullYear()} Keerthana Thoddoon Ravi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;