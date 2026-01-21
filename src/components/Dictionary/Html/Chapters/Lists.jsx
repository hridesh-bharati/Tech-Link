import React from "react";

export default function Lists() {
  return (
    <div className="bg-light min-vh-100 pb-5">

      {/* --- HEADER --- */}
      <header className="py-5 shadow-sm mb-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold text-danger">
            <i className="bi bi-list-ul me-3"></i>HTML Lists: Complete Guide
          </h1>
          <p className="lead">
            Lists are used to display content in an organized, structured way.
          </p>
        </div>
      </header>

      <main className="container">
        <div className="row">

          {/* --- 1. DEFINITION --- */}
          <section className="col-lg-7">
            <div className="card border-0 shadow-sm h-100 p-4">
              <p className="fs-5 text-secondary">
                HTML provides several types of lists to organize content:
                <strong> unordered lists (<code>&lt;ul&gt;</code>)</strong>,
                <strong> ordered lists (<code>&lt;ol&gt;</code>)</strong>,
                and <strong>description lists (<code>&lt;dl&gt;</code>)</strong>.
              </p>

              <p className="text-secondary">
                List items are defined using <code>&lt;li&gt;</code> in
                <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code>. In
                description lists, <code>&lt;dt&gt;</code> defines the term and
                <code>&lt;dd&gt;</code> describes it.
              </p>

              <div className="mt-4 p-3 bg-light border-start border-primary border-4 rounded">
                <h6 className="fw-bold">Key Point:</h6>
                <p className="mb-0 small">
                  Lists improve readability and organization of repeated items,
                  making content easier to scan and understand.
                </p>
              </div>
            </div>
          </section>

          {/* --- 2. LIST SYNTAX --- */}
          <section className="col-lg-5">
            <div className="card border-0 shadow-sm h-100 bg-dark text-white p-4">
              <h5 className="text-warning mb-4">List Syntax</h5>

              <pre className="bg-black text-light p-3 rounded small mb-0">
                {`<!-- Unordered List -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>

<!-- Description List -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`}
              </pre>

              <ul className="list-unstyled mt-3 small text-white-50">
                <li>✔ Use <code>&lt;ul&gt;</code> for unordered items</li>
                <li>✔ Use <code>&lt;ol&gt;</code> for ordered items</li>
                <li>✔ Use <code>&lt;dl&gt;</code> with <code>&lt;dt&gt;</code> and <code>&lt;dd&gt;</code> for definitions</li>
              </ul>
            </div>
          </section>

          {/* --- 3. CODE WITH DOCTYPE --- */}
          <section className="col-12 mt-4">
            <div className="card border-0 shadow-sm p-4">
              <h5 className="fw-bold text-primary mb-3">
                Example (DOCTYPE se)
              </h5>

              <pre className="bg-dark text-light p-3 rounded small">
                {`<!DOCTYPE html>
<html>
<head>
  <title>HTML Lists Example</title>
</head>
<body>

  <h1>My Grocery List</h1>

  <!-- Unordered List -->
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Oranges</li>
  </ul>

  <!-- Ordered List -->
  <h2>Steps to Make Tea</h2>
  <ol>
    <li>Boil water</li>
    <li>Add tea leaves</li>
    <li>Pour milk</li>
    <li>Serve hot</li>
  </ol>

  <!-- Description List -->
  <h2>Tech Terms</h2>
  <dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
    <dt>JS</dt>
    <dd>JavaScript</dd>
  </dl>

</body>
</html>`}
              </pre>
            </div>
          </section>

          {/* --- 4. OUTPUT PREVIEW --- */}
          <section className="col-12">
            <div className="card border-0 shadow-sm p-4">
              <h5 className="fw-bold text-primary mb-3">Output:</h5>

              <div className="p-4 bg-white border rounded">
                <h1>My Grocery List</h1>
                <ul>
                  <li>Apples</li>
                  <li>Bananas</li>
                  <li>Oranges</li>
                </ul>

                <h2>Steps to Make Tea</h2>
                <ol>
                  <li>Boil water</li>
                  <li>Add tea leaves</li>
                  <li>Pour milk</li>
                  <li>Serve hot</li>
                </ol>

                <h2>Tech Terms</h2>
                <dl>
                  <dt>HTML</dt>
                  <dd>HyperText Markup Language</dd>
                  <dt>CSS</dt>
                  <dd>Cascading Style Sheets</dd>
                  <dt>JS</dt>
                  <dd>JavaScript</dd>
                </dl>
              </div>
            </div>
          </section>

          {/* --- 5. BEST PRACTICES --- */}
          <section className="col-12">
            <div className="card border-0 shadow-sm p-4">
              <h5 className="fw-bold text-primary mb-3">📌 Best Practices</h5>
              <ul className="mb-0">
                <li>Use <code>&lt;ul&gt;</code> for lists without order</li>
                <li>Use <code>&lt;ol&gt;</code> for sequential steps</li>
                <li>Use <code>&lt;dl&gt;</code> for term-description pairs</li>
                <li>Always wrap items in <code>&lt;li&gt;</code> tags</li>
              </ul>
            </div>
          </section>

          {/* --- 6. PRACTICE EXERCISE --- */}
          <section className="col-12">
            <div className="card border-0 shadow-sm p-4">
              <h5 className="fw-bold text-primary mb-3">📝 Exercise</h5>
              <ol>
                <li>Create an unordered list of your favorite foods</li>
                <li>Create an ordered list of your daily routine</li>
                <li>Create a description list for 3 programming languages</li>
              </ol>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
