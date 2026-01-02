import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./CourseDetail.css";

// Import course components
import Fundamentals from "../components/Dictionary/Fundamentals";
import CLanguage from "../components/Dictionary/CLanguage";
import CPlusPlus from "../components/Dictionary/CPlusPlus";

// Course Data - LearnPage.jsx के coursesData के साथ match कराएं
const courses = [
  // Programming
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

  // Web
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

  // Basics
  {
    id: "fundamentals",
    name: "Computer Fundamentals",
    description: "Learn basic computer concepts step by step.",
    category: "Basics",
    level: "Beginner",
    duration: "8 Chapters",
    component: <Fundamentals />,
  },
  {
    id: "typing",
    name: "Typing Skills",
    description: "Learn typing skills and improve your speed.",
    category: "Basics",
    level: "Beginner",
    duration: "Coming Soon",
    component: <ComingSoon title="Typing Skills" />,
  },
  {
    id: "internet",
    name: "Internet Basics",
    description: "Learn the basics of internet and browsing.",
    category: "Basics",
    level: "Beginner",
    duration: "Coming Soon",
    component: <ComingSoon title="Internet Basics" />,
  },

  // Office
  {
    id: "msword",
    name: "MS Word",
    description: "Master Microsoft Word for document creation.",
    category: "Office",
    level: "Beginner",
    duration: "Coming Soon",
    component: <ComingSoon title="MS Word" />,
  },
  {
    id: "excel",
    name: "MS Excel",
    description: "Learn Excel for data analysis and calculations.",
    category: "Office",
    level: "Beginner",
    duration: "Coming Soon",
    component: <ComingSoon title="MS Excel" />,
  },
  {
    id: "powerpoint",
    name: "PowerPoint",
    description: "Create engaging presentations with PowerPoint.",
    category: "Office",
    level: "Beginner",
    duration: "Coming Soon",
    component: <ComingSoon title="PowerPoint" />,
  },

  // Advanced
  {
    id: "node",
    name: "Node.js",
    description: "Build server-side applications with Node.js.",
    category: "Backend",
    level: "Advanced",
    duration: "Coming Soon",
    component: <ComingSoon title="Node.js" />,
  },
  {
    id: "sql",
    name: "MySQL",
    description: "Learn database management with MySQL.",
    category: "Database",
    level: "Beginner",
    duration: "Coming Soon",
    component: <ComingSoon title="MySQL" />,
  },
  {
    id: "dsa",
    name: "DSA",
    description: "Master Data Structures and Algorithms.",
    category: "CS",
    level: "Advanced",
    duration: "Coming Soon",
    component: <ComingSoon title="DSA" />,
  },
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
    console.log("Looking for course with ID:", courseId);
    
    const found = courses.find((c) => c.id === courseId);
    
    if (!found) {
      console.log("Course not found, redirecting...");
      navigate("/learn");
      return;
    }
    
    console.log("Found course:", found.name);
    setCourse(found);
    window.scrollTo(0, 0);
  }, [courseId, navigate]);

  if (!course) {
    return (
      <div className="course-detail-page">
        <div className="loading">Loading course...</div>
      </div>
    );
  }

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