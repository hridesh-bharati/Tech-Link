// src/components/Dictionary/CLanguage/Chapter18.jsx
import React from 'react';
import CodeBox from '../CodeBox/CodeBox';

export default function Chapter18() {
  return (
    <div className="chapter-content">
      <div className="chapter-header mb-4">
        <h1 className="h2 fw-bold">C STRINGS</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">C Tutorial</a></li>
            <li className="breadcrumb-item active">Strings</li>
          </ol>
        </nav>
      </div>

      <div className="content-section">
        {/* Definition */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">Definition</h2>
          <div className="definition-card">
            <p className="lead">
              In C, a <strong>string</strong> is a sequence of characters terminated with a 
              null character <code>'\0'</code>. Strings are actually one-dimensional arrays 
              of characters terminated by a null character.
            </p>
          </div>
        </div>

        {/* String Declaration & Initialization */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">String Declaration & Initialization</h2>
          
          <CodeBox
            code={`#include <stdio.h>

int main() {
    // Method 1: Character array with null termination
    char str1[] = "Hello";
    // Memory: ['H','e','l','l','o','\\0']
    
    // Method 2: Character array with size
    char str2[20] = "World";
    
    // Method 3: Character by character
    char str3[] = {'H', 'i', '\\0'};
    
    // Method 4: Pointer to string literal
    char *str4 = "Pointer";
    
    // Method 5: Empty string
    char str5[50] = "";  // Empty string
    
    // Display strings
    printf("str1: %s\\n", str1);
    printf("str2: %s\\n", str2);
    printf("str3: %s\\n", str3);
    printf("str4: %s\\n", str4);
    
    // String length (without null character)
    int len1 = 0;
    while(str1[len1] != '\\0') {
        len1++;
    }
    printf("\\nLength of '%s': %d\\n", str1, len1);
    
    // Input string from user
    char name[50];
    printf("\\nEnter your name: ");
    fgets(name, 50, stdin);  // Safer than scanf
    printf("Hello, %s", name);
    
    // Multi-line string
    char message[] = "This is a multi-line\\n"
                     "string in C programming\\n"
                     "using concatenation.";
    printf("\\n%s\\n", message);
    
    return 0;
}`}
            title="String Declaration Examples"
            language="c"
          />
        </div>

        {/* String Functions from string.h */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">String Functions (string.h)</h2>
          
          <div className="row g-4">
            <div className="col-md-6">
              <CodeBox
                code={`#include <stdio.h>
#include <string.h>  // String functions header

int main() {
    char str1[50] = "Hello";
    char str2[50] = "World";
    char str3[50];
    
    // strlen() - String length
    printf("strlen('%s') = %lu\\n", str1, strlen(str1));
    
    // strcpy() - String copy
    strcpy(str3, str1);
    printf("After strcpy: str3 = '%s'\\n", str3);
    
    // strcat() - String concatenation
    strcat(str1, " ");
    strcat(str1, str2);
    printf("After strcat: '%s'\\n", str1);
    
    // strcmp() - String comparison
    char s1[] = "apple";
    char s2[] = "banana";
    char s3[] = "apple";
    
    printf("\\nstrcmp('%s', '%s') = %d\\n", s1, s2, strcmp(s1, s2));
    printf("strcmp('%s', '%s') = %d\\n", s2, s1, strcmp(s2, s1));
    printf("strcmp('%s', '%s') = %d\\n", s1, s3, strcmp(s1, s3));
    
    // strchr() - Find character in string
    char text[] = "programming";
    char *result = strchr(text, 'g');
    if(result != NULL) {
        printf("\\nFound 'g' in '%s' at position: %ld\\n", 
               text, result - text + 1);
    }
    
    // strstr() - Find substring
    char main_str[] = "C programming is fun";
    char sub_str[] = "program";
    
    result = strstr(main_str, sub_str);
    if(result != NULL) {
        printf("Found '%s' in '%s'\\n", sub_str, main_str);
    }
    
    return 0;
}`}
                title="Common String Functions"
                language="c"
                showExpand={false}
              />
            </div>
            
            <div className="col-md-6">
              <CodeBox
                code={`#include <stdio.h>
#include <string.h>
#include <ctype.h>  // Character functions

int main() {
    // strncpy() - Copy n characters
    char src[] = "Programming";
    char dest[20];
    
    strncpy(dest, src, 7);
    dest[7] = '\\0';  // Important: Add null terminator
    printf("strncpy: '%s' (first 7 chars)\\n", dest);
    
    // strncat() - Concatenate n characters
    char base[50] = "Hello ";
    strncat(base, "World of Programming", 6);
    printf("strncat: '%s'\\n", base);
    
    // strncmp() - Compare n characters
    char a[] = "applepie";
    char b[] = "applesauce";
    
    if(strncmp(a, b, 5) == 0) {
        printf("\\nFirst 5 characters are same\\n");
    }
    
    // strtok() - String tokenization
    char data[] = "John,Doe,25,New York";
    char *token;
    
    printf("\\nTokenizing '%s':\\n", data);
    token = strtok(data, ",");
    
    int count = 1;
    while(token != NULL) {
        printf("Token %d: %s\\n", count++, token);
        token = strtok(NULL, ",");
    }
    
    // Case conversion
    char mixed[] = "HeLLo WoRLd";
    printf("\\nOriginal: %s\\n", mixed);
    
    // Convert to lowercase
    for(int i = 0; mixed[i]; i++) {
        mixed[i] = tolower(mixed[i]);
    }
    printf("Lowercase: %s\\n", mixed);
    
    // Convert to uppercase
    for(int i = 0; mixed[i]; i++) {
        mixed[i] = toupper(mixed[i]);
    }
    printf("Uppercase: %s\\n", mixed);
    
    return 0;
}`}
                title="Advanced String Functions"
                language="c"
                showExpand={false}
              />
            </div>
          </div>
        </div>

        {/* Custom String Functions */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">Custom String Functions</h2>
          
          <CodeBox
            code={`#include <stdio.h>

// Custom strlen() function
int string_length(char str[]) {
    int length = 0;
    while(str[length] != '\\0') {
        length++;
    }
    return length;
}

// Custom strcpy() function
void string_copy(char dest[], char src[]) {
    int i = 0;
    while(src[i] != '\\0') {
        dest[i] = src[i];
        i++;
    }
    dest[i] = '\\0';  // Add null terminator
}

// Custom strcat() function
void string_concat(char dest[], char src[]) {
    int dest_len = string_length(dest);
    int i = 0;
    
    while(src[i] != '\\0') {
        dest[dest_len + i] = src[i];
        i++;
    }
    dest[dest_len + i] = '\\0';
}

// Custom strcmp() function
int string_compare(char str1[], char str2[]) {
    int i = 0;
    
    while(str1[i] == str2[i]) {
        if(str1[i] == '\\0') {
            return 0;  // Strings are equal
        }
        i++;
    }
    
    return str1[i] - str2[i];  // Difference at first mismatch
}

// Custom string reverse
void string_reverse(char str[]) {
    int length = string_length(str);
    int start = 0, end = length - 1;
    
    while(start < end) {
        // Swap characters
        char temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        start++;
        end--;
    }
}

// Custom palindrome check
int is_palindrome(char str[]) {
    int length = string_length(str);
    int start = 0, end = length - 1;
    
    while(start < end) {
        if(str[start] != str[end]) {
            return 0;  // Not palindrome
        }
        start++;
        end--;
    }
    return 1;  // Is palindrome
}

int main() {
    // Test custom functions
    char str1[50] = "Hello";
    char str2[50] = "World";
    char result[100];
    
    printf("String 1: %s (length: %d)\\n", 
           str1, string_length(str1));
    printf("String 2: %s (length: %d)\\n", 
           str2, string_length(str2));
    
    // Test string_copy
    string_copy(result, str1);
    printf("\\nAfter copy: %s\\n", result);
    
    // Test string_concat
    string_concat(result, " ");
    string_concat(result, str2);
    printf("After concatenation: %s\\n", result);
    
    // Test string_compare
    printf("\\nCompare 'Hello' and 'Hello': %d\\n", 
           string_compare("Hello", "Hello"));
    printf("Compare 'Hello' and 'World': %d\\n", 
           string_compare("Hello", "World"));
    
    // Test string_reverse
    char to_reverse[] = "Programming";
    printf("\\nOriginal: %s\\n", to_reverse);
    string_reverse(to_reverse);
    printf("Reversed: %s\\n", to_reverse);
    
    // Test palindrome
    char palindrome[] = "madam";
    char not_palindrome[] = "hello";
    
    printf("\\n'%s' is palindrome: %s\\n", 
           palindrome, is_palindrome(palindrome) ? "Yes" : "No");
    printf("'%s' is palindrome: %s\\n", 
           not_palindrome, is_palindrome(not_palindrome) ? "Yes" : "No");
    
    return 0;
}`}
            title="Custom String Function Implementation"
            language="c"
          />
        </div>

        {/* String Applications */}
        <div className="section-block">
          <h2 className="h3 mb-3 fw-bold">String Applications</h2>
          
          <div className="row g-4">
            <div className="col-md-6">
              <CodeBox
                code={`#include <stdio.h>
#include <string.h>
#include <ctype.h>

// Word counter
int count_words(char str[]) {
    int count = 0;
    int in_word = 0;
    
    for(int i = 0; str[i] != '\\0'; i++) {
        if(isspace(str[i])) {
            in_word = 0;
        } else if(!in_word) {
            in_word = 1;
            count++;
        }
    }
    return count;
}

// Character frequency counter
void char_frequency(char str[]) {
    int frequency[256] = {0};  // For all ASCII characters
    
    // Count frequency of each character
    for(int i = 0; str[i] != '\\0'; i++) {
        frequency[(int)str[i]]++;
    }
    
    printf("Character frequency:\\n");
    for(int i = 0; i < 256; i++) {
        if(frequency[i] > 0 && isprint(i)) {
            printf("'%c': %d times\\n", i, frequency[i]);
        }
    }
}

// Remove spaces from string
void remove_spaces(char str[]) {
    int j = 0;
    for(int i = 0; str[i] != '\\0'; i++) {
        if(!isspace(str[i])) {
            str[j++] = str[i];
        }
    }
    str[j] = '\\0';
}

int main() {
    // Word count example
    char text[] = "C programming is fun and powerful";
    printf("Text: %s\\n", text);
    printf("Word count: %d\\n\\n", count_words(text));
    
    // Character frequency
    char sample[] = "programming";
    char_frequency(sample);
    
    // Remove spaces
    char with_spaces[] = "  Hello   World  !  ";
    printf("\\nOriginal: '%s'\\n", with_spaces);
    remove_spaces(with_spaces);
    printf("Without spaces: '%s'\\n\\n", with_spaces);
    
    // String encryption (Caesar cipher)
    char message[] = "HELLO WORLD";
    int shift = 3;
    
    printf("Original message: %s\\n", message);
    printf("Encrypted (shift %d): ", shift);
    
    for(int i = 0; message[i] != '\\0'; i++) {
        if(isupper(message[i])) {
            printf("%c", ((message[i] - 'A' + shift) % 26) + 'A');
        } else if(islower(message[i])) {
            printf("%c", ((message[i] - 'a' + shift) % 26) + 'a');
        } else {
            printf("%c", message[i]);
        }
    }
    printf("\\n");
    
    return 0;
}`}
                title="Text Processing"
                language="c"
                showExpand={false}
              />
            </div>
            
            <div className="col-md-6">
              <CodeBox
                code={`#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// Convert string to integer
int string_to_int(char str[]) {
    int result = 0;
    int sign = 1;
    int i = 0;
    
    // Handle negative numbers
    if(str[0] == '-') {
        sign = -1;
        i = 1;
    }
    
    // Convert each character to digit
    while(str[i] != '\\0') {
        if(str[i] >= '0' && str[i] <= '9') {
            result = result * 10 + (str[i] - '0');
        } else {
            printf("Invalid character: %c\\n", str[i]);
            return 0;
        }
        i++;
    }
    
    return result * sign;
}

// Convert integer to string
void int_to_string(int num, char str[]) {
    int i = 0;
    int is_negative = 0;
    
    // Handle negative numbers
    if(num < 0) {
        is_negative = 1;
        num = -num;
    }
    
    // Handle zero
    if(num == 0) {
        str[i++] = '0';
        str[i] = '\\0';
        return;
    }
    
    // Convert digits to characters in reverse
    while(num != 0) {
        int digit = num % 10;
        str[i++] = digit + '0';
        num /= 10;
    }
    
    // Add negative sign if needed
    if(is_negative) {
        str[i++] = '-';
    }
    
    str[i] = '\\0';
    
    // Reverse the string
    int start = 0, end = i - 1;
    while(start < end) {
        char temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        start++;
        end--;
    }
}

// Extract substring
void substring(char source[], int start, int length, char result[]) {
    int i;
    for(i = 0; i < length && source[start + i] != '\\0'; i++) {
        result[i] = source[start + i];
    }
    result[i] = '\\0';
}

int main() {
    // String to integer conversion
    char num_str[] = "12345";
    char neg_str[] = "-6789";
    
    int num1 = string_to_int(num_str);
    int num2 = string_to_int(neg_str);
    
    printf("String '%s' to int: %d\\n", num_str, num1);
    printf("String '%s' to int: %d\\n", neg_str, num2);
    printf("Sum: %d\\n\\n", num1 + num2);
    
    // Integer to string conversion
    char str1[20], str2[20];
    int_to_string(12345, str1);
    int_to_string(-6789, str2);
    
    printf("Int 12345 to string: %s\\n", str1);
    printf("Int -6789 to string: %s\\n\\n", str2);
    
    // Substring extraction
    char source[] = "Programming in C";
    char sub[50];
    
    substring(source, 0, 11, sub);
    printf("Substring(0, 11) of '%s': %s\\n", source, sub);
    
    substring(source, 12, 2, sub);
    printf("Substring(12, 2) of '%s': %s\\n", source, sub);
    
    // String validation (only alphabets)
    char test1[] = "Hello123";
    char test2[] = "OnlyLetters";
    
    int valid1 = 1, valid2 = 1;
    for(int i = 0; test1[i] != '\\0'; i++) {
        if(!isalpha(test1[i])) {
            valid1 = 0;
            break;
        }
    }
    
    for(int i = 0; test2[i] != '\\0'; i++) {
        if(!isalpha(test2[i])) {
            valid2 = 0;
            break;
        }
    }
    
    printf("\\n'%s' contains only letters: %s\\n", 
           test1, valid1 ? "Yes" : "No");
    printf("'%s' contains only letters: %s\\n", 
           test2, valid2 ? "Yes" : "No");
    
    return 0;
}`}
                title="String Conversion & Manipulation"
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