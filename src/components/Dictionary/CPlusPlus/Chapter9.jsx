// src/components/Dictionary/CPlusPlus/Chapter9.jsx
import React from "react";
import CodeBox from "../CodeBox/CodeBox";

export default function CppChapter9() {
  return (
    <div className="chapter-content container-fluid px-3 pb-5">
      {/* Header */}
      <div className="chapter-header mt-2 mb-4 text-center">
        <h1 className="h2 fw-bold">📘 Chapter 9: C++ Constants</h1>
        <p className="text-white">
          Understanding Constants, Literals, and Const Qualifier in C++
        </p>
      </div>

      {/* Hero Card */}
      <div className="card shadow-lg mb-4" style={{ borderLeft: "5px solid #ff6b6b" }}>
        <div
          className="card-body text-white p-4"
          style={{ background: "linear-gradient(135deg,#ff6b6b,#ff8787)" }}
        >
          <h2 className="fw-bold">Constants in C++</h2>
          <p className="mb-0">
            <b>Constants</b> are fixed values that cannot be changed during program execution. 
            They provide safety, readability, and optimization in C++ programs.
          </p>
        </div>
      </div>

      {/* Section 1: Introduction */}
      <section className="mb-5">
        <h3 className="fw-bold text-primary">🎯 What are Constants?</h3>
        <p>
          <b>Constants</b> are identifiers whose values remain fixed throughout the program execution. 
          Once defined, their values cannot be modified.
        </p>
        
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>🎯 Why Use Constants?</h5>
                <ul className="mb-0">
                  <li><b>Safety:</b> Prevent accidental modification</li>
                  <li><b>Readability:</b> Meaningful names for magic numbers</li>
                  <li><b>Maintainability:</b> Change value in one place</li>
                  <li><b>Optimization:</b> Compiler can optimize code</li>
                  <li><b>Type Safety:</b> Compiler checks type consistency</li>
                  <li><b>Documentation:</b> Self-documenting code</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>⚡ Without vs With Constants</h5>
                <CodeBox
                  language="cpp"
                  code={`// WITHOUT CONSTANTS (Hard to maintain)
float area = 3.14159 * radius * radius;
if (age >= 18) { ... }
int max_users = 1000;

// WITH CONSTANTS (Better)
const float PI = 3.14159;
const int VOTING_AGE = 18;
const int MAX_USERS = 1000;

float area = PI * radius * radius;
if (age >= VOTING_AGE) { ... }`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Types of Constants */}
      <section className="mb-5">
        <h3 className="fw-bold text-success">📂 Classification of Constants</h3>
        
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Category</th>
                <th>Definition</th>
                <th>Examples</th>
                <th>Declaration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>Literal Constants</b></td>
                <td>Fixed values directly in code</td>
                <td><code>100, 3.14, 'A', "Hello"</code></td>
                <td>Direct values</td>
              </tr>
              <tr>
                <td><b>Symbolic Constants</b></td>
                <td>Named constants using const</td>
                <td><code>const int MAX = 100;</code></td>
                <td><code>const</code> keyword</td>
              </tr>
              <tr>
                <td><b>Macro Constants</b></td>
                <td>Preprocessor constants</td>
                <td><code>#define PI 3.14</code></td>
                <td><code>#define</code> directive</td>
              </tr>
              <tr>
                <td><b>Constant Expressions</b></td>
                <td>Expressions evaluated at compile-time</td>
                <td><code>constexpr int SIZE = 10*2;</code></td>
                <td><code>constexpr</code> (C++11)</td>
              </tr>
              <tr>
                <td><b>Enumeration Constants</b></td>
                <td>Named integer constants</td>
                <td><code>{`enum {RED, GREEN, BLUE};`}</code></td>
                <td><code>enum</code> keyword</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Literal Constants */}
      <section className="mb-5">
        <h3 className="fw-bold text-warning">🔢 Literal Constants</h3>
        <p>
          Literals are constant values directly written in the source code. They have fixed values and types.
        </p>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Literal Type</th>
                <th>Syntax</th>
                <th>Examples</th>
                <th>Default Type</th>
                <th>Suffixes (Type Specifiers)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>Integer Literals</b></td>
                <td>Whole numbers</td>
                <td><code>42, -100, 0xFF, 0755</code></td>
                <td><code>int</code></td>
                <td>
                  <code>u/U</code> (unsigned)<br/>
                  <code>l/L</code> (long)<br/>
                  <code>ll/LL</code> (long long)
                </td>
              </tr>
              <tr>
                <td><b>Floating-point Literals</b></td>
                <td>Decimal numbers</td>
                <td><code>3.14, -0.5, 2.0e-3</code></td>
                <td><code>double</code></td>
                <td>
                  <code>f/F</code> (float)<br/>
                  <code>l/L</code> (long double)
                </td>
              </tr>
              <tr>
                <td><b>Character Literals</b></td>
                <td>Single characters</td>
                <td><code>'A', '\\n', '\\t', '\\0'</code></td>
                <td><code>char</code></td>
                <td>
                  <code>u8</code> (UTF-8)<br/>
                  <code>u</code> (char16_t)<br/>
                  <code>U</code> (char32_t)<br/>
                  <code>L</code> (wchar_t)
                </td>
              </tr>
              <tr>
                <td><b>String Literals</b></td>
                <td>Character sequences</td>
                <td><code>"Hello", "C++"</code></td>
                <td><code>const char[]</code></td>
                <td>Same as character literals</td>
              </tr>
              <tr>
                <td><b>Boolean Literals</b></td>
                <td>Truth values</td>
                <td><code>true, false</code></td>
                <td><code>bool</code></td>
                <td>None</td>
              </tr>
              <tr>
                <td><b>Pointer Literal</b></td>
                <td>Null pointer</td>
                <td><code>nullptr</code> (C++11)</td>
                <td><code>nullptr_t</code></td>
                <td>None</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <CodeBox
              title="Literal Constants Examples"
              language="cpp"
              executable={true}
              code={`#include <iostream>
using namespace std;

int main() {
    // Integer literals (different bases)
    int decimal = 100;         // Decimal
    int octal = 0144;          // Octal (starts with 0)
    int hexadecimal = 0x64;    // Hexadecimal (starts with 0x)
    int binary = 0b1100100;    // Binary (C++14, starts with 0b)
    
    cout << "Decimal 100 = " << decimal << endl;
    cout << "Octal 0144 = " << octal << endl;
    cout << "Hex 0x64 = " << hexadecimal << endl;
    cout << "Binary 0b1100100 = " << binary << endl;
    
    // Integer suffixes
    unsigned int u = 100u;
    long int l = 100L;
    long long int ll = 100LL;
    
    // Floating-point literals
    float f = 3.14f;           // float
    double d = 3.14;           // double (default)
    long double ld = 3.14L;    // long double
    
    // Scientific notation
    double sci = 1.23e4;       // 1.23 × 10^4 = 12300
    double small = 1.23e-4;    // 1.23 × 10^-4 = 0.000123
    
    cout << "Scientific: " << sci << endl;
    cout << "Small: " << small << endl;
    
    // Character literals
    char normal = 'A';
    char newline = '\\n';
    char tab = '\\t';
    char nullchar = '\\0';
    char unicode = '\\u03C0';  // Unicode for π
    
    // Escape sequences
    cout << "Newline:\\nTab:\\tBackslash:\\\\Quote:\\'" << endl;
    
    // String literals
    const char* str1 = "Hello";
    const char* str2 = "World";
    const char* multiline = "Line 1\\n"
                           "Line 2\\n"
                           "Line 3";
    
    cout << str1 << " " << str2 << endl;
    cout << multiline << endl;
    
    // Boolean literals
    bool isTrue = true;
    bool isFalse = false;
    
    cout << boolalpha;  // Print true/false instead of 1/0
    cout << "True: " << isTrue << ", False: " << isFalse << endl;
    
    return 0;
}`}
            />
          </div>
          
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-warning text-dark">
                <h5>📝 Escape Sequences</h5>
              </div>
              <div className="card-body">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>Sequence</th>
                      <th>Meaning</th>
                      <th>ASCII Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><code>\\n</code></td><td>New line</td><td>10</td></tr>
                    <tr><td><code>\\t</code></td><td>Horizontal tab</td><td>9</td></tr>
                    <tr><td><code>\\\\</code></td><td>Backslash</td><td>92</td></tr>
                    <tr><td><code>\\'</code></td><td>Single quote</td><td>39</td></tr>
                    <tr><td><code>\\"</code></td><td>Double quote</td><td>34</td></tr>
                    <tr><td><code>\\?</code></td><td>Question mark</td><td>63</td></tr>
                    <tr><td><code>\\a</code></td><td>Alert (bell)</td><td>7</td></tr>
                    <tr><td><code>\\b</code></td><td>Backspace</td><td>8</td></tr>
                    <tr><td><code>\\r</code></td><td>Carriage return</td><td>13</td></tr>
                    <tr><td><code>\\0</code></td><td>Null character</td><td>0</td></tr>
                    <tr><td><code>\\xhh</code></td><td>Hexadecimal char</td><td>-</td></tr>
                    <tr><td><code>\\ooo</code></td><td>Octal char</td><td>-</td></tr>
                  </tbody>
                </table>
                
                <div className="alert alert-info mt-3">
                  <small>💡 <b>Note:</b> String literals are stored in read-only memory. 
                  Modifying them leads to undefined behavior.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Symbolic Constants (const) */}
      <section className="mb-5">
        <h3 className="fw-bold text-info">🏷️ Symbolic Constants (const keyword)</h3>
        <p>
          The <code>const</code> keyword creates named constants that cannot be modified after initialization.
        </p>

        <div className="row">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg-info text-white">
                <h5>Basic const Syntax</h5>
              </div>
              <div className="card-body">
                <CodeBox
                  language="cpp"
                  code={`// Syntax: const type name = value;

// Integer constants
const int MAX_SIZE = 100;
const int MIN_AGE = 18;

// Floating-point constants
const float PI = 3.14159f;
const double GRAVITY = 9.81;

// Character constants
const char NEWLINE = '\\n';
const char TAB = '\\t';

// String constants
const char* MESSAGE = "Hello World";
const string GREETING = "Welcome";

// Boolean constants
const bool IS_DEBUG = true;
const bool IS_PROD = false;

// Array constants
const int MARKS[] = {85, 90, 78};
const char VOWELS[] = {'a', 'e', 'i', 'o', 'u'};

// Must be initialized
const int VALUE;  // ERROR: uninitialized const`}
                />
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg-info text-white">
                <h5>const with Different Types</h5>
              </div>
              <div className="card-body">
                <CodeBox
                  language="cpp"
                  code={`// 1. const with pointers
int value = 10;
const int* ptr1 = &value;      // Pointer to constant int
int* const ptr2 = &value;      // Constant pointer to int
const int* const ptr3 = &value; // Constant pointer to constant int

// 2. const with references
int x = 5;
const int& ref = x;           // Reference to constant int
// ref = 10;                  // ERROR: cannot modify through const ref

// 3. const in function parameters
void display(const string& msg) {  // Efficient & safe
    cout << msg;
    // msg[0] = 'H';              // ERROR: cannot modify
}

// 4. const member functions
class MyClass {
public:
    int getValue() const {     // Doesn't modify object
        return value;
    }
private:
    int value;
};

// 5. const objects
const MyClass obj;            // Object is constant
// obj.getValue();             // Only const member functions allowed`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <CodeBox
            title="Complete const Example"
            language="cpp"
            executable={true}
            code={`#include <iostream>
#include <string>
using namespace std;

// Global constants
const int MAX_STUDENTS = 100;
const float PI = 3.14159f;
const string APP_NAME = "Student Manager";

// Function with const parameters
void printArray(const int arr[], int size) {
    // arr[0] = 100;  // ERROR: cannot modify const array
    for(int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

// Function returning const reference
const string& getDefaultName() {
    static const string name = "Default User";
    return name;
}

int main() {
    // Local constants
    const int BATCH_YEAR = 2024;
    const float DISCOUNT_RATE = 0.15f;
    const char GRADE = 'A';
    
    cout << "Application: " << APP_NAME << endl;
    cout << "Batch Year: " << BATCH_YEAR << endl;
    cout << "PI Value: " << PI << endl;
    cout << "Discount Rate: " << DISCOUNT_RATE << endl;
    cout << "Grade: " << GRADE << endl;
    
    // Constant array
    const int MARKS[] = {85, 90, 78, 92, 88};
    const int SIZE = sizeof(MARKS) / sizeof(MARKS[0]);
    
    cout << "Marks: ";
    printArray(MARKS, SIZE);
    
    // const with pointers
    int score = 95;
    const int* ptr1 = &score;      // Pointer to const int
    // *ptr1 = 100;                 // ERROR: cannot modify
    
    int* const ptr2 = &score;      // Const pointer to int
    *ptr2 = 100;                   // OK: can modify value
    // ptr2 = nullptr;             // ERROR: cannot change pointer
    
    const int* const ptr3 = &score; // Const pointer to const int
    // *ptr3 = 90;                 // ERROR
    // ptr3 = nullptr;             // ERROR
    
    // const with references
    const int& ref = score;
    // ref = 85;                   // ERROR: cannot modify
    
    // Using const return
    const string& name = getDefaultName();
    cout << "Default Name: " << name << endl;
    
    return 0;
}`}
          />
        </div>
      </section>

      {/* Section 5: Macro Constants (#define) */}
      <section className="mb-5">
        <h3 className="fw-bold text-danger">🔧 Macro Constants (#define)</h3>
        <p>
          Macro constants are created using the preprocessor directive <code>#define</code>. 
          They are replaced by the preprocessor before compilation.
        </p>

        <div className="row">
          <div className="col-md-6">
            <div className="card border-danger">
              <div className="card-header bg-danger text-white">
                <h5>#define Syntax & Examples</h5>
              </div>
              <div className="card-body">
                <CodeBox
                  language="cpp"
                  code={`// Syntax: #define NAME value

// Simple macros
#define PI 3.14159
#define MAX 100
#define NAME "John Doe"
#define NEWLINE '\\n'

// Expression macros
#define SQUARE(x) ((x) * (x))
#define MAX(a,b) ((a) > (b) ? (a) : (b))
#define MIN(a,b) ((a) < (b) ? (a) : (b))

// Conditional compilation
#define DEBUG 1
#define VERSION "2.0"
#define WINDOWS 1
#define LINUX 0

// Multi-line macros
#define PRINT_ERROR(msg) \\
    cout << "ERROR: " << msg << endl; \\
    logError(msg)

// Usage
float area = PI * radius * radius;
int max_value = MAX(x, y);

#if DEBUG
    cout << "Debug mode" << endl;
#endif

#ifdef WINDOWS
    // Windows-specific code
#elif defined(LINUX)
    // Linux-specific code
#endif`}
                />
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card border-warning">
              <div className="card-header bg-warning text-dark">
                <h5>#define vs const Comparison</h5>
              </div>
              <div className="card-body">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>Aspect</th>
                      <th><code>#define</code></th>
                      <th><code>const</code></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><b>Type Checking</b></td>
                      <td>❌ No type checking</td>
                      <td>✅ Full type checking</td>
                    </tr>
                    <tr>
                      <td><b>Scope</b></td>
                      <td>File scope (global)</td>
                      <td>Block scope</td>
                    </tr>
                    <tr>
                      <td><b>Debugging</b></td>
                      <td>❌ Hard (shows value)</td>
                      <td>✅ Easy (shows name)</td>
                    </tr>
                    <tr>
                      <td><b>Memory</b></td>
                      <td>No memory allocated</td>
                      <td>Memory allocated</td>
                    </tr>
                    <tr>
                      <td><b>Namespace</b></td>
                      <td>❌ No namespace</td>
                      <td>✅ Respects namespace</td>
                    </tr>
                    <tr>
                      <td><b>C++ Compatibility</b></td>
                      <td>⚠️ Avoid in modern C++</td>
                      <td>✅ Recommended</td>
                    </tr>
                    <tr>
                      <td><b>Best For</b></td>
                      <td>Conditional compilation</td>
                      <td>Type-safe constants</td>
                    </tr>
                  </tbody>
                </table>
                
                <div className="alert alert-warning mt-3">
                  <small>⚠️ <b>Warning:</b> Prefer <code>const</code> over <code>#define</code> in C++ 
                  for type safety and better debugging.</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <CodeBox
            title="#define Pitfalls and Solutions"
            language="cpp"
            code={`#include <iostream>
using namespace std;

// ❌ PROBLEMATIC MACROS
#define SQUARE(x) x * x
#define MAX(a,b) a > b ? a : b

// ✅ BETTER MACROS (with parentheses)
#define SQUARE_SAFE(x) ((x) * (x))
#define MAX_SAFE(a,b) ((a) > (b) ? (a) : (b))

// ❌ BAD: No type safety
#define PI 3.14159

// ✅ GOOD: Type safe alternative
const double PI_SAFE = 3.14159;

int main() {
    // Problem 1: Operator precedence
    int result1 = SQUARE(2 + 3);     // Expands to: 2 + 3 * 2 + 3 = 11 ❌
    int result2 = SQUARE_SAFE(2 + 3); // Expands to: ((2 + 3) * (2 + 3)) = 25 ✅
    
    cout << "Wrong: " << result1 << endl;
    cout << "Correct: " << result2 << endl;
    
    // Problem 2: Multiple evaluation
    int x = 5, y = 10;
    int max1 = MAX(x++, y++);        // Expands to: x++ > y++ ? x++ : y++ ❌
    // x and y incremented multiple times!
    
    // Problem 3: No scope
    #define TEMP 100
    {
        int TEMP = 50;  // ERROR: redefinition ❌
    }
    
    // With const
    const int TEMP_SAFE = 100;
    {
        int TEMP_SAFE = 50;  // OK: different scope ✅
    }
    
    return 0;
}`}
          />
        </div>
      </section>

      {/* Section 6: constexpr (C++11) */}
      <section className="mb-5">
        <h3 className="fw-bold text-success">🚀 constexpr (C++11 and later)</h3>
        <p>
          <code>constexpr</code> indicates that the value can be evaluated at compile time. 
          It's stronger than <code>const</code> and provides better optimization opportunities.
        </p>

        <div className="row">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg-success text-white">
                <h5>constexpr Basics</h5>
              </div>
              <div className="card-body">
                <CodeBox
                  language="cpp"
                  code={`// Simple constexpr
constexpr int SIZE = 100;           // Literal constant
constexpr double PI = 3.14159265359;

// constexpr with expressions
constexpr int ARRAY_SIZE = 10 * 2;  // Compile-time expression
constexpr int SQUARE(int x) {       // constexpr function (C++11)
    return x * x;
}

// Arrays with constexpr size
int arr[SIZE];                      // Valid: SIZE is compile-time constant
int arr2[SQUARE(5)];                // Valid: 25 elements

// constexpr with calculations
constexpr int factorial(int n) {
    return (n <= 1) ? 1 : n * factorial(n - 1);
}

constexpr int FACT_5 = factorial(5); // Computed at compile-time

// constexpr in classes
class Circle {
public:
    constexpr Circle(double r) : radius(r) {}
    constexpr double getArea() const { 
        return PI * radius * radius; 
    }
private:
    double radius;
};

constexpr Circle unit_circle(1.0);
constexpr double area = unit_circle.getArea();`}
                />
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg-success text-white">
                <h5>const vs constexpr</h5>
              </div>
              <div className="card-body">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>Aspect</th>
                      <th><code>const</code></th>
                      <th><code>constexpr</code></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><b>Evaluation Time</b></td>
                      <td>Runtime or compile-time</td>
                      <td>Must be compile-time</td>
                    </tr>
                    <tr>
                      <td><b>Initialization</b></td>
                      <td>Can be runtime value</td>
                      <td>Must be compile-time constant</td>
                    </tr>
                    <tr>
                      <td><b>Functions</b></td>
                      <td>Regular functions</td>
                      <td>constexpr functions (C++11+)</td>
                    </tr>
                    <tr>
                      <td><b>Optimization</b></td>
                      <td>Limited optimization</td>
                      <td>Maximum optimization</td>
                    </tr>
                    <tr>
                      <td><b>Arrays</b></td>
                      <td>❌ Cannot declare array size</td>
                      <td>✅ Can declare array size</td>
                    </tr>
                    <tr>
                      <td><b>C++ Standard</b></td>
                      <td>C++98 and later</td>
                      <td>C++11 and later</td>
                    </tr>
                    <tr>
                      <td><b>Use Case</b></td>
                      <td>Runtime constants</td>
                      <td>Compile-time constants</td>
                    </tr>
                  </tbody>
                </table>
                
                <div className="alert alert-info mt-3">
                  <small>💡 <b>Rule of thumb:</b> Use <code>constexpr</code> when the value 
                  can be determined at compile time. Use <code>const</code> for runtime constants.</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <CodeBox
            title="constexpr Advanced Examples"
            language="cpp"
            executable={true}
            code={`#include <iostream>
#include <array>
using namespace std;

// constexpr function (C++11)
constexpr int square(int x) {
    return x * x;
}

// constexpr with recursion (C++14)
constexpr int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// constexpr class (C++11)
class Point {
public:
    constexpr Point(double xVal = 0, double yVal = 0) 
        : x(xVal), y(yVal) {}
    
    constexpr double getX() const { return x; }
    constexpr double getY() const { return y; }
    
    // C++14: constexpr member functions can modify members
    constexpr void setX(double newX) { x = newX; }
    constexpr void setY(double newY) { y = newY; }
    
private:
    double x, y;
};

// constexpr template
template<typename T, size_t N>
constexpr size_t arraySize(T (&)[N]) {
    return N;
}

int main() {
    // Basic constexpr
    constexpr int MAX = 100;
    constexpr double PI = 3.14159265359;
    
    // Using constexpr for array size
    constexpr int ARR_SIZE = 5;
    int arr[ARR_SIZE] = {1, 2, 3, 4, 5};
    
    // constexpr function calls
    constexpr int SQ_5 = square(5);          // 25
    constexpr int FACT_5 = factorial(5);     // 120
    
    cout << "Square of 5: " << SQ_5 << endl;
    cout << "Factorial of 5: " << FACT_5 << endl;
    
    // constexpr objects
    constexpr Point origin;                  // (0, 0)
    constexpr Point p1(2.5, 3.5);
    
    // Compile-time calculations
    constexpr double distance = p1.getX() * p1.getX() + 
                                p1.getY() * p1.getY();
    
    // C++14: modifying constexpr objects
    constexpr Point p2(1, 2);
    // p2.setX(3);  // In C++14, this would work at compile-time
    
    // Using std::array with constexpr
    constexpr size_t N = 10;
    array<int, N> stdArr;
    
    // Template with constexpr
    int testArr[] = {1, 2, 3, 4, 5, 6};
    constexpr size_t arrLen = arraySize(testArr);  // 6
    
    cout << "Array size: " << arrLen << endl;
    cout << "Point p1: (" << p1.getX() << ", " << p1.getY() << ")" << endl;
    
    // Compile-time if (C++17)
    if constexpr (sizeof(void*) == 8) {
        cout << "64-bit system" << endl;
    } else {
        cout << "32-bit system" << endl;
    }
    
    return 0;
}`}
          />
        </div>
      </section>

      {/* Section 7: Enumeration Constants */}
      <section className="mb-5">
        <h3 className="fw-bold text-primary">🔢 Enumeration Constants</h3>
        <p>
          Enums provide a way to define named integer constants, making code more readable.
        </p>

        <div className="row">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg-primary text-white">
                <h5>C-style Enums</h5>
              </div>
              <div className="card-body">
                <CodeBox
                  language="cpp"
                  code={`// Traditional enum (C-style)
enum Color {
    RED,      // 0
    GREEN,    // 1
    BLUE      // 2
};

enum Days {
    SUNDAY = 0,
    MONDAY,   // 1
    TUESDAY,  // 2
    WEDNESDAY,// 3
    THURSDAY = 10,
    FRIDAY,   // 11
    SATURDAY  // 12
};

enum FilePermissions {
    READ = 1,      // 0001
    WRITE = 2,     // 0010
    EXECUTE = 4,   // 0100
    ALL = READ | WRITE | EXECUTE  // 0111
};

// Anonymous enum
enum { MAX_USERS = 100, TIMEOUT = 30 };

// Usage
Color favorite = GREEN;
Days today = MONDAY;
FilePermissions perm = READ | WRITE;  // Binary OR

// Type conversion
int colorCode = BLUE;          // Implicit conversion to int
Color c = static_cast<Color>(2); // Explicit conversion from int

// Problems with C-style enums
enum Status { OK, ERROR };
enum Result { SUCCESS, FAILURE };
// int value = OK + SUCCESS;    // OK, but confusing`}
                />
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg-primary text-white">
                <h5>C++11 Scoped Enums (enum class)</h5>
              </div>
              <div className="card-body">
                <CodeBox
                  language="cpp"
                  code={`// Scoped enumeration (C++11)
enum class Color { RED, GREEN, BLUE };
enum class TrafficLight : char { RED = 'R', YELLOW = 'Y', GREEN = 'G' };
enum class Permission : uint8_t { READ = 1, WRITE = 2, EXECUTE = 4 };

// Strongly typed - no implicit conversion
Color c = Color::GREEN;
// int code = c;                    // ERROR: no implicit conversion
int code = static_cast<int>(c);     // OK: explicit conversion

// No namespace pollution
enum class Status { OK, ERROR };
enum class Result { SUCCESS, FAILURE };
// auto value = Status::OK + Result::SUCCESS;  // ERROR: type mismatch

// Underlying type specification
enum class SmallEnum : char { A = 'a', B = 'b', C = 'c' };
enum class Byte : unsigned char { BIT0 = 0x01, BIT1 = 0x02 };

// Forward declaration (C++11)
enum class ForwardEnum : int;  // Declaration
// ... later definition
enum class ForwardEnum : int { VALUE1, VALUE2 };

// Comparison
Color c1 = Color::RED;
Color c2 = Color::GREEN;
if (c1 == c2) { /* ... */ }            // OK: type-safe comparison
if (c1 == Color::RED) { /* ... */ }    // OK

// Switch statement
switch (c1) {
    case Color::RED:    /* ... */ break;
    case Color::GREEN:  /* ... */ break;
    case Color::BLUE:   /* ... */ break;
}`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <CodeBox
            title="Enum Comparison and Usage"
            language="cpp"
            executable={true}
            code={`#include <iostream>
#include <cstdint>
using namespace std;

// Traditional enum (problems)
enum OldColor { RED, GREEN, BLUE };
enum OldTraffic { RED, YELLOW, GREEN };  // ERROR: RED redefined

// Scoped enums (solution)
enum class Color { RED, GREEN, BLUE };
enum class TrafficLight { RED, YELLOW, GREEN };  // OK: different scope

// Enum with specific underlying type
enum class Permission : uint8_t {
    NONE = 0,
    READ = 1 << 0,    // 0001
    WRITE = 1 << 1,   // 0010
    EXECUTE = 1 << 2  // 0100
};

// Operator overloading for enums (C++11)
Permission operator|(Permission a, Permission b) {
    return static_cast<Permission>(
        static_cast<uint8_t>(a) | static_cast<uint8_t>(b));
}

Permission operator&(Permission a, Permission b) {
    return static_cast<Permission>(
        static_cast<uint8_t>(a) & static_cast<uint8_t>(b));
}

int main() {
    // Traditional enum issues
    OldColor oc = GREEN;
    int colorValue = oc;  // Implicit conversion (type unsafe)
    
    // Scoped enum (type safe)
    Color c = Color::GREEN;
    // int value = c;  // ERROR: no implicit conversion
    int value = static_cast<int>(c);  // OK: explicit
    
    cout << "Color value: " << value << endl;
    
    // Using enums in switch
    switch (c) {
        case Color::RED:
            cout << "Red color" << endl;
            break;
        case Color::GREEN:
            cout << "Green color" << endl;
            break;
        case Color::BLUE:
            cout << "Blue color" << endl;
            break;
    }
    
    // Enum class with operators
    Permission p1 = Permission::READ;
    Permission p2 = Permission::WRITE;
    Permission combined = p1 | p2;  // READ | WRITE
    
    // Check permissions
    if ((combined & Permission::READ) == Permission::READ) {
        cout << "Has READ permission" << endl;
    }
    
    if ((combined & Permission::EXECUTE) == Permission::EXECUTE) {
        cout << "Has EXECUTE permission" << endl;
    } else {
        cout << "No EXECUTE permission" << endl;
    }
    
    // Enum iteration (C++11 workaround)
    Color colors[] = {Color::RED, Color::GREEN, Color::BLUE};
    for (auto col : colors) {
        switch (col) {
            case Color::RED: cout << "R "; break;
            case Color::GREEN: cout << "G "; break;
            case Color::BLUE: cout << "B "; break;
        }
    }
    cout << endl;
    
    return 0;
}`}
          />
        </div>
      </section>

      {/* Section 8: Best Practices & Common Errors */}
      <section className="mb-5">
        <h3 className="fw-bold text-warning">⚠️ Common Errors & Best Practices</h3>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card border-danger">
              <div className="card-header bg-danger text-white">
                <h5>❌ Common Errors</h5>
              </div>
              <div className="card-body">
                <CodeBox
                  language="cpp"
                  code={`// ERROR 1: Modifying const
const int MAX = 100;
MAX = 200;                    // ERROR: assignment of read-only variable

// ERROR 2: Uninitialized const
const int VALUE;              // ERROR: uninitialized const

// ERROR 3: Returning pointer to local const
const char* getName() {
    const char name[] = "John";  // Local array
    return name;                 // ERROR: dangling pointer
}

// ERROR 4: Modifying string literal
char* str = "Hello";           // Should be const char*
str[0] = 'J';                  // ERROR: undefined behavior

// ERROR 5: Macro side effects
#define SQUARE(x) x * x
int result = SQUARE(++value);  // value incremented twice!

// ERROR 6: const correctness
void print(int* ptr) { /* ... */ }
const int x = 10;
print(&x);                    // ERROR: discards const qualifier

// ERROR 7: Enum type mixing
enum Color { RED, GREEN, BLUE };
enum Fruit { APPLE, BANANA };
Color c = APPLE;              // ERROR in C++, OK in C

// ERROR 8: constexpr with runtime value
int getValue() { return 42; }
constexpr int val = getValue(); // ERROR: getValue() not constexpr`}
                />
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card border-success">
              <div className="card-header bg-success text-white">
                <h5>✅ Best Practices</h5>
              </div>
              <div className="card-body">
                <CodeBox
                  language="cpp"
                  code={`// PRACTICE 1: Use const for runtime constants
const int MAX_USERS = 1000;
const double PI = 3.14159265359;

// PRACTICE 2: Use constexpr for compile-time constants
constexpr int ARRAY_SIZE = 100;
constexpr double GRAVITY = 9.81;

// PRACTICE 3: Prefer const over #define
// Instead of: #define PI 3.14
const double PI = 3.14159265359;  // Type safe, debugger friendly

// PRACTICE 4: Use enum class (C++11)
enum class Color { RED, GREEN, BLUE };  // Type safe enums

// PRACTICE 5: const correctness in functions
void process(const string& data);  // Efficient and safe
int getValue() const;              // Const member function

// PRACTICE 6: Initialize all constants
const int TIMEOUT = 30;            // Always initialize
const string DEFAULT_NAME = "Guest";

// PRACTICE 7: Use auto with constants (C++11)
const auto MAX_SIZE = 100;         // Compiler deduces type
const auto APP_NAME = "MyApp";     // const char*

// PRACTICE 8: Group related constants
namespace Constants {
    constexpr int WIDTH = 800;
    constexpr int HEIGHT = 600;
    constexpr int FPS = 60;
}

// PRACTICE 9: Document constants
const int MAX_RETRIES = 3;  // Maximum connection retry attempts
const int TIMEOUT_MS = 5000; // Timeout in milliseconds

// PRACTICE 10: Use const references
void display(const vector<int>& data) {
    // Safe: cannot modify data
}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Practical Applications */}
      <section className="mb-5">
        <h3 className="fw-bold text-info">💼 Practical Applications</h3>
        
        <div className="row">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5>🎮 Game Development</h5>
                <CodeBox
                  language="cpp"
                  code={`namespace GameConstants {
    constexpr int SCREEN_WIDTH = 1920;
    constexpr int SCREEN_HEIGHT = 1080;
    constexpr int MAX_PLAYERS = 4;
    constexpr float GRAVITY = 9.8f;
    constexpr int FPS = 60;
    
    enum class GameState {
        MENU, PLAYING, PAUSED, GAME_OVER
    };
    
    enum class Direction {
        UP, DOWN, LEFT, RIGHT
    };
}`}
                />
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5>🌐 Web Server Configuration</h5>
                <CodeBox
                  language="cpp"
                  code={`class ServerConfig {
public:
    static constexpr int DEFAULT_PORT = 8080;
    static constexpr int MAX_CONNECTIONS = 1000;
    static constexpr int TIMEOUT_SECONDS = 30;
    static constexpr size_t BUFFER_SIZE = 8192;
    
    enum class Protocol { HTTP, HTTPS, FTP };
    enum class LogLevel { DEBUG, INFO, WARN, ERROR };
    
private:
    const std::string serverName = "MyServer";
    const bool isProduction = false;
};`}
                />
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5>🔧 Mathematical Constants</h5>
                <CodeBox
                  language="cpp"
                  code={`namespace MathConstants {
    // Floating point constants
    constexpr double PI = 3.141592653589793;
    constexpr double E = 2.718281828459045;
    constexpr double GOLDEN_RATIO = 1.618033988749895;
    
    // Integer constants
    constexpr int MAX_FACTORIAL = 20;  // 21! overflows 64-bit
    
    // Derived constants
    constexpr double TWO_PI = 2.0 * PI;
    constexpr double HALF_PI = PI / 2.0;
    
    // Scientific constants
    constexpr double SPEED_OF_LIGHT = 299792458.0;
    constexpr double PLANCK = 6.62607015e-34;
}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Interactive Exercise */}
      <section className="mb-5">
        <h3 className="fw-bold text-primary">💻 Practice Exercise</h3>
        
        <div className="card">
          <div className="card-header bg-primary text-white">
            <h5>Constants Programming Challenge</h5>
          </div>
          <div className="card-body">
            <p><b>Exercise 1:</b> Identify the type of each constant:</p>
            <ol>
              <li><code>const int MAX = 100;</code></li>
              <li><code>#define PI 3.14</code></li>
              <li><code>{`enum { RED, GREEN, BLUE };`}</code></li>
              <li><code>constexpr int SIZE = 10*2;</code></li>
              <li><code>"Hello World"</code></li>
            </ol>
            
            <p><b>Exercise 2:</b> Find and fix errors in this code:</p>
            <CodeBox
              language="cpp"
              code={`#include <iostream>
#define MAX 100;
#define SQUARE(x) x * x

enum Colors { RED, GREEN, BLUE };

int main() {
    const int value;
    value = 50;
    
    int result = SQUARE(2 + 3);
    std::cout << result << std::endl;
    
    char* message = "Hello";
    message[0] = 'J';
    
    constexpr int size = MAX * 2;
    int arr[size];
    
    Colors color = 1;
    
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
                  <li>Exercise 1: Check for const, #define, enum, constexpr, literals</li>
                  <li>Exercise 2: Look for uninitialized const, macro issues, string literal modification</li>
                  <li>Remember: const must be initialized</li>
                  <li>Macro expansion can cause operator precedence issues</li>
                  <li>String literals are read-only</li>
                  <li>Enums are type-safe in C++</li>
                </ul>
              </div>
            </div>
            
            <div className="collapse mt-3" id="solution">
              <div className="alert alert-success">
                <h6>✅ Solutions:</h6>
                <p><b>Exercise 1 Answers:</b></p>
                <ol>
                  <li>Symbolic constant (const)</li>
                  <li>Macro constant (#define)</li>
                  <li>Enumeration constant</li>
                  <li>Constant expression (constexpr)</li>
                  <li>String literal</li>
                </ol>
                
                <p><b>Exercise 2 Corrected Code:</b></p>
                <CodeBox
                  language="cpp"
                  code={`#include <iostream>

// Better: Use const instead of #define
const int MAX = 100;

// Fixed macro with parentheses
#define SQUARE(x) ((x) * (x))

// Better: Use enum class in modern C++
enum class Colors { RED, GREEN, BLUE };

int main() {
    // const must be initialized
    const int value = 50;
    // value = 60;  // ERROR: cannot modify const
    
    // Now works correctly: ((2 + 3) * (2 + 3)) = 25
    int result = SQUARE(2 + 3);
    std::cout << "Square: " << result << std::endl;
    
    // String literals should be const
    const char* message = "Hello";
    // message[0] = 'J';  // ERROR: cannot modify string literal
    
    // Use constexpr for compile-time constants
    constexpr int size = MAX * 2;
    int arr[size];  // OK: size is compile-time constant
    
    // Enums are type-safe: need explicit cast or use enum value
    Colors color = Colors::GREEN;  // or static_cast<Colors>(1)
    
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
                <li><b>Literal Constants:</b> Direct values in code (100, 3.14, 'A', "Hello")</li>
                <li><b>Symbolic Constants (const):</b> Named constants using const keyword</li>
                <li><b>Macro Constants (#define):</b> Preprocessor replacements (avoid in C++)</li>
                <li><b>constexpr:</b> Compile-time constants (C++11+) for optimization</li>
                <li><b>Enumeration Constants:</b> Named integer constants (use enum class)</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li><b>Best Practices:</b> Use const/constexpr over #define, prefer enum class</li>
                <li><b>Type Safety:</b> const and enum class provide compile-time checking</li>
                <li><b>Memory:</b> Constants can be optimized by compiler</li>
                <li><b>Readability:</b> Named constants make code self-documenting</li>
                <li><b>Maintenance:</b> Change value in one place affects entire program</li>
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
                  <h6>Literals</h6>
                  <code>100, "Hello"</code>
                  <small className="d-block mt-1">Direct values</small>
                </div>
              </div>
              <div className="col-md-2 mb-3">
                <div className="p-3 border rounded bg-light">
                  <h6>const</h6>
                  <code>const int MAX</code>
                  <small className="d-block mt-1">Runtime constant</small>
                </div>
              </div>
              <div className="col-md-2 mb-3">
                <div className="p-3 border rounded bg-light">
                  <h6>#define</h6>
                  <code>#define PI 3.14</code>
                  <small className="d-block mt-1 text-warning">Avoid</small>
                </div>
              </div>
              <div className="col-md-2 mb-3">
                <div className="p-3 border rounded bg-light">
                  <h6>constexpr</h6>
                  <code>constexpr int SIZE</code>
                  <small className="d-block mt-1 text-success">C++11</small>
                </div>
              </div>
              <div className="col-md-2 mb-3">
                <div className="p-3 border rounded bg-light">
                  <h6>enum</h6>
                  <code>{`enum Color {RED}`}</code>
                  <small className="d-block mt-1">Named constants</small>
                </div>
              </div>
              <div className="col-md-2 mb-3">
                <div className="p-3 border rounded bg-light">
                  <h6>enum class</h6>
                  <code>enum class Color</code>
                  <small className="d-block mt-1 text-success">C++11</small>
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
            <h5>📋 Quick Reference Table</h5>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th>When to Use</th>
                    <th>Syntax</th>
                    <th>Advantages</th>
                    <th>Disadvantages</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Runtime constants</td>
                    <td><code>const int MAX = 100;</code></td>
                    <td>Type safe, debugger friendly</td>
                    <td>Evaluated at runtime</td>
                  </tr>
                  <tr>
                    <td>Compile-time constants</td>
                    <td><code>constexpr int SIZE = 10*2;</code></td>
                    <td>Optimization, array sizes</td>
                    <td>C++11+, limited expressions</td>
                  </tr>
                  <tr>
                    <td>Conditional compilation</td>
                    <td><code>#define DEBUG 1</code></td>
                    <td>No type, preprocessor features</td>
                    <td>No type safety, hard to debug</td>
                  </tr>
                  <tr>
                    <td>Related constants</td>
                    <td><code>{`enum class Color {RED, GREEN};`}</code></td>
                    <td>Type safe, readable</td>
                    <td>Integer type only</td>
                  </tr>
                  <tr>
                    <td>Immediate values</td>
                    <td><code>3.14f, 'A', "Hello"</code></td>
                    <td>Direct, no declaration needed</td>
                    <td>Hard to maintain, "magic numbers"</td>
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