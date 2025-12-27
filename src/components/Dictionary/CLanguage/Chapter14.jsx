// src/components/Dictionary/CLanguage/Chapter14.jsx
import React from 'react';
import CodeBox from '../CodeBox/CodeBox';

export default function Chapter14() {
  return (
    <div className="chapter-content">
      <div className="chapter-header mb-4">
        <h1 className="h2 fw-bold">C WHILE LOOP</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">C Tutorial</a></li>
            <li className="breadcrumb-item active">While Loop</li>
          </ol>
        </nav>
      </div>

      <div className="content-section">
        {/* Definition */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">Definition</h2>
          <div className="definition-card">
            <p className="lead">
              The <strong>while loop</strong> is an entry-controlled loop that repeatedly executes 
              a block of code as long as a given condition is true. It checks the condition 
              <strong> before</strong> executing the loop body.
            </p>
          </div>
        </div>

        {/* Syntax */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">Syntax</h2>
          
          <CodeBox
            code={`while(condition) {
    // Statements to execute
    // Loop body
}`}
            title="While Loop Syntax"
            language="c"
          />
          
          <div className="flow-diagram mt-4">
            <div className="text-center">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <div className="step-box">Start</div>
                <div className="arrow">→</div>
                <div className="step-box">Check Condition</div>
              </div>
              
              <div className="d-flex justify-content-center">
                <div className="arrow-down">↓</div>
              </div>
              
              <div className="d-flex justify-content-center">
                <div className="condition-box">
                  Condition True?<br/>
                  <small>Yes → Execute Body → Check Again</small><br/>
                  <small>No → Exit Loop</small>
                </div>
              </div>
              
              <div className="d-flex justify-content-center">
                <div className="arrow-down">↓</div>
              </div>
              
              <div className="step-box">Continue Program</div>
            </div>
          </div>
        </div>

        {/* Basic Examples */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">Basic Examples</h2>
          
          <CodeBox
            code={`#include <stdio.h>

int main() {
    // Example 1: Print numbers 1 to 10
    printf("Numbers 1 to 10:\\n");
    int i = 1;
    while(i <= 10) {
        printf("%d ", i);
        i++;  // Increment counter
    }
    printf("\\n\\n");
    
    // Example 2: Countdown
    printf("Countdown:\\n");
    int count = 10;
    while(count > 0) {
        printf("%d... ", count);
        count--;
    }
    printf("Lift off!\\n\\n");
    
    // Example 3: Sum of numbers
    int n = 5;
    int sum = 0;
    int j = 1;
    
    while(j <= n) {
        sum += j;  // Add j to sum
        j++;
    }
    printf("Sum of first %d numbers = %d\\n\\n", n, sum);
    
    // Example 4: Infinite loop prevention
    int x = 0;
    while(x < 5) {
        printf("x = %d\\n", x);
        x++;  // MUST increment to avoid infinite loop
    }
    
    return 0;
}`}
            title="Basic While Loop Examples"
            language="c"
          />
        </div>

        {/* Infinite Loops */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">Infinite Loops & Prevention</h2>
          
          <CodeBox
            code={`#include <stdio.h>

int main() {
    // DANGEROUS: Infinite loop (never ends)
    // Uncomment to see (will freeze program)
    /*
    while(1) {
        printf("This runs forever!\\n");
    }
    */
    
    // Correct way to create controlled infinite loop
    int running = 1;
    int counter = 0;
    
    while(running) {
        printf("Loop iteration: %d\\n", counter);
        counter++;
        
        // Exit condition
        if(counter >= 5) {
            running = 0;  // Set to false
            printf("Loop terminated after %d iterations.\\n", counter);
        }
    }
    
    // Common infinite loop mistakes
    printf("\\nCommon Mistakes:\\n");
    
    // Mistake 1: Forgetting increment
    int a = 0;
    while(a < 5) {
        printf("a = %d\\n", a);
        // Missing: a++;
        break;  // Added break to prevent actual infinite loop
    }
    
    // Mistake 2: Wrong condition
    int b = 10;
    while(b != 0) {
        printf("b = %d\\n", b);
        b--;  // This will work
        // But if condition was (b == 0), would be infinite
    }
    
    return 0;
}`}
            title="Infinite Loop Prevention"
            language="c"
          />
        </div>

        {/* Practical Applications */}
        <div className="section-block">
          <h2 className="h3 mb-3 fw-bold">Practical Applications</h2>
          
          <div className="row g-4">
            <div className="col-md-6">
              <CodeBox
                code={`#include <stdio.h>

// User Input Validation
int main() {
    int age;
    
    printf("Enter your age (1-120): ");
    scanf("%d", &age);
    
    // Validate input
    while(age < 1 || age > 120) {
        printf("Invalid age! Please enter between 1 and 120: ");
        scanf("%d", &age);
    }
    
    printf("Valid age entered: %d\\n\\n", age);
    
    // Password Check System
    char password[20];
    int attempts = 0;
    int max_attempts = 3;
    
    printf("Enter password (try 'secret'): ");
    scanf("%s", password);
    
    while(strcmp(password, "secret") != 0 && attempts < max_attempts) {
        attempts++;
        printf("Wrong password! Attempts left: %d\\n", max_attempts - attempts);
        
        if(attempts < max_attempts) {
            printf("Enter password again: ");
            scanf("%s", password);
        }
    }
    
    if(strcmp(password, "secret") == 0) {
        printf("Access granted!\\n");
    } else {
        printf("Maximum attempts reached. Account locked.\\n");
    }
    
    return 0;
}`}
                title="Input Validation System"
                language="c"
                showExpand={false}
              />
            </div>
            
            <div className="col-md-6">
              <CodeBox
                code={`#include <stdio.h>

// Number Guessing Game
int main() {
    int secret_number = 42;
    int guess;
    int attempts = 0;
    
    printf("🎮 Number Guessing Game 🎮\\n");
    printf("Guess the number between 1 and 100\\n");
    
    while(1) {  // Infinite loop until break
        printf("Enter your guess: ");
        scanf("%d", &guess);
        attempts++;
        
        if(guess == secret_number) {
            printf("🎉 Congratulations! You guessed it in %d attempts.\\n", attempts);
            break;  // Exit loop
        }
        else if(guess < secret_number) {
            printf("📈 Too low! Try higher.\\n");
        }
        else {
            printf("📉 Too high! Try lower.\\n");
        }
        
        // Hint after 5 attempts
        if(attempts == 5) {
            printf("💡 Hint: The number is between 40 and 50\\n");
        }
    }
    
    // Factorial Calculation
    printf("\\n🔢 Factorial Calculator\\n");
    int num;
    long long factorial = 1;
    
    printf("Enter a positive integer: ");
    scanf("%d", &num);
    
    if(num < 0) {
        printf("Error! Factorial doesn't exist for negative numbers.\\n");
    } else {
        int temp = num;
        while(temp > 1) {
            factorial *= temp;
            temp--;
        }
        printf("Factorial of %d = %lld\\n", num, factorial);
    }
    
    return 0;
}`}
                title="Game & Calculations"
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