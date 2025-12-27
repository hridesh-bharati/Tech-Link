// src/components/Dictionary/CLanguage/Chapter6.jsx
import React from 'react';
import CodeBox from '../CodeBox/CodeBox';

export default function Chapter6() {
  return (
    <div className="chapter-content">
      {/* Simple Header */}
      <div className="chapter-header mb-4">
        <h1 className="h2 fw-bold text-primary">C Variables</h1>
        <p className="lead">Containers that store data in your program</p>
      </div>

      <div className="content-section">
        {/* Section 1: What are Variables? */}
        <div className="card mb-4">
          <div className="card-header bg-primary text-white">
            <h3 className="h5 mb-0">1. What are Variables?</h3>
          </div>
          <div className="card-body">
            <p>A<strong>Variables</strong> is a named memory location that stores data values. It acts as a container to hold information that can be accessed, modified, and used throughout the program.</p>
            
            <div className="row mt-3">
              <div className="col-md-6">
                <div className="alert alert-light">
                  <h6 className="fw-bold">Real-life Example:</h6>
                  <p>Think of variables as labeled boxes:</p>
                  <ul className="mb-0">
                    <li><code>age</code> → Box labeled "age" containing 25</li>
                    <li><code>price</code> → Box labeled "price" containing 99.99</li>
                    <li><code>name</code> → Box labeled "name" containing "John"</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <CodeBox
                  code={`// Simple variable examples
int age = 25;          // Integer variable
float price = 99.99;   // Decimal variable  
char grade = 'A';      // Character variable
char name[] = "John";  // Text variable`}
                  language="c"
                  showCopy={true}
                  title="Basic Syntax"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: How to Create Variables */}
        <div className="card mb-4">
          <div className="card-header bg-success text-white">
            <h3 className="h5 mb-0">2. Creating Variables</h3>
          </div>
          <div className="card-body">
            <p>3 steps to create a variable:</p>
            
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <div className="border p-3 rounded text-center">
                  <div className="badge bg-primary mb-2">1</div>
                  <h6>Declaration</h6>
                  <code>int age;</code>
                  <small className="d-block mt-2 text-muted">Tell compiler about variable</small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="border p-3 rounded text-center">
                  <div className="badge bg-success mb-2">2</div>
                  <h6>Initialization</h6>
                  <code>age = 25;</code>
                  <small className="d-block mt-2 text-muted">Give initial value</small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="border p-3 rounded text-center">
                  <div className="badge bg-warning mb-2">3</div>
                  <h6>Usage</h6>
                  <code>printf("%d", age);</code>
                  <small className="d-block mt-2 text-muted">Use the variable</small>
                </div>
              </div>
            </div>

            <CodeBox
              code={`#include <stdio.h>

int main() {
    // Method 1: Declaration then initialization
    int age;           // Step 1: Declare
    age = 25;          // Step 2: Initialize
    
    // Method 2: Both together (Recommended)
    float price = 99.99;  // Declare + Initialize
    
    // Method 3: Multiple variables
    int a = 10, b = 20, c = 30;
    
    // Using variables
    printf("Age: %d\\n", age);
    printf("Price: %.2f\\n", price);
    printf("Sum: %d\\n", a + b + c);
    
    // Changing values
    age = 26;           // Now age is 26
    price = 89.50;      // Now price is 89.50
    
    printf("\\nNew Age: %d\\n", age);
    printf("New Price: %.2f\\n", price);
    
    return 0;
}`}
              language="c"
              executable={true}
              useRealCompiler={false}
              title="Try it Yourself"
            />
          </div>
        </div>

        {/* Section 3: Naming Rules */}
        <div className="card mb-4">
          <div className="card-header bg-warning text-dark">
            <h3 className="h5 mb-0">3. Variable Naming Rules</h3>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th width="30%">Rule</th>
                    <th>✅ Valid</th>
                    <th>❌ Invalid</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Start with letter or _</td>
                    <td><code>age, _count, total123</code></td>
                    <td><code>123total, 2price</code></td>
                  </tr>
                  <tr>
                    <td>No special characters</td>
                    <td><code>total_price, student1</code></td>
                    <td><code>total-price, price@</code></td>
                  </tr>
                  <tr>
                    <td>No spaces</td>
                    <td><code>student_age, firstName</code></td>
                    <td><code>student age, first name</code></td>
                  </tr>
                  <tr>
                    <td>Case sensitive</td>
                    <td><code>age ≠ Age ≠ AGE</code></td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Cannot be C keywords</td>
                    <td><code>number, value, result</code></td>
                    <td><code>int, float, return, if</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="alert alert-info mt-3">
              <h6 className="fw-bold">💡 Naming Tips:</h6>
              <ul className="mb-0">
                <li>Use descriptive names: <code>student_age</code> instead of <code>a</code></li>
                <li>Use lowercase for variables: <code>price</code> not <code>Price</code></li>
                <li>Use underscore for spaces: <code>total_price</code></li>
                <li>Be consistent with your naming style</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4: Data Types */}
        <div className="card mb-4">
          <div className="card-header bg-info text-white">
            <h3 className="h5 mb-0">4. Variable Data Types</h3>
          </div>
          <div className="card-body">
            <p>Different types of data need different types of variables:</p>
            
            <div className="row g-3 mb-4">
              <div className="col-md-3">
                <div className="border p-3 rounded text-center">
                  <h6 className="text-primary">int</h6>
                  <code>age = 25;</code>
                  <small className="d-block mt-2">Whole numbers</small>
                </div>
              </div>
              <div className="col-md-3">
                <div className="border p-3 rounded text-center">
                  <h6 className="text-success">float</h6>
                  <code>price = 99.99;</code>
                  <small className="d-block mt-2">Decimal numbers</small>
                </div>
              </div>
              <div className="col-md-3">
                <div className="border p-3 rounded text-center">
                  <h6 className="text-danger">char</h6>
                  <code>grade = 'A';</code>
                  <small className="d-block mt-2">Single character</small>
                </div>
              </div>
              <div className="col-md-3">
                <div className="border p-3 rounded text-center">
                  <h6 className="text-warning">char[]</h6>
                  <code>name[] = "John";</code>
                  <small className="d-block mt-2">Text/String</small>
                </div>
              </div>
            </div>

            <CodeBox
              code={`#include <stdio.h>

int main() {
    // Integer - for whole numbers
    int age = 25;
    int students = 50;
    int temperature = -10;
    
    // Float - for decimal numbers  
    float price = 99.99;
    float average = 85.75;
    float pi = 3.14159;
    
    // Character - for single letters/symbols
    char grade = 'A';
    char symbol = '$';
    char first_letter = 'J';
    
    // String - for text (array of characters)
    char name[] = "John Doe";
    char city[] = "New York";
    
    // Display all values
    printf("=== Student Information ===\\n\\n");
    printf("Name: %s\\n", name);
    printf("Age: %d years\\n", age);
    printf("Grade: %c\\n", grade);
    printf("Average Score: %.2f\\n", average);
    printf("City: %s\\n", city);
    
    // Calculations
    int total_students = students + 10;
    float new_price = price * 0.9;  // 10% discount
    
    printf("\\n=== After Changes ===\\n\\n");
    printf("Total Students: %d\\n", total_students);
    printf("Discounted Price: $%.2f\\n", new_price);
    
    return 0;
}`}
              language="c"
              executable={true}
              useRealCompiler={false}
              title="Data Types in Action"
            />
          </div>
        </div>

        {/* Section 5: Scope (Simple Version) */}
        <div className="card mb-4">
          <div className="card-header bg-dark text-white">
            <h3 className="h5 mb-0">5. Variable Scope</h3>
          </div>
          <div className="card-body">
            <p><strong>Scope</strong> means where a variable can be used.</p>
            
            <div className="row g-4">
              <div className="col-md-6">
                <div className="border p-3 rounded">
                  <h6 className="text-success">✅ Local Variable</h6>
                  <p>Created inside a function. Can only be used in that function.</p>
                  <CodeBox
                    code={`#include <stdio.h>

void myFunction() {
    int local_var = 10;  // Local to myFunction
    printf("Inside: %d\\n", local_var);
}

int main() {
    // Can't use local_var here - ERROR
    myFunction();
    return 0;
}`}
                    language="c"
                    showCopy={false}
                    height="150px"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="border p-3 rounded">
                  <h6 className="text-primary">✅ Global Variable</h6>
                  <p>Created outside all functions. Can be used anywhere.</p>
                  <CodeBox
                    code={`#include <stdio.h>

int global_var = 100;  // Global variable

void myFunction() {
    printf("Inside: %d\\n", global_var);
}

int main() {
    printf("Main: %d\\n", global_var);
    myFunction();
    return 0;
}`}
                    language="c"
                    showCopy={false}
                    height="150px"
                  />
                </div>
              </div>
            </div>

            <div className="alert alert-warning mt-3">
              <h6 className="fw-bold">⚠️ Important:</h6>
              <ul className="mb-0">
                <li>Use local variables most of the time</li>
                <li>Avoid global variables unless really needed</li>
                <li>Give different names to avoid confusion</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 6: Practice Exercise */}
        <div className="card mb-4">
          <div className="card-header bg-danger text-white">
            <h3 className="h5 mb-0">6. Practice Time!</h3>
          </div>
          <div className="card-body">
            <h6 className="fw-bold">📝 Exercise: Create a Simple Calculator</h6>
            <p>Create variables to store two numbers and calculate their sum, difference, product, and quotient.</p>
            
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <div className="border p-3 rounded">
                  <h6>Your Task:</h6>
                  <ul>
                    <li>Create variables for two numbers</li>
                    <li>Calculate their sum, difference, product</li>
                    <li>Calculate division (careful with division!)</li>
                    <li>Display all results</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="border p-3 rounded">
                  <h6>Expected Output:</h6>
                  <pre className="mb-0">
{`Numbers: 15 and 3
Sum: 18
Difference: 12
Product: 45
Quotient: 5.00`}
                  </pre>
                </div>
              </div>
            </div>

            <CodeBox
              code={`#include <stdio.h>

int main() {
    // Step 1: Declare variables for two numbers
    // Use int for whole numbers
    
    // Step 2: Give them values (15 and 3)
    
    // Step 3: Calculate sum, difference, product
    // Hint: use +, -, *
    
    // Step 4: Calculate division (use float!)
    // Hint: convert to float: (float)num1 / num2
    
    // Step 5: Display results
    printf("Numbers: %d and %d\\n", num1, num2);
    printf("Sum: %d\\n", sum);
    printf("Difference: %d\\n", difference);
    printf("Product: %d\\n", product);
    printf("Quotient: %.2f\\n", quotient);
    
    return 0;
}`}
              language="c"
              executable={true}
              useRealCompiler={false}
              title="Complete This Code"
            />

            <div className="mt-3">
              <button 
                className="btn btn-sm btn-success"
                onClick={() => {
                  const solution = `#include <stdio.h>

int main() {
    // Step 1: Declare variables
    int num1 = 15;
    int num2 = 3;
    
    // Step 2: Calculate
    int sum = num1 + num2;
    int difference = num1 - num2;
    int product = num1 * num2;
    float quotient = (float)num1 / num2;  // Convert to float for decimal
    
    // Step 3: Display results
    printf("Numbers: %d and %d\\n", num1, num2);
    printf("Sum: %d\\n", sum);
    printf("Difference: %d\\n", difference);
    printf("Product: %d\\n", product);
    printf("Quotient: %.2f\\n", quotient);
    
    return 0;
}`;
                  alert("Solution:\n\n" + solution);
                }}
              >
                Show Solution
              </button>
            </div>
          </div>
        </div>

        {/* Section 7: Quick Tips */}
        <div className="card">
          <div className="card-header bg-secondary text-white">
            <h3 className="h5 mb-0">7. Quick Tips & Common Mistakes</h3>
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-6">
                <div className="border border-success p-3 rounded">
                  <h6 className="text-success">✅ Do This</h6>
                  <ul className="small mb-0">
                    <li>Initialize variables: <code>int x = 0;</code></li>
                    <li>Use meaningful names: <code>student_age</code></li>
                    <li>Match data type to data: <code>float price = 99.99;</code></li>
                    <li>Declare close to where you use it</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="border border-danger p-3 rounded">
                  <h6 className="text-danger">❌ Avoid This</h6>
                  <ul className="small mb-0">
                    <li>Don't use uninitialized variables</li>
                    <li>Don't use single letters: <code>int a = 10;</code></li>
                    <li>Don't use reserved words: <code>int int = 5;</code></li>
                    <li>Don't forget semicolons</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="alert alert-light mt-3">
              <h6 className="fw-bold">🎯 Remember:</h6>
              <p className="mb-0">
                Variables are the building blocks of programs. Practice creating them, 
                using them in calculations, and following the rules. Start with simple 
                examples and gradually make them more complex.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}