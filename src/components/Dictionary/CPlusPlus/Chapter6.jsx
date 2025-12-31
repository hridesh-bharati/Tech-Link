// src/components/Dictionary/CPlusPlus/Chapter6.jsx
import React from "react";
import CodeBox from "../CodeBox/CodeBox";

export default function CppChapter6() {
  return (
    <div className="chapter-content px-2 px-md-3 pb-3">
      {/* Header */}
      <div className="chapter-header py-3 text-center">
        <h1 className="h3 fw-bold">📘 Chapter 6: C++ Tokens</h1>
        <p className="text-white small mb-0">Smallest building blocks of C++ programs</p>
      </div>

      {/* Introduction */}
      <section className="mb-3 mx-0 ">
        <div className="card border-primary">
          <div className="card-header bg-primary text-white p-2">
            <h4 className="h6 mb-0">What are Tokens in C++?</h4>
          </div>
          <div className="card-body p-2">
            <p className="mb-2 small">
              <strong>Definition:</strong> Tokens are the smallest individual units in a C++ program that the compiler can recognize and process. They are like the "words" that make up the "sentences" (statements) of your code.
            </p>
            <div className="alert alert-info p-2 mb-0">
              <p className="mb-0 small">
                <strong>Analogy:</strong> Just as words are the building blocks of a sentence, tokens are the building blocks of a C++ program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Types Overview */}
      <section className="mb-3">
        <h3 className="h5 fw-bold text-primary mb-2">Six Types of Tokens in C++</h3>
        <div className="row g-2">
          {[
            { num: 1, title: "Identifiers", desc: "Names", color: "success" },
            { num: 2, title: "Keywords", desc: "Reserved", color: "danger" },
            { num: 3, title: "Constants", desc: "Fixed values", color: "warning" },
            { num: 4, title: "Strings", desc: "Text", color: "info" },
            { num: 5, title: "Punctuators", desc: "Symbols", color: "secondary" },
            { num: 6, title: "Operators", desc: "Operations", color: "primary" }
          ].map((item) => (
            <div className="col-6 col-sm-4 col-lg-2" key={item.num}>
              <div className={`card border-${item.color} h-100`}>
                <div className="card-body p-1 text-center">
                  <div className={`badge bg-${item.color} mb-1`}>{item.num}</div>
                  <h6 className="fw-bold mb-0 small">{item.title}</h6>
                  <p className="text-muted mb-0 tiny">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 1. Identifiers */}
      <section className="mb-3">
        <h3 className="h5 fw-bold text-primary mb-2">1. Identifiers</h3>
        <div className="card m-0 p-0">
          <div className="card-body p-2">
            <div className="definition-box mb-2 p-2 border rounded bg-light">
              <h6 className="fw-bold">Definition:</h6>
              <p className="mb-0 small">
                <strong>Identifiers</strong> are names given by programmers to various program elements like variables, functions, classes, arrays, etc. They are user-defined names used to identify these elements uniquely.
              </p>
            </div>

            <CodeBox
              title="📝 Simple Identifier Examples"
              language="cpp"
              executable={true}
              code={`#include <iostream>
using namespace std;

int main() {
    // Simple variable identifiers
    int age = 20;          // 'age' is identifier
    float marks = 85.5;    // 'marks' is identifier
    string name = "Rahul"; // 'name' is identifier
    
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "Marks: " << marks << endl;
    
    return 0;
}`}
            />

            {/* Rules Section */}
            <div className="row g-2 mt-2">
              <div className="col-12">
                <div className="card border-success">
                  <div className="card-header bg-success text-white p-1">
                    <h6 className="mb-0 small">📋 Simple Rules for Identifiers</h6>
                  </div>
                  <div className="card-body p-2">
                    <div className="row g-1">
                      {[
                        "Start with letter or _",
                        "Can have letters, numbers, _",
                        "No spaces or special characters",
                        "Cannot start with number",
                        "Cannot be keywords like 'int'",
                        "age ≠ Age (case matters)"
                      ].map((rule, idx) => (
                        <div className="col-12 col-md-6" key={idx}>
                          <div className="mb-1">
                            <span className="badge bg-success me-2">{idx + 1}</span>
                            <span className="small">{rule}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Keywords */}
      <section className="mb-3">
        <h3 className="h5 fw-bold text-primary mb-2">2. Keywords</h3>
        <div className="card">
          <div className="card-body p-2">
            <div className="definition-box mb-2 p-2 border rounded bg-light">
              <h6 className="fw-bold">Definition:</h6>
              <p className="mb-0 small">
                <strong>Keywords</strong> (also called reserved words) are predefined words in C++ that have special meanings to the compiler. They cannot be used as identifiers because they are reserved for specific programming tasks.
              </p>
            </div>

            <div className="alert alert-info p-2 mb-2">
              <p className="mb-0 small">
                <strong>Important:</strong> There are <span className="badge bg-primary">95 keywords</span> in C++. These words are reserved and cannot be used as variable names.
              </p>
            </div>

            {/* Simple Keywords List */}
            <div className="row g-1 mb-2">
              {[
                "int", "float", "double", "char",
                "if", "else", "for", "while",
                "class", "return", "using", "namespace"
              ].map((keyword, idx) => (
                <div className="col-3 col-md-2" key={idx}>
                  <code className="d-block text-center small">{keyword}</code>
                </div>
              ))}
            </div>

            <CodeBox
              title="🔑 Simple Keywords Example"
              language="cpp"
              executable={true}
              code={`#include <iostream>
using namespace std;

int main() {
    // Keywords used below
    int num = 10;          // 'int' is keyword
    float price = 99.99;   // 'float' is keyword
    
    if (num > 5) {         // 'if' is keyword
        cout << "Big number" << endl;
    } else {               // 'else' is keyword
        cout << "Small number" << endl;
    }
    
    for (int i=0; i<3; i++) {  // 'for' is keyword
        cout << i << " ";
    }
    
    return 0;  // 'return' is keyword
}`}
            />
          </div>
        </div>
      </section>

      {/* 3. Constants */}
      <section className="mb-3">
        <h3 className="h5 fw-bold text-primary mb-2">3. Constants</h3>
        <div className="card">
          <div className="card-body p-2">
            <div className="definition-box mb-2 p-2 border rounded bg-light">
              <h6 className="fw-bold">Definition:</h6>
              <p className="mb-0 small">
                <strong>Constants</strong> are fixed values that do not change during program execution. Once initialized, their value cannot be modified.
              </p>
            </div>

            <CodeBox
              title="🔒 Simple Constant Examples"
              language="cpp"
              executable={true}
              code={`#include <iostream>
using namespace std;

int main() {
    // Constants (cannot change)
    const float PI = 3.14;
    const int MAX = 100;
    const string SCHOOL = "ABC School";
    
    cout << "PI = " << PI << endl;
    cout << "MAX = " << MAX << endl;
    cout << "School: " << SCHOOL << endl;
    
    // Try to change (will give error)
    // PI = 3.14159;  // ERROR!
    // MAX = 200;     // ERROR!
    
    // Normal variable (can change)
    int score = 85;
    score = 90;  // OK
    
    return 0;
}`}
            />

            <div className="row g-2 mt-2">
              <div className="col-12 col-md-6">
                <div className="card border-success">
                  <div className="card-header bg-success text-white p-1">
                    <h6 className="mb-0 small">✅ Use for</h6>
                  </div>
                  <div className="card-body p-2">
                    <ul className="mb-0 small">
                      <li>PI value</li>
                      <li>Max size</li>
                      <li>School name</li>
                      <li>Tax rate</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strings */}
      <section className="mb-3">
        <h3 className="h5 fw-bold text-primary mb-2">4. Strings</h3>
        <div className="card">
          <div className="card-body p-2">
            <div className="definition-box mb-2 p-2 border rounded bg-light">
              <h6 className="fw-bold">Definition:</h6>
              <p className="mb-0 small">
                <strong>Strings</strong> are sequences of characters used to represent text. Use double quotes for strings.
              </p>
            </div>

            <CodeBox
              title="🔤 Simple String Examples"
              language="cpp"
              executable={true}
              code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    // String examples
    string name = "Rahul";
    string city = "Delhi";
    string message = "Hello!";
    
    cout << name << endl;
    cout << city << endl;
    cout << message << endl;
    
    // Join strings
    string full = name + " lives in " + city;
    cout << full << endl;
    
    // Length
    cout << name << " has " << name.length() << " letters" << endl;
    
    // Input
    string user;
    cout << "Enter name: ";
    cin >> user;
    cout << "Hello " << user << endl;
    
    return 0;
}`}
            />
          </div>
        </div>
      </section>

      {/* 5. Punctuators */}
      <section className="mb-3">
        <h3 className="h5 fw-bold text-primary mb-2">5. Punctuators</h3>
        <div className="card">
          <div className="card-body p-2">
            <div className="definition-box mb-2 p-2 border rounded bg-light">
              <h6 className="fw-bold">Definition:</h6>
              <p className="mb-0 small">
                <strong>Punctuators</strong> are special symbols used to organize code structure. They help compiler understand your code.
              </p>
            </div>

            {/* Simple Punctuators */}
            <div className="row g-1 mb-2 text-center">
              <div className="col-3">
                <code className="d-block">;</code>
                <div className="tiny">End line</div>
              </div>
              <div className="col-3">
                <code className="d-block">{ }</code>
                <div className="tiny">Code block</div>
              </div>
              <div className="col-3">
                <code className="d-block">( )</code>
                <div className="tiny">Function</div>
              </div>
              <div className="col-3">
                <code className="d-block">" "</code>
                <div className="tiny">String</div>
              </div>
              <div className="col-3">
                <code className="d-block">[ ]</code>
                <div className="tiny">Array</div>
              </div>
              <div className="col-3">
                <code className="d-block">,</code>
                <div className="tiny">Separate</div>
              </div>
              <div className="col-3">
                <code className="d-block">.</code>
                <div className="tiny">Access</div>
              </div>
              <div className="col-3">
                <code className="d-block">:</code>
                <div className="tiny">Scope</div>
              </div>
            </div>

            <CodeBox
              title="🔣 Simple Punctuators Example"
              language="cpp"
              executable={true}
              code={`#include <iostream>
using namespace std;

int main() {
    int x = 10;     // ; ends line
    int y = 20;
    
    {               // { starts block
        int sum = x + y;
        cout << sum << endl;
    }               // } ends block
    
    cout << "Value: " << x << endl;  // () for function
    
    int arr[3] = {1, 2, 3};  // [] for array, {} for values
    
    cout << arr[0] << endl;  // [] to access array
    
    return 0;  // ; again
}`}
            />
          </div>
        </div>
      </section>

      {/* 6. Operators */}
      <section className="mb-3">
        <h3 className="h5 fw-bold text-primary mb-2">6. Operators</h3>
        <div className="card">
          <div className="card-body p-2">
            <div className="definition-box mb-2 p-2 border rounded bg-light">
              <h6 className="fw-bold">Definition:</h6>
              <p className="mb-0 small">
                <strong>Operators</strong> are special symbols that perform operations on data like addition, comparison, etc.
              </p>
            </div>

            {/* Simple Operator Grid */}
            <div className="row g-1 mb-2 text-center">
              <div className="col-4">
                <code className="d-block">+ - * /</code>
                <div className="tiny">Math</div>
              </div>
              <div className="col-4">
                <code className="d-block">&gt; &lt; ==</code>
                <div className="tiny">Compare</div>
              </div>
              <div className="col-4">
                <code className="d-block">&& ||</code>
                <div className="tiny">Logic</div>
              </div>
              <div className="col-4">
                <code className="d-block">= +=</code>
                <div className="tiny">Assign</div>
              </div>
              <div className="col-4">
                <code className="d-block">++ --</code>
                <div className="tiny">Change by 1</div>
              </div>
              <div className="col-4">
                <code className="d-block">? :</code>
                <div className="tiny">Short if</div>
              </div>
            </div>

            <CodeBox
              title="⚡ Simple Operator Examples"
              language="cpp"
              executable={true}
              code={`#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 3;
    
    // Math
    cout << "a + b = " << a + b << endl;
    cout << "a - b = " << a - b << endl;
    cout << "a * b = " << a * b << endl;
    cout << "a / b = " << a / b << endl;
    
    // Compare
    cout << "a > b: " << (a > b) << endl;
    cout << "a == b: " << (a == b) << endl;
    
    // Assignment
    int c = 5;
    c += 2;  // c = c + 2
    cout << "c = " << c << endl;
    
    // Increment
    int d = 5;
    d++;  // d = d + 1
    cout << "d++ = " << d << endl;
    
    // Short if (ternary)
    int max = (a > b) ? a : b;
    cout << "Max is: " << max << endl;
    
    return 0;
}`}
            />
          </div>
        </div>
      </section>

      {/* Complete Simple Example */}
      <section className="mb-3">
        <h3 className="h5 fw-bold text-primary mb-2">Complete Simple Program</h3>
        <CodeBox
          title="🎯 All Tokens Together (Simple)"
          language="cpp"
          executable={true}
          code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    // Identifiers
    string name = "Rahul";
    int age = 20;
    float marks = 85.5;
    
    // Constant
    const int MAX = 100;
    
    // Display using cout (keyword)
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "Marks: " << marks << "/" << MAX << endl;
    
    // If statement
    if (marks > 75) {
        cout << "Grade: A" << endl;
    } else {
        cout << "Grade: B" << endl;
    }
    
    // Loop
    for (int i=1; i<=3; i++) {
        cout << "Count: " << i << endl;
    }
    
    // Math
    int total = age + marks;
    cout << "Total: " << total << endl;
    
    return 0;
}`}
        />
      </section>

      {/* Summary */}
      <section>
        <div className="card border-primary">
          <div className="card-header bg-primary text-white p-2">
            <h6 className="mb-0">📚 Quick Summary</h6>
          </div>
          <div className="card-body p-2">
            <div className="row g-2">
              <div className="col-6">
                <div className="small">
                  <div className="fw-bold">Identifiers</div>
                  <div className="tiny">Names we choose</div>
                </div>
              </div>
              <div className="col-6">
                <div className="small">
                  <div className="fw-bold">Keywords</div>
                  <div className="tiny">C++ special words</div>
                </div>
              </div>
              <div className="col-6">
                <div className="small">
                  <div className="fw-bold">Constants</div>
                  <div className="tiny">Fixed values</div>
                </div>
              </div>
              <div className="col-6">
                <div className="small">
                  <div className="fw-bold">Strings</div>
                  <div className="tiny">Text data</div>
                </div>
              </div>
              <div className="col-6">
                <div className="small">
                  <div className="fw-bold">Punctuators</div>
                  <div className="tiny">; { } [] etc.</div>
                </div>
              </div>
              <div className="col-6">
                <div className="small">
                  <div className="fw-bold">Operators</div>
                  <div className="tiny">+ - * / &gt; &lt;</div>
                </div>
              </div>
            </div>

            <div className="mt-2 p-2 bg-light rounded">
              <h6 className="small fw-bold mb-1">Try This:</h6>
              <p className="tiny mb-0">
                1. Click "Run" button on any example<br />
                2. Change values and names<br />
                3. See what happens!
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}