import React from "react";
import CodeBox from "../CodeBox/CodeBox";

export default function CppChapter7() {
  return (
    <div className="chapter-content container-fluid px-3 pb-5">

      {/* Header */}
      <div className="chapter-header mt-2 mb-4 text-center">
        <h1 className="h2 fw-bold">📘 Chapter 7: C++ Data Types</h1>
        <p className="text-white">
          Definition, classification and detailed explanation of data types in C++
        </p>
      </div>

      {/* Intro Card */}
      <div className="card shadow-lg mb-4" style={{ borderLeft: "5px solid #198754" }}>
        <div
          className="card-body text-white p-4"
          style={{ background: "linear-gradient(135deg,#198754,#20c997)" }}
        >
          <h2 className="fw-bold">What is a Data Type?</h2>
          <p className="mb-0">
            A <b>data type</b> specifies the type of data a variable can store,
            how much memory it occupies, and what operations can be performed on it.
          </p>
        </div>
      </div>

      {/* Definition */}
      <section className="mb-5">
        <h3 className="fw-bold text-primary">📘 Data Type – Definition</h3>
        <div className="alert alert-info">
          <b>Definition:</b>  
          A data type in C++ defines the kind of value a variable can store
          and determines the amount of memory allocated to it.
        </div>

        <CodeBox
          title="Basic Example"
          language="cpp"
          code={`int age = 20;
float price = 99.5;
char grade = 'A';
bool isPassed = true;`}
        />
      </section>

      {/* Classification */}
      <section className="mb-5">
        <h3 className="fw-bold text-success">📂 Classification of Data Types</h3>

        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Category</th>
              <th>Meaning</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Primitive (Basic)</td>
              <td>Stores simple and single values</td>
              <td>int, float, double, char, bool</td>
            </tr>
            <tr>
              <td>Derived</td>
              <td>Derived from primitive data types</td>
              <td>array, pointer, function</td>
            </tr>
            <tr>
              <td>User-Defined</td>
              <td>Created by programmer</td>
              <td>struct, union, enum, typedef</td>
            </tr>
            <tr>
              <td>Void</td>
              <td>Represents no value</td>
              <td>void</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Primitive */}
      <section className="mb-5">
        <h3 className="fw-bold text-warning">1️⃣ Primitive (Basic) Data Types</h3>

        <div className="card mb-3">
          <div className="card-body">
            <b>Definition:</b>  
            Primitive data types are basic built-in data types used to store
            simple values such as numbers, characters and boolean values.
          </div>
        </div>

        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Type</th>
              <th>Size</th>
              <th>Use</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>int</td><td>4 bytes</td><td>Whole numbers</td></tr>
            <tr><td>float</td><td>4 bytes</td><td>Decimal values</td></tr>
            <tr><td>double</td><td>8 bytes</td><td>High precision decimals</td></tr>
            <tr><td>char</td><td>1 byte</td><td>Single character</td></tr>
            <tr><td>bool</td><td>1 byte</td><td>true / false</td></tr>
          </tbody>
        </table>
      </section>

      {/* Derived */}
      <section className="mb-5">
        <h3 className="fw-bold text-info">2️⃣ Derived Data Types</h3>

        <div className="card mb-3">
          <div className="card-body">
            <b>Definition:</b>  
            Derived data types are those data types which are derived from
            primitive data types to store complex data.
          </div>
        </div>

        <CodeBox
          title="Derived Data Types Example"
          language="cpp"
          code={`int marks[3] = {80, 90, 85};   // Array

int *ptr = &marks[0];      // Pointer

int add(int a, int b) {    // Function
  return a + b;
}`}
        />
      </section>

      {/* User Defined */}
      <section className="mb-5">
        <h3 className="fw-bold text-danger">3️⃣ User-Defined Data Types</h3>

        <div className="card mb-3">
          <div className="card-body">
            <b>Definition:</b>  
            User-defined data types are created by the programmer to
            store multiple values of different data types in a structured way.
          </div>
        </div>

        <CodeBox
          title="User-Defined Data Types"
          language="cpp"
          code={`struct Student {
  int roll;
  char grade;
};

union Data {
  int i;
  float f;
};

enum Day { Mon, Tue, Wed };

typedef int marks;`}
        />
      </section>

      {/* Void */}
      <section className="mb-5">
        <h3 className="fw-bold text-secondary">4️⃣ Void Data Type</h3>

        <div className="alert alert-secondary">
          <b>Definition:</b>  
          Void data type represents the absence of value.
          It is mainly used with functions that do not return any value.
        </div>

        <CodeBox
          language="cpp"
          code={`void display() {
  cout << "Hello World";
}`}
        />
      </section>

      {/* Summary */}
      <section className="mb-5">
        <div className="alert alert-success">
          <h5>📌 Chapter Summary</h5>
          <ul>
            <li>Data types specify what kind of data a variable can store</li>
            <li>Primitive types store simple values</li>
            <li>Derived types handle complex data</li>
            <li>User-defined types improve data organization</li>
            <li>Void represents no value</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
