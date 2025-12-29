// src/components/Dictionary/CPlusPlus/Chapter1.jsx
import React from "react";
import CodeBox from "../CodeBox/CodeBox";

export default function CppChapter1() {
  return (
    <div className="chapter-content container-fluid px-1 pb-5">

      {/* Header */}
      <div className="chapter-header mt-2 mb-4 text-center">
        <h1 className="h2 fw-bold">
          📘 Chapter 1: Introduction to C++ Programming
        </h1>
        <p className="text-white">Learn the powerful, high-performance language</p>
      </div>

      {/* Hero Section */}
      <div className="card hero-card mb-4 shadow-lg" style={{ borderLeft: '5px solid #0056b3' }}>
        <div className="card-body text-white p-4" style={{ background: 'linear-gradient(135deg, #0056b3, #0077cc)' }}>
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="display-6 fw-bold">C++ Programming Language</h1>
              <p className="mb-0">High-performance language combining C efficiency with Object-Oriented features</p>
              <div className="d-flex flex-wrap gap-2 mt-3">
                <span className="badge bg-light text-dark">Object-Oriented</span>
                <span className="badge bg-light text-dark">High Performance</span>
                <span className="badge bg-light text-dark">Multi-paradigm</span>
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
          { icon: 'bi-calendar', value: '1985', label: 'Created' },
          { icon: 'bi-person', value: 'Bjarne Stroustrup', label: 'Creator' },
          { icon: 'bi-code-square', value: 'C++20', label: 'Latest Standard' },
          { icon: 'bi-trophy', value: 'Top 3', label: 'Popularity' },
        ].map((stat, idx) => (
          <div className="col-6 col-md-3" key={idx}>
            <div className="card shadow-sm h-100 p-2" style={{ borderLeft: '4px solid #0056b3' }}>
              <i className={`bi ${stat.icon} fs-3 mb-1`} style={{ color: '#0056b3' }}></i>
              <h4 className="h5 mb-0">{stat.value}</h4>
              <small className="text-muted">{stat.label}</small>
            </div>
          </div>
        ))}
      </div>

      {/* Section 1: Introduction */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: '#0056b3' }}>🎯 What is C++?</h2>
        <p className="fs-6">
          C++ is a <strong>general-purpose programming language</strong> created by Bjarne Stroustrup in 1985. 
          It is an extension of C with <strong>object-oriented features</strong> and is used for <strong>system software, game development, drivers, and high-performance applications</strong>.
        </p>
        <div className="row mt-4">
          <div className="col-md-6">
            <h5 className="fw-bold">Key Features:</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i>Object-Oriented Programming (Classes, Objects)</li>
              <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i>High Performance (Like C)</li>
              <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i>Standard Template Library (STL)</li>
              <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i>Exception Handling</li>
              <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i>Operator Overloading</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5 className="fw-bold">Design Philosophy:</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><i className="bi bi-lightbulb-fill text-warning me-2"></i>Zero-overhead principle</li>
              <li className="list-group-item"><i className="bi bi-lightbulb-fill text-warning me-2"></i>Multi-paradigm support</li>
              <li className="list-group-item"><i className="bi bi-lightbulb-fill text-warning me-2"></i>Direct hardware access</li>
              <li className="list-group-item"><i className="bi bi-lightbulb-fill text-warning me-2"></i>Backward compatibility with C</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: First Program */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: '#0077cc' }}>🚀 Your First C++ Program</h2>
        <p>Let's start with the traditional "Hello World" program in C++:</p>
        <CodeBox
          title="Hello World Program in C++"
          language="cpp"
          executable={true}
          code={`#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`}
        />
        <p className="mt-2">
          <strong>Compilation:</strong><br/>
          <code>g++ filename.cpp -o output</code> (Linux/Mac)<br/>
          <code>g++ filename.cpp -o output.exe</code> (Windows)<br/>
          <code>./output</code> to run
        </p>

        <div className="mt-4">
          <h5 className="fw-bold">Example with namespace:</h5>
          <CodeBox
            title="Using namespace"
            language="cpp"
            code={`#include <iostream>
using namespace std;

int main() {
    cout << "Hello with namespace!" << endl;
    return 0;
}`}
          />
        </div>
      </section>

      {/* Section 3: C++ vs C Comparison */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: '#28a745' }}>🔄 C++ vs C: Key Differences</h2>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>Feature</th>
                <th>C Language</th>
                <th>C++ Language</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Programming Paradigm</strong></td>
                <td>Procedural only</td>
                <td>Multi-paradigm (Procedural + OOP + Generic)</td>
              </tr>
              <tr>
                <td><strong>Object-Oriented</strong></td>
                <td>No support</td>
                <td>Yes (Classes, Inheritance, Polymorphism)</td>
              </tr>
              <tr>
                <td><strong>Function Overloading</strong></td>
                <td>Not allowed</td>
                <td>Supported</td>
              </tr>
              <tr>
                <td><strong>Exception Handling</strong></td>
                <td>No built-in support</td>
                <td>Try-catch blocks</td>
              </tr>
              <tr>
                <td><strong>Input/Output</strong></td>
                <td>printf/scanf</td>
                <td>cin/cout streams</td>
              </tr>
              <tr>
                <td><strong>Memory Management</strong></td>
                <td>malloc/free</td>
                <td>new/delete operators</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Real-World Applications */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: '#17a2b8' }}>🌍 Where C++ is Used</h2>
        <div className="row g-3">
          {[
            { 
              title: "Operating Systems", 
              items: ["Windows Kernel", "macOS Components", "Linux Kernel Modules"], 
              icon: "bi-windows",
              color: "#dc3545"
            },
            { 
              title: "Game Development", 
              items: ["Unreal Engine", "Game Physics", "3D Graphics"], 
              icon: "bi-controller",
              color: "#6f42c1"
            },
            { 
              title: "Web Browsers", 
              items: ["Chrome (V8 Engine)", "Firefox", "Safari"], 
              icon: "bi-browser-chrome",
              color: "#28a745"
            },
            { 
              title: "Database Systems", 
              items: ["MySQL", "MongoDB", "PostgreSQL"], 
              icon: "bi-database",
              color: "#fd7e14"
            },
            { 
              title: "Embedded Systems", 
              items: ["IoT Devices", "Medical Equipment", "Automotive"], 
              icon: "bi-cpu",
              color: "#20c997"
            },
            { 
              title: "Financial Systems", 
              items: ["High-Frequency Trading", "Banking Software", "Stock Markets"], 
              icon: "bi-graph-up",
              color: "#ffc107"
            }
          ].map((app, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <div className="card h-100 shadow-sm p-3 border-0" style={{ borderLeft: `4px solid ${app.color}` }}>
                <div className="d-flex align-items-center mb-2">
                  <i className={`bi ${app.icon} fs-4 me-2`} style={{ color: app.color }}></i>
                  <h5 className="mb-0 fw-bold">{app.title}</h5>
                </div>
                <ul className="mb-0">
                  {app.items.map((item, i) => (
                    <li key={i} className="py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: C++ Standards Evolution */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: '#0056b3' }}>📅 C++ Standards Timeline</h2>
        <div className="timeline">
          {[
            { year: "1985", title: "C++ First Release", desc: "C with Classes released by Bjarne Stroustrup", color: "#0056b3" },
            { year: "1998", title: "C++98 (First Standard)", desc: "ISO standardized, introduced STL", color: "#28a745" },
            { year: "2011", title: "C++11 (Modern C++)", desc: "Auto, lambdas, smart pointers, move semantics", color: "#dc3545" },
            { year: "2014", title: "C++14", desc: "Minor improvements, generic lambdas", color: "#fd7e14" },
            { year: "2017", title: "C++17", desc: "Structured bindings, std::optional", color: "#6f42c1" },
            { year: "2020", title: "C++20", desc: "Concepts, ranges, coroutines, modules", color: "#20c997" },
            { year: "2023", title: "C++23", desc: "std::print, stacktrace library", color: "#ffc107" }
          ].map((item, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-marker" style={{ backgroundColor: item.color }}></div>
              <div className="timeline-content">
                <h6 className="fw-bold">{item.year} - {item.title}</h6>
                <p className="small mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Advantages & Disadvantages */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: '#6f42c1' }}>⚖️ Pros & Cons of C++</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-success p-3">
              <h5 className="text-success fw-bold mb-3">
                <i className="bi bi-check-circle-fill me-2"></i>
                Advantages
              </h5>
              <ul className="mb-0">
                <li className="mb-2"><strong>High Performance:</strong> Close to hardware, minimal overhead</li>
                <li className="mb-2"><strong>Object-Oriented:</strong> Better code organization with OOP</li>
                <li className="mb-2"><strong>Rich Library:</strong> STL provides ready-to-use data structures</li>
                <li className="mb-2"><strong>Control:</strong> Full control over memory and system resources</li>
                <li className="mb-2"><strong>Portable:</strong> Runs on multiple platforms</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-danger p-3">
              <h5 className="text-danger fw-bold mb-3">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                Disadvantages
              </h5>
              <ul className="mb-0">
                <li className="mb-2"><strong>Complex:</strong> Steep learning curve for beginners</li>
                <li className="mb-2"><strong>Memory Management:</strong> Manual memory handling can cause leaks</li>
                <li className="mb-2"><strong>Verbose:</strong> More code needed for simple tasks</li>
                <li className="mb-2"><strong>No Garbage Collection:</strong> Manual cleanup required</li>
                <li className="mb-2"><strong>Security:</strong> Vulnerable to buffer overflows and pointer errors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Learning Path */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: '#0056b3' }}>📚 Learning Path</h2>
        <div className="row g-3">
          {[
            { 
              title: "Beginner Level", 
              topics: ['Basic Syntax', 'Variables & Data Types', 'Operators', 'Control Flow', 'Functions', 'Arrays'], 
              color: 'primary' 
            },
            { 
              title: "Intermediate Level", 
              topics: ['Classes & Objects', 'Inheritance', 'Polymorphism', 'Templates', 'STL', 'Exception Handling'], 
              color: 'warning' 
            },
            { 
              title: "Advanced Level", 
              topics: ['Smart Pointers', 'Move Semantics', 'Multithreading', 'Design Patterns', 'Boost Library', 'System Programming'], 
              color: 'danger' 
            }
          ].map((level, idx) => (
            <div className="col-md-4" key={idx}>
              <div className={`card shadow-sm border-${level.color} p-3 h-100`}>
                <h5 className={`text-${level.color} fw-bold mb-3 border-bottom pb-2`}>
                  <i className={`bi bi-${idx === 0 ? 'play' : idx === 1 ? 'arrow-right' : 'trophy'}-circle me-2`}></i>
                  {level.title}
                </h5>
                <ul className="mb-0">
                  {level.topics.map((t, i) => (
                    <li key={i} className="py-1">
                      <i className={`bi bi-chevron-right text-${level.color} me-2`}></i>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Next Chapter Button */}
      <div className="text-center mt-5">
        <a href="#" className="btn btn-lg px-5" style={{ 
          backgroundColor: '#0056b3', 
          color: 'white',
          border: 'none'
        }}>
          Next Chapter: C++ Basic Syntax <i className="bi bi-arrow-right ms-2"></i>
        </a>
      </div>

    </div>
  );
}