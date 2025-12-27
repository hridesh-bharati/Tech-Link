// src/components/Dictionary/CPlusPlus/Chapter2.jsx
import React from "react";
import CodeBox from "../CodeBox/CodeBox";

export default function CppChapter2() {
  return (
    <div className="chapter-content container-fluid px-3 pb-5">

      {/* Header */}
      <div className="chapter-header mb-4 text-center">
        <h1 className="h2 fw-bold">
          📘 Chapter 2: C++ Get Started
        </h1>
        <p className="lead text-muted">Setting up your development environment</p>
      </div>

      {/* Hero Section */}
      <div className="card hero-card mb-4 shadow-lg" style={{ borderLeft: '5px solid #0056b3' }}>
        <div className="card-body text-white p-4" style={{ background: 'linear-gradient(135deg, #0056b3, #0077cc)' }}>
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="display-6 fw-bold">Getting Started with C++</h1>
              <p className="mb-0">Install IDE, write your first program, and understand the basics</p>
            </div>
            <div className="col-md-4 text-end">
              <i className="bi bi-gear-fill display-1 opacity-75"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Installation */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: '#0056b3' }}>🚀 Install C++ Compiler</h2>
        <p className="fs-5">
          To start programming in C++, you need a compiler. A compiler converts your C++ code into machine code that computers can understand.
        </p>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm p-3">
              <h5 className="fw-bold text-primary mb-3">
                <i className="bi bi-windows me-2"></i>
                Windows Installation
              </h5>
              <ol className="mb-0">
                <li className="mb-2"><strong>MinGW:</strong> Download from mingw-w64.org</li>
                <li className="mb-2"><strong>Code::Blocks:</strong> codeblocks.org (includes MinGW)</li>
                <li className="mb-2"><strong>Visual Studio:</strong> visualstudio.microsoft.com</li>
                <li className="mb-2">Set PATH environment variable</li>
                <li>Verify with <code>g++ --version</code></li>
              </ol>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm p-3">
              <h5 className="fw-bold text-success mb-3">
                <i className="bi bi-ubuntu me-2"></i>
                Linux/Mac Installation
              </h5>
              <ol className="mb-0">
                <li className="mb-2"><strong>Ubuntu/Debian:</strong> <code>sudo apt install g++</code></li>
                <li className="mb-2"><strong>Fedora:</strong> <code>sudo dnf install gcc-c++</code></li>
                <li className="mb-2"><strong>macOS:</strong> Install Xcode Command Line Tools</li>
                <li className="mb-2">Or use Homebrew: <code>brew install gcc</code></li>
                <li>Verify with <code>g++ --version</code></li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: IDE Setup */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: '#0077cc' }}>💻 Choose an IDE</h2>
        <div className="row g-3">
          {[
            { name: "Visual Studio Code", desc: "Free, lightweight, extensions available", icon: "bi-code-slash", color: "#0078d4" },
            { name: "Code::Blocks", desc: "Free, includes MinGW, beginner-friendly", icon: "bi-window", color: "#28a745" },
            { name: "Dev-C++", desc: "Simple, Windows-only, good for beginners", icon: "bi-pc", color: "#dc3545" },
            { name: "CLion", desc: "Professional, paid IDE with great features", icon: "bi-jet", color: "#6f42c1" }
          ].map((ide, idx) => (
            <div className="col-md-6 col-lg-3" key={idx}>
              <div className="card h-100 shadow-sm p-3 text-center">
                <i className={`bi ${ide.icon} fs-1 mb-3`} style={{ color: ide.color }}></i>
                <h6 className="fw-bold">{ide.name}</h6>
                <p className="small text-muted mb-0">{ide.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: First Program Step-by-Step */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: '#28a745' }}>📝 Create Your First Program</h2>
        
        <div className="steps-timeline">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h6>Create a New File</h6>
              <p className="small mb-0">Create a file named <code>hello.cpp</code> with a .cpp extension</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h6>Write the Code</h6>
              <p className="small mb-0">Add the following C++ code:</p>
              <CodeBox
                language="cpp"
                code={`#include <iostream>

int main() {
    std::cout << "Hello, World!";
    return 0;
}`}
              />
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h6>Compile the Program</h6>
              <p className="small mb-0">Open terminal/command prompt and run:</p>
              <code className="d-block bg-dark text-white p-2 rounded">g++ hello.cpp -o hello</code>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h6>Run the Program</h6>
              <p className="small mb-0">Execute the compiled program:</p>
              <div className="row g-2">
                <div className="col-md-6">
                  <code className="d-block bg-dark text-white p-2 rounded small">./hello</code>
                  <small className="text-muted">Linux/Mac</small>
                </div>
                <div className="col-md-6">
                  <code className="d-block bg-dark text-white p-2 rounded small">hello.exe</code>
                  <small className="text-muted">Windows</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Online Compilers */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: '#17a2b8' }}>🌐 Online Compilers</h2>
        <p>If you don't want to install anything, try these online compilers:</p>
        <div className="row g-3">
          {[
            { name: "Programiz", url: "https://www.programiz.com/cpp-programming/online-compiler/", features: "Simple, beginner-friendly" },
            { name: "Replit", url: "https://replit.com/", features: "Collaborative, project-based" },
            { name: "OnlineGDB", url: "https://www.onlinegdb.com/online_c++_compiler", features: "Debugger included" },
            { name: "W3Schools TryIt", url: "https://www.w3schools.com/cpp/trycpp.asp", features: "Built-in examples" }
          ].map((compiler, idx) => (
            <div className="col-md-6 col-lg-3" key={idx}>
              <div className="card h-100 shadow-sm p-3">
                <h6 className="fw-bold">{compiler.name}</h6>
                <p className="small text-muted mb-2">{compiler.features}</p>
                <a href={compiler.url} target="_blank" rel="noopener noreferrer" 
                   className="btn btn-sm btn-outline-primary w-100">
                  Try Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Troubleshooting */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: '#fd7e14' }}>🔧 Common Issues & Solutions</h2>
        <div className="accordion" id="troubleshootingAccordion">
          {[
            { 
              id: "issue1", 
              title: "'g++' is not recognized", 
              solution: "Add MinGW/bin to PATH environment variable or reinstall with correct setup" 
            },
            { 
              id: "issue2", 
              title: "Permission denied on Linux/Mac", 
              solution: "Use chmod +x filename or run with sudo if necessary" 
            },
            { 
              id: "issue3", 
              title: "Include file not found", 
              solution: "Check spelling of #include <iostream> and ensure standard library is installed" 
            },
            { 
              id: "issue4", 
              title: "Program compiles but doesn't run", 
              solution: "Check if you're in the correct directory and file exists" 
            }
          ].map((issue, idx) => (
            <div className="accordion-item" key={idx}>
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                        data-bs-target={`#${issue.id}`}>
                  <i className="bi bi-exclamation-triangle-fill text-warning me-2"></i>
                  {issue.title}
                </button>
              </h3>
              <div id={issue.id} className="accordion-collapse collapse" data-bs-parent="#troubleshootingAccordion">
                <div className="accordion-body">
                  <strong>Solution:</strong> {issue.solution}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Next Chapter Button */}
      <div className="text-center mt-5">
        <a href="/cpp/syntax" className="btn btn-lg px-5" style={{ 
          backgroundColor: '#0056b3', 
          color: 'white',
          border: 'none'
        }}>
          Next Chapter: C++ Syntax <i className="bi bi-arrow-right ms-2"></i>
        </a>
      </div>

    </div>
  );
}