// src/components/Dictionary/CPlusPlus/Chapter3.jsx
import React from "react";
import CodeBox from "../CodeBox/CodeBox";

export default function CppChapter3() {
  return (
    <div className="chapter-content container-fluid px-3 pb-5">

      <div className="chapter-header mb-4 text-center">
        <h1 className="h2 fw-bold">📘 Chapter 3: C++ Syntax</h1>
        <p className="lead text-muted">Understanding C++ program structure and rules</p>
      </div>

      <div className="card hero-card mb-4 shadow-lg" style={{ borderLeft: '5px solid #0056b3' }}>
        <div className="card-body text-white p-4" style={{ background: 'linear-gradient(135deg, #0056b3, #0077cc)' }}>
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="display-6 fw-bold">C++ Basic Syntax</h1>
              <p className="mb-0">Rules and structure for writing C++ programs</p>
            </div>
            <div className="col-md-4 text-end">
              <i className="bi bi-file-code-fill display-1 opacity-75"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Basic Structure */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: '#0056b3' }}>📖 Basic Program Structure</h2>
        
        <div className="row">
          <div className="col-md-8">
            <CodeBox
              title="Complete C++ Program"
              language="cpp"
              executable={true}
              code={`#include <iostream>     // Header file
using namespace std;  // Standard namespace

// Main function
int main() {
    // Statement
    cout << "Hello World!";
    
    // Return statement
    return 0;
}`}
            />
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm p-3">
              <h5 className="fw-bold text-primary">Parts of a C++ Program</h5>
              <ul className="mb-0">
                <li className="mb-2"><strong>Preprocessor Directive:</strong> #include</li>
                <li className="mb-2"><strong>Namespace:</strong> using namespace</li>
                <li className="mb-2"><strong>Main Function:</strong> int main()</li>
                <li className="mb-2"><strong>Statements:</strong> cout, return</li>
                <li className="mb-2"><strong>Comments:</strong> // or /* */</li>
                <li><strong>Curly Braces:</strong> { } for code blocks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Statement Endings */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: '#0077cc' }}>⏹️ Semicolons & Whitespace</h2>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm p-3 border-success">
              <h5 className="text-success fw-bold">✓ Correct Syntax</h5>
              <CodeBox
                language="cpp"
                code={`int x = 5;        // Semicolon required
cout << x;       // Another semicolon
return 0;        // Ends the statement`}
              />
              <p className="mt-2 small">Each statement must end with a semicolon (;)</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm p-3 border-danger">
              <h5 className="text-danger fw-bold">✗ Wrong Syntax</h5>
              <CodeBox
                language="cpp"
                code={`int x = 5        // Missing semicolon
cout << x        // Also missing
return 0         // Error!`}
              />
              <p className="mt-2 small">Missing semicolons cause compilation errors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Case Sensitivity */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: '#28a745' }}>🔠 Case Sensitivity</h2>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm p-3">
              <h5 className="fw-bold">C++ is Case Sensitive</h5>
              <CodeBox
                language="cpp"
                code={`int age = 25;      // Correct
int Age = 25;      // Different variable
INT age = 25;      // Error - INT not recognized
Int age = 25;      // Error - Int not recognized`}
              />
              <p className="mt-2 small"><code>age</code>, <code>Age</code>, and <code>AGE</code> are different variables</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm p-3">
              <h5 className="fw-bold">Keywords are Lowercase</h5>
              <CodeBox
                language="cpp"
                code={`int main() {      // Correct
    return 0;
}

INT MAIN() {      // Error
    RETURN 0;     // Error
}`}
              />
              <p className="mt-2 small">All C++ keywords must be lowercase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Naming Rules */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: '#17a2b8' }}>🏷️ Naming Conventions</h2>
        
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>Rule</th>
                <th>Valid Examples</th>
                <th>Invalid Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Start with letter or _</td>
                <td><code>age, _count, total_sum</code></td>
                <td><code>1st, 2var, #price</code></td>
              </tr>
              <tr>
                <td>Letters, digits, underscore</td>
                <td><code>user_name, total123, MAX_SIZE</code></td>
                <td><code>user-name, total@, first name</code></td>
              </tr>
              <tr>
                <td>No spaces</td>
                <td><code>firstName, last_name</code></td>
                <td><code>first name, last name</code></td>
              </tr>
              <tr>
                <td>Cannot be keywords</td>
                <td><code>myInt, myClass</code></td>
                <td><code>int, class, return</code></td>
              </tr>
              <tr>
                <td>Case sensitive</td>
                <td><code>age ≠ Age ≠ AGE</code></td>
                <td><code>-</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Common Keywords */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: '#6f42c1' }}>🔑 C++ Keywords</h2>
        
        <div className="row g-2">
          {[
            ["Data Types", "int, float, double, char, bool, void"],
            ["Control Flow", "if, else, switch, case, break, continue, default"],
            ["Loops", "for, while, do"],
            ["Functions", "return, void"],
            ["Classes", "class, public, private, protected, new, delete"],
            ["Other", "auto, const, static, sizeof, namespace, using"]
          ].map(([category, keywords], idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <div className="card h-100 shadow-sm p-3">
                <h6 className="fw-bold">{category}</h6>
                <div className="d-flex flex-wrap gap-1 mt-2">
                  {keywords.split(', ').map((word, i) => (
                    <span key={i} className="badge bg-primary">{word}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Practice Examples */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: '#fd7e14' }}>💪 Practice Exercises</h2>
        
        <div className="row g-3">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm p-3">
              <h5 className="fw-bold">Exercise 1: Fix the Errors</h5>
              <CodeBox
                title="Find and fix 3 errors"
                language="cpp"
                code={`#include <iostream>
Using namespace std;

Int main() {
    cout << "Hello World"
    return 0
}`}
              />
              <button className="btn btn-sm btn-outline-primary mt-3">Show Solution</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm p-3">
              <h5 className="fw-bold">Exercise 2: Write Your Own</h5>
              <p className="small">Write a program that:</p>
              <ul className="small">
                <li>Includes iostream header</li>
                <li>Uses namespace std</li>
                <li>Has main function</li>
                <li>Prints "I love C++"</li>
                <li>Returns 0</li>
              </ul>
              <button className="btn btn-sm btn-outline-success mt-3">Try it Yourself</button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="d-flex justify-content-between mt-5 p-3 bg-light rounded">
        <a href="/cpp/get-started" className="btn btn-outline-primary">
          <i className="bi bi-arrow-left me-2"></i>
          Previous: Get Started
        </a>
        <a href="/cpp/output" className="btn" style={{ 
          backgroundColor: '#0056b3', 
          color: 'white',
          border: 'none'
        }}>
          Next: C++ Output
          <i className="bi bi-arrow-right ms-2"></i>
        </a>
      </div>

    </div>
  );
}