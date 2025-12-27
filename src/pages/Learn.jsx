// src/pages/LearnPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MdComputer,
  MdOutlineAccountTree
} from 'react-icons/md';
import {
  FaKeyboard,
  FaInternetExplorer,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaPython,
  FaJava,
  FaDatabase,
  FaCuttlefish // C++ icon
} from 'react-icons/fa';
import {
  SiHtml5,
  SiCss3,
  SiC,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiCplusplus // C++ icon
} from 'react-icons/si';

import './Learn.css';

const coursesData = [
  // Basics
  { id: 'fundamentals', name: 'Computer Fundamentals', cat: 'Basics', lvl: 'Beginner', col: '#22c55e', icon: <MdComputer /> },
  { id: 'typing', name: 'Typing Skills', cat: 'Basics', lvl: 'Beginner', col: '#84cc16', icon: <FaKeyboard /> },
  { id: 'internet', name: 'Internet Basics', cat: 'Basics', lvl: 'Beginner', col: '#38bdf8', icon: <FaInternetExplorer /> },

  // Office
  { id: 'msword', name: 'MS Word', cat: 'Office', lvl: 'Beginner', col: '#2563eb', icon: <FaFileWord /> },
  { id: 'excel', name: 'MS Excel', cat: 'Office', lvl: 'Beginner', col: '#15803d', icon: <FaFileExcel /> },
  { id: 'powerpoint', name: 'PowerPoint', cat: 'Office', lvl: 'Beginner', col: '#ea580c', icon: <FaFilePowerpoint /> },

  // Web
  { id: 'html', name: 'HTML', cat: 'Web', lvl: 'Beginner', col: '#f97316', icon: <SiHtml5 /> },
  { id: 'css', name: 'CSS', cat: 'Web', lvl: 'Beginner', col: '#0ea5e9', icon: <SiCss3 /> },

  // Programming
  { id: 'c', name: 'C Programming', cat: 'Programming', lvl: 'Beginner', col: '#3b82f6', icon: <SiC /> },
  { id: 'cpp', name: 'C++ Programming', cat: 'Programming', lvl: 'Intermediate', col: '#00599C', icon: <SiCplusplus /> }, // Added C++
  { id: 'python', name: 'Python', cat: 'Programming', lvl: 'Beginner', col: '#10b981', icon: <FaPython /> },
  { id: 'java', name: 'Java', cat: 'Programming', lvl: 'Intermediate', col: '#dc2626', icon: <FaJava /> },

  // Advanced
  { id: 'js', name: 'JavaScript', cat: 'Web', lvl: 'Intermediate', col: '#f59e0b', icon: <SiJavascript /> },
  { id: 'react', name: 'React', cat: 'Web', lvl: 'Intermediate', col: '#06b6d4', icon: <SiReact /> },
  { id: 'node', name: 'Node.js', cat: 'Backend', lvl: 'Advanced', col: '#8b5cf6', icon: <SiNodedotjs /> },
  { id: 'sql', name: 'MySQL', cat: 'Database', lvl: 'Beginner', col: '#ef4444', icon: <FaDatabase /> },
  { id: 'dsa', name: 'DSA', cat: 'CS', lvl: 'Advanced', col: '#7c3aed', icon: <MdOutlineAccountTree /> },
];

const cats = ['All', 'Basics', 'Office', 'Programming', 'Web', 'Database', 'CS', 'Backend'];
const lvls = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function LearnPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('All');
  const [lvl, setLvl] = useState('All');

  const filtered = coursesData.filter(course =>
    course.name.toLowerCase().includes(search.toLowerCase()) &&
    (cat === 'All' || course.cat === cat) &&
    (lvl === 'All' || course.lvl === lvl)
  );

  return (
    <div className="learn">
      {/* HEADER */}
      <div className="header">
        <h1>Courses</h1>
        <p>Start from basics and grow step by step 🚀</p>
      </div>

      {/* FILTERS */}
      <div className="filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filter-box">
          <select value={cat} onChange={(e) => setCat(e.target.value)}>
            {cats.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <select value={lvl} onChange={(e) => setLvl(e.target.value)}>
            {lvls.map(l => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>
      </div>

      {/* COURSES */}
      <div className="courses">
        {filtered.map(course => (
          <div
            key={course.id}
            className="course"
            onClick={() => navigate(`/learn/${course.id}`)}
          >
            <div className="course-top">
              <div className="badges">
                <span>{course.cat}</span>
                <span>{course.lvl}</span>
              </div>

              <div className="icon" style={{ background: course.col }}>
                {course.icon}
              </div>
            </div>

            <h3 className='text-start'>{course.name}</h3>
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {filtered.length === 0 && (
        <div className="empty">
          <p>No courses found</p>
          <button onClick={() => {
            setSearch('');
            setCat('All');
            setLvl('All');
          }}>
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}