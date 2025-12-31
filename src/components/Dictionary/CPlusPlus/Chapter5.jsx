// src/components/Dictionary/CPlusPlus/Chapter5.jsx
import React from "react";
import CodeBox from "../CodeBox/CodeBox";

export default function CppChapter5() {
  return (
    <div className="chapter-content container-fluid px-3 pb-5">
      {/* Header */}
      <div className="chapter-header mt-4 mb-4 text-center">
        <h1 className="h2 fw-bold">📘 Chapter 5: C++ Comments</h1>
        <p className="text-white">Add explanations to your code</p>
      </div>

      {/* What are Comments? */}
      <section className="mb-4">
        <div className="card border-primary mb-3">
          <div className="card-header bg-primary text-white py-2">
            <h4 className="h5 mb-0">What are Comments?</h4>
          </div>
          <div className="card-body p-3">
            <p>
              Comments are lines in code that explain what the program does.
              They are ignored by the compiler and don't affect program execution.
            </p>
            <p className="mb-0">
              Use comments to make your code easier to understand for yourself and others.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Comments */}
      <section className="mb-4">
        <h3 className="h4 fw-bold text-primary mb-3">Types of Comments</h3>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body p-3">
                <h6 className="fw-bold">Single-line Comments</h6>
                <CodeBox
                  language="cpp"
                  code={`// This is a single-line comment
int a = 10;  // Variable declaration

// Calculate sum
int sum = a + 5;`}
                />
                <p className="mb-0 mt-2">Start with <code>//</code></p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body p-3">
                <h6 className="fw-bold">Multi-line Comments</h6>
                <CodeBox
                  language="cpp"
                  code={`/* This is a multi-line comment
   It can span multiple lines
   Used for long explanations */
   
/* 
   Student Information Program
   Author: John Doe
   Date: 2024
*/`}
                />
                <p className="mb-0 mt-2">Start with <code>/*</code> and end with <code>*/</code></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Example */}
      <section className="mb-4">
        <h3 className="h4 fw-bold text-primary mb-3">Comments in Program</h3>
        
        <CodeBox
          title="Complete Program with Comments"
          language="cpp"
          executable={true}
          code={`#include <iostream>
using namespace std;

/*
    PROGRAM: Student Grade Calculator
    PURPOSE: Calculate student average marks
    AUTHOR:  John Smith
*/

int main() {
    // Student information
    string name = "Alice";
    int roll = 101;
    
    // Subject marks
    int math = 85;
    int science = 90;
    int english = 78;
    
    // Calculate total and average
    int total = math + science + english;  // Add all marks
    float average = total / 3.0;           // Calculate average
    
    // Display results
    cout << "Name: " << name << endl;
    cout << "Roll: " << roll << endl;
    cout << "Average: " << average << endl;
    
    return 0;  // Program ends
}`}
        />
      </section>

      {/* Why Use Comments */}
      <section className="mb-4">
        <h3 className="h4 fw-bold text-primary mb-3">Why Use Comments?</h3>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card border-success h-100">
              <div className="card-header bg-success text-white py-2">
                <h6 className="mb-0">Advantages</h6>
              </div>
              <div className="card-body p-3">
                <ul className="mb-0">
                  <li>Explain complex logic</li>
                  <li>Make code easier to read</li>
                  <li>Help with debugging</li>
                  <li>Useful for team projects</li>
                  <li>Document program purpose</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card border-danger h-100">
              <div className="card-header bg-danger text-white py-2">
                <h6 className="mb-0">Common Mistakes</h6>
              </div>
              <div className="card-body p-3">
                <ul className="mb-0">
                  <li>Not closing multi-line comment</li>
                  <li>Too many unnecessary comments</li>
                  <li>Outdated comments</li>
                  <li>Commenting obvious code</li>
                  <li>Using bad English/spelling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-4">
        <h3 className="h4 fw-bold text-primary mb-3">Best Practices</h3>
        
        <div className="card">
          <div className="card-body p-3">
            <div className="row">
              <div className="col-md-6">
                <h6 className="fw-bold">✅ DO</h6>
                <ul>
                  <li>Explain WHY, not WHAT</li>
                  <li>Keep comments up-to-date</li>
                  <li>Use proper English</li>
                  <li>Comment complex algorithms</li>
                  <li>Add file header comments</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h6 className="fw-bold">❌ DON'T</h6>
                <ul>
                  <li>Comment every line</li>
                  <li>Write obvious comments</li>
                  <li>Use comments for disabled code</li>
                  <li>Leave TODO comments forever</li>
                  <li>Write too long comments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment Examples */}
      <section className="mb-4">
        <h3 className="h4 fw-bold text-primary mb-3">Good vs Bad Comments</h3>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card border-success h-100">
              <div className="card-body p-3">
                <h6 className="fw-bold text-success">Good Comments</h6>
                <CodeBox
                  language="cpp"
                  code={`// Calculate area using πr² formula
float area = 3.14 * radius * radius;

// Check if user is eligible to vote
if (age >= 18) {
    // User can vote
}

/* 
    Convert temperature from Celsius to Fahrenheit
    Formula: F = (C × 9/5) + 32
*/
float fahrenheit = (celsius * 9/5) + 32;`}
                />
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card border-danger h-100">
              <div className="card-body p-3">
                <h6 className="fw-bold text-danger">Bad Comments</h6>
                <CodeBox
                  language="cpp"
                  code={`// Set x to 10
int x = 10;

// Print hello
cout << "hello";

// If age is greater than 18
if (age > 18) {
    // Print adult
    cout << "adult";
}

// TODO: Fix this later (written 2 years ago)`}
                />
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
              <li>Comments explain code to humans</li>
              <li>Compiler ignores comments</li>
              <li>Two types: Single-line (<code>//</code>) and Multi-line (<code>/* */</code>)</li>
              <li>Use comments for complex logic</li>
              <li>Keep comments clear and updated</li>
              <li>Don't comment obvious code</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}