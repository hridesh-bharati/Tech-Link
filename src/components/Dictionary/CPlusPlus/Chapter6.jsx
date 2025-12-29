// src/components/Dictionary/CPlusPlus/Chapter6.jsx
import React from "react";
import CodeBox from "../CodeBox/CodeBox";

export default function CppChapter6() {
  return (
    <div className="chapter-content container-fluid px-3 pb-5">
      {/* Header */}
      <div className="chapter-header mt-2 mb-4 text-center">
        <h1 className="h2 fw-bold">📘 Chapter 6: C++ Variables</h1>
        <p className="text-white">Understanding Variable Declaration, Initialization, and Usage in C++</p>
      </div>

      {/* Hero Card */}
      <div className="card shadow-lg mb-4" style={{ borderLeft: "5px solid #0dcaf0" }}>
        <div
          className="card-body text-white p-4"
          style={{ background: "linear-gradient(135deg,#0dcaf0,#0aa2c0)" }}
        >
          <h2 className="fw-bold">Variables in C++</h2>
          <p className="mb-0">
            Variables are <b>named storage locations</b> in computer memory that hold data values which can be manipulated during program execution. Think of them as labeled boxes that store information.
          </p>
        </div>
      </div>

      {/* Section 1: What is a Variable? */}
      <section className="mb-5">
        <h3 className="fw-bold text-primary">🎯 What is a Variable?</h3>
        <p>
          A <b>variable</b> is a symbolic name for a memory location where data is stored. It has:
        </p>
        <ul>
          <li><b>Name:</b> Identifier used to reference the variable</li>
          <li><b>Type:</b> Determines the kind of data it can store (int, float, char, etc.)</li>
          <li><b>Value:</b> The actual data stored in the variable</li>
          <li><b>Address:</b> Memory location where the value is stored</li>
        </ul>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>📊 Memory Representation</h5>
                <pre className="mb-0">
                  <code>{`
Memory Address: 0x7fff5a2b
Variable Name:  age
Data Type:     int
Value:         25
                  `}</code>
                </pre>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>🔄 Variable Characteristics</h5>
                <ul className="mb-0">
                  <li>Value can change during execution</li>
                  <li>Must be declared before use</li>
                  <li>Scope determines accessibility</li>
                  <li>Lifetime determines existence duration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Variable Declaration & Initialization */}
      <section className="mb-5">
        <h3 className="fw-bold text-success">🧾 Variable Declaration & Initialization</h3>
        
        <div className="row">
          <div className="col-md-6">
            <CodeBox
              title="Declaration Only"
              language="cpp"
              code={`// Declaration without initialization
int age;
float salary;
char grade;
double price;
bool isActive;`}
            />
            <div className="alert alert-warning mt-2">
              <small>⚠️ Uninitialized variables contain garbage values</small>
            </div>
          </div>
          
          <div className="col-md-6">
            <CodeBox
              title="Declaration with Initialization"
              language="cpp"
              code={`// Declaration with initialization
int age = 25;               // Integer
float salary = 45000.50;    // Floating point
char grade = 'A';          // Character
double price = 99.99;      // Double precision
bool isActive = true;      // Boolean
string name = "John";      // String`}
            />
          </div>
        </div>

        <div className="mt-4">
          <h5>📝 Multiple Variable Declaration</h5>
          <CodeBox
            title="Multiple Variables"
            language="cpp"
            code={`// Multiple variables of same type
int x = 5, y = 10, z = 15;

// Different initialization styles
int a = 10;     // Copy initialization
int b(20);      // Direct initialization (C++ style)
int c{30};      // Uniform initialization (C++11) - recommended`}
          />
        </div>
      </section>

      {/* Section 3: Complete Example Program */}
      <section className="mb-5">
        <h3 className="fw-bold text-warning">🚀 Complete Variable Demonstration</h3>

        <CodeBox
          title="Variable Usage Example"
          language="cpp"
          executable={true}
          code={`#include <iostream>
#include <string>  // For string type
using namespace std;

int main() {
    // Integer variables
    int age = 21;
    int birthYear = 2003;
    
    // Floating point variables
    float temperature = 36.6;
    double pi = 3.14159265359;
    
    // Character variables
    char grade = 'A';
    char initial = 'J';
    
    // Boolean variables
    bool isStudent = true;
    bool isEmployed = false;
    
    // String variables
    string name = "John Doe";
    string university = "MIT";
    
    // Displaying values
    cout << "=== Personal Information ===" << endl;
    cout << "Name: " << name << endl;
    cout << "Age: " << age << " years" << endl;
    cout << "Grade: " << grade << endl;
    cout << "Is Student: " << isStudent << endl;
    
    cout << "\\n=== Mathematical Values ===" << endl;
    cout << "Temperature: " << temperature << "°C" << endl;
    cout << "PI Value: " << pi << endl;
    
    // Variable reassignment
    cout << "\\n=== Variable Reassignment ===" << endl;
    age = 22;  // Changing variable value
    grade = 'A+';
    cout << "Next year age: " << age << endl;
    cout << "Improved grade: " << grade << endl;
    
    return 0;
}`}
        />
      </section>

      {/* Section 4: Naming Rules & Conventions */}
      <section className="mb-5">
        <h3 className="fw-bold text-danger">📌 Variable Naming Rules & Conventions</h3>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-danger text-white">
                <h5>✅ Valid Variable Names</h5>
              </div>
              <div className="card-body">
                <ul className="mb-0">
                  <li><code>age</code></li>
                  <li><code>_count</code></li>
                  <li><code>studentName</code></li>
                  <li><code>MAX_SIZE</code></li>
                  <li><code>is_valid</code></li>
                  <li><code>totalAmount</code></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-danger text-white">
                <h5>❌ Invalid Variable Names</h5>
              </div>
              <div className="card-body">
                <ul className="mb-0">
                  <li><code>123abc</code> (starts with number)</li>
                  <li><code>my-variable</code> (contains hyphen)</li>
                  <li><code>float</code> (reserved keyword)</li>
                  <li><code>student name</code> (contains space)</li>
                  <li><code>@email</code> (special character at start)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <h5>🏷️ Naming Conventions (Best Practices)</h5>
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Convention</th>
                <th>Example</th>
                <th>Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Camel Case</td>
                <td><code>studentName, totalMarks</code></td>
                <td>Variables, functions</td>
              </tr>
              <tr>
                <td>Snake Case</td>
                <td><code>student_name, total_marks</code></td>
                <td>Variables, functions</td>
              </tr>
              <tr>
                <td>Pascal Case</td>
                <td><code>StudentName, TotalMarks</code></td>
                <td>Classes, types</td>
              </tr>
              <tr>
                <td>UPPER_CASE</td>
                <td><code>MAX_SIZE, PI</code></td>
                <td>Constants</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Data Types Overview */}
      <section className="mb-5">
        <h3 className="fw-bold text-info">📊 Fundamental Data Types</h3>
        
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Data Type</th>
                <th>Size (Bytes)</th>
                <th>Range</th>
                <th>Example</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>int</code></td>
                <td>4</td>
                <td>-2,147,483,648 to 2,147,483,647</td>
                <td><code>int age = 25;</code></td>
                <td>Integer numbers</td>
              </tr>
              <tr>
                <td><code>float</code></td>
                <td>4</td>
                <td>±3.4e-38 to ±3.4e38</td>
                <td><code>float pi = 3.14f;</code></td>
                <td>Single precision floating point</td>
              </tr>
              <tr>
                <td><code>double</code></td>
                <td>8</td>
                <td>±1.7e-308 to ±1.7e308</td>
                <td><code>double price = 99.99;</code></td>
                <td>Double precision floating point</td>
              </tr>
              <tr>
                <td><code>char</code></td>
                <td>1</td>
                <td>-128 to 127 or 0 to 255</td>
                <td><code>char grade = 'A';</code></td>
                <td>Single character</td>
              </tr>
              <tr>
                <td><code>bool</code></td>
                <td>1</td>
                <td>true or false</td>
                <td><code>bool isActive = true;</code></td>
                <td>Boolean (true/false)</td>
              </tr>
              <tr>
                <td><code>void</code></td>
                <td>0</td>
                <td>N/A</td>
                <td><code>void function();</code></td>
                <td>No type</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 6: Type Modifiers */}
      <section className="mb-5">
        <h3 className="fw-bold text-success">🔧 Type Modifiers</h3>
        <p>Modifiers alter the meaning of basic data types:</p>
        
        <CodeBox
          title="Type Modifiers Examples"
          language="cpp"
          code={`#include <iostream>
using namespace std;

int main() {
    // Signed (default - can be positive or negative)
    signed int temperature = -10;
    
    // Unsigned (only positive values)
    unsigned int age = 25;        // Only positive ages
    
    // Short (reduced range, less memory)
    short int smallNumber = 100;
    
    // Long (extended range)
    long int bigNumber = 1000000;
    
    // Long long (very large integers)
    long long int hugeNumber = 10000000000LL;
    
    // Const (constant - cannot be changed)
    const float PI = 3.14159f;
    // PI = 3.14;  // ERROR: Cannot modify const variable
    
    cout << "Short: " << smallNumber << endl;
    cout << "Long: " << bigNumber << endl;
    cout << "Const PI: " << PI << endl;
    
    return 0;
}`}
        />
      </section>

      {/* Section 7: Variable Scope & Lifetime */}
      <section className="mb-5">
        <h3 className="fw-bold text-primary">🎭 Variable Scope & Lifetime</h3>
        
        <div className="row">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-header bg-primary text-white">
                <h5>Local Variables</h5>
              </div>
              <div className="card-body">
                <p>Declared inside a function or block</p>
                <CodeBox
                  language="cpp"
                  code={`void function() {
    int localVar = 10;  // Local variable
    // Only accessible here
}`}
                />
                <ul className="mb-0">
                  <li>Scope: Within the block</li>
                  <li>Lifetime: Block execution</li>
                  <li>Stored in: Stack</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-header bg-primary text-white">
                <h5>Global Variables</h5>
              </div>
              <div className="card-body">
                <p>Declared outside all functions</p>
                <CodeBox
                  language="cpp"
                  code={`int globalVar = 100;  // Global

int main() {
    // Accessible here
    return 0;
}`}
                />
                <ul className="mb-0">
                  <li>Scope: Entire program</li>
                  <li>Lifetime: Program execution</li>
                  <li>Stored in: Data segment</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-header bg-primary text-white">
                <h5>Static Variables</h5>
              </div>
              <div className="card-body">
                <p>Preserves value between calls</p>
                <CodeBox
                  language="cpp"
                  code={`void counter() {
    static int count = 0;
    count++;
    cout << count;
}`}
                />
                <ul className="mb-0">
                  <li>Scope: Within function</li>
                  <li>Lifetime: Program execution</li>
                  <li>Stored in: Data segment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Common Errors & Debugging */}
      <section className="mb-5">
        <h3 className="fw-bold text-danger">🐛 Common Errors & Solutions</h3>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card border-danger">
              <div className="card-header bg-danger text-white">
                <h5>❌ Error Examples</h5>
              </div>
              <div className="card-body">
                <CodeBox
                  language="cpp"
                  code={`// ERROR 1: Using uninitialized variable
int x;
cout << x;  // Garbage value

// ERROR 2: Type mismatch
int age = "twenty";  // Can't assign string to int

// ERROR 3: Out of scope
{
    int y = 10;
}
cout << y;  // y doesn't exist here

// ERROR 4: Redefinition
int z = 5;
int z = 10;  // Can't redefine`}
                />
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card border-success">
              <div className="card-header bg-success text-white">
                <h5>✅ Corrected Code</h5>
              </div>
              <div className="card-body">
                <CodeBox
                  language="cpp"
                  code={`// SOLUTION 1: Always initialize
int x = 0;
cout << x;  // Predictable: 0

// SOLUTION 2: Match types
int age = 20;  // or string age = "twenty";

// SOLUTION 3: Proper scope
int y;
{
    y = 10;
}
cout << y;  // Now accessible

// SOLUTION 4: Different names or reassign
int z = 5;
z = 10;  // Reassignment, not redefinition`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Best Practices */}
      <section className="mb-5">
        <h3 className="fw-bold text-success">⭐ Best Practices</h3>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>✅ DOs</h5>
                <ul>
                  <li>Use meaningful, descriptive names</li>
                  <li>Initialize variables when declaring</li>
                  <li>Use appropriate data types</li>
                  <li>Follow consistent naming conventions</li>
                  <li>Use <code>const</code> for values that don't change</li>
                  <li>Keep scope as narrow as possible</li>
                  <li>Declare variables close to their first use</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>❌ DON'Ts</h5>
                <ul>
                  <li>Don't use single letters (except loop counters)</li>
                  <li>Don't use ambiguous names like <code>data1, temp</code></li>
                  <li>Don't declare all variables at top unnecessarily</li>
                  <li>Don't use global variables excessively</li>
                  <li>Don't use reserved keywords</li>
                  <li>Don't ignore compiler warnings</li>
                  <li>Don't mix naming conventions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Interactive Exercise */}
      <section className="mb-5">
        <h3 className="fw-bold text-warning">💻 Practice Exercise</h3>
        
        <div className="card">
          <div className="card-header bg-warning text-dark">
            <h5>Fix the Variable Errors</h5>
          </div>
          <div className="card-body">
            <p>Identify and fix all variable-related errors in this code:</p>
            
            <CodeBox
              title="Buggy Code - Find 5 Errors"
              language="cpp"
              code={`#include <iostream>
using namespace std;

int Global = 100;

int main() {
    int 1stNumber = 10;
    float second number = 20.5;
    char grade = "A";
    int sum;
    
    sum = 1stNumber + second number;
    
    cout << Grade << endl;
    cout << "Sum = " << sum << endl;
    
    int double = 5.5;
    cout << global;
    
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
                  <li>Check variable naming rules</li>
                  <li>Look for type mismatches</li>
                  <li>Check case sensitivity</li>
                  <li>Look for reserved keywords</li>
                  <li>Check for uninitialized variables</li>
                </ul>
              </div>
            </div>
            
            <div className="collapse mt-3" id="solution">
              <div className="alert alert-success">
                <h6>✅ Corrected Code:</h6>
                <CodeBox
                  language="cpp"
                  code={`#include <iostream>
using namespace std;

int globalVar = 100;  // Fixed: lowercase, meaningful name

int main() {
    int firstNumber = 10;      // Fixed: cannot start with number
    float secondNumber = 20.5f; // Fixed: no space, 'f' for float
    char grade = 'A';          // Fixed: use single quotes for char
    int sum = 0;               // Fixed: initialize
    
    sum = firstNumber + (int)secondNumber;  // Fixed: proper names, type cast
    
    cout << grade << endl;     // Fixed: case sensitive
    cout << "Sum = " << sum << endl;
    
    double value = 5.5;        // Fixed: 'double' is keyword
    cout << globalVar;         // Fixed: case sensitive
    
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
                <li><b>Variables</b> are named memory locations storing data</li>
                <li>Must be <b>declared</b> with type before use</li>
                <li>Should be <b>initialized</b> to avoid garbage values</li>
                <li>Follow <b>naming rules</b>: letters, digits, underscore</li>
                <li>Case-sensitive: <code>Age</code> ≠ <code>age</code></li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li><b>Scope</b> determines where variable is accessible</li>
                <li><b>Lifetime</b> determines how long variable exists</li>
                <li>Choose appropriate <b>data types</b> for efficiency</li>
                <li>Use <b>const</b> for values that shouldn't change</li>
                <li>Follow <b>best practices</b> for maintainable code</li>
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
              <div className="col-md-3 mb-3">
                <div className="p-3 border rounded bg-light">
                  <h6>Declaration</h6>
                  <code>int age;</code>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="p-3 border rounded bg-light">
                  <h6>Initialization</h6>
                  <code>age = 25;</code>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="p-3 border rounded bg-light">
                  <h6>Reassignment</h6>
                  <code>age = 26;</code>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="p-3 border rounded bg-light">
                  <h6>Constants</h6>
                  <code>const int MAX = 100;</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Button */}
      <div className="text-center">
        <a href="#" className="btn btn-lg btn-info px-5 text-white">
          Next Chapter: C++ Data Types & Type Conversion <i className="bi bi-arrow-right ms-2"></i>
        </a>
      </div>
    </div>
  );
}