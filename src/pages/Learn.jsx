import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdComputer,
  MdOutlineAccountTree,
  MdSearch,
  MdPlayArrow,
  MdAccountBalance,
} from "react-icons/md";
import {
  FaKeyboard,
  FaInternetExplorer,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaPython,
  FaJava,
  FaDatabase,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiC,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiCplusplus,
} from "react-icons/si";

import "./Learn.css";

/* ---------------- ICON MAP ---------------- */
const ICONS = {
  fundamentals: MdComputer,
  typing: FaKeyboard,
  internet: FaInternetExplorer,
  msword: FaFileWord,
  excel: FaFileExcel,
  powerpoint: FaFilePowerpoint,
  tally: MdAccountBalance,
  html: SiHtml5,
  css: SiCss3,
  c: SiC,
  cpp: SiCplusplus,
  python: FaPython,
  java: FaJava,
  js: SiJavascript,
  react: SiReact,
  node: SiNodedotjs,
  sql: FaDatabase,
  dsa: MdOutlineAccountTree,
};

/* ---------------- DATA ---------------- */
const COURSES = [
  { id: "fundamentals", name: "Computer Fundamentals", cat: "Basics", col: "#32d74b", progress: 0.3 },
  { id: "typing", name: "Typing Skills", cat: "Basics", col: "#64d2ff", progress: 0.8 },
  { id: "internet", name: "Internet Basics", cat: "Basics", col: "#5e5ce6", progress: 0.5 },

  { id: "msword", name: "MS Word", cat: "Office", col: "#30d158", progress: 0.4 },
  { id: "excel", name: "MS Excel", cat: "Office", col: "#ff9f0a", progress: 0.6 },
  { id: "powerpoint", name: "PowerPoint", cat: "Office", col: "#ff453a", progress: 0.2 },
  { id: "tally", name: "Tally Prime", cat: "Office", col: "#bf5af2", progress: 0.9 },

  { id: "html", name: "HTML", cat: "Web", col: "#ff375f", progress: 1 },
  { id: "css", name: "CSS", cat: "Web", col: "#0a84ff", progress: 0.7 },
  { id: "js", name: "JavaScript", cat: "Web", col: "#ffd60a", progress: 0.5 },
  { id: "react", name: "React", cat: "Web", col: "#64d2ff", progress: 0.3 },

  { id: "c", name: "C Programming", cat: "Programming", col: "#5e5ce6", progress: 0.8 },
  { id: "cpp", name: "C++ Programming", cat: "Programming", col: "#30d158", progress: 0.6 },
  { id: "python", name: "Python", cat: "Programming", col: "#32d74b", progress: 0.4 },
  { id: "java", name: "Java", cat: "Programming", col: "#ff9f0a", progress: 0.5 },

  { id: "node", name: "Node.js", cat: "Backend", col: "#30d158", progress: 0.2 },
  { id: "sql", name: "MySQL", cat: "Database", col: "#ff375f", progress: 0.7 },
  { id: "dsa", name: "DSA", cat: "CS", col: "#bf5af2", progress: 0.4 },
];

const CATEGORIES = ["All", "Basics", "Office", "Web", "Programming", "Backend", "Database", "CS"];

/* ---------------- CARD ---------------- */
const CourseCard = ({ course, index, onClick }) => {
  const Icon = ICONS[course.id];

  return (
    <div
      className="course-card"
      style={{
        "--delay": index,
        "--accent": course.col,
        "--progress": course.progress
      }}
      onClick={onClick}
    >
      <div className="card-content">
        <div className="card-icon-wrapper">
          <div className="card-icon">
            <Icon />
          </div>
        </div>

        <div className="course-info">
          <h4 className="course-title">{course.name}</h4>
          <span className="course-category">{course.cat}</span>
        </div>
      </div>

      <div className="card-footer">
        <div className="progress-container text-muted">
          <span>Progress  <i className="bi bi-arrow-right"></i> </span>
        </div>

        <button className="start-btn" onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}>
          <MdPlayArrow />
          {course.progress === 0 ? "Start" : "Continue"}
        </button>
      </div>
    </div>
  );
};

/* ---------------- PAGE ---------------- */
export default function LearnPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const courses = useMemo(() => {
    let filtered = COURSES;

    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.cat.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter(c => c.cat === selectedCategory);
    }

    return filtered;
  }, [search, selectedCategory]);

  return (
    <div className="learn-app">
      <header className="app-header">
        <h1 className="app-title">Learn Skills</h1>
        <p className="app-subtitle">Upgrade yourself step by step</p>
      </header>

      <div className="search-container">
        <div className="search-bar">
          <MdSearch />
          <input
            placeholder="Search courses..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button onClick={() => setSearch("")}>×</button>
          )}
        </div>
      </div>

      <div className="category-badges justify-content-between d-flex flex-wrap">
        {CATEGORIES.map(category => (
          <button
            key={category}
            className={`category-badge ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="courses-count">
        <b>{courses.length}</b> Courses Found
      </div>

      <div className="courses-grid">
        {courses.map((c, i) => (
          <CourseCard
            key={c.id}
            course={c}
            index={i}
            onClick={() => navigate(`/learn/${c.id}`)}
          />
        ))}
      </div>

      {!courses.length && (
        <div className="empty-state">
          <div className="empty-icon">📚</div>
          <h3>No Courses Found</h3>
          <p>Try a different search or category</p>
          <button onClick={() => {
            setSearch("");
            setSelectedCategory("All");
          }}>
            View All Courses
          </button>
        </div>
      )}
    </div>
  );
}