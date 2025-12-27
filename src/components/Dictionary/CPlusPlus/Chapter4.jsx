// // src/components/Dictionary/CPlusPlus/Chapter4.jsx
// import React from "react";
// import CodeBox from "../CodeBox/CodeBox";

// export default function CppChapter4() {
//   return (
//     <div className="chapter-content container-fluid px-3 pb-5">

//       <div className="chapter-header mb-4 text-center">
//         <h1 className="h2 fw-bold">📘 Chapter 4: C++ Output</h1>
//         <p className="lead text-muted">Displaying data on screen using cout</p>
//       </div>

//       <div className="card hero-card mb-4 shadow-lg" style={{ borderLeft: '5px solid #0056b3' }}>
//         <div className="card-body text-white p-4" style={{ background: 'linear-gradient(135deg, #0056b3, #0077cc)' }}>
//           <div className="row align-items-center">
//             <div className="col-md-8">
//               <h1 className="display-6 fw-bold">C++ Output with cout</h1>
//               <p className="mb-0">Learn to display text, numbers, and variables</p>
//             </div>
//             <div className="col-md-4 text-end">
//               <i className="bi bi-printer-fill display-1 opacity-75"></i>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Section 1: Basic Output */}
//       <section className="mb-5">
//         <h2 className="fw-bold mb-3" style={{ color: '#0056b3' }}>📤 Basic Output with cout</h2>
        
//         <div className="row">
//           <div className="col-md-6">
//             <CodeBox
//               title="Print Text"
//               language="cpp"
//               executable={true}
//               code={`#include <iostream>
// using namespace std;

// int main() {
//     cout << "Hello World!";
//     return 0;
// }`}
//             />
//             <p className="mt-2 small"><code>cout</code> stands for "character output"</p>
//           </div>
//           <div className="col-md-6">
//             <CodeBox
//               title="Print Multiple Items"
//               language="cpp"
//               executable={true}
//               code={`#include <iostream>
// using namespace std;

// int main() {
//     cout << "Hello" << " " << "World!";
//     return 0;
// }`}
//             />
//             <p className="mt-2 small">Chain with <code>&lt;&lt;</code> operators</p>
//           </div>
//         </div>
//       </section>

//       {/* Section 2: New Lines */}
//       <section className="mb-5">
//         <h2 className="fw-bold mb-3" style={{ color: '#0077cc' }}>↩️ New Lines</h2>
        
//         <div className="row">
//           <div className="col-md-6">
//             <div className="card h-100 shadow-sm p-3">
//               <h5 className="fw-bold text-primary">Using \n</h5>
//               <CodeBox
//                 language="cpp"
//                 executable={true}
//                 code={`cout << "Hello\\nWorld\\n!";`}
//               />
//               <p className="mt-2 small">Escape sequence for new line</p>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="card h-100 shadow-sm p-3">
//               <h5 className="fw-bold text-success">Using endl</h5>
//               <CodeBox
//                 language="cpp"
//                 executable={true}
//                 code={`cout << "Hello" << endl;
// cout << "World" << endl;`}
//               />
//               <p className="mt-2 small">Manipulator that adds new line</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="row mt-3">
//           <div className="col-md-6">
//             <div className="card h-100 shadow-sm p-3">
//               <h5 className="fw-bold text-warning">Multiple Lines in One</h5>
//               <CodeBox
//                 language="cpp"
//                 executable={true}
//                 code={`cout << "Line 1\\nLine 2\\nLine 3";`}
//               />
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="card h-100 shadow-sm p-3">
//               <h5 className="fw-bold text-info">Difference</h5>
//               <CodeBox
//                 language="cpp"
//                 code={`\\n      // Just new line character
// endl    // New line + flushes output buffer`}
//               />
//               <p className="mt-2 small"><code>endl</code> is slower but ensures immediate display</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section 3: Output Variables */}
//       <section className="mb-5">
//         <h2 className="fw-bold mb-3" style={{ color: '#28a745' }}>🔢 Output Variables</h2>
        
//         <div className="row">
//           <div className="col-md-6">
//             <CodeBox
//               title="Integer Output"
//               language="cpp"
//               executable={true}
//               code={`#include <iostream>
// using namespace std;

// int main() {
//     int age = 25;
//     cout << "Age: " << age;
//     return 0;
// }`}
//             />
//           </div>
//           <div className="col-md-6">
//             <CodeBox
//               title="Multiple Variables"
//               language="cpp"
//               executable={true}
//               code={`#include <iostream>
// using namespace std;

// int main() {
//     int x = 10, y = 20;
//     cout << "x = " << x << ", y = " << y;
//     return 0;
// }`}
//             />
//           </div>
//         </div>
        
//         <div className="row mt-3">
//           <div className="col-md-6">
//             <CodeBox
//               title="Float/Double Output"
//               language="cpp"
//               executable={true}
//               code={`#include <iostream>
// using namespace std;

// int main() {
//     float pi = 3.14159;
//     double salary = 50000.75;
//     cout << "Pi: " << pi << "\\nSalary: " << salary;
//     return 0;
// }`}
//             />
//           </div>
//           <div className="col-md-6">
//             <CodeBox
//               title="Character Output"
//               language="cpp"
//               executable={true}
//               code={`#include <iostream>
// using namespace std;

