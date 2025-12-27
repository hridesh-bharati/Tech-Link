// src/components/Dictionary/CLanguage/Chapter7.jsx
import React from 'react';
import CodeBox from '../CodeBox/CodeBox';

export default function Chapter7() {
    return (
        <div className="chapter-content">
            {/* Enhanced Header like Chapter 4 */}
            <div className="chapter-header mb-5">
                <div className="d-flex align-items-center mb-3">
                    <div className="chapter-icon-box me-3">
                        <i className="bi bi-database chapter-icon"></i>
                    </div>
                    <div>
                        <h1 className="h2 fw-bold text-gradient-primary">C DATA TYPES</h1>
                        <p className="text-muted mb-0">Understanding variables, memory allocation, and type systems</p>
                    </div>
                </div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-custom">
                        <li className="breadcrumb-item"><a href="#" className="text-decoration-none">C Tutorial</a></li>
                        <li className="breadcrumb-item active">Data Types</li>
                    </ol>
                </nav>
            </div>

            <div className="content-section">

                {/* Section 1: Introduction */}
                <div className="section-block mb-5">
                    <div className="section-header mb-4">
                        <h2 className="h3 fw-bold section-title">
                            <span className="section-number">1</span>
                            What are Data Types?
                        </h2>
                        <div className="section-divider"></div>
                    </div>
                    
                    <div className="row g-4">
                        <div className="col-md-8">
                            <p className="lead mb-4">
                                Data types define the <strong>type of data</strong> a variable can hold and determine the <strong>amount of memory</strong> allocated.
                            </p>
                            
                            <div className="note-box note-primary mb-4">
                                <div className="note-icon">
                                    <i className="bi bi-lightbulb"></i>
                                </div>
                                <div>
                                    <strong>Key Concept:</strong> Choosing the right data type optimizes memory usage and prevents errors like overflow or precision loss.
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="card border-info">
                                <div className="card-header bg-info text-white">
                                    <i className="bi bi-memory me-2"></i>
                                    Memory Analogy
                                </div>
                                <div className="card-body">
                                    <p className="small mb-0">
                                        Think of data types as different <strong>container sizes</strong>:
                                        <br/>
                                        • <code>char</code> = Small cup (1 byte)
                                        <br/>
                                        • <code>int</code> = Medium bucket (4 bytes)
                                        <br/>
                                        • <code>double</code> = Large tank (8 bytes)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Basic Data Types Table */}
                <div className="section-block mb-5">
                    <div className="section-header mb-4">
                        <h2 className="h3 fw-bold section-title">
                            <span className="section-number">2</span>
                            Basic Data Types
                        </h2>
                        <div className="section-divider"></div>
                    </div>
                    
                    <div className="data-types-overview mb-4">
                        <div className="table-responsive">
                            <table className="table table-hover table-striped">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Data Type</th>
                                        <th>Size</th>
                                        <th>Range</th>
                                        <th>Format Specifier</th>
                                        <th>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { 
                                            type: 'char', 
                                            size: '1 byte', 
                                            range: '-128 to 127', 
                                            format: '%c', 
                                            example: "'A', '1', \"$\"",
                                            color: 'primary'
                                        },
                                        { 
                                            type: 'unsigned char', 
                                            size: '1 byte', 
                                            range: '0 to 255', 
                                            format: '%c', 
                                            example: "'A', 200",
                                            color: 'primary'
                                        },
                                        { 
                                            type: 'int', 
                                            size: '4 bytes', 
                                            range: '-2,147,483,648 to 2,147,483,647', 
                                            format: '%d', 
                                            example: '25, -100, 0',
                                            color: 'success'
                                        },
                                        { 
                                            type: 'unsigned int', 
                                            size: '4 bytes', 
                                            range: '0 to 4,294,967,295', 
                                            format: '%u', 
                                            example: '25, 100, 0',
                                            color: 'success'
                                        },
                                        { 
                                            type: 'short', 
                                            size: '2 bytes', 
                                            range: '-32,768 to 32,767', 
                                            format: '%hd', 
                                            example: '100, -50',
                                            color: 'warning'
                                        },
                                        { 
                                            type: 'long', 
                                            size: '8 bytes', 
                                            range: '-9.22e18 to 9.22e18', 
                                            format: '%ld', 
                                            example: '100000L',
                                            color: 'warning'
                                        },
                                        { 
                                            type: 'float', 
                                            size: '4 bytes', 
                                            range: '1.2E-38 to 3.4E+38', 
                                            format: '%f', 
                                            example: '3.14f',
                                            color: 'danger'
                                        },
                                        { 
                                            type: 'double', 
                                            size: '8 bytes', 
                                            range: '2.3E-308 to 1.7E+308', 
                                            format: '%lf', 
                                            example: '3.14159',
                                            color: 'danger'
                                        }
                                    ].map((item, idx) => (
                                        <tr key={idx}>
                                            <td>
                                                <span className={`badge bg-${item.color} me-2`}>DT</span>
                                                <code>{item.type}</code>
                                            </td>
                                            <td><span className="badge bg-secondary">{item.size}</span></td>
                                            <td><small>{item.range}</small></td>
                                            <td><code className="badge bg-dark">{item.format}</code></td>
                                            <td><code>{item.example}</code></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        
                        <div className="text-center mt-3">
                            <small className="text-muted">
                                <i className="bi bi-info-circle me-1"></i>
                                Sizes may vary by system architecture (32-bit vs 64-bit)
                            </small>
                        </div>
                    </div>

                    {/* Interactive Demo: Data Types */}
                    <div className="interactive-demo mt-4">
                        <div className="demo-header mb-3">
                            <h4 className="fw-bold text-primary">
                                <i className="bi bi-play-circle me-2"></i>
                                Interactive Demo - Data Type Sizes
                            </h4>
                            <p className="text-muted mb-0">
                                Run to see actual sizes on your system
                            </p>
                        </div>
                        
                        <CodeBox
                            code={`#include <stdio.h>
#include <stdint.h>

int main() {
    printf("=== Data Type Sizes ===\\n\\n");
    
    printf("Basic Types:\\n");
    printf("char:          %2lu byte(s)\\n", sizeof(char));
    printf("short:         %2lu byte(s)\\n", sizeof(short));
    printf("int:           %2lu byte(s)\\n", sizeof(int));
    printf("long:          %2lu byte(s)\\n", sizeof(long));
    printf("long long:     %2lu byte(s)\\n\\n", sizeof(long long));
    
    printf("Floating Point:\\n");
    printf("float:         %2lu byte(s)\\n", sizeof(float));
    printf("double:        %2lu byte(s)\\n", sizeof(double));
    printf("long double:   %2lu byte(s)\\n\\n", sizeof(long double));
    
    printf("Fixed Width (C99):\\n");
    printf("int8_t:        %2lu byte(s)\\n", sizeof(int8_t));
    printf("int16_t:       %2lu byte(s)\\n", sizeof(int16_t));
    printf("int32_t:       %2lu byte(s)\\n", sizeof(int32_t));
    printf("int64_t:       %2lu byte(s)\\n\\n", sizeof(int64_t));
    
    // Calculate array sizes
    int arr[10];
    printf("Array int[10]: %2lu bytes total\\n", sizeof(arr));
    printf("Per element:   %2lu bytes\\n", sizeof(arr[0]));
    
    return 0;
}`}
                            title="sizeof() Operator Demo"
                            language="c"
                            executable={true}
                            useRealCompiler={false}
                            showLineNumbers={true}
                            highlightLines={[7, 15, 22, 31]}
                        />
                    </div>
                </div>

                {/* Section 3: Type Modifiers */}
                <div className="section-block mb-5">
                    <div className="section-header mb-4">
                        <h2 className="h3 fw-bold section-title">
                            <span className="section-number">3</span>
                            Type Modifiers
                        </h2>
                        <div className="section-divider"></div>
                    </div>
                    
                    <p className="mb-4">
                        Type modifiers change the properties of basic data types, affecting their range and storage.
                    </p>
                    
                    <div className="row g-4 mb-4">
                        {[
                            {
                                modifier: 'signed',
                                icon: 'bi-plus-slash-minus',
                                color: 'primary',
                                desc: 'Can hold both positive and negative values (default for most types)',
                                example: 'signed int temperature = -10;',
                                note: 'Default for char, int, short, long'
                            },
                            {
                                modifier: 'unsigned',
                                icon: 'bi-plus-circle',
                                color: 'success',
                                desc: 'Can hold only positive values (doubles the positive range)',
                                example: 'unsigned int population = 1000000;',
                                note: 'Use for values that are never negative'
                            },
                            {
                                modifier: 'short',
                                icon: 'bi-arrow-down-short',
                                color: 'warning',
                                desc: 'Reduces memory usage (typically 2 bytes for integers)',
                                example: 'short int smallNumber = 1000;',
                                note: 'Good for small ranges (-32,768 to 32,767)'
                            },
                            {
                                modifier: 'long',
                                icon: 'bi-arrow-up-short',
                                color: 'danger',
                                desc: 'Increases range (typically 8 bytes for integers)',
                                example: 'long int bigNumber = 1000000000L;',
                                note: 'Append L/l literal suffix'
                            },
                            {
                                modifier: 'long long',
                                icon: 'bi-arrow-up',
                                color: 'info',
                                desc: 'Very large integers (at least 8 bytes, often 8)',
                                example: 'long long hugeNumber = 1000000000000LL;',
                                note: 'Append LL/ll literal suffix'
                            },
                            {
                                modifier: 'const',
                                icon: 'bi-lock',
                                color: 'dark',
                                desc: 'Makes variable read-only (cannot be modified)',
                                example: 'const float PI = 3.14159f;',
                                note: 'Compiler enforces immutability'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="col-md-6 col-lg-4">
                                <div className={`card modifier-card border-${item.color} h-100`}>
                                    <div className={`card-header bg-${item.color} text-white`}>
                                        <i className={`${item.icon} me-2`}></i>
                                        <code>{item.modifier}</code>
                                    </div>
                                    <div className="card-body">
                                        <p className="small mb-3">{item.desc}</p>
                                        <div className="example-box mb-3">
                                            <small className="text-muted d-block mb-1">Example:</small>
                                            <code className="d-block p-2 bg-light rounded">{item.example}</code>
                                        </div>
                                        <div className="note-box small p-2 bg-light rounded">
                                            <strong>Note:</strong> {item.note}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Interactive Demo: Type Modifiers */}
                    <div className="interactive-demo">
                        <div className="demo-header mb-3">
                            <h4 className="fw-bold text-success">
                                <i className="bi bi-sliders me-2"></i>
                                Type Modifiers Playground
                            </h4>
                            <p className="text-muted mb-0">
                                Experiment with different modifiers and see their effects
                            </p>
                        </div>
                        
                        <CodeBox
                            code={`#include <stdio.h>
#include <limits.h>

int main() {
    // Demonstrate signed vs unsigned
    signed int negative = -100;
    unsigned int positive = 100;
    
    printf("Signed vs Unsigned:\\n");
    printf("Signed int:   %d\\n", negative);
    printf("Unsigned int: %u\\n\\n", positive);
    
    // Demonstrate range differences
    printf("Range Demonstrations:\\n");
    printf("char range:          %d to %d\\n", CHAR_MIN, CHAR_MAX);
    printf("unsigned char range: 0 to %u\\n", UCHAR_MAX);
    printf("int range:           %d to %d\\n", INT_MIN, INT_MAX);
    printf("unsigned int range:  0 to %u\\n\\n", UINT_MAX);
    
    // Short vs Long demonstration
    short small = 32767;      // Maximum for short
    long large = 2147483647L; // Maximum for 32-bit long
    
    printf("Short vs Long:\\n");
    printf("Short value: %hd\\n", small);
    printf("Long value:  %ld\\n\\n", large);
    
    // Overflow example (careful!)
    unsigned short overflow_test = 65535;  // Max for unsigned short
    printf("Overflow Example:\\n");
    printf("Max unsigned short: %hu\\n", overflow_test);
    printf("Adding 1: %hu (wraps to 0)\\n", overflow_test + 1);
    
    return 0;
}`}
                            title="Try it Yourself - Type Modifiers"
                            language="c"
                            executable={true}
                            useRealCompiler={false}
                            showLineNumbers={true}
                            highlightLines={[7, 14, 22, 28]}
                        />
                    </div>
                </div>

                {/* Section 4: Derived Data Types */}
                <div className="section-block mb-5">
                    <div className="section-header mb-4">
                        <h2 className="h3 fw-bold section-title">
                            <span className="section-number">4</span>
                            Derived Data Types
                        </h2>
                        <div className="section-divider"></div>
                    </div>
                    
                    <p className="mb-4">
                        Derived types are built from basic types to create more complex data structures.
                    </p>
                    
                    <div className="row g-4 mb-4">
                        <div className="col-lg-6">
                            <div className="card border-info h-100">
                                <div className="card-header bg-info text-white">
                                    <i className="bi bi-collection me-2"></i>
                                    Arrays
                                </div>
                                <div className="card-body">
                                    <p className="mb-3">
                                        Collections of elements of the <strong>same type</strong>, stored in <strong>contiguous memory</strong>.
                                    </p>
                                    
                                    <div className="interactive-demo-small">
                                        <CodeBox
                                            code={`#include <stdio.h>

int main() {
    // Array declaration and initialization
    int scores[5] = {95, 87, 92, 78, 100};
    float prices[] = {10.5, 20.3, 15.0};  // Size determined automatically
    char name[20] = "John Doe";
    
    // Access and modify array elements
    printf("Student Scores:\\n");
    for (int i = 0; i < 5; i++) {
        printf("Student %d: %d\\n", i + 1, scores[i]);
    }
    
    printf("\\nTotal size of scores array: %lu bytes\\n", sizeof(scores));
    printf("Size of one element: %lu bytes\\n", sizeof(scores[0]));
    printf("Number of elements: %lu\\n\\n", sizeof(scores) / sizeof(scores[0]));
    
    // Multi-dimensional array
    int matrix[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };
    
    printf("2D Array (Matrix):\\n");
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\\n");
    }
    
    return 0;
}`}
                                            title="Array Examples"
                                            language="c"
                                            executable={true}
                                            useRealCompiler={false}
                                            showLineNumbers={true}
                                            height="400px"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="card border-success h-100">
                                <div className="card-header bg-success text-white">
                                    <i className="bi bi-cursor me-2"></i>
                                    Pointers
                                </div>
                                <div className="card-body">
                                    <p className="mb-3">
                                        Variables that store <strong>memory addresses</strong> of other variables.
                                    </p>
                                    
                                    <div className="interactive-demo-small">
                                        <CodeBox
                                            code={`#include <stdio.h>

int main() {
    // Basic variable
    int number = 42;
    float pi = 3.14159;
    char letter = 'A';
    
    // Pointer declarations
    int *ptr_number = &number;
    float *ptr_pi = &pi;
    char *ptr_letter = &letter;
    
    printf("Direct Access:\\n");
    printf("number: %d\\n", number);
    printf("pi:     %f\\n", pi);
    printf("letter: %c\\n\\n", letter);
    
    printf("Via Pointers:\\n");
    printf("*ptr_number: %d (address: %p)\\n", *ptr_number, ptr_number);
    printf("*ptr_pi:     %f (address: %p)\\n", *ptr_pi, ptr_pi);
    printf("*ptr_letter: %c (address: %p)\\n\\n", *ptr_letter, ptr_letter);
    
    // Modify via pointers
    *ptr_number = 100;
    *ptr_pi = 2.71828;
    *ptr_letter = 'Z';
    
    printf("After Modification via Pointers:\\n");
    printf("number: %d\\n", number);
    printf("pi:     %f\\n", pi);
    printf("letter: %c\\n\\n", letter);
    
    // Pointer arithmetic
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr_arr = arr;  // Points to first element
    
    printf("Pointer Arithmetic:\\n");
    for (int i = 0; i < 5; i++) {
        printf("arr[%d] = %d at address %p\\n", 
               i, *(ptr_arr + i), ptr_arr + i);
    }
    
    return 0;
}`}
                                            title="Pointer Examples"
                                            language="c"
                                            executable={true}
                                            useRealCompiler={false}
                                            showLineNumbers={true}
                                            height="400px"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 5: Practice Exercise */}
                <div className="section-block mb-5">
                    <div className="section-header mb-4">
                        <h2 className="h3 fw-bold section-title">
                            <span className="section-number">5</span>
                            Practice Exercise
                        </h2>
                        <div className="section-divider"></div>
                    </div>
                    
                    <div className="exercise-box">
                        <div className="exercise-header mb-4">
                            <h4 className="fw-bold text-primary">
                                <i className="bi bi-pencil-square me-2"></i>
                                Employee Data Manager
                            </h4>
                            <p>Create a program to manage employee data using appropriate data types.</p>
                        </div>
                        
                        <div className="row g-4 mb-4">
                            <div className="col-md-6">
                                <div className="card border-warning">
                                    <div className="card-header bg-warning text-dark">
                                        <i className="bi bi-list-check me-2"></i>
                                        Requirements
                                    </div>
                                    <div className="card-body">
                                        <ul>
                                            <li>Store employee ID (integer)</li>
                                            <li>Store salary (floating point with 2 decimals)</li>
                                            <li>Store department code (single character)</li>
                                            <li>Store years of service (integer)</li>
                                            <li>Store bonus eligibility (boolean-like using char)</li>
                                            <li>Calculate and display all data</li>
                                        </ul>
                                        
                                        <div className="mt-3">
                                            <h6 className="fw-bold">Data to use:</h6>
                                            <code>
                                                ID: 101, Salary: 50000.50, Dept: 'E',<br/>
                                                Service: 5, Bonus Eligible: 1
                                            </code>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                                <div className="card border-success">
                                    <div className="card-header bg-success text-white">
                                        <i className="bi bi-eye me-2"></i>
                                        Expected Output
                                    </div>
                                    <div className="card-body output-preview">
                                        <pre className="mb-0">
                                            <code>{`=== Employee Data ===
Employee ID:     101
Department:      Engineering (E)
Salary:          $50000.50
Years of Service: 5 years
Bonus Eligible:  Yes
Total Memory Used: 17 bytes`}</code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Exercise Solution CodeBox */}
                        <div className="interactive-demo">
                            <div className="demo-header mb-3">
                                <h5 className="fw-bold text-success">
                                    <i className="bi bi-code-slash me-2"></i>
                                    Try the Solution
                                </h5>
                                <p className="text-muted mb-0">
                                    Complete the program below
                                </p>
                            </div>
                            
                            <CodeBox
                                code={`#include <stdio.h>

int main() {
    // TODO: Declare variables with appropriate types
    // Employee ID (integer)
    
    // Salary (floating point, 2 decimals)
    
    // Department code (single character)
    
    // Years of service (integer)
    
    // Bonus eligibility (use char: 1 for yes, 0 for no)
    
    // TODO: Initialize variables with given data
    
    // TODO: Calculate total memory used
    
    // TODO: Display employee information
    printf("=== Employee Data ===\\n");
    
    // Display ID
    
    // Display department with full name
    // Hint: Use switch or if-else for 'E' -> "Engineering"
    
    // Display salary with $ and 2 decimals
    
    // Display years of service
    
    // Display bonus eligibility (Yes/No)
    
    // Display total memory used
    
    return 0;
}`}
                                title="Complete the Employee Data Program"
                                language="c"
                                executable={true}
                                useRealCompiler={false}
                                showLineNumbers={true}
                                height="450px"
                            />
                            
                            <div className="mt-3">
                                <button className="btn btn-info me-2" onClick={() => {
                                    alert(`Hints:
1. Use int for ID and years
2. Use float for salary (or double for more precision)
3. Use char for department code
4. Use char for bonus (1/0)
5. Use sizeof() operator to calculate memory
6. Use %.2f for salary formatting`);
                                }}>
                                    <i className="bi bi-lightbulb me-1"></i>
                                    Show Hint
                                </button>
                                
                                <button className="btn btn-success" onClick={() => {
                                    const solution = `#include <stdio.h>

int main() {
    // Variable declarations
    int employee_id = 101;
    float salary = 50000.50f;
    char department = 'E';
    int years_service = 5;
    char bonus_eligible = 1;
    
    // Calculate memory usage
    size_t total_memory = sizeof(employee_id) + sizeof(salary) +
                         sizeof(department) + sizeof(years_service) +
                         sizeof(bonus_eligible);
    
    // Display information
    printf("=== Employee Data ===\\n");
    printf("Employee ID:     %d\\n", employee_id);
    
    // Department name mapping
    char dept_name[20];
    switch(department) {
        case 'E': strcpy(dept_name, "Engineering"); break;
        case 'M': strcpy(dept_name, "Marketing"); break;
        case 'S': strcpy(dept_name, "Sales"); break;
        default: strcpy(dept_name, "Unknown"); break;
    }
    printf("Department:      %s (%c)\\n", dept_name, department);
    
    printf("Salary:          $%.2f\\n", salary);
    printf("Years of Service: %d years\\n", years_service);
    printf("Bonus Eligible:  %s\\n", bonus_eligible ? "Yes" : "No");
    printf("Total Memory Used: %zu bytes\\n", total_memory);
    
    return 0;
}`;
                                    
                                    navigator.clipboard.writeText(solution);
                                    alert('Solution copied to clipboard! You can now paste it in the code editor above.');
                                }}>
                                    <i className="bi bi-clipboard-check me-1"></i>
                                    View Solution
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 6: Memory Layout Visualization */}
                <div className="section-block">
                    <div className="section-header mb-4">
                        <h2 className="h3 fw-bold section-title">
                            <span className="section-number">6</span>
                            Memory Layout & Best Practices
                        </h2>
                        <div className="section-divider"></div>
                    </div>
                    
                    <div className="row g-4">
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <i className="bi bi-diagram-3 me-2"></i>
                                    Memory Layout Example
                                </div>
                                <div className="card-body">
                                    <CodeBox
                                        code={`#include <stdio.h>

int main() {
    char c = 'A';          // 1 byte at address X
    int i = 100;           // 4 bytes at address X+4 (typically)
    float f = 3.14f;       // 4 bytes at address X+8
    double d = 2.71828;    // 8 bytes at address X+12
    
    printf("Variable sizes and addresses:\\n\\n");
    printf("char c = '%c'\\n", c);
    printf("  Size: %2lu byte, Address: %p\\n", sizeof(c), &c);
    
    printf("int i = %d\\n", i);
    printf("  Size: %2lu bytes, Address: %p\\n", sizeof(i), &i);
    
    printf("float f = %.2f\\n", f);
    printf("  Size: %2lu bytes, Address: %p\\n", sizeof(f), &f);
    
    printf("double d = %.5f\\n", d);
    printf("  Size: %2lu bytes, Address: %p\\n\\n", sizeof(d), &d);
    
    // Structure padding demonstration
    struct MixedData {
        char data1;    // 1 byte
        int data2;     // 4 bytes (may have 3 bytes padding before)
        char data3;    // 1 byte (may have 3 bytes padding after)
    };
    
    struct MixedData md;
    printf("Structure MixedData size: %lu bytes\\n", sizeof(md));
    printf("(May include padding for alignment)\\n");
    
    return 0;
}`}
                                        title="Memory Address Demonstration"
                                        language="c"
                                        executable={true}
                                        useRealCompiler={false}
                                        showLineNumbers={true}
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="sticky-top" style={{ top: '20px' }}>
                                <div className="card border-primary">
                                    <div className="card-header bg-primary text-white">
                                        <i className="bi bi-check-circle me-2"></i>
                                        Best Practices
                                    </div>
                                    <div className="card-body">
                                        <ul className="mb-0">
                                            <li>Use <code>sizeof()</code> for portability</li>
                                            <li>Choose smallest adequate type</li>
                                            <li>Use <code>unsigned</code> for non-negative values</li>
                                            <li>Initialize variables when declaring</li>
                                            <li>Be aware of integer promotion rules</li>
                                            <li>Watch for overflow in calculations</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="card border-warning mt-3">
                                    <div className="card-header bg-warning text-dark">
                                        <i className="bi bi-exclamation-triangle me-2"></i>
                                        Common Pitfalls
                                    </div>
                                    <div className="card-body">
                                        <ul className="mb-0">
                                            <li>Integer division vs floating division</li>
                                            <li>Signed/unsigned mismatches</li>
                                            <li>Buffer overflow with arrays</li>
                                            <li>Pointer type mismatches</li>
                                            <li>Endianness in multi-byte types</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Final Challenge */}
                    <div className="challenge-box mt-4">
                        <div className="card border-success">
                            <div className="card-header bg-success text-white">
                                <i className="bi bi-trophy me-2"></i>
                                Data Types Master Challenge
                            </div>
                            <div className="card-body">
                                <p className="mb-3">
                                    Create a program that demonstrates your understanding of all data types:
                                </p>
                                <ul className="mb-4">
                                    <li>Use at least 5 different basic types</li>
                                    <li>Use both signed and unsigned variants</li>
                                    <li>Create an array and a pointer</li>
                                    <li>Calculate and display memory usage</li>
                                    <li>Show type conversions (implicit and explicit)</li>
                                </ul>
                                
                                <CodeBox
                                    code={`#include <stdio.h>

int main() {
    // Your master challenge code here!
    // Demonstrate your understanding of C data types
    
    // Example starter:
    printf("Data Types Master Challenge\\n");
    printf("============================\\n\\n");
    
    // TODO: Create various data types
    
    // TODO: Demonstrate their properties
    
    // TODO: Show type conversions
    
    // TODO: Calculate memory usage
    
    return 0;
}`}
                                    title="Your Data Types Showcase"
                                    language="c"
                                    executable={true}
                                    useRealCompiler={false}
                                    showLineNumbers={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}