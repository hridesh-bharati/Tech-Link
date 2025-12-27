// src/components/Dictionary/CLanguage/Chapter17.jsx
import React from 'react';
import CodeBox from '../CodeBox/CodeBox';

export default function Chapter17() {
  return (
    <div className="chapter-content">
      <div className="chapter-header mb-4">
        <h1 className="h2 fw-bold">C ARRAYS</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">C Tutorial</a></li>
            <li className="breadcrumb-item active">Arrays</li>
          </ol>
        </nav>
      </div>

      <div className="content-section">
        {/* Definition */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">Definition</h2>
          <div className="definition-card">
            <p className="lead">
              An <strong>array</strong> is a collection of elements of the same data type 
              stored in contiguous memory locations. Arrays allow storing multiple values 
              under a single variable name with an index.
            </p>
          </div>
        </div>

        {/* Array Declaration & Initialization */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">Array Declaration & Initialization</h2>
          
          <div className="row g-4">
            <div className="col-md-6">
              <CodeBox
                code={`// Different ways to declare and initialize arrays

// Method 1: Declaration then initialization
int numbers[5];          // Declare array of 5 integers
numbers[0] = 10;         // Initialize elements
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;

// Method 2: Declaration with initialization
int marks[5] = {85, 90, 78, 92, 88};

// Method 3: Declaration without size (compiler counts)
int scores[] = {95, 86, 77, 88, 99};  // Size = 5

// Method 4: Partial initialization
int data[10] = {1, 2, 3};  // First 3 initialized, rest = 0

// Method 5: Character array (string)
char name[] = "John";
char vowels[5] = {'a', 'e', 'i', 'o', 'u'};

// Method 6: Zero initialization
int zeros[10] = {0};  // All elements = 0

// Method 7: Designated initializers (C99)
int arr[10] = {[0] = 1, [5] = 2, [9] = 3};`}
                title="Array Declaration Methods"
                language="c"
                showExpand={false}
              />
            </div>
            
            <div className="col-md-6">
              <div className="memory-diagram">
                <h5>Memory Representation</h5>
                <div className="memory-grid">
                  {[10, 20, 30, 40, 50].map((value, idx) => (
                    <div key={idx} className="memory-cell">
                      <div className="cell-index">index[{idx}]</div>
                      <div className="cell-value">{value}</div>
                      <div className="cell-address">Address: 1000+{idx*4}</div>
                    </div>
                  ))}
                </div>
                <p className="small text-muted mt-2">
                  Arrays store elements in contiguous memory. int = 4 bytes, so addresses increase by 4.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Accessing Array Elements */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">Accessing Array Elements</h2>
          
          <CodeBox
            code={`#include <stdio.h>

int main() {
    // Declare and initialize array
    int numbers[5] = {10, 20, 30, 40, 50};
    
    // Access individual elements
    printf("Element at index 0: %d\\n", numbers[0]);
    printf("Element at index 2: %d\\n", numbers[2]);
    printf("Element at index 4: %d\\n", numbers[4]);
    
    // Modify array elements
    numbers[1] = 25;  // Change second element
    numbers[3] = 45;  // Change fourth element
    
    printf("\\nModified array:\\n");
    for(int i = 0; i < 5; i++) {
        printf("numbers[%d] = %d\\n", i, numbers[i]);
    }
    
    // Calculate sum of array elements
    int sum = 0;
    for(int i = 0; i < 5; i++) {
        sum += numbers[i];
    }
    printf("\\nSum of array elements: %d\\n", sum);
    printf("Average: %.2f\\n", sum / 5.0);
    
    // Find maximum element
    int max = numbers[0];
    for(int i = 1; i < 5; i++) {
        if(numbers[i] > max) {
            max = numbers[i];
        }
    }
    printf("Maximum element: %d\\n", max);
    
    // Character array (string) access
    char name[] = "Programming";
    printf("\\nString: %s\\n", name);
    printf("First character: %c\\n", name[0]);
    printf("Fifth character: %c\\n", name[4]);
    printf("Length: %d characters\\n", 11);
    
    return 0;
}`}
            title="Array Access Examples"
            language="c"
          />
        </div>

        {/* Multi-dimensional Arrays */}
        <div className="section-block mb-5">
          <h2 className="h3 mb-3 fw-bold">Multi-dimensional Arrays</h2>
          
          <div className="row g-4">
            <div className="col-md-6">
              <CodeBox
                code={`#include <stdio.h>

// 2D Arrays
int main() {
    // 2D array declaration and initialization
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    
    printf("2D Array (Matrix):\\n");
    // Access and print 2D array
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\\n");
    }
    
    // Calculate sum of all elements
    int total = 0;
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            total += matrix[i][j];
        }
    }
    printf("\\nSum of all elements: %d\\n", total);
    
    // Find row sums
    printf("\\nRow sums:\\n");
    for(int i = 0; i < 3; i++) {
        int row_sum = 0;
        for(int j = 0; j < 3; j++) {
            row_sum += matrix[i][j];
        }
        printf("Row %d sum: %d\\n", i + 1, row_sum);
    }
    
    // Transpose of matrix
    printf("\\nTranspose of matrix:\\n");
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            printf("%d ", matrix[j][i]);
        }
        printf("\\n");
    }
    
    return 0;
}`}
                title="2D Arrays"
                language="c"
                showExpand={false}
              />
            </div>
            
            <div className="col-md-6">
              <CodeBox
                code={`#include <stdio.h>

// 3D Arrays and String Arrays
int main() {
    // 3D Array
    int cube[2][3][4] = {
        {
            {1, 2, 3, 4},
            {5, 6, 7, 8},
            {9, 10, 11, 12}
        },
        {
            {13, 14, 15, 16},
            {17, 18, 19, 20},
            {21, 22, 23, 24}
        }
    };
    
    printf("3D Array Access:\\n");
    printf("cube[0][1][2] = %d\\n", cube[0][1][2]);  // 7
    printf("cube[1][2][3] = %d\\n", cube[1][2][3]);  // 24
    
    // Array of strings
    char names[5][20] = {
        "John",
        "Alice",
        "Bob",
        "Charlie",
        "Diana"
    };
    
    printf("\\nArray of Strings:\\n");
    for(int i = 0; i < 5; i++) {
        printf("Name[%d]: %s\\n", i, names[i]);
    }
    
    // Find longest name
    int max_length = 0;
    int longest_index = 0;
    
    for(int i = 0; i < 5; i++) {
        int length = 0;
        while(names[i][length] != '\\0') {
            length++;
        }
        if(length > max_length) {
            max_length = length;
            longest_index = i;
        }
    }
    
    printf("\\nLongest name: %s (%d characters)\\n", 
           names[longest_index], max_length);
    
    // Matrix multiplication
    int A[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int B[3][2] = {{7, 8}, {9, 10}, {11, 12}};
    int C[2][2] = {{0, 0}, {0, 0}};
    
    // Multiply A (2x3) and B (3x2) to get C (2x2)
    for(int i = 0; i < 2; i++) {
        for(int j = 0; j < 2; j++) {
            for(int k = 0; k < 3; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    
    printf("\\nMatrix Multiplication Result:\\n");
    for(int i = 0; i < 2; i++) {
        for(int j = 0; j < 2; j++) {
            printf("%d ", C[i][j]);
        }
        printf("\\n");
    }
    
    return 0;
}`}
                title="3D Arrays & String Arrays"
                language="c"
                showExpand={false}
              />
            </div>
          </div>
        </div>

        {/* Array Operations & Functions */}
        <div className="section-block">
          <h2 className="h3 mb-3 fw-bold">Array Operations & Functions</h2>
          
          <div className="row g-4">
            <div className="col-md-6">
              <CodeBox
                code={`#include <stdio.h>

// Function to print array
void print_array(int arr[], int size) {
    printf("Array elements: ");
    for(int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

// Function to find array sum
int array_sum(int arr[], int size) {
    int sum = 0;
    for(int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum;
}

// Function to find maximum element
int find_max(int arr[], int size) {
    int max = arr[0];
    for(int i = 1; i < size; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Function to reverse array
void reverse_array(int arr[], int size) {
    int start = 0, end = size - 1;
    while(start < end) {
        // Swap elements
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// Function to search element
int linear_search(int arr[], int size, int key) {
    for(int i = 0; i < size; i++) {
        if(arr[i] == key) {
            return i;  // Return index if found
        }
    }
    return -1;  // Return -1 if not found
}

int main() {
    int numbers[] = {23, 45, 67, 12, 89, 34};
    int size = 6;
    
    // Test functions
    print_array(numbers, size);
    
    int sum = array_sum(numbers, size);
    printf("Sum: %d\\n", sum);
    printf("Average: %.2f\\n", sum / (float)size);
    
    int max = find_max(numbers, size);
    printf("Maximum: %d\\n", max);
    
    // Search for element
    int key = 67;
    int position = linear_search(numbers, size, key);
    if(position != -1) {
        printf("%d found at index %d\\n", key, position);
    } else {
        printf("%d not found in array\\n", key);
    }
    
    // Reverse array
    printf("\\nBefore reverse: ");
    print_array(numbers, size);
    
    reverse_array(numbers, size);
    
    printf("After reverse: ");
    print_array(numbers, size);
    
    return 0;
}`}
                title="Array Functions"
                language="c"
                showExpand={false}
              />
            </div>
            
            <div className="col-md-6">
              <CodeBox
                code={`#include <stdio.h>
#include <stdbool.h>

// Function to sort array (Bubble Sort)
void bubble_sort(int arr[], int size) {
    for(int i = 0; i < size - 1; i++) {
        for(int j = 0; j < size - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                // Swap if wrong order
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Function to check if array is sorted
bool is_sorted(int arr[], int size) {
    for(int i = 0; i < size - 1; i++) {
        if(arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// Function to merge two arrays
void merge_arrays(int arr1[], int size1, 
                  int arr2[], int size2, 
                  int result[]) {
    int i = 0, j = 0, k = 0;
    
    // Merge until one array is exhausted
    while(i < size1 && j < size2) {
        if(arr1[i] < arr2[j]) {
            result[k++] = arr1[i++];
        } else {
            result[k++] = arr2[j++];
        }
    }
    
    // Copy remaining elements
    while(i < size1) {
        result[k++] = arr1[i++];
    }
    while(j < size2) {
        result[k++] = arr2[j++];
    }
}

// Function to remove duplicates
int remove_duplicates(int arr[], int size) {
    if(size == 0) return 0;
    
    int unique_index = 0;
    
    for(int i = 1; i < size; i++) {
        if(arr[i] != arr[unique_index]) {
            unique_index++;
            arr[unique_index] = arr[i];
        }
    }
    return unique_index + 1;  // New size
}

int main() {
    // Sorting example
    int unsorted[] = {64, 34, 25, 12, 22, 11, 90};
    int size = 7;
    
    printf("Original array: ");
    for(int i = 0; i < size; i++) printf("%d ", unsorted[i]);
    
    bubble_sort(unsorted, size);
    
    printf("\\nSorted array: ");
    for(int i = 0; i < size; i++) printf("%d ", unsorted[i]);
    
    printf("\\nIs sorted? %s\\n\\n", 
           is_sorted(unsorted, size) ? "Yes" : "No");
    
    // Merge arrays example
    int arr1[] = {1, 3, 5, 7};
    int arr2[] = {2, 4, 6, 8};
    int merged[8];
    
    merge_arrays(arr1, 4, arr2, 4, merged);
    
    printf("Merged array: ");
    for(int i = 0; i < 8; i++) printf("%d ", merged[i]);
    
    // Remove duplicates
    int with_duplicates[] = {1, 2, 2, 3, 4, 4, 4, 5, 5};
    int dup_size = 9;
    
    printf("\\n\\nArray with duplicates: ");
    for(int i = 0; i < dup_size; i++) printf("%d ", with_duplicates[i]);
    
    int new_size = remove_duplicates(with_duplicates, dup_size);
    
    printf("\\nArray without duplicates: ");
    for(int i = 0; i < new_size; i++) printf("%d ", with_duplicates[i]);
    
    return 0;
}`}
                title="Array Algorithms"
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