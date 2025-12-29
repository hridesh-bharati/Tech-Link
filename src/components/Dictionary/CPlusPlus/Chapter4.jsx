// src/components/Dictionary/CPlusPlus/Chapter4.jsx
import React from "react";
import CodeBox from "../CodeBox/CodeBox";

export default function CppChapter4() {
  return (
    <div className="chapter-content container-fluid px-3 pb-5">

      {/* Header */}
      <div className="chapter-header mt-2 mb-4 text-center">
        <h1 className="h2 fw-bold">📘 Chapter 4: C++ Output</h1>
        <p className="text-white">Displaying data on screen using cout</p>
      </div>

      {/* Hero Card */}
      <div className="card shadow-lg mb-4" style={{ borderLeft: "5px solid #198754" }}>
        <div
          className="card-body text-white p-4"
          style={{ background: "linear-gradient(135deg,#198754,#146c43)" }}
        >
          <h2 className="fw-bold">C++ Output with cout</h2>
          <p className="mb-0">
            Display text, numbers, and variables on screen using <b>cout</b>.
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <section className="mb-5">
        <h3 className="fw-bold text-success">🎯 What is cout?</h3>
        <p>
          <b>cout</b> (pronounced "see-out") is used to display output on the screen.
          It is used with the <b>insertion operator ()</b>.
        </p>

        <div className="alert alert-info">
          📌 <b>cout</b> stands for "character output"
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-5">
        <h3 className="fw-bold text-primary">🚀 Basic Output Example</h3>

        <CodeBox
          title="Hello World Program"
          language="cpp"
          executable={true}
          code={`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!";
    return 0;
}`}
        />
      </section>

      {/* Section 3 */}
      <section className="mb-5">
        <h3 className="fw-bold text-warning">📝 Multiple Outputs</h3>

        <CodeBox
          title="Multiple Outputs in One Line"
          language="cpp"
          executable={true}
          code={`#include <iostream>
using namespace std;

int main() {
    cout << "Name: " << "John" << endl;
    cout << "Age: " << 25 << endl;
    cout << "Salary: $" << 50000.50 << endl;
    return 0;
}`}
        />
      </section>

      {/* Section 4 */}
      <section className="mb-5">
        <h3 className="fw-bold text-danger">🧾 endl vs \n</h3>

        <div className="row">
          <div className="col-md-6">
            <CodeBox
              title="Using endl"
              language="cpp"
              code={`cout << "Line 1" << endl;
cout << "Line 2" << endl;
cout << "Line 3" << endl;`}
            />
          </div>
          <div className="col-md-6">
            <CodeBox
              title="Using \n"
              language="cpp"
              code={`cout << "Line 1\\n";
cout << "Line 2\\n";
cout << "Line 3\\n";`}
            />
          </div>
        </div>

        <div className="alert alert-warning mt-3">
          🔹 <b>endl</b> adds new line and flushes buffer<br/>
          🔹 <b>\n</b> only adds new line
        </div>
      </section>

      {/* Section 5 */}
      <section className="mb-5">
        <h3 className="fw-bold text-info">🔢 Output with Variables</h3>

        <CodeBox
          title="Displaying Variables"
          language="cpp"
          executable={true}
          code={`#include <iostream>
using namespace std;

int main() {
    string name = "Alice";
    int age = 30;
    double salary = 75000.75;
    char grade = 'A';
    
    cout << "Employee Details:" << endl;
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "Salary: $" << salary << endl;
    cout << "Grade: " << grade << endl;
    
    return 0;
}`}
        />
      </section>

      {/* Section 6 */}
      <section className="mb-5">
        <h3 className="fw-bold text-success">➕ Mathematical Operations in Output</h3>

        <CodeBox
          title="Calculations in Output"
          language="cpp"
          executable={true}
          code={`#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 5;
    
    cout << a << " + " << b << " = " << (a + b) << endl;
    cout << a << " - " << b << " = " << (a - b) << endl;
    cout << a << " * " << b << " = " << (a * b) << endl;
    cout << a << " / " << b << " = " << (a / b) << endl;
    
    return 0;
}`}
        />
      </section>

      {/* Section 7 */}
      <section className="mb-5">
        <h3 className="fw-bold text-primary">🎨 Escape Sequences</h3>

        <CodeBox
          title="Common Escape Sequences"
          language="cpp"
          executable={true}
          code={`#include <iostream>
using namespace std;

int main() {
    cout << "New line: Line1\\nLine2" << endl;
    cout << "Tab: Name\\tAge\\tSalary" << endl;
    cout << "Backslash: C:\\\\Program Files\\\\" << endl;
    cout << "Double quote: \\"Hello World\\"" << endl;
    cout << "Single quote: It\\'s raining" << endl;
    
    return 0;
}`}
        />

        <div className="table-responsive mt-3">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Escape Sequence</th>
                <th>Description</th>
                <th>Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>\n</code></td>
                <td>New line</td>
                <td>Moves to next line</td>
              </tr>
              <tr>
                <td><code>\t</code></td>
                <td>Tab</td>
                <td>Horizontal tab</td>
              </tr>
              <tr>
                <td><code>\\</code></td>
                <td>Backslash</td>
                <td>\</td>
              </tr>
              <tr>
                <td><code>\"</code></td>
                <td>Double quote</td>
                <td>"</td>
              </tr>
              <tr>
                <td><code>\'</code></td>
                <td>Single quote</td>
                <td>'</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8 */}
      <section className="mb-5">
        <h3 className="fw-bold text-danger">⚠️ Common Output Errors</h3>

        <div className="row">
          <div className="col-md-6">
            <div className="card border-danger mb-3">
              <div className="card-header bg-danger text-white">
                <h6 className="mb-0">Wrong</h6>
              </div>
              <div className="card-body">
                <code>cout "Hello World";</code>
                <p className="text-danger mt-2">❌ Missing  operator</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-success mb-3">
              <div className="card-header bg-success text-white">
                <h6 className="mb-0">Correct</h6>
              </div>
              <div className="card-body">
                <code>cout  "Hello World";</code>
                <p className="text-success mt-2">✅ With  operator</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="mb-5">
        <div className="alert alert-success">
          <h5 className="fw-bold">📌 Chapter Summary</h5>
          <ul className="mb-0">
            <li><b>cout</b> displays output on screen</li>
            <li>Use <b></b> insertion operator</li>
            <li><b>endl</b> or <b>\n</b> for new line</li>
            <li>Escape sequences for special characters</li>
            <li>Can output variables and calculations</li>
          </ul>
        </div>
      </section>

      {/* Practice Exercises */}
      <section className="mb-5">
        <h3 className="fw-bold text-primary">💪 Practice Exercises</h3>
        <div className="card">
          <div className="card-body">
            <ol>
              <li>Write a program to display your name and age</li>
              <li>Create a program that calculates and displays area of rectangle</li>
              <li>Display a formatted table using tabs (\t)</li>
              <li>Print a triangle pattern using stars (*)</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Next Button */}
      <div className="text-center">
        <a href="#" className="btn btn-lg btn-success px-5">
          Next Chapter: C++ Comments <i className="bi bi-arrow-right ms-2"></i>
        </a>
      </div>

    </div>
  );
}