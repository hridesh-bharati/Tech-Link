// src/components/Dictionary/CLanguage/Chapter3.jsx
import React from "react";
import CodeBox from "../CodeBox/CodeBox";

const syntaxRules = [
  {
    rule: "Case Sensitive",
    example: 'main ≠ Main ≠ MAIN',
    desc: "C distinguishes uppercase and lowercase letters."
  },
  {
    rule: "Semicolon",
    example: 'printf("Hello");',
    desc: "Each statement ends with a semicolon."
  },
  {
    rule: "Whitespace",
    example: 'int x = 5; // same as int x=5;',
    desc: "Extra spaces are ignored by the compiler."
  },
  {
    rule: "Comments",
    example: '// single-line\n/* multi-line */',
    desc: "Use comments to explain your code."
  }
];

const variablesExample = `int age = 25;          // integer variable
float price = 99.99;   // floating point variable
char grade = 'A';      // character variable

int x, y, z;           // multiple variables
x = y = z = 0;

const double PI = 3.14159;  // constant value`;

const functionsExample = `int add(int a, int b) {
    return a + b;        // return sum
}

int result = add(5, 3); // call function
printf("Sum: %d\\n", result);

void greet() {
    printf("Welcome!\\n"); // print message
}`;

const completeProgram = `#include <stdio.h>
#include <stdlib.h>

// Global variable
int global_count = 0;

// Function declaration
void display_message();

int main() {
    // Local variable
    int local_var = 10;
    
    printf("Starting program...\\n");
    display_message();   // call function
    
    return 0;            // end program
}

// Function definition
void display_message() {
    printf("Hello from function!\\n");  // print message
}`;

export default function Chapter3() {
  return (
    <div className="chapter-content mobile-tutorial">
      {/* Header */}
      <div className="chapter-header mb-4">
        <h1 className="h3 fw-bold">Chapter 3: C Syntax</h1>
        <p className="text-muted">Learn the basic rules and structure of C programs.</p>
      </div>

      {/* Section 1: Basic Syntax Rules */}
      <section className="chapter-section mb-4">
        <h2 className="h5 fw-bold mb-3">1️⃣ Basic Syntax Rules</h2>
        <p>Follow these rules when writing C programs:</p>

        {syntaxRules.map((item, idx) => (
          <div key={idx} className="card mb-3 p-3 shadow-sm">
            <h5 className="fw-semibold">{item.rule}</h5>
            <CodeBox
              code={item.example}
              language="c"
              title="Example"
              showLineNumbers
              executable
            />
            <p className="small mb-0 text-muted">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Section 2: Complete Program Structure */}
      <section className="chapter-section mb-4">
        <h2 className="h5 fw-bold mb-3">2️⃣ Complete Program Structure</h2>
        <p>A typical C program includes headers, variables, functions, and the main function:</p>

        <CodeBox
          code={completeProgram}
          title="Complete Program Example"
          language="c"
          showLineNumbers
          executable
        />
      </section>

      {/* Section 3: Common Syntax Examples */}
      <section className="chapter-section mb-4">
        <h2 className="h5 fw-bold mb-3">3️⃣ Common Syntax Examples</h2>
        <p>Here are some elements you will use frequently:</p>

        {/* Variables & Constants */}
        <div className="card mb-3 p-3 shadow-sm">
          <h6 className="fw-semibold mb-2">Variables & Constants</h6>
          <CodeBox
            code={variablesExample}
            title="Example"
            language="c"
            showLineNumbers
            executable
          />
        </div>

        {/* Functions */}
        <div className="card mb-3 p-3 shadow-sm">
          <h6 className="fw-semibold mb-2">Functions</h6>
          <CodeBox
            code={functionsExample}
            title="Example"
            language="c"
            showLineNumbers
            executable
          />
        </div>
      </section>

      {/* Chapter Notes */}
      <section className="chapter-section">
        <h2 className="h5 fw-bold mb-2">📌 Notes</h2>
        <ul>
          <li>C is case-sensitive, so variable names must match exactly.</li>
          <li>Every statement ends with a semicolon.</li>
          <li>Use comments to explain your code clearly.</li>
          <li>Functions help organize code into reusable blocks.</li>
        </ul>
      </section>
    </div>
  );
}
