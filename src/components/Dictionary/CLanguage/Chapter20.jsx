// src/components/Dictionary/CLanguage/Chapter20.jsx
import React from 'react';
import CodeBox from '../CodeBox/CodeBox';

export default function Chapter20() {
  return (
    <div className="chapter-content">
      <div className="chapter-header mb-4">
        <h1 className="h2 fw-bold">C MEMORY ADDRESS</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">C Tutorial</a></li>
            <li className="breadcrumb-item active">Memory Address</li>
          </ol>
        </nav>
      </div>

      <div className="content-section">
        {/* Definition */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">Definition</h2>
          <div className="definition-card">
            <p className="lead">
              A <strong>memory address</strong> is a unique identifier for a specific 
              memory location. In C, every variable has a memory address where its 
              value is stored. The <code>&</code> (address-of) operator gets the 
              address of a variable.
            </p>
          </div>
        </div>

        {/* Address-of Operator */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">Address-of Operator (&)</h2>
          
          <CodeBox
            code={`#include <stdio.h>

int main() {
    // Different data types and their addresses
    int age = 25;
    float salary = 50000.50;
    char grade = 'A';
    double pi = 3.14159265359;
    
    // Get addresses using & operator
    printf("Variable addresses:\\n");
    printf("age = %d\\t\\tAddress: %p\\n", age, &age);
    printf("salary = %.2f\\tAddress: %p\\n", salary, &salary);
    printf("grade = %c\\t\\tAddress: %p\\n", grade, &grade);
    printf("pi = %.10lf\\tAddress: %p\\n", pi, &pi);
    
    // Array addresses
    int numbers[5] = {10, 20, 30, 40, 50};
    
    printf("\\nArray addresses:\\n");
    for(int i = 0; i < 5; i++) {
        printf("numbers[%d] = %d\\tAddress: %p\\n", 
               i, numbers[i], &numbers[i]);
    }
    
    // Structure addresses
    struct Student {
        char name[50];
        int roll_no;
        float marks;
    };
    
    struct Student s1 = {"John", 101, 85.5};
    
    printf("\\nStructure addresses:\\n");
    printf("s1.name = %s\\tAddress: %p\\n", s1.name, &s1.name);
    printf("s1.roll_no = %d\\tAddress: %p\\n", s1.roll_no, &s1.roll_no);
    printf("s1.marks = %.1f\\tAddress: %p\\n", s1.marks, &s1.marks);
    printf("Whole structure address: %p\\n", &s1);
    
    // Pointer variables
    int *ptr_int = &age;
    float *ptr_float = &salary;
    
    printf("\\nPointer variables:\\n");
    printf("ptr_int stores address: %p\\n", ptr_int);
    printf("ptr_float stores address: %p\\n", ptr_float);
    printf("Address of ptr_int: %p\\n", &ptr_int);
    printf("Address of ptr_float: %p\\n", &ptr_float);
    
    return 0;
}`}
            title="Memory Address Examples"
            language="c"
          />
        </div>

        {/* Pointer Basics */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">Pointer Basics</h2>
          
          <div className="row g-4">
            <div className="col-md-6">
              <CodeBox
                code={`#include <stdio.h>

int main() {
    // Pointer declaration and initialization
    int num = 42;
    int *ptr;      // Pointer declaration
    ptr = &num;    // Pointer initialization
    
    printf("Variable num:\\n");
    printf("Value: %d\\n", num);
    printf("Address: %p\\n", &num);
    
    printf("\\nPointer ptr:\\n");
    printf("Value (address stored): %p\\n", ptr);
    printf("Address of pointer: %p\\n", &ptr);
    printf("Value at address (dereference): %d\\n", *ptr);
    
    // Modifying value through pointer
    printf("\\nModifying through pointer...\\n");
    *ptr = 100;  // Change value at the address
    
    printf("New value of num: %d\\n", num);
    printf("New value through ptr: %d\\n", *ptr);
    
    // Multiple pointers
    int a = 10, b = 20;
    int *p1 = &a, *p2 = &b;
    
    printf("\\nMultiple pointers:\\n");
    printf("a = %d, Address: %p\\n", a, &a);
    printf("b = %d, Address: %p\\n", b, &b);
    printf("p1 points to: %p, Value: %d\\n", p1, *p1);
    printf("p2 points to: %p, Value: %d\\n", p2, *p2);
    
    // Pointer arithmetic
    printf("\\nPointer arithmetic:\\n");
    printf("p1 address: %p\\n", p1);
    printf("p1 + 1: %p\\n", p1 + 1);
    printf("p1 + 2: %p\\n", p1 + 2);
    printf("Size of int: %lu bytes\\n", sizeof(int));
    
    // Void pointer (generic pointer)
    void *generic_ptr;
    int x = 100;
    float y = 3.14;
    
    generic_ptr = &x;
    printf("\\nVoid pointer to int: %p\\n", generic_ptr);
    
    generic_ptr = &y;
    printf("Void pointer to float: %p\\n", generic_ptr);
    
    return 0;
}`}
                title="Basic Pointers"
                language="c"
                showExpand={false}
              />
            </div>
            
            <div className="col-md-6">
              <CodeBox
                code={`#include <stdio.h>

// Pointer to pointer
int main() {
    int value = 42;
    int *ptr = &value;
    int **ptr_to_ptr = &ptr;
    int ***ptr_to_ptr_to_ptr = &ptr_to_ptr;
    
    printf("Variable hierarchy:\\n");
    printf("value = %d\\t\\tAddress: %p\\n", value, &value);
    printf("*ptr = %d\\t\\tAddress stored: %p\\n", *ptr, ptr);
    printf("ptr address: %p\\n", &ptr);
    
    printf("\\nPointer to pointer:\\n");
    printf("**ptr_to_ptr = %d\\n", **ptr_to_ptr);
    printf("*ptr_to_ptr = %p (address of ptr)\\n", *ptr_to_ptr);
    printf("ptr_to_ptr = %p\\n", ptr_to_ptr);
    
    printf("\\nTriple pointer:\\n");
    printf("***ptr_to_ptr_to_ptr = %d\\n", ***ptr_to_ptr_to_ptr);
    printf("**ptr_to_ptr_to_ptr = %p\\n", **ptr_to_ptr_to_ptr);
    printf("*ptr_to_ptr_to_ptr = %p\\n", *ptr_to_ptr_to_ptr);
    printf("ptr_to_ptr_to_ptr = %p\\n", ptr_to_ptr_to_ptr);
    
    // NULL pointer
    int *null_ptr = NULL;
    
    printf("\\nNULL pointer:\\n");
    printf("null_ptr = %p\\n", null_ptr);
    
    if(null_ptr == NULL) {
        printf("Pointer is NULL\\n");
    }
    
    // Dangerous: dereferencing NULL pointer
    // printf("%d", *null_ptr);  // CRASH!
    
    // Pointer comparison
    int arr[5] = {10, 20, 30, 40, 50};
    int *p1 = &arr[0];
    int *p2 = &arr[3];
    
    printf("\\nPointer comparison:\\n");
    printf("p1 = %p (arr[0])\\n", p1);
    printf("p2 = %p (arr[3])\\n", p2);
    
    if(p1 < p2) {
        printf("p1 comes before p2 in memory\\n");
    }
    
    printf("Difference: %ld elements\\n", p2 - p1);
    
    // Const pointer vs pointer to const
    int data = 100;
    const int *ptr_to_const = &data;      // Pointer to constant
    int *const const_ptr = &data;         // Constant pointer
    const int *const const_ptr_to_const = &data;  // Both
    
    printf("\\nConst qualifiers with pointers:\\n");
    printf("data = %d\\n", data);
    
    // *ptr_to_const = 200;  // ERROR: cannot modify through ptr_to_const
    data = 200;  // OK: modifying original variable
    printf("After data = 200: *ptr_to_const = %d\\n", *ptr_to_const);
    
    *const_ptr = 300;  // OK: can modify through const_ptr
    printf("After *const_ptr = 300: data = %d\\n", data);
    
    // const_ptr = &value;  // ERROR: cannot change where const_ptr points
    
    return 0;
}`}
                title="Advanced Pointers"
                language="c"
                showExpand={false}
              />
            </div>
          </div>
        </div>

        {/* Memory Layout */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">Memory Layout of C Program</h2>
          
          <div className="memory-layout">
            <div className="memory-section text-center">
              <div className="section-header bg-danger text-white p-2">
                <strong>High Address</strong>
              </div>
              
              <div className="section-body">
                {[
                  { name: 'Command Line Arguments', color: 'bg-info', desc: 'argv, argc' },
                  { name: 'Stack', color: 'bg-warning', desc: 'Local variables, function calls' },
                  { name: 'Heap', color: 'bg-success', desc: 'Dynamically allocated memory' },
                  { name: 'Uninitialized Data (BSS)', color: 'bg-secondary', desc: 'Global/static variables (zero)' },
                  { name: 'Initialized Data', color: 'bg-primary', desc: 'Global/static variables (initialized)' },
                  { name: 'Text/Code', color: 'bg-dark text-white', desc: 'Program instructions' }
                ].map((section, idx) => (
                  <div key={idx} className={`memory-segment ${section.color} p-3 border`}>
                    <h6 className="mb-1">{section.name}</h6>
                    <small>{section.desc}</small>
                  </div>
                ))}
              </div>
              
              <div className="section-header bg-danger text-white p-2">
                <strong>Low Address</strong>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <CodeBox
              code={`#include <stdio.h>
#include <stdlib.h>

// Global variables (different segments)
int global_init = 100;           // Initialized data segment
int global_uninit;               // BSS segment
static int static_global = 200;  // Initialized data segment

void demonstrate_memory() {
    // Local variables (stack)
    int local_var = 10;
    static int static_local = 20;  // Data segment
    char local_str[] = "Hello";    // Stack
    
    // Dynamically allocated (heap)
    int *heap_var = (int*)malloc(sizeof(int) * 10);
    
    printf("Memory addresses:\\n");
    printf("Global initialized: %p\\n", &global_init);
    printf("Global uninitialized: %p\\n", &global_uninit);
    printf("Static global: %p\\n", &static_global);
    printf("Local variable: %p\\n", &local_var);
    printf("Static local: %p\\n", &static_local);
    printf("Local string: %p\\n", &local_str);
    printf("Heap allocated: %p\\n", heap_var);
    printf("Function address: %p\\n", demonstrate_memory);
    
    free(heap_var);  // Don't forget to free!
}

int main() {
    demonstrate_memory();
    
    // Stack growth demonstration
    int a = 1, b = 2, c = 3;
    
    printf("\\nStack addresses (grows downward):\\n");
    printf("a (%d): %p\\n", a, &a);
    printf("b (%d): %p\\n", b, &b);
    printf("c (%d): %p\\n", c, &c);
    
    // Array memory layout
    int arr[5] = {10, 20, 30, 40, 50};
    
    printf("\\nArray memory layout (contiguous):\\n");
    for(int i = 0; i < 5; i++) {
        printf("arr[%d] = %d\\tAddress: %p\\n", i, arr[i], &arr[i]);
    }
    
    // Structure memory layout
    struct Test {
        char a;
        int b;
        char c;
        double d;
    };
    
    struct Test test;
    
    printf("\\nStructure memory layout (with padding):\\n");
    printf("Size of struct: %lu bytes\\n", sizeof(struct Test));
    printf("test.a (%c): %p\\n", test.a, &test.a);
    printf("test.b (%d): %p\\n", test.b, &test.b);
    printf("test.c (%c): %p\\n", test.c, &test.c);
    printf("test.d (%lf): %p\\n", test.d, &test.d);
    
    return 0;
}`}
              title="Memory Segments Example"
              language="c"
            />
          </div>
        </div>

        {/* Practical Applications */}
        <div className="section-block">
          <h2 className="h3 mb-3 fw-bold">Practical Applications</h2>
          
          <div className="row g-4">
            <div className="col-md-6">
              <CodeBox
                code={`#include <stdio.h>

// Swap using pointers
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Function returning multiple values using pointers
void get_min_max(int arr[], int size, int *min, int *max) {
    *min = *max = arr[0];
    
    for(int i = 1; i < size; i++) {
        if(arr[i] < *min) {
            *min = arr[i];
        }
        if(arr[i] > *max) {
            *max = arr[i];
        }
    }
}

// Array traversal using pointers
void print_array(int *arr, int size) {
    printf("Array: ");
    for(int i = 0; i < size; i++) {
        printf("%d ", *(arr + i));  // Pointer arithmetic
    }
    printf("\\n");
}

int main() {
    // Swap example
    int x = 10, y = 20;
    printf("Before swap: x = %d, y = %d\\n", x, y);
    swap(&x, &y);
    printf("After swap: x = %d, y = %d\\n\\n", x, y);
    
    // Min/Max using pointers
    int numbers[] = {23, 45, 67, 12, 89, 34};
    int min, max;
    
    get_min_max(numbers, 6, &min, &max);
    printf("Array: 23, 45, 67, 12, 89, 34\\n");
    printf("Minimum: %d\\n", min);
    printf("Maximum: %d\\n\\n", max);
    
    // Array traversal
    print_array(numbers, 6);
    
    // Pointer arithmetic with arrays
    int *ptr = numbers;
    
    printf("\\nPointer arithmetic:\\n");
    printf("*ptr = %d (numbers[0])\\n", *ptr);
    printf("*(ptr + 2) = %d (numbers[2])\\n", *(ptr + 2));
    printf("*(ptr + 5) = %d (numbers[5])\\n", *(ptr + 5));
    
    // String manipulation using pointers
    char str[] = "Hello World";
    char *p = str;
    
    printf("\\nString via pointer: ");
    while(*p != '\\0') {
        printf("%c", *p);
        p++;
    }
    printf("\\n");
    
    // Reverse string using pointers
    char to_reverse[] = "Programming";
    char *start = to_reverse;
    char *end = to_reverse;
    
    // Find end of string
    while(*end != '\\0') {
        end++;
    }
    end--;  // Point to last character
    
    printf("\\nOriginal: %s\\n", to_reverse);
    
    // Reverse using pointers
    while(start < end) {
        char temp = *start;
        *start = *end;
        *end = temp;
        start++;
        end--;
    }
    
    printf("Reversed: %s\\n", to_reverse);
    
    return 0;
}`}
                title="Pointer Applications"
                language="c"
                showExpand={false}
              />
            </div>
            
            <div className="col-md-6">
              <CodeBox
                code={`#include <stdio.h>
#include <stdlib.h>

// Function pointer example
int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }
int multiply(int a, int b) { return a * b; }
int divide(int a, int b) { return b != 0 ? a / b : 0; }

// Calculator using function pointers
void calculator(int (*operation)(int, int), int a, int b, char *op_name) {
    int result = operation(a, b);
    printf("%d %s %d = %d\\n", a, op_name, b, result);
}

// Array of function pointers
int main() {
    // Function pointer declaration
    int (*func_ptr)(int, int);
    
    // Using function pointer
    func_ptr = add;
    printf("Using function pointer: %d\\n", func_ptr(10, 5));
    
    func_ptr = multiply;
    printf("Using function pointer: %d\\n\\n", func_ptr(10, 5));
    
    // Array of function pointers
    int (*operations[4])(int, int) = {add, subtract, multiply, divide};
    char *op_names[] = {"+", "-", "*", "/"};
    
    printf("Calculator using function pointer array:\\n");
    printf("========================\\n");
    
    for(int i = 0; i < 4; i++) {
        calculator(operations[i], 20, 5, op_names[i]);
    }
    
    // Pointer to function that returns pointer
    int* (*get_array)(int);
    
    // Dynamic memory allocation example
    int *create_int_array(int size) {
        return (int*)malloc(size * sizeof(int));
    }
    
    get_array = create_int_array;
    int *dynamic_arr = get_array(5);
    
    if(dynamic_arr != NULL) {
        for(int i = 0; i < 5; i++) {
            dynamic_arr[i] = (i + 1) * 10;
        }
        
        printf("\\nDynamic array values: ");
        for(int i = 0; i < 5; i++) {
            printf("%d ", dynamic_arr[i]);
        }
        printf("\\n");
        
        free(dynamic_arr);
    }
    
    // Complex function pointer
    typedef int (*math_func)(int, int);
    math_func my_func = add;
    
    printf("\\nUsing typedef for function pointer: %d\\n", my_func(30, 15));
    
    return 0;
}`}
                title="Function Pointers"
                language="c"
                showExpand={false}
              />
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="section-block mt-5">
          <div className="key-points p-4 bg-light rounded">
            <h3 className="h4 mb-3 fw-bold">Key Points</h3>
            <ul className="list-unstyled">
              <li className="mb-2">✓ Every variable has a unique memory address</li>
              <li className="mb-2">✓ Use <code>&</code> operator to get address of a variable</li>
              <li className="mb-2">✓ Pointers store memory addresses</li>
              <li className="mb-2">✓ Use <code>*</code> operator to dereference a pointer</li>
              <li className="mb-2">✓ Pointer arithmetic is based on data type size</li>
              <li className="mb-2">✓ NULL pointer points to nowhere (address 0)</li>
              <li className="mb-2">✓ Different memory segments: Stack, Heap, Data, Code</li>
              <li className="mb-2">✓ Function pointers enable dynamic function calls</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}