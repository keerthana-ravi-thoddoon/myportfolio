import React from 'react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    title: "Technical Lead | Wipro Technologies (Client: State Street)",
    company: "State Street",
    location: "Boston, MA",
    period: "Oct 2024 – Present",
    achievements: [
      "Migrated 8+ JSP screens to React, improving UI performance and reducing technical debt",
      "Converted legacy Struts-based IDF application into modern Spring Boot REST APIs",
      "Rewrote legacy queries using JDBC, improving performance",
      "Built responsive, modular React components integrated with Spring Boot APIs",
      "Leveraged GitHub Copilot and best practices to accelerate development",
      "Collaborated with backend engineers and QA to deliver production-ready releases"
    ]
  },
  {
    title: "Software Engineer",
    company: "Fidelity Investments",
    location: "Smithfield, RI",
    period: "Dec 2021 – Aug 2024",
    achievements: [
      "Developed stock management web application using Spring Boot + Angular 14",
      "Developed RESTful APIs improving data exchange efficiency",
      "Migrated legacy services into microservices with Apache Camel",
      "Built micro frontend applications using LIT for improved modularity",
      "Partnered with UI/UX teams to deliver accessible, responsive features",
      "Debugged and refactored legacy applications reducing production issues"
    ]
  },
  {
    title: "Systems Engineer",
    company: "Infosys (Client: American Express)",
    location: "Indianapolis, IN",
    period: "Feb 2021 – Dec 2021",
    achievements: [
      "Built secure API endpoints for online payment transactions",
      "Integrated external services into backend systems",
      "Configured monitoring/alerts for critical API events"
    ]
  },
  {
    title: "Project Engineer",
    company: "Wipro Technologies",
    location: "Bangalore, India",
    period: "Feb 2012 – Jul 2015",
    achievements: [
      "Supported server/VMware infrastructure and EMC storage",
      "Automated patching and incident resolution",
      "Built enhancements in JSP/Java for process monitoring",
      "Designed and tested disaster recovery strategies"
    ]
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Experience</h2>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-secondary">
              <div className="absolute w-4 h-4 bg-secondary rounded-full -left-[9px] top-0"></div>
              <div>
                <h3 className="text-xl font-bold text-textPrimary">{exp.title}</h3>
                <div className="text-secondary font-medium mb-2">{exp.company}</div>
                <div className="text-textSecondary mb-4">
                  {exp.location} | {exp.period}
                </div>
                <ul className="list-disc list-inside space-y-2 text-textSecondary">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="pl-2">{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;