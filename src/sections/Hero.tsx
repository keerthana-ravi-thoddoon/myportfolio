import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ShieldCheckIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import SkillsPanel from '../components/SkillsPanel';

// Use public assets so paths work in dev and when deployed (PUBLIC_URL handles repo subpaths)
const PUBLIC_ASSET = process.env.PUBLIC_URL || '';
const avatarPic = `${PUBLIC_ASSET}/assets/profile-pic/keerthana.jpg`;
const graduationImg = `${PUBLIC_ASSET}/assets/profile-pic/graduation.JPG`;

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('About');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const shouldReduceMotion = useReducedMotion();

  const renderContent = () => {
    if (activeTab === 'About') {
      return (
        <div className="text-textSecondary max-w-none">
          <h3 className="text-xl font-semibold text-textPrimary mb-4">About Me</h3>

          <p className="mb-4">
            I’m Keerthana Thoddoon Ravi, a full-stack developer with 8+ years of software development and modernization experience, supported by a Master’s in Information Systems from Northeastern University.
          </p>

          <p className="mb-4">
            My journey began in infrastructure engineering, where I gained a strong foundation in system reliability, automation, and performance optimization. Over the years, I transitioned into software engineering, and today I specialize in Java, Spring Boot, React, and REST APIs, building scalable enterprise applications in the financial services industry.
          </p>

          <p className="mb-4">
            I’ve had the privilege of working with organizations like Fidelity Investments and State Street, where I modernized legacy applications, developed reusable microservices, optimized queries, and delivered responsive, user-friendly interfaces that improve customer experience. I thrive in Agile environments, collaborating with product managers, designers, and engineers to transform ideas into production-ready solutions.
          </p>

          <p className="mb-6">Beyond code, I’m deeply passionate about modernization, scalability, and user experience.</p>

          <h4 className="text-lg font-semibold text-textPrimary mb-2">What I Bring to Your Organization</h4>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Technical Expertise:</strong> Proven experience in Java, Spring Boot, React, REST APIs, and cloud platforms, delivering robust enterprise solutions.
            </li>
            <li>
              <strong>Modernization Mindset:</strong> Skilled at transforming legacy applications into modern, maintainable, and scalable systems.
            </li>
            <li>
              <strong>Problem-Solving:</strong> Ability to debug, refactor, and optimize systems for performance and resilience.
            </li>
            <li>
              <strong>Collaboration:</strong> Strong track record of working with cross-functional teams to deliver on business goals.
            </li>
            <li>
              <strong>Continuous Learning:</strong> Enthusiastic about adopting new tools and practices that improve team efficiency.
            </li>
            <li>
              <strong>User Focus:</strong> Committed to building reliable, accessible, and user-friendly products that create real business value.
            </li>
          </ul>
        </div>
      );
    }

    if (activeTab === 'Journey') {
      return (
        <div className="text-textSecondary max-w-none">
          <div className="timeline">
            {[
              {
                key: 'bsc',
                title: "2009 – 2012 | Bachelor of Science in Information Technology – Dr. G.R. Damodaran College of Arts and Science (Affiliated to Bharathiar University, India)",
                body: (
                  <div className="mt-2 text-textSecondary">
                    <p>Built a foundation in programming, databases, and networking.</p>
                    <p>Developed an early interest in solving real-world problems with software.</p>
                  </div>
                )
              },
              {
                key: 'wipro',
                title: '2012 – 2015 | Wipro Technologies (Infrastructure Foundations) – India',
                body: (
                  <div className="mt-2 text-textSecondary">
                    <p>Began career in enterprise infrastructure, managing VMware servers, CPU utilization, and EMC storage.</p>
                    <p>Automated patching and incident handling through scripting, which built strong problem-solving skills. Gained exposure to large-scale IT systems and global delivery models.</p>
                  </div>
                )
              },
              {
                key: 'transition',
                title: '2015 – 2019 | Transition & Upskilling – U.S.',
                body: (
                  <div className="mt-2 text-textSecondary">
                    <p>Moved to the U.S. in 2015 and focused on settling and securing work authorization. During this period:</p>
                    <ul className="list-disc ml-6 mt-2">
                      <li>Completed AWS Solutions Architect certification (2017, Edureka).</li>
                      <li>Prepared for graduate studies by completing GRE and IELTS.</li>
                      <li>Explored software development through self-study and projects, shaping the decision to pursue a master’s program.</li>
                    </ul>
                  </div>
                )
              },
              {
                key: 'northeastern',
                title: (
                  <>
                    2019 – 2021 | Master of Science in Information Systems – <a href="https://cos.northeastern.edu/admissions/graduate-programs/masters-programs/" target="_blank" rel="noopener noreferrer" aria-label="Open Northeastern College of Science graduate programs in a new tab" className="inline-flex items-center gap-1 text-secondary hover:underline focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">Northeastern University <ArrowTopRightOnSquareIcon className="w-4 h-4 text-secondary" aria-hidden="true"/></a> (Boston, MA, U.S.)
                  </>
                ),
                body: (
                  <div className="mt-2 text-textSecondary">
                    <p>Pursued graduate studies to deepen technical expertise and gain U.S. industry exposure. Focused on software engineering, cloud computing, and data systems.</p>
                    <p>Gained hands-on project experience with modern enterprise technologies.</p>
                  </div>
                )
              },
              {
                key: 'infosys',
                title: '2021 | Infosys – American Express (API Development) – Remote, U.S.',
                body: (
                  <div className="mt-2 text-textSecondary">
                    <p>First U.S. professional role: built secure APIs for online payments. Ensured compliance, reliability, and monitoring for financial transactions. This marked the start of enterprise software development in the U.S.</p>
                  </div>
                )
              },
              {
                key: 'fidelity',
                title: '2021 – 2024 | Fidelity Investments (Full-Stack Growth) – Rhode Island, U.S.',
                body: (
                  <div className="mt-2 text-textSecondary">
                    <p>Advanced into full-stack engineering, modernizing critical financial applications and improving system reliability:</p>
                    <ul className="list-disc ml-6 mt-2">
                      <li>Developed and maintained Spring Boot + Angular applications, delivering secure, responsive, and user-friendly features.</li>
                      <li>Migrated services to microservices architecture with Apache Camel, enabling reusable data pipelines and improving scalability.</li>
                      <li>Built micro frontend apps (LIT framework) to support modular UI deployment and cross-team collaboration.</li>
                      <li>Partnered with UI/UX teams to deliver accessible and responsive interfaces aligned with enterprise design standards.</li>
                      <li>Integrated Splunk for logging, monitoring, and debugging analysis, reducing mean time to resolution (MTTR) for production issues and improving system observability.</li>
                    </ul>
                  </div>
                )
              },
              {
                key: 'state',
                title: '2024 – Present | State Street (Modernization & React Migration) – Boston, U.S.',
                body: (
                  <div className="mt-2 text-textSecondary">
                    <p>Leading enterprise application modernization and observability improvements:</p>
                    <ul className="list-disc ml-6 mt-2">
                      <li>Led migration of legacy applications to modular React UIs and Struts services to Spring Boot REST APIs, improving scalability and reducing technical debt.</li>
                      <li>Optimized legacy JDBC queries, cutting response times by up to 40% and enhancing performance for high-volume financial transactions.</li>
                      <li>Designed and delivered reusable React component libraries, enabling faster feature rollout and consistent UI/UX across applications.</li>
                      <li>Implemented Splunk dashboards and log analysis for proactive monitoring and debugging, reducing incident resolution time and improving system reliability.</li>
                      <li>Mentored junior developers through application knowledge transfer (KT) sessions, strengthening team capability and ensuring smooth onboarding.</li>
                      <li>Leveraged AI-assisted development (GitHub Copilot) to accelerate delivery timelines while maintaining high code quality and long-term maintainability.</li>
                    </ul>
                  </div>
                )
              }
            ].map((item, idx) => (
              <motion.div
                key={item.key}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                viewport={{ once: true, amount: 0.6 }}
                className="relative pl-10 mb-6"
              >
                <span className="timeline-icon absolute left-0 top-1 w-6 h-6 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="6" fill="currentColor" />
                  </svg>
                </span>

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
              <strong>Master of Science in Information Systems</strong> –{' '}
              <a
                href="https://cos.northeastern.edu/admissions/graduate-programs/masters-programs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Northeastern College of Science graduate programs in a new tab"
                className="inline-flex items-center gap-1 text-secondary hover:underline focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              >
                Northeastern University <ArrowTopRightOnSquareIcon className="w-4 h-4 text-secondary" aria-hidden="true"/>
              </a>
              , Boston, MA (Sep, 2019 – Dec, 2021)
            </li>
            <li>
              <strong>Bachelor of Science in Information Technology</strong> – <a href="https://www.grd.org/grdcs/" target="_blank" rel="noopener noreferrer" aria-label="Open Dr. G. R. Damodaran College website in a new tab" className="inline-flex items-center gap-1 text-secondary hover:underline focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">Dr. G. R. Damodaran College Of Arts & Science <ArrowTopRightOnSquareIcon className="w-4 h-4 text-secondary" aria-hidden="true"/></a>, India (June, 2009 – May, 2012)
            </li>
          </ul>
          {/* Show a single profile image from public/assets */}
          <div className="mt-4 flex flex-col sm:flex-row items-start gap-4">
            <img src={graduationImg} alt="Graduation" className="w-full sm:w-1/2 max-w-sm rounded-md shadow-sm object-cover" />
          </div>
        </div>
      );
    }

    if (activeTab === 'Skills') {
      const groups: Record<string, string[]> = {
        Frontend: ['React', 'Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Redux', 'Material UI'],
        Backend: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'Apache Camel', 'JDBC'],
        Databases: ['MySQL', 'DB2', 'Snowflake'],
        'DevOps & Tools': ['Jenkins', 'GitHub', 'Bitbucket', 'CircleCI', 'Terraform', 'Swagger', 'Postman', 'JIRA', 'Docker', 'Kubernetes'],
        Cloud: ['AWS (S3, EC2, Lambda, SNS, SQS, VPC)'],
        Testing: ['JUnit', 'Mockito', 'Insomnia'],
        'Monitoring & Logging': ['Splunk']
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
    <section className="min-h-screen flex items-start gap-8 p-8" id="home">
  <div className="w-[340px] h-[calc(100vh-4rem)] rounded-lg bg-primary/30 backdrop-blur-sm border border-secondary/20 flex flex-col sticky top-16 self-start">
        {/* Image placeholder */}
        <div className="w-full bg-secondary/10 rounded-t-lg flex flex-col items-center border-b border-secondary/20 py-4">
          <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-secondary/20 shadow-sm">
            <img src={avatarPic} alt="Keerthana Thoddoon Ravi" className="w-full h-full object-cover" />
          </div>
          <div className="mt-3 text-sm text-textPrimary font-medium">Keerthana Thoddoon Ravi</div>
        </div>

  <div className="flex-1 p-5 flex flex-col justify-start space-y-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight mb-0 text-textSecondary">
            Full Stack Developer
          </h2>
          <p className="text-base text-textSecondary/90 mt-1">
          Transforming complex technology into reliable, product-driven solutions — with a consistent learner’s mindset.</p>
          {/* intro paragraph moved to the About tab */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/keerthana-ravi-thoddoon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile in a new tab"
              className="bg-transparent border-2 border-secondary text-secondary px-4 py-2 rounded-md hover:bg-secondary/10 transition-colors text-base focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              View My Work
            </a>
            <a
              href="https://www.linkedin.com/in/keerthana-thoddoon-ravi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn profile in a new tab"
              onClick={() => window.open('https://www.linkedin.com/in/keerthana-thoddoon-ravi/', '_blank')}
              className="bg-secondary text-primary px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors text-base focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              Contact Me
            </a>
          </div>
          <div className="w-full border-t border-secondary/30 mt-4 pt-2" />
          <div className="mt-1 text-base text-textSecondary/80 w-full flex flex-col divide-y divide-secondary/30">
            <div className="flex items-center justify-start gap-2 py-1.5 w-full hover:bg-secondary/10 hover:rounded-md hover:translate-x-1 transition-all duration-150" role="note" aria-label="Location">
              <MapPinIcon className="w-5 h-5 text-secondary" />
              <span>Boston, MA</span>
            </div>
            <div className="flex items-center justify-start gap-2 py-1.5 w-full hover:bg-secondary/10 hover:rounded-md hover:translate-x-1 transition-all duration-150">
              <PhoneIcon className="w-5 h-5 text-secondary" />
              <a href="tel:+17812283315" aria-label="Call +1-781-228-3315" className="no-underline">+1-781-228-3315</a>
            </div>
            <div className="flex items-center justify-start gap-2 py-1.5 w-full hover:bg-secondary/10 hover:rounded-md hover:translate-x-1 transition-all duration-150">
              <EnvelopeIcon className="w-5 h-5 text-secondary" />
              <a href="mailto:keerthana.tr.work@gmail.com" aria-label="Email keerthana.tr.work@gmail.com" className="no-underline">keerthana.tr.work@gmail.com</a>
            </div>
            <div className="flex items-center justify-start gap-2 py-1.5 w-full">
              <ShieldCheckIcon className="w-5 h-5 text-secondary" />
              <a
                href="https://www.edureka.co/my-certificate/5cda32f1a3c29e008fb76a9e92ffa3dc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open AWS Solutions Architect certificate in a new tab"
                className="text-sm text-secondary hover:underline focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              >
                AWS solution architect
              </a>
            </div>
          </div>
      </div>
    </div>

      {/* Right card with internal navbar */}
      <div className="flex-1 h-[calc(100vh-4rem)] rounded-lg bg-primary/30 backdrop-blur-sm border border-secondary/20 p-0 flex flex-col overflow-hidden">
        {/* horizontal sticky navbar inside card */}
          <div className="sticky top-0 bg-primary/30 p-2 border-b border-secondary/10 z-10">
          <nav role="navigation" aria-label="Hero internal navigation" className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button onClick={() => setActiveTab('About')} aria-pressed={activeTab === 'About'} aria-label="Show About tab" className="px-4 py-2 rounded-md hover:bg-secondary/10 text-textSecondary font-medium focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">About</button>
              <button onClick={() => setActiveTab('Journey')} aria-pressed={activeTab === 'Journey'} aria-label="Show Journey tab" className="px-4 py-2 rounded-md hover:bg-secondary/10 text-textSecondary font-medium focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">Career Journey</button>
              <button onClick={() => setActiveTab('Education')} aria-pressed={activeTab === 'Education'} aria-label="Show Education tab" className="px-4 py-2 rounded-md hover:bg-secondary/10 text-textSecondary font-medium focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">Education</button>
              <button onClick={() => setActiveTab('Skills')} aria-pressed={activeTab === 'Skills'} aria-label="Show Skills tab" className="px-4 py-2 rounded-md hover:bg-secondary/10 text-textSecondary font-medium focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">Skills</button>
              {/* Projects tab removed per request */}
            </div>
            {/* AI assistant removed per request */}
          </nav>
        </div>

        {/* placeholder main area needs top padding so content isn't hidden under sticky nav */}
  <div className="flex-1 p-4 overflow-auto bg-primary/5">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default Hero;