import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import MediaSlideshow from '../components/MediaSlideshow';
import SkillsPanel from '../components/SkillsPanel';

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('About');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const shouldReduceMotion = useReducedMotion();

  const renderContent = () => {
    if (activeTab === 'About') {
      return (
        <div className="text-textSecondary max-w-none">
          <div className="timeline">
            {[
              {
                key: 'wipro',
                title: '2013–2015 – Wipro (Project Engineer)',
                body: 'Launched my career at Wipro, gaining hands-on experience with server-side development, incident management, and enterprise-scale systems.'
              },
              {
                key: 'transition',
                title: '2015–2018 – Transition & Learning (U.S.)',
                body: (<>
                  <p>After moving to the U.S., I took a career pause due to visa restrictions but used the time to invest in growth:</p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Completed the AWS Solutions Architect course (Edureka).</li>
                    <li>Cleared GRE and IELTS with strong scores.</li>
                    <li>Supported my family while building resilience and persistence.</li>
                  </ul>
                </>)
              },
              {
                key: 'northeastern',
                title: '2019–2021 – Northeastern University, Boston (Master’s in Information Systems)',
                body: 'Pursued my MS in IS while working part-time at Home Depot to support my education. Despite visa limitations preventing a co-op, the program strengthened my foundations in software engineering, architecture, and system design.'
              },
              {
                key: 'infosys',
                title: '2021 – Infosys (API Developer, Client: American Express)',
                body: 'While completing my master’s, I also gained professional experience at Infosys, developing REST APIs with Spring Boot for American Express credit payment systems.'
              },
              {
                key: 'fidelity',
                title: '2021–2024 – Fidelity Investments (Full-Stack Developer)',
                body: 'Contributed to large-scale enterprise applications using Spring Boot, Angular 14, AWS, and Jenkins. Led initiatives to modernize applications, created reusable micro-frontend components with Lit, and integrated services via Apache Camel.'
              },
              {
                key: 'state',
                title: '2024–Present – State Street (via Wipro, Contractor)',
                body: 'Driving modernization by migrating legacy JSP pages to React (completed 4 screens independently) and leading the full migration of a Struts-based IDF project to Spring Boot. Overcame internal library limitations by analyzing and recommending best-fit alternatives.'
              },
              {
                key: 'drives',
                title: 'What Drives Me',
                body: 'I’m passionate about solving complex challenges where no clear blueprint exists. I thrive at the intersection of legacy and modern technologies—building scalable, future-ready applications while continuously learning and mentoring others along the way.'
              }
            ].map((item, idx) => (
              <motion.div
                key={item.key}
                className="timeline-item relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <motion.span
                  className="timeline-dot"
                  {...(shouldReduceMotion
                    ? {
                        initial: { scale: 1, boxShadow: '0 0 0 0 rgba(0,0,0,0)' },
                        whileInView: { scale: 1, boxShadow: '0 0 0 0 rgba(0,0,0,0)' },
                        viewport: { once: true, amount: 0.6 },
                        transition: { duration: 0 }
                      }
                    : {
                        initial: { scale: 0.9, boxShadow: '0 0 0 0 rgba(20,184,166,0.12)' },
                        whileInView: { scale: [0.9, 1.2, 1], boxShadow: ['0 0 0 0 rgba(20,184,166,0.06)', '0 0 16px 6px rgba(20,184,166,0.22)', '0 0 8px 3px rgba(20,184,166,0.14)'] },
                        viewport: { once: true, amount: 0.6 },
                        transition: { duration: 0.8, ease: 'easeOut', delay: idx * 0.06 }
                      }
                  )}
                  aria-hidden
                />
                <h4 className="text-lg font-semibold text-textPrimary">{item.title}</h4>
                <div className="mt-2 text-textSecondary">{item.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }

    if (activeTab === 'Education') {
      return (
        <div className="text-textSecondary max-w-none">
          <h3 className="text-xl font-semibold text-textPrimary mb-4">Education</h3>
          <ul className="list-disc ml-6 space-y-3">
            <li>
              <strong>Master of Science in Information Systems</strong> – Northeastern University, Boston, MA (2019 – 2021)
            </li>
            <li>
              <strong>Bachelor of Science in Information Technology</strong> – Bharathiyar University, India (2009 – 2012)
            </li>
          </ul>
          {/* Media slideshow showing files from public/assets */}
          <MediaSlideshow
            items={[
              { type: 'video', src: '/assets/20220513_092711.mp4' },
              { type: 'image', src: '/assets/20220513_093230.jpg' },
              { type: 'image', src: '/assets/IMG_1769.JPG' },
              { type: 'video', src: '/assets/VID-20220509-WA0022.mp4' }
            ]}
          />
        </div>
      );
    }

    if (activeTab === 'Skills') {
      const groups: Record<string, string[]> = {
        Frontend: ['React', 'Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
        Backend: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'Apache Camel', 'JDBC'],
        Databases: ['MySQL', 'MongoDB', 'SQL / PL/SQL'],
        'DevOps & Tools': ['Jenkins', 'GitHub', 'Bitbucket', 'CircleCI', 'Terraform', 'Swagger', 'JIRA'],
        Cloud: ['AWS (S3, EC2, Lambda, SNS, SQS, VPC)', 'Azure'],
        'Testing & Debugging': ['JUnit', 'Mockito', 'Insomnia', 'Postman', 'Splunk']
      };

      return (
        <div className="text-textSecondary max-w-none">
          <h3 className="text-xl font-semibold text-textPrimary mb-4">Skills</h3>
          <SkillsPanel groups={groups} />
        </div>
      );
    }

    return (
      <div className="text-textSecondary">Content for {activeTab} will go here.</div>
    );
  };

  return (
    <section className="min-h-screen flex items-center gap-8 p-8" id="home">
      <div className="w-[480px] h-[calc(100vh-4rem)] rounded-lg bg-primary/30 backdrop-blur-sm border border-secondary/20 flex flex-col">
        {/* Image placeholder */}
        <div className="w-full h-48 bg-secondary/10 rounded-t-lg flex items-center justify-center border-b border-secondary/20">
          <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center">
            <span className="text-secondary">Photo</span>
          </div>
        </div>
        
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-textSecondary">
            Full-Stack Software Engineer
          </h2>
          <p className="text-lg mb-8 text-textSecondary">
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
      </div>

      {/* Right card with internal navbar */}
      <div className="flex-1 h-[calc(100vh-4rem)] rounded-lg bg-primary/30 backdrop-blur-sm border border-secondary/20 p-0 flex flex-col overflow-hidden">
        {/* horizontal sticky navbar inside card */}
          <div className="sticky top-0 bg-primary/30 p-4 border-b border-secondary/10 z-10">
          <nav className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button onClick={() => setActiveTab('About')} className="px-4 py-2 rounded-md hover:bg-secondary/10 text-textSecondary font-medium">My Journey</button>
              <button onClick={() => setActiveTab('Education')} className="px-4 py-2 rounded-md hover:bg-secondary/10 text-textSecondary font-medium">Education</button>
              <button onClick={() => setActiveTab('Skills')} className="px-4 py-2 rounded-md hover:bg-secondary/10 text-textSecondary font-medium">Skills</button>
              <button onClick={() => setActiveTab('Projects')} className="px-4 py-2 rounded-md hover:bg-secondary/10 text-textSecondary font-medium">Projects</button>
            </div>
            <div>
              <button onClick={() => setActiveTab('AI')} className="px-4 py-2 rounded-md bg-secondary text-primary font-semibold hover:bg-secondary/90">Try AI assistant</button>
            </div>
          </nav>
        </div>

        {/* placeholder main area needs top padding so content isn't hidden under sticky nav */}
        <div className="flex-1 p-6 overflow-auto bg-primary/5">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default Hero;