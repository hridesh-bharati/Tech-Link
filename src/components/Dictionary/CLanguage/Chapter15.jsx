// src/components/Dictionary/CLanguage/Chapter15.jsx
import React from 'react';
import CodeBox from '../CodeBox/CodeBox';

export default function Chapter15() {
  return (
    <div className="chapter-content">
      <div className="chapter-header mb-4">
        <h1 className="h2 fw-bold">C FOR LOOP</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">C Tutorial</a></li>
            <li className="breadcrumb-item active">For Loop</li>
          </ol>
        </nav>
      </div>

      <div className="content-section">
        {/* Definition */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">Definition</h2>
          <div className="definition-card">
            <p className="lead">
              The <strong>for loop</strong> is a pre-test loop that combines initialization, 
              condition checking, and increment/decrement in a single line. It's ideal when 
              the number of iterations is known beforehand.
            </p>
          </div>
        </div>

        {/* Syntax */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">Syntax</h2>
          
          <CodeBox
            code={`for(initialization; condition; increment/decrement) {
    // Statements to execute
    // Loop body
}`}
            title="For Loop Syntax"
            language="c"
          />
          
          <div className="execution-flow mt-4">
            <h5>Execution Flow:</h5>
            <ol>
              <li><strong>Initialization:</strong> Executed once at the beginning</li>
              <li><strong>Condition Check:</strong> Evaluated before each iteration</li>
              <li><strong>Loop Body:</strong> Executed if condition is true</li>
              <li><strong>Increment/Decrement:</strong> Executed after each iteration</li>
              <li><strong>Repeat:</strong> Goes back to condition check</li>
            </ol>
          </div>
        </div>

        {/* Basic Patterns */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">Basic Patterns</h2>
          
          <CodeBox
            code={`#include <stdio.h>

int main() {
    // Pattern 1: Forward counting
    printf("Forward counting (1 to 10):\\n");
    for(int i = 1; i <= 10; i++) {
        printf("%d ", i);
    }
    printf("\\n\\n");
    
    // Pattern 2: Backward counting
    printf("Backward counting (10 to 1):\\n");
    for(int i = 10; i >= 1; i--) {
        printf("%d ", i);
    }
    printf("\\n\\n");
    
    // Pattern 3: Even numbers
    printf("Even numbers (2 to 20):\\n");
    for(int i = 2; i <= 20; i += 2) {
        printf("%d ", i);
    }
    printf("\\n\\n");
    
    // Pattern 4: Odd numbers
    printf("Odd numbers (1 to 19):\\n");
    for(int i = 1; i <= 19; i += 2) {
        printf("%d ", i);
    }
    printf("\\n\\n");
    
    // Pattern 5: Multiplication table
    printf("Multiplication table of 5:\\n");
    int num = 5;
    for(int i = 1; i <= 10; i++) {
        printf("%d × %d = %d\\n", num, i, num * i);
    }
    
    return 0;
}`}
            title="Common For Loop Patterns"
            language="c"
          />
        </div>

        {/* Nested For Loops */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">Nested For Loops</h2>
          
          <CodeBox
            code={`#include <stdio.h>

int main() {
    // Pattern 1: Rectangle of stars
    printf("Rectangle Pattern (4x6):\\n");
    for(int i = 1; i <= 4; i++) {        // Outer loop for rows
        for(int j = 1; j <= 6; j++) {    // Inner loop for columns
            printf("* ");
        }
        printf("\\n");
    }
    printf("\\n");
    
    // Pattern 2: Right triangle
    printf("Right Triangle Pattern:\\n");
    for(int i = 1; i <= 5; i++) {
        for(int j = 1; j <= i; j++) {
            printf("* ");
        }
        printf("\\n");
    }
    printf("\\n");
    
    // Pattern 3: Multiplication table grid
    printf("Multiplication Table (1-5):\\n");
    printf("    ");
    for(int i = 1; i <= 5; i++) {
        printf("%4d", i);
    }
    printf("\\n");
    
    for(int i = 1; i <= 5; i++) {
        printf("%4d", i);
        for(int j = 1; j <= 5; j++) {
            printf("%4d", i * j);
        }
        printf("\\n");
    }
    printf("\\n");
    
    // Pattern 4: Number pyramid
    printf("Number Pyramid:\\n");
    for(int i = 1; i <= 5; i++) {
        // Print spaces
        for(int space = 1; space <= 5 - i; space++) {
            printf("  ");
        }
        // Print numbers
        for(int j = 1; j <= i; j++) {
            printf("%d ", j);
        }
        printf("\\n");
    }
    
    return 0;
}`}
            title="Nested For Loop Patterns"
            language="c"
          />
        </div>

        {/* Advanced Applications */}
        <div className="section-block">
          <h2 className="h3 mb-3 fw-bold">Advanced Applications</h2>
          
          <div className="row g-4">
            <div className="col-md-6">
              <CodeBox
                code={`#include <stdio.h>
#include <math.h>

// Prime Number Checker
int is_prime(int n) {
    if(n <= 1) return 0;
    if(n == 2) return 1;
    if(n % 2 == 0) return 0;
    
    for(int i = 3; i <= sqrt(n); i += 2) {
        if(n % i == 0) return 0;
    }
    return 1;
}

int main() {
    // Find primes between 1 and 100
    printf("Prime numbers between 1 and 100:\\n");
    int count = 0;
    
    for(int num = 1; num <= 100; num++) {
        if(is_prime(num)) {
            printf("%3d ", num);
            count++;
            if(count % 10 == 0) printf("\\n");
        }
    }
    printf("\\nTotal: %d prime numbers\\n\\n", count);
    
    // Fibonacci Series
    printf("Fibonacci Series (first 15 terms):\\n");
    int t1 = 0, t2 = 1, nextTerm;
    
    printf("%d, %d", t1, t2);
    
    for(int i = 3; i <= 15; i++) {
        nextTerm = t1 + t2;
        printf(", %d", nextTerm);
        t1 = t2;
        t2 = nextTerm;
    }
    printf("\\n\\n");
    
    // Array Operations
    printf("Array Operations:\\n");
    int arr[10];
    
    // Initialize array with squares
    for(int i = 0; i < 10; i++) {
        arr[i] = (i + 1) * (i + 1);
    }
    
    // Print array
    printf("Squares: ");
    for(int i = 0; i < 10; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    
    // Find sum and average
    int sum = 0;
    for(int i = 0; i < 10; i++) {
        sum += arr[i];
    }
    printf("Sum: %d, Average: %.2f\\n", sum, sum / 10.0);
    
    return 0;
}`}
                title="Mathematical Operations"
                language="c"
                showExpand={false}
              />
            </div>
            
            <div className="col-md-6">
              <CodeBox
                code={`#include <stdio.h>
#include <string.h>

// String Operations
int main() {
    char str[100];
    
    printf("Enter a string: ");
    fgets(str, 100, stdin);
    str[strcspn(str, "\\n")] = 0;  // Remove newline
    
    // Count characters
    int length = 0;
    for(int i = 0; str[i] != '\\0'; i++) {
        length++;
    }
    printf("Length: %d characters\\n", length);
    
    // Reverse string
    printf("Reversed string: ");
    for(int i = length - 1; i >= 0; i--) {
        printf("%c", str[i]);
    }
    printf("\\n");
    
    // Count vowels
    int vowels = 0;
    for(int i = 0; i < length; i++) {
        char ch = tolower(str[i]);
        if(ch == 'a' || ch == 'e' || ch == 'i' || 
           ch == 'o' || ch == 'u') {
            vowels++;
        }
    }
    printf("Vowels: %d\\n\\n", vowels);
    
    // Matrix Operations
    printf("Matrix Addition:\\n");
    int matrix1[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    int matrix2[3][3] = {{9, 8, 7}, {6, 5, 4}, {3, 2, 1}};
    int result[3][3];
    
    // Add matrices
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    
    // Print result
    printf("Result Matrix:\\n");
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            printf("%3d ", result[i][j]);
        }
        printf("\\n");
    }
    
    // Search in array
    printf("\\nSearch Example:\\n");
    int numbers[] = {10, 23, 45, 67, 89, 12, 34, 56, 78, 90};
    int search_num, found = 0;
    
    printf("Enter number to search: ");
    scanf("%d", &search_num);
    
    for(int i = 0; i < 10; i++) {
        if(numbers[i] == search_num) {
            printf("Found at position %d\\n", i + 1);
            found = 1;
            break;
        }
    }
    
    if(!found) {
        printf("Number not found!\\n");
    }
    
    return 0;
}`}
                title="String & Array Operations"
                language="c"
                showExpand={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}