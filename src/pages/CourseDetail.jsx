import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CourseDetail.css";

/* Components Import */
import Fundamentals from "../components/Dictionary/Fundamentals";
import CLanguage from "../components/Dictionary/CLanguage";
import CPlusPlus from "../components/Dictionary/CPlusPlus";
import Tally from "../components/Dictionary/Tally";
import TypingMaster from "../components/Dictionary/TypingMaster";

export const AVAILABLE_COURSES = [
  { id: "fundamentals", component: <Fundamentals /> },
  { id: "typing", component: <TypingMaster /> },
  { id: "tally", component: <Tally /> },
  { id: "c", component: <CLanguage /> },
  { id: "cpp", component: <CPlusPlus /> },
];

export default function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const found = AVAILABLE_COURSES.find(c => c.id === courseId);
    if (!found) return navigate("/learn");
    setCourse(found);
  }, [courseId, navigate]);

  if (!course) return <div className="loading">Loading...</div>;

  return (
    <div className="course-detail-page">
      <main className="course-content-wrapper">
        {course.component}
      </main>
    </div>
  );
}