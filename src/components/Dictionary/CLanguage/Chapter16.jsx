// src/components/Dictionary/CLanguage/Chapter16.jsx
import React from 'react';
import CodeBox from '../CodeBox/CodeBox';

export default function Chapter16() {
  return (
    <div className="chapter-content">
      <div className="chapter-header mb-4">
        <h1 className="h2 fw-bold">C BREAK & CONTINUE</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">C Tutorial</a></li>
            <li className="breadcrumb-item active">Break & Continue</li>
          </ol>
        </nav>
      </div>

      <div className="content-section">
        {/* Break Statement */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">break Statement</h2>
          
          <div className="definition-card mb-4">
            <p className="lead">
              The <strong>break statement</strong> terminates the loop or switch statement and 
              transfers execution to the statement immediately following the loop or switch.
            </p>
          </div>
          
          <CodeBox
            code={`#include <stdio.h>

int main() {
    // Example 1: break in for loop
    printf("Break in for loop:\\n");
    for(int i = 1; i <= 10; i++) {
        if(i == 5) {
            printf("Breaking at i = %d\\n", i);
            break;  // Exit loop when i becomes 5
        }
        printf("%d ", i);
    }
    printf("\\nLoop ended.\\n\\n");
    
    // Example 2: break in while loop
    printf("Break in while loop:\\n");
    int num = 0;
    while(num < 10) {
        num++;
        if(num == 7) {
            printf("Breaking at %d\\n", num);
            break;
        }
        printf("%d ", num);
    }
    printf("\\n\\n");
    
    // Example 3: break in nested loops
    printf("Break in nested loops:\\n");
    for(int i = 1; i <= 3; i++) {
        printf("Outer loop i = %d\\n", i);
        for(int j = 1; j <= 3; j++) {
            if(j == 2) {
                printf("  Breaking inner loop at j = %d\\n", j);
                break;  // Only breaks inner loop
            }
            printf("  Inner loop j = %d\\n", j);
        }
    }
    printf("\\n");
    
    // Example 4: break in switch
    printf("Break in switch statement:\\n");
    int choice = 2;
    
    switch(choice) {
        case 1:
            printf("Case 1 selected\\n");
            break;
        case 2:
            printf("Case 2 selected\\n");
            break;  // Without break, would fall through to case 3
        case 3:
            printf("Case 3 selected\\n");
            break;
        default:
            printf("Invalid choice\\n");
    }
    
    return 0;
}`}
            title="break Statement Examples"
            language="c"
          />
        </div>

        {/* Continue Statement */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">continue Statement</h2>
          
          <div className="definition-card mb-4">
            <p className="lead">
              The <strong>continue statement</strong> skips the current iteration of a loop and 
              continues with the next iteration. Unlike break, it doesn't terminate the loop.
            </p>
          </div>
          
          <CodeBox
            code={`#include <stdio.h>

int main() {
    // Example 1: Skip even numbers
    printf("Skip even numbers (print only odd):\\n");
    for(int i = 1; i <= 10; i++) {
        if(i % 2 == 0) {
            continue;  // Skip even numbers
        }
        printf("%d ", i);
    }
    printf("\\n\\n");
    
    // Example 2: Skip specific value
    printf("Skip number 5:\\n");
    for(int i = 1; i <= 10; i++) {
        if(i == 5) {
            continue;  // Skip when i is 5
        }
        printf("%d ", i);
    }
    printf("\\n\\n");
    
    // Example 3: Input validation with continue
    printf("Input positive numbers only (negative to stop):\\n");
    int sum = 0, count = 0, input;
    
    while(1) {
        printf("Enter number: ");
        scanf("%d", &input);
        
        if(input < 0) {
            printf("Negative number entered. Stopping.\\n");
            break;
        }
        
        if(input == 0) {
            printf("Zero ignored.\\n");
            continue;  // Skip zero, continue loop
        }
        
        sum += input;
        count++;
        printf("Added %d. Current sum: %d\\n", input, sum);
    }
    
    if(count > 0) {
        printf("\\nTotal numbers: %d\\n", count);
        printf("Sum: %d\\n", sum);
        printf("Average: %.2f\\n", (float)sum / count);
    }
    
    // Example 4: Skip vowels in string
    printf("\\nSkip vowels in string:\\n");
    char str[] = "Hello World";
    printf("Original: %s\\n", str);
    printf("Without vowels: ");
    
    for(int i = 0; str[i] != '\\0'; i++) {
        char ch = tolower(str[i]);
        if(ch == 'a' || ch == 'e' || ch == 'i' || 
           ch == 'o' || ch == 'u' || ch == ' ') {
            continue;  // Skip vowels and spaces
        }
        printf("%c", str[i]);
    }
    printf("\\n");
    
    return 0;
}`}
            title="continue Statement Examples"
            language="c"
          />
        </div>

        {/* Break vs Continue Comparison */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">break vs continue Comparison</h2>
          
          <div className="comparison-table">
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Aspect</th>
                  <th>break Statement</th>
                  <th>continue Statement</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: 'Function', break: 'Terminates loop/switch', continue: 'Skips current iteration' },
                  { aspect: 'Control', break: 'Jumps out of loop', continue: 'Jumps to next iteration' },
                  { aspect: 'Usage', break: 'When condition met, exit', continue: 'When condition met, skip' },
                  { aspect: 'Loop', break: 'Loop ends completely', continue: 'Loop continues with next value' },
                  { aspect: 'Switch', break: 'Required to exit case', continue: 'Not used in switch' }
                ].map((item, idx) => (
                  <tr key={idx}>
                    <td><strong>{item.aspect}</strong></td>
                    <td>{item.break}</td>
                    <td>{item.continue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Practical Applications */}
        <div className="section-block">
          <h2 className="h3 mb-3 fw-bold">Practical Applications</h2>
          
          <div className="row g-4">
            <div className="col-md-6">
              <CodeBox
                code={`#include <stdio.h>

// Search Algorithm with break
int linear_search(int arr[], int size, int target) {
    for(int i = 0; i < size; i++) {
        if(arr[i] == target) {
            return i;  // Found, return position
        }
    }
    return -1;  // Not found
}

// Skip invalid data with continue
void process_data() {
    int data[] = {10, -5, 20, 0, 30, -8, 40};
    int size = 7;
    int sum = 0, valid_count = 0;
    
    printf("Processing data:\\n");
    
    for(int i = 0; i < size; i++) {
        // Skip negative numbers
        if(data[i] < 0) {
            printf("Skipping negative: %d\\n", data[i]);
            continue;
        }
        
        // Skip zero
        if(data[i] == 0) {
            printf("Skipping zero\\n");
            continue;
        }
        
        // Process valid data
        sum += data[i];
        valid_count++;
        printf("Added: %d\\n", data[i]);
    }
    
    printf("\\nValid numbers: %d\\n", valid_count);
    printf("Sum: %d\\n", sum);
    if(valid_count > 0) {
        printf("Average: %.2f\\n", (float)sum / valid_count);
    }
}

int main() {
    // Search example
    int numbers[] = {23, 45, 67, 12, 89, 34, 56, 78};
    int target = 89;
    int position = linear_search(numbers, 8, target);
    
    if(position != -1) {
        printf("Found %d at position %d\\n\\n", target, position + 1);
    } else {
        printf("%d not found in array\\n\\n", target);
    }
    
    // Data processing
    process_data();
    
    // Menu system with break
    printf("\\n=== Menu System ===\\n");
    int choice;
    
    while(1) {
        printf("\\n1. Option 1\\n");
        printf("2. Option 2\\n");
        printf("3. Exit\\n");
        printf("Enter choice: ");
        scanf("%d", &choice);
        
        switch(choice) {
            case 1:
                printf("Option 1 selected\\n");
                // Do something
                break;
            case 2:
                printf("Option 2 selected\\n");
                // Do something
                break;
            case 3:
                printf("Exiting program...\\n");
                break;  // Break out of switch
            default:
                printf("Invalid choice! Try again.\\n");
                continue;  // Skip rest, show menu again
        }
        
        if(choice == 3) {
            break;  // Break out of while loop to exit program
        }
    }
    
    return 0;
}`}
                title="Search & Menu Systems"
                language="c"
                showExpand={false}
              />
            </div>
            
            <div className="col-md-6">
              <CodeBox
                code={`#include <stdio.h>
#include <stdbool.h>

// Prime number checker with break optimization
bool is_prime_optimized(int n) {
    if(n <= 1) return false;
    if(n == 2) return true;
    if(n % 2 == 0) return false;
    
    for(int i = 3; i * i <= n; i += 2) {
        if(n % i == 0) {
            return false;  // Found divisor, not prime
        }
    }
    return true;
}

// Find first composite number with continue
void find_composite() {
    printf("Finding first composite number:\\n");
    
    for(int num = 4; num <= 20; num++) {
        bool is_prime = true;
        
        // Check if prime
        for(int i = 2; i <= num/2; i++) {
            if(num % i == 0) {
                is_prime = false;
                break;  // Found divisor, not prime
            }
        }
        
        if(is_prime) {
            continue;  // Skip prime numbers
        }
        
        printf("First composite number: %d\\n", num);
        printf("It's divisible by: ");
        
        // Find divisors
        for(int i = 2; i < num; i++) {
            if(num % i == 0) {
                printf("%d ", i);
            }
        }
        printf("\\n");
        break;  // Found first composite, exit loop
    }
}

// Data filtering with break and continue
void filter_data() {
    int temperatures[] = {25, 30, 35, 40, 45, 50, 55, 60};
    int size = 8;
    
    printf("Temperature Analysis:\\n");
    
    for(int i = 0; i < size; i++) {
        int temp = temperatures[i];
        
        // Skip normal temperatures
        if(temp >= 20 && temp <= 30) {
            printf("%d°C: Normal (skipped)\\n", temp);
            continue;
        }
        
        // Alert for extreme temperatures
        if(temp > 45) {
            printf("%d°C: ⚠️  Extreme heat warning!\\n", temp);
            printf("Stopping analysis due to extreme temperature\\n");
            break;  // Stop checking further
        }
        
        // Process other temperatures
        if(temp < 20) {
            printf("%d°C: ❄️  Cold\\n", temp);
        } else {
            printf("%d°C: 🔥 Hot\\n", temp);
        }
    }
}

int main() {
    // Prime checking
    int num = 29;
    printf("Is %d prime? %s\\n\\n", num, 
           is_prime_optimized(num) ? "Yes" : "No");
    
    // Find composite
    find_composite();
    printf("\\n");
    
    // Filter data
    filter_data();
    printf("\\n");
    
    // Skip specific patterns
    printf("Skip numbers containing 3 or 7:\\n");
    for(int i = 1; i <= 50; i++) {
        int temp = i;
        bool skip = false;
        
        // Check each digit
        while(temp > 0) {
            int digit = temp % 10;
            if(digit == 3 || digit == 7) {
                skip = true;
                break;  // Found forbidden digit
            }
            temp /= 10;
        }
        
        if(skip) {
            continue;  // Skip this number
        }
        
        printf("%d ", i);
    }
    printf("\\n");
    
    return 0;
}`}
                title="Optimized Algorithms"
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