import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./CourseDetail.css";

/* ================== COURSE COMPONENTS ================== */
import Fundamentals from "../components/Dictionary/Fundamentals";
import CLanguage from "../components/Dictionary/CLanguage";
import CPlusPlus from "../components/Dictionary/CPlusPlus";
import Tally from "../components/Dictionary/Tally";
import TypingMaster from "../components/Dictionary/TypingMaster";

/* ================== COURSE DATA ================== */
const courses = [
  {
    id: "tally",
    name: "Tally ERP 9",
    description:
      "Complete Tally ERP 9 course with GST, Accounting, Inventory & Payroll.",
    category: "Business Software",
    level: "Beginner",
    duration: "20 Chapters",
    component: <Tally />,
  },
  {
    id: "c",
    name: "C Programming",
    description:
      "Learn the fundamentals of C programming language from scratch.",
    category: "Programming",
    level: "Beginner",
    duration: "20 Chapters",
    component: <CLanguage />,
  },
  {
    id: "cpp",
    name: "C++ Programming",
    description:
      "Master C++ with OOP, STL, and modern C++ features.",
    category: "Programming",
    level: "Intermediate",
    duration: "20 Chapters",
    component: <CPlusPlus />,
  },
  {
    id: "fundamentals",
    name: "Computer Fundamentals",
    description:
      "Learn basic computer concepts step by step.",
    category: "Basics",
    level: "Beginner",
    duration: "8 Chapters",
    component: <Fundamentals />,
  },
  {
    id: "typing",
    name: "Typing Master",
    description:
      "Learn fast & accurate typing with proper finger placement.",
    category: "Skill Development",
    level: "Beginner",
    duration: "10+ Lessons",
    component: <TypingMaster />,
  },
];

/* ================== MAIN ================== */
export default function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const found = courses.find(c => c.id === courseId);
    if (!found) return navigate("/learn");
    setCourse(found);
    window.scrollTo(0, 0);
  }, [courseId, navigate]);

  if (!course) {
    return <div className="loading-screen">Loading...</div>;
  }

  return (
    <div className="course-detail-page">

      {/* 🔹 ANDROID APP BAR */}
      <header className="course-appbar">
        <button className="icon-btn" onClick={() => navigate("/learn")}>
          <FaArrowLeft />
        </button>

        <div className="appbar-title">
          <span>{course.name}</span>
          <small>{course.category}</small>
        </div>
      </header>

      {/* 🔹 COURSE BODY */}
      <main className="course-body">
        {course.component}
      </main>

    </div>
  );
}
