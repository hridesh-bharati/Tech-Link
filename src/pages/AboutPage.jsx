import React from 'react';
import { motion } from 'framer-motion';
import {
  Code, Briefcase, GraduationCap, Award, Mail, Download, MapPin,
  Layout, Database, Server, Cloud,
  School, Laptop,
  Clock, FileText, ExternalLink, Cpu,
  Activity, BookOpen, Rocket, Sparkles,
  Globe, GitBranch,
  ChevronRight, FileCode, Users, Terminal, Zap, Palette,
  Brain, Shield, Smartphone, BarChart3, GitMerge,
  Coffee, Music, Camera, Plane, Gamepad2, Book,
  Heart, Target, Crown, TrendingUp,
  MessageCircle, Eye, Maximize2, Info
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

import "./AboutPage.css"

// =========== SCREENSHOT UTILITY ===========
const getScreenshot = (url) => `https://image.thum.io/get/width/800/${url}`;

// =========== REUSABLE COMPONENTS ===========
const GradientText = ({ children, className = '' }) => (
  <span className={`gradient-text ${className}`}>
    {children}
  </span>
);

const SectionHeader = ({ icon, title, subtitle }) => (
  <div className="section-header">
    <motion.div
      className="section-icon"
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      viewport={{ once: true }}
    >
      {icon}
    </motion.div>
    <motion.h2
      className="section-title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const GlowCard = ({ children, className = '' }) => (
  <div className={`glow-card ${className}`}>
    {children}
  </div>
);

const StatCard = ({ icon, value, label, description }) => (
  <motion.div
    className="stat-card"
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    whileHover={{ y: -10, scale: 1.02 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
  >
    <div className="stat-icon-wrapper">
      <div className="stat-icon">
        {icon}
      </div>
      <div className="stat-glow" />
    </div>
    <div className="stat-content">
      <h3 className="stat-value">{value}</h3>
      <h6 className="stat-label">{label}</h6>
      {description && <p className="stat-description">{description}</p>}
    </div>
  </motion.div>
);

// =========== ANIMATION VARIANTS ===========
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0, rotateX: 10 },
  visible: {
    scale: 1,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15
    }
  }
};

const slideInFromLeft = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

// =========== PERSONAL INFO ===========
const personalInfo = {
  name: "Hridesh Bharati",
  title: "Full Stack Developer & UI/UX Enthusiast",
  location: "Nichlaul, Maharajganj, Uttar Pradesh",
  email: "hridesh027@gmail.com",
  phone: "+91 79053 79261",
  dob: "15th August 2005",
  nationality: "Indian",

  experience: {
    professional: "3+ Year Professional",
    total: "4+ Years Coding",
    description: "Specialized in building responsive web applications with modern frameworks"
  },

  bio: "A passionate self-taught developer from rural India. Started my coding journey at Drishtee Computer Centre and have been building digital solutions ever since. Believe in creating technology that bridges the urban-rural divide.",

  history: "My coding journey began in 2020 at Drishtee Computer Centre. Self-learned web development through online resources while pursuing formal education. Built my first commercial website in 2024 and have been continuously improving my skills since.",

  languages: ["Hindi (Native)", "English (Professional Working Proficiency)", "Bhojpuri (Native)"],

  hobbies: [
    { icon: <Code />, name: "Open Source", description: "Contributing to community projects" },
    { icon: <Book />, name: "Tech Learning", description: "Exploring new technologies" },
    { icon: <Camera />, name: "Photography", description: "Capturing rural landscapes" },
    { icon: <Music />, name: "Music", description: "Playing harmonium" },
    { icon: <Gamepad2 />, name: "Gaming", description: "Strategy and puzzle games" },
    { icon: <Coffee />, name: "Coffee Brewing", description: "Art of perfect coffee" }
  ],

  goals: "To become a leading tech entrepreneur from rural India, build scalable applications that solve local problems, and mentor aspiring developers from similar backgrounds",

  philosophy: "Great software is built with empathy for the user, clean code, and a deep understanding of real-world problems"
};

