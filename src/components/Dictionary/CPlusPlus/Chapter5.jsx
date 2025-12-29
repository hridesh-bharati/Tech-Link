// src/components/Dictionary/CPlusPlus/Chapter5.jsx
import React from "react";
import CodeBox from "../CodeBox/CodeBox";

export default function CppChapter5() {
  return (
    <div className="chapter-content container-fluid px-3 pb-5">

      {/* Header */}
      <div className="chapter-header mt-2 mb-4 text-center">
        <h1 className="h2 fw-bold">📘 Chapter 5: C++ Comments</h1>
        <p className="text-white">Improve readability using comments</p>
      </div>

      {/* Hero Card */}
      <div className="card shadow-lg mb-4" style={{ borderLeft: "5px solid #6f42c1" }}>
        <div
          className="card-body text-white p-4"
          style={{ background: "linear-gradient(135deg,#6f42c1,#59339d)" }}
        >
          <h2 className="fw-bold">Comments in C++</h2>
          <p className="mb-0">
            Comments are used to <b>explain code</b> and are ignored by the compiler.
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <section className="mb-5">
        <h3 className="fw-bold text-primary">🎯 What are Comments?</h3>
        <p>
          <b>Comments</b> are non-executable lines written inside a program to explain
          the logic of the code. They help programmers understand the program easily.
        </p>

        <div className="alert alert-info">
          📌 Comments do NOT affect program execution.
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-5">
        <h3 className="fw-bold text-success">🧾 Types of Comments in C++</h3>

        <ul className="list-group">
          <li className="list-group-item">✔ Single-line Comment</li>
          <li className="list-group-item">✔ Multi-line Comment</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-5">
        <h3 className="fw-bold text-warning">✍️ Single-line Comment</h3>

        <CodeBox
          title="Single-line Comment Example"
          language="cpp"
          code={`// This is a single-line comment
int a = 10;  // Variable declaration`}
        />

        <p className="mt-2">
          🔹 Single-line comments start with <b>//</b>
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-5">
        <h3 className="fw-bold text-danger">📝 Multi-line Comment</h3>

        <CodeBox
          title="Multi-line Comment Example"
          language="cpp"
          code={`/* This is a multi-line comment
   It can span multiple lines
   Used for long explanations */`}
        />

        <div className="alert alert-warning mt-3">
          🔹 Multi-line comments start with <b>/*</b> and end with <b>*/</b>
        </div>
      </section>

      {/* Section 5 */}
      <section className="mb-5">
        <h3 className="fw-bold text-info">🧮 Comments in a Program</h3>

        <CodeBox
          title="Using Comments in C++ Program"
          language="cpp"
          executable={true}
          code={`#include <iostream>
using namespace std;

int main() {
    // Print message
    cout << "Welcome to C++";
    return 0; // End of program
}`}
        />
      </section>

      {/* Section 6 */}
      <section className="mb-5">
        <h3 className="fw-bold text-success">⚖️ Advantages of Comments</h3>

        <ul className="list-group">
          <li className="list-group-item">✔ Improves code readability</li>
          <li className="list-group-item">✔ Easy debugging & maintenance</li>
          <li className="list-group-item">✔ Helpful for beginners</li>
          <li className="list-group-item">✔ Useful for team projects</li>
        </ul>
      </section>

      {/* Section 7 */}
      <section className="mb-5">
        <h3 className="fw-bold text-danger">❌ Common Mistakes</h3>

        <ul className="list-group">
          <li className="list-group-item">❌ Not closing multi-line comment</li>
          <li className="list-group-item">❌ Writing too many unnecessary comments</li>
          <li className="list-group-item">❌ Using comments instead of clean code</li>
        </ul>
      </section>

      {/* Summary */}
      <section className="mb-5">
        <div className="alert alert-success">
          <h5 className="fw-bold">📌 Chapter Summary</h5>
          <ul className="mb-0">
            <li>Comments explain the code</li>
            <li>Compiler ignores comments</li>
            <li>Single-line and multi-line comments are used</li>
            <li>Comments improve readability</li>
          </ul>
        </div>
      </section>

      {/* Next Button */}
      <div className="text-center">
        <a href="#" className="btn btn-lg btn-primary px-5">
          Next Chapter: C++ Variables <i className="bi bi-arrow-right ms-2"></i>
        </a>
      </div>

    </div>
  );
}
