// src/pages/CourseDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaBookOpen } from "react-icons/fa";
import "./CourseDetail.css";

// Import course components
import CLanguage from "../components/Dictionary/CLanguage";
import CPlusPlus from "../components/Dictionary/CPlusPlus";

// Course Data
const courses = [
  {
    id: "c",
    name: "C Programming",
    description: "Learn the fundamentals of C programming language from scratch.",
    category: "Programming",
    level: "Beginner",
    duration: "20 Chapters",
    component: <CLanguage />,
  },
  {
    id: "cpp",
    name: "C++ Programming",
    description: "Master C++ with OOP, STL, and modern C++ features.",
    category: "Programming",
    level: "Intermediate",
    duration: "20 Chapters",
    component: <CPlusPlus />, 
  },
  {
    id: "python",
    name: "Python",
    description: "Master Python for web, data science, and automation.",
    category: "Programming",
    level: "Beginner",
    duration: "Coming Soon",
    component: <ComingSoon title="Python Programming" />,
  },
  {
    id: "java",
    name: "Java",
    description: "Object-oriented programming with Java.",
    category: "Programming",
    level: "Intermediate",
    duration: "Coming Soon",
    component: <ComingSoon title="Java Programming" />,
  },
  {
    id: "html",
    name: "HTML",
    description: "Learn HTML for web development.",
    category: "Web",
    level: "Beginner",
    duration: "Coming Soon",
    component: <ComingSoon title="HTML Course" />,
  },
  {
    id: "css",
    name: "CSS",
    description: "Master CSS styling and layouts.",
    category: "Web",
    level: "Beginner",
    duration: "Coming Soon",
    component: <ComingSoon title="CSS Course" />,
  },
  {
    id: "js",
    name: "JavaScript",
    description: "Learn JavaScript for interactive web applications.",
    category: "Web",
    level: "Intermediate",
    duration: "Coming Soon",
    component: <ComingSoon title="JavaScript Course" />,
  },
  {
    id: "react",
    name: "React",
    description: "Build modern web applications with React.",
    category: "Web",
    level: "Intermediate",
    duration: "Coming Soon",
    component: <ComingSoon title="React Course" />,
  },
  {
    id: "fundamentals",
    name: "Computer Fundamentals",
    description: "Learn basic computer concepts and operations.",
    category: "Basics",
    level: "Beginner",
    duration: "Coming Soon",
    component: <ComingSoon title="Computer Fundamentals" />,
  },
  // Add more courses as needed
];

// Reusable Coming Soon UI
function ComingSoon({ title }) {
  return (
    <div className="coming-soon-box">
      <div className="coming-soon-content">
        <div className="construction-icon">
          <span role="img" aria-label="construction">🚧</span>
        </div>
        <h2>{title}</h2>
        <p>Course content is coming soon!</p>
        <p className="text-muted">We're working hard to bring you the best learning experience.</p>
      </div>
    </div>
  );
}

export default function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const found = courses.find((c) => c.id === courseId);
    if (!found) {
      navigate("/learn");
      return;
    }
    setCourse(found);
    window.scrollTo(0, 0);
  }, [courseId, navigate]);

  if (!course) return null;

  return (
    <div className="course-detail-page">
      {/* HEADER */}
      <div className="course-header">
        <div className="course-header-top">
          <button className="back-btn" onClick={() => navigate("/learn")}>
            <FaArrowLeft /> Back to Courses
          </button>
          <div className="course-meta">
            <span className="badge category-badge">{course.category}</span>
            <span className="badge level-badge">{course.level}</span>
            <span className="badge duration-badge">{course.duration}</span>
          </div>
        </div>
        
        <div className="course-info">
          <h1>{course.name}</h1>
          <p className="course-description">{course.description}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="course-body">
        {course.component}
      </div>
    </div>
  );
}