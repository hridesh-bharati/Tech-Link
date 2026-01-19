import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  const techStack = [
    {
      name: "React",
      icon: "⚛️",
      gradient: "linear-gradient(135deg, #61DAFB 0%, #21A1F1 50%, #0D8BF2 100%)"
    },
    {
      name: "Next.js",
      icon: "▲",
      gradient: "linear-gradient(135deg, #000000 0%, #434343 50%, #666666 100%)"
    },
    {
      name: "TypeScript",
      icon: "TS",
      gradient: "linear-gradient(135deg, #3178C6 0%, #235A97 50%, #1A4080 100%)"
    },
    {
      name: "JavaScript",
      icon: "JS",
      gradient: "linear-gradient(135deg, #F7DF1E 0%, #F0B90B 50%, #E6A308 100%)"
    },
    {
      name: "Tailwind",
      icon: "TW",
      gradient: "linear-gradient(135deg, #06B6D4 0%, #0891B2 50%, #0E7490 100%)"
    },
    {
      name: "Node.js",
      icon: "⬢",
      gradient: "linear-gradient(135deg, #3C873A 0%, #68A063 50%, #8FBC8B 100%)"
    },
    {
      name: "MongoDB",
      icon: "🍃",
      gradient: "linear-gradient(135deg, #47A248 0%, #3D8B3D 50%, #2E6B2E 100%)"
    },
    {
      name: "Git",
      icon: "🐙",
      gradient: "linear-gradient(135deg, #F05032 0%, #E44C30 50%, #D9482C 100%)"
    },
    {
      name: "Python",
      icon: "🐍",
      gradient: "linear-gradient(135deg, #3776AB 0%, #306998 50%, #26527C 100%)"
    },
    {
      name: "Express.js",
      icon: "🚂",
      gradient: "linear-gradient(135deg, #000000 0%, #404040 50%, #666666 100%)"
    },
    {
      name: "Firebase",
      icon: "🔥",
      gradient: "linear-gradient(135deg, #FFCA28 0%, #FFA000 50%, #FF8F00 100%)"
    },
    {
      name: "Redux",
      icon: "🔄",
      gradient: "linear-gradient(135deg, #764ABC 0%, #5C3A9B 50%, #4B2C7A 100%)"
    },
  ];

  const skills = [
    {
      name: "React",
      level: 95,
      gradient: "linear-gradient(90deg, #61DAFB, #21A1F1, #0D8BF2)"
    },
    {
      name: "JavaScript",
      level: 90,
      gradient: "linear-gradient(90deg, #F7DF1E, #F0B90B, #E6A308)"
    },
    {
      name: "TypeScript",
      level: 85,
      gradient: "linear-gradient(90deg, #3178C6, #235A97, #1A4080)"
    },
    {
      name: "Next.js",
      level: 90,
      gradient: "linear-gradient(90deg, #000000, #434343, #666666)"
    },
    {
      name: "Node.js",
      level: 80,
      gradient: "linear-gradient(90deg, #3C873A, #68A063, #8FBC8B)"
    },
    {
      name: "UI/UX Design",
      level: 85,
      gradient: "linear-gradient(90deg, #FF6B6B, #F06595, #CC5A82)"
    },
    {
      name: "Python",
      level: 75,
      gradient: "linear-gradient(90deg, #3776AB, #306998, #26527C)"
    },
    {
      name: "MongoDB",
      level: 70,
      gradient: "linear-gradient(90deg, #47A248, #3D8B3D, #2E6B2E)"
    },
    {
      name: "Express.js",
      level: 75,
      gradient: "linear-gradient(90deg, #000000, #404040, #666666)"
    },
  ];

  const experiences = [
    {
      year: "2023 - Present",
      role: "Senior Frontend Developer",
      company: "TechVision Inc.",
      description: "Leading frontend architecture and mentoring junior developers.",
      icon: "🚀"
    },
    {
      year: "2021 - 2023",
      role: "Full Stack Developer",
      company: "Digital Solutions",
      description: "Developed full-stack applications using modern technologies.",
      icon: "💻"
    },
    {
      year: "2020 - 2021",
      role: "UI Developer",
      company: "Creative Agency",
      description: "Created responsive web interfaces and collaborated with design teams.",
      icon: "🎨"
    },
    {
      year: "2019 - 2020",
      role: "Junior Developer",
      company: "Startup Studio",
      description: "Learned modern web technologies and contributed to client projects.",
      icon: "📚"
    },
  ];

  const stats = [
    { number: "50+", label: "Projects", icon: "📦" },
    { number: "3+", label: "Years Exp", icon: "⏳" },
    { number: "30+", label: "Clients", icon: "😊" },
    { number: "100%", label: "Satisfaction", icon: "⭐" },
  ];

  const services = [
    {
      title: "Web Development",
      description: "Building responsive, modern web applications",
      icon: "🌐",
      color: "#3B82F6"
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces",
      icon: "🎨",
      color: "#8B5CF6"
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications",
      icon: "📱",
      color: "#10B981"
    },
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs",
      icon: "🔌",
      color: "#F59E0B"
    },
  ];

  return (
    <section id="about" className="about-section py-5">
      <div className="container py-lg-5">
        {/* SECTION HEADER */}
        <motion.div
          className="text-center mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="about-badge-gradient badge mb-3 px-3 py-2">About Me</span>
          <h2 className="display-5 fw-bold mb-3">Crafting Digital Excellence</h2>
          <p className="about-text-muted lead mx-auto" style={{ maxWidth: "600px" }}>
            Passionate developer creating elegant solutions to complex problems
          </p>
        </motion.div>

        <div className="row g-5 align-items-center">
          {/* LEFT - PROFILE & STATS */}
          <motion.div
            className="col-lg-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* PROFILE CARD */}
            <div className="profile-card mb-4">
              <div className="profile-img-container">
                <img
                  src="/img/slider.jpg"
                  alt="Profile"
                  className="profile-img"
                />
                <div className="profile-badge">
                  <span className="badge bg-primary px-3 py-1">Available for Work</span>
                </div>
                <div className="profile-overlay"></div>
              </div>
              <div className="profile-content p-4">
                <h4 className="fw-bold mb-2">Hridesh Bharati</h4>
                <p className="about-text-muted mb-3">FrontEnd Web Developer</p>
                <p className="mb-4">
                  Passionate about crafting visually stunning and highly functional web applications using modern technologies.
                </p>
                <div className="d-flex gap-2">
                  <a href="#contact" className="btn btn-primary btn-sm px-3">
                    <i className="bi bi-envelope me-2"></i>Contact
                  </a>
                  <a href="#" className="btn btn-outline-primary btn-sm px-3">
                    <i className="bi bi-download me-2"></i>Resume
                  </a>
                </div>
              </div>
            </div>

            {/* STATS CARDS */}
            <div className="row g-3 app-stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="col-6"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="app-stat-card">
                    <div className="app-stat-icon">{stat.icon}</div>

                    <div className="app-stat-content">
                      <div className="app-stat-number">{stat.number}</div>
                      <div className="app-stat-label">{stat.label}</div>
                    </div>

                    <div className="app-stat-glow"></div>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* RIGHT - ABOUT CONTENT */}
          <motion.div
            className="col-lg-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-2">
              <h3 className="fw-bold mb-4">Hello! I'm Hridesh Bharati 👋</h3>

              <div className="row g-4">
                <div className="col-md-6">
                  <p className="about-text-muted">
                    Frontend developer with 3+ years of experience, focused on building modern, user-friendly web applications with clean and maintainable code.
                  </p>
                </div>

                <div className="col-md-6">
                  <p className="about-text-muted">
                    I enjoy open-source contributions, exploring new technologies, and mentoring developers while staying updated with industry trends.
                  </p>
                </div>
              </div>
            </div>


            {/* SKILLS */}
            <div className="mb-5">
              <h4 className="fw-bold mb-4">My Expertise</h4>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-semibold">{skill.name}</span>
                    <span className="fw-semibold about-text-primary">{skill.level}%</span>
                  </div>
                  <div className="skill-progress">
                    <motion.div
                      className="skill-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.15 }}
                      style={{ background: skill.gradient }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* TECH STACK */}
            <div className="mb-5">
              <h4 className="fw-bold mb-4">Technology Stack</h4>
              <p className="about-text-muted mb-4">Tools and technologies I work with regularly</p>

              <motion.div
                className="row g-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="col-4 col-sm-3 col-lg-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="text-center">
                      <div
                        className="tech-icon mb-2"
                        style={{
                          background: tech.gradient,
                          color: 'white',
                        }}
                      >
                        {tech.icon}
                      </div>
                      <div className="small fw-semibold zIndex-1">{tech.name}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>




        {/* EXPERIENCE TIMELINE WITH ANIMATED CIRCLES */}
        <motion.div
          className="mt-5 pt-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-5">
            <span className="about-badge-gradient badge mb-3 px-3 py-2">Journey</span>
            <h3 className="fw-bold mb-3">Professional Experience</h3>
            <p className="about-text-muted">My career path and key milestones</p>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>

            {experiences.map((exp, index) => {
              // Different colors for each circle
              const colors = [
                "linear-gradient(135deg, #2563eb, #7c3aed)",
                "linear-gradient(135deg, #06b6d4, #10b981)",
                "linear-gradient(135deg, #f59e0b, #ef4444)",
                "linear-gradient(135deg, #8b5cf6, #d946ef)"
              ];

              return (
                <motion.div
                  key={index}
                  className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="timeline-dot-container">
                    <div
                      className="timeline-dot"
                      style={{ background: colors[index % colors.length] }}
                    >
                      <div className="dot-inner">
                        {exp.icon}
                      </div>
                      <div className="dot-pulse"></div>
                      <div className="dot-ring"></div>
                    </div>
                    <div className="timeline-year-badge">
                      {exp.year}
                    </div>
                  </div>

                  <motion.div
                    className="experience-card-timeline"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="card-header-timeline">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div
                          className="role-icon"
                          style={{ background: colors[index % colors.length] }}
                        >
                          {exp.icon}
                        </div>
                        <div>
                          <h5 className="fw-bold mb-0">{exp.role}</h5>
                          <small className="about-text-muted">{exp.company}</small>
                        </div>
                      </div>
                    </div>
                    <div className="card-body-timeline">
                      <p className="mb-0 about-text-muted">{exp.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-1 pt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="fw-bold mb-4">Let's Build Something Amazing</h4>
          <p className="about-text-muted mb-4 mx-auto" style={{ maxWidth: "600px" }}>
            Have a project in mind? I'd love to hear about it.
          </p>
          <a href="#contact" className="btn btn-primary btn-lg px-5">
            <i className="bi bi-chat-dots me-2"></i>Start Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;