// =========== CODING JOURNEY ===========
const codingJourney = [
  {
    year: "2020",
    title: "Foundation at Drishtee",
    description: "Started learning programming fundamentals at Drishtee Computer Centre, Nichlaul",
    icon: <Terminal size={24} />,
    color: "#3b82f6",
    glow: "#60a5fa"
  },
  {
    year: "2022",
    title: "Web Development Beginnings",
    description: "Discovered HTML, CSS, and JavaScript, built first interactive websites",
    icon: <FileCode size={24} />,
    color: "#8b5cf6",
    glow: "#a78bfa"
  },
  {
    year: "2023",
    title: "React & Modern Frameworks",
    description: "Mastered React.js, Next.js, and modern frontend development patterns",
    icon: <Code size={24} />,
    color: "#10b981",
    glow: "#34d399"
  },
  {
    year: "2024",
    title: "Full Stack Development",
    description: "Expanded into backend with Node.js, Express, and MongoDB",
    icon: <Server size={24} />,
    color: "#f59e0b",
    glow: "#fbbf24"
  },
  {
    year: "2025",
    title: "Real Projects & Deployment",
    description: "Built and deployed production applications including Drishtee website and Jibzo app",
    icon: <Rocket size={24} />,
    color: "#ef4444",
    glow: "#f87171"
  }
];

// =========== EDUCATION ===========
const educationTimeline = [
  {
    type: "school",
    institution: "Ramharsh Inter College",
    location: "Nichlaul, Uttar Pradesh",
    duration: "2019 - 2020",
    grade: "75.5%",
    focus: "Science Stream with Computer Science",
    achievements: ["School Topper in Computer Science", "Developed first school project", "Active in science exhibitions"],
    description: "Completed high school with distinction in Computer Science, laying foundation for technical career.",
    icon: <School size={32} />
  },
  {
    type: "college",
    institution: "Rashtriya Intermediate College",
    location: "Bali, Uttar Pradesh",
    duration: "2021 - 2022",
    grade: "64.8%",
    focus: "Advanced Mathematics & Programming",
    achievements: ["Completed 15+ online courses", "Built 8+ personal projects", "Started freelancing web development"],
    description: "Deepened programming knowledge while balancing academic studies, started taking web development projects.",
    icon: <BookOpen size={32} />
  },
  {
    type: "university",
    institution: "Siddarth University",
    location: "Nichlaul, Uttar Pradesh",
    duration: "2023 - 2025",
    grade: "Pursuing BSC",
    focus: "Computer Applications & Software Development",
    achievements: ["Built portfolio of 20+ projects", "Mastered MERN stack", "Started Jibzo social media platform"],
    description: "Currently pursuing Bachelor of Computer Applications while actively building real-world applications and expanding technical expertise.",
    icon: <GraduationCap size={32} />
  }
];

// =========== SKILLS DATA ===========
const skillsData = [
  {
    category: "Frontend Development",
    icon: <Layout />,
    description: "Building responsive and interactive user interfaces",
    skills: [
      { name: "React.js", level: 85, years: "2 Years", projects: "25+", icon: <Zap /> },
      { name: "JavaScript", level: 90, years: "3 Years", projects: "40+", icon: <FileCode /> },
      { name: "HTML/CSS", level: 95, years: "3 Years", projects: "50+", icon: <Code /> },
      { name: "Next.js", level: 75, years: "1.5 Years", projects: "12+", icon: <Globe /> }
    ]
  },
  {
    category: "Backend Development",
    icon: <Server />,
    description: "Server-side programming and API development",
    skills: [
      { name: "Node.js", level: 80, years: "2 Years", projects: "20+", icon: <Terminal /> },
      { name: "Express.js", level: 85, years: "2 Years", projects: "18+", icon: <GitMerge /> },
      { name: "Python", level: 70, years: "2 Years", projects: "10+", icon: <Brain /> },
      { name: "REST APIs", level: 85, years: "2 Years", projects: "15+", icon: <Database /> }
    ]
  },
  {
    category: "Database & Tools",
    icon: <Database />,
    description: "Data management and development tools",
    skills: [
      { name: "MongoDB", level: 80, years: "2 Years", projects: "15+", icon: <Database /> },
      { name: "Git/GitHub", level: 90, years: "3 Years", projects: "All Projects", icon: <GitBranch /> },
      { name: "Firebase", level: 75, years: "1.5 Years", projects: "8+", icon: <Cloud /> },
      { name: "VS Code", level: 95, years: "3 Years", projects: "All Projects", icon: <FileCode /> }
    ]
  }
];

// =========== CHART DATA ===========
const skillsChartData = [
  { skill: 'React.js', proficiency: 85, color: '#61DAFB' },
  { skill: 'JavaScript', proficiency: 90, color: '#F7DF1E' },
  { skill: 'Node.js', proficiency: 80, color: '#68A063' },
  { skill: 'MongoDB', proficiency: 80, color: '#47A248' },
  { skill: 'Next.js', proficiency: 75, color: '#000000' },
  { skill: 'Python', proficiency: 70, color: '#3776AB' }
];

