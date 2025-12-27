// src/components/Dictionary/CLanguage/Chapter4.jsx
import React from 'react';
import CodeBox from '../CodeBox/CodeBox';

export default function Chapter4() {
  return (
    <div className="chapter-content">
      {/* Header */}
      <div className="chapter-header mb-5">
        <div className="d-flex align-items-center mb-3">
          <div className="chapter-icon-box me-3">
            <i className="bi bi-terminal chapter-icon"></i>
          </div>
          <div>
            <h1 className="h2 fw-bold text-gradient-primary">C OUTPUT</h1>
            <p className="text-muted mb-0">Displaying information on screen using printf()</p>
          </div>
        </div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-custom">
            <li className="breadcrumb-item"><a href="#" className="text-decoration-none">C Tutorial</a></li>
            <li className="breadcrumb-item active">Output</li>
          </ol>
        </nav>
      </div>

      <div className="content-section">

        {/* Section 1: printf() */}
        <div className="section-block mb-5">
          <div className="section-header mb-4">
            <h2 className="h3 fw-bold section-title">
              <span className="section-number">1</span>
              The <code className="code-highlight">printf()</code> Function
            </h2>
            <div className="section-divider"></div>
          </div>
          
          <p className="lead mb-4">
            The <code className="code-inline">printf()</code> function is the primary method for displaying output in C. It allows you to print text, numbers, and formatted data to the console.
          </p>

          <div className="note-box note-primary mb-4">
            <div className="note-icon">
              <i className="bi bi-lightbulb"></i>
            </div>
            <div>
              <strong>Essential:</strong> Always include <code>#include &lt;stdio.h&gt;</code> at the top of your C program to use <code>printf()</code> and other input/output functions.
            </div>
          </div>

          {/* Updated CodeBox with Edit and Run functionality */}
          <div className="interactive-demo mb-4">
            <div className="demo-header mb-3">
              <h4 className="fw-bold text-primary">
                <i className="bi bi-play-circle me-2"></i>
                Interactive Demo
              </h4>
              <p className="text-muted mb-0">
                Click <span className="badge bg-primary">Edit</span> to modify code and <span className="badge bg-success">Run</span> to see output
              </p>
            </div>
            
            <CodeBox
              code={`#include <stdio.h>

int main() {
    // Basic text output
    printf("Hello World!\\n");
    
    // Multiple lines with single printf
    printf("Line 1\\nLine 2\\nLine 3\\n");
    
    // Combining text and escape sequences
    printf("Welcome to C Programming!\\n\\n");
    
    return 0;
}`}
              title="Try it Yourself - Basic printf()"
              language="c"
              showLineNumbers={true}
              highlightLines={[4, 7, 10]}
              executable={true}
              useRealCompiler={false}
            />
          </div>
          
          <div className="mt-4">
            <h5 className="fw-bold text-primary mb-3">📋 Output Preview:</h5>
            <div className="output-preview">
              <pre className="mb-0">
                <code>Hello World!
Line 1
Line 2
Line 3
Welcome to C Programming!</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Section 2: Format Specifiers */}
        <div className="section-block mb-5">
          <div className="section-header mb-4">
            <h2 className="h3 fw-bold section-title">
              <span className="section-number">2</span>
              Format Specifiers
            </h2>
            <div className="section-divider"></div>
          </div>
          
          <p className="mb-4">
            Format specifiers are placeholders that tell <code>printf()</code> how to display variables. They start with <code>%</code> followed by a character.
          </p>

          <div className="specifiers-grid mb-4">
            <div className="row g-4">
              {[
                { spec: '%d', type: 'Integer', color: 'primary', desc: 'Whole numbers (int)' },
                { spec: '%f', type: 'Float', color: 'success', desc: 'Decimal numbers' },
                { spec: '%c', type: 'Character', color: 'warning', desc: 'Single character' },
                { spec: '%s', type: 'String', color: 'danger', desc: 'Text/character arrays' },
                { spec: '%lf', type: 'Double', color: 'info', desc: 'Large decimal numbers' },
                { spec: '%x', type: 'Hexadecimal', color: 'purple', desc: 'Base-16 numbers' },
                { spec: '%o', type: 'Octal', color: 'teal', desc: 'Base-8 numbers' },
                { spec: '%p', type: 'Pointer', color: 'dark', desc: 'Memory addresses' }
              ].map((item, idx) => (
                <div key={idx} className="col-md-3 col-sm-6">
                  <div className={`specifier-card specifier-${item.color}`}>
                    <div className="specifier-header">
                      <code className="specifier-code">{item.spec}</code>
                      <span className={`badge bg-${item.color}`}>{item.type}</span>
                    </div>
                    <div className="specifier-body">
                      <p className="small mb-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Updated CodeBox for format specifiers */}
          <div className="interactive-demo mb-4">
            <div className="demo-header mb-3">
              <h4 className="fw-bold text-success">
                <i className="bi bi-sliders me-2"></i>
                Format Specifiers Demo
              </h4>
              <p className="text-muted mb-0">
                Edit the code to change values and see different outputs
              </p>
            </div>
            
  <CodeBox
  code={`#include <stdio.h>

int main() {
    // Basic text output
    printf("Hello World!\\n");
    
    // Multiple lines with single printf
    printf("Line 1\\nLine 2\\nLine 3\\n");
    
    // Combining text and escape sequences
    printf("Welcome to C Programming!\\n\\n");
    
    return 0;
}`}
  title="Try it Yourself - Basic printf()"
  language="c"
  executable={true}
  showLineNumbers={true}
  highlightLines={[4, 7, 10]}
/>
          </div>
          
          <div className="mt-4">
            <h5 className="fw-bold text-primary mb-3">🎯 Precision Control:</h5>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="card border-primary">
                  <div className="card-header bg-primary text-white">
                    <i className="bi bi-gear me-2"></i>
                    Floating Point Precision
                  </div>
                  <div className="card-body">
                    <ul className="mb-0">
                      <li><code>%.2f</code> - 2 decimal places</li>
                      <li><code>%.4f</code> - 4 decimal places</li>
                      <li><code>%.0f</code> - No decimal places</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-success">
                  <div className="card-header bg-success text-white">
                    <i className="bi bi-rulers me-2"></i>
                    Width Specification
                  </div>
                  <div className="card-body">
                    <ul className="mb-0">
                      <li><code>%10d</code> - Right-align in 10 spaces</li>
                      <li><code>%-10d</code> - Left-align in 10 spaces</li>
                      <li><code>%10.2f</code> - Width + precision</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Escape Sequences */}
        <div className="section-block mb-5">
          <div className="section-header mb-4">
            <h2 className="h3 fw-bold section-title">
              <span className="section-number">3</span>
              Escape Sequences
            </h2>
            <div className="section-divider"></div>
          </div>
          
          <p className="mb-4">
            Escape sequences are special character combinations that represent non-printable characters or have special meanings in strings.
          </p>

          <div className="row g-4">
            <div className="col-lg-8">
              <div className="escape-sequences-table">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead className="table-dark">
                      <tr>
                        <th>Sequence</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { seq: '\\n', name: 'Newline', desc: 'Moves to next line', example: '"Line1\\nLine2"' },
                        { seq: '\\t', name: 'Horizontal Tab', desc: 'Inserts tab space', example: '"Name\\tAge"' },
                        { seq: '\\\\', name: 'Backslash', desc: 'Prints backslash', example: '"C:\\\\Users"' },
                        { seq: '\\"', name: 'Double Quote', desc: 'Prints quote mark', example: '\\"Text\\"' },
                        { seq: '\\\'', name: 'Single Quote', desc: 'Prints apostrophe', example: "\\'A\\'" },
                        { seq: '\\b', name: 'Backspace', desc: 'Moves cursor back', example: '"Hello\\b"' },
                        { seq: '\\r', name: 'Carriage Return', desc: 'Returns to line start', example: '"Progress\\rDone"' },
                        { seq: '\\0', name: 'Null Character', desc: 'String terminator', example: 'char str[] = "Hello\\0";' }
                      ].map((item, idx) => (
                        <tr key={idx}>
                          <td><code className="escape-code">{item.seq}</code></td>
                          <td><strong>{item.name}</strong></td>
                          <td>{item.desc}</td>
                          <td><code>{item.example}</code></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="sticky-top" style={{ top: '20px' }}>
                <div className="card border-warning">
                  <div className="card-header bg-warning text-dark">
                    <i className="bi bi-exclamation-triangle me-2"></i>
                    Common Pitfalls
                  </div>
                  <div className="card-body">
                    <ul className="mb-0">
                      <li>Always use double backslash for file paths</li>
                      <li>Escape quotes inside strings</li>
                      <li><code>\\n</code> vs <code>\\r\\n</code> for newlines</li>
                      <li>Don't forget the null terminator</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Updated CodeBox for escape sequences */}
          <div className="interactive-demo mt-4">
            <div className="demo-header mb-3">
              <h4 className="fw-bold text-warning">
                <i className="bi bi-keyboard me-2"></i>
                Escape Sequences Playground
              </h4>
              <p className="text-muted mb-0">
                Try modifying escape sequences to see different effects
              </p>
            </div>
            
            <CodeBox
              code={`#include <stdio.h>

int main() {
    // Newlines and tabs for formatting
    printf("Student Report:\\n");
    printf("===============\\n");
    printf("Name:\\t\\tJohn Doe\\n");
    printf("Age:\\t\\t25\\n");
    printf("Grade:\\t\\tA\\n\\n");
    
    // File path with backslashes
    printf("File Location:\\n");
    printf("C:\\\\Users\\\\John\\\\Documents\\\\code.c\\n\\n");
    
    // Quotes within strings
    printf("Quote of the day:\\n");
    printf("She said, \\"Learn C!\\"\\n\\n");
    
    // Special effects
    printf("Loading: [        ]\\r");
    printf("Loading: [==      ]\\r");
    printf("Loading: [====    ]\\r");
    printf("Loading: [======  ]\\r");
    printf("Loading: [========]\\n");
    printf("Complete!\\n");
    
    return 0;
}`}
              title="Try it Yourself - Escape Sequences"
              language="c"
              showLineNumbers={true}
              highlightLines={[5, 10, 15, 19]}
              executable={true}
              useRealCompiler={false}
            />
          </div>
        </div>

        {/* Section 4: Practice Exercise */}
        <div className="section-block mb-5">
          <div className="section-header mb-4">
            <h2 className="h3 fw-bold section-title">
              <span className="section-number">4</span>
              Practice Exercise
            </h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="exercise-box">
            <div className="exercise-header">
              <h4 className="fw-bold text-primary">
                <i className="bi bi-pencil-square me-2"></i>
                Format a Student Report Card
              </h4>
              <p>Create a program that displays a formatted student report card.</p>
            </div>
            
            <div className="exercise-content">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card border-info">
                    <div className="card-header bg-info text-white">
                      <i className="bi bi-check-circle me-2"></i>
                      Requirements
                    </div>
                    <div className="card-body">
                      <ul>
                        <li>Use variables for student data</li>
                        <li>Apply proper formatting with tabs</li>
                        <li>Include borders using asterisks</li>
                        <li>Display percentages with 2 decimals</li>
                        <li>Use different format specifiers</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <h6 className="fw-bold">Variables to use:</h6>
                    <div className="code-snippet small">
                      <code>
                        char name[] = "Alice Johnson";<br/>
                        int roll = 101;<br/>
                        float marks[] = {`{85.5, 92.0, 78.5, 88.0}`};<br/>
                        float total = 0.0;<br/>
                        float percentage;
                      </code>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="card border-success p-2">
                    <div className="card-header bg-success text-white">
                      <i className="bi bi-eye me-2"></i>
                      Expected Output
                    </div>
                    <div className="card-body output-preview">
                      <pre className="mb-0">
                        <code>{`**********************************
*      STUDENT REPORT CARD     *
**********************************
* Name:     Alice Johnson      *
* Roll No:  101                *
*                              *
* Subject       Marks          *
* -------       -----          *
* Math          85.50          *
* Science       92.00          *
* English       78.50          *
* History       88.00          *
*                              *
* Total Marks:  344.00         *
* Percentage:   86.00%         *
* Grade:        A              *
**********************************`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Exercise Solution CodeBox */}
              <div className="mt-4">
                <div className="card border-secondary">
                  <div className="card-header bg-secondary text-white">
                    <i className="bi bi-code-slash me-2"></i>
                    Try the Solution
                  </div>
                  <div className="card-body p-0">
                    <CodeBox
                      code={`#include <stdio.h>

int main() {
    // Student data
    char name[] = "Alice Johnson";
    int roll = 101;
    float marks[] = {85.5, 92.0, 78.5, 88.0};
    float total = marks[0] + marks[1] + marks[2] + marks[3];
    float percentage = (total / 400) * 100;
    
    // Display report card
    printf("**********************************\\n");
    printf("*      STUDENT REPORT CARD     *\\n");
    printf("**********************************\\n");
    printf("* Name:     %-20s *\\n", name);
    printf("* Roll No:  %-20d *\\n", roll);
    printf("*                              *\\n");
    printf("* Subject       Marks          *\\n");
    printf("* -------       -----          *\\n");
    printf("* Math          %-13.2f *\\n", marks[0]);
    printf("* Science       %-13.2f *\\n", marks[1]);
    printf("* English       %-13.2f *\\n", marks[2]);
    printf("* History       %-13.2f *\\n", marks[3]);
    printf("*                              *\\n");
    printf("* Total Marks:  %-13.2f *\\n", total);
    printf("* Percentage:   %-12.2f%% *\\n", percentage);
    printf("* Grade:        A              *\\n");
    printf("**********************************\\n");
    
    return 0;
}`}
                      title="Exercise Solution"
                      language="c"
                      executable={true}
                      useRealCompiler={false}
                      showLineNumbers={true}
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <button className="btn btn-primary me-2" onClick={() => {
                  alert(`Hints:
1. Use printf with %s for strings
2. Use %d for roll number
3. Use %.2f for marks with 2 decimal places
4. Use %-20s for left-aligned text in 20 spaces
5. Use %% to print percentage sign`);
                }}>
                  <i className="bi bi-lightbulb me-1"></i>
                  Show Hint
                </button>
                <button className="btn btn-success" onClick={() => {
                  const solutionCode = `#include <stdio.h>

int main() {
    char name[] = "Alice Johnson";
    int roll = 101;
    float marks[] = {85.5, 92.0, 78.5, 88.0};
    float total = marks[0] + marks[1] + marks[2] + marks[3];
    float percentage = (total / 400) * 100;
    
    printf("**********************************\\n");
    printf("*      STUDENT REPORT CARD     *\\n");
    printf("**********************************\\n");
    printf("* Name:     %-20s *\\n", name);
    printf("* Roll No:  %-20d *\\n", roll);
    printf("*                              *\\n");
    printf("* Subject       Marks          *\\n");
    printf("* -------       -----          *\\n");
    printf("* Math          %-13.2f *\\n", marks[0]);
    printf("* Science       %-13.2f *\\n", marks[1]);
    printf("* English       %-13.2f *\\n", marks[2]);
    printf("* History       %-13.2f *\\n", marks[3]);
    printf("*                              *\\n");
    printf("* Total Marks:  %-13.2f *\\n", total);
    printf("* Percentage:   %-12.2f%% *\\n", percentage);
    printf("* Grade:        A              *\\n");
    printf("**********************************\\n");
    
    return 0;
}`;
                  
                  // Copy solution to clipboard
                  navigator.clipboard.writeText(solutionCode);
                  alert('Solution copied to clipboard! You can now paste it in the code editor above.');
                }}>
                  <i className="bi bi-clipboard me-1"></i>
                  Copy Solution
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Notes & Tips */}
        <div className="section-block">
          <div className="section-header mb-4">
            <h2 className="h3 fw-bold section-title">
              <span className="section-number">5</span>
              Notes & Best Practices
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
                    <li>Always include <code>\\n</code> at line ends for clean output</li>
                    <li>Use meaningful variable names with output</li>
                    <li>Validate format specifiers match variable types</li>
                    <li>Use escape sequences for special characters</li>
                    <li>Test output on different systems</li>
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
                    <li>Don't forget <code>#include &lt;stdio.h&gt;</code></li>
                    <li>Avoid mismatched format specifiers</li>
                    <li>Don't use single backslash in Windows paths</li>
                    <li>Avoid hardcoding values in printf</li>
                    <li>Don't forget null terminator for strings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="alert alert-gradient">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <i className="bi bi-star-fill fs-4"></i>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5 className="alert-heading">Pro Tip</h5>
                  <p className="mb-0">
                    Use <code>printf("Debug: x = %d, y = %f\\n", x, y);</code> for debugging.
                    This helps track variable values during program execution.
                    Try it in the interactive editors above!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Interactive Challenge */}
          <div className="challenge-box mt-4">
            <div className="card border-primary">
              <div className="card-header bg-primary text-white">
                <i className="bi bi-trophy me-2"></i>
                Final Challenge: Create Your Own Program
              </div>
              <div className="card-body">
                <p className="mb-3">
                  Try creating a program that displays your own information using all the concepts learned:
                </p>
                <ul className="mb-4">
                  <li>Your name and age</li>
                  <li>Your favorite number and its square</li>
                  <li>A quote you like (with quotes)</li>
                  <li>Formatted as a nice display</li>
                </ul>
                
                <CodeBox
                  code={`#include <stdio.h>

int main() {
    // Your code here - try creating your own program!
    // Example:
    printf("My Information Card\\n");
    printf("===================\\n");
    printf("Name: John Doe\\n");
    printf("Age: 25\\n");
    printf("Favorite number: 7\\n");
    printf("Square: 49\\n");
    printf("Quote: \\"Learn by doing!\\"\\n");
    
    return 0;
}`}
                  title="Your Coding Playground"
                  language="c"
                  executable={true}
                  useRealCompiler={false}
                  showLineNumbers={true}
                />
                
                <div className="mt-3 text-center">
                  <small className="text-muted">
                    <i className="bi bi-info-circle me-1"></i>
                    Edit the code above and click Run to test your own program
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}