// int main() {
//     char grade = 'A';
//     cout << "Grade: " << grade;
//     return 0;
// }`}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Section 4: Formatting Output */}
//       <section className="mb-5">
//         <h2 className="fw-bold mb-3" style={{ color: '#17a2b8' }}>🎨 Formatting Output</h2>
        
//         <div className="row">
//           <div className="col-md-6">
//             <div className="card h-100 shadow-sm p-3">
//               <h5 className="fw-bold">Text Alignment</h5>
//               <CodeBox
//                 language="cpp"
//                 executable={true}
//                 code={`#include <iostream>
// #include <iomanip>
// using namespace std;

// int main() {
//     cout << left << setw(10) << "Name" 
//          << setw(10) << "Age" << endl;
//     cout << left << setw(10) << "John" 
//          << setw(10) << "25" << endl;
//     cout << left << setw(10) << "Alice" 
//          << setw(10) << "30" << endl;
//     return 0;
// }`}
//               />
//               <p className="mt-2 small"><code>setw()</code> sets width, <code>left</code> aligns left</p>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="card h-100 shadow-sm p-3">
//               <h5 className="fw-bold">Number Formatting</h5>
//               <CodeBox
//                 language="cpp"
//                 executable={true}
//                 code={`#include <iostream>
// #include <iomanip>
// using namespace std;

// int main() {
//     double num = 3.14159265;
    
//     cout << "Default: " << num << endl;
//     cout << "Fixed 2: " << fixed << setprecision(2) << num << endl;
//     cout << "Scientific: " << scientific << num << endl;
    
//     return 0;
// }`}
//               />
//               <p className="mt-2 small"><code>setprecision()</code> controls decimal places</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section 5: Escape Sequences */}
//       <section className="mb-5">
//         <h2 className="fw-bold mb-3" style={{ color: '#6f42c1' }}>🔤 Escape Sequences</h2>
        
//         <div className="table-responsive">
//           <table className="table table-bordered table-hover">
//             <thead className="table-dark">
//               <tr>
//                 <th>Sequence</th>
//                 <th>Description</th>
//                 <th>Example</th>
//                 <th>Output</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td><code>\n</code></td>
//                 <td>New line</td>
//                 <td><code>cout << "Hello\\nWorld";</code></td>
//                 <td>Hello<br />World</td>
//               </tr>
//               <tr>
//                 <td><code>\t</code></td>
//                 <td>Tab (4 spaces)</td>
//                 <td><code>cout << "Name:\\tJohn";</code></td>
//                 <td>Name:    John</td>
//               </tr>
//               <tr>
//                 <td><code>\\</code></td>
//                 <td>Backslash</td>
//                 <td><code>cout << "Path: C:\\\\Windows";</code></td>
//                 <td>Path: C:\Windows</td>
//               </tr>
//               <tr>
//                 <td><code>\"</code></td>
//                 <td>Double quote</td>
//                 <td><code>cout << "He said \\"Hello\\"";</code></td>
//                 <td>He said "Hello"</td>
//               </tr>
//               <tr>
//                 <td><code>\'</code></td>
//                 <td>Single quote</td>
//                 <td><code>cout << "It\\'s mine";</code></td>
//                 <td>It's mine</td>
//               </tr>
//               <tr>
//                 <td><code>\b</code></td>
//                 <td>Backspace</td>
//                 <td><code>cout << "Hello\\b\\b";</code></td>
//                 <td>Hel</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </section>

//       {/* Section 6: Practice Exercises */}
//       <section className="mb-5">
//         <h2 className="fw-bold mb-3" style={{ color: '#fd7e14' }}>💪 Practice Exercises</h2>
        
//         <div className="row g-3">
//           <div className="col-md-4">
//             <div className="card h-100 shadow-sm p-3">
//               <h6>Exercise 1</h6>
//               <p className="small">Print your name and age on separate lines</p>
//               <CodeBox
//                 language="cpp"
//                 code={`// Expected Output:
// // Name: John
// // Age: 25`}
//               />
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card h-100 shadow-sm p-3">
//               <h6>Exercise 2</h6>
//               <p className="small">Create a formatted table with names and scores</p>
//               <CodeBox
//                 language="cpp"
//                 code={`// Expected Output:
// // Name    Score
// // -----    -----
// // John     85
// // Alice    92`}
//               />
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card h-100 shadow-sm p-3">
//               <h6>Exercise 3</h6>
//               <p className="small">Print a triangle pattern</p>
//               <CodeBox
//                 language="cpp"
//                 code={`// Expected Output:
// // *
// // **
// // ***
// // ****`}
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Navigation */}
//       <div className="d-flex justify-content-between mt-5 p-3 bg-light rounded">
//         <a href="/cpp/syntax" className="btn btn-outline-primary">
//           <i className="bi bi-arrow-left me-2"></i>
//           Previous: C++ Syntax
//         </a>
//         <a href="/cpp/comments" className="btn" style={{ 
//           backgroundColor: '#0056b3', 
//           color: 'white',
//           border: 'none'
//         }}>
//           Next: C++ Comments
//           <i className="bi bi-arrow-right ms-2"></i>
//         </a>
//       </div>

//     </div>
//   );
// }