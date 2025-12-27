import React from 'react';
import CodeBox from '../CodeBox/CodeBox';

export default function Chapter8() {
  return (
    <div className="chapter-content">

      {/* Header */}
      <div className="chapter-header mb-5">
        <div className="d-flex align-items-center mb-3">
          <div className="chapter-icon-box me-3">
            <i className="bi bi-arrow-left-right chapter-icon"></i>
          </div>
          <div>
            <h1 className="h2 fw-bold text-gradient-primary">C TYPE CONVERSION</h1>
            <p className="text-muted mb-0">
              Automatic & manual conversion between data types in C
            </p>
          </div>
        </div>

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-custom">
            <li className="breadcrumb-item">
              <a href="#" className="text-decoration-none">C Tutorial</a>
            </li>
            <li className="breadcrumb-item active">Type Conversion</li>
          </ol>
        </nav>
      </div>

      <div className="content-section">

        {/* Section 1 */}
        <div className="section-block mb-5">
          <div className="section-header mb-4">
            <h2 className="h3 fw-bold section-title">
              <span className="section-number">1</span>
              What is Type Conversion?
            </h2>
            <div className="section-divider"></div>
          </div>

          <p className="lead">
            <strong>Type conversion</strong> is the process of converting one
            data type into another during program execution.
          </p>

          <div className="note-box note-primary">
            <strong>Why it matters:</strong>  
            Prevents logical errors, data loss, and unexpected results during calculations.
          </div>
        </div>

        {/* Section 2 */}
        <div className="section-block mb-5">
          <div className="section-header mb-4">
            <h2 className="h3 fw-bold section-title">
              <span className="section-number">2</span>
              Implicit Type Conversion (Automatic)
            </h2>
            <div className="section-divider"></div>
          </div>

          <p>
            The compiler automatically converts one data type into another
            when required. This is also called <strong>type promotion</strong>.
          </p>

          <CodeBox
            title="Implicit Type Conversion"
            language="c"
            executable={true}
            useRealCompiler={false}
            showLineNumbers={true}
            code={`#include <stdio.h>

int main() {
    int a = 10;
    float b = 3.5;

    // int automatically converted to float
    float result = a + b;
    printf("10 + 3.5 = %.2f\\n", result);

    char ch = 'A';
    int ascii = ch;   // char → int
    printf("Character '%c' = %d\\n", ch, ascii);

    float price = 99.99;
    int rounded = price;  // float → int (data loss)
    printf("99.99 converted to int = %d\\n", rounded);

    return 0;
}`}
          />

          <div className="alert alert-info mt-3">
            <strong>Automatic Promotion Order:</strong><br/>
            char → int → long → float → double
          </div>
        </div>

        {/* Section 3 */}
        <div className="section-block mb-5">
          <div className="section-header mb-4">
            <h2 className="h3 fw-bold section-title">
              <span className="section-number">3</span>
              Explicit Type Conversion (Type Casting)
            </h2>
            <div className="section-divider"></div>
          </div>

          <p>
            Explicit conversion is done by the programmer using
            <code> (type) </code> syntax.
          </p>

          <CodeBox
            title="Explicit Type Casting"
            language="c"
            executable={true}
            useRealCompiler={false}
            showLineNumbers={true}
            code={`#include <stdio.h>

int main() {
    float num = 9.99;

    // Explicit cast
    int x = (int)num;
    printf("(int)9.99 = %d\\n", x);

    int a = 10, b = 3;

    // Integer division
    float r1 = a / b;
    // Float division
    float r2 = (float)a / b;

    printf("Without cast: %.2f\\n", r1);
    printf("With cast: %.2f\\n", r2);

    char ch = 'A';
    printf("Next character after %c is %c\\n", ch, (char)(ch + 1));

    return 0;
}`}
          />
        </div>

        {/* Section 4 */}
        <div className="section-block mb-5">
          <div className="section-header mb-4">
            <h2 className="h3 fw-bold section-title">
              <span className="section-number">4</span>
              Type Promotion Rules
            </h2>
            <div className="section-divider"></div>
          </div>

          <div className="row g-3">
            {[
              ['int + float', 'float'],
              ['char + int', 'int'],
              ['float + double', 'double'],
              ['short + int', 'int']
            ].map(([op, res], i) => (
              <div key={i} className="col-md-6">
                <div className="promotion-card">
                  <h5><code>{op}</code></h5>
                  <p className="mb-0">
                    Result Type: <strong>{res}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5 */}
        <div className="section-block mb-5">
          <div className="section-header mb-4">
            <h2 className="h3 fw-bold section-title">
              <span className="section-number">5</span>
              Real-World Examples
            </h2>
            <div className="section-divider"></div>
          </div>

          <CodeBox
            title="Percentage Calculation (Common Mistake)"
            language="c"
            executable={true}
            useRealCompiler={false}
            showLineNumbers={true}
            code={`#include <stdio.h>

int main() {
    int obtained = 85;
    int total = 100;

    int wrong = (obtained / total) * 100;
    float correct = ((float)obtained / total) * 100;

    printf("Wrong Percentage: %d%%\\n", wrong);
    printf("Correct Percentage: %.2f%%\\n", correct);

    return 0;
}`}
          />
        </div>

        {/* Section 6 */}
        <div className="section-block">
          <div className="section-header mb-4">
            <h2 className="h3 fw-bold section-title">
              <span className="section-number">6</span>
              Common Mistakes & Best Practices
            </h2>
            <div className="section-divider"></div>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-warning">
                <div className="card-header bg-warning text-dark">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  Common Mistakes
                </div>
                <div className="card-body">
                  <ul>
                    <li>Integer division instead of float division</li>
                    <li>Implicit narrowing causing data loss</li>
                    <li>Mixing signed and unsigned values</li>
                    <li>Forgetting explicit casts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card border-success">
                <div className="card-header bg-success text-white">
                  <i className="bi bi-check-circle me-2"></i>
                  Best Practices
                </div>
                <div className="card-body">
                  <ul>
                    <li>Always cast before division when needed</li>
                    <li>Prefer explicit conversion for clarity</li>
                    <li>Use parentheses to control order</li>
                    <li>Test edge cases for overflow</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
