import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { MdComputer, MdOutlineAccountTree, MdSearch, MdPlayArrow, MdAccountBalance, MdLock } from "react-icons/md";
import { FaKeyboard, FaInternetExplorer, FaFileWord, FaFileExcel, FaFilePowerpoint, FaPython, FaJava, FaDatabase } from "react-icons/fa";
import { SiHtml5, SiCss3, SiC, SiJavascript, SiReact, SiNodedotjs, SiCplusplus } from "react-icons/si";

/* Import available list for dynamic locking */
import { AVAILABLE_COURSES } from "./CourseDetail";
import "./Learn.css";

const ICONS = {
  fundamentals: MdComputer, typing: FaKeyboard, internet: FaInternetExplorer,
  msword: FaFileWord, excel: FaFileExcel, powerpoint: FaFilePowerpoint,
  tally: MdAccountBalance, html: SiHtml5, css: SiCss3, c: SiC,
  cpp: SiCplusplus, python: FaPython, java: FaJava, js: SiJavascript,
  react: SiReact, node: SiNodedotjs, sql: FaDatabase, dsa: MdOutlineAccountTree,
};

const ALL_COURSES = [
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
  { id: "cpp", name: "C++ Programming", cat: "Programming", col: "#30d158", progress: 0 },
  { id: "python", name: "Python", cat: "Programming", col: "#32d74b", progress: 0 },
  { id: "java", name: "Java", cat: "Programming", col: "#ff9f0a", progress: 0 },
  { id: "node", name: "Node.js", cat: "Backend", col: "#30d158", progress: 0 },
  { id: "sql", name: "MySQL", cat: "Database", col: "#ff375f", progress: 0 },
  { id: "dsa", name: "DSA", cat: "CS", col: "#bf5af2", progress: 0 },
];

const CATEGORIES = ["All", "Basics", "Office", "Web", "Programming", "Backend", "Database", "CS"];

export default function LearnPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = useMemo(() => {
    const unlockedIds = AVAILABLE_COURSES.map(ac => ac.id);
    return ALL_COURSES.filter(c => {
      const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
      const matchCat = selectedCategory === "All" || c.cat === selectedCategory;
      return matchSearch && matchCat;
    }).map(c => ({
      ...c,
      isLocked: !unlockedIds.includes(c.id)
    }));
  }, [search, selectedCategory]);

  return (
    <div className="learn-container">
      <header className="learn-header">
        <h1>Learn Skills</h1>
        <p>Choose your learning path</p>
      </header>

      <div className="search-box">
        <div className="search-inner">
          <MdSearch />
          <input placeholder="Search courses..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
      </div>

      <div className="filter-flex">
        {CATEGORIES.map(cat => (
          <button 
            key={cat} 
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="course-grid">
        {filteredCourses.map((course) => {
          const Icon = ICONS[course.id];
          return (
            <div 
              key={course.id} 
              className={`course-card ${course.isLocked ? "is-locked" : ""}`}
              style={{ "--accent": course.col }}
              onClick={() => !course.isLocked && navigate(`/learn/${course.id}`)}
            >
              <div className="card-top">
                <div className="icon-circle"><Icon /></div>
                <div className="title-area">
                  <div className="card-header-row">
                    <h4 className="card-title">{course.name}</h4>
                    {course.isLocked && <MdLock className="lock-icon" />}
                  </div>
                  <span className="card-cat">{course.cat}</span>
                </div>
              </div>
              
              <div className="card-footer">
                <span className="progress-text">
                  {course.isLocked ? "Locked" : `Progress ${Math.round(course.progress * 100)}%`}
                </span>
                <button className="continue-btn">
                  <MdPlayArrow /> {course.isLocked ? "Locked" : "Start"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}