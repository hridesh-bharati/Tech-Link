// src/components/Dictionary/CPlusPlus/Chapter4.jsx
import React from "react";
import CodeBox from "../CodeBox/CodeBox";

export default function CppChapter4() {
  return (
    <div className="chapter-content container-fluid px-3 pb-5">
      {/* Header */}
      <div className="chapter-header mt-4 mb-4 text-center">
        <h1 className="h2 fw-bold">📘 Chapter 4: C++ Output (cout)</h1>
        <p className="text-white">Display data on screen using cout</p>
      </div>

      {/* What is cout? */}
      <section className="mb-4">
        <div className="card border-success mb-3">
          <div className="card-header bg-success text-white py-2">
            <h4 className="h5 mb-0">What is cout?</h4>
          </div>
          <div className="card-body p-3">
            <p>
              <b>cout</b> (pronounced "see-out") is a C++ object used to display information on screen.
            </p>
            <div className="row mt-2">
              <div className="col-md-6">
                <p><b>Technical:</b></p>
                <ul>
                  <li>Part of <code>iostream</code> header</li>
                  <li>Object of <code>ostream</code> class</li>
                  <li>Uses <code>&lt;&lt;</code> operator</li>
                </ul>
              </div>
              <div className="col-md-6">
                <p><b>Simple:</b></p>
                <ul>
                  <li>Like a screen printer</li>
                  <li>Shows text, numbers, variables</li>
                  <li>Essential for all programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syntax */}
      <section className="mb-4">
        <h3 className="h4 fw-bold text-primary mb-3">cout Syntax</h3>
        
        <div className="card bg-light mb-3">
          <div className="card-body p-3">
            <p className="mb-2"><b>Basic Syntax:</b></p>
            <code className="d-block bg-white p-2 border rounded mb-2">
              cout &lt;&lt; data_to_display;
            </code>
            <p className="mb-0">
              <code>data_to_display</code> can be text, variables, numbers, or calculations.
            </p>
          </div>
        </div>

        <CodeBox
          title="Complete Working Program"
          language="cpp"
          executable={true}
          code={`#include <iostream>
using namespace std;

int main() {
    cout << "Welcome to C++" << endl;
    
    string name = "John";
    int age = 25;
    double salary = 50000.75;
    
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "Salary: $" << salary << endl;
    
    int x = 10, y = 20;
    cout << x << " + " << y << " = " << (x + y);
    
    return 0;
}`}
        />
      </section>

      {/* How cout Works */}
      <section className="mb-4">
        <h3 className="h4 fw-bold text-primary mb-3">How cout Works</h3>
        
        <div className="card">
          <div className="card-body p-3">
            <p><b>Step-by-Step:</b></p>
            <ol>
              <li><code>#include &lt;iostream&gt;</code> - Add output features</li>
              <li><code>using namespace std;</code> - Use cout directly</li>
              <li><code>cout &lt;&lt;</code> - Send data to screen</li>
              <li>Data → Buffer → Screen display</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-4">
        <h3 className="h4 fw-bold text-primary mb-3">Key Features</h3>
        
        <div className="row g-3">
          <div className="col-md-4">
            <div className="card h-100 border-primary">
              <div className="card-body p-3">
                <h6 className="fw-bold text-primary">Type-Safe</h6>
                <p>Handles int, float, string automatically</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-success">
              <div className="card-body p-3">
                <h6 className="fw-bold text-success">Chainable</h6>
                <p>Multiple outputs in one line</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-warning">
              <div className="card-body p-3">
                <h6 className="fw-bold text-warning">Buffered</h6>
                <p>Efficient data collection before display</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Output Methods */}
      <section className="mb-4">
        <h3 className="h4 fw-bold text-primary mb-3">Output Methods</h3>
        
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-primary">
              <tr>
                <th>Method</th>
                <th>Syntax</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic Output</td>
                <td><code>cout &lt;&lt; data;</code></td>
                <td>Display single item</td>
              </tr>
              <tr>
                <td>Chained Output</td>
                <td><code>cout &lt;&lt; data1 &lt;&lt; data2;</code></td>
                <td>Display multiple items</td>
              </tr>
              <tr>
                <td>New Line (endl)</td>
                <td><code>cout &lt;&lt; data &lt;&lt; endl;</code></td>
                <td>New line + flush buffer</td>
              </tr>
              <tr>
                <td>New Line (\n)</td>
                <td><code>cout &lt;&lt; "text\\n";</code></td>
                <td>Just new line</td>
              </tr>
              <tr>
                <td>Tab Space</td>
                <td><code>cout &lt;&lt; "text\\t";</code></td>
                <td>Horizontal tab</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Complete Example */}
      <section className="mb-4">
        <h3 className="h4 fw-bold text-primary mb-3">Complete Program Example</h3>
        
        <CodeBox
          title="Employee Management System"
          language="cpp"
          executable={true}
          code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    string empName = "Robert Johnson";
    int empId = 1001;
    string department = "Engineering";
    double salary = 75000.50;
    
    cout << "========================================" << endl;
    cout << "       EMPLOYEE DETAILS" << endl;
    cout << "========================================" << endl;
    cout << endl;
    
    cout << "Employee ID   : " << empId << endl;
    cout << "Name          : " << empName << endl;
    cout << "Department    : " << department << endl;
    cout << "Salary        : $" << salary << endl;
    cout << endl;
    
    cout << "Contact:" << endl;
    cout << "Email: robert@company.com\\n";
    cout << "Phone: +1 (555) 123-4567\\n";
    cout << endl;
    
    int a = 45, b = 27;
    cout << "Calculations:" << endl;
    cout << a << " + " << b << " = " << (a + b) << endl;
    cout << a << " * " << b << " = " << (a * b) << endl;
    
    cout << "========================================" << endl;
    
    return 0;
}`}
        />
      </section>

      {/* Escape Sequences */}
      <section className="mb-4">
        <h3 className="h4 fw-bold text-primary mb-3">Escape Sequences</h3>
        
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Sequence</th>
                <th>Name</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>\\n</code></td>
                <td>Newline</td>
                <td><code>cout &lt;&lt; "Line1\\nLine2";</code></td>
              </tr>
              <tr>
                <td><code>\\t</code></td>
                <td>Tab</td>
                <td><code>cout &lt;&lt; "Name\\tAge";</code></td>
              </tr>
              <tr>
                <td><code>\\\\</code></td>
                <td>Backslash</td>
                <td><code>cout &lt;&lt; "C:\\\\Windows";</code></td>
              </tr>
              <tr>
                <td><code>\\"</code></td>
                <td>Double Quote</td>
                <td><code>cout &lt;&lt; "\\"Hello\\"";</code></td>
              </tr>
              <tr>
                <td><code>\\'</code></td>
                <td>Single Quote</td>
                <td><code>cout &lt;&lt; "It\\'s easy";</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Errors and Solutions */}
      <section className="mb-4">
        <h3 className="h4 fw-bold text-danger mb-3">Common Errors</h3>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card border-danger h-100">
              <div className="card-header bg-danger text-white py-2">
                <h6 className="mb-0">Wrong</h6>
              </div>
              <div className="card-body p-3">
                <code className="d-block bg-light p-2 mb-2">cout "Hello";</code>
                <code className="d-block bg-light p-2 mb-2">cout &lt;&lt; Hello;</code>
                <code className="d-block bg-light p-2">cout &lt;&lt; "Age: " age;</code>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-success h-100">
              <div className="card-header bg-success text-white py-2">
                <h6 className="mb-0">Correct</h6>
              </div>
              <div className="card-body p-3">
                <code className="d-block bg-light p-2 mb-2">cout &lt;&lt; "Hello";</code>
                <code className="d-block bg-light p-2 mb-2">cout &lt;&lt; "Hello";</code>
                <code className="d-block bg-light p-2">cout &lt;&lt; "Age: " &lt;&lt; age;</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="mb-4">
        <div className="card border-success">
          <div className="card-header bg-success text-white py-2">
            <h4 className="h5 mb-0">Summary</h4>
          </div>
          <div className="card-body p-3">
            <ul className="mb-0">
              <li><code>cout</code> displays output on screen</li>
              <li>Use <code>&lt;&lt;</code> to send data</li>
              <li>Text in quotes, variables without quotes</li>
              <li>Use <code>endl</code> or <code>\n</code> for new lines</li>
              <li>Escape sequences for special characters</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}