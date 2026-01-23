// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Home/Hero/Hero';
import About from '../components/Home/About/About';
import Projects from '../components/Home/Projects/Projects';
import Skills from '../components/Home/Skills/Skills';
import Contact from '../pages/ContactPage';
import GoogleAd from '../components/Ads/GoogleAd';

const HomePage = () => {
  const client = "ca-pub-3207580292198026";

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Top Hero Ad */}
      <GoogleAd
        client={client}
        slot="9162153964" // aapka Ad Unit ID
        style={{ margin: "1rem 0" }}
      />

      {/* About Section */}
      <About />

      {/* Middle Ad */}
      <GoogleAd
        client={client}
        slot="9162153965" // alag Ad Unit ID create karke daalein
        style={{ margin: "2rem 0" }}
      />

      {/* Projects Section */}
      <Projects />

      {/* Bottom Ad */}
      <GoogleAd
        client={client}
        slot="9162153966" // alag Ad Unit ID
        style={{ margin: "2rem 0" }}
      />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />
    </>
  );
};

export default HomePage;
