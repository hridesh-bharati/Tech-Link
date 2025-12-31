// src/components/Dictionary/CPlusPlus/Chapter10.jsx
import React from "react";
import CodeBox from "../CodeBox/CodeBox";

export default function CppChapter10() {
  return (
    <div className="chapter-content container-fluid px-3 pb-5">
      {/* Header */}
      <div className="chapter-header mt-2 mb-4 text-center">
        <h1 className="h2 fw-bold">📘 Chapter 10: C++ Operators</h1>
        <p className="text-white">
          Understanding Arithmetic, Relational, Logical, Bitwise and Other Operators in C++
        </p>
      </div>

      {/* Hero Card */}
      <div className="card shadow-lg mb-4" style={{ borderLeft: "5px solid #ffc107" }}>
        <div
          className="card-body text-white p-4"
          style={{ background: "linear-gradient(135deg,#ffc107,#ffca2c)" }}
        >
          <h2 className="fw-bold">Operators in C++</h2>
          <p className="mb-0">
            <b>Operators</b> are special symbols that perform operations on operands (variables and values). 
            They are the building blocks of expressions in C++ programming.
          </p>
        </div>
      </div>

      {/* Section 1: Introduction */}
      <section className="mb-5">
        <h3 className="fw-bold text-primary">🎯 What are Operators?</h3>
        <p>
          <b>Operators</b> are symbols that tell the compiler to perform specific mathematical, 
          relational, or logical operations on operands. C++ provides a rich set of operators.
        </p>
        
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>📝 Operator Components</h5>
                <ul className="mb-0">
                  <li><b>Operator:</b> Symbol (+, -, *, /, etc.)</li>
                  <li><b>Operand:</b> Value/variable on which operation is performed</li>
                  <li><b>Expression:</b> Combination of operators and operands</li>
                  <li><b>Result:</b> Output of the operation</li>
                </ul>
                <CodeBox
                  language="cpp"
                  code={`int result = a + b;  // a, b are operands, + is operator
// result = value`}
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>⚡ Importance of Operators</h5>
                <ul className="mb-0">
                  <li>Perform calculations and computations</li>
                  <li>Compare values and make decisions</li>
                  <li>Manipulate bits at binary level</li>
                  <li>Control program flow</li>
                  <li>Memory management</li>
                  <li>Simplify complex operations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Classification of Operators */}
      <section className="mb-5">
  <h3 className="fw-bold text-success">📂 Classification of C++ Operators</h3>

  <div className="table-responsive">
    <table className="table table-bordered table-striped">
      <thead className="table-dark">
        <tr>
          <th>Category</th>
          <th>Description</th>
          <th>Common Operators</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Arithmetic</b></td>
          <td>Basic mathematical operations</td>
          <td><code>+ - * / % ++ --</code></td>
          <td><code>a + b, x++</code></td>
        </tr>
        <tr>
          <td><b>Relational</b></td>
          <td>Compare two values</td>
          <td><code>== != &gt; &lt; &gt;= &lt;=</code></td>
          <td><code>a == b, x &gt; y</code></td>
        </tr>
        <tr>
          <td><b>Logical</b></td>
          <td>Combine multiple conditions</td>
          <td><code>&amp;&amp; || !</code></td>
          <td><code>a &amp;&amp; b, !flag</code></td>
        </tr>
        <tr>
          <td><b>Bitwise</b></td>
          <td>Operate on bits</td>
          <td><code>&amp; | ^ ~ &lt;&lt; &gt;&gt;</code></td>
          <td><code>a & b, x &lt;&lt; 2</code></td>
        </tr>
        <tr>
          <td><b>Assignment</b></td>
          <td>Assign values to variables</td>
          <td><code>= += -= *= /= %=</code></td>
          <td><code>a = 5, x += 3</code></td>
        </tr>
        <tr>
          <td><b>Miscellaneous</b></td>
          <td>Special purpose operators</td>
          <td><code>?: . -&gt sizeof</code></td>
          <td><code>(a &gtb) ? a : b</code></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>


      {/* Section 3: Arithmetic Operators */}
      <section className="mb-5">
        <h3 className="fw-bold text-warning">🧮 Arithmetic Operators</h3>
        <p>
          Perform basic mathematical operations like addition, subtraction, multiplication, division, and modulus.
        </p>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Operator</th>
                <th>Name</th>
                <th>Description</th>
                <th>Example</th>
                <th>Result (if a=10, b=3)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>+</code></td>
                <td>Addition</td>
                <td>Adds two operands</td>
                <td><code>a + b</code></td>
                <td>13</td>
              </tr>
              <tr>
                <td><code>-</code></td>
                <td>Subtraction</td>
                <td>Subtracts second operand from first</td>
                <td><code>a - b</code></td>
                <td>7</td>
              </tr>
              <tr>
                <td><code>*</code></td>
                <td>Multiplication</td>
                <td>Multiplies both operands</td>
                <td><code>a * b</code></td>
                <td>30</td>
              </tr>
              <tr>
                <td><code>/</code></td>
                <td>Division</td>
                <td>Divides numerator by denominator</td>
                <td><code>a / b</code></td>
                <td>3 (integer division)</td>
              </tr>
              <tr>
                <td><code>%</code></td>
                <td>Modulus</td>
                <td>Remainder of division</td>
                <td><code>a % b</code></td>
                <td>1</td>
              </tr>
              <tr>
                <td><code>++</code></td>
                <td>Increment</td>
                <td>Increases integer value by one</td>
                <td><code>a++</code> or <code>++a</code></td>
                <td>11</td>
              </tr>
              <tr>
                <td><code>--</code></td>
                <td>Decrement</td>
                <td>Decreases integer value by one</td>
                <td><code>a--</code> or <code>--a</code></td>
                <td>9</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <CodeBox
              title="Arithmetic Operators Example"
              language="cpp"
              executable={true}
              code={`#include <iostream>
using namespace std;

int main() {
    int a = 20, b = 6;
    float x = 20.0, y = 6.0;
    
    cout << "=== INTEGER OPERATIONS ===" << endl;
    cout << "a = " << a << ", b = " << b << endl;
    cout << "Addition (a + b): " << a + b << endl;
    cout << "Subtraction (a - b): " << a - b << endl;
    cout << "Multiplication (a * b): " << a * b << endl;
    cout << "Division (a / b): " << a / b << endl;  // Integer division
    cout << "Modulus (a % b): " << a % b << endl;
    
    cout << "\\n=== FLOATING POINT OPERATIONS ===" << endl;
    cout << "x = " << x << ", y = " << y << endl;
    cout << "Floating division (x / y): " << x / y << endl;
    
    cout << "\\n=== INCREMENT/DECREMENT ===" << endl;
    int i = 5;
    cout << "Original i = " << i << endl;
    cout << "Post-increment (i++): " << i++ << endl;  // Use then increment
    cout << "After i++: " << i << endl;
    
    i = 5;  // Reset
    cout << "Pre-increment (++i): " << ++i << endl;   // Increment then use
    cout << "After ++i: " << i << endl;
    
    cout << "\\n=== MIXED EXPRESSIONS ===" << endl;
    int result = a + b * 2;  // Multiplication has higher precedence
    cout << "a + b * 2 = " << result << endl;
    
    result = (a + b) * 2;    // Parentheses change precedence
    cout << "(a + b) * 2 = " << result << endl;
    
    // Integer division vs floating division
    cout << "\\n=== IMPORTANT: INTEGER DIVISION ===" << endl;
    int num1 = 7, num2 = 2;
    float div1 = num1 / num2;           // Integer division: 3
    float div2 = (float)num1 / num2;   // Floating division: 3.5
    cout << "Wrong: " << num1 << " / " << num2 << " = " << div1 << endl;
    cout << "Correct: (float)" << num1 << " / " << num2 << " = " << div2 << endl;
    
    return 0;
}`}
            />
          </div>
          
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-warning text-dark">
                <h5>📝 Key Points - Arithmetic Operators</h5>
              </div>
              <div className="card-body">
                <h6>⚠️ Important Notes:</h6>
                <ul>
                  <li><b>Integer Division:</b> <code>7 / 2 = 3</code> (not 3.5)</li>
                  <li><b>Modulus Operator:</b> Works only with integers</li>
                  <li><b>Division by Zero:</b> Causes runtime error</li>
                  <li><b>Precedence:</b> <code>* / %</code> &gt; <code>+ -</code></li>
                </ul>
                
                <h6>🔄 Pre-increment vs Post-increment:</h6>
                <CodeBox
                  language="cpp"
                  code={`int x = 5;
int y;

// POST-increment: use then increment
y = x++;  // y = 5, x = 6

// PRE-increment: increment then use
x = 5;
y = ++x;  // y = 6, x = 6

// Common use in loops
for(int i = 0; i < 10; i++) {  // Post-increment
    cout << i << " ";
}`}
                />
                
                <div className="alert alert-info mt-3">
                  <small>💡 <b>Tip:</b> Use <code>float</code> or <code>double</code> for division to get decimal results.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Relational Operators */}
      <section className="mb-5">
        <h3 className="fw-bold text-info">📊 Relational Operators</h3>
        <p>
          Compare two values and return a boolean result (<code>true</code> or <code>false</code>). 
          Used in conditional statements and loops.
        </p>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Operator</th>
                <th>Name</th>
                <th>Description</th>
                <th>Example</th>
                <th>Result (if a=10, b=20)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>{`==`}</code></td>
                <td>Equal to</td>
                <td>Checks if two operands are equal</td>
                <td><code>a == b</code></td>
                <td><code>false</code></td>
              </tr>
              <tr>
                <td><code>{`!=`}</code></td>
                <td>Not equal to</td>
                <td>Checks if two operands are not equal</td>
                <td><code>a != b</code></td>
                <td><code>true</code></td>
              </tr>
              <tr>
                <td><code>&gt;</code></td>
                <td>Greater than</td>
                <td>Checks if left operand is greater than right</td>
                <td><code>a &gt; b</code></td>
                <td><code>false</code></td>
              </tr>
              <tr>
                <td><code>&lt;</code></td>
                <td>Less than</td>
                <td>Checks if left operand is less than right</td>
                <td><code>a &lt; b</code></td>
                <td><code>true</code></td>
              </tr>
              <tr>
                <td><code>{`>=`}</code></td>
                <td>Greater than or equal to</td>
                <td>Checks if left operand is greater than or equal to right</td>
                <td><code>a &gt;= b</code></td>
                <td><code>false</code></td>
              </tr>
              <tr>
                <td><code>{`<=`}</code></td>
                <td>Less than or equal to</td>
                <td>Checks if left operand is less than or equal to right</td>
                <td><code>a &lt;= b</code></td>
                <td><code>true</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <CodeBox
              title="Relational Operators Example"
              language="cpp"
              executable={true}
              code={`#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 20, c = 10;
    
    cout << "=== RELATIONAL OPERATORS ===" << endl;
    cout << "a = " << a << ", b = " << b << ", c = " << c << endl;
    
    // Equality operators
    cout << boolalpha;  // Print true/false instead of 1/0
    cout << "a == b: " << (a == b) << endl;
    cout << "a == c: " << (a == c) << endl;
    cout << "a != b: " << (a != b) << endl;
    cout << "a != c: " << (a != c) << endl;
    
    // Comparison operators
    cout << "a > b: " << (a > b) << endl;
    cout << "a < b: " << (a < b) << endl;
    cout << "a >= b: " << (a >= b) << endl;
    cout << "a <= b: " << (a <= b) << endl;
    cout << "a >= c: " << (a >= c) << endl;
    cout << "a <= c: " << (a <= c) << endl;
    
    cout << "\\n=== PRACTICAL USE ===" << endl;
    // Using in if statements
    int age = 18;
    cout << "Age = " << age << endl;
    if (age >= 18) {
        cout << "You are eligible to vote." << endl;
    } else {
        cout << "You are NOT eligible to vote." << endl;
    }
    
    // Using in loops
    cout << "\\nCounting from 1 to 5:" << endl;
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }
    cout << endl;
    
    // Comparing characters (ASCII values)
    char ch1 = 'A', ch2 = 'B';
    cout << "\\n=== CHARACTER COMPARISON ===" << endl;
    cout << "'A' < 'B': " << (ch1 < ch2) << endl;
    cout << "'A' == 65: " << (ch1 == 65) << endl;
    
    // Comparing floating point numbers (careful with precision)
    float x = 1.1, y = 1.1;
    cout << "\\n=== FLOATING POINT COMPARISON ===" << endl;
    cout << "1.1 == 1.1: " << (x == y) << endl;
    
    // Problem with floating point precision
    float f1 = 0.1 + 0.1 + 0.1;
    float f2 = 0.3;
    cout << "0.1+0.1+0.1 == 0.3: " << (f1 == f2) << endl;  // May be false!
    cout << "f1 = " << f1 << ", f2 = " << f2 << endl;
    
    // Better way to compare floats
    float epsilon = 0.00001;
    cout << "Using epsilon comparison: " << (abs(f1 - f2) < epsilon) << endl;
    
    return 0;
}`}
            />
          </div>
          
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-info text-white">
                <h5>📝 Important Notes - Relational Operators</h5>
              </div>
              <div className="card-body">
                <h6>⚠️ Common Pitfalls:</h6>
                <ul>
                  <li><b>= vs ==:</b> <code>=</code> is assignment, <code>==</code> is comparison</li>
                  <li><b>Floating Point Comparison:</b> Use epsilon for precision</li>
                  <li><b>Chaining Comparisons:</b> Not allowed: <code>a &lt; b &lt; c</code></li>
                  <li><b>ASCII Comparison:</b> Characters compared by ASCII values</li>
                </ul>
                
                <h6>✅ Correct vs ❌ Incorrect:</h6>
                <CodeBox
                  language="cpp"
                  code={`// ❌ WRONG: Assignment instead of comparison
if (x = 5) {  // Always true (assigns 5 to x)
    // ...
}

// ✅ CORRECT: Comparison
if (x == 5) {  // Checks if x equals 5
    // ...
}

// ❌ WRONG: Chained comparison (doesn't work as expected)
if (a < b < c) {  // Actually: (a < b) < c
    // ...
}

// ✅ CORRECT: Use logical AND
if (a < b && b < c) {
    // ...
}

// ❌ Problem with floating point
if (0.1 + 0.1 + 0.1 == 0.3) {  // May be false!
    // ...
}

// ✅ Better: Use epsilon
float epsilon = 0.00001;
if (abs((0.1 + 0.1 + 0.1) - 0.3) < epsilon) {
    // ...
}`}
                />
                
                <div className="alert alert-warning mt-3">
                  <small>⚠️ <b>Warning:</b> Always use <code>==</code> for comparison, not <code>=</code> (assignment).</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Logical Operators */}
      <section className="mb-5">
        <h3 className="fw-bold text-danger">🔗 Logical Operators</h3>
        <p>
          Combine multiple conditions and return boolean results. Essential for complex decision-making.
        </p>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Operator</th>
                <th>Name</th>
                <th>Description</th>
                <th>Truth Table</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>{`&&`}</code></td>
                <td>Logical AND</td>
                <td>True if both operands are true</td>
                <td>
                  <code>true && true = true</code><br/>
                  <code>true && false = false</code><br/>
                  <code>false && true = false</code><br/>
                  <code>false && false = false</code>
                </td>
                <td><code>(age &gt;= 18) && (hasId)</code></td>
              </tr>
              <tr>
                <td><code>{`||`}</code></td>
                <td>Logical OR</td>
                <td>True if at least one operand is true</td>
                <td>
                  <code>true || true = true</code><br/>
                  <code>true || false = true</code><br/>
                  <code>false || true = true</code><br/>
                  <code>false || false = false</code>
                </td>
                <td><code>(marks &gt;= 60) || (attendance &gt;= 75)</code></td>
              </tr>
              <tr>
                <td><code>!</code></td>
                <td>Logical NOT</td>
                <td>Reverses the logical state</td>
                <td>
                  <code>!true = false</code><br/>
                  <code>!false = true</code>
                </td>
                <td><code>!(age &lt; 18)</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <CodeBox
              title="Logical Operators Example"
              language="cpp"
              executable={true}
              code={`#include <iostream>
using namespace std;

int main() {
    cout << "=== LOGICAL OPERATORS ===" << endl;
    
    bool a = true, b = false, c = true;
    
    cout << boolalpha;
    cout << "a = " << a << ", b = " << b << ", c = " << c << endl;
    
    // Logical AND (&&)
    cout << "\\n=== LOGICAL AND ===" << endl;
    cout << "a && b: " << (a && b) << endl;
    cout << "a && c: " << (a && c) << endl;
    cout << "b && c: " << (b && c) << endl;
    cout << "a && b && c: " << (a && b && c) << endl;
    
    // Logical OR (||)
    cout << "\\n=== LOGICAL OR ===" << endl;
    cout << "a || b: " << (a || b) << endl;
    cout << "a || c: " << (a || c) << endl;
    cout << "b || c: " << (b || c) << endl;
    cout << "b || false: " << (b || false) << endl;
    
    // Logical NOT (!)
    cout << "\\n=== LOGICAL NOT ===" << endl;
    cout << "!a: " << (!a) << endl;
    cout << "!b: " << (!b) << endl;
    cout << "!!a: " << (!!a) << endl;  // Double negation
    
    cout << "\\n=== PRACTICAL EXAMPLES ===" << endl;
    
    // Example 1: Voting eligibility
    int age = 20;
    bool isCitizen = true;
    bool hasVoterId = false;
    
    if (age >= 18 && isCitizen) {
        cout << "Eligible to vote" << endl;
        if (hasVoterId) {
            cout << "Can vote now!" << endl;
        } else {
            cout << "Need voter ID card" << endl;
        }
    } else {
        cout << "Not eligible to vote" << endl;
    }
    
    // Example 2: Grading system
    int marks = 75;
    int attendance = 80;
    
    if (marks >= 60 && attendance >= 75) {
        cout << "Pass: Good marks and attendance" << endl;
    } else if (marks >= 60 || attendance >= 75) {
        cout << "Pass: Either marks or attendance is good" << endl;
    } else {
        cout << "Fail: Both marks and attendance are low" << endl;
    }
    
    // Example 3: Range checking
    int score = 85;
    if (score >= 0 && score <= 100) {
        cout << "Valid score: " << score << endl;
    } else {
        cout << "Invalid score!" << endl;
    }
    
    // Example 4: NOT operator
    bool isLoggedIn = false;
    if (!isLoggedIn) {
        cout << "Please log in to continue" << endl;
    }
    
    // Example 5: Complex condition
    int day = 3;  // 1=Mon, 2=Tue, ..., 7=Sun
    bool isHoliday = false;
    
    if ((day == 6 || day == 7) || isHoliday) {
        cout << "It's weekend or holiday!" << endl;
    } else {
        cout << "It's a working day" << endl;
    }
    
    cout << "\\n=== SHORT-CIRCUIT EVALUATION ===" << endl;
    // Short-circuit behavior
    int x = 0, y = 5;
    
    // In AND, if first is false, second is not evaluated
    if (x != 0 && y/x > 2) {
        cout << "This won't execute" << endl;
    } else {
        cout << "Safe due to short-circuit" << endl;
    }
    
    // In OR, if first is true, second is not evaluated
    if (x == 0 || y/x > 2) {
        cout << "This will cause error if evaluated fully" << endl;
    }
    
    return 0;
}`}
            />
          </div>
          
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-danger text-white">
                <h5>📝 Key Concepts - Logical Operators</h5>
              </div>
              <div className="card-body">
                <h6>⚡ Short-Circuit Evaluation:</h6>
                <ul>
                  <li><b>AND (&&):</b> If first operand is false, second is NOT evaluated</li>
                  <li><b>OR (||):</b> If first operand is true, second is NOT evaluated</li>
                  <li>This improves performance and prevents errors</li>
                </ul>
                
                <CodeBox
                  language="cpp"
                  code={`// Example of short-circuit evaluation
int x = 0;
int* ptr = nullptr;

// Safe due to short-circuit
if (ptr != nullptr && *ptr > 0) {
    // Won't dereference null pointer
}

// Also safe
if (ptr == nullptr || *ptr == 0) {
    // Won't dereference null pointer
}`}
                />
                
                <h6>🔢 Operator Precedence:</h6>
                <CodeBox
                  language="cpp"
                  code={`// Without parentheses (confusing)
if (a > b && c < d || e == f) {
    // Hard to understand precedence
}

// With parentheses (clear)
if ((a > b && c < d) || e == f) {
    // Much clearer
}

// Recommended precedence order:
// 1. Arithmetic operators
// 2. Relational operators  
// 3. Logical operators (&& before ||)
// 4. Use parentheses for clarity

// Good practice:
if ((age >= 18) && (hasId || hasPassport)) {
    // Clear and maintainable
}`}
                />
                
                <div className="alert alert-success mt-3">
                  <small>💡 <b>Best Practice:</b> Use parentheses to make complex expressions clear and avoid precedence confusion.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Assignment Operators */}
      <section className="mb-5">
        <h3 className="fw-bold text-primary">📝 Assignment Operators</h3>
        <p>
          Used to assign values to variables. C++ provides compound assignment operators for shorthand operations.
        </p>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Operator</th>
                <th>Name</th>
                <th>Description</th>
                <th>Example</th>
                <th>Equivalent To</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>=</code></td>
                <td>Assignment</td>
                <td>Assigns right operand to left operand</td>
                <td><code>a = 5</code></td>
                <td><code>a = 5</code></td>
              </tr>
              <tr>
                <td><code>+=</code></td>
                <td>Add AND assign</td>
                <td>Adds right operand to left operand and assigns to left</td>
                <td><code>a += 3</code></td>
                <td><code>a = a + 3</code></td>
              </tr>
              <tr>
                <td><code>-=</code></td>
                <td>Subtract AND assign</td>
                <td>Subtracts right operand from left and assigns to left</td>
                <td><code>a -= 2</code></td>
                <td><code>a = a - 2</code></td>
              </tr>
              <tr>
                <td><code>*=</code></td>
                <td>Multiply AND assign</td>
                <td>Multiplies left operand with right and assigns to left</td>
                <td><code>a *= 4</code></td>
                <td><code>a = a * 4</code></td>
              </tr>
              <tr>
                <td><code>/=</code></td>
                <td>Divide AND assign</td>
                <td>Divides left operand by right and assigns to left</td>
                <td><code>a /= 2</code></td>
                <td><code>a = a / 2</code></td>
              </tr>
              <tr>
                <td><code>%=</code></td>
                <td>Modulus AND assign</td>
                <td>Takes modulus and assigns to left operand</td>
                <td><code>a %= 3</code></td>
                <td><code>a = a % 3</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <CodeBox
              title="Assignment Operators Example"
              language="cpp"
              executable={true}
              code={`#include <iostream>
using namespace std;

int main() {
    cout << "=== ASSIGNMENT OPERATORS ===" << endl;
    
    // Basic assignment
    int a = 10;
    cout << "Initial a = " << a << endl;
    
    // Compound assignment operators
    a += 5;  // a = a + 5
    cout << "After a += 5: " << a << endl;
    
    a -= 3;  // a = a - 3
    cout << "After a -= 3: " << a << endl;
    
    a *= 2;  // a = a * 2
    cout << "After a *= 2: " << a << endl;
    
    a /= 4;  // a = a / 4
    cout << "After a /= 4: " << a << endl;
    
    a %= 3;  // a = a % 3
    cout << "After a %= 3: " << a << endl;
    
    cout << "\\n=== PRACTICAL EXAMPLES ===" << endl;
    
    // Example 1: Accumulating sum
    int sum = 0;
    cout << "\\nAccumulating sum of 1 to 5:" << endl;
    for (int i = 1; i <= 5; i++) {
        sum += i;  // Shorter than sum = sum + i
        cout << "After adding " << i << ", sum = " << sum << endl;
    }
    
    // Example 2: Calculating product
    int product = 1;
    cout << "\\nCalculating 5! (factorial):" << endl;
    for (int i = 1; i <= 5; i++) {
        product *= i;
        cout << i << "! = " << product << endl;
    }
    
    // Example 3: Counter with different operations
    int counter = 100;
    cout << "\\nCounter operations:" << endl;
    cout << "Initial: " << counter << endl;
    
    counter += 10;    // Increase by 10
    cout << "After += 10: " << counter << endl;
    
    counter -= 25;    // Decrease by 25
    cout << "After -= 25: " << counter << endl;
    
    counter *= 2;     // Double it
    cout << "After *= 2: " << counter << endl;
    
    counter /= 5;     // Divide by 5
    cout << "After /= 5: " << counter << endl;
    
    // Example 4: Working with arrays
    cout << "\\n=== WORKING WITH ARRAYS ===" << endl;
    int numbers[5] = {1, 2, 3, 4, 5};
    int arraySum = 0;
    
    for (int i = 0; i < 5; i++) {
        arraySum += numbers[i];  // Add each element to sum
    }
    cout << "Sum of array elements: " << arraySum << endl;
    
    // Example 5: Multiple assignment
    cout << "\\n=== MULTIPLE ASSIGNMENT ===" << endl;
    int x, y, z;
    x = y = z = 10;  // All get value 10
    cout << "x = " << x << ", y = " << y << ", z = " << z << endl;
    
    // Chained compound assignment (careful!)
    x += y += 5;  // y = y + 5, then x = x + y
    cout << "After x += y += 5:" << endl;
    cout << "x = " << x << ", y = " << y << endl;
    
    // Example 6: Type conversion in assignment
    cout << "\\n=== TYPE CONVERSION ===" << endl;
    int intVal = 10;
    float floatVal = 5.5;
    
    intVal += floatVal;  // floatVal converted to int (5)
    cout << "intVal += 5.5: " << intVal << endl;
    
    // Reset
    intVal = 10;
    floatVal += intVal;  // intVal converted to float (10.0)
    cout << "floatVal += 10: " << floatVal << endl;
    
    return 0;
}`}
            />
          </div>
          
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h5>📝 Important Notes - Assignment Operators</h5>
              </div>
              <div className="card-body">
                <h6>✅ Benefits of Compound Assignment:</h6>
                <ul>
                  <li><b>Shorter code:</b> <code>a += 5</code> vs <code>a = a + 5</code></li>
                  <li><b>More readable:</b> Clearly shows intent</li>
                  <li><b>Potentially faster:</b> Compiler can optimize better</li>
                  <li><b>Less error-prone:</b> Variable name written only once</li>
                </ul>
                
                <h6>⚠️ Common Mistakes:</h6>
                <CodeBox
                  language="cpp"
                  code={`// ❌ WRONG: Confusing = with ==
if (x = 5) {  // Assigns 5 to x, always true
    // ...
}

// ✅ CORRECT
if (x == 5) {  // Compares x with 5
    // ...
}

// ❌ Problem: Loss of precision
int a = 10;
a /= 3;  // a = 3 (not 3.333...)

// ✅ Solution: Use float
float b = 10.0;
b /= 3.0;  // b = 3.333...

// ❌ Confusing: Multiple assignment precedence
int x = 5, y = 10;
x *= y += 2;  // Hard to read
// y = y + 2 = 12
// x = x * y = 5 * 12 = 60

// ✅ Better: Split into clear steps
y += 2;
x *= y;`}
                />
                
                <h6>🔄 Assignment vs Initialization:</h6>
                <CodeBox
                  language="cpp"
                  code={`// INITIALIZATION (when declaring)
int x = 10;          // Initialization
const int y = 20;    // Constant initialization
int z{30};           // Uniform initialization (C++11)

// ASSIGNMENT (after declaration)
x = 15;              // Assignment
x += 5;              // Compound assignment
// y = 25;           // ERROR: y is const

// Multiple variables
int a = 1, b = 2, c = 3;  // All initialized
a = b = c = 10;           // All assigned 10
// Right to left: c=10, b=c, a=b`}
                />
                
                <div className="alert alert-info mt-3">
                  <small>💡 <b>Tip:</b> Use compound assignment operators (<code>+=, -=, *=, /=, %=</code>) for cleaner and more efficient code.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Bitwise Operators */}
      <section className="mb-5">
        <h3 className="fw-bold text-success">🔢 Bitwise Operators</h3>
        <p>
          Perform operations at the bit level. Useful for low-level programming, flags, and optimization.
        </p>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Operator</th>
                <th>Name</th>
                <th>Description</th>
                <th>Example (a=5=0101, b=3=0011)</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>&</code></td>
                <td>Bitwise AND</td>
                <td>Each bit is 1 if both bits are 1</td>
                <td><code>a & b</code> (0101 & 0011)</td>
                <td>0001 (1)</td>
              </tr>
              <tr>
                <td><code>|</code></td>
                <td>Bitwise OR</td>
                <td>Each bit is 1 if at least one bit is 1</td>
                <td><code>a | b</code> (0101 | 0011)</td>
                <td>0111 (7)</td>
              </tr>
              <tr>
                <td><code>^</code></td>
                <td>Bitwise XOR</td>
                <td>Each bit is 1 if bits are different</td>
                <td><code>a ^ b</code> (0101 ^ 0011)</td>
                <td>0110 (6)</td>
              </tr>
              <tr>
                <td><code>~</code></td>
                <td>Bitwise NOT</td>
                <td>Inverts all bits (1's complement)</td>
                <td><code>~a</code> (~0101)</td>
                <td>1010 (-6 in 4-bit)</td>
              </tr>
              <tr>
                <td><code>&lt;&lt;</code></td>
                <td>Left Shift</td>
                <td>Shift bits left, fill with 0</td>
                <td><code>a &lt;&lt; 1</code> (0101 &lt;&lt; 1)</td>
                <td>1010 (10)</td>
              </tr>
              <tr>
                <td><code>&gt;&gt;</code></td>
                <td>Right Shift</td>
                <td>Shift bits right</td>
                <td><code>a &gt;&gt; 1</code> (0101 &gt;&gt; 1)</td>
                <td>0010 (2)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <CodeBox
              title="Bitwise Operators Example"
              language="cpp"
              executable={true}
              code={`#include <iostream>
#include <bitset>  // For binary representation
using namespace std;

int main() {
    cout << "=== BITWISE OPERATORS ===" << endl;
    
    unsigned int a = 5;  // Binary: 0101
    unsigned int b = 3;  // Binary: 0011
    
    cout << "a = " << a << " (binary: " << bitset<4>(a) << ")" << endl;
    cout << "b = " << b << " (binary: " << bitset<4>(b) << ")" << endl;
    
    // Bitwise AND
    unsigned int result_and = a & b;
    cout << "\\na & b = " << result_and 
         << " (binary: " << bitset<4>(result_and) << ")" << endl;
    
    // Bitwise OR
    unsigned int result_or = a | b;
    cout << "a | b = " << result_or 
         << " (binary: " << bitset<4>(result_or) << ")" << endl;
    
    // Bitwise XOR
    unsigned int result_xor = a ^ b;
    cout << "a ^ b = " << result_xor 
         << " (binary: " << bitset<4>(result_xor) << ")" << endl;
    
    // Bitwise NOT
    unsigned int result_not_a = ~a;
    cout << "~a = " << result_not_a 
         << " (binary: " << bitset<8>(result_not_a) << ")" << endl;
    
    // Left Shift (multiply by 2^n)
    unsigned int result_lshift = a << 1;
    cout << "\\na << 1 = " << result_lshift 
         << " (binary: " << bitset<5>(result_lshift) << ")" << endl;
    cout << "Note: " << a << " * 2 = " << result_lshift << endl;
    
    // Right Shift (divide by 2^n)
    unsigned int result_rshift = a >> 1;
    cout << "a >> 1 = " << result_rshift 
         << " (binary: " << bitset<4>(result_rshift) << ")" << endl;
    cout << "Note: " << a << " / 2 = " << result_rshift << endl;
    
    cout << "\\n=== PRACTICAL APPLICATIONS ===" << endl;
    
    // Application 1: Flag manipulation
    cout << "\\n1. FLAG MANIPULATION:" << endl;
    const unsigned int READ = 1 << 0;   // 0001
    const unsigned int WRITE = 1 << 1;  // 0010
    const unsigned int EXECUTE = 1 << 2; // 0100
    
    unsigned int permissions = 0;
    cout << "Initial permissions: " << bitset<3>(permissions) << endl;
    
    // Set permissions
    permissions |= READ;       // Add READ permission
    permissions |= WRITE;      // Add WRITE permission
    cout << "After adding READ and WRITE: " << bitset<3>(permissions) << endl;
    
    // Check permission
    if (permissions & READ) {
        cout << "Has READ permission" << endl;
    }
    
    // Remove permission
    permissions &= ~WRITE;     // Remove WRITE permission
    cout << "After removing WRITE: " << bitset<3>(permissions) << endl;
    
    // Toggle permission
    permissions ^= EXECUTE;    // Toggle EXECUTE
    cout << "After toggling EXECUTE: " << bitset<3>(permissions) << endl;
    
    // Application 2: Fast multiplication/division
    cout << "\\n2. FAST MULTIPLICATION/DIVISION:" << endl;
    int num = 10;
    cout << "Original: " << num << endl;
    cout << "Multiplying by 4 (<< 2): " << (num << 2) << endl;
    cout << "Dividing by 2 (>> 1): " << (num >> 1) << endl;
    
    // Application 3: Checking even/odd
    cout << "\\n3. CHECKING EVEN/ODD:" << endl;
    int numbers[] = {1, 2, 3, 4, 5};
    for (int n : numbers) {
        if (n & 1) {  // n & 1 is faster than n % 2
            cout << n << " is odd" << endl;
        } else {
            cout << n << " is even" << endl;
        }
    }
    
    // Application 4: Swapping without temp variable
    cout << "\\n4. SWAPPING WITHOUT TEMP VARIABLE:" << endl;
    int x = 5, y = 9;
    cout << "Before swap: x = " << x << ", y = " << y << endl;
    
    x = x ^ y;
    y = x ^ y;
    x = x ^ y;
    
    cout << "After swap: x = " << x << ", y = " << y << endl;
    
    // Application 5: Extracting bits
    cout << "\\n5. EXTRACTING BITS:" << endl;
    unsigned int data = 0b11010110;  // 214
    cout << "Data: " << bitset<8>(data) << " (" << data << ")" << endl;
    
    // Extract bits 3-5 (bits are numbered from right, 0-based)
    unsigned int mask = 0b00111000;  // Bits 3,4,5
    unsigned int extracted = (data & mask) >> 3;
    cout << "Bits 3-5: " << bitset<3>(extracted) << " (" << extracted << ")" << endl;
    
    return 0;
}`}
            />
          </div>
          
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-success text-white">
                <h5>📝 Key Concepts - Bitwise Operators</h5>
              </div>
              <div className="card-body">
                <h6>🔢 Common Bitwise Operations:</h6>
                <CodeBox
                  language="cpp"
                  code={`// Setting a bit (OR with mask)
flags |= (1 << n);    // Set nth bit

// Clearing a bit (AND with complement)
flags &= ~(1 << n);   // Clear nth bit

// Toggling a bit (XOR with mask)
flags ^= (1 << n);    // Toggle nth bit

// Checking a bit
if (flags & (1 << n)) {
    // nth bit is set
}

// Extracting multiple bits
int extracted = (value & mask) >> shift;

// Setting multiple bits
value = (value & ~mask) | (newBits << shift);`}
                />
                
                <h6>⚡ Performance Tips:</h6>
                <ul>
                  <li><b>Even/Odd:</b> <code>(n & 1)</code> faster than <code>(n % 2)</code></li>
                  <li><b>Multiply/Divide by 2:</b> Use shift operators</li>
                  <li><b>Power of 2 check:</b> <code>(n & (n-1)) == 0</code></li>
                  <li><b>Flag operations:</b> Much faster than boolean arrays</li>
                </ul>
                
                <h6>⚠️ Important Notes:</h6>
                <CodeBox
                  language="cpp"
                  code={`// ❗ Use unsigned for bitwise operations
int signed_val = -5;
unsigned int unsigned_val = -5;

cout << "Signed: " << bitset<32>(signed_val) << endl;
cout << "Unsigned: " << bitset<32>(unsigned_val) << endl;
// Different due to two's complement

// ❗ Right shift on signed numbers
int positive = 8 >> 1;     // 4 (arithmetic shift)
int negative = -8 >> 1;    // -4 (implementation defined)

// ❗ Left shift overflow
int x = 1 << 31;  // May overflow on 32-bit systems

// ✅ Best practices
unsigned int flags = 0;  // Use unsigned for flags
flags |= (1U << n);      // Use unsigned literal
flags &= ~(1U << n);`}
                />
                
                <div className="alert alert-warning mt-3">
                  <small>⚠️ <b>Warning:</b> Bitwise operators work on integer types only. 
                  Don't use them on floating-point numbers.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Miscellaneous Operators */}
      <section className="mb-5">
        <h3 className="fw-bold text-info">🎭 Miscellaneous Operators</h3>
        <p>
          Special operators for specific purposes like conditional operations, comma operator, 
          sizeof, address, and dereference operators.
        </p>

        <div className="row">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg-info text-white">
                <h5>Conditional (Ternary) Operator</h5>
              </div>
              <div className="card-body">
                <p><b>Syntax:</b> <code>condition ? expression1 : expression2</code></p>
                <CodeBox
                  language="cpp"
                  code={`// Returns expression1 if condition is true,
// otherwise returns expression2

int a = 10, b = 20;
int max = (a > b) ? a : b;  // max = 20

int age = 18;
string status = (age >= 18) ? "Adult" : "Minor";

// Nested ternary (avoid for clarity)
int x = 5, y = 10, z = 15;
int largest = (x > y) ? 
              ((x > z) ? x : z) : 
              ((y > z) ? y : z);

// Equivalent to if-else
if (a > b) {
    max = a;
} else {
    max = b;
}`}
                />
                <small className="text-warning">⚠️ Use sparingly for simple conditions only.</small>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg-info text-white">
                <h5>Comma Operator</h5>
              </div>
              <div className="card-body">
                <p><b>Syntax:</b> <code>expression1, expression2</code></p>
                <CodeBox
                  language="cpp"
                  code={`// Evaluates multiple expressions, returns last one

int a = (5, 10);  // a = 10
int b = (printf("Hello"), 20);  // Prints Hello, b = 20

// Common in for loops
for (int i = 0, j = 10; i < j; i++, j--) {
    cout << i << " " << j << endl;
}

// Multiple initialization/update
int x, y, z;
x = (y = 5, z = 10, y + z);  // x = 15

// Avoid complex comma expressions
// ❌ Hard to read:
int result = (a = 5, b = 10, c = 15, a + b + c);

// ✅ Better:
a = 5; b = 10; c = 15;
int result = a + b + c;`}
                />
                <small className="text-warning">⚠️ Use only in for loops for clarity.</small>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg-info text-white">
                <h5>sizeof Operator</h5>
              </div>
              <div className="card-body">
                <p><b>Syntax:</b> <code>sizeof(type) </code> or <code>sizeof(expression)</code></p>
                <CodeBox
                  language="cpp"
                  code={`// Returns size in bytes

cout << "Size of int: " << sizeof(int) << " bytes" << endl;
cout << "Size of double: " << sizeof(double) << " bytes" << endl;

int arr[10];
cout << "Size of array: " << sizeof(arr) << " bytes" << endl;
cout << "Number of elements: " << sizeof(arr)/sizeof(arr[0]) << endl;

// With variables
int x = 10;
cout << "Size of x: " << sizeof(x) << " bytes" << endl;
cout << "Size of x*2: " << sizeof(x*2) << " bytes" << endl;

// With types
typedef int Marks;
cout << "Size of Marks: " << sizeof(Marks) << " bytes" << endl;

// Structure size
struct Student {
    int id;
    char name[20];
    float marks;
};
cout << "Size of Student: " << sizeof(Student) << " bytes" << endl;`}
                />
                <small className="text-success">💡 Useful for dynamic memory allocation and portability.</small>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg-info text-white">
                <h5>Address (&) and Dereference (*) Operators</h5>
              </div>
              <div className="card-body">
                <CodeBox
                  language="cpp"
                  code={`// Address operator (&): Returns memory address
int x = 10;
int* ptr = &x;  // ptr stores address of x
cout << "Address of x: " << &x << endl;
cout << "Value of ptr: " << ptr << endl;

// Dereference operator (*): Accesses value at address
cout << "Value at ptr: " << *ptr << endl;  // *ptr = 10
*ptr = 20;  // Modifies x through pointer
cout << "New x: " << x << endl;

// Reference operator (in declarations)
int& ref = x;  // ref is alias for x
ref = 30;      // Modifies x
cout << "x through ref: " << x << endl;

// Member access operators
struct Point {
    int x, y;
};

Point p;
Point* pPtr = &p;

p.x = 5;        // Dot operator for object
pPtr->y = 10;   // Arrow operator for pointer

cout << "p.x: " << p.x << ", pPtr->y: " << pPtr->y << endl;`}
                />
                <small className="text-success">💡 Essential for pointers and references.</small>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <CodeBox
            title="Complete Miscellaneous Operators Example"
            language="cpp"
            executable={true}
            code={`#include <iostream>
using namespace std;

int main() {
    cout << "=== MISCELLANEOUS OPERATORS ===" << endl;
    
    // 1. Ternary Operator
    cout << "\\n1. TERNARY OPERATOR:" << endl;
    int a = 10, b = 20;
    int max = (a > b) ? a : b;
    cout << "Max of " << a << " and " << b << " is " << max << endl;
    
    int score = 85;
    string grade = (score >= 90) ? "A" : 
                   (score >= 80) ? "B" : 
                   (score >= 70) ? "C" : 
                   (score >= 60) ? "D" : "F";
    cout << "Score " << score << " = Grade " << grade << endl;
    
    // 2. Comma Operator
    cout << "\\n2. COMMA OPERATOR:" << endl;
    int x, y;
    x = (y = 5, y + 10);  // y=5, then x=y+10=15
    cout << "x = " << x << ", y = " << y << endl;
    
    // In for loop
    for (int i = 0, j = 10; i < 5; i++, j--) {
        cout << "i=" << i << ", j=" << j << " | ";
    }
    cout << endl;
    
    // 3. sizeof Operator
    cout << "\\n3. sizeof OPERATOR:" << endl;
    cout << "sizeof(int): " << sizeof(int) << " bytes" << endl;
    cout << "sizeof(double): " << sizeof(double) << " bytes" << endl;
    cout << "sizeof(char): " << sizeof(char) << " byte" << endl;
    
    int arr[] = {1, 2, 3, 4, 5};
    int size = sizeof(arr) / sizeof(arr[0]);
    cout << "Array has " << size << " elements" << endl;
    
    // 4. Address and Dereference
    cout << "\\n4. ADDRESS (&) AND DEREFERENCE (*):" << endl;
    int num = 42;
    int* ptr = &num;
    
    cout << "Value of num: " << num << endl;
    cout << "Address of num: " << &num << endl;
    cout << "Value of ptr: " << ptr << endl;
    cout << "Value at ptr: " << *ptr << endl;
    
    *ptr = 100;  // Modify through pointer
    cout << "New num: " << num << endl;
    
    // 5. Type Cast Operators
    cout << "\\n5. TYPE CASTING:" << endl;
    int intVal = 10;
    float floatVal = 5.7;
    
    // C-style cast
    int cast1 = (int)floatVal;
    cout << "(int)5.7 = " << cast1 << endl;
    
    // Function-style cast
    float cast2 = float(intVal);
    cout << "float(10) = " << cast2 << endl;
    
    // static_cast (C++ style)
    double cast3 = static_cast<double>(intVal);
    cout << "static_cast<double>(10) = " << cast3 << endl;
    
    // 6. Scope Resolution Operator
    cout << "\\n6. SCOPE RESOLUTION (::):" << endl;
    // Global variable
    int global = 100;
    
    {
        // Local variable with same name
        int global = 200;
        cout << "Local global: " << global << endl;
        cout << "Global global: " << ::global << endl;
    }
    
    // 7. Member Access Operators
    cout << "\\n7. MEMBER ACCESS OPERATORS:" << endl;
    struct Rectangle {
        int length;
        int width;
        int area() { return length * width; }
    };
    
    Rectangle rect = {5, 3};
    Rectangle* rectPtr = &rect;
    
    cout << "Using dot: " << rect.area() << endl;
    cout << "Using arrow: " << rectPtr->area() << endl;
    
    return 0;
}`}
          />
        </div>
      </section>

      {/* Section 9: Operator Precedence and Associativity */}
      <section className="mb-5">
        <h3 className="fw-bold text-warning">⚖️ Operator Precedence & Associativity</h3>
        <p>
          Determines the order in which operators are evaluated in an expression.
        </p>

        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Precedence</th>
                <th>Category</th>
                <th>Operators</th>
                <th>Associativity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 (Highest)</td>
                <td>Scope Resolution</td>
                <td><code>::</code></td>
                <td>Left to Right</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Postfix</td>
                <td><code>() [] -&gt; . ++ --</code></td>
                <td>Left to Right</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Unary</td>
                <td><code>++ -- ! ~ + - * & sizeof</code></td>
                <td>Right to Left</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Multiplicative</td>
                <td><code>* / %</code></td>
                <td>Left to Right</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Additive</td>
                <td><code>+ -</code></td>
                <td>Left to Right</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Shift</td>
                <td><code>&lt;&lt; &gt;&gt;</code></td>
                <td>Left to Right</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Relational</td>
                <td><code>&lt; &lt;= &gt; &gt;=</code></td>
                <td>Left to Right</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Equality</td>
                <td><code>== !=</code></td>
                <td>Left to Right</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Bitwise AND</td>
                <td><code>&</code></td>
                <td>Left to Right</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Bitwise XOR</td>
                <td><code>^</code></td>
                <td>Left to Right</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Bitwise OR</td>
                <td><code>|</code></td>
                <td>Left to Right</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Logical AND</td>
                <td><code>&&</code></td>
                <td>Left to Right</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Logical OR</td>
                <td><code>||</code></td>
                <td>Left to Right</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Conditional</td>
                <td><code>?:</code></td>
                <td>Right to Left</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Assignment</td>
                <td><code>= += -= *= /= %= etc.</code></td>
                <td>Right to Left</td>
              </tr>
              <tr>
                <td>16 (Lowest)</td>
                <td>Comma</td>
                <td><code>,</code></td>
                <td>Left to Right</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <CodeBox
              title="Precedence Examples"
              language="cpp"
              executable={true}
              code={`#include <iostream>
using namespace std;

int main() {
    cout << "=== OPERATOR PRECEDENCE EXAMPLES ===" << endl;
    
    // Example 1: Arithmetic precedence
    int result1 = 2 + 3 * 4;      // Multiplication first
    int result2 = (2 + 3) * 4;    // Parentheses change order
    cout << "2 + 3 * 4 = " << result1 << endl;
    cout << "(2 + 3) * 4 = " << result2 << endl;
    
    // Example 2: Mixed operators
    int a = 5, b = 3, c = 2;
    bool result3 = a + b > c * 2;  // * first, then +, then >
    cout << "5 + 3 > 2 * 2 = " << boolalpha << result3 << endl;
    
    // Example 3: Logical operators
    bool x = true, y = false, z = true;
    bool result4 = x || y && z;    // && has higher precedence than ||
    bool result5 = (x || y) && z;  // Different with parentheses
    cout << "true || false && true = " << result4 << endl;
    cout << "(true || false) && true = " << result5 << endl;
    
    // Example 4: Assignment precedence
    int m = 5, n = 10;
    m += n *= 2;  // Right to left: n = n * 2 = 20, then m = m + n = 25
    cout << "After m += n *= 2: m = " << m << ", n = " << n << endl;
    
    // Example 5: Bitwise and shift
    int num = 1;
    int shift_result = num << 2 + 3;  // + has higher precedence than <<
    cout << "1 << 2 + 3 = " << shift_result << " (not 32!)" << endl;
    cout << "Correct: 1 << (2 + 3) = " << (1 << (2 + 3)) << endl;
    
    // Example 6: Complex expression
    int p = 10, q = 5, r = 2;
    int complex = p + q * r / 2 - r % 3;
    // Step by step:
    // 1. q * r = 5 * 2 = 10
    // 2. 10 / 2 = 5
    // 3. r % 3 = 2 % 3 = 2
    // 4. p + 5 - 2 = 10 + 5 - 2 = 13
    cout << "10 + 5 * 2 / 2 - 2 % 3 = " << complex << endl;
    
    // Example 7: Common mistake - assignment in condition
    int val = 0;
    if (val = 5) {  // = has lower precedence, so val gets 5
        cout << "This executes because val = 5 is true" << endl;
    }
    
    // Example 8: Using parentheses for clarity
    int expression1 = 3 + 4 * 5;        // 23
    int expression2 = (3 + 4) * 5;      // 35
    bool expression3 = a > b && b < c;  // Hard to read
    bool expression4 = (a > b) && (b < c);  // Clear
    
    cout << "\\n=== BEST PRACTICE ===" << endl;
    cout << "Always use parentheses for complex expressions!" << endl;
    cout << "Makes code clearer and prevents bugs." << endl;
    
    return 0;
}`}
            />
          </div>
          
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-warning text-dark">
                <h5>📝 Mnemonics & Best Practices</h5>
              </div>
              <div className="card-body">
                <h6>🎯 Easy-to-Remember Rules:</h6>
                <ul>
                  <li><b>PEMDAS:</b> Parentheses, Exponents, Multiply/Divide, Add/Subtract</li>
                  <li><b>My Dear Aunt Sally:</b> Multiply, Divide, Add, Subtract</li>
                  <li><b>BODMAS:</b> Brackets, Orders, Division, Multiplication, Addition, Subtraction</li>
                </ul>
                
                <h6>⚡ Common Precedence Pitfalls:</h6>
                <CodeBox
                  language="cpp"
                  code={`// ❌ DANGEROUS: Assignment vs comparison
if (x = y)     // Assigns y to x, checks if non-zero
if (x == y)    // Correct comparison

// ❌ CONFUSING: Bitwise vs logical
if (a & b == c)    // == has higher precedence than &
if ((a & b) == c)  // Correct

// ❌ UNEXPECTED: Arithmetic with relational
if (a & 0x0F == 0x08)  // == before &
if ((a & 0x0F) == 0x08) // Correct

// ❌ TRICKY: Shift with addition
int result = 1 << 2 + 3;    // 1 << (2+3) = 32
int expected = (1 << 2) + 3; // 4 + 3 = 7

// ❌ COMPLEX: Mixed operators
bool check = a < b == c > d;  // Very confusing
bool clear = (a < b) == (c > d);  // Better`}
                />
                
                <h6>✅ Best Practices:</h6>
                <CodeBox
                  language="cpp"
                  code={`// ✅ ALWAYS use parentheses for clarity
int result = (a * b) + (c / d);

// ✅ Break complex expressions
bool condition1 = (age >= 18);
bool condition2 = (hasID || hasPassport);
if (condition1 && condition2) {
    // ...
}

// ✅ Use intermediate variables
int temp = b * c;
int final = a + temp - d;

// ✅ Comment complex expressions
// Calculate weighted average: (test*0.4 + assignment*0.6)
float average = (testScore * 0.4f) + (assignmentScore * 0.6f);

// ✅ Avoid side effects in complex expressions
// ❌ Bad:
int x = (a++ * b) + (a * c);  // a incremented in middle
// ✅ Good:
int temp = a * b;
a++;
x = temp + (a * c);`}
                />
                
                <div className="alert alert-success mt-3">
                  <small>💡 <b>Golden Rule:</b> When in doubt, use parentheses! 
                  They make your intentions clear and prevent precedence bugs.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Practice Exercise */}
      <section className="mb-5">
        <h3 className="fw-bold text-primary">💻 Practice Exercise</h3>
        
        <div className="card">
          <div className="card-header bg-primary text-white">
            <h5>Operators Programming Challenge</h5>
          </div>
          <div className="card-body">
            <p><b>Exercise 1:</b> Predict the output of these expressions:</p>
            <ol>
              <li><code>5 + 3 * 2</code></li>
              <li><code>10 / 3</code> and <code>10.0 / 3</code></li>
              <li><code>7 % 3 + 2</code></li>
              <li><code>true && false || true</code></li>
              <li><code>5 & 3</code> (bitwise AND)</li>
              <li><code>8 &lt;&lt; 2</code> (left shift)</li>
            </ol>
            
            <p><b>Exercise 2:</b> Find and fix errors in this code:</p>
            <CodeBox
              language="cpp"
              code={`#include <iostream>
using namespace std;

int main() {
    int a = 5, b = 2;
    float result;
    
    // Problem 1: Integer division
    result = a / b;
    cout << "Division: " << result << endl;
    
    // Problem 2: Assignment vs comparison
    if (a = 10) {
        cout << "a is 10" << endl;
    }
    
    // Problem 3: Bitwise on floats
    float x = 5.5, y = 3.3;
    float bitwise = x & y;
    
    // Problem 4: Operator precedence
    int c = 10;
    int d = c++ * 2;
    cout << "c: " << c << ", d: " << d << endl;
    
    // Problem 5: Modulus with float
    float mod = 10.5 % 3.2;
    
    return 0;
}`}
            />
            
            <div className="mt-3">
              <button className="btn btn-info me-2" data-bs-toggle="collapse" data-bs-target="#solution">
                Show Solution
              </button>
              <button className="btn btn-outline-info" data-bs-toggle="collapse" data-bs-target="#hints">
                Show Hints
              </button>
            </div>
            
            <div className="collapse mt-3" id="hints">
              <div className="alert alert-info">
                <h6>💡 Hints:</h6>
                <ul className="mb-0">
                  <li>Exercise 1: Remember operator precedence and data types</li>
                  <li>Exercise 2: Check for integer division, assignment vs comparison, valid operations</li>
                  <li>Bitwise operators work only on integers</li>
                  <li>Modulus operator requires integer operands</li>
                  <li>Watch out for post-increment behavior</li>
                </ul>
              </div>
            </div>
            
            <div className="collapse mt-3" id="solution">
              <div className="alert alert-success">
                <h6>✅ Solutions:</h6>
                <p><b>Exercise 1 Answers:</b></p>
                <ol>
                  <li><code>5 + 3 * 2 = 5 + 6 = 11</code> (multiplication first)</li>
                  <li><code>10 / 3 = 3</code> (integer), <code>10.0 / 3 = 3.333...</code> (float)</li>
                  <li><code>7 % 3 + 2 = 1 + 2 = 3</code> (modulus first)</li>
                  <li><code>true && false || true = (true && false) || true = false || true = true</code></li>
                  <li><code>5 & 3 = 0101 & 0011 = 0001 = 1</code></li>
                  <li><code>8 &lt;&lt; 2 = 1000 &lt;&lt; 2 = 100000 = 32</code></li>
                </ol>
                
                <p><b>Exercise 2 Corrected Code:</b></p>
                <CodeBox
                  language="cpp"
                  code={`#include <iostream>
using namespace std;

int main() {
    int a = 5, b = 2;
    float result;
    
    // Fix 1: Cast to float for decimal division
    result = (float)a / b;  // or a / (float)b
    cout << "Division: " << result << endl;
    
    // Fix 2: Use == for comparison
    if (a == 10) {
        cout << "a is 10" << endl;
    }
    
    // Fix 3: Bitwise only works on integers
    int x_int = 5, y_int = 3;
    int bitwise = x_int & y_int;
    cout << "Bitwise AND: " << bitwise << endl;
    
    // Fix 4: Understand post-increment
    int c = 10;
    int d = c++ * 2;  // d = 10 * 2 = 20, then c becomes 11
    cout << "c: " << c << ", d: " << d << endl;
    
    // Fix 5: Modulus requires integers
    int mod_int = 10 % 3;
    cout << "10 % 3 = " << mod_int << endl;
    
    // Additional example with fmod for floats
    #include <cmath>
    float mod_float = fmod(10.5, 3.2);
    cout << "fmod(10.5, 3.2) = " << mod_float << endl;
    
    return 0;
}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="mb-5">
        <div className="alert alert-success">
          <h5 className="fw-bold">📌 Chapter Summary</h5>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li><b>Arithmetic Operators:</b> <code>+ - * / % ++ --</code> for calculations</li>
                <li><b>Relational Operators:</b> <code>{`== != > < >= <=`}</code> for comparisons</li>
                <li><b>Logical Operators:</b> <code>{`&& || !`}</code> for combining conditions</li>
                <li><b>Bitwise Operators:</b> <code>{`& | ^ ~ << >>`}</code> for binary operations</li>
                <li><b>Assignment Operators:</b> <code>{`= += -= *= /= %=`}</code> for assigning values</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li><b>Miscellaneous Operators:</b> Ternary, comma, sizeof, address, dereference</li>
                <li><b>Precedence:</b> Determines evaluation order (use parentheses!)</li>
                <li><b>Associativity:</b> Left-to-right or right-to-left for same precedence</li>
                <li><b>Type Safety:</b> Be careful with implicit conversions</li>
                <li><b>Best Practice:</b> Use parentheses for clarity and correctness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-5">
        <div className="card border-info">
          <div className="card-header bg-info text-white">
            <h5>🔑 Key Takeaways</h5>
          </div>
          <div className="card-body">
            <div className="row text-center">
              <div className="col-md-2 mb-3">
                <div className="p-3 border rounded bg-light">
                  <h6>Arithmetic</h6>
                  <code>+ - * / %</code>
                  <small className="d-block mt-1">Calculations</small>
                </div>
              </div>
              <div className="col-md-2 mb-3">
                <div className="p-3 border rounded bg-light">
                  <h6>Relational</h6>
                  <code>{`> < ==`}</code>
                  <small className="d-block mt-1">Comparisons</small>
                </div>
              </div>
              <div className="col-md-2 mb-3">
                <div className="p-3 border rounded bg-light">
                  <h6>Logical</h6>
                  <code>{`&& || !`}</code>
                  <small className="d-block mt-1">Conditions</small>
                </div>
              </div>
              <div className="col-md-2 mb-3">
                <div className="p-3 border rounded bg-light">
                  <h6>Bitwise</h6>
                  <code>{`& | ^`}</code>
                  <small className="d-block mt-1">Binary ops</small>
                </div>
              </div>
              <div className="col-md-2 mb-3">
                <div className="p-3 border rounded bg-light">
                  <h6>Assignment</h6>
                  <code>= +=</code>
                  <small className="d-block mt-1">Assign values</small>
                </div>
              </div>
              <div className="col-md-2 mb-3">
                <div className="p-3 border rounded bg-light">
                  <h6>Ternary</h6>
                  <code>?:</code>
                  <small className="d-block mt-1">Conditional</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="mb-5">
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h5>📋 Operator Quick Reference</h5>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th>Use Case</th>
                    <th>Operator</th>
                    <th>Example</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Add two numbers</td>
                    <td><code>+</code></td>
                    <td><code>5 + 3</code></td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>Check equality</td>
                    <td><code>==</code></td>
                    <td><code>5 == 5</code></td>
                    <td><code>true</code></td>
                  </tr>
                  <tr>
                    <td>Logical AND</td>
                    <td><code>&&</code></td>
                    <td><code>true && false</code></td>
                    <td><code>false</code></td>
                  </tr>
                  <tr>
                    <td>Bitwise AND</td>
                    <td><code>&</code></td>
                    <td><code>5 & 3</code></td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Add and assign</td>
                    <td><code>+=</code></td>
                    <td><code>x += 5</code></td>
                    <td><code>x = x + 5</code></td>
                  </tr>
                  <tr>
                    <td>Conditional</td>
                    <td><code>?:</code></td>
                    <td><code>{`(a>b)?a:b`}</code></td>
                    <td>Larger value</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}