import React, { useState } from 'react';

interface CardData {
  title: string;
  content: React.ReactNode;
}

const InteractiveCard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('About');

  const cardData: Record<string, CardData> = {
    About: {
      title: 'About Me',
      content: (
        <div className="space-y-4">
          <p className="text-textSecondary">
            Full-stack software engineer with 4+ years of US enterprise development experience.
            Passionate about building scalable, reliable, and user-friendly solutions.
          </p>
          <ul className="list-disc list-inside text-textSecondary space-y-2">
            <li>Modernized legacy applications</li>
            <li>Built secure RESTful APIs</li>
            <li>Developed micro frontend applications</li>
            <li>Improved application performance</li>
          </ul>
        </div>
      ),
    },
    Education: {
      title: 'Education',
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-textPrimary font-semibold">MS in Information Systems</h3>
            <p className="text-textSecondary">Northeastern University, Boston, MA (2019-2021)</p>
          </div>
          <div>
            <h3 className="text-textPrimary font-semibold">BS in Information Technology</h3>
            <p className="text-textSecondary">Bharathiyar University, India (2009-2012)</p>
          </div>
        </div>
      ),
    },
    Experience: {
      title: 'Latest Experience',
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-textPrimary font-semibold">Software Engineer</h3>
            <p className="text-secondary">State Street, Boston, MA</p>
            <p className="text-textSecondary">Oct 2024 – Present</p>
            <ul className="list-disc list-inside text-textSecondary mt-2">
              <li>Migrated JSP screens to React</li>
              <li>Converted legacy Struts to Spring Boot</li>
              <li>Built responsive React components</li>
            </ul>
          </div>
        </div>
      ),
    },
    Skills: {
      title: 'Key Skills',
      content: (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {['React', 'Angular', 'Spring Boot', 'Java', 'TypeScript', 'AWS', 'MySQL', 'MongoDB'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary border border-secondary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm border border-secondary/10 rounded-lg p-6 w-full max-w-md shadow-lg transition-all duration-300">
      <div className="flex space-x-2 mb-6">
        {Object.keys(cardData).map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              activeSection === section
                ? 'bg-secondary text-primary shadow-[0_0_15px_0_rgba(0,255,157,0.5)]'
                : 'bg-transparent text-secondary border border-secondary hover:bg-secondary/10 hover:shadow-[0_0_15px_0_rgba(0,255,157,0.3)]'
            }`}
          >
            {section}
          </button>
        ))}
      </div>
      <div className="min-h-[300px]">
        <h2 className="text-xl font-bold text-secondary mb-4">{cardData[activeSection].title}</h2>
        {cardData[activeSection].content}
      </div>
    </div>
  );
};

export default InteractiveCard;