// =========== PROJECTS ===========
const topProjects = [
  {
    id: 1,
    title: "Drishtee Computer Centre",
    description: "Complete digital platform for Drishtee Computer Centre featuring course management, student registration, online resources, and admin dashboard.",
    technologies: ["React", "Next.js", "MongoDB", "Tailwind CSS", "Vercel"],
    live: "https://drishteeindia.com",
    stats: { courses: "15+", students: "500+", rating: "4.8/5" },
    icon: <GraduationCap size={24} />
  },
  {
    id: 2,
    title: "Jibzo - Social Media Platform",
    description: "Modern social media and instant messaging application with real-time chat, media sharing, user profiles, and community features.",
    technologies: ["React Native", "Node.js", "Firebase", "Socket.io", "AWS"],
    live: "https://jibzo.vercel.app/",
    stats: { users: "1K+", messages: "50K+", active: "Daily" },
    icon: <MessageCircle size={24} />
  }
];

// =========== COMPONENTS ===========
const CodingJourneyCard = ({ item, index }) => (
  <motion.div
    className="timeline-item"
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="timeline-connector">
      <div className="timeline-dot" style={{ background: item.color, boxShadow: `0 0 20px ${item.glow}` }}>
        {item.icon}
      </div>
      <div className="timeline-line" style={{ background: item.color }} />
    </div>

    <motion.div
      className="timeline-content"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="timeline-header ">
        <span className="timeline-year" style={{ background: item.color }}>
          {item.year}
        </span>
        <h4 className="timeline-title">{item.title}</h4>
      </div>
      <p className="timeline-description">{item.description}</p>
    </motion.div>
  </motion.div>
);

const EducationCard = ({ edu, index }) => (
  <motion.div
    className="education-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -10 }}
    transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
    viewport={{ once: true }}
  >
    <div className="education-header">
      <div className="education-icon">
        {edu.icon}
      </div>
      <div>
        <h4 className="education-institution">{edu.institution}</h4>
        <div className="education-meta">
          <span className="education-location">
            <MapPin size={14} />
            {edu.location}
          </span>
          <span className="education-duration">{edu.duration}</span>
        </div>
      </div>
    </div>

    <p className="education-description">{edu.description}</p>

    <div className="education-focus">
      <span className="focus-label">Focus:</span>
      <span className="focus-text">{edu.focus}</span>
    </div>

    <div className="education-achievements">
      <h6>Achievements:</h6>
      <ul>
        {edu.achievements.map((achievement, i) => (
          <li key={i}>
            <Crown size={12} />
            {achievement}
          </li>
        ))}
      </ul>
    </div>

    <div className="education-grade">
      <div className="grade-badge">
        <span className="grade-label">{edu.type === "school" ? "Percentage" : "Status"}</span>
        <span className="grade-value">{edu.grade}</span>
      </div>
    </div>
  </motion.div>
);

