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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-textSecondary max-w-none">
           <h3 className="text-xl font-semibold text-textPrimary mb-4">Career Journey</h3>
           <div className="space-y-6">
             <div>
               <h4 className="text-lg font-semibold text-textPrimary">2009 – 2012 | Bachelor of Science in Information Technology</h4>
               <div className="mt-2 text-textSecondary">
                 <p><strong>Dr. G.R. Damodaran College of Arts and Science – India</strong></p>
                 <p className="mt-2">Built a strong foundation in programming, databases, and networking. This is where my interest in solving real-world problems through software began.</p>
               </div>
             </div>

             <div>
               <h4 className="text-lg font-semibold text-textPrimary">Early Career</h4>
               <div className="mt-2 text-textSecondary">
                 <h5 className="font-medium"><strong>2012 – 2015 | Wipro Technologies – Infrastructure Foundations</strong></h5>
                 <p className="mt-2">Started my career supporting enterprise infrastructure environments including VMware servers and EMC storage systems.</p>
                 <p className="mt-2">Worked on system monitoring, automation of patching tasks, and incident troubleshooting. This experience helped me understand how large-scale enterprise systems operate and the importance of reliability in production environments.</p>
               </div>
             </div>

              <div>
                <h4 className="text-lg font-semibold text-textPrimary">Application Support & Analysis</h4>
                <div className="mt-2 text-textSecondary">
                  <h5 className="font-medium">
                    <strong> Career Transition and Challenges </strong>
                  </h5>

                  <p className="mt-2">
                    After relocating to the United States, I stayed engaged technically through a remote volunteer
                    Technical Analyst role supporting internal procurement and purchase order management
                    applications.
                  </p>

                  <p className="mt-2">
                    In this role, I monitored application workflows, investigated production and testing issues,
                    analyzed logs, supported debugging efforts, and contributed to basic enhancements in
                    Java and JSP-based internal tools. I also created simple MySQL dashboards to track order
                    status and identify delays, while working with stakeholders to understand system improvement needs.
                  </p>

                  <p className="mt-2">
                    This experience strengthened my interest in backend systems, APIs, debugging, and cloud
                    technologies. During this period, I also completed AWS Solutions Architect training, which
                    later supported my decision to pursue a Master's in Information Systems at Northeastern
                    University and transition fully into software engineering roles.
                  </p>
                </div>
              </div>
             
             <div>
               <h4 className="text-lg font-semibold text-textPrimary">Graduate Studies</h4>
               <div className="mt-2 text-textSecondary">
                 <h5 className="font-medium"><strong>2019 – 2021 | Master of Science in Information Systems</strong></h5>
                 <p className="mt-1"><strong>Northeastern University – Boston, MA</strong></p>
                 <p className="mt-2">Pursued graduate studies to deepen expertise in software engineering, cloud computing, and enterprise systems. Worked on projects focused on backend services, data systems, and modern application architectures used in industry.</p>
               </div>
             </div>

             <div>
               <h4 className="text-lg font-semibold text-textPrimary">Enterprise Software Development</h4>
               <div className="mt-2 text-textSecondary">
                 <h5 className="font-medium"><strong>2021 | Infosys – American Express (API Development)</strong></h5>
                 <p className="mt-2">Began working on enterprise financial systems, developing secure backend APIs for online payment workflows. Focused on reliability, compliance, and monitoring for transaction systems used in large-scale financial environments.</p>

                 <h5 className="font-medium mt-4"><strong>2021 – 2024 | Fidelity Investments</strong></h5>
                 <p className="mt-2">Grew into a full-stack engineering role contributing to enterprise financial platforms.</p>
                 <p className="mt-2">Key contributions included:</p>
                 <ul className="list-disc ml-6 mt-2 space-y-1">
                   <li>Building full-stack applications using Spring Boot and Angular.</li>
                   <li>Developing REST APIs for backend services.</li>
                   <li>Implementing microservices integrations using Apache Camel.</li>
                   <li>Creating micro-frontend applications for modular UI deployment.</li>
                   <li>Improving system observability using Splunk monitoring and logging.</li>
                 </ul>
                 <p className="mt-2">This experience strengthened expertise in enterprise architecture, scalable systems, and production reliability.</p>

                 <h5 className="font-medium mt-4"><strong>2024 – Present | State Street</strong></h5>
                 <p className="mt-2">Currently working on modernization of large enterprise financial applications.</p>
                 <p className="mt-2">Key work includes:</p>
                 <ul className="list-disc ml-6 mt-2 space-y-1">
                   <li>Migrating legacy systems to React frontends and Spring Boot microservices.</li>
                   <li>Improving performance of legacy systems and optimizing database queries.</li>
                   <li>Designing reusable React component libraries used across internal applications.</li>
                   <li>Implementing observability and monitoring using Splunk dashboards.</li>
                 </ul>
                 <p className="mt-2">This work focuses on modernizing legacy enterprise systems into scalable, maintainable architectures.</p>
               </div>
             </div>

             <div>
               <h4 className="text-lg font-semibold text-textPrimary">Core Focus</h4>
               <div className="mt-2 text-textSecondary">
                 <p>My work focuses on building and modernizing enterprise applications using:</p>
                 <ul className="list-disc ml-6 mt-2">
                   <li>React</li>
                   <li>Java</li>
                   <li>Spring Boot</li>
                   <li>Microservices</li>
                   <li>Cloud and Observability tools</li>
                 </ul>
                 <p className="mt-2">Much of my experience is in financial systems, where reliability, scalability, and performance are critical.</p>
               </div>
             </div>

           </div>
         </motion.div>
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