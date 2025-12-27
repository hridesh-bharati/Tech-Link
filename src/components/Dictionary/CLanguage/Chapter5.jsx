// src/components/Dictionary/CLanguage/Chapter5.jsx
import React from 'react';
import CodeBox from '../CodeBox/CodeBox';

export default function Chapter5() {
  return (
    <div className="chapter-content">

      {/* Chapter Header */}
      <div className="chapter-header mb-5">
        <div className="d-flex align-items-center mb-3">
          <div className="chapter-icon-box me-3">
            <i className="bi bi-chat-left-text chapter-icon"></i>
          </div>
          <div>
            <h1 className="h2 fw-bold text-gradient-primary">C COMMENTS</h1>
            <p className="text-muted mb-0">Documenting your code using comments</p>
          </div>
        </div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-custom">
            <li className="breadcrumb-item"><a href="#" className="text-decoration-none">C Tutorial</a></li>
            <li className="breadcrumb-item active">Comments</li>
          </ol>
        </nav>
      </div>

      <div className="content-section">

        {/* Section 1: What are Comments */}
        <div className="section-block mb-5">
          <div className="section-header mb-4">
            <h2 className="h3 fw-bold section-title">
              <span className="section-number">1</span>
              What are Comments?
            </h2>
            <div className="section-divider"></div>
          </div>

          <p className="lead mb-4">
            Comments are non-executable statements used to document your code.  
            They are ignored by the compiler and help programmers understand the code better.
          </p>

          <div className="note-box note-primary mb-4">
            <div className="note-icon">
              <i className="bi bi-lightbulb"></i>
            </div>
            <div>
              <strong>Tip:</strong> Always comment your code for clarity, especially for complex logic.
            </div>
          </div>
        </div>

        {/* Section 2: Single-line Comments */}
        <div className="section-block mb-5">
          <div className="section-header mb-4">
            <h2 className="h3 fw-bold section-title">
              <span className="section-number">2</span>
              Single-line Comments
            </h2>
            <div className="section-divider"></div>
          </div>

          <p>Use <code>//</code> for single-line comments:</p>

          <div className="interactive-demo mb-4">
            <CodeBox
              code={`#include <stdio.h>

int main() {
    // This is a single-line comment
    printf("Hello World!\\n");  // Comment after code

    int age = 25; // Variable declaration
    // age = age + 5; // Commented out code

    return 0; // End program
}`}
              title="Single-line Comments Example"
              language="c"
              executable={true}
              showLineNumbers={true}
              highlightLines={[4, 7, 10]}
            />
          </div>
        </div>

        {/* Section 3: Multi-line Comments */}
        <div className="section-block mb-5">
          <div className="section-header mb-4">
            <h2 className="h3 fw-bold section-title">
              <span className="section-number">3</span>
              Multi-line Comments
            </h2>
            <div className="section-divider"></div>
          </div>

          <p>Use <code>/* ... */</code> for multi-line comments:</p>

          <div className="interactive-demo mb-4">
            <CodeBox
              code={`#include <stdio.h>

/*
 * PROGRAM: Calculator
 * AUTHOR: John Doe
 * DATE: 2024-01-15
 * DESCRIPTION: Simple calculator program
 */

int main() {
    /* Variable declarations */
    int num1 = 10;
    int num2 = 5;

    /* Calculate sum */
    int sum = num1 + num2;

    /* Display result */
    printf("Sum: %d\\n", sum);

    return 0;  /* Program ends */
}`}
              title="Multi-line Comments Example"
              language="c"
              executable={true}
              showLineNumbers={true}
              highlightLines={[5, 9, 13]}
            />
          </div>
        </div>

        {/* Section 4: Best Practices */}
        <div className="section-block mb-5">
          <div className="section-header mb-4">
            <h2 className="h3 fw-bold section-title">
              <span className="section-number">4</span>
              Commenting Best Practices
            </h2>
            <div className="section-divider"></div>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card tips-card">
                <div className="card-header">
                  <h5 className="mb-0">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Do's
                  </h5>
                </div>
                <div className="card-body">
                  <ul className="mb-0">
                    <li>Explain complex logic</li>
                    <li>Document function parameters and return values</li>
                    <li>Add file headers with author and date</li>
                    <li>Comment TODO items</li>
                    <li>Keep comments updated</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card warnings-card">
                <div className="card-header">
                  <h5 className="mb-0">
                    <i className="bi bi-exclamation-triangle-fill text-danger me-2"></i>
                    Don'ts
                  </h5>
                </div>
                <div className="card-body">
                  <ul className="mb-0">
                    <li>Comment obvious code</li>
                    <li>Write long novels in comments</li>
                    <li>Keep outdated comments</li>
                    <li>Use emotional comments</li>
                    <li>Comment bad code – fix it instead!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Practice Exercise */}
        <div className="section-block mb-5">
          <div className="section-header mb-4">
            <h2 className="h3 fw-bold section-title">
              <span className="section-number">5</span>
              Practice Exercise
            </h2>
            <div className="section-divider"></div>
          </div>

          <p>Create a program that calculates the area of a rectangle and document every step using comments.</p>

          <div className="interactive-demo mb-4">
            <CodeBox
              code={`#include <stdio.h>

int main() {
    // Declare variables
    int length = 10;
    int width = 5;

    // Calculate area
    int area = length * width;

    // Display result
    printf("Area: %d\\n", area);

    return 0;
}`}
              title="Area of Rectangle Example"
              language="c"
              executable={true}
              showLineNumbers={true}
              highlightLines={[4, 7, 10]}
            />
          </div>

          <div className="mt-3">
            <button className="btn btn-primary me-2" onClick={() => {
              alert(`Hints:
1. Use single-line comments (//) for explaining steps
2. Use multi-line comments (/* ... */) if needed
3. Declare variables with proper names
4. Calculate area using formula: length * width
5. Use printf to display result`);
            }}>
              <i className="bi bi-lightbulb me-1"></i> Show Hint
            </button>
            <button className="btn btn-success" onClick={() => {
              const solutionCode = `#include <stdio.h>

int main() {
    /* Declare rectangle dimensions */
    int length = 10;
    int width = 5;

    /* Calculate area */
    int area = length * width;

    /* Display area */
    printf("Area: %d\\n", area);

    return 0;
}`;
              navigator.clipboard.writeText(solutionCode);
              alert('Solution copied to clipboard! You can paste it in the code editor above.');
            }}>
              <i className="bi bi-clipboard me-1"></i> Copy Solution
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
