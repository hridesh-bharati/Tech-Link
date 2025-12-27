// src/components/Dictionary/CLanguage/Chapter19.jsx
import React from 'react';
import CodeBox from '../CodeBox/CodeBox';

export default function Chapter19() {
  return (
    <div className="chapter-content">
      <div className="chapter-header mb-4">
        <h1 className="h2 fw-bold">C USER INPUT</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">C Tutorial</a></li>
            <li className="breadcrumb-item active">User Input</li>
          </ol>
        </nav>
      </div>

      <div className="content-section">
        {/* Definition */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">Definition</h2>
          <div className="definition-card">
            <p className="lead">
              User input allows programs to interact with users by accepting data 
              from keyboard. C provides several functions for reading input, primarily 
              <code> scanf()</code>, <code>getchar()</code>, <code>gets()</code>, and 
              <code> fgets()</code>.
            </p>
          </div>
        </div>

        {/* scanf() Function */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">scanf() Function</h2>
          
          <div className="alert alert-warning">
            <strong>Important:</strong> Always check return value of scanf() to ensure input was successful.
          </div>
          
          <CodeBox
            code={`#include <stdio.h>

int main() {
    // Basic scanf examples
    int age;
    float salary;
    char grade;
    char name[50];
    
    // Reading integer
    printf("Enter your age: ");
    scanf("%d", &age);
    printf("You are %d years old.\\n\\n", age);
    
    // Reading float
    printf("Enter your salary: ");
    scanf("%f", &salary);
    printf("Your salary is: $%.2f\\n\\n", salary);
    
    // Reading character
    printf("Enter your grade (A/B/C): ");
    scanf(" %c", &grade);  // Note space before %c
    printf("Your grade is: %c\\n\\n", grade);
    
    // Reading string (without spaces)
    printf("Enter your first name (no spaces): ");
    scanf("%s", name);
    printf("Hello, %s!\\n\\n", name);
    
    // Reading multiple values
    int num1, num2;
    printf("Enter two numbers: ");
    int items_read = scanf("%d %d", &num1, &num2);
    
    if(items_read == 2) {
        printf("You entered: %d and %d\\n", num1, num2);
        printf("Sum: %d\\n", num1 + num2);
    } else {
        printf("Invalid input! Expected two integers.\\n");
    }
    
    // Clearing input buffer
    printf("\\nEnter a character: ");
    scanf(" %c", &grade);  // Space consumes any leftover newline
    
    printf("Enter a number: ");
    scanf("%d", &age);
    
    return 0;
}`}
            title="Basic scanf() Examples"
            language="c"
          />
        </div>

        {/* fgets() for String Input */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">fgets() for Safe String Input</h2>
          
          <div className="alert alert-danger">
            <strong>Warning:</strong> Never use <code>gets()</code> - it's dangerous and deprecated. Always use <code>fgets()</code>.
          </div>
          
          <CodeBox
            code={`#include <stdio.h>
#include <string.h>

int main() {
    char name[50];
    char city[50];
    
    // Reading string with fgets()
    printf("Enter your full name: ");
    fgets(name, 50, stdin);
    
    // Remove trailing newline character
    name[strcspn(name, "\\n")] = '\\0';
    
    printf("Hello, %s!\\n\\n", name);
    
    // Multiple string inputs
    printf("Enter your city: ");
    fgets(city, 50, stdin);
    city[strcspn(city, "\\n")] = '\\0';
    
    printf("You live in %s.\\n\\n", city);
    
    // Mixed input: number followed by string
    int age;
    char job[50];
    
    printf("Enter your age: ");
    scanf("%d", &age);
    
    // Clear input buffer before reading string
    while(getchar() != '\\n');  // Clear buffer
    
    printf("Enter your job title: ");
    fgets(job, 50, stdin);
    job[strcspn(job, "\\n")] = '\\0';
    
    printf("\\nProfile:\\n");
    printf("Name: %s\\n", name);
    printf("Age: %d\\n", age);
    printf("City: %s\\n", city);
    printf("Job: %s\\n", job);
    
    // Input validation with fgets()
    char input[100];
    int number;
    int valid = 0;
    
    while(!valid) {
        printf("\\nEnter a positive number: ");
        fgets(input, 100, stdin);
        
        // Try to convert string to number
        if(sscanf(input, "%d", &number) == 1 && number > 0) {
            valid = 1;
        } else {
            printf("Invalid input! Please enter a positive integer.\\n");
        }
    }
    
    printf("You entered: %d\\n", number);
    
    return 0;
}`}
            title="Safe String Input with fgets()"
            language="c"
          />
        </div>

        {/* getchar() and putchar() */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">getchar() and putchar()</h2>
          
          <CodeBox
            code={`#include <stdio.h>

int main() {
    // Reading single character
    printf("Enter a character: ");
    char ch = getchar();  // Reads one character
    printf("You entered: ");
    putchar(ch);  // Prints one character
    printf("\\n\\n");
    
    // Clear input buffer
    while(getchar() != '\\n');  // Clear remaining characters
    
    // Reading until newline
    printf("Enter a sentence (press Enter to finish):\\n");
    int char_count = 0;
    
    printf("You typed: ");
    while(1) {
        ch = getchar();
        if(ch == '\\n' || ch == EOF) {
            break;
        }
        putchar(ch);
        char_count++;
    }
    printf("\\nCharacter count: %d\\n\\n", char_count);
    
    // Password input (hide characters)
    char password[50];
    int i = 0;
    
    printf("Enter password (characters will be hidden): ");
    
    while(1) {
        ch = getchar();
        
        if(ch == '\\n' || ch == EOF) {
            password[i] = '\\0';
            break;
        }
        
        if(ch == '\\b' && i > 0) {  // Handle backspace
            i--;
            printf("\\b \\b");  // Erase character
        } else if(i < 49) {
            password[i] = ch;
            i++;
            printf("*");  // Show asterisk instead of character
        }
    }
    
    printf("\\nPassword accepted (length: %d)\\n", i);
    
    // Character by character processing
    printf("\\nEnter text (Ctrl+D or Ctrl+Z to end):\\n");
    int line_count = 0, word_count = 0, char_count2 = 0;
    int in_word = 0;
    
    while((ch = getchar()) != EOF) {
        char_count2++;
        putchar(ch);
        
        if(ch == '\\n') {
            line_count++;
        }
        
        if(ch == ' ' || ch == '\\n' || ch == '\\t') {
            in_word = 0;
        } else if(!in_word) {
            in_word = 1;
            word_count++;
        }
    }
    
    printf("\\n\\nStatistics:\\n");
    printf("Characters: %d\\n", char_count2);
    printf("Words: %d\\n", word_count);
    printf("Lines: %d\\n", line_count);
    
    return 0;
}`}
            title="Character Input/Output"
            language="c"
          />
        </div>

        {/* Input Validation */}
        <div className="section-block">
          <h2 className="h3 mb-3 fw-bold">Input Validation & Error Handling</h2>
          
          <div className="row g-4">
            <div className="col-md-6">
              <CodeBox
                code={`#include <stdio.h>
#include <stdlib.h>

// Validate integer input
int get_valid_int(char *prompt, int min, int max) {
    char input[100];
    int number;
    int valid = 0;
    
    while(!valid) {
        printf("%s", prompt);
        fgets(input, 100, stdin);
        
        // Try to convert
        if(sscanf(input, "%d", &number) != 1) {
            printf("Error: Please enter a valid integer.\\n");
            continue;
        }
        
        // Check range
        if(number < min || number > max) {
            printf("Error: Number must be between %d and %d.\\n", min, max);
            continue;
        }
        
        valid = 1;
    }
    
    return number;
}

// Validate float input
float get_valid_float(char *prompt, float min, float max) {
    char input[100];
    float number;
    int valid = 0;
    
    while(!valid) {
        printf("%s", prompt);
        fgets(input, 100, stdin);
        
        if(sscanf(input, "%f", &number) != 1) {
            printf("Error: Please enter a valid number.\\n");
            continue;
        }
        
        if(number < min || number > max) {
            printf("Error: Number must be between %.2f and %.2f.\\n", min, max);
            continue;
        }
        
        valid = 1;
    }
    
    return number;
}

int main() {
    // Age validation
    int age = get_valid_int("Enter your age (1-120): ", 1, 120);
    printf("Valid age: %d\\n\\n", age);
    
    // Percentage validation
    float percentage = get_valid_float("Enter percentage (0-100): ", 0, 100);
    printf("Valid percentage: %.2f%%\\n\\n", percentage);
    
    // Menu with validation
    int choice;
    do {
        printf("=== Menu ===\\n");
        printf("1. Option 1\\n");
        printf("2. Option 2\\n");
        printf("3. Exit\\n");
        
        choice = get_valid_int("Enter choice (1-3): ", 1, 3);
        
        switch(choice) {
            case 1:
                printf("You selected Option 1\\n\\n");
                break;
            case 2:
                printf("You selected Option 2\\n\\n");
                break;
            case 3:
                printf("Exiting...\\n");
                break;
        }
    } while(choice != 3);
    
    return 0;
}`}
                title="Input Validation Functions"
                language="c"
                showExpand={false}
              />
            </div>
            
            <div className="col-md-6">
              <CodeBox
                code={`#include <stdio.h>
#include <string.h>
#include <ctype.h>

// Validate name (only letters and spaces)
int validate_name(char *name) {
    for(int i = 0; name[i] != '\\0'; i++) {
        if(!isalpha(name[i]) && name[i] != ' ') {
            return 0;  // Invalid character
        }
    }
    return 1;  // Valid
}

// Validate email (basic check)
int validate_email(char *email) {
    int at_count = 0, dot_count = 0;
    int at_position = -1, dot_position = -1;
    
    for(int i = 0; email[i] != '\\0'; i++) {
        if(email[i] == '@') {
            at_count++;
            at_position = i;
        }
        if(email[i] == '.') {
            dot_count++;
            dot_position = i;
        }
    }
    
    // Basic email validation
    return (at_count == 1 && dot_count >= 1 && 
            at_position > 0 && dot_position > at_position + 1);
}

// Validate phone number (10 digits)
int validate_phone(char *phone) {
    int digit_count = 0;
    
    for(int i = 0; phone[i] != '\\0'; i++) {
        if(isdigit(phone[i])) {
            digit_count++;
        } else if(phone[i] != '-' && phone[i] != ' ' && phone[i] != '(' && phone[i] != ')') {
            return 0;  // Invalid character
        }
    }
    
    return (digit_count == 10);  // Must have 10 digits
}

int main() {
    char name[100], email[100], phone[20];
    
    // Get and validate name
    while(1) {
        printf("Enter your full name: ");
        fgets(name, 100, stdin);
        name[strcspn(name, "\\n")] = '\\0';
        
        if(strlen(name) == 0) {
            printf("Name cannot be empty.\\n");
            continue;
        }
        
        if(!validate_name(name)) {
            printf("Name can only contain letters and spaces.\\n");
            continue;
        }
        
        break;
    }
    
    // Get and validate email
    while(1) {
        printf("Enter your email: ");
        fgets(email, 100, stdin);
        email[strcspn(email, "\\n")] = '\\0';
        
        if(!validate_email(email)) {
            printf("Invalid email format.\\n");
            continue;
        }
        
        break;
    }
    
    // Get and validate phone
    while(1) {
        printf("Enter your phone number: ");
        fgets(phone, 20, stdin);
        phone[strcspn(phone, "\\n")] = '\\0';
        
        if(!validate_phone(phone)) {
            printf("Invalid phone number. Must be 10 digits.\\n");
            continue;
        }
        
        break;
    }
    
    // Display validated information
    printf("\\n=== Registration Successful ===\\n");
    printf("Name: %s\\n", name);
    printf("Email: %s\\n", email);
    printf("Phone: %s\\n", phone);
    
    return 0;
}`}
                title="Form Validation"
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