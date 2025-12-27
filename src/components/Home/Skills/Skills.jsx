import React from "react";
import { motion } from "framer-motion";
import GradientText from "../../Shared/GradientText";
import AnimatedSection from "../../Shared/AnimatedSection";
import "./Skills.css";

const Skills = () => {
  const technicalSkills = [
    { name: "React", level: 95, icon: "bi-filetype-jsx", gradient: "linear-gradient(90deg,#61DAFB,#21A1F1)" },
    { name: "JavaScript", level: 90, icon: "bi-filetype-js", gradient: "linear-gradient(90deg,#F7DF1E,#F0B90B)" },
    { name: "TypeScript", level: 85, icon: "bi-filetype-ts", gradient: "linear-gradient(90deg,#3178C6,#235A97)" },
    { name: "Next.js", level: 90, icon: "bi-lightning", gradient: "linear-gradient(90deg,#000,#434343)" },
    { name: "Node.js", level: 80, icon: "bi-filetype-json", gradient: "linear-gradient(90deg,#3C873A,#68A063)" },
    { name: "MongoDB", level: 75, icon: "bi-database", gradient: "linear-gradient(90deg,#4DB33D,#1B5E20)" },
    { name: "PostgreSQL", level: 70, icon: "bi-database-fill", gradient: "linear-gradient(90deg,#336791,#003B57)" },
    { name: "Git", level: 90, icon: "bi-git", gradient: "linear-gradient(90deg,#F05032,#C62828)" },
  ];

  const softSkills = [
    { name: "Problem Solving", level: 95, gradient: "linear-gradient(90deg,#8E2DE2,#4A00E0)" },
    { name: "Communication", level: 90, gradient: "linear-gradient(90deg,#00C6FF,#0072FF)" },
    { name: "Team Work", level: 85, gradient: "linear-gradient(90deg,#11998E,#38EF7D)" },
    { name: "Time Management", level: 88, gradient: "linear-gradient(90deg,#F7971E,#FFD200)" },
    { name: "Creativity", level: 92, gradient: "linear-gradient(90deg,#FF512F,#DD2476)" },
  ];

  const tools = [
    { name: "VS Code", icon: "bi-code-slash", color: "#007ACC", glow: "rgba(0,122,204,.45)" },
    { name: "Figma", icon: "bi-palette", color: "#F24E1E", glow: "rgba(242,78,30,.45)" },
    { name: "GitHub", icon: "bi-github", color: "#181717", glow: "rgba(0,0,0,.45)" },
    { name: "Postman", icon: "bi-send", color: "#FF6C37", glow: "rgba(255,108,55,.45)" },
    { name: "Terminal", icon: "bi-terminal", color: "#22C55E", glow: "rgba(34,197,94,.45)" },
    { name: "Photoshop", icon: "bi-image", color: "#31A8FF", glow: "rgba(49,168,255,.45)" },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-title">
          <h2><GradientText>Skills & Expertise</GradientText></h2>
          <p>Technologies & tools I use professionally</p>
        </div>

        {/* TECHNICAL SKILLS */}
        <AnimatedSection delay={0.2}>
          <h3 className="skills-heading"><i className="bi bi-code-slash"></i> Technical Skills</h3>
          <div className="skills-grid">
            {technicalSkills.map(skill => (
              <motion.div
                key={skill.name}
                className="skill-card"
                whileHover={{ y: -6 }}
              >
                <div className="skill-icon" style={{ background: skill.gradient }}>
                  <i className={`bi ${skill.icon}`}></i>
                </div>

                <div className="skill-header">
                  <h4>{skill.name}</h4>
                  <span>{skill.level}%</span>
                </div>

                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    style={{ background: skill.gradient }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* SOFT + TOOLS */}
        <div className="skills-columns">
          <AnimatedSection delay={0.4}>
            <h3 className="skills-heading"><i className="bi bi-person"></i> Soft Skills</h3>
            {softSkills.map(skill => (
              <div className="soft-skill" key={skill.name}>
                <div className="soft-skill-head">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="soft-skill-bar">
                  <motion.div
                    className="soft-skill-progress"
                    style={{ background: skill.gradient }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <h3 className="skills-heading"><i className="bi bi-tools"></i> Tools</h3>
            <div className="tools-grid">
              {tools.map(tool => (
                <motion.div
                  key={tool.name}
                  className="tool-card"
                  style={{
                    "--tool-color": tool.color,
                    "--tool-glow": tool.glow,
                  }}
                  whileHover={{ y: -6, scale: 1.05 }}
                >
                  <div className="tool-icon">
                    <i className={`bi ${tool.icon}`}></i>
                  </div>
                  <span>{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Skills;
