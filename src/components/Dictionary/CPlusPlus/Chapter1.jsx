// src/components/Dictionary/CPlusPlus/Chapter1.jsx
import React from "react";
import CodeBox from "../CodeBox/CodeBox";
import {
  FaCode, FaCogs, FaGamepad, FaDatabase,
  FaDesktop, FaGlobe, FaBolt, FaShieldAlt,
  FaChartLine, FaExclamationTriangle,
  FaCheckCircle, FaTimesCircle, FaBook,
  FaGraduationCap, FaRocket, FaHistory,
  FaLaptopCode, FaTerminal, FaCaretRight,
  FaFileCode, FaMicrochip, FaLanguage,
  FaBalanceScale, FaStar, FaRegStar,
  FaLinux, FaWindows, FaApple,
  FaFirefoxBrowser, FaChrome, FaCube
} from "react-icons/fa";

// Reusable Section Component
const Section = ({ title, icon: Icon, children, className = "" }) => (
  <section className={`mb-5 ${className}`}>
    <h3 className="h4 fw-bold text-primary mb-3 d-flex align-items-center gap-2">
      {Icon && <Icon className="text-primary" />}
      {title}
    </h3>
    {children}
  </section>
);

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, items, color = "primary" }) => (
  <div className={`card h-100 border-start border-start-4 border-start-${color}`}>
    <div className="card-body p-3">
      <h6 className={`fw-bold text-${color} d-flex align-items-center gap-2 mb-3`}>
        {Icon && <Icon />}
        {title}
      </h6>
      <ul className="mb-0 ps-3">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

// Timeline Item Component
const TimelineItem = ({ year, description, icon: Icon }) => (
  <li className="d-flex align-items-start gap-3 mb-2">
    <span className="badge bg-primary rounded-pill d-flex align-items-center gap-1">
      {Icon && <Icon size={14} />}
      {year}
    </span>
    <span>{description}</span>
  </li>
);

export default function CppChapter1() {
  // Data definitions for DRY principle
  const keyFeatures = {
    left: [
      "Object-Oriented Programming",
      "High Performance (like C)",
      "Standard Template Library (STL)",
      "Exception Handling"
    ],
    right: [
      "Zero-overhead principle",
      "Multi-paradigm support",
      "Direct hardware access",
      "Backward compatible with C"
    ]
  };

  const applications = [
    {
      icon: FaDesktop,
      title: "Operating Systems",
      items: ["Windows Kernel", "macOS Components", "Linux Modules"],
      color: "primary"
    },
    {
      icon: FaGamepad,
      title: "Game Development",
      items: ["Unreal Engine", "Game Physics", "3D Graphics"],
      color: "success"
    },
    {
      icon: FaGlobe,
      title: "Web Browsers",
      items: ["Chrome (V8 Engine)", "Firefox", "Safari"],
      color: "info"
    },
    {
      icon: FaDatabase,
      title: "Database Systems",
      items: ["MySQL", "MongoDB", "PostgreSQL"],
      color: "warning"
    }
  ];

  const cppStandards = [
    { year: "1985", description: "First release (C with Classes)", icon: FaHistory },
    { year: "1998", description: "C++98 (First ISO standard, STL)", icon: FaBook },
    { year: "2011", description: "C++11 (Modern C++, auto, lambdas)", icon: FaBolt },
    { year: "2014", description: "C++14 (Minor improvements)", icon: FaChartLine },
    { year: "2017", description: "C++17 (Structured bindings)", icon: FaCogs },
    { year: "2020", description: "C++20 (Concepts, ranges)", icon: FaRocket },
    { year: "2023", description: "C++23 (Latest features)", icon: FaGraduationCap }
  ];

  const advantages = [
    "High Performance",
    "Object-Oriented",
    "Rich Library (STL)",
    "Full system control",
    "Portable across platforms"
  ];

  const disadvantages = [
    "Complex for beginners",
    "Manual memory management",
    "More code for simple tasks",
    "No garbage collection",
    "Security vulnerabilities possible"
  ];

  const learningPaths = [
    {
      level: "Beginner Level",
      color: "primary",
      items: ["Basic Syntax", "Variables & Data Types", "Operators", "Control Flow", "Functions", "Arrays"]
    },
    {
      level: "Intermediate Level",
      color: "warning",
      items: ["Classes & Objects", "Inheritance", "Polymorphism", "Templates", "STL", "Exception Handling"]
    },
    {
      level: "Advanced Level",
      color: "danger",
      items: ["Smart Pointers", "Multithreading", "Design Patterns", "System Programming", "Move Semantics", "Boost Library"]
    }
  ];

  const cppVsC = [
    {
      feature: "Programming Style",
      c: "Procedural only",
      cpp: "Procedural + Object-Oriented"
    },
    {
      feature: "Object-Oriented",
      c: "No support",
      cpp: "Yes (Classes, Inheritance)"
    },
    {
      feature: "Input/Output",
      c: "printf/scanf",
      cpp: "cin/cout"
    },
    {
      feature: "Memory Management",
      c: "malloc/free",
      cpp: "new/delete"
    },
    {
      feature: "Exception Handling",
      c: "No built-in",
      cpp: "Try-catch blocks"
    }
  ];


  return (
    <div className="chapter-content container-fluid px-3 pb-5">
      {/* Header */}
      <div className="chapter-header mt-4 mb-5 text-center">
        <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
          <div className="p-3 bg-primary rounded-circle">
            <FaLaptopCode size={50} className="text-white" />
          </div>
          <div>
            <h1 className="h2 fw-bold">Chapter 1: Introduction to C++</h1>
            <p className="lead text-white">Powerful programming language for high-performance applications</p>
          </div>
        </div>
      </div>

      {/* What is C++? */}
      <section className="mb-5">
        <div className="card border-primary shadow-sm">
          <div className="card-header bg-primary text-white py-3 d-flex align-items-center gap-2">
            <FaCode />
            <h4 className="h5 mb-0">What is C++?</h4>
          </div>
          <div className="card-body p-4">
            <p className="mb-4">
              C++ is a powerful programming language created by <b>Bjarne Stroustrup</b> in 1985.
              It extends C language with object-oriented features while maintaining high performance.
            </p>
            <div className="row mt-3">
              <div className="col-md-6">
                <h6 className="fw-bold d-flex align-items-center gap-2 mb-3">
                  <FaCogs className="text-primary" />
                  Key Features
                </h6>
                <ul className="list-unstyled">
                  {keyFeatures.left.map((feature, idx) => (
                    <li key={idx} className="mb-2 d-flex align-items-start gap-2">
                      <FaCheckCircle className="text-success mt-1" size={14} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6">
                <h6 className="fw-bold d-flex align-items-center gap-2 mb-3">
                  <FaShieldAlt className="text-primary" />
                  Design Philosophy
                </h6>
                <ul className="list-unstyled">
                  {keyFeatures.right.map((feature, idx) => (
                    <li key={idx} className="mb-2 d-flex align-items-start gap-2">
                      <FaCheckCircle className="text-success mt-1" size={14} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Program */}
      <Section title="First C++ Program" icon={FaCode}>
        <CodeBox
          title="Hello World Program"
          language="cpp"
          executable={true}
          icon={<FaCode />}
          code={`#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`}
        />

        <div className="mt-4">
          <h6 className="fw-bold mb-2 d-flex align-items-center gap-2">
            <FaTerminal />
            Compile and Run:
          </h6>
          <div className="d-flex flex-column gap-2">
            <div className="d-flex align-items-center gap-2 bg-dark text-light p-3 rounded">
              <span className="text-info">$</span>
              <code className="flex-grow-1">g++ program.cpp -o output</code>
            </div>
            <div className="d-flex align-items-center gap-2 bg-dark text-light p-3 rounded">
              <span className="text-info">$</span>
              <code className="flex-grow-1">./output</code>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <CodeBox
            title="Using namespace (Simpler)"
            language="cpp"
            icon={<FaCode />}
            code={`#include <iostream>
using namespace std;

int main() {
    cout << "Hello with namespace!" << endl;
    return 0;
}`}
          />
        </div>
      </Section>

      {/* C++ vs C */}
      <Section title="C++ vs C: Key Differences" icon={FaBalanceScale}>
        <div className="table-responsive ">
          <table className="table table-hover table-bordered p-0 m-0">
            <thead className="table-primary">
              <tr>
                <th width="30%">Feature</th>
                <th width="35%" className="text-center">
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <FaLanguage />
                    <span className="badge bg-secondary">C Language</span>
                  </div>
                </th>
                <th width="35%" className="text-center">
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <FaCode />
                    <span className="badge bg-primary">C++ Language</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {cppVsC.map((row, idx) => (
                <tr key={idx}>
                  <td><b>{row.feature}</b></td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      {row.c}
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      {row.cpp}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <div className="row g-4">
        {applications.map((app, idx) => (
          <div key={idx} className="col-md-6 col-lg-3">
            {/* Custom class added here */}
            <div className="card h-100 android-app-card p-2">
              <div className="card-body">
                {/* Title with Android Primary Color */}
                <h6 className="fw-bold d-flex align-items-center gap-2 mb-3" style={{ color: '#6750A4' }}>
                  <div className="icon-container p-2" style={{ backgroundColor: '#EADDFF', borderRadius: '12px' }}>
                    {app.icon && <app.icon size={20} />}
                  </div>
                  {app.title}
                </h6>

                <ul className="mb-0">
                  {app.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <span style={{ color: '#6750A4', marginRight: '8px' }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
 {/* C++ Standards */}
<Section title="C++ Standards Timeline" icon={FaHistory}>
  <div className="card android-history-card">
    <div className="card-body p-4 p-md-5">
      
      <div className="android-timeline-wrapper">
        {/* The Vertical Keyline */}
        <div className="android-timeline-line"></div>

        {cppStandards.map((standard, idx) => (
          <div key={idx} className="android-history-item">
            
            {/* Year Node */}
            <div className="year-node">
              {/* Optional small dot or icon inside */}
            </div>

            {/* Content Box */}
            <div className="history-content shadow-sm">
              <div className="d-flex align-items-center justify-content-between mb-1">
                <span className="badge rounded-pill" style={{ backgroundColor: '#EADDFF', color: '#21005D' }}>
                  {standard.year}
                </span>
                {standard.icon && <standard.icon className="text-muted" />}
              </div>
              <p className="mb-0 fw-medium" style={{ color: '#1C1B1F' }}>
                {standard.description}
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  </div>
</Section>
      {/* Pros and Cons */}
      <Section title="Advantages & Disadvantages" icon={FaBolt}>
        <div className="row g-4">

          {/* Advantages */}
          <div className="col-md-6">
            <div className="android-app-card h-100 p-4">

              <div className="android-section-title">
                <div className="android-icon-wrapper">
                  <FaStar size={20} />
                </div>
                Advantages
              </div>

              <ul className="android-list-unstyled">
                {advantages.map((item, idx) => (
                  <li key={idx} className="android-list-item">
                    <span className="android-bullet"></span>
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          </div>

          {/* Disadvantages */}
          <div className="col-md-6">
            <div className="android-app-card h-100 p-4">

              <div className="android-section-title">
                <div
                  className="android-icon-wrapper"
                  style={{ backgroundColor: "#F2B8B5", color: "#601410" }}
                >
                  <FaExclamationTriangle size={20} />
                </div>
                Disadvantages
              </div>

              <ul className="android-list-unstyled">
                {disadvantages.map((item, idx) => (
                  <li key={idx} className="android-list-item">
                    <span
                      className="android-bullet"
                      style={{ backgroundColor: "#B3261E" }}
                    ></span>
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>
      </Section>


      <Section title="Learning Path" icon={FaGraduationCap}>
        <div className="row g-4">
          {learningPaths.map((path, idx) => (
            <div key={idx} className="col-md-4">
              {/* Android Material 3 Elevated Surface */}
              <div className="card h-100 android-timeline-card shadow-sm p-4">

                {/* Level Badge */}
                <div>
                  <span className={`android-level-badge bg-${path.color} text-white`}>
                    {path.level}
                  </span>
                </div>

                <h5 className="fw-bold mb-4" style={{ color: '#1C1B1F' }}>
                  {path.level === 'Beginner' ? 'Starting Point' :
                    path.level === 'Intermediate' ? 'Core Concepts' : 'Mastery'}
                </h5>

                {/* Timeline List */}
                <ul className="step-list m-0">
                  {path.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="step-item">
                      <span className="small text-muted d-block" style={{ fontSize: '0.8rem' }}>
                        Step {itemIdx + 1}
                      </span>
                      <span className="fw-medium" style={{ color: '#49454F' }}>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>
      </Section>

    </div>
  );
}