import React from 'react';

interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
}

const educationList: Education[] = [
  {
    degree: "Master of Science in Information Systems",
    school: "Northeastern University",
    location: "Boston, MA",
    period: "Sep, 2019 – Dec, 2021"
  },
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Bharathiyar University",
    location: "India",
    period: "June, 2009 – May, 2012"
  }
];

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education</h2>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {educationList.map((edu, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg bg-primary/30 backdrop-blur-sm border border-secondary/20"
            >
              <h3 className="text-xl font-bold text-secondary mb-2">
                {edu.degree}
              </h3>
              <div className="text-textPrimary font-medium">
                {edu.school}
              </div>
              <div className="text-textSecondary mt-2">
                {edu.location} | {edu.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;