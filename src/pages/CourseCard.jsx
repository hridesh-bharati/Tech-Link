import React from 'react';
import './CourseCard.css';

export default function CourseCard({ course, onClick }) {
  return (
    <div className="course-card" onClick={() => onClick(course.id)}>
      <div className="card-content">
        <div className="card-header">
          <div className="course-badges">
            <span className="badge category">{course.cat}</span>
            <span className="badge level">{course.lvl}</span>
          </div>
          <div className="course-icon" style={{ background: course.col }}>
            <span>{course.name.charAt(0)}</span>
          </div>
        </div>
        
        <h3 className="course-title">{course.name}</h3>
      </div>
    </div>
  );
}