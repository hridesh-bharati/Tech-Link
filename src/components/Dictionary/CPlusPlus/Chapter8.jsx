// src/components/Dictionary/CPlusPlus/Chapter8.jsx
import React from "react";
import CodeBox from "../CodeBox/CodeBox";

export default function CppChapter8() {
  return (
    <div className="chapter-content container-fluid px-3 pb-5">
      {/* Header */}
      <div className="chapter-header mt-2 mb-4 text-center">
        <h1 className="h2 fw-bold">📘 Chapter 8: C++ Data Types - Complete Guide</h1>
        <p className="text-white">
          Comprehensive understanding of Primitive, Derived, and User-Defined Data Types in C++
        </p>
      </div>

      {/* Hero Card */}
      <div className="card shadow-lg mb-4" style={{ borderLeft: "5px solid #198754" }}>
        <div
          className="card-body text-white p-4"
          style={{ background: "linear-gradient(135deg,#198754,#20c997)" }}
        >
          <h2 className="fw-bold">Data Types in C++</h2>
          <p className="mb-0">
            <b>Data Types</b> define the type of data a variable can store, determine the memory space it occupies, 
            specify the range of values it can hold, and define the operations that can be performed on it.
          </p>
        </div>
      </div>

      {/* Section 1: Introduction */}
      <section className="mb-5">
        <h3 className="fw-bold text-primary">🎯 What is a Data Type?</h3>
        <p>
          A <b>data type</b> is an attribute that tells the compiler or interpreter how the programmer intends 
          to use the data. It specifies:
        </p>
        
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>📦 Purpose of Data Types</h5>
                <ul className="mb-0">
                  <li><b>Memory Allocation:</b> How much memory to reserve</li>
                  <li><b>Value Range:</b> What values can be stored</li>
                  <li><b>Operations:</b> What operations are valid</li>
                  <li><b>Performance:</b> Optimize memory and speed</li>
                  <li><b>Type Safety:</b> Prevent invalid operations</li>
                  <li><b>Readability:</b> Makes code self-documenting</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>📊 Without Data Types</h5>
                <CodeBox
                  language="cpp"
                  code={`// Problem: Without data types
x = 10;        // What type is x?
y = "Hello";   // What operations allowed?
z = x + y;     // Is this valid?

// Solution: With data types
int x = 10;           // x is integer
string y = "Hello";   // y is string
// z = x + y;         // Compiler error - type mismatch`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Type System Overview */}
      <section className="mb-5">
        <h3 className="fw-bold text-success">📂 Classification of C++ Data Types</h3>
        
        <div className="text-center mb-4">
          <img 
            src="https://cdn.programiz.com/sites/tutorial2program/files/cpp-data-types.jpg" 
            alt="C++ Data Types Hierarchy"
            className="img-fluid rounded shadow"
            style={{maxWidth: '800px'}}
          />
          <p className="text-muted mt-2"><small>C++ Data Types Hierarchy</small></p>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th width="20%">Category</th>
                <th width="30%">Definition & Characteristics</th>
                <th width="25%">Key Features</th>
                <th width="25%">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>Primitive (Basic/Fundamental)</b></td>
                <td>Built-in data types provided directly by the C++ language. Most basic building blocks.</td>
                <td>
                  <ul className="mb-0 small">
                    <li>Pre-defined by language</li>
                    <li>Stored in stack memory</li>
                    <li>Fastest access</li>
                    <li>Fixed size</li>
                  </ul>
                </td>
                <td><code>int, float, char, bool, double, void</code></td>
              </tr>
              <tr>
                <td><b>Derived</b></td>
                <td>Data types created from primitive types using various mechanisms.</td>
                <td>
                  <ul className="mb-0 small">
                    <li>Built from primitive types</li>
                    <li>Provide additional functionality</li>
                    <li>Can be complex structures</li>
                    <li>Compiler knows them</li>
                  </ul>
                </td>
                <td><code>array, pointer, function, reference</code></td>
              </tr>
              <tr>
                <td><b>User-Defined</b></td>
                <td>Data types defined by the programmer to suit specific needs.</td>
                <td>
                  <ul className="mb-0 small">
                    <li>Defined by programmer</li>
                    <li>Custom behavior</li>
                    <li>Enhances code organization</li>
                    <li>Reusable</li>
                  </ul>
                </td>
                <td><code>struct, union, enum, class, typedef</code></td>
              </tr>
              <tr>
                <td><b>Empty/Void</b></td>
                <td>Special type representing "no type" or absence of type.</td>
                <td>
                  <ul className="mb-0 small">
                    <li>No values</li>
                    <li>No operations</li>
                    <li>Used for functions</li>
                    <li>Used with pointers</li>
                  </ul>
                </td>
                <td><code>void</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Primitive Data Types - Detailed */}
      <section className="mb-5">
        <h3 className="fw-bold text-warning">📊 Primitive (Basic/Fundamental) Data Types</h3>
        <p>
          These are the most basic data types built into the C++ language. Every variable must have a primitive type.
        </p>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Data Type</th>
                <th>Size (Typical)</th>
                <th>Range/Values</th>
                <th>Format Specifier</th>
                <th>Use Case</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>int</b></td>
                <td>4 bytes (32-bit)</td>
                <td>-2,147,483,648 to 2,147,483,647</td>
                <td><code>%d</code></td>
                <td>Whole numbers, counts, indices</td>
                <td><code>int age = 25;</code></td>
              </tr>
              <tr>
                <td><b>float</b></td>
                <td>4 bytes</td>
                <td>±3.4e-38 to ±3.4e38 (6-7 decimal digits)</td>
                <td><code>%f</code></td>
                <td>Decimal numbers, measurements</td>
                <td><code>float pi = 3.14159f;</code></td>
              </tr>
              <tr>
                <td><b>double</b></td>
                <td>8 bytes</td>
                <td>±1.7e-308 to ±1.7e308 (15-16 decimal digits)</td>
                <td><code>%lf</code></td>
                <td>High precision calculations</td>
                <td><code>double price = 99.9999;</code></td>
              </tr>
              <tr>
                <td><b>char</b></td>
                <td>1 byte</td>
                <td>-128 to 127 or 0 to 255</td>
                <td><code>%c</code></td>
                <td>Single characters, ASCII values</td>
                <td><code>char grade = 'A';</code></td>
              </tr>
              <tr>
                <td><b>bool</b></td>
                <td>1 byte</td>
                <td>true (1) or false (0)</td>
                <td><code>%d</code></td>
                <td>Boolean flags, conditions</td>
                <td><code>bool isPassed = true;</code></td>
              </tr>
              <tr>
                <td><b>void</b></td>
                <td>0 bytes</td>
                <td>No value</td>
                <td>N/A</td>
                <td>Function return, generic pointers</td>
                <td><code>void display();</code></td>
              </tr>
              <tr>
                <td><b>wchar_t</b></td>
                <td>2 or 4 bytes</td>
                <td>0 to 65,535 or larger</td>
                <td><code>%lc</code></td>
                <td>Wide characters (Unicode)</td>
                <td><code>wchar_t ch = L'अ';</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <CodeBox
              title="Primitive Types Example Program"
              language="cpp"
              executable={true}
              code={`#include <iostream>
#include <climits>   // For integer limits
#include <cfloat>    // For float limits
using namespace std;

int main() {
    // Integer types
    cout << "=== INTEGER TYPES ===" << endl;
    cout << "int size: " << sizeof(int) << " bytes" << endl;
    cout << "Max int: " << INT_MAX << endl;
    cout << "Min int: " << INT_MIN << endl;
    
    // Floating point types
    cout << "\\n=== FLOATING TYPES ===" << endl;
    cout << "float size: " << sizeof(float) << " bytes" << endl;
    cout << "double size: " << sizeof(double) << " bytes" << endl;
    cout << "Max float: " << FLT_MAX << endl;
    cout << "Min float: " << FLT_MIN << endl;
    
    // Character type
    cout << "\\n=== CHARACTER TYPE ===" << endl;
    char letter = 'B';
    cout << "char size: " << sizeof(char) << " bytes" << endl;
    cout << "Letter: " << letter << endl;
    cout << "ASCII value: " << (int)letter << endl;
    
    // Boolean type
    cout << "\\n=== BOOLEAN TYPE ===" << endl;
    bool flag = true;
    cout << "bool size: " << sizeof(bool) << " bytes" << endl;
    cout << "Flag value: " << flag << endl;
    cout << "Flag as bool: " << boolalpha << flag << endl;
    
    // void type
    cout << "\\n=== VOID TYPE ===" << endl;
    cout << "void has no size (cannot declare void variable)" << endl;
    
    return 0;
}`}
            />
          </div>
          
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-warning text-dark">
                <h5>⚡ Key Points - Primitive Types</h5>
              </div>
              <div className="card-body">
                <ul>
                  <li><b>Default Values:</b>
                    <ul>
                      <li>int: 0</li>
                      <li>float/double: 0.0</li>
                      <li>char: '\0' (null character)</li>
                      <li>bool: false</li>
                    </ul>
                  </li>
                  <li><b>Memory Layout:</b> Stored in stack memory (fast access)</li>
                  <li><b>Operations:</b> Arithmetic, logical, comparison</li>
                  <li><b>Initialization:</b> Must be initialized before use</li>
                  <li><b>Portability:</b> Sizes may vary across platforms</li>
                </ul>
                
                <div className="alert alert-info mt-3">
                  <small>💡 <b>Tip:</b> Use <code>sizeof()</code> operator to check actual size on your system</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Derived Data Types - Detailed */}
      <section className="mb-5">
        <h3 className="fw-bold text-info">🧩 Derived Data Types</h3>
        <p>
          Derived data types are created from primitive data types using various constructs. 
          They provide additional functionality and complex data organization.
        </p>

        <div className="row">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg-info text-white">
                <h5>1. Arrays</h5>
              </div>
              <div className="card-body">
                <p><b>Definition:</b> Collection of elements of same type stored in contiguous memory.</p>
                <CodeBox
                  language="cpp"
                  code={`// Array declaration & initialization
int marks[5] = {85, 90, 78, 92, 88};
float temperatures[7];
char name[20] = "John Doe";

// Accessing elements
marks[0] = 95;      // First element
int sum = marks[1] + marks[2];`}
                />
                <ul className="mb-0 small">
                  <li><b>Fixed size</b> at compile time</li>
                  <li><b>Index-based</b> access (0 to n-1)</li>
                  <li><b>Contiguous</b> memory allocation</li>
                  <li><b>Type homogeneous</b> (all same type)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg-info text-white">
                <h5>2. Pointers</h5>
              </div>
              <div className="card-body">
                <p><b>Definition:</b> Variables that store memory addresses of other variables.</p>
                <CodeBox
                  language="cpp"
                  code={`int num = 10;
int *ptr;           // Pointer declaration
ptr = &num;         // Store address of num

cout << "Value: " << *ptr << endl;   // Dereferencing
cout << "Address: " << ptr << endl;

// Pointer arithmetic
int arr[3] = {10, 20, 30};
int *arrPtr = arr;  // Points to first element`}
                />
                <ul className="mb-0 small">
                  <li><b>Memory efficient</b> for large data</li>
                  <li><b>Dynamic memory</b> allocation</li>
                  <li><b>Call by reference</b> in functions</li>
                  <li><b>Complex data structures</b> (linked lists, trees)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg-info text-white">
                <h5>3. Functions</h5>
              </div>
              <div className="card-body">
                <p><b>Definition:</b> Block of code that performs specific task, can have return type.</p>
                <CodeBox
                  language="cpp"
                  code={`// Function declaration (prototype)
int add(int a, int b);

// Function definition
int add(int a, int b) {
    return a + b;
}

// Function pointer
int (*funcPtr)(int, int) = add;
int result = funcPtr(5, 3);  // Calls add(5, 3)`}
                />
                <ul className="mb-0 small">
                  <li><b>Reusable</b> code blocks</li>
                  <li><b>Modular</b> programming</li>
                  <li><b>Parameter passing</b> (by value/reference)</li>
                  <li><b>Return types</b> can be any data type</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg-info text-white">
                <h5>4. References</h5>
              </div>
              <div className="card-body">
                <p><b>Definition:</b> Alias (alternative name) for an existing variable.</p>
                <CodeBox
                  language="cpp"
                  code={`int original = 100;
int &ref = original;  // Reference declaration

ref = 200;  // Modifies original
cout << original;  // Output: 200

// References in functions
void swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}`}
                />
                <ul className="mb-0 small">
                  <li><b>Must be initialized</b> when declared</li>
                  <li><b>Cannot be reassigned</b> to refer to another variable</li>
                  <li><b>No NULL references</b> (safer than pointers)</li>
                  <li><b>Used for</b> function parameters, return values</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: User-Defined Data Types - Detailed */}
      <section className="mb-5">
        <h3 className="fw-bold text-danger">👤 User-Defined Data Types</h3>
        <p>
          These are data types defined by the programmer to organize data in a way that makes sense 
          for their specific application.
        </p>

        <div className="row">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg-danger text-white">
                <h5>1. Structures (struct)</h5>
              </div>
              <div className="card-body">
                <p><b>Definition:</b> Collection of different data types grouped under one name.</p>
                <CodeBox
                  language="cpp"
                  code={`// Structure definition
struct Student {
    int rollNo;
    char name[50];
    float marks;
    char grade;
};

// Structure variable
struct Student s1;  // C style
Student s2;         // C++ style (struct keyword optional)

// Initialization
Student s3 = {101, "Rahul", 85.5, 'A'};

// Access members
s3.marks = 90.0;`}
                />
                <ul className="mb-0 small">
                  <li><b>Heterogeneous</b> data grouping</li>
                  <li><b>Members</b> can be different types</li>
                  <li><b>Memory</b> = sum of all members (+ padding)</li>
                  <li><b>Dot operator</b> (.) for member access</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg-danger text-white">
                <h5>2. Unions</h5>
              </div>
              <div className="card-body">
                <p><b>Definition:</b> Special data type that stores different data types in same memory location.</p>
                <CodeBox
                  language="cpp"
                  code={`union Data {
    int i;
    float f;
    char str[20];
};

union Data data;
data.i = 10;      // Store integer
cout << data.i;

data.f = 220.5;   // Now store float
cout << data.f;   // i is overwritten

// Only one member can contain value at a time`}
                />
                <ul className="mb-0 small">
                  <li><b>Memory efficient</b> (shares memory)</li>
                  <li><b>Size</b> = largest member size</li>
                  <li><b>Only one</b> member active at a time</li>
                  <li><b>Useful for</b> type punning, variant types</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg-danger text-white">
                <h5>3. Enumerations (enum)</h5>
              </div>
              <div className="card-body">
                <p><b>Definition:</b> User-defined type consisting of named integer constants.</p>
                <CodeBox
                  language="cpp"
                  code={`// Enum definition
enum Days {Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday};
enum Colors {Red = 1, Green = 2, Blue = 4, Yellow = 8};

// Enum variable
Days today = Monday;
Colors favorite = Blue;

cout << today;     // Output: 1 (Monday is 1)
cout << favorite;  // Output: 4

// Scoped enum (C++11)
enum class TrafficLight {Red, Yellow, Green};
TrafficLight signal = TrafficLight::Red;`}
                />
                <ul className="mb-0 small">
                  <li><b>Improves readability</b> of code</li>
                  <li><b>Type safety</b> (C++11 enums)</li>
                  <li><b>Default values</b> start from 0</li>
                  <li><b>Can assign</b> specific values</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg-danger text-white">
                <h5>4. Classes</h5>
              </div>
              <div className="card-body">
                <p><b>Definition:</b> Blueprint for creating objects (OOP concept).</p>
                <CodeBox
                  language="cpp"
                  code={`// Class definition
class Rectangle {
private:
    float length;
    float width;
    
public:
    // Constructor
    Rectangle(float l, float w) {
        length = l;
        width = w;
    }
    
    // Member function
    float area() {
        return length * width;
    }
};

// Create object
Rectangle rect(5.0, 3.0);
cout << "Area: " << rect.area();`}
                />
                <ul className="mb-0 small">
                  <li><b>Data abstraction</b> and encapsulation</li>
                  <li><b>Member functions</b> (methods)</li>
                  <li><b>Access specifiers</b> (public, private, protected)</li>
                  <li><b>Inheritance</b>, polymorphism, abstraction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header bg-danger text-white">
                <h5>5. Typedef & Type Aliases</h5>
              </div>
              <div className="card-body">
                <p><b>Definition:</b> Creates an alias (new name) for an existing type.</p>
                <CodeBox
                  language="cpp"
                  code={`// Traditional typedef
typedef unsigned long ulong;
typedef int Marks;
typedef char* StringPtr;

// C++11 using alias
using Salary = double;
using Byte = unsigned char;

// Usage
ulong distance = 1000000;
Marks physics = 95;
Salary income = 50000.50;

// Complex type aliases
using Matrix = int[10][10];
using FunctionPtr = void(*)(int);`}
                />
                <ul className="mb-0">
                  <li><b>Improves code readability</b></li>
                  <li><b>Platform-independent</b> code</li>
                  <li><b>Simplifies complex</b> type declarations</li>
                  <li><b>C++11:</b> <code>using</code> is preferred over <code>typedef</code></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Type Modifiers */}
      <section className="mb-5">
        <h3 className="fw-bold text-success">🔧 Type Modifiers</h3>
        <p>
          Modifiers alter the meaning of the basic data types to fit various situations.
        </p>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Modifier</th>
                <th>Applied To</th>
                <th>Effect</th>
                <th>Size (bytes)</th>
                <th>Range</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>signed</b> (default)</td>
                <td>char, int, short, long</td>
                <td>Can hold positive and negative values</td>
                <td>Same as base type</td>
                <td>-2^(n-1) to 2^(n-1)-1</td>
                <td><code>signed int x = -10;</code></td>
              </tr>
              <tr>
                <td><b>unsigned</b></td>
                <td>char, int, short, long</td>
                <td>Only positive values (0 and above)</td>
                <td>Same as base type</td>
                <td>0 to 2^n-1</td>
                <td><code>unsigned int age = 25;</code></td>
              </tr>
              <tr>
                <td><b>short</b></td>
                <td>int</td>
                <td>Reduces size and range</td>
                <td>2</td>
                <td>-32,768 to 32,767</td>
                <td><code>short int small = 100;</code></td>
              </tr>
              <tr>
                <td><b>long</b></td>
                <td>int, double</td>
                <td>Increases size and range</td>
                <td>4 or 8</td>
                <td>-2.1B to 2.1B (approx)</td>
                <td><code>long int big = 1000000;</code></td>
              </tr>
              <tr>
                <td><b>long long</b></td>
                <td>int</td>
                <td>Further increases size (C++11)</td>
                <td>8</td>
                <td>-9.2×10¹⁸ to 9.2×10¹⁸</td>
                <td><code>long long huge = 1e18;</code></td>
              </tr>
              <tr>
                <td><b>const</b></td>
                <td>All types</td>
                <td>Value cannot be changed</td>
                <td>Same as base type</td>
                <td>N/A</td>
                <td><code>const float PI = 3.14159;</code></td>
              </tr>
              <tr>
                <td><b>volatile</b></td>
                <td>All types</td>
                <td>Value can change unexpectedly</td>
                <td>Same as base type</td>
                <td>N/A</td>
                <td><code>volatile int hardware_reg;</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeBox
          title="Type Modifiers Example"
          language="cpp"
          executable={true}
          code={`#include <iostream>
#include <climits>
using namespace std;

int main() {
    // Signed vs Unsigned
    signed int negative = -100;
    unsigned int positive = 100;
    
    cout << "Signed: " << negative << endl;
    cout << "Unsigned: " << positive << endl;
    
    // Size comparison
    cout << "\\n=== SIZE COMPARISON ===" << endl;
    cout << "short int: " << sizeof(short) << " bytes" << endl;
    cout << "int: " << sizeof(int) << " bytes" << endl;
    cout << "long int: " << sizeof(long) << " bytes" << endl;
    cout << "long long int: " << sizeof(long long) << " bytes" << endl;
    
    // Range demonstration
    cout << "\\n=== RANGE DEMONSTRATION ===" << endl;
    cout << "Max short: " << SHRT_MAX << endl;
    cout << "Max unsigned short: " << USHRT_MAX << endl;
    
    // const modifier
    const int MAX_STUDENTS = 100;
    // MAX_STUDENTS = 200;  // Error: cannot modify const
    
    // volatile modifier (for hardware registers)
    volatile int sensor_value;
    // Compiler won't optimize reads of sensor_value
    
    return 0;
}`}
        />
      </section>

      {/* Section 7: Memory Layout & Sizeof */}
      <section className="mb-5">
        <h3 className="fw-bold text-primary">💾 Memory Layout & sizeof() Operator</h3>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>🧠 Memory Layout of Data Types</h5>
                <CodeBox
                  language="cpp"
                  code={`// Visualizing memory layout

// Primitive types (contiguous bytes)
int x = 65;        // [00][00][00][41] (hex)
char c = 'A';      // [41] (ASCII 65)
float f = 3.14;    // [40][48][F5][C3]

// Array (contiguous block)
int arr[3] = {1,2,3};
// Memory: [1][2][3]

// Structure (members in sequence)
struct Point {
    int x;      // 4 bytes
    int y;      // 4 bytes
};             // Total: 8 bytes (+ padding)

// Union (overlapping memory)
union Data {
    int i;      // 4 bytes
    char c;     // 1 byte (shares same 4 bytes)
};             // Total: 4 bytes`}
                />
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>📏 sizeof() Operator</h5>
                <CodeBox
                  title="Using sizeof()"
                  language="cpp"
                  executable={true}
                  code={`#include <iostream>
using namespace std;

struct Student {
    int roll;       // 4 bytes
    char name[30];  // 30 bytes
    float marks;    // 4 bytes
    // Padding: 2 bytes (to align to 4 bytes)
}; // Total: ~40 bytes

union Data {
    int i;
    char c;
    double d;
};

int main() {
    cout << "=== sizeof() DEMO ===" << endl;
    cout << "char: " << sizeof(char) << " byte" << endl;
    cout << "int: " << sizeof(int) << " bytes" << endl;
    cout << "float: " << sizeof(float) << " bytes" << endl;
    cout << "double: " << sizeof(double) << " bytes" << endl;
    cout << "bool: " << sizeof(bool) << " byte" << endl;
    
    cout << "\\n=== DERIVED TYPES ===" << endl;
    int arr[10];
    cout << "int[10]: " << sizeof(arr) << " bytes" << endl;
    cout << "Each element: " << sizeof(arr[0]) << " bytes" << endl;
    
    cout << "\\n=== USER-DEFINED ===" << endl;
    cout << "struct Student: " << sizeof(Student) << " bytes" << endl;
    cout << "union Data: " << sizeof(Data) << " bytes" << endl;
    
    return 0;
}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Best Practices & Common Mistakes */}
      <section className="mb-5">
        <h3 className="fw-bold text-warning">⚠️ Common Mistakes & Best Practices</h3>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card border-danger">
              <div className="card-header bg-danger text-white">
                <h5>❌ Common Mistakes</h5>
              </div>
              <div className="card-body">
                <CodeBox
                  language="cpp"
                  code={`// MISTAKE 1: Uninitialized variables
int x;                // Contains garbage
cout << x;            // Undefined behavior

// MISTAKE 2: Type mismatch
int num = 10.5;       // Implicit conversion, data loss
char ch = "A";        // Should be 'A' not "A"

// MISTAKE 3: Array bounds
int arr[5];
arr[5] = 10;          // Index 5 doesn't exist (0-4)

// MISTAKE 4: Pointer issues
int *ptr;             // Uninitialized pointer
*ptr = 100;           // Crash or corruption

// MISTAKE 5: Structure padding unawareness
struct Bad {
    char c;           // 1 byte
    int i;            // 4 bytes (+3 padding)
}; // 8 bytes instead of expected 5`}
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
                  code={`// PRACTICE 1: Always initialize
int x = 0;
double price = 0.0;
bool flag = false;

// PRACTICE 2: Use appropriate types
int age = 25;                 // Use int for whole numbers
float temperature = 36.6f;    // Use float for measurements
double pi = 3.14159265359;    // Use double for precision

// PRACTICE 3: Use const for constants
const float PI = 3.14159f;
const int MAX_USERS = 1000;

// PRACTICE 4: Use auto in C++11+
auto result = calculate();    // Compiler deduces type
auto name = "John";           // const char*

// PRACTICE 5: Use size_t for sizes
size_t array_size = sizeof(arr) / sizeof(arr[0]);

// PRACTICE 6: Structure optimization
struct Optimized {
    int i;     // 4 bytes
    char c;    // 1 byte
    // 3 bytes padding (total 8)
}; // Rearrange to minimize padding`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Interactive Exercise */}
      <section className="mb-5">
        <h3 className="fw-bold text-primary">💻 Practice Exercise</h3>
        
        <div className="card">
          <div className="card-header bg-primary text-white">
            <h5>Identify Data Types & Fix Errors</h5>
          </div>
          <div className="card-body">
            <p><b>Exercise 1:</b> Identify the data type category for each:</p>
            <ol>
              <li><code>int marks[10];</code></li>
              <li><code>struct {`int x; int y;`} point;</code></li>
              <li><code>enum Color {`RED, GREEN, BLUE`};</code></li>
              <li><code>float *ptr;</code></li>
              <li><code>typedef unsigned int uint;</code></li>
            </ol>
            
            <p><b>Exercise 2:</b> Find and fix errors in this code:</p>
            <CodeBox
              language="cpp"
              code={`#include <iostream>
using namespace std;

struct Employee {
    int id
    char name[50];
    float salary
};

int main() {
    int x;
    cout << x << endl;
    
    float price = 99.99;
    int discount = price;
    
    char grade = "A";
    
    enum Level {Low, Medium, High};
    Level current = 1;
    
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
                  <li>Exercise 1: Check categories - Primitive, Derived, User-defined</li>
                  <li>Exercise 2: Look for missing semicolons, type mismatches, enum usage</li>
                  <li>Remember: char uses single quotes, string uses double quotes</li>
                  <li>Enums use named constants, not integer values directly</li>
                  <li>Always initialize variables</li>
                </ul>
              </div>
            </div>
            
            <div className="collapse mt-3" id="solution">
              <div className="alert alert-success">
                <h6>✅ Solutions:</h6>
                <p><b>Exercise 1 Answers:</b></p>
                <ol>
                  <li>Derived (Array)</li>
                  <li>User-defined (Structure)</li>
                  <li>User-defined (Enumeration)</li>
                  <li>Derived (Pointer)</li>
                  <li>User-defined (Typedef)</li>
                </ol>
                
                <p><b>Exercise 2 Corrected Code:</b></p>
                <CodeBox
                  language="cpp"
                  code={`#include <iostream>
using namespace std;

struct Employee {
    int id;          // Added semicolon
    char name[50];
    float salary;    // Added semicolon
};

int main() {
    int x = 0;       // Initialize variable
    cout << x << endl;
    
    float price = 99.99f;
    int discount = (int)price;  // Explicit cast
    
    char grade = 'A';           // Single quotes for char
    
    enum Level {Low, Medium, High};
    Level current = Medium;     // Use enum constant, not integer
    
    return 0;
}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Real-world Applications */}
      <section className="mb-5">
        <h3 className="fw-bold text-success">💼 Real-world Applications</h3>
        
        <div className="row">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5>🎮 Game Development</h5>
                <ul className="small">
                  <li><b>int:</b> Player score, level</li>
                  <li><b>float:</b> Position, velocity</li>
                  <li><b>bool:</b> Game state flags</li>
                  <li><b>struct:</b> Player attributes</li>
                  <li><b>enum:</b> Game states, items</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5>🏦 Banking Systems</h5>
                <ul className="small">
                  <li><b>double:</b> Account balance</li>
                  <li><b>long long:</b> Account number</li>
                  <li><b>char[]:</b> Customer name</li>
                  <li><b>struct:</b> Transaction record</li>
                  <li><b>enum:</b> Account types</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5>📡 Embedded Systems</h5>
                <ul className="small">
                  <li><b>unsigned char:</b> Sensor data</li>
                  <li><b>volatile:</b> Hardware registers</li>
                  <li><b>bit fields:</b> Status flags</li>
                  <li><b>union:</b> Protocol packets</li>
                  <li><b>const:</b> Configuration</li>
                </ul>
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
                <li><b>Primitive Types:</b> int, float, char, bool, double, void - built-in fundamentals</li>
                <li><b>Derived Types:</b> Arrays, pointers, functions, references - built from primitives</li>
                <li><b>User-defined Types:</b> struct, union, enum, class, typedef - programmer-defined</li>
                <li><b>Type Modifiers:</b> signed, unsigned, short, long, const, volatile - modify behavior</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li><b>Memory Management:</b> sizeof() determines memory usage</li>
                <li><b>Type Safety:</b> Prevents invalid operations</li>
                <li><b>Best Practices:</b> Initialize variables, use appropriate types</li>
                <li><b>Applications:</b> Different types suit different problem domains</li>
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
                  <h6>Primitive</h6>
                  <code>int, float, char</code>
                  <small className="d-block mt-1">Built-in, fastest</small>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="p-3 border rounded bg-light">
                  <h6>Derived</h6>
                  <code>array[], *ptr</code>
                  <small className="d-block mt-1">From primitives</small>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="p-3 border rounded bg-light">
                  <h6>User-Defined</h6>
                  <code>struct, enum</code>
                  <small className="d-block mt-1">Programmer created</small>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="p-3 border rounded bg-light">
                  <h6>sizeof()</h6>
                  <code>sizeof(int)</code>
                  <small className="d-block mt-1">Memory size</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}