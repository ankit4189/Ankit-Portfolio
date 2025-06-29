import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import GoToTop from './components/GoToTop';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial page load animation
    gsap.fromTo(
      appRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div ref={appRef} className="bg-slate-900 text-white font-inter no-overflow">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Contact />
      <GoToTop />
    </div>
  );
}

export default App;