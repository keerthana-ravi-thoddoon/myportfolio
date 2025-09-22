import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-invert">
          <p className="text-lg mb-6">
            Full-stack software engineer with 4+ years of US enterprise development experience at Fidelity and State Street.
            Master's in Information Systems graduate with a proven track record in delivering production-ready financial applications.
          </p>
          <p className="text-lg mb-6">
            Experienced in modernizing legacy applications, debugging complex issues, and collaborating across global Agile teams.
            Passionate about building scalable, reliable, and user-friendly solutions that make a real impact.
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Professional Highlights:</h3>
            <ul className="list-disc list-inside space-y-2 text-textSecondary">
              <li>Modernized legacy applications using React and Spring Boot</li>
              <li>Built secure and efficient RESTful APIs</li>
              <li>Developed micro frontend applications using modern frameworks</li>
              <li>Collaborated with cross-functional teams in Agile environments</li>
              <li>Improved application performance and user experience</li>
              <li>Implemented cloud-based solutions using AWS and Azure</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;