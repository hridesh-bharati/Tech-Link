// src/pages/LearnPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MdComputer,
  MdOutlineAccountTree,
  MdSearch
} from 'react-icons/md';
import {
  FaKeyboard,
  FaInternetExplorer,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaPython,
  FaJava,
  FaDatabase
} from 'react-icons/fa';
import {
  SiHtml5,
  SiCss3,
  SiC,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiCplusplus
} from 'react-icons/si';
import './Learn.css';

const coursesData = [
  { id: 'fundamentals', name: 'Computer Fundamentals', cat: 'Basics', lvl: 'Beginner', col: '#22c55e', icon: <MdComputer /> },
  { id: 'typing', name: 'Typing Skills', cat: 'Basics', lvl: 'Beginner', col: '#84cc16', icon: <FaKeyboard /> },
  { id: 'internet', name: 'Internet Basics', cat: 'Basics', lvl: 'Beginner', col: '#38bdf8', icon: <FaInternetExplorer /> },
  { id: 'msword', name: 'MS Word', cat: 'Office', lvl: 'Beginner', col: '#2563eb', icon: <FaFileWord /> },
  { id: 'excel', name: 'MS Excel', cat: 'Office', lvl: 'Beginner', col: '#15803d', icon: <FaFileExcel /> },
  { id: 'powerpoint', name: 'PowerPoint', cat: 'Office', lvl: 'Beginner', col: '#ea580c', icon: <FaFilePowerpoint /> },
  { id: 'html', name: 'HTML', cat: 'Web', lvl: 'Beginner', col: '#f97316', icon: <SiHtml5 /> },
  { id: 'css', name: 'CSS', cat: 'Web', lvl: 'Beginner', col: '#0ea5e9', icon: <SiCss3 /> },
  { id: 'c', name: 'C Programming', cat: 'Programming', lvl: 'Beginner', col: '#3b82f6', icon: <SiC /> },
  { id: 'cpp', name: 'C++ Programming', cat: 'Programming', lvl: 'Intermediate', col: '#00599C', icon: <SiCplusplus /> },
  { id: 'python', name: 'Python', cat: 'Programming', lvl: 'Beginner', col: '#10b981', icon: <FaPython /> },
  { id: 'java', name: 'Java', cat: 'Programming', lvl: 'Intermediate', col: '#dc2626', icon: <FaJava /> },
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
    <div className="learn-page container-fluid py-4">
      {/* Header Card */}
      <div className="card learn-header-card mb-4 border-0 shadow-sm">
        <div className="card-body text-center p-4 p-md-5">
          <h1 className="display-6 fw-bold mb-3 text-primary">Learn & Grow</h1>
          <p className="lead text-muted mb-0">Start from basics and grow step by step 🚀</p>
        </div>
      </div>

      {/* Filters */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-md-6">
          <div className="input-group">
            <span className="input-group-text bg-light border-end-0">
              <MdSearch className="text-muted" />
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        
        <div className="col-6 col-md-3">
          <select 
            className="form-select" 
            value={cat} 
            onChange={(e) => setCat(e.target.value)}
          >
            {cats.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        
        <div className="col-6 col-md-3">
          <select 
            className="form-select" 
            value={lvl} 
            onChange={(e) => setLvl(e.target.value)}
          >
            {lvls.map(l => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Courses Count */}
      <div className="mb-3">
        <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
          {filtered.length} {filtered.length === 1 ? 'course' : 'courses'} found
        </span>
      </div>

      {/* Courses Grid */}
      {filtered.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {filtered.map(course => (
            <div key={course.id} className="col">
              <div 
                className="card h-100 border-0 shadow-sm course-card"
                onClick={() => navigate(`/learn/${course.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <div className="card-body p-3">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex flex-column gap-1">
                      <span className="badge bg-primary bg-opacity-10 text-primary px-2 py-1" style={{ fontSize: '0.7rem' }}>
                        {course.cat}
                      </span>
                      <span className="badge bg-success bg-opacity-10 text-success px-2 py-1" style={{ fontSize: '0.7rem' }}>
                        {course.lvl}
                      </span>
                    </div>
                    <div 
                      className="course-icon d-flex align-items-center justify-content-center rounded-3"
                      style={{ 
                        backgroundColor: course.col,
                        width: '45px',
                        height: '45px'
                      }}
                    >
                      <div className="text-white fs-5">
                        {course.icon}
                      </div>
                    </div>
                  </div>
                  <h6 className="card-title mb-0 fw-semibold">{course.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-5">
          <div className="mb-4">
            <div className="display-1 text-muted opacity-25">📚</div>
          </div>
          <h5 className="mb-3">No courses found</h5>
          <p className="text-muted mb-4">Try changing your search or filters</p>
          <button 
            className="btn btn-primary"
            onClick={() => {
              setSearch('');
              setCat('All');
              setLvl('All');
            }}
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}