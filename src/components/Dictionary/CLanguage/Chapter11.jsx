// src/components/Dictionary/CLanguage/Chapter11.jsx
import React from "react";
import CodeBox from "../CodeBox/CodeBox";

export default function Chapter11() {
  return (
    <div className="chapter-content">
      {/* Header */}
      <div className="chapter-header mb-4">
        <h1 className="h2 fw-bold text-primary">C BOOLEANS</h1>
        <p className="text-muted">
          Boolean values are used to represent true or false conditions in C.
        </p>
      </div>

      <div className="content-section">

        {/* ================= WHAT ARE BOOLEANS ================= */}
        <div className="section-block mb-5">
          <h2 className="h3 fw-bold mb-3">1. What are Booleans?</h2>

          <div className="alert alert-light">
            <p className="mb-0">
              <strong>Definition:</strong> A Boolean is a data type that can store only two values:
              <code> true (1)</code> or <code>false (0)</code>.
            </p>
          </div>

          <p className="mb-3">
            In C programming, booleans are used in:
            <br/>
            • <strong>Conditions</strong> (if-else statements)
            <br/>
            • <strong>Loops</strong> (while, for)
            <br/>
            • <strong>Decision making</strong>
            <br/>
            • <strong>Validation</strong> checks
            <br/>
            • <strong>Logical expressions</strong>
          </p>

          <div className="alert alert-info">
            <strong>Note:</strong> Old C versions did not have a built-in boolean type.  
            Modern C provides booleans using <code>&lt;stdbool.h&gt;</code>.
          </div>
        </div>

        {/* ================= MODERN BOOLEAN ================= */}
        <div className="section-block mb-5">
          <h2 className="h3 fw-bold mb-3 text-success">
            2. Using stdbool.h (Modern C)
          </h2>

          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <div className="border rounded p-3">
                <h6 className="fw-bold">🔑 Key Points:</h6>
                <ul className="mb-0 small">
                  <li><code>#include &lt;stdbool.h&gt;</code></li>
                  <li><code>bool</code> type for variables</li>
                  <li><code>true</code> and <code>false</code> keywords</li>
                  <li>Better code readability</li>
                  <li>C99 standard and later</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="border rounded p-3">
                <h6 className="fw-bold">💡 Usage:</h6>
                <ul className="mb-0 small">
                  <li>Function return types</li>
                  <li>Condition variables</li>
                  <li>Flag variables</li>
                  <li>Status indicators</li>
                </ul>
              </div>
            </div>
          </div>

          <CodeBox
            title="Modern Boolean Example"
            language="c"
            executable={true}
            useRealCompiler={false}
            code={`#include <stdio.h>
#include <stdbool.h>

// Function returning boolean
bool is_even(int number) {
    return number % 2 == 0;
}

int main() {
    // Boolean variables
    bool is_sunny = true;
    bool is_raining = false;
    
    printf("Sunny: %d\\n", is_sunny);
    printf("Raining: %d\\n", is_raining);
    
    // Boolean expression
    int temp = 25;
    bool is_warm = temp > 20;
    printf("Is warm? %d\\n", is_warm);
    
    // Using in condition
    if(is_sunny && !is_raining) {
        printf("Good weather for picnic!\\n");
    }
    
    // Function call
    printf("Is 10 even? %d\\n", is_even(10));
    printf("Is 7 even? %d\\n", is_even(7));
    
    return 0;
}`}
          />
        </div>

        {/* ================= TRADITIONAL BOOLEAN ================= */}
        <div className="section-block mb-5">
          <h2 className="h3 fw-bold mb-3 text-warning">
            3. Traditional Boolean (Without stdbool.h)
          </h2>

          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <div className="border rounded p-3">
                <h6 className="fw-bold">🔧 Method 1: Integers</h6>
                <ul className="mb-0 small">
                  <li><code>0</code> = false</li>
                  <li>Non-zero = true (usually 1)</li>
                  <li>Compatible with all C versions</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="border rounded p-3">
                <h6 className="fw-bold">📝 Method 2: #define</h6>
                <ul className="mb-0 small">
                  <li>Define TRUE and FALSE</li>
                  <li>Create bool type using typedef</li>
                  <li>Better than just using integers</li>
                </ul>
              </div>
            </div>
          </div>

          <CodeBox
            title="Traditional Boolean Methods"
            language="c"
            executable={true}
            useRealCompiler={false}
            code={`#include <stdio.h>

// Method 1: Using integers
int check_age(int age) {
    return age >= 18;  // Returns 1 or 0
}

// Method 2: Using #define
#define TRUE 1
#define FALSE 0
typedef int bool;

int main() {
    // Method 1
    int age = 20;
    int can_vote = check_age(age);
    printf("Age %d, Can vote? %d\\n", age, can_vote);
    
    // Method 2
    bool logged_in = TRUE;
    bool has_access = FALSE;
    
    printf("Logged in: %d\\n", logged_in);
    printf("Has access: %d\\n", has_access);
    
    if(logged_in && !has_access) {
        printf("Need permission\\n");
    }
    
    return 0;
}`}
          />
        </div>

        {/* ================= BOOLEAN OPERATORS ================= */}
        <div className="section-block mb-5">
          <h2 className="h3 fw-bold mb-3 text-primary">
            4. Boolean Operators & Truth Table
          </h2>

          <div className="table-responsive mb-4">
            <table className="table table-bordered text-center">
              <thead className="table-light">
                <tr>
                  <th>A</th>
                  <th>B</th>
                  <th>A && B (AND)</th>
                  <th>A || B (OR)</th>
                  <th>!A (NOT)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td></tr>
                <tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr>
                <tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td></tr>
                <tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td></tr>
              </tbody>
            </table>
          </div>

          <CodeBox
            title="Boolean Operations Program"
            language="c"
            executable={true}
            useRealCompiler={false}
            code={`#include <stdio.h>
#include <stdbool.h>

int main() {
    printf("=== Boolean Operations ===\\n\\n");
    
    printf("AND Operations:\\n");
    printf("true && true = %d\\n", true && true);
    printf("true && false = %d\\n", true && false);
    printf("false && true = %d\\n", false && true);
    printf("false && false = %d\\n\\n", false && false);
    
    printf("OR Operations:\\n");
    printf("true || true = %d\\n", true || true);
    printf("true || false = %d\\n", true || false);
    printf("false || true = %d\\n", false || true);
    printf("false || false = %d\\n\\n", false || false);
    
    printf("NOT Operations:\\n");
    printf("!true = %d\\n", !true);
    printf("!false = %d\\n", !false);
    
    return 0;
}`}
          />
        </div>

        {/* ================= PRACTICAL USE ================= */}
        <div className="section-block mb-5">
          <h2 className="h3 fw-bold mb-3 text-danger">
            5. Practical Boolean Examples
          </h2>

          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="fw-bold">🔐 Login System</h6>
                  <CodeBox
                    language="c"
                    executable={true}
                    useRealCompiler={false}
                    height="200px"
                    code={`#include <stdio.h>
#include <stdbool.h>

bool login(char user[], char pass[]) {
    return (user[0] != '\\0') && (pass[0] != '\\0');
}

int main() {
    bool logged_in = login("admin", "1234");
    printf("Login success: %d\\n", logged_in);
    return 0;
}`}
                  />
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="fw-bold">🎫 Age Verification</h6>
                  <CodeBox
                    language="c"
                    executable={true}
                    useRealCompiler={false}
                    height="200px"
                    code={`#include <stdio.h>
#include <stdbool.h>

bool can_drive(int age, bool has_license) {
    return age >= 18 && has_license;
}

int main() {
    bool can = can_drive(20, true);
    printf("Can drive? %d\\n", can);
    return 0;
}`}
                  />
                </div>
              </div>
            </div>
          </div>

          <CodeBox
            title="Complete Validation System"
            language="c"
            executable={true}
            useRealCompiler={false}
            code={`#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool validate_email(char email[]) {
    return strchr(email, '@') != NULL;
}

bool validate_age(int age) {
    return age >= 13 && age <= 100;
}

bool validate_form(char name[], char email[], int age) {
    bool name_ok = strlen(name) > 0;
    bool email_ok = validate_email(email);
    bool age_ok = validate_age(age);
    
    return name_ok && email_ok && age_ok;
}

int main() {
    char name[] = "John";
    char email[] = "john@example.com";
    int age = 25;
    
    bool form_valid = validate_form(name, email, age);
    
    if(form_valid) {
        printf("✅ Form is valid\\n");
    } else {
        printf("❌ Form has errors\\n");
    }
    
    return 0;
}`}
          />
        </div>

        {/* ================= PRACTICE EXERCISE ================= */}
        <div className="section-block">
          <h2 className="h3 fw-bold mb-3 text-success">
            6. Practice Exercise
          </h2>
          
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">📝 Student Eligibility Checker</h5>
              <p>Check if a student is eligible for scholarship.</p>
              
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <div className="border rounded p-3">
                    <h6 className="fw-bold">Requirements:</h6>
                    <ul className="mb-0 small">
                      <li>Age ≥ 18</li>
                      <li>Marks ≥ 75%</li>
                      <li>Attendance ≥ 80%</li>
                      <li>No disciplinary issues</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="border rounded p-3">
                    <h6 className="fw-bold">Test Data:</h6>
                    <ul className="mb-0 small">
                      <li>Age: 19</li>
                      <li>Marks: 82%</li>
                      <li>Attendance: 85%</li>
                      <li>Issues: No</li>
                    </ul>
                  </div>
                </div>
              </div>

              <CodeBox
                title="Complete the Program"
                language="c"
                executable={true}
                useRealCompiler={false}
                code={`#include <stdio.h>
#include <stdbool.h>

// TODO: Create function
// bool check_eligibility(int age, int marks, 
//                        int attendance, bool has_issues)

int main() {
    int age = 19;
    int marks = 82;
    int attendance = 85;
    bool has_issues = false;
    
    // TODO: Call function
    // TODO: Display "Eligible" or "Not eligible"
    
    return 0;
}`}
              />
              
              <button 
                className="btn btn-sm btn-success mt-3"
                onClick={() => {
                  const solution = `#include <stdio.h>
#include <stdbool.h>

bool check_eligibility(int age, int marks, 
                       int attendance, bool has_issues) {
    bool age_ok = age >= 18;
    bool marks_ok = marks >= 75;
    bool attendance_ok = attendance >= 80;
    bool no_issues = !has_issues;
    
    return age_ok && marks_ok && attendance_ok && no_issues;
}

int main() {
    int age = 19;
    int marks = 82;
    int attendance = 85;
    bool has_issues = false;
    
    bool eligible = check_eligibility(age, marks, 
                                      attendance, has_issues);
    
    if(eligible) {
        printf("✅ Eligible for scholarship!\\n");
    } else {
        printf("❌ Not eligible\\n");
    }
    
    return 0;
}`;
                  alert("Solution:\n\n" + solution);
                }}
              >
                Show Solution
              </button>
            </div>
          </div>

          <div className="alert alert-success mt-4">
            <strong>🎓 Summary:</strong><br/>
            • Boolean values represent <code>true</code> (1) or <code>false</code> (0)<br/>
            • Used in conditions, loops, validation & logic<br/>
            • Modern C uses <code>stdbool.h</code> for better readability<br/>
            • Boolean logic is essential for decision-making in programs
          </div>
        </div>

      </div>
    </div>
  );
}