const SkillCard = ({ skill, index }) => (
  <motion.div
    className="skill-card"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
    viewport={{ once: true }}
  >
    <div className="skill-header">
      <div className="skill-icon">
        {skill.icon}
      </div>
      <div className="skill-info">
        <h5 className="skill-name">{skill.name}</h5>
        <div className="skill-meta">
          <span>{skill.years}</span>
          <span>•</span>
          <span>{skill.projects} Projects</span>
        </div>
      </div>
      <span className="skill-level">{skill.level}%</span>
    </div>

    <div className="skill-progress">
      <div className="progress-labels">
        <span>Beginner</span>
        <span>Expert</span>
      </div>
      <div className="progress-bar-container">
        <motion.div
          className="progress-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            background: `linear-gradient(90deg, var(--primary), ${skill.level > 80 ? 'var(--success)' : skill.level > 60 ? 'var(--accent)' : 'var(--warning)'})`
          }}
        />
        <div className="progress-marks">
          {[0, 25, 50, 75, 100].map((mark) => (
            <div key={mark} className="progress-mark" style={{ left: `${mark}%` }} />
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const SkillCategorySection = ({ category, index }) => (
  <motion.div
    className="skill-category"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <div className="category-header">
      <div className="category-icon">
        {category.icon}
      </div>
      <div>
        <h3 className="category-title">{category.category}</h3>
        <p className="category-description">{category.description}</p>
      </div>
    </div>

    <div className="skills-grid">
      {category.skills.map((skill, skillIndex) => (
        <SkillCard key={skill.name} skill={skill} index={skillIndex} />
      ))}
    </div>
  </motion.div>
);

// UPDATED ProjectCard COMPONENT WITH SCREENSHOT
const ProjectCard = ({ project, index }) => (
  <motion.div
    className="project-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -15, scale: 1.02 }}
    transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
    viewport={{ once: true }}
  >
    <div className="project-header">
      <div className="project-icon">
        {project.icon}
      </div>
      <div>
        <h4 className="project-title">{project.title}</h4>
        <p className="project-description">{project.description}</p>
      </div>
    </div>

    {/* Project Screenshot Section */}
    <div className="project-screenshot-container">
      <div className="project-screenshot-wrapper">
        <img
          src={getScreenshot(project.live)}
          alt={`${project.title} Screenshot`}
          className="project-screenshot"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/800x450/1a1a2e/ffffff?text=Project+Screenshot';
          }}
        />
        <div className="screenshot-overlay">
          <a
            href={project.live}
            className="screenshot-view-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Eye size={18} />
            View Live
          </a>
          <button
            className="screenshot-fullscreen-btn"
            onClick={() => window.open(getScreenshot(project.live), '_blank')}
          >
            <Maximize2 size={18} />
          </button>
        </div>
      </div>
    </div>

    <div className="project-tech">
      <h6>Technologies Used</h6>
      <div className="tech-tags">
        {project.technologies.map((tech, i) => (
          <span key={i} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>

    <div className="project-stats">
      {Object.entries(project.stats).map(([key, value]) => (
        <div key={key} className="project-stat">
          <div className="stat-value">{value}</div>
          <div className="stat-label">{key}</div>
        </div>
      ))}
    </div>

    <div className="project-actions">
      <a href={project.live} className="btn-primary" target="_blank" rel="noopener noreferrer">
        <ExternalLink size={16} />
        Live Demo
      </a>
    </div>
  </motion.div>
);

const HobbyCard = ({ hobby, index }) => (
  <motion.div
    className="hobby-card"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -5, scale: 1.05 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <div className="hobby-icon">
      {hobby.icon}
    </div>
    <h5>{hobby.name}</h5>
    <p>{hobby.description}</p>
  </motion.div>
);

const SkillsChart = () => (
  <GlowCard className="chart-card">
    <h5>Skills Proficiency</h5>
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={skillsChartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" opacity={0.3} />
          <XAxis
            dataKey="skill"
            stroke="var(--text-secondary)"
            tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
          />
          <YAxis
            stroke="var(--text-secondary)"
            tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
            domain={[0, 100]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)',
              borderRadius: 'var(--border-radius-md)',
            }}
          />
          <Bar
            dataKey="proficiency"
            name="Proficiency %"
            radius={[4, 4, 0, 0]}
          >
            {skillsChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  </GlowCard>
);

// =========== MAIN SECTIONS ===========
const HeroSection = () => (
  <section className="hero-section">
    <div className="container">
      {/* Background Elements */}
      <div className="hero-background">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-overlay" />
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span className="badge" variants={slideInFromLeft}>
            <Sparkles size={16} />
            {personalInfo.title}
          </motion.span>

          <motion.h1 variants={slideInFromLeft} transition={{ delay: 0.1 }}>
            Hi, I'm <GradientText>{personalInfo.name}</GradientText>
          </motion.h1>

          <motion.p className="lead" variants={slideInFromLeft} transition={{ delay: 0.2 }}>
            Building digital experiences with <span className="highlight">code</span>,{" "}
            <span className="highlight">creativity</span>, and{" "}
            <span className="highlight">passion</span>
          </motion.p>

          <motion.p className="bio" variants={slideInFromLeft} transition={{ delay: 0.3 }}>
            {personalInfo.bio}
          </motion.p>

          {/* Personal Details Grid */}
          <motion.div className="details-grid" variants={fadeInUp}>
            <div className="detail-card">
              <MapPin size={18} />
              <div>
                <span className="detail-label">Location</span>
                <span className="detail-value">{personalInfo.location}</span>
              </div>
            </div>
            <div className="detail-card">
              <Briefcase size={18} />
              <div>
                <span className="detail-label">Experience</span>
                <span className="detail-value">{personalInfo.experience.professional}</span>
              </div>
            </div>
            <div className="detail-card">
              <Code size={18} />
              <div>
                <span className="detail-label">Total Coding</span>
                <span className="detail-value">{personalInfo.experience.total}</span>
              </div>
            </div>
            <div className="detail-card">
              <Mail size={18} />
              <div>
                <span className="detail-label">Email</span>
                <span className="detail-value">{personalInfo.email}</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="hero-actions" variants={staggerContainer}>
            <motion.a href="/contact" className="btn-primary btn-lg" variants={fadeInUp}>
              <Mail size={18} />
              Get In Touch
            </motion.a>
            <motion.a href="/resume.pdf" className="btn-outline btn-lg" variants={fadeInUp}>
              <Download size={18} />
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-profile"
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          whileHover={{ y: -15 }}
        >
          <div className="profile-card">
            <div className="profile-image">
              <img src="/img/pic4.png" alt="Hridesh Bharati" className="profile-photo" />
            </div>

            <h3>{personalInfo.name}</h3>
            <p className="profile-title">{personalInfo.title}</p>

            <div className="profile-stats d-flex">
              <StatCard
                icon={<Code />}
                value="50+"
                label="Projects"
                description="Successfully completed"
              />
              <StatCard
                icon={<Award />}
                value="5+"
                label="Certifications"
                description="Industry recognized"
              />
            </div>

            <div className="profile-philosophy">
              <Target size={18} />
              <p>{personalInfo.philosophy}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const CodingJourneySection = () => (
  <section className="coding-journey-section">
    <div className="container">
      <SectionHeader
        icon={<Activity />}
        title={<span>My <GradientText>Coding Journey</GradientText></span>}
        subtitle="From first line of code to building production applications"
      />

      <div className="timeline-container">
        {codingJourney.map((item, index) => (
          <CodingJourneyCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  </section>
);

const EducationSection = () => (
  <section className="education-section">
    <div className="container">
      <SectionHeader
        icon={<GraduationCap />}
        title={<span>Education & <GradientText>Learning Path</GradientText></span>}
        subtitle="Formal education and continuous self-learning journey"
      />

      <div className="education-grid">
        {educationTimeline.map((edu, index) => (
          <EducationCard key={index} edu={edu} index={index} />
        ))}
      </div>
    </div>
  </section>
);

const SkillsSection = () => (
  <section className="skills-section">
    <div className="container">
      <SectionHeader
        icon={<Cpu />}
        title={<span>Technical <GradientText>Expertise</GradientText></span>}
        subtitle="Comprehensive skills across modern development stack"
      />

      <div className="skills-charts">
        <SkillsChart />
      </div>

      <div className="skills-categories">
        {skillsData.map((category, index) => (
          <SkillCategorySection key={index} category={category} index={index} />
        ))}
      </div>
    </div>
  </section>
);

const HobbiesSection = () => (
  <section className="hobbies-section">
    <div className="container">
      <SectionHeader
        icon={<Heart />}
        title={<span>Hobbies & <GradientText>Interests</GradientText></span>}
        subtitle="Beyond code - what keeps me inspired and balanced"
      />

      <div className="hobbies-grid">
        {personalInfo.hobbies.map((hobby, index) => (
          <HobbyCard key={index} hobby={hobby} index={index} />
        ))}
      </div>
    </div>
  </section>
);

// UPDATED ProjectsSection COMPONENT
const ProjectsSection = () => (
  <section className="projects-section">
    <div className="container">
      <SectionHeader
        icon={<Rocket />}
        title={<span>Featured <GradientText>Projects</GradientText></span>}
        subtitle="Showcasing my best work with live demos and screenshots"
      />

      <div className="projects-grid">
        {topProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="cta-section">
    <div className="container">
      <motion.div
        className="cta-card"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="cta-content">
          <h2>
            Ready to <GradientText>Build Something Amazing</GradientText>?
          </h2>
          <p>
            Let's combine my {personalInfo.experience.total} of coding experience with your vision to create exceptional digital solutions.
          </p>
          <div className="cta-actions">
            <a href="/contact" className="btn-light btn-lg">
              Start Project
              <ExternalLink size={20} />
            </a>
            <a href="/portfolio" className="btn-outline-light btn-lg">
              View Full Portfolio
              <ChevronRight size={20} />
            </a>
          </div>
        </div>

        <div className="cta-glow" />
      </motion.div>
    </div>
  </section>
);

// =========== MAIN COMPONENT ===========
const AboutPage = () => {
  return (
    <div className="about-page">
      <HeroSection />
      <CodingJourneySection />
      <EducationSection />
      <SkillsSection />
      <HobbiesSection />
      <ProjectsSection />
      <CTASection />
    </div>
  );
};

export default AboutPage;