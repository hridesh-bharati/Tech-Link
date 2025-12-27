// src/components/Dictionary/CLanguage/Chapter12.jsx
import React from "react";
import CodeBox from "../CodeBox/CodeBox";

export default function Chapter12() {
  return (
    <div className="chapter-content">

      {/* Header */}
      <div className="chapter-header mb-4">
        <h1 className="h2 fw-bold text-primary">C IF...ELSE Tutorial</h1>
        <p className="text-muted">
          Conditional statements help your program make decisions.  
          <strong>if, if-else, nested if-else,</strong> and the <strong>ternary operator</strong> allow your program to react dynamically to different conditions.
        </p>
      </div>

      <div className="content-section">

        {/* ================= SIMPLE IF ================= */}
        <div className="section-block mb-5">
          <h2 className="h3 fw-bold mb-3 text-success">1. Simple if Statement</h2>
          <div className="alert alert-light">
            <strong>Syntax:</strong><br/>
            <code>if(condition) { '{' } <br/> &nbsp;&nbsp; // statements <br/> {'}' }</code>
          </div>
          <div className="alert alert-light">
            <strong>Uses:</strong><br/>
            • Execute a block of code only when a condition is true.<br/>
            • Check simple conditions such as age verification, login status, temperature alerts.
          </div>
          <div className="alert alert-light">
            <strong>Example:</strong>
          </div>

          <CodeBox
            title="Simple if Example"
            language="c"
            executable={true}
            code={`#include <stdio.h>

int main() {
    int age = 18;

    // Simple if
    if(age >= 18) {
        printf("You are an adult.\\n");
        printf("You can vote.\\n");
    }

    int temperature = 30;
    if(temperature > 25)
        printf("It's hot today!\\n");

    int is_logged_in = 1;
    if(is_logged_in)
        printf("Welcome back, User!\\n");

    return 0;
}`}
          />
        </div>

        {/* ================= IF ELSE ================= */}
        <div className="section-block mb-5">
          <h2 className="h3 fw-bold mb-3 text-warning">2. if...else Statement</h2>
          <div className="alert alert-light">
            <strong>Syntax:</strong><br/>
            <code>if(condition) { '{' } <br/> &nbsp;&nbsp; // statements if true <br/> {'}'} else { '{' } <br/> &nbsp;&nbsp; // statements if false <br/> {'}' }</code>
          </div>
          <div className="alert alert-light">
            <strong>Uses:</strong><br/>
            • Handle two alternatives: one block executes if true, another if false.<br/>
            • Common for grade calculation, even/odd checks, age verification.
          </div>
          <div className="alert alert-light">
            <strong>Example:</strong>
          </div>

          <CodeBox
            title="if...else Example"
            language="c"
            executable={true}
            code={`#include <stdio.h>

int main() {
    int number = 10;

    if(number % 2 == 0)
        printf("%d is even.\\n", number);
    else
        printf("%d is odd.\\n", number);

    int marks = 75;
    if(marks >= 90)
        printf("Grade: A\\n");
    else if(marks >= 75)
        printf("Grade: B\\n");
    else if(marks >= 50)
        printf("Grade: C\\n");
    else
        printf("Grade: F\\n");

    // Nested if-else example
    int a = 10, b = 20, c = 15;
    if(a > b) {
        if(a > c)
            printf("%d is largest\\n", a);
        else
            printf("%d is largest\\n", c);
    } else {
        if(b > c)
            printf("%d is largest\\n", b);
        else
            printf("%d is largest\\n", c);
    }

    return 0;
}`}
          />
        </div>

        {/* ================= TERNARY OPERATOR ================= */}
        <div className="section-block mb-5">
          <h2 className="h3 fw-bold mb-3 text-info">3. Ternary Operator (?:)</h2>
          <div className="alert alert-light">
            <strong>Syntax:</strong><br/>
            <code>condition ? expression_if_true : expression_if_false;</code>
          </div>
          <div className="alert alert-light">
            <strong>Uses:</strong><br/>
            • Shorthand for simple if...else statements.<br/>
            • Assign values or print results based on conditions in a single line.
          </div>
          <div className="alert alert-light">
            <strong>Example:</strong>
          </div>

          <CodeBox
            title="Ternary Operator Example"
            language="c"
            executable={true}
            code={`#include <stdio.h>

int main() {
    int a = 10, b = 20;
    int max = (a > b) ? a : b;
    printf("Maximum: %d\\n", max);

    int num = 15;
    char* result = (num % 2 == 0) ? "Even" : "Odd";
    printf("%d is %s\\n", num, result);

    int age = 25;
    char* category = (age < 13) ? "Child" : 
                     (age < 20) ? "Teenager" : 
                     (age < 60) ? "Adult" : "Senior";
    printf("Age %d: %s\\n", age, category);

    return 0;
}`}
          />
        </div>

        {/* ================= PRACTICAL EXAMPLES ================= */}
        <div className="section-block mb-5">
          <h2 className="h3 fw-bold mb-3 text-danger">4. Practical Real-world Examples</h2>
          <p>Interactive examples like ATM, weather alerts, student grading, and e-commerce discounts.</p>

          <div className="row g-4">
            <div className="col-md-6">
              <CodeBox
                title="ATM & Weather Systems"
                language="c"
                executable={true}
                code={`#include <stdio.h>

void atm_system() {
    float balance = 5000, withdraw;
    printf("Enter amount to withdraw: ");
    scanf("%f", &withdraw);

    if(withdraw <= 0)
        printf("Invalid amount!\\n");
    else if(withdraw > balance)
        printf("Insufficient funds! Balance: $%.2f\\n", balance);
    else if(withdraw > 10000)
        printf("Maximum limit $10,000\\n");
    else {
        balance -= withdraw;
        printf("Withdrawal successful! New balance: $%.2f\\n", balance);
    }
}

void temperature_check() {
    float temp;
    printf("Enter temperature: ");
    scanf("%f", &temp);

    if(temp < 0) printf("❄️ Freezing!\\n");
    else if(temp < 10) printf("🥶 Very cold\\n");
    else if(temp < 20) printf("😊 Cool\\n");
    else if(temp < 30) printf("😎 Pleasant\\n");
    else if(temp < 40) printf("🔥 Hot\\n");
    else printf("☠️ Extreme heat!\\n");
}

int main() {
    atm_system();
    printf("\\n");
    temperature_check();
    return 0;
}`}
              />
            </div>

            <div className="col-md-6">
              <CodeBox
                title="Student & E-commerce Systems"
                language="c"
                executable={true}
                code={`#include <stdio.h>
#include <string.h>

void grade_student() {
    char name[50]; int marks;
    printf("Enter student name: "); fgets(name, 50, stdin);
    name[strcspn(name,"\\n")]=0;
    printf("Enter marks: "); scanf("%d",&marks);

    if(marks >= 90) printf("Grade: A+ Excellent!\\n");
    else if(marks >= 80) printf("Grade: A Very Good\\n");
    else if(marks >= 70) printf("Grade: B Good\\n");
    else if(marks >= 60) printf("Grade: C Average\\n");
    else if(marks >= 33) printf("Grade: D Pass\\n");
    else printf("Grade: F Fail\\n");
}

void calculate_discount() {
    float total; int level;
    printf("Enter cart total: "); scanf("%f",&total);
    printf("Membership (1=Basic,2=Premium,3=VIP): "); scanf("%d",&level);

    float discount = 0;
    if(level==3 && total>1000) discount=total*0.25;
    else if(level==2 && total>500) discount=total*0.15;
    else if(total>300) discount=total*0.10;
    else if(level==1) discount=total*0.05;

    printf("Final Amount: $%.2f\\n", total-discount);
}

int main() {
    grade_student();
    printf("\\n");
    calculate_discount();
    return 0;
}`}
              />
            </div>
          </div>
        </div>

        {/* ================= SUMMARY ================= */}
        <div className="alert alert-success">
          <strong>🎓 Summary:</strong><br/>
          • <code>if</code>: executes when condition is true.<br/>
          • <code>if...else</code>: provides alternative paths.<br/>
          • <code>nested if-else</code>: handles multiple conditions.<br/>
          • <code>?:</code> ternary operator: shorthand for simple if-else.<br/>
          • Real-world use: banking, grading, weather alerts, e-commerce.
        </div>

      </div>
    </div>
  );
}
