import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import GradientText from "../../Shared/GradientText";
import AnimatedSection from "../../Shared/AnimatedSection";
import "./Projects.css";

/* ================================
   ✅ ONLY LIVE PROJECT URLS
================================ */
const LIVE_PROJECTS = [
  {
    id: 1,
    title: "Jibzo Website",
    description: "Production-ready business website hosted on Vercel.",
    live: "https://jibzo.vercel.app/",
  },
  {
    id: 2,
    title: "Drishtee India",
    description: "Official website of Drishtee India Computer Center.",
    live: "https://drishteeindia.com",
  },
];

/* ================================
   Screenshot helper
================================ */
const getScreenshot = (url) =>
  `https://image.thum.io/get/width/800/${url}`;

/* ================================
   Project Card
================================ */
const ProjectCard = ({ project, index }) => (
  <motion.div
    className="project-card"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.15 }}
    whileHover={{ y: -8 }}
  >
    {/* 🔥 LIVE WEBSITE PREVIEW */}
    <div className="project-image">
      <img
        src={getScreenshot(project.live)}
        alt={project.title}
        loading="lazy"
      />
    </div>

    <div className="project-content">
      <h3 className="project-title">{project.title}</h3>

      <p className="project-description">
        {project.description}
      </p>

      <div className="project-tags">
        <span className="project-tag">Live</span>
        <span className="project-tag">Production</span>
      </div>

      <div className="project-actions">
        <a
          href={project.live}
          className="btn btn-primary btn-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      </div>
    </div>
  </motion.div>
);

/* ================================
   Projects Section
================================ */
const Projects = () => {
  return (
    <section className="projects section pt-5" id="projects">
      <div className="container">
        <div className="section-title">
          <h2>
            <GradientText>Featured Projects</GradientText>
          </h2>
          <p className="section-subtitle">
            Live production websites
          </p>
        </div>

        <AnimatedSection>
          <AnimatePresence>
            <motion.div className="projects-grid">
              {LIVE_PROJECTS.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* 🔥 VIEW ALL */}
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link
              to="/projects"
              className="btn btn-outline btn-lg"
            >
              View All Projects →
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
