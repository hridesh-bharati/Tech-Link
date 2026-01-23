import React from 'react';
import Hero from '../components/Home/Hero/Hero';
import About from '../components/Home/About/About';
import Projects from '../components/Home/Projects/Projects';
import Skills from '../components/Home/Skills/Skills';
import Contact from '../pages/ContactPage';
import GoogleAd from "../components/Ads/GoogleAd";
const HomePage = () => {
  return (
    <>
       <GoogleAd 
        client="ca-pub-3207580292198026" 
        slot="9162153964" 
        style={{ marginBottom: "1rem" }} 
      />

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default HomePage;