import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./CourseDetail.css";

// Import course components
import Fundamentals from "../components/Dictionary/Fundamentals";
import CLanguage from "../components/Dictionary/CLanguage";
import CPlusPlus from "../components/Dictionary/CPlusPlus";
import Tally from "../components/Dictionary/Tally";

// Course Data
const courses = [
  { id: "tally", name: "Tally ERP 9", description: "Complete Tally ERP 9 course with GST, Accounting, Inventory & Payroll.", category: "Business Software", level: "Beginner", duration: "20 Chapters", component: <Tally /> },
  { id: "c", name: "C Programming", description: "Learn the fundamentals of C programming language from scratch.", category: "Programming", level: "Beginner", duration: "20 Chapters", component: <CLanguage /> },
  { id: "cpp", name: "C++ Programming", description: "Master C++ with OOP, STL, and modern C++ features.", category: "Programming", level: "Intermediate", duration: "20 Chapters", component: <CPlusPlus /> },
  { id: "fundamentals", name: "Computer Fundamentals", description: "Learn basic computer concepts step by step.", category: "Basics", level: "Beginner", duration: "8 Chapters", component: <Fundamentals /> },
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
    if (!found) return navigate("/learn");
    setCourse(found);
    window.scrollTo(0, 0);
  }, [courseId, navigate]);

  if (!course) return <div className="course-detail-page"><div className="loading">Loading course...</div></div>;

  return (
    <div className="course-detail-page">
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
      <div className="course-body">
        {course.component}
      </div>
    </div>
  );
}
