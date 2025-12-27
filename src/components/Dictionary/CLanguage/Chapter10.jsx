// src/components/Dictionary/CLanguage/Chapter10.jsx
import React from 'react';
import CodeBox from '../CodeBox/CodeBox';

export default function Chapter10() {
  return (
    <div className="chapter-content">
      <div className="chapter-header mb-4">
        <h1 className="h2 fw-bold text-primary">C OPERATORS</h1>
        <p className="text-muted">Symbols that perform operations on values</p>
      </div>

      <div className="content-section">

        {/* Section 1: Arithmetic Operators */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold text-primary">1. Arithmetic Operators</h2>
          
          <div className="alert alert-light mb-3">
            <p className="mb-0">
              Perform mathematical operations like addition, subtraction, multiplication, etc.
            </p>
          </div>

          <div className="table-responsive mb-4">
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Operator</th>
                  <th>Name</th>
                  <th>Example</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>+</code></td>
                  <td>Addition</td>
                  <td><code>5 + 3</code></td>
                  <td><code>8</code></td>
                </tr>
                <tr>
                  <td><code>-</code></td>
                  <td>Subtraction</td>
                  <td><code>5 - 3</code></td>
                  <td><code>2</code></td>
                </tr>
                <tr>
                  <td><code>*</code></td>
                  <td>Multiplication</td>
                  <td><code>5 * 3</code></td>
                  <td><code>15</code></td>
                </tr>
                <tr>
                  <td><code>/</code></td>
                  <td>Division</td>
                  <td><code>5 / 2</code></td>
                  <td><code>2</code> (int)</td>
                </tr>
                <tr>
                  <td><code>%</code></td>
                  <td>Modulus</td>
                  <td><code>5 % 2</code></td>
                  <td><code>1</code></td>
                </tr>
                <tr>
                  <td><code>++</code></td>
                  <td>Increment</td>
                  <td><code>x++</code></td>
                  <td><code>x = x + 1</code></td>
                </tr>
                <tr>
                  <td><code>--</code></td>
                  <td>Decrement</td>
                  <td><code>x--</code></td>
                  <td><code>x = x - 1</code></td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBox
            code={`#include <stdio.h>

int main() {
    int a = 10, b = 3;
    
    printf("Addition: %d + %d = %d\\n", a, b, a + b);
    printf("Subtraction: %d - %d = %d\\n", a, b, a - b);
    printf("Multiplication: %d * %d = %d\\n", a, b, a * b);
    printf("Division: %d / %d = %d\\n", a, b, a / b);
    printf("Modulus: %d %% %d = %d\\n\\n", a, b, a % b);
    
    // Float division
    printf("Float division: %d / %d = %.2f\\n\\n", a, b, (float)a / b);
    
    // Increment/Decrement
    int x = 5;
    printf("x = %d\\n", x);
    printf("x++ = %d\\n", x++);  // Use then increment
    printf("++x = %d\\n", ++x);  // Increment then use
    
    return 0;
}`}
            language="c"
            executable={true}
            useRealCompiler={false}
            title="Try Arithmetic Operators"
          />
        </div>

        {/* Section 2: Relational Operators */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold text-success">2. Relational Operators</h2>
          
          <div className="alert alert-light mb-3">
            <p className="mb-0">
              Compare values and return true (1) or false (0).
            </p>
          </div>

          <div className="table-responsive mb-4">
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Operator</th>
                  <th>Name</th>
                  <th>Example</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>==</code></td>
                  <td>Equal to</td>
                  <td><code>5 == 3</code></td>
                  <td><code>0</code> (false)</td>
                </tr>
                <tr>
                  <td><code>!=</code></td>
                  <td>Not equal</td>
                  <td><code>5 != 3</code></td>
                  <td><code>1</code> (true)</td>
                </tr>
                <tr>
                  <td><code>&gt;</code></td>
                  <td>Greater than</td>
                  <td><code>5 &gt; 3</code></td>
                  <td><code>1</code> (true)</td>
                </tr>
                <tr>
                  <td><code>&lt;</code></td>
                  <td>Less than</td>
                  <td><code>5 &lt; 3</code></td>
                  <td><code>0</code> (false)</td>
                </tr>
                <tr>
                  <td><code>&gt;=</code></td>
                  <td>Greater or equal</td>
                  <td><code>5 &gt;= 5</code></td>
                  <td><code>1</code> (true)</td>
                </tr>
                <tr>
                  <td><code>&lt;=</code></td>
                  <td>Less or equal</td>
                  <td><code>5 &lt;= 3</code></td>
                  <td><code>0</code> (false)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBox
            code={`#include <stdio.h>

int main() {
    int a = 10, b = 20;
    
    printf("%d == %d : %d\\n", a, b, a == b);
    printf("%d != %d : %d\\n", a, b, a != b);
    printf("%d > %d : %d\\n", a, b, a > b);
    printf("%d < %d : %d\\n", a, b, a < b);
    printf("%d >= %d : %d\\n", a, b, a >= b);
    printf("%d <= %d : %d\\n\\n", a, b, a <= b);
    
    // Practical example
    int age = 18;
    int voting_age = 18;
    
    if(age >= voting_age) {
        printf("You can vote!\\n");
    } else {
        printf("Cannot vote yet.\\n");
    }
    
    return 0;
}`}
            language="c"
            executable={true}
            useRealCompiler={false}
            title="Try Relational Operators"
          />
        </div>

        {/* Section 3: Logical Operators */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold text-warning">3. Logical Operators</h2>
          
          <div className="alert alert-light mb-3">
            <p className="mb-0">
              Combine multiple conditions. Return true (1) or false (0).
            </p>
          </div>

          <div className="table-responsive mb-4">
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Operator</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>&&</code></td>
                  <td>Logical AND</td>
                  <td>Both must be true</td>
                  <td><code>(a &gt; b) && (c &gt; d)</code></td>
                </tr>
                <tr>
                  <td><code>||</code></td>
                  <td>Logical OR</td>
                  <td>At least one true</td>
                  <td><code>(a &gt; b) || (c &gt; d)</code></td>
                </tr>
                <tr>
                  <td><code>!</code></td>
                  <td>Logical NOT</td>
                  <td>Reverse the result</td>
                  <td><code>!(a &gt; b)</code></td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBox
            code={`#include <stdio.h>

int main() {
    int age = 25;
    int has_license = 1;  // 1 = true
    
    // AND: Both must be true
    if(age >= 18 && has_license) {
        printf("You can drive.\\n");
    }
    
    // OR: At least one true
    int day = 6;  // Saturday
    if(day == 6 || day == 0) {
        printf("It's weekend!\\n");
    }
    
    // NOT: Reverse the condition
    int is_raining = 0;
    if(!is_raining) {
        printf("Good weather.\\n");
    }
    
    // Truth table
    printf("\\nAND Truth Table:\\n");
    printf("0 && 0 = %d\\n", 0 && 0);
    printf("1 && 0 = %d\\n", 1 && 0);
    printf("1 && 1 = %d\\n\\n", 1 && 1);
    
    printf("OR Truth Table:\\n");
    printf("0 || 0 = %d\\n", 0 || 0);
    printf("1 || 0 = %d\\n", 1 || 0);
    printf("1 || 1 = %d\\n", 1 || 1);
    
    return 0;
}`}
            language="c"
            executable={true}
            useRealCompiler={false}
            title="Try Logical Operators"
          />
        </div>

        {/* Section 4: Assignment Operators */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold text-info">4. Assignment Operators</h2>
          
          <div className="alert alert-light mb-3">
            <p className="mb-0">
              Assign values to variables with optional operations.
            </p>
          </div>

          <div className="table-responsive mb-4">
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Operator</th>
                  <th>Example</th>
                  <th>Same as</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>=</code></td>
                  <td><code>x = 5</code></td>
                  <td><code>x = 5</code></td>
                </tr>
                <tr>
                  <td><code>+=</code></td>
                  <td><code>x += 3</code></td>
                  <td><code>x = x + 3</code></td>
                </tr>
                <tr>
                  <td><code>-=</code></td>
                  <td><code>x -= 2</code></td>
                  <td><code>x = x - 2</code></td>
                </tr>
                <tr>
                  <td><code>*=</code></td>
                  <td><code>x *= 4</code></td>
                  <td><code>x = x * 4</code></td>
                </tr>
                <tr>
                  <td><code>/=</code></td>
                  <td><code>x /= 2</code></td>
                  <td><code>x = x / 2</code></td>
                </tr>
                <tr>
                  <td><code>%=</code></td>
                  <td><code>x %= 3</code></td>
                  <td><code>x = x % 3</code></td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBox
            code={`#include <stdio.h>

int main() {
    int x = 10;
    
    printf("Initial x = %d\\n", x);
    
    x += 5;  // x = x + 5
    printf("After x += 5: %d\\n", x);
    
    x -= 3;  // x = x - 3
    printf("After x -= 3: %d\\n", x);
    
    x *= 2;  // x = x * 2
    printf("After x *= 2: %d\\n", x);
    
    x /= 4;  // x = x / 4
    printf("After x /= 4: %d\\n", x);
    
    x %= 3;  // x = x % 3
    printf("After x %%= 3: %d\\n", x);
    
    return 0;
}`}
            language="c"
            executable={true}
            useRealCompiler={false}
            title="Try Assignment Operators"
          />
        </div>

        {/* Section 5: Other Operators */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold text-danger">5. Other Important Operators</h2>
          
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h5>Bitwise Operators</h5>
                  <p className="small">Work on binary level (bits).</p>
                  
                  <table className="table table-sm mb-3">
                    <tbody>
                      <tr>
                        <td><code>&</code></td>
                        <td>AND</td>
                        <td><code>5 & 3 = 1</code></td>
                      </tr>
                      <tr>
                        <td><code>|</code></td>
                        <td>OR</td>
                        <td><code>5 | 3 = 7</code></td>
                      </tr>
                      <tr>
                        <td><code>^</code></td>
                        <td>XOR</td>
                        <td><code>5 ^ 3 = 6</code></td>
                      </tr>
                      <tr>
                        <td><code>~</code></td>
                        <td>NOT</td>
                        <td><code>~5</code></td>
                      </tr>
                    </tbody>
                  </table>
                  
                  <CodeBox
                    code={`unsigned int a = 5;  // 0101
unsigned int b = 3;  // 0011

printf("a & b = %u\\n", a & b);  // 0001 = 1
printf("a | b = %u\\n", a | b);  // 0111 = 7
printf("a ^ b = %u\\n", a ^ b);  // 0110 = 6`}
                    language="c"
                    showCopy={true}
                    height="120px"
                  />
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h5>Ternary Operator</h5>
                  <p className="small">Short if-else statement.</p>
                  
                  <div className="mb-3">
                    <code>condition ? value1 : value2</code>
                    <p className="small mb-0">
                      If condition is true → value1<br/>
                      If condition is false → value2
                    </p>
                  </div>
                  
                  <CodeBox
                    code={`int age = 18;
char* status = (age >= 18) ? "Adult" : "Minor";
printf("Status: %s\\n", status);

// Equivalent to:
if(age >= 18) {
    status = "Adult";
} else {
    status = "Minor";
}`}
                    language="c"
                    showCopy={true}
                    height="120px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: Practice Exercise */}
        <div className="section-block">
          <h2 className="h3 mb-3 fw-bold text-primary">6. Practice Exercise</h2>
          
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">📝 Simple Calculator</h5>
              <p>Create a program that performs all basic operations on two numbers.</p>
              
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <div className="border rounded p-3">
                    <h6>Task:</h6>
                    <ul className="mb-0 small">
                      <li>Take two numbers as input</li>
                      <li>Perform all arithmetic operations</li>
                      <li>Compare using relational operators</li>
                      <li>Use logical operators for conditions</li>
                      <li>Display all results</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="border rounded p-3">
                    <h6>Example:</h6>
                    <pre className="mb-0 small">
{`Numbers: 10 and 3
Sum: 13
Difference: 7
Product: 30
10 > 3: true
10 is even AND > 5: true`}
                    </pre>
                  </div>
                </div>
              </div>

              <CodeBox
                code={`#include <stdio.h>

int main() {
    int num1 = 10, num2 = 3;
    
    // TODO: Arithmetic operations
    // Addition, subtraction, multiplication, division, modulus
    
    // TODO: Relational comparisons
    // ==, !=, >, <, >=, <=
    
    // TODO: Logical operations
    // Check if both are positive
    // Check if num1 is even AND > 5
    
    // TODO: Assignment operations
    // Use +=, -=, etc.
    
    return 0;
}`}
                language="c"
                executable={true}
                useRealCompiler={false}
                title="Complete the Calculator"
              />
              
              <button 
                className="btn btn-sm btn-success mt-3"
                onClick={() => {
                  const solution = `#include <stdio.h>

int main() {
    int num1 = 10, num2 = 3;
    
    // Arithmetic operations
    printf("Arithmetic:\\n");
    printf("%d + %d = %d\\n", num1, num2, num1 + num2);
    printf("%d - %d = %d\\n", num1, num2, num1 - num2);
    printf("%d * %d = %d\\n", num1, num2, num1 * num2);
    printf("%d / %d = %d\\n", num1, num2, num1 / num2);
    printf("%d %% %d = %d\\n\\n", num1, num2, num1 % num2);
    
    // Relational operations
    printf("Relational:\\n");
    printf("%d == %d : %d\\n", num1, num2, num1 == num2);
    printf("%d != %d : %d\\n", num1, num2, num1 != num2);
    printf("%d > %d : %d\\n", num1, num2, num1 > num2);
    printf("%d < %d : %d\\n\\n", num1, num2, num1 < num2);
    
    // Logical operations
    printf("Logical:\\n");
    printf("Both positive: %d\\n", (num1 > 0) && (num2 > 0));
    printf("num1 even AND > 5: %d\\n\\n", (num1 % 2 == 0) && (num1 > 5));
    
    // Assignment operations
    int x = num1;
    printf("Assignment:\\n");
    x += num2;  printf("x += %d : %d\\n", num2, x);
    x -= 2;     printf("x -= 2 : %d\\n", x);
    x *= 3;     printf("x *= 3 : %d\\n", x);
    
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
              <strong>🎓 Summary:</strong> Operators are essential for performing operations in C. 
              Practice using different types to become comfortable with them.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}