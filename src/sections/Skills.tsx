import React from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "Angular", "JavaScript", "TypeScript", "HTML", "CSS"]
  },
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "REST APIs", "Microservices", "Apache Camel", "JDBC"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "SQL/PLSQL"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Jenkins", "GitHub", "Bitbucket", "CircleCI", "Terraform", "Swagger", "Postman", "JIRA"]
  },
  {
    title: "Cloud",
    skills: ["AWS (S3, EC2, Lambda, SNS, SQS, VPC)", "Azure"]
  },
  {
    title: "Testing",
    skills: ["JUnit", "Mockito", "Insomnia"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 rounded-lg bg-primary/30 backdrop-blur-sm border border-secondary/20">
              <h3 className="text-xl font-bold mb-4 text-secondary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary border border-secondary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;