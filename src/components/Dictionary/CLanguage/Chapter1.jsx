// src/components/Dictionary/CLanguage/Chapter1.jsx
import React from "react";
import CodeBox from "../CodeBox/CodeBox";
import './Chapter1.css'; // optional custom CSS for extra styles

export default function Chapter1() {
  return (
    <div className="chapter-content container-fluid px-3 pb-5">

      {/* Header */}
      <div className="chapter-header mb-4 text-center">
        <h1 className="h2 fw-bold">
          📘 Chapter 1: Introduction to C Programming
        </h1>
        <p className="lead text-muted">Learn the foundation of modern programming languages</p>
      </div>

      {/* Hero Section */}
      <div className="card hero-card mb-4 shadow-lg">
        <div className="card-body text-white p-4" style={{ background: 'linear-gradient(135deg, var(--primary), var(--info))' }}>
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="display-6 fw-bold">C Programming Language</h1>
              <p className="mb-0">The foundation of most modern programming languages</p>
              <div className="d-flex flex-wrap gap-2 mt-3">
                <span className="badge bg-light text-dark">Procedural</span>
                <span className="badge bg-light text-dark">High Performance</span>
                <span className="badge bg-light text-dark">Portable</span>
                <span className="badge bg-light text-dark">System Programming</span>
              </div>
            </div>
            <div className="col-md-4 text-end">
              <i className="bi bi-cpu-fill display-1 opacity-75"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="row g-3 mb-4 text-center">
        {[
          { icon: 'bi-calendar', value: '1972', label: 'Created' },
          { icon: 'bi-person', value: 'Dennis Ritchie', label: 'Creator' },
          { icon: 'bi-code-square', value: 'ANSI/ISO', label: 'Standard' },
          { icon: 'bi-trophy', value: 'Top 5', label: 'Popularity' },
        ].map((stat, idx) => (
          <div className="col-6 col-md-3" key={idx}>
            <div className="card shadow-sm h-100 p-2" style={{ borderLeft: '4px solid var(--primary)' }}>
              <i className={`bi ${stat.icon} fs-3 mb-1`} style={{ color: 'var(--primary)' }}></i>
              <h4 className="h5 mb-0">{stat.value}</h4>
              <small className="text-muted">{stat.label}</small>
            </div>
          </div>
        ))}
      </div>

      {/* Section 1: Introduction */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: 'var(--primary)' }}>🎯 What is C?</h2>
        <p style={{ color: 'var(--text-primary)' }}>
          C is a <strong>general-purpose procedural language</strong> created by Dennis Ritchie in 1972. 
          It's the building block of modern programming and is used in <strong>OS development, embedded systems, and high-performance applications</strong>.
        </p>
        <div className="row mt-3">
          <div className="col-md-6">
            <h5 className="fw-bold">Key Features:</h5>
            <ul>
              <li>Procedural: Step-by-step instructions</li>
              <li>Compiled: Runs fast, converted to machine code</li>
              <li>Portable: Works on many platforms</li>
              <li>Structured Programming: Modular & organized</li>
              <li>Low-level Memory Access: Control over memory</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5 className="fw-bold">Design Philosophy:</h5>
            <ul>
              <li>Keep it simple and small</li>
              <li>Trust the programmer</li>
              <li>Only one way to perform an operation</li>
              <li>Fast execution prioritized over portability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: First Program */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: 'var(--info)' }}>🚀 Your First C Program</h2>
        <p>Let's start with the traditional "Hello World" program:</p>
        <CodeBox
          title="Hello World Program"
          language="c"
          executable={true} // Run button allowed
          code={`#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`}
        />
        <p className="mt-2">- Use <code>gcc filename.c -o output</code> to compile and <code>./output</code> to run (Linux/Mac) or <code>output.exe</code> (Windows).</p>

        <p className="fw-bold mt-4">Small snippet example (No Run button):</p>
        <CodeBox
          title="Print Example"
          language="c"
          executable={true} // small snippet, won't show Run
          code={`printf("Hello");`}
        />
      </section>

      {/* Section 3: Real-World Applications */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: 'var(--success)' }}>🌍 Where C is Used</h2>
        <div className="row g-3">
          {[
            { title: "Operating Systems", items: ["Linux Kernel", "Windows Components", "macOS Core"], icon: "bi-window" },
            { title: "Embedded Systems", items: ["IoT Devices", "Microcontrollers", "Automotive"], icon: "bi-cpu" },
            { title: "Databases", items: ["MySQL", "SQLite", "PostgreSQL"], icon: "bi-database" },
            { title: "Game Development", items: ["Game Engines", "Physics Engines"], icon: "bi-controller" }
          ].map((app, idx) => (
            <div className="col-md-6" key={idx}>
              <div className="card h-100 shadow-sm p-3">
                <div className="d-flex align-items-center mb-2">
                  <i className={`bi ${app.icon} fs-4 me-2`} style={{ color: 'var(--primary)' }}></i>
                  <h5 className="mb-0">{app.title}</h5>
                </div>
                <ul>
                  {app.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Advantages & Disadvantages */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: 'var(--warning)' }}>⚖️ Pros & Cons</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-success p-3">
              <h5 className="text-success fw-bold mb-2"><i className="bi bi-check-circle-fill me-2"></i>Advantages</h5>
              <ul>
                <li>High performance & low overhead</li>
                <li>Portable across platforms</li>
                <li>Rich standard library</li>
                <li>Manual memory control</li>
                <li>Foundation for other languages</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-danger p-3">
              <h5 className="text-danger fw-bold mb-2"><i className="bi bi-exclamation-triangle-fill me-2"></i>Disadvantages</h5>
              <ul>
                <li>Manual memory management is error-prone</li>
                <li>No object-oriented features</li>
                <li>Verbose for simple tasks</li>
                <li>Debugging can be tough for beginners</li>
                <li>No automatic garbage collection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Learning Path */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: 'var(--primary)' }}>📚 Learning Path</h2>
        <div className="row g-3">
          {[
            { title: "Beginner", topics: ['Variables', 'Operators', 'Control Flow', 'Functions', 'Arrays'], color: 'primary' },
            { title: "Intermediate", topics: ['Pointers', 'Strings', 'Structures', 'File Handling', 'Dynamic Memory'], color: 'warning' },
            { title: "Advanced", topics: ['Data Structures', 'Algorithms', 'Multi-threading', 'Networking', 'System Calls'], color: 'danger' }
          ].map((level, idx) => (
            <div className="col-md-4" key={idx}>
              <div className={`card shadow-sm border-${level.color} p-3 h-100`}>
                <h5 className={`text-${level.color} fw-bold mb-2`}>{level.title}</h5>
                <ul>
                  {level.topics.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
