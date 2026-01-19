import React from "react";
import "./CourseCard.css";

export default function CourseCard({ course, onClick }) {
  return (
    <div className="android-course-card ripple" onClick={() => onClick(course.id)}>
      <div className="card-top">
        <div className="badge-col">
          <span className="chip category">{course.cat}</span>
          <span className="chip level">{course.lvl}</span>
        </div>

        <div className="course-icon" style={{ background: course.col }}>
          {course.name.charAt(0)}
        </div>
      </div>

      <h3 className="course-title">{course.name}</h3>
    </div>
  );
}
