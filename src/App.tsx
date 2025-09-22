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
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <Skills />
        <EducationSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
