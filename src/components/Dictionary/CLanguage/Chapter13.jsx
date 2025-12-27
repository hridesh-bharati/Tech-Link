// src/components/Dictionary/CLanguage/Chapter13.jsx
import React from 'react';
import CodeBox from '../CodeBox/CodeBox';

export default function Chapter13() {
  return (
    <div className="chapter-content">
      <div className="chapter-header mb-4">
        <h1 className="h2 fw-bold">C SWITCH STATEMENT</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">C Tutorial</a></li>
            <li className="breadcrumb-item active">Switch Statement</li>
          </ol>
        </nav>
      </div>

      <div className="content-section">
        {/* Definition */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">Definition</h2>
          <div className="definition-card">
            <p className="lead">
              The <strong>switch statement</strong> is a multi-way branch statement that allows a variable 
              to be tested for equality against a list of values. It provides an alternative to long 
              if-else-if chains when comparing the same variable against multiple constant values.
            </p>
          </div>
        </div>

        {/* Syntax */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">Syntax</h2>
          
          <CodeBox
            code={`switch(expression) {
    case constant1:
        // statements
        break;
        
    case constant2:
        // statements
        break;
        
    case constant3:
        // statements
        break;
        
    default:
        // default statements
}`}
            title="Switch Statement Syntax"
            language="c"
          />
          
          <div className="syntax-explanation mt-3">
            <h5>Syntax Components:</h5>
            <ul>
              <li><strong>switch(expression)</strong> - Expression that evaluates to an integer or character</li>
              <li><strong>case constant:</strong> - Constant value to compare with expression</li>
              <li><strong>break;</strong> - Terminates the switch statement</li>
              <li><strong>default:</strong> - Optional block that executes if no case matches</li>
            </ul>
          </div>
        </div>

        {/* Basic Examples */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">Basic Examples</h2>
          
          <CodeBox
            code={`#include <stdio.h>

int main() {
    int day = 3;
    
    switch(day) {
        case 1:
            printf("Monday\\n");
            break;
        case 2:
            printf("Tuesday\\n");
            break;
        case 3:
            printf("Wednesday\\n");
            break;
        case 4:
            printf("Thursday\\n");
            break;
        case 5:
            printf("Friday\\n");
            break;
        case 6:
            printf("Saturday\\n");
            break;
        case 7:
            printf("Sunday\\n");
            break;
        default:
            printf("Invalid day!\\n");
    }
    
    return 0;
}`}
            title="Day of Week Example"
            language="c"
          />
          
          <div className="note-card mt-3">
            <h5>📝 Important Notes:</h5>
            <ul>
              <li>Switch expression must be <strong>integer or character</strong> type</li>
              <li>Case values must be <strong>constants</strong> (not variables)</li>
              <li><code>break</code> is crucial to prevent "fall through"</li>
              <li><code>default</code> case is optional but recommended</li>
            </ul>
          </div>
        </div>

        {/* Switch vs If-Else */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">Switch vs If-Else Comparison</h2>
          
          <div className="comparison-table">
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Feature</th>
                  <th>Switch Statement</th>
                  <th>If-Else Statement</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Expression Type', switch: 'Integer/Character only', ifelse: 'Any expression' },
                  { feature: 'Equality Test', switch: 'Only equality (==)', ifelse: 'Any relational operator' },
                  { feature: 'Multiple Values', switch: 'Yes (case labels)', ifelse: 'No (nested if)' },
                  { feature: 'Readability', switch: 'Better for many values', ifelse: 'Better for conditions' },
                  { feature: 'Performance', switch: 'Faster (jump table)', ifelse: 'Slower (sequential)' }
                ].map((item, idx) => (
                  <tr key={idx}>
                    <td><strong>{item.feature}</strong></td>
                    <td>{item.switch}</td>
                    <td>{item.ifelse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Advanced Examples */}
        <div className="section-block">
          <h2 className="h3 mb-3 fw-bold">Advanced Examples</h2>
          
          <div className="row g-4">
            <div className="col-md-6">
              <CodeBox
                code={`#include <stdio.h>

// Calculator using switch
int main() {
    char operator;
    double num1, num2, result;
    
    printf("Enter operator (+, -, *, /): ");
    scanf("%c", &operator);
    
    printf("Enter two numbers: ");
    scanf("%lf %lf", &num1, &num2);
    
    switch(operator) {
        case '+':
            result = num1 + num2;
            printf("%.2lf + %.2lf = %.2lf\\n", num1, num2, result);
            break;
            
        case '-':
            result = num1 - num2;
            printf("%.2lf - %.2lf = %.2lf\\n", num1, num2, result);
            break;
            
        case '*':
            result = num1 * num2;
            printf("%.2lf * %.2lf = %.2lf\\n", num1, num2, result);
            break;
            
        case '/':
            if(num2 != 0) {
                result = num1 / num2;
                printf("%.2lf / %.2lf = %.2lf\\n", num1, num2, result);
            } else {
                printf("Error! Division by zero.\\n");
            }
            break;
            
        default:
            printf("Error! Invalid operator.\\n");
    }
    
    return 0;
}`}
                title="Calculator Program"
                language="c"
                showExpand={false}
              />
            </div>
            
            <div className="col-md-6">
              <CodeBox
                code={`#include <stdio.h>
#include <ctype.h>

// Grade system with fall-through
int main() {
    char grade;
    
    printf("Enter grade (A, B, C, D, F): ");
    scanf("%c", &grade);
    grade = toupper(grade);  // Convert to uppercase
    
    printf("Performance: ");
    
    switch(grade) {
        case 'A':
            printf("Excellent! ");
            // Fall through - no break
        case 'B':
            printf("Good! ");
            // Fall through
        case 'C':
            printf("Average. ");
            // Fall through
        case 'D':
            printf("Below average. ");
            break;
        case 'F':
            printf("Failed. Need improvement.");
            break;
        default:
            printf("Invalid grade!");
    }
    
    // Vowel/Consonant check
    printf("\\n\\nEnter a character: ");
    char ch;
    scanf(" %c", &ch);
    
    switch(tolower(ch)) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            printf("'%c' is a vowel.\\n", ch);
            break;
        default:
            if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))
                printf("'%c' is a consonant.\\n", ch);
            else
                printf("'%c' is not a letter.\\n", ch);
    }
    
    return 0;
}`}
                title="Grade System with Fall-through"
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