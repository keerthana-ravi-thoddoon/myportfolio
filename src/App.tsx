import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import ExperienceSection from './sections/Experience';
import Skills from './sections/Skills';
import EducationSection from './sections/Education';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen flex">
      {/* Main content area (75%) */}
      <div className="w-[75%] min-h-screen bg-softWhite">
        <Navbar />
        <main className="px-8">
          <Hero />
          <About />
          <ExperienceSection />
          <Skills />
          <EducationSection />
        </main>
      </div>
      
      {/* Dark sidebar (25%) */}
      <div className="w-[25%] min-h-screen bg-darkBg fixed right-0">
        <div className="h-full flex flex-col justify-center">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
