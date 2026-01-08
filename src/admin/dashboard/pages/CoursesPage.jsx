import React from "react";
import { BookOpen, Plus, TrendingUp } from "lucide-react";

const CoursesPage = ({ userData }) => (
  <div className="courses-page">
    <div className="page-header">
      <h1>Course Management</h1>
      <p>Manage all courses and learning materials</p>
    </div>
    
    <div className="section">
      <div className="section-header">
        <h2><BookOpen size={24} /> All Courses</h2>
        <button className="btn-add">
          <Plus size={16} />
          Add New Course
        </button>
      </div>
      
      <div className="courses-list">
        <p className="empty-state">
          No courses available yet. Add your first course to get started!
        </p>
      </div>
    </div>
  </div>
);

export default CoursesPage;