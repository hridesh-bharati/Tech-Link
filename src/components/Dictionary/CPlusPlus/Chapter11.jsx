// src/components/Dictionary/CPlusPlus/Chapter11.jsx
import React from "react";
import CodeBox from "../CodeBox/CodeBox";

export default function CppChapter11() {
  return (
    <div className="chapter-content container-fluid px-3 pb-5">
      {/* Header */}
      <div className="chapter-header mt-2 mb-4 text-center">
        <h1 className="h2 fw-bold">📘 Chapter 11: C++ Strings</h1>
        <p className="text-white">
          Learn string basics: concatenation, length, access, and input in C++
        </p>
      </div>

      {/* Hero Card */}
      <div className="card shadow-lg mb-4" style={{ borderLeft: "5px solid #6f42c1" }}>
        <div
          className="card-body text-white p-4"
          style={{ background: "linear-gradient(135deg,#6f42c1,#8a63d2)" }}
        >
          <h2 className="fw-bold">Strings in C++</h2>
          <p className="mb-0">
            <b>Strings</b> are used to store and manipulate text in C++ programs. 
            They are essential for user interaction and data processing.
          </p>
        </div>
      </div>

      {/* Section 1: Strings Intro */}
      <section className="mb-5">
        <h3 className="fw-bold text-primary">🎯 1. Strings Introduction</h3>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>📝 What is a String?</h5>
                <p>
                  A <b>string</b> is a sequence of characters (letters, numbers, symbols) 
                  used to represent text. In C++, strings can be created in two ways:
                </p>
                <ul>
                  <li><b>C-style strings:</b> Character arrays (from C language)</li>
                  <li><b>C++ string class:</b> <code>std::string</code> (modern C++)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <CodeBox
              title="Creating Strings in C++"
              language="cpp"
              code={`// Method 1: C-style string (character array)
#include <iostream>
using namespace std;

int main() {
    char cStyle[] = "Hello C";  // C-style string
    
    // Method 2: C++ string class (RECOMMENDED)
    #include <string>
    string cppStyle = "Hello C++";  // C++ string
    
    cout << cStyle << endl;
    cout << cppStyle << endl;
    
    return 0;
}`}
            />
          </div>
        </div>
        
        <div className="mt-4">
          <CodeBox
            title="Basic String Example Program"
            language="cpp"
            executable={true}
            code={`#include <iostream>
#include <string>  // Required for C++ strings
using namespace std;

int main() {
    // Creating different strings
    string greeting = "Hello";
    string name = "John";
    string message = "Welcome to C++ programming";
    
    // Displaying strings
    cout << greeting << endl;
    cout << name << endl;
    cout << message << endl;
    
    // String with special characters
    string special = "C++ is awesome! \\nLet's learn together.";
    cout << special << endl;
    
    // Empty string
    string emptyString = "";
    cout << "Empty string: '" << emptyString << "'" << endl;
    
    // String with spaces
    string withSpaces = "   Text with spaces   ";
    cout << "With spaces: '" << withSpaces << "'" << endl;
    
    return 0;
}`}
          />
        </div>
      </section>

      {/* Section 2: Concatenation */}
      <section className="mb-5">
        <h3 className="fw-bold text-success">🔗 2. String Concatenation</h3>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>📝 What is Concatenation?</h5>
                <p>
                  <b>Concatenation</b> means joining two or more strings together 
                  to form a single string.
                </p>
                <ul>
                  <li>Use <code>+</code> operator to join strings</li>
                  <li>Use <code>+=</code> operator to append to a string</li>
                  <li>Can concatenate strings, string literals, and characters</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <CodeBox
              title="Concatenation Examples"
              language="cpp"
              code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    string firstName = "John";
    string lastName = "Doe";
    
    // Using + operator
    string fullName = firstName + " " + lastName;
    
    // Using += operator
    string greeting = "Hello";
    greeting += " " + firstName;
    
    // Concatenating multiple strings
    string message = "Welcome" + string(" ") + "to C++";
    
    return 0;
}`}
            />
          </div>
        </div>
        
        <div className="mt-4">
          <CodeBox
            title="Complete Concatenation Program"
            language="cpp"
            executable={true}
            code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    cout << "=== STRING CONCATENATION ===" << endl;
    
    // Basic concatenation
    string part1 = "Hello";
    string part2 = "World";
    string result = part1 + " " + part2;
    cout << "Basic: " << result << endl;
    
    // Using += operator
    string sentence = "I love";
    sentence += " programming";
    sentence += " in C++";
    cout << "Using +=: " << sentence << endl;
    
    // Concatenating with characters
    string word = "Hello";
    word += '!';  // Adding a character
    cout << "With character: " << word << endl;
    
    // Multiple concatenations
    string firstName = "John";
    string lastName = "Doe";
    int age = 25;
    
    string info = "Name: " + firstName + " " + lastName + 
                  ", Age: " + to_string(age);
    cout << "User Info: " << info << endl;
    
    // Building a paragraph
    string paragraph;
    paragraph += "C++ is a powerful programming language. ";
    paragraph += "It is used for system programming, ";
    paragraph += "game development, and more.";
    cout << "\\nParagraph:\\n" << paragraph << endl;
    
    // Concatenation in loop
    cout << "\\nCounting with concatenation:" << endl;
    string numbers;
    for(int i = 1; i <= 5; i++) {
        numbers += to_string(i) + " ";
    }
    cout << "Numbers: " << numbers << endl;
    
    // Important: Can't concatenate two string literals directly
    // ❌ WRONG: string error = "Hello" + "World";
    // ✅ CORRECT:
    string correct = string("Hello") + "World";
    cout << "\\nCorrect way: " << correct << endl;
    
    return 0;
}`}
          />
        </div>
      </section>

      {/* Section 3: Numbers and Strings */}
      <section className="mb-5">
        <h3 className="fw-bold text-warning">🔢 3. Numbers and Strings</h3>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>📝 Mixing Numbers and Strings</h5>
                <p>
                  You can convert between numbers and strings using:
                </p>
                <ul>
                  <li><code>to_string()</code> - Convert number to string</li>
                  <li><code>stoi()</code> - Convert string to integer</li>
                  <li><code>stod()</code> - Convert string to double</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <CodeBox
              title="Number-String Conversion"
              language="cpp"
              code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    // Number to string
    int num = 42;
    string strNum = to_string(num);
    
    // String to number
    string text = "123";
    int converted = stoi(text);
    
    // Mixing in output
    cout << "Number: " + to_string(100) << endl;
    
    return 0;
}`}
            />
          </div>
        </div>
        
        <div className="mt-4">
          <CodeBox
            title="Complete Numbers and Strings Program"
            language="cpp"
            executable={true}
            code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    cout << "=== NUMBERS AND STRINGS ===" << endl;
    
    // 1. Converting numbers to strings
    cout << "\\n1. NUMBERS TO STRINGS:" << endl;
    
    int age = 25;
    double price = 99.99;
    float pi = 3.14f;
    
    string strAge = to_string(age);
    string strPrice = to_string(price);
    string strPi = to_string(pi);
    
    cout << "Age as string: " << strAge << endl;
    cout << "Price as string: " << strPrice << endl;
    cout << "Pi as string: " << strPi << endl;
    
    // 2. Converting strings to numbers
    cout << "\\n2. STRINGS TO NUMBERS:" << endl;
    
    string strNum1 = "123";
    string strNum2 = "45.67";
    
    int intNum = stoi(strNum1);      // String to int
    double doubleNum = stod(strNum2); // String to double
    
    cout << "String '123' to int: " << intNum << endl;
    cout << "String '45.67' to double: " << doubleNum << endl;
    
    // 3. Mixed operations
    cout << "\\n3. MIXED OPERATIONS:" << endl;
    
    int score1 = 85;
    int score2 = 92;
    string result = "Scores: " + to_string(score1) + 
                    " and " + to_string(score2);
    cout << result << endl;
    
    // 4. Calculating with converted strings
    cout << "\\n4. CALCULATIONS:" << endl;
    
    string input1 = "10";
    string input2 = "20";
    
    int num1 = stoi(input1);
    int num2 = stoi(input2);
    int sum = num1 + num2;
    
    cout << input1 << " + " << input2 << " = " << sum << endl;
    
    // 5. Building formatted strings
    cout << "\\n5. FORMATTED STRINGS:" << endl;
    
    string product = "Laptop";
    int quantity = 3;
    double unitPrice = 799.99;
    double total = quantity * unitPrice;
    
    string invoice = "Product: " + product + 
                     "\\nQuantity: " + to_string(quantity) +
                     "\\nUnit Price: $" + to_string(unitPrice) +
                     "\\nTotal: $" + to_string(total);
    
    cout << invoice << endl;
    
    // 6. Error handling (try-catch)
    cout << "\\n6. ERROR HANDLING:" << endl;
    
    string badInput = "abc123";
    
    try {
        int badNum = stoi(badInput);
        cout << "Converted: " << badNum << endl;
    } catch(const exception& e) {
        cout << "Error: Cannot convert '" << badInput << "' to number" << endl;
    }
    
    // 7. Practical example - Calculator display
    cout << "\\n7. CALCULATOR DISPLAY:" << endl;
    
    int a = 15, b = 7;
    string calcDisplay = to_string(a) + " + " + to_string(b) + 
                         " = " + to_string(a + b);
    cout << calcDisplay << endl;
    
    return 0;
}`}
          />
        </div>
      </section>

      {/* Section 4: String Length */}
      <section className="mb-5">
        <h3 className="fw-bold text-info">📏 4. String Length</h3>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>📝 Getting String Length</h5>
                <p>
                  Use these methods to get the length of a string:
                </p>
                <ul>
                  <li><code>length()</code> - Returns number of characters</li>
                  <li><code>size()</code> - Same as <code>length()</code></li>
                  <li><code>empty()</code> - Checks if string is empty</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <CodeBox
              title="String Length Methods"
              language="cpp"
              code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    string text = "Hello";
    
    cout << text.length() << endl;  // 5
    cout << text.size() << endl;    // 5 (same as length)
    
    if(text.empty()) {
        cout << "String is empty" << endl;
    }
    
    return 0;
}`}
            />
          </div>
        </div>
        
        <div className="mt-4">
          <CodeBox
            title="Complete String Length Program"
            language="cpp"
            executable={true}
            code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    cout << "=== STRING LENGTH ===" << endl;
    
    // 1. Basic length examples
    cout << "\\n1. BASIC LENGTH EXAMPLES:" << endl;
    
    string str1 = "Hello";
    string str2 = "Hello World";
    string str3 = "";
    string str4 = " ";
    string str5 = "C++ Programming";
    
    cout << "'" << str1 << "' length: " << str1.length() << endl;
    cout << "'" << str2 << "' length: " << str2.length() << endl;
    cout << "'" << str3 << "' length: " << str3.length() << endl;
    cout << "'" << str4 << "' length: " << str4.length() << endl;
    cout << "'" << str5 << "' length: " << str5.length() << endl;
    
    // 2. Using size() method (same as length)
    cout << "\\n2. USING size() METHOD:" << endl;
    cout << "'" << str1 << "' size: " << str1.size() << endl;
    cout << "'" << str2 << "' size: " << str2.size() << endl;
    
    // 3. Checking if string is empty
    cout << "\\n3. CHECKING EMPTY STRINGS:" << endl;
    
    string emptyStr = "";
    string nonEmpty = "Text";
    
    if(emptyStr.empty()) {
        cout << "emptyStr is empty" << endl;
    }
    
    if(!nonEmpty.empty()) {
        cout << "nonEmpty is not empty" << endl;
    }
    
    // 4. Practical length usage
    cout << "\\n4. PRACTICAL EXAMPLES:" << endl;
    
    // Password length validation
    string password = "Secret123";
    if(password.length() >= 8) {
        cout << "Password is strong (length: " << password.length() << ")" << endl;
    } else {
        cout << "Password is too short" << endl;
    }
    
    // Truncating long strings
    string longText = "This is a very long text that needs to be shortened";
    int maxLength = 20;
    
    if(longText.length() > maxLength) {
        string shortened = longText.substr(0, maxLength) + "...";
        cout << "Original: " << longText << endl;
        cout << "Shortened: " << shortened << endl;
    }
    
    // 5. Counting words in a sentence
    cout << "\\n5. COUNTING WORDS:" << endl;
    
    string sentence = "C++ is a powerful programming language";
    int wordCount = 1;  // Start with 1 for first word
    
    for(int i = 0; i < sentence.length(); i++) {
        if(sentence[i] == ' ') {
            wordCount++;
        }
    }
    
    cout << "Sentence: '" << sentence << "'" << endl;
    cout << "Number of words: " << wordCount << endl;
    cout << "Number of characters: " << sentence.length() << endl;
    
    // 6. Loop through string using length
    cout << "\\n6. LOOPING THROUGH STRING:" << endl;
    
    string word = "Hello";
    cout << "Characters in '" << word << "': ";
    
    for(int i = 0; i < word.length(); i++) {
        cout << word[i] << " ";
    }
    cout << endl;
    
    // 7. Reverse a string using length
    cout << "\\n7. REVERSING A STRING:" << endl;
    
    string original = "Hello";
    string reversed;
    
    for(int i = original.length() - 1; i >= 0; i--) {
        reversed += original[i];
    }
    
    cout << "Original: " << original << endl;
    cout << "Reversed: " << reversed << endl;
    
    return 0;
}`}
          />
        </div>
      </section>

      {/* Section 5: Access Strings */}
      <section className="mb-5">
        <h3 className="fw-bold text-danger">🔍 5. Access Strings</h3>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>📝 Accessing String Characters</h5>
                <p>
                  You can access individual characters in a string using:
                </p>
                <ul>
                  <li><code>[]</code> operator - Fast, no bounds checking</li>
                  <li><code>at()</code> method - Slower, with bounds checking</li>
                  <li><code>front()</code> - First character</li>
                  <li><code>back()</code> - Last character</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <CodeBox
              title="Access Methods"
              language="cpp"
              code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    string text = "Hello";
    
    cout << text[0] << endl;       // H
    cout << text.at(1) << endl;    // e
    cout << text.front() << endl;  // H
    cout << text.back() << endl;   // o
    
    // Modify characters
    text[0] = 'h';
    cout << text << endl;  // hello
    
    return 0;
}`}
            />
          </div>
        </div>
        
        <div className="mt-4">
          <CodeBox
            title="Complete String Access Program"
            language="cpp"
            executable={true}
            code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    cout << "=== ACCESSING STRINGS ===" << endl;
    
    string text = "Hello World";
    
    // 1. Using [] operator
    cout << "\\n1. USING [] OPERATOR:" << endl;
    cout << "text[0]: " << text[0] << endl;       // H
    cout << "text[6]: " << text[6] << endl;       // W
    cout << "text[10]: " << text[10] << endl;     // d
    
    // 2. Using at() method (safer)
    cout << "\\n2. USING at() METHOD:" << endl;
    cout << "text.at(0): " << text.at(0) << endl;
    cout << "text.at(6): " << text.at(6) << endl;
    
    // at() throws exception for out of bounds
    try {
        cout << "text.at(100): " << text.at(100) << endl;
    } catch(const out_of_range& e) {
        cout << "Error: Index out of range!" << endl;
    }
    
    // 3. front() and back() methods
    cout << "\\n3. front() AND back():" << endl;
    cout << "First character: " << text.front() << endl;
    cout << "Last character: " << text.back() << endl;
    
    // 4. Modifying characters
    cout << "\\n4. MODIFYING CHARACTERS:" << endl;
    
    string word = "Hello";
    cout << "Original: " << word << endl;
    
    word[0] = 'h';  // Change H to h
    word.at(1) = 'a';  // Change e to a
    word.back() = '!';  // Change last character
    
    cout << "Modified: " << word << endl;
    
    // 5. Loop through all characters
    cout << "\\n5. LOOPING THROUGH CHARACTERS:" << endl;
    
    string message = "C++";
    cout << "Characters in '" << message << "':" << endl;
    
    // Method 1: Using index
    cout << "Using index: ";
    for(int i = 0; i < message.length(); i++) {
        cout << message[i] << " ";
    }
    cout << endl;
    
    // Method 2: Using range-based for loop
    cout << "Range-based: ";
    for(char c : message) {
        cout << c << " ";
    }
    cout << endl;
    
    // 6. Accessing parts of string
    cout << "\\n6. ACCESSING PARTS OF STRING:" << endl;
    
    string sentence = "The quick brown fox";
    
    // Get first word
    string firstWord;
    for(int i = 0; i < sentence.length(); i++) {
        if(sentence[i] == ' ') break;
        firstWord += sentence[i];
    }
    cout << "First word: " << firstWord << endl;
    
    // Get last word
    string lastWord;
    for(int i = sentence.length() - 1; i >= 0; i--) {
        if(sentence[i] == ' ') break;
        lastWord = sentence[i] + lastWord;
    }
    cout << "Last word: " << lastWord << endl;
    
    // 7. Practical example: Count vowels
    cout << "\\n7. COUNT VOWELS EXAMPLE:" << endl;
    
    string input = "Hello World";
    int vowelCount = 0;
    
    for(int i = 0; i < input.length(); i++) {
        char ch = tolower(input[i]);
        if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            vowelCount++;
        }
    }
    
    cout << "In '" << input << "':" << endl;
    cout << "Total characters: " << input.length() << endl;
    cout << "Vowels: " << vowelCount << endl;
    
    // 8. Convert to uppercase
    cout << "\\n8. CONVERT TO UPPERCASE:" << endl;
    
    string lowercase = "hello";
    cout << "Original: " << lowercase << endl;
    cout << "Uppercase: ";
    
    for(int i = 0; i < lowercase.length(); i++) {
        cout << (char)toupper(lowercase[i]);
    }
    cout << endl;
    
    return 0;
}`}
          />
        </div>
      </section>

      {/* Section 6: Special Characters */}
      <section className="mb-5">
        <h3 className="fw-bold text-success">✨ 6. Special Characters</h3>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>📝 Escape Sequences</h5>
                <p>
                  Special characters begin with backslash (<code>\</code>):
                </p>
                <table className="table table-sm">
                  <tbody>
                    <tr><td><code>\n</code></td><td>New line</td></tr>
                    <tr><td><code>\t</code></td><td>Tab</td></tr>
                    <tr><td><code>\\</code></td><td>Backslash</td></tr>
                    <tr><td><code>\"</code></td><td>Double quote</td></tr>
                    <tr><td><code>\'</code></td><td>Single quote</td></tr>
                    <tr><td><code>\0</code></td><td>Null character</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <CodeBox
              title="Special Characters Examples"
              language="cpp"
              code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    string line1 = "Line 1\\nLine 2";
    string tab = "Name:\\tJohn";
    string quote = "He said \\"Hello\\"";
    string path = "C:\\\\Users\\\\John";
    
    cout << line1 << endl;
    cout << tab << endl;
    cout << quote << endl;
    cout << path << endl;
    
    return 0;
}`}
            />
          </div>
        </div>
        
        <div className="mt-4">
          <CodeBox
            title="Complete Special Characters Program"
            language="cpp"
            executable={true}
            code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    cout << "=== SPECIAL CHARACTERS ===" << endl;
    
    // 1. New line character
    cout << "\\n1. NEW LINE (\\\\n):" << endl;
    string multiLine = "First line\\nSecond line\\nThird line";
    cout << multiLine << endl;
    
    // 2. Tab character
    cout << "\\n2. TAB (\\\\t):" << endl;
    string table = "Name:\\tJohn\\nAge:\\t25\\nCity:\\tNYC";
    cout << table << endl;
    
    // 3. Backslash character
    cout << "\\n3. BACKSLASH (\\\\\\\\):" << endl;
    string filePath = "C:\\\\Users\\\\John\\\\file.txt";
    cout << "Path: " << filePath << endl;
    
    // 4. Quotes in strings
    cout << "\\n4. QUOTES:" << endl;
    string withQuotes = "He said \\"Hello World!\\"";
    cout << withQuotes << endl;
    
    string withSingle = "It\\'s a beautiful day";
    cout << withSingle << endl;
    
    // 5. Null character
    cout << "\\n5. NULL CHARACTER (\\\\0):" << endl;
    string withNull = "Hello\\0World";
    cout << "String with null: " << withNull << endl;
    cout << "Length: " << withNull.length() << endl;
    
    // 6. Multiple special characters
    cout << "\\n6. MULTIPLE SPECIAL CHARACTERS:" << endl;
    string complex = "Report:\\n\\tDate:\\t\\"2024-01-15\\"\\n\\tPath:\\tC:\\\\data";
    cout << complex << endl;
    
    // 7. Creating formatted output
    cout << "\\n7. FORMATTED OUTPUT:" << endl;
    string format = "Student Details:\\n";
    format += "\\tName:\\t\\"John Doe\\"\\n";
    format += "\\tAge:\\t20\\n";
    format += "\\tGrade:\\t\\'A\\'\\n";
    format += "\\tPath:\\tD:\\\\students\\\\john.txt";
    
    cout << format << endl;
    
    // 8. Escape sequence in user input
    cout << "\\n8. USER INPUT WITH SPECIAL CHARACTERS:" << endl;
    
    string userInput;
    cout << "Enter text with tabs and newlines (type END to finish):\\n";
    
    while(true) {
        string line;
        getline(cin, line);
        if(line == "END") break;
        userInput += line + "\\n";
    }
    
    cout << "\\nYou entered:\\n" << userInput << endl;
    
    // 9. Finding special characters
    cout << "\\n9. FINDING SPECIAL CHARACTERS:" << endl;
    
    string test = "Line1\\nLine2\\tTabbed";
    int newlineCount = 0;
    int tabCount = 0;
    
    for(int i = 0; i < test.length(); i++) {
        if(test[i] == '\\n') {
            newlineCount++;
        } else if(test[i] == '\\t') {
            tabCount++;
        }
    }
    
    cout << "String: " << test << endl;
    cout << "Newlines: " << newlineCount << endl;
    cout << "Tabs: " << tabCount << endl;
    
    // 10. Replacing special characters
    cout << "\\n10. REPLACING SPECIAL CHARACTERS:" << endl;
    
    string original = "Hello\\nWorld\\t!";
    string replaced;
    
    for(char c : original) {
        if(c == '\\n') {
            replaced += " [NEWLINE] ";
        } else if(c == '\\t') {
            replaced += " [TAB] ";
        } else {
            replaced += c;
        }
    }
    
    cout << "Original: " << original << endl;
    cout << "Replaced: " << replaced << endl;
    
    return 0;
}`}
          />
        </div>
      </section>

      {/* Section 7: User Input Strings */}
      <section className="mb-5">
        <h3 className="fw-bold text-primary">📥 7. User Input Strings</h3>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>📝 Getting String Input</h5>
                <p>
                  Two main ways to get string input:
                </p>
                <ul>
                  <li><code>cin &gt;&gt;</code> - Reads until whitespace</li>
                  <li><code>getline()</code> - Reads entire line including spaces</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <CodeBox
              title="Input Methods"
              language="cpp"
              code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    
    // Method 1: cin (stops at space)
    cout << "Enter first name: ";
    cin >> name;  // If input "John Doe", gets only "John"
    
    cin.ignore();  // Clear buffer
    
    // Method 2: getline (gets entire line)
    cout << "Enter full name: ";
    getline(cin, name);  // Gets "John Doe"
    
    return 0;
}`}
            />
          </div>
        </div>
        
        <div className="mt-4">
          <CodeBox
            title="Complete User Input Program"
            language="cpp"
            executable={true}
            code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    cout << "=== USER INPUT STRINGS ===" << endl;
    
    // 1. Basic input with cin
    cout << "\\n1. BASIC INPUT (cin >>):" << endl;
    
    string firstName;
    cout << "Enter your first name: ";
    cin >> firstName;
    cout << "Hello, " << firstName << "!" << endl;
    
    // Clear buffer after using cin >>
    cin.ignore();
    
    // 2. Full line input with getline
    cout << "\\n2. FULL LINE INPUT (getline):" << endl;
    
    string fullName;
    cout << "Enter your full name: ";
    getline(cin, fullName);
    cout << "Welcome, " << fullName << "!" << endl;
    
    // 3. Multiple inputs
    cout << "\\n3. MULTIPLE INPUTS:" << endl;
    
    int age;
    string city;
    
    cout << "Enter your age: ";
    cin >> age;
    cin.ignore();  // Important: clear buffer
    
    cout << "Enter your city: ";
    getline(cin, city);
    
    cout << "\\nProfile:" << endl;
    cout << "Age: " << age << endl;
    cout << "City: " << city << endl;
    
    // 4. Reading multiple lines
    cout << "\\n4. READING MULTIPLE LINES:" << endl;
    cout << "Enter your address (press Enter twice to finish):" << endl;
    
    string address, line;
    while(true) {
        getline(cin, line);
        if(line.empty()) break;  // Stop when empty line
        address += line + "\\n";
    }
    
    cout << "\\nYour address:\\n" << address << endl;
    
    // 5. Input validation
    cout << "\\n5. INPUT VALIDATION:" << endl;
    
    string password;
    cout << "Enter password (min 8 characters): ";
    getline(cin, password);
    
    if(password.length() >= 8) {
        cout << "Password accepted!" << endl;
    } else {
        cout << "Password too short!" << endl;
    }
    
    // 6. Menu system with input
    cout << "\\n6. SIMPLE MENU SYSTEM:" << endl;
    
    string choice;
    cout << "Menu:\\n1. Register\\n2. Login\\n3. Exit\\n";
    cout << "Enter choice: ";
    getline(cin, choice);
    
    if(choice == "1") {
        cout << "Registration selected" << endl;
    } else if(choice == "2") {
        cout << "Login selected" << endl;
    } else if(choice == "3") {
        cout << "Exit selected" << endl;
    } else {
        cout << "Invalid choice!" << endl;
    }
    
    // 7. Simple calculator with string input
    cout << "\\n7. SIMPLE CALCULATOR:" << endl;
    
    string input1, input2;
    cout << "Enter first number: ";
    getline(cin, input1);
    
    cout << "Enter second number: ";
    getline(cin, input2);
    
    // Convert strings to numbers
    try {
        double num1 = stod(input1);
        double num2 = stod(input2);
        
        cout << "\\nResults:" << endl;
        cout << input1 << " + " << input2 << " = " << (num1 + num2) << endl;
        cout << input1 << " - " << input2 << " = " << (num1 - num2) << endl;
        cout << input1 << " * " << input2 << " = " << (num1 * num2) << endl;
        
        if(num2 != 0) {
            cout << input1 << " / " << input2 << " = " << (num1 / num2) << endl;
        } else {
            cout << "Cannot divide by zero!" << endl;
        }
    } catch(const exception& e) {
        cout << "Error: Invalid number input!" << endl;
    }
    
    // 8. Word counter
    cout << "\\n8. WORD COUNTER:" << endl;
    
    string sentence;
    cout << "Enter a sentence: ";
    getline(cin, sentence);
    
    int wordCount = 0;
    bool inWord = false;
    
    for(char c : sentence) {
        if(c != ' ' && !inWord) {
            wordCount++;
            inWord = true;
        } else if(c == ' ') {
            inWord = false;
        }
    }
    
    cout << "Words: " << wordCount << endl;
    cout << "Characters: " << sentence.length() << endl;
    
    // 9. Password mask (simple)
    cout << "\\n9. PASSWORD ENTRY:" << endl;
    
    string passwordInput;
    cout << "Enter password (hidden): ";
    
    // In real programs, use special libraries for hidden input
    // This is a simple simulation
    getline(cin, passwordInput);
    
    cout << "Password length: " << passwordInput.length() << endl;
    cout << "First char: " << passwordInput[0] << endl;
    cout << "Last char: " << passwordInput.back() << endl;
    
    // 10. Simple search in input
    cout << "\\n10. SEARCH IN INPUT:" << endl;
    
    string searchText;
    cout << "Enter some text: ";
    getline(cin, searchText);
    
    string searchWord;
    cout << "Enter word to search: ";
    getline(cin, searchWord);
    
    if(searchText.find(searchWord) != string::npos) {
        cout << "Found '" << searchWord << "' in the text!" << endl;
    } else {
        cout << "Word not found." << endl;
    }
    
    return 0;
}`}
          />
        </div>
      </section>

      {/* Section 8: Omitting Namespace */}
      <section className="mb-5">
        <h3 className="fw-bold text-warning">🚫 8. Omitting Namespace</h3>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>📝 What is <code>using namespace std</code>?</h5>
                <p>
                  The <code>using namespace std;</code> line allows you to use 
                  standard library names without the <code>std::</code> prefix.
                </p>
                <ul>
                  <li><b>With namespace:</b> <code>cout &lt;&lt; "Hello";</code></li>
                  <li><b>Without namespace:</b> <code>std::cout &lt;&lt; "Hello";</code></li>
                </ul>
                <div className="alert alert-info mt-2">
                  <small>💡 <b>Best Practice:</b> In large programs, avoid 
                  <code>using namespace std;</code> to prevent name conflicts.</small>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <CodeBox
              title="With vs Without Namespace"
              language="cpp"
              code={`// METHOD 1: With namespace (easier for beginners)
#include <iostream>
#include <string>
using namespace std;

int main() {
    string name = "John";
    cout << "Hello " << name << endl;
    return 0;
}

// METHOD 2: Without namespace (better for large projects)
#include <iostream>
#include <string>
// No: using namespace std;

int main() {
    std::string name = "John";
    std::cout << "Hello " << name << std::endl;
    return 0;
}`}
            />
          </div>
        </div>
        
        <div className="mt-4">
          <CodeBox
            title="Complete Program Without Namespace"
            language="cpp"
            executable={true}
            code={`// Program WITHOUT using namespace std
#include <iostream>
#include <string>

int main() {
    std::cout << "=== PROGRAM WITHOUT NAMESPACE ===" << std::endl;
    
    // 1. String declaration
    std::string greeting = "Hello World";
    std::cout << greeting << std::endl;
    
    // 2. String concatenation
    std::string firstName = "John";
    std::string lastName = "Doe";
    std::string fullName = firstName + " " + lastName;
    std::cout << "Name: " << fullName << std::endl;
    
    // 3. String length
    std::string text = "C++ Programming";
    std::cout << "Length: " << text.length() << std::endl;
    std::cout << "Size: " << text.size() << std::endl;
    
    // 4. Access characters
    std::string word = "Hello";
    std::cout << "First char: " << word[0] << std::endl;
    std::cout << "Last char: " << word.back() << std::endl;
    
    // 5. Input without namespace
    std::string userName;
    std::cout << "Enter your name: ";
    std::getline(std::cin, userName);
    std::cout << "Welcome, " << userName << "!" << std::endl;
    
    // 6. Number to string conversion
    int age = 25;
    std::string ageStr = std::to_string(age);
    std::cout << "Age as string: " << ageStr << std::endl;
    
    // 7. String to number conversion
    std::string numStr = "123";
    int number = std::stoi(numStr);
    std::cout << "String to number: " << number << std::endl;
    
    // 8. String comparison
    std::string str1 = "apple";
    std::string str2 = "banana";
    
    if(str1 < str2) {
        std::cout << str1 << " comes before " << str2 << std::endl;
    }
    
    // 9. Finding substring
    std::string sentence = "The quick brown fox";
    std::size_t found = sentence.find("brown");
    
    if(found != std::string::npos) {
        std::cout << "Found 'brown' at position: " << found << std::endl;
    }
    
    // 10. Getting substring
    std::string original = "Hello World";
    std::string sub = original.substr(6, 5);  // "World"
    std::cout << "Substring: " << sub << std::endl;
    
    // 11. Replacing part of string
    std::string message = "Hello World";
    message.replace(6, 5, "C++");
    std::cout << "After replace: " << message << std::endl;
    
    // 12. Inserting into string
    std::string insertDemo = "Hello World";
    insertDemo.insert(5, " C++");
    std::cout << "After insert: " << insertDemo << std::endl;
    
    // 13. Erasing from string
    std::string eraseDemo = "Hello World";
    eraseDemo.erase(5, 6);  // Remove " World"
    std::cout << "After erase: " << eraseDemo << std::endl;
    
    // 14. Using string stream
    #include <sstream>
    std::ostringstream oss;
    oss << "Number: " << 42 << ", Text: " << "C++";
    std::string formatted = oss.str();
    std::cout << "Formatted: " << formatted << std::endl;
    
    // 15. Complete example: User registration
    std::cout << "\\n=== USER REGISTRATION ===" << std::endl;
    
    std::string regName, regEmail, regPassword;
    int regAge;
    
    std::cout << "Enter name: ";
    std::getline(std::cin, regName);
    
    std::cout << "Enter email: ";
    std::getline(std::cin, regEmail);
    
    std::cout << "Enter password: ";
    std::getline(std::cin, regPassword);
    
    std::cout << "Enter age: ";
    std::cin >> regAge;
    
    std::cout << "\\nRegistration Successful!" << std::endl;
    std::cout << "Name: " << regName << std::endl;
    std::cout << "Email: " << regEmail << std::endl;
    std::cout << "Password length: " << regPassword.length() << std::endl;
    std::cout << "Age: " << regAge << std::endl;
    
    return 0;
}`}
          />
        </div>
      </section>

      {/* NEW SECTION 9: String Methods */}
      <section className="mb-5">
        <h3 className="fw-bold text-primary">🛠️ 9. String Methods</h3>
        
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5>📝 String Class Methods</h5>
                <p>
                  The C++ <code>string</code> class provides many useful methods for string manipulation.
                  Here are the most commonly used ones:
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 1. find() method */}
        <div className="mt-4">
          <h5 className="fw-bold">1. find() - Find Substring in String</h5>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <p><b>Definition:</b> Searches for the first occurrence of a substring within the string.</p>
                  <p><b>Returns:</b> Position of first character of found substring, or <code>string::npos</code> if not found.</p>
                  <p><b>Syntax:</b> <code>str.find(substr, start_pos)</code></p>
                  <p><b>Parameters:</b></p>
                  <ul>
                    <li><code>substr</code> - string to search for</li>
                    <li><code>start_pos</code> - position to start search (optional)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <CodeBox
                title="find() Example"
                language="cpp"
                executable={true}
                code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    string text = "The quick brown fox jumps over the lazy dog";
    
    // Find substring
    size_t pos = text.find("brown");
    if(pos != string::npos) {
        cout << "Found 'brown' at position: " << pos << endl;
    } else {
        cout << "'brown' not found" << endl;
    }
    
    // Find character
    pos = text.find('q');
    cout << "Found 'q' at position: " << pos << endl;
    
    // Find from specific position
    pos = text.find("the", 10);
    cout << "Found 'the' after position 10 at: " << pos << endl;
    
    // Find any character from set
    pos = text.find_first_of("aeiou");
    cout << "First vowel at position: " << pos << endl;
    
    // Case-sensitive search
    pos = text.find("THE");  // Will return npos
    if(pos == string::npos) {
        cout << "'THE' not found (case-sensitive)" << endl;
    }
    
    return 0;
}`}
              />
            </div>
          </div>
        </div>

        {/* 2. substr() method */}
        <div className="mt-4">
          <h5 className="fw-bold">2. substr() - Extract Substring</h5>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <p><b>Definition:</b> Returns a substring starting at a specified position.</p>
                  <p><b>Syntax:</b> <code>str.substr(start_pos, length)</code></p>
                  <p><b>Parameters:</b></p>
                  <ul>
                    <li><code>start_pos</code> - starting position (0-based)</li>
                    <li><code>length</code> - number of characters to extract (optional)</li>
                  </ul>
                  <p><b>Note:</b> If length is omitted, extracts to end of string.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <CodeBox
                title="substr() Example"
                language="cpp"
                executable={true}
                code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    string text = "Hello World";
    
    // Extract from position
    string sub1 = text.substr(6);      // From position 6 to end
    cout << "From position 6: '" << sub1 << "'" << endl;
    
    // Extract with length
    string sub2 = text.substr(0, 5);   // First 5 characters
    cout << "First 5 chars: '" << sub2 << "'" << endl;
    
    // Extract middle part
    string sub3 = text.substr(6, 5);   // "World"
    cout << "Middle part: '" << sub3 << "'" << endl;
    
    // Practical example - Extract filename from path
    string path = "/home/user/documents/file.txt";
    size_t lastSlash = path.find_last_of('/');
    string filename = path.substr(lastSlash + 1);
    cout << "Filename: " << filename << endl;
    
    // Extract domain from email
    string email = "user@example.com";
    size_t atPos = email.find('@');
    if(atPos != string::npos) {
        string domain = email.substr(atPos + 1);
        cout << "Domain: " << domain << endl;
    }
    
    // Get file extension
    size_t dotPos = filename.find_last_of('.');
    if(dotPos != string::npos) {
        string extension = filename.substr(dotPos);
        cout << "Extension: " << extension << endl;
    }
    
    return 0;
}`}
              />
            </div>
          </div>
        </div>

        {/* 3. replace() method */}
        <div className="mt-4">
          <h5 className="fw-bold">3. replace() - Replace Part of String</h5>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <p><b>Definition:</b> Replaces portion of string starting at specified position.</p>
                  <p><b>Syntax:</b> <code>str.replace(start_pos, length, new_str)</code></p>
                  <p><b>Parameters:</b></p>
                  <ul>
                    <li><code>start_pos</code> - starting position</li>
                    <li><code>length</code> - number of characters to replace</li>
                    <li><code>new_str</code> - replacement string</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <CodeBox
                title="replace() Example"
                language="cpp"
                executable={true}
                code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    string text = "I like apples and apples are tasty";
    
    cout << "Original: " << text << endl;
    
    // Replace single word
    text.replace(7, 6, "oranges");  // Replace "apples" (6 chars) with "oranges"
    cout << "After replace: " << text << endl;
    
    // Replace with different length
    text = "Hello World";
    text.replace(6, 5, "C++");  // Replace "World" (5 chars) with "C++" (3 chars)
    cout << "Shorter replacement: " << text << endl;
    
    // Replace part of string
    text = "The price is $100";
    text.replace(13, 4, "200");  // Replace "$100" with "$200"
    cout << "Price update: " << text << endl;
    
    // Replace all occurrences of a word
    text = "cat dog cat bird cat fish";
    size_t pos = 0;
    while((pos = text.find("cat", pos)) != string::npos) {
        text.replace(pos, 3, "CAT");
        pos += 3;  // Move past the replacement
    }
    cout << "All cats replaced: " << text << endl;
    
    // Replace using find and replace together
    text = "My name is John. John is a programmer.";
    pos = text.find("John");
    while(pos != string::npos) {
        text.replace(pos, 4, "Jane");
        pos = text.find("John", pos + 4);
    }
    cout << "Name changed: " << text << endl;
    
    return 0;
}`}
              />
            </div>
          </div>
        </div>

        {/* 4. insert() method */}
        <div className="mt-4">
          <h5 className="fw-bold">4. insert() - Insert String at Position</h5>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <p><b>Definition:</b> Inserts a string at the specified position.</p>
                  <p><b>Syntax:</b> <code>str.insert(pos, new_str)</code></p>
                  <p><b>Parameters:</b></p>
                  <ul>
                    <li><code>pos</code> - position to insert at</li>
                    <li><code>new_str</code> - string to insert</li>
                  </ul>
                  <p><b>Note:</b> Original string expands to accommodate insertion.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <CodeBox
                title="insert() Example"
                language="cpp"
                executable={true}
                code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    string text = "Hello World";
    
    cout << "Original: " << text << endl;
    
    // Insert at beginning
    text.insert(0, "Say: ");
    cout << "After insert at 0: " << text << endl;
    
    // Insert in middle
    text = "Hello World";
    text.insert(5, " C++");
    cout << "Insert at position 5: " << text << endl;
    
    // Insert at end
    text.insert(text.length(), "!");
    cout << "Insert at end: " << text << endl;
    
    // Insert multiple times
    text = "1 3 5";
    text.insert(2, "2 ");
    text.insert(6, "4 ");
    cout << "Insert numbers: " << text << endl;
    
    // Practical example: Formatting
    string phone = "1234567890";
    phone.insert(0, "(");
    phone.insert(4, ") ");
    phone.insert(9, "-");
    cout << "Formatted phone: " << phone << endl;
    
    // Insert character
    text = "ABCD";
    text.insert(2, 1, 'X');  // Insert 1 'X' at position 2
    cout << "Insert character: " << text << endl;
    
    return 0;
}`}
              />
            </div>
          </div>
        </div>

        {/* 5. erase() method */}
        <div className="mt-4">
          <h5 className="fw-bold">5. erase() - Remove Characters from String</h5>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <p><b>Definition:</b> Erases characters from the string.</p>
                  <p><b>Syntax:</b> <code>str.erase(start_pos, length)</code></p>
                  <p><b>Parameters:</b></p>
                  <ul>
                    <li><code>start_pos</code> - starting position</li>
                    <li><code>length</code> - number of characters to erase (optional)</li>
                  </ul>
                  <p><b>Note:</b> If length omitted, erases to end of string.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <CodeBox
                title="erase() Example"
                language="cpp"
                executable={true}
                code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    string text = "This is a test string";
    
    cout << "Original: " << text << endl;
    
    // Erase from position
    text.erase(10, 4);  // Erase "test" (4 chars from position 10)
    cout << "After erase: " << text << endl;
    
    // Erase to end
    text = "Hello World!";
    text.erase(5);  // Erase from position 5 to end
    cout << "Erase to end: " << text << endl;
    
    // Erase single character
    text = "ABCDEF";
    text.erase(2, 1);  // Erase character at position 2
    cout << "Erase one char: " << text << endl;
    
    // Erase first word
    text = "Remove this word please";
    size_t spacePos = text.find(' ');
    if(spacePos != string::npos) {
        text.erase(0, spacePos + 1);
    }
    cout << "Remove first word: " << text << endl;
    
    // Erase all spaces
    text = "Text with spaces";
    size_t pos = 0;
    while((pos = text.find(' ', pos)) != string::npos) {
        text.erase(pos, 1);
    }
    cout << "Without spaces: " << text << endl;
    
    // Erase last character
    text = "Hello!";
    if(!text.empty()) {
        text.erase(text.length() - 1);
    }
    cout << "Remove last char: " << text << endl;
    
    return 0;
}`}
              />
            </div>
          </div>
        </div>

        {/* 6. compare() method */}
        <div className="mt-4">
          <h5 className="fw-bold">6. compare() - Compare Two Strings</h5>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <p><b>Definition:</b> Compares two strings lexicographically.</p>
                  <p><b>Returns:</b></p>
                  <ul>
                    <li><code>0</code> - strings are equal</li>
                    <li><code>&lt;0</code> - first string is less than second</li>
                    <li><code>&gt;0</code> - first string is greater than second</li>
                  </ul>
                  <p><b>Syntax:</b> <code>str1.compare(str2)</code></p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <CodeBox
                title="compare() Example"
                language="cpp"
                executable={true}
                code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    string str1 = "apple";
    string str2 = "banana";
    string str3 = "apple";
    
    // Compare strings
    int result = str1.compare(str2);
    if(result == 0) {
        cout << str1 << " == " << str2 << endl;
    } else if(result < 0) {
        cout << str1 << " < " << str2 << endl;
    } else {
        cout << str1 << " > " << str2 << endl;
    }
    
    // Compare equal strings
    result = str1.compare(str3);
    if(result == 0) {
        cout << str1 << " equals " << str3 << endl;
    }
    
    // Compare portions of strings
    string text1 = "Hello World";
    string text2 = "Hello There";
    
    // Compare first 5 characters
    result = text1.compare(0, 5, text2, 0, 5);
    if(result == 0) {
        cout << "First 5 characters are equal" << endl;
    }
    
    // Case-sensitive comparison
    string lower = "hello";
    string upper = "HELLO";
    
    result = lower.compare(upper);
    if(result != 0) {
        cout << "'" << lower << "' != '" << upper << "' (case-sensitive)" << endl;
    }
    
    // Practical example - Sorting check
    string names[] = {"Alice", "Bob", "Charlie", "David"};
    
    for(int i = 0; i < 3; i++) {
        if(names[i].compare(names[i+1]) > 0) {
            cout << names[i] << " comes after " << names[i+1] << endl;
        }
    }
    
    // Compare with C-string
    string cppStr = "C++";
    result = cppStr.compare("C++");
    if(result == 0) {
        cout << "String equals C-string" << endl;
    }
    
    return 0;
}`}
              />
            </div>
          </div>
        </div>

        {/* 7. c_str() method */}
        <div className="mt-4">
          <h5 className="fw-bold">7. c_str() - Convert to C-style String</h5>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <p><b>Definition:</b> Returns a pointer to a null-terminated character array (C-string).</p>
                  <p><b>Use Case:</b> Needed when interfacing with C functions or APIs that expect C-style strings.</p>
                  <p><b>Syntax:</b> <code>str.c_str()</code></p>
                  <p><b>Important:</b> The returned pointer is valid only as long as the string object exists and isn't modified.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <CodeBox
                title="c_str() Example"
                language="cpp"
                executable={true}
                code={`#include <iostream>
#include <string>
#include <cstring>  // For C string functions
#include <cstdio>   // For printf
using namespace std;

int main() {
    string cppString = "Hello C++ World";
    
    // Convert to C-string for C functions
    const char* cString = cppString.c_str();
    
    // Use with C functions
    printf("Using printf: %s\\n", cString);
    
    // Use with C string functions
    cout << "Length using strlen: " << strlen(cString) << endl;
    
    // Compare with C-string
    if(strcmp(cString, "Hello C++ World") == 0) {
        cout << "Strings are equal" << endl;
    }
    
    // Copy to C-style array
    char buffer[100];
    strcpy(buffer, cppString.c_str());
    cout << "Copied to buffer: " << buffer << endl;
    
    // Practical example: File operations
    // FILE* file = fopen(cppString.c_str(), "r");
    
    // String manipulation with C functions
    string text = "Convert to uppercase";
    char* temp = new char[text.length() + 1];
    strcpy(temp, text.c_str());
    
    // Convert to uppercase using C function
    for(int i = 0; temp[i]; i++) {
        temp[i] = toupper(temp[i]);
    }
    
    cout << "Uppercase: " << temp << endl;
    delete[] temp;
    
    // Important: c_str() becomes invalid if string is modified
    string mutableStr = "Original";
    const char* ptr = mutableStr.c_str();
    cout << "Before: " << ptr << endl;
    
    mutableStr += " Modified";  // This may invalidate ptr
    // cout << "After: " << ptr << endl;  // UNSAFE!
    
    // Safe way: Get fresh pointer after modification
    ptr = mutableStr.c_str();
    cout << "Safe after: " << ptr << endl;
    
    return 0;
}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 10: String Iterators */}
      <section className="mb-5">
        <h3 className="fw-bold text-success">🔄 10. String Iterators</h3>
        
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5>📝 Iterating Through Strings</h5>
                <p>
                  String iterators provide a way to traverse through string characters. 
                  They are safer and more flexible than using indices.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <CodeBox
            title="String Iterators Examples"
            language="cpp"
            executable={true}
            code={`#include <iostream>
#include <string>
#include <algorithm>  // For transform
using namespace std;

int main() {
    string text = "Hello World";
    
    cout << "Original: " << text << endl;
    
    // 1. Using iterators (begin() and end())
    cout << "\\n1. Using iterators:" << endl;
    cout << "Characters: ";
    for(string::iterator it = text.begin(); it != text.end(); ++it) {
        cout << *it << " ";
    }
    cout << endl;
    
    // 2. Using reverse iterators (rbegin() and rend())
    cout << "\\n2. Reverse iteration:" << endl;
    cout << "Reversed: ";
    for(string::reverse_iterator rit = text.rbegin(); rit != text.rend(); ++rit) {
        cout << *rit;
    }
    cout << endl;
    
    // 3. Range-based for loop (C++11)
    cout << "\\n3. Range-based for loop:" << endl;
    cout << "Characters: ";
    for(char c : text) {
        cout << c << " ";
    }
    cout << endl;
    
    // 4. Using auto keyword
    cout << "\\n4. Using auto:" << endl;
    cout << "Characters: ";
    for(auto it = text.begin(); it != text.end(); ++it) {
        cout << *it << " ";
    }
    cout << endl;
    
    // 5. Find using iterator
    cout << "\\n5. Find character using iterator:" << endl;
    auto found = find(text.begin(), text.end(), 'W');
    if(found != text.end()) {
        cout << "Found 'W' at position: " << (found - text.begin()) << endl;
    }
    
    // 6. Modify using iterator
    cout << "\\n6. Modify using iterator:" << endl;
    string mutableText = "hello";
    for(auto it = mutableText.begin(); it != mutableText.end(); ++it) {
        *it = toupper(*it);
    }
    cout << "Uppercase: " << mutableText << endl;
    
    // 7. Using const iterators (read-only)
    cout << "\\n7. Const iterators:" << endl;
    const string constText = "Constant String";
    cout << "Characters: ";
    for(string::const_iterator cit = constText.begin(); cit != constText.end(); ++cit) {
        cout << *cit << " ";
        // *cit = 'X';  // ERROR: Cannot modify through const_iterator
    }
    cout << endl;
    
    // 8. Count characters using iterator
    cout << "\\n8. Count 'l' using iterator:" << endl;
    int count = 0;
    for(auto it = text.begin(); it != text.end(); ++it) {
        if(*it == 'l') count++;
    }
    cout << "Number of 'l': " << count << endl;
    
    // 9. Iterator arithmetic
    cout << "\\n9. Iterator arithmetic:" << endl;
    auto start = text.begin();
    auto middle = start + 5;
    cout << "First 5 chars: ";
    for(auto it = start; it != middle; ++it) {
        cout << *it;
    }
    cout << endl;
    
    // 10. Convert substring using iterators
    cout << "\\n10. Substring using iterators:" << endl;
    string substring(text.begin() + 6, text.end());
    cout << "From position 6: " << substring << endl;
    
    return 0;
}`}
          />
        </div>
      </section>

      {/* NEW SECTION 11: String Streams */}
      <section className="mb-5">
        <h3 className="fw-bold text-warning">📊 11. String Streams</h3>
        
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5>📝 String Stream Classes</h5>
                <p>
                  String streams allow you to treat strings as streams, 
                  making it easy to convert between strings and other data types.
                </p>
                <ul>
                  <li><code>istringstream</code> - Input string stream (string → data)</li>
                  <li><code>ostringstream</code> - Output string stream (data → string)</li>
                  <li><code>stringstream</code> - Bidirectional string stream</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <CodeBox
            title="String Stream Examples"
            language="cpp"
            executable={true}
            code={`#include <iostream>
#include <string>
#include <sstream>  // For string streams
#include <vector>
using namespace std;

int main() {
    cout << "=== STRING STREAMS DEMO ===" << endl;
    
    // 1. ostringstream - Building strings from data
    cout << "\\n1. OSTREAMSTREAM (data to string):" << endl;
    
    ostringstream oss;
    oss << "Name: " << "John Doe" << ", ";
    oss << "Age: " << 25 << ", ";
    oss << "Salary: $" << 50000.50;
    
    string result = oss.str();
    cout << "Formatted string: " << result << endl;
    
    // 2. istringstream - Parsing strings to data
    cout << "\\n2. ISTRINGSTREAM (string to data):" << endl;
    
    string data = "John 25 50000.50";
    istringstream iss(data);
    
    string name;
    int age;
    double salary;
    
    iss >> name >> age >> salary;
    cout << "Parsed: Name=" << name 
         << ", Age=" << age 
         << ", Salary=" << salary << endl;
    
    // 3. stringstream - Bidirectional
    cout << "\\n3. STRINGSTREAM (bidirectional):" << endl;
    
    stringstream ss;
    
    // Write to stream
    ss << "100 200 300";
    
    // Read from stream
    int a, b, c;
    ss >> a >> b >> c;
    cout << "Sum: " << (a + b + c) << endl;
    
    // 4. Parse CSV string
    cout << "\\n4. PARSE CSV STRING:" << endl;
    
    string csv = "apple,banana,orange,grape";
    stringstream csvStream(csv);
    string item;
    
    cout << "CSV items: ";
    while(getline(csvStream, item, ',')) {
        cout << "'" << item << "' ";
    }
    cout << endl;
    
    // 5. Convert number to string
    cout << "\\n5. NUMBER TO STRING:" << endl;
    
    int num = 12345;
    stringstream numStream;
    numStream << num;
    string numStr = numStream.str();
    cout << "Number as string: " << numStr << endl;
    
    // 6. String to number with validation
    cout << "\\n6. STRING TO NUMBER WITH VALIDATION:" << endl;
    
    string input = "123abc";
    stringstream validationStream(input);
    int value;
    
    if(validationStream >> value) {
        // Check if all input was consumed
        char remaining;
        if(validationStream >> remaining) {
            cout << "Invalid input: extra characters found" << endl;
        } else {
            cout << "Valid number: " << value << endl;
        }
    } else {
        cout << "Invalid input: not a number" << endl;
    }
    
    // 7. Building complex strings
    cout << "\\n7. BUILDING COMPLEX STRINGS:" << endl;
    
    ostringstream complex;
    complex << "\\n=== REPORT ===" << endl;
    complex << "Date: " << "2024-01-15" << endl;
    complex << "Items: " << endl;
    
    vector<string> items = {"Item1", "Item2", "Item3"};
    for(const auto& item : items) {
        complex << "  - " << item << endl;
    }
    
    complex << "Total: $" << 150.75 << endl;
    
    cout << complex.str();
    
    // 8. Parse multiple lines
    cout << "\\n8. PARSE MULTI-LINE INPUT:" << endl;
    
    string multiLine = "Line 1\\nLine 2\\nLine 3";
    stringstream lineStream(multiLine);
    string line;
    int lineNum = 1;
    
    while(getline(lineStream, line)) {
        cout << "Line " << lineNum++ << ": " << line << endl;
    }
    
    // 9. Formatting with precision
    cout << "\\n9. FORMATTING WITH PRECISION:" << endl;
    
    ostringstream formatted;
    formatted.precision(2);
    formatted << fixed;
    
    double prices[] = {19.99, 29.50, 5.75};
    double total = 0;
    
    for(double price : prices) {
        formatted << "$" << price << "\\n";
        total += price;
    }
    formatted << "Total: $" << total;
    
    cout << formatted.str() << endl;
    
    // 10. Reset/clear stringstream
    cout << "\\n10. REUSING STRINGSTREAM:" << endl;
    
    stringstream reusable;
    
    reusable << "First use";
    string first = reusable.str();
    cout << "First: " << first << endl;
    
    // Clear the stream for reuse
    reusable.str("");  // Clear content
    reusable.clear();  // Clear error flags
    
    reusable << "Second use";
    string second = reusable.str();
    cout << "Second: " << second << endl;
    
    return 0;
}`}
          />
        </div>
      </section>

      {/* Summary */}
      <section className="mb-5">
        <div className="alert alert-success">
          <h5 className="fw-bold">📌 Chapter Summary</h5>
          <div className="row">
            <div className="col-md-4">
              <ul>
                <li><b>1. Strings Intro:</b> Text storage using <code>std::string</code></li>
                <li><b>2. Concatenation:</b> Join strings with <code>+</code> or <code>+=</code></li>
                <li><b>3. Numbers & Strings:</b> Convert with <code>to_string()</code> and <code>stoi()</code></li>
                <li><b>4. String Length:</b> Get with <code>length()</code> or <code>size()</code></li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul>
                <li><b>5. Access Strings:</b> Use <code>[]</code>, <code>at()</code>, <code>front()</code>, <code>back()</code></li>
                <li><b>6. Special Characters:</b> Escape sequences like <code>\n</code>, <code>\t</code></li>
                <li><b>7. User Input:</b> Use <code>getline()</code> for full line input</li>
                <li><b>8. Namespace:</b> Optional <code>using namespace std;</code></li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul>
                <li><b>9. String Methods:</b> <code>find()</code>, <code>substr()</code>, <code>replace()</code></li>
                <li><b>10. More Methods:</b> <code>insert()</code>, <code>erase()</code>, <code>compare()</code></li>
                <li><b>11. C-string:</b> Convert with <code>c_str()</code></li>
                <li><b>12. Iterators:</b> <code>begin()</code>, <code>end()</code>, <code>rbegin()</code>, <code>rend()</code></li>
                <li><b>13. String Streams:</b> <code>stringstream</code>, <code>istringstream</code>, <code>ostringstream</code></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="mb-5">
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h5>📋 String Quick Reference</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>Task</th>
                      <th>Code</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Create string</td>
                      <td><code>string s = "text";</code></td>
                    </tr>
                    <tr>
                      <td>Concatenate</td>
                      <td><code>s1 + s2</code> or <code>s1 += s2</code></td>
                    </tr>
                    <tr>
                      <td>Get length</td>
                      <td><code>s.length()</code> or <code>s.size()</code></td>
                    </tr>
                    <tr>
                      <td>Access character</td>
                      <td><code>s[0]</code> or <code>s.at(0)</code></td>
                    </tr>
                    <tr>
                      <td>Read input</td>
                      <td><code>getline(cin, s)</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-6">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>Special Char</th>
                      <th>Meaning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><code>\n</code></td><td>New line</td></tr>
                    <tr><td><code>\t</code></td><td>Tab</td></tr>
                    <tr><td><code>\\</code></td><td>Backslash</td></tr>
                    <tr><td><code>\"</code></td><td>Double quote</td></tr>
                    <tr><td><code>\'</code></td><td>Single quote</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Exercise */}
      <section className="mb-5">
        <div className="card border-primary">
          <div className="card-header bg-primary text-white">
            <h5>💻 Quick Practice</h5>
          </div>
          <div className="card-body">
            <p><b>Create a program that:</b></p>
            <ol>
              <li>Asks user for their first and last name</li>
              <li>Greets them with full name</li>
              <li>Shows name length</li>
              <li>Converts name to uppercase</li>
              <li>Displays initials</li>
            </ol>
            
            <CodeBox
              title="Sample Solution"
              language="cpp"
              code={`#include <iostream>
#include <string>
#include <cctype>  // For toupper
using namespace std;

int main() {
    string firstName, lastName;
    
    cout << "Enter first name: ";
    cin >> firstName;
    
    cout << "Enter last name: ";
    cin >> lastName;
    
    // Full name
    string fullName = firstName + " " + lastName;
    cout << "\\nHello, " << fullName << "!" << endl;
    
    // Length
    cout << "Name length: " << fullName.length() << " characters" << endl;
    
    // Uppercase
    cout << "Uppercase: ";
    for(char c : fullName) {
        cout << (char)toupper(c);
    }
    cout << endl;
    
    // Initials
    cout << "Initials: " << firstName[0] << "." << lastName[0] << "." << endl;
    
    return 0;
}`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}