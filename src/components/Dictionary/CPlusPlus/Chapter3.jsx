// src/components/Dictionary/CPlusPlus/Chapter3.jsx
import React from "react";
import CodeBox from "../CodeBox/CodeBox";

export default function CppChapter3() {
  return (
    <div className="chapter-content container-fluid px-3 pb-5">

      {/* Header */}
      <div className="chapter-header mt-2 mb-4 text-center">
        <h1 className="h2 fw-bold">📘 Chapter 3: C++ Syntax</h1>
        <p className="text-white">Basic structure & rules of C++ programs</p>
      </div>

      {/* Hero Card */}
      <div className="card shadow-lg mb-4" style={{ borderLeft: "5px solid #0d6efd" }}>
        <div
          className="card-body text-white p-4"
          style={{ background: "linear-gradient(135deg,#0d6efd,#0a58ca)" }}
        >
          <h2 className="fw-bold">C++ Program Syntax</h2>
          <p className="mb-0">
            Syntax defines the <b>rules and structure</b> of writing a valid C++ program.
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <section className="mb-5">
        <h3 className="fw-bold text-primary">🎯 What is Syntax?</h3>
        <p>
          <b>Syntax</b> refers to the set of rules that define how a C++ program is written
          and structured so that the compiler can understand it.
        </p>

        <div className="alert alert-info">
          📌 Wrong syntax → <b>Compilation Error</b>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-5">
        <h3 className="fw-bold text-success">🧾 Basic Structure of C++ Program</h3>

        <CodeBox
          title="Basic C++ Program Structure"
          language="cpp"
          code={`#include <iostream>
using namespace std;

int main() {
    // statements
    return 0;
}`}
        />

        <ul className="mt-3">
          <li><b>#include</b> → Header file inclusion</li>
          <li><b>using namespace std;</b> → Standard namespace</li>
          <li><b>int main()</b> → Entry point of program</li>
          <li><b>{ }</b> → Block of code</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-5">
        <h3 className="fw-bold text-primary">🚀 main() Function</h3>

        <CodeBox
          title="main() Function Example"
          language="cpp"
          executable={true}
          code={`int main() {
    return 0;
}`}
        />

        <p className="mt-2">
          ✅ Every C++ program must contain <b>main()</b> function.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-5">
        <h3 className="fw-bold text-warning">📌 Statements & Semicolon</h3>

        <CodeBox
          title="Statement Example"
          language="cpp"
          code={`int a = 10;
int b = 20;
int sum = a + b;`}
        />

        <div className="alert alert-warning mt-3">
          🔹 Every statement in C++ ends with a <b>semicolon ( ; )</b>
        </div>
      </section>

      {/* Section 5 */}
      <section className="mb-5">
        <h3 className="fw-bold text-danger">🧮 Comments in Syntax</h3>

        <CodeBox
          title="Comments Example"
          language="cpp"
          code={`// This is a single-line comment

/* This is
   a multi-line
   comment */`}
        />

        <p className="mt-2">
          ✔️ Comments improve code readability and are ignored by compiler.
        </p>
      </section>

      {/* Section 6 */}
      <section className="mb-5">
        <h3 className="fw-bold text-info">📊 Case Sensitivity</h3>

        <CodeBox
          title="Case Sensitivity Example"
          language="cpp"
          code={`int age = 20;
int Age = 25;

// age and Age are different variables`}
        />
      </section>

      {/* Section 7 */}
      <section className="mb-5">
        <h3 className="fw-bold text-success">⚖️ Rules of C++ Syntax</h3>

        <ul className="list-group">
          <li className="list-group-item">✔ C++ is case-sensitive</li>
          <li className="list-group-item">✔ Statements end with semicolon</li>
          <li className="list-group-item">✔ main() is compulsory</li>
          <li className="list-group-item">✔ Code executes line by line</li>
        </ul>
      </section>

      {/* Section 8 */}
      <section className="mb-5">
        <h3 className="fw-bold text-danger">❌ Common Syntax Errors</h3>

        <ul className="list-group">
          <li className="list-group-item">❌ Missing semicolon</li>
          <li className="list-group-item">❌ Missing main() function</li>
          <li className="list-group-item">❌ Wrong brackets { }</li>
          <li className="list-group-item">❌ Spelling mistakes in keywords</li>
        </ul>
      </section>

      {/* Summary */}
      <section className="mb-5">
        <div className="alert alert-success">
          <h5 className="fw-bold">📌 Chapter Summary</h5>
          <ul className="mb-0">
            <li>Syntax defines rules of writing C++ code</li>
            <li>Every program starts from main()</li>
            <li>Semicolon ends statements</li>
            <li>C++ is case-sensitive</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
