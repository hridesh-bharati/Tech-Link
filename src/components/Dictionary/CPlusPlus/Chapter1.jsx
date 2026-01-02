// src/components/Dictionary/CPlusPlus/Chapter1.jsx
import React from "react";
import CodeBox from "../CodeBox/CodeBox";

export default function CppChapter1() {
  return (
    <div className="chapter-content container-fluid px-3 pb-5">
      {/* Header */}
      <div className="chapter-header mt-4 mb-4 text-center">
        <h1 className="h2 fw-bold">📘 Chapter 1: Introduction to C++</h1>
        <p className="text-white">Powerful programming language for high-performance applications</p>
      </div>

      {/* What is C++? */}
      <section className="mb-4">
        <div className="card border-primary mb-3">
          <div className="card-header bg-primary text-white py-2">
            <h4 className="h5 mb-0">What is C++?</h4>
          </div>
          <div className="card-body p-3">
            <p>
              C++ is a powerful programming language created by <b>Bjarne Stroustrup</b> in 1985.
              It extends C language with object-oriented features while maintaining high performance.
            </p>
            <div className="row mt-2">
              <div className="col-md-6">
                <p><b>Key Features:</b></p>
                <ul>
                  <li>Object-Oriented Programming</li>
                  <li>High Performance (like C)</li>
                  <li>Standard Template Library (STL)</li>
                  <li>Exception Handling</li>
                </ul>
              </div>
              <div className="col-md-6">
                <p><b>Design Philosophy:</b></p>
                <ul>
                  <li>Zero-overhead principle</li>
                  <li>Multi-paradigm support</li>
                  <li>Direct hardware access</li>
                  <li>Backward compatible with C</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Program */}
      <section className="mb-4">
        <h3 className="h4 fw-bold text-primary mb-3">First C++ Program</h3>
        <CodeBox
          title="Hello World Program"
          language="cpp"
          executable={true}
          code={`#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`}
        />

        <div className="mt-3">
          <p><b>Compile and Run:</b></p>
          <code className="d-block bg-light p-2 border rounded mb-2">g++ program.cpp -o output</code>
          <code className="d-block bg-light p-2 border rounded">./output</code>
        </div>

        <div className="mt-3">
          <CodeBox
            title="Using namespace (Simpler)"
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

      {/* C++ vs C */}
      <section className="mb-4">
        <h3 className="h4 fw-bold text-primary mb-3">C++ vs C: Key Differences</h3>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-primary">
              <tr>
                <th>Feature</th>
                <th>C Language</th>
                <th>C++ Language</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>Programming Style</b></td>
                <td>Procedural only</td>
                <td>Procedural + Object-Oriented</td>
              </tr>
              <tr>
                <td><b>Object-Oriented</b></td>
                <td>No support</td>
                <td>Yes (Classes, Inheritance)</td>
              </tr>
              <tr>
                <td><b>Input/Output</b></td>
                <td>printf/scanf</td>
                <td>cin/cout</td>
              </tr>
              <tr>
                <td><b>Memory Management</b></td>
                <td>malloc/free</td>
                <td>new/delete</td>
              </tr>
              <tr>
                <td><b>Exception Handling</b></td>
                <td>No built-in</td>
                <td>Try-catch blocks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="mb-4">
        <h3 className="h4 fw-bold text-primary mb-3">Where C++ is Used</h3>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body p-3">
                <h6 className="fw-bold">Operating Systems</h6>
                <ul className="mb-0">
                  <li>Windows Kernel</li>
                  <li>macOS Components</li>
                  <li>Linux Modules</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body p-3">
                <h6 className="fw-bold">Game Development</h6>
                <ul className="mb-0">
                  <li>Unreal Engine</li>
                  <li>Game Physics</li>
                  <li>3D Graphics</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body p-3">
                <h6 className="fw-bold">Web Browsers</h6>
                <ul className="mb-0">
                  <li>Chrome (V8 Engine)</li>
                  <li>Firefox</li>
                  <li>Safari</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body p-3">
                <h6 className="fw-bold">Database Systems</h6>
                <ul className="mb-0">
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* C++ Standards */}
      <section className="mb-4">
        <h3 className="h4 fw-bold text-primary mb-3">C++ Standards Timeline</h3>
        <div className="card">
          <div className="card-body p-3">
            <ul className="mb-0">
              <li><b>1985</b> - First release (C with Classes)</li>
              <li><b>1998</b> - C++98 (First ISO standard, STL)</li>
              <li><b>2011</b> - C++11 (Modern C++, auto, lambdas)</li>
              <li><b>2014</b> - C++14 (Minor improvements)</li>
              <li><b>2017</b> - C++17 (Structured bindings)</li>
              <li><b>2020</b> - C++20 (Concepts, ranges)</li>
              <li><b>2023</b> - C++23 (Latest features)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="mb-4">
        <h3 className="h4 fw-bold text-primary mb-3">Advantages & Disadvantages</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="card border-success h-100">
              <div className="card-header bg-success text-white py-2">
                <h6 className="mb-0">Advantages</h6>
              </div>
              <div className="card-body p-3">
                <ul className="mb-0">
                  <li>High Performance</li>
                  <li>Object-Oriented</li>
                  <li>Rich Library (STL)</li>
                  <li>Full system control</li>
                  <li>Portable across platforms</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-danger h-100">
              <div className="card-header bg-danger text-white py-2">
                <h6 className="mb-0">Disadvantages</h6>
              </div>
              <div className="card-body p-3">
                <ul className="mb-0">
                  <li>Complex for beginners</li>
                  <li>Manual memory management</li>
                  <li>More code for simple tasks</li>
                  <li>No garbage collection</li>
                  <li>Security vulnerabilities possible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="mb-4">
        <h3 className="h4 fw-bold text-primary mb-3">Learning Path</h3>
        <div className="row g-3">
          <div className="col-md-4">
            <div className="card h-100 border-primary">
              <div className="card-body p-3">
                <h6 className="fw-bold text-primary">Beginner Level</h6>
                <ul className="mb-0">
                  <li>Basic Syntax</li>
                  <li>Variables & Data Types</li>
                  <li>Operators</li>
                  <li>Control Flow</li>
                  <li>Functions</li>
                  <li>Arrays</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-warning">
              <div className="card-body p-3">
                <h6 className="fw-bold text-warning">Intermediate Level</h6>
                <ul className="mb-0">
                  <li>Classes & Objects</li>
                  <li>Inheritance</li>
                  <li>Polymorphism</li>
                  <li>Templates</li>
                  <li>STL</li>
                  <li>Exception Handling</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-danger">
              <div className="card-body p-3">
                <h6 className="fw-bold text-danger">Advanced Level</h6>
                <ul className="mb-0">
                  <li>Smart Pointers</li>
                  <li>Multithreading</li>
                  <li>Design Patterns</li>
                  <li>System Programming</li>
                  <li>Move Semantics</li>
                  <li>Boost Library</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section>
        <div className="card border-primary">
          <div className="card-header bg-primary text-white py-2">
            <h4 className="h5 mb-0">Chapter Summary</h4>
          </div>
          <div className="card-body p-3">
            <ul className="mb-0">
              <li>C++ is high-performance, object-oriented language</li>
              <li>Created by Bjarne Stroustrup in 1985</li>
              <li>Extends C with OOP features</li>
              <li>Used for OS, games, browsers, databases</li>
              <li>Latest standard is C++23</li>
              <li>Powerful but has steep learning curve</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}