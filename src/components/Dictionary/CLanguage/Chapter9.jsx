// src/components/Dictionary/CLanguage/Chapter9.jsx
import React from 'react';
import CodeBox from '../CodeBox/CodeBox';

export default function Chapter9() {
  return (
    <div className="chapter-content">
      <div className="chapter-header mb-4">
        <h1 className="h2 fw-bold text-primary">C Constants</h1>
        <p className="text-muted">Fixed values that cannot be changed</p>
      </div>

      <div className="content-section">

        {/* Section 1: What are Constants? */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold text-primary">1. What are Constants?</h2>
          
          <div className="alert alert-light mb-4">
            <p className="mb-0">
              <strong>Constants</strong> are fixed values that <em>cannot be modified</em> 
              during program execution. Once defined, their value remains unchanged.
            </p>
          </div>

          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <div className="border rounded p-3">
                <h6 className="fw-bold">📊 Why Use Constants?</h6>
                <ul className="mb-0">
                  <li>Avoid hard-coded values</li>
                  <li>Improve code readability</li>
                  <li>Prevent accidental changes</li>
                  <li>Make code easier to maintain</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="border rounded p-3">
                <h6 className="fw-bold">🔧 Types of Constants</h6>
                <ul className="mb-0">
                  <li><code>const</code> variables</li>
                  <li><code>#define</code> macros</li>
                  <li><code>enum</code> constants</li>
                  <li>Literal constants</li>
                </ul>
              </div>
            </div>
          </div>

          <CodeBox
            code={`// Different types of constants
#define PI 3.14159           // Macro constant
const int MAX = 100;         // const variable
enum { RED, GREEN, BLUE };   // Enum constant
10, 3.14, 'A'                // Literal constants`}
            language="c"
            showCopy={true}
            title="Quick Examples"
          />
        </div>

        {/* Section 2: const Keyword */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold text-success">2. Using const Keyword</h2>
          
          <div className="alert alert-success mb-3">
            <p className="mb-0">
              <strong><code>const</code> creates read-only variables</strong> 
              that cannot be modified after initialization.
            </p>
          </div>

          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <div className="border rounded p-3">
                <h6 className="fw-bold">✅ Syntax Rules</h6>
                <ul className="mb-0">
                  <li>Must initialize during declaration</li>
                  <li>Cannot modify after initialization</li>
                  <li>Has scope and data type</li>
                  <li>Compiler checks for errors</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="border rounded p-3">
                <h6 className="fw-bold">❌ Common Errors</h6>
                <ul className="mb-0">
                  <li><code>const int x;</code> ❌ Uninitialized</li>
                  <li><code>x = 10;</code> ❌ Trying to modify</li>
                  <li>Missing <code>const</code> keyword</li>
                </ul>
              </div>
            </div>
          </div>

          <CodeBox
            code={`#include <stdio.h>

int main() {
    // Mathematical constants
    const float PI = 3.14159f;
    const int MAX_USERS = 1000;
    
    // String constants
    const char WELCOME[] = "Welcome!";
    const char NEWLINE = '\\n';
    
    // Using constants
    float radius = 7.5;
    float area = PI * radius * radius;
    
    printf("%s%c", WELCOME, NEWLINE);
    printf("Area: %.2f\\n", area);
    printf("Max users: %d\\n", MAX_USERS);
    
    return 0;
}`}
            language="c"
            executable={true}
            useRealCompiler={false}
            title="const in Action"
          />
        </div>

        {/* Section 3: #define Preprocessor */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold text-warning">3. #define Directive</h2>
          
          <div className="alert alert-warning mb-3">
            <p className="mb-0">
              <strong><code>#define</code> creates text replacements</strong> 
              that happen before compilation.
            </p>
          </div>

          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <div className="border rounded p-3">
                <h6 className="fw-bold">⚡ Features</h6>
                <ul className="mb-0">
                  <li>No type checking</li>
                  <li>No memory usage</li>
                  <li>Global scope</li>
                  <li>Faster execution</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="border rounded p-3">
                <h6 className="fw-bold">🎯 Best For</h6>
                <ul className="mb-0">
                  <li>Simple numeric values</li>
                  <li>Function-like macros</li>
                  <li>Compilation flags</li>
                  <li>Header guards</li>
                </ul>
              </div>
            </div>
          </div>

          <CodeBox
            code={`#include <stdio.h>

// Simple constants
#define PI 3.14159
#define MAX 100
#define WELCOME "Hello"

// Function-like macro
#define SQUARE(x) ((x) * (x))

// Multi-line macro
#define PRINT(msg) \\
    printf("Message: %s\\n", msg); \\
    printf("File: %s\\n", __FILE__)

int main() {
    printf("PI: %.2f\\n", PI);
    printf("Square of 5: %d\\n", SQUARE(5));
    PRINT(WELCOME);
    
    return 0;
}`}
            language="c"
            executable={true}
            useRealCompiler={false}
            title="#define Examples"
          />
        </div>

        {/* Section 4: Comparison */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold text-info">4. const vs #define</h2>
          
          <div className="table-responsive mb-4">
            <table className="table table-bordered">
              <thead>
                <tr className="table-light">
                  <th>Feature</th>
                  <th><code>const</code></th>
                  <th><code>#define</code></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Type Checking</strong></td>
                  <td className="text-success">✅ Yes</td>
                  <td className="text-danger">❌ No</td>
                </tr>
                <tr>
                  <td><strong>Memory</strong></td>
                  <td>✅ Uses memory</td>
                  <td>✅ No memory</td>
                </tr>
                <tr>
                  <td><strong>Scope</strong></td>
                  <td>✅ Block/Function</td>
                  <td>❌ Global only</td>
                </tr>
                <tr>
                  <td><strong>Debugging</strong></td>
                  <td>✅ Easy</td>
                  <td>❌ Hard</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="alert alert-info">
            <h6 className="fw-bold">💡 Recommendation:</h6>
            <p className="mb-0">
              Use <code>const</code> for most constants. Use <code>#define</code> 
              for simple values or macros.
            </p>
          </div>
        </div>

        {/* Section 5: Enum Constants */}
        <div className="section-block">
          <h2 className="h3 mb-3 fw-bold text-danger">5. Enumeration (enum)</h2>
          
          <div className="alert alert-danger mb-3">
            <p className="mb-0">
              <strong><code>enum</code> creates groups of integer constants</strong> 
              with meaningful names.
            </p>
          </div>

          <div className="row g-4 mb-4">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="fw-bold">📖 Basic Syntax</h6>
                  <CodeBox
                    code={`enum Days {
    SUNDAY,    // 0
    MONDAY,    // 1  
    TUESDAY    // 2
};

// Custom values
enum Status {
    ERROR = -1,
    OK = 0,
    SUCCESS = 1
};`}
                    language="c"
                    showCopy={true}
                    height="150px"
                  />
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="fw-bold">🎯 When to Use</h6>
                  <ul className="mb-0">
                    <li>Menu options</li>
                    <li>Error codes</li>
                    <li>Status flags</li>
                    <li>Related constants</li>
                    <li>Improve readability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <CodeBox
            code={`#include <stdio.h>

enum Days { SUN, MON, TUE, WED, THU, FRI, SAT };

enum Status {
    FAILED = -1,
    PENDING = 0,
    SUCCESS = 1
};

int main() {
    enum Days today = MON;
    enum Status result = SUCCESS;
    
    printf("Today is day: %d\\n", today);
    printf("Status: %d\\n", result);
    
    // Switch with enum
    switch(today) {
        case MON:
        case TUE:
        case WED:
        case THU:
        case FRI:
            printf("Weekday\\n");
            break;
        case SAT:
        case SUN:
            printf("Weekend\\n");
            break;
    }
    
    return 0;
}`}
            language="c"
            executable={true}
            useRealCompiler={false}
            title="enum Examples"
          />
        </div>

        {/* Section 6: Practice */}
        <div className="section-block">
          <h2 className="h3 mb-3 fw-bold text-primary">6. Practice Exercise</h2>
          
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">📝 Geometry Calculator</h5>
              <p>Calculate area of circle and rectangle using constants.</p>
              
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <div className="border rounded p-3">
                    <h6>Task:</h6>
                    <ul className="mb-0 small">
                      <li>Use <code>const</code> for π</li>
                      <li>Use <code>#define</code> for shape types</li>
                      <li>Calculate areas</li>
                      <li>Display results</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="border rounded p-3">
                    <h6>Formulas:</h6>
                    <ul className="mb-0 small">
                      <li>Circle: π × radius²</li>
                      <li>Rectangle: length × width</li>
                    </ul>
                  </div>
                </div>
              </div>

              <CodeBox
                code={`#include <stdio.h>

// TODO: Add #define for shape types
// TODO: Add const for PI

int main() {
    float radius = 7.5;
    float length = 10.0;
    float width = 5.0;
    
    // TODO: Calculate circle area
    // TODO: Calculate rectangle area
    // TODO: Display results
    
    return 0;
}`}
                language="c"
                executable={true}
                useRealCompiler={false}
                title="Complete the Program"
              />
              
              <button 
                className="btn btn-sm btn-success mt-3"
                onClick={() => {
                  const solution = `#include <stdio.h>

#define SHAPE_CIRCLE 1
#define SHAPE_RECTANGLE 2

const float PI = 3.14159f;

int main() {
    float radius = 7.5;
    float length = 10.0;
    float width = 5.0;
    
    float circle_area = PI * radius * radius;
    float rectangle_area = length * width;
    
    printf("Circle area: %.2f\\n", circle_area);
    printf("Rectangle area: %.2f\\n", rectangle_area);
    
    return 0;
}`;
                  alert("Solution:\n\n" + solution);
                }}
              >
                Show Solution
              </button>
            </div>
          </div>

          <div className="alert alert-light mt-4">
            <p className="mb-0">
              <strong>🎓 Summary:</strong> Constants make code better. 
              Use <code>const</code> for most needs, <code>#define</code> for macros, 
              and <code>enum</code> for groups of related values.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}