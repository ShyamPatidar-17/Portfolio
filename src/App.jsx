import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contacts';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white overflow-x-hidden selection:bg-sky-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Education/>
        <Skills />
        <Projects />
        <Experience/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;