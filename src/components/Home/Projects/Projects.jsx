import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientText from "../../Shared/GradientText";
import AnimatedSection from "../../Shared/AnimatedSection";
import "./Projects.css";

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Applications" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "design", name: "UI/UX Design" },
  { id: "ecommerce", name: "E-commerce" },
];

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with inventory & payments.",
    category: "ecommerce",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task manager with real-time updates.",
    category: "web",
    tags: ["Next.js", "Socket.io", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const CategoryButton = ({ active, onClick, children }) => (
  <motion.button
    className={`category-btn ${active ? "active" : ""}`}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.button>
);

const ProjectCard = ({ project, index }) => (
  <motion.div
    className="project-card"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -8 }}
  >
    <div className="project-content">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-tags">
        {project.tags.map(tag => (
          <span key={tag} className="project-tag">{tag}</span>
        ))}
      </div>

      <div className="project-actions">
        <a href={project.liveUrl} className="btn btn-primary btn-sm">
          Live Demo
        </a>
        <a href={project.githubUrl} className="btn btn-outline btn-sm">
          View Code
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(p => p.category === activeCategory);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-title">
          <h2><GradientText>My Projects</GradientText></h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <AnimatedSection>
          <div className="project-categories">
            {categories.map(cat => (
              <CategoryButton
                key={cat.id}
                active={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.name}
              </CategoryButton>
            ))}
          </div>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div className="projects-grid">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
