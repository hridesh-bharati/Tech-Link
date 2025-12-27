import React from 'react';
import Hero from '../components/Home/Hero/Hero';
import About from '../components/Home/About/About';
import Projects from '../components/Home/Projects/Projects';
import Skills from '../components/Home/Skills/Skills';
import Contact from '../components/Home/Contact/Contacts';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default HomePage;