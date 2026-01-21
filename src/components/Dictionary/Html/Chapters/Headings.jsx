import React from "react";

export default function Headings() {
  return (
    <div className="bg-light min-vh-100 pb-5">

      {/* --- HEADER --- */}
      <header className="bg-primary text-white py-5 shadow-sm mb-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold">HTML Headings</h1>
          <p className="lead">
            Headings define the structure and hierarchy of web content.
          </p>
        </div>
      </header>

      <main className="container">
        <div className="row g-4">

          {/* --- 1. DEFINITION --- */}
          <section className="col-lg-7">
            <div className="card border-0 shadow-sm h-100 p-4">
              <h2 className="h4 fw-bold text-primary mb-3">
                What are Headings?
              </h2>

              <p className="fs-5 text-secondary">
                HTML <strong>heading tags</strong> are used to define titles and
                subtitles on a webpage. They range from
                <code> &lt;h1&gt;</code> to <code> &lt;h6&gt;</code>, where
                <strong> h1</strong> is the most important and
                <strong> h6</strong> is the least important.
              </p>

              <p className="text-secondary">
                Headings help users and search engines understand the
                <strong> structure</strong> and
                <strong> organization</strong> of content.
              </p>

              <div className="mt-4 p-3 bg-light border-start border-primary border-4 rounded">
                <h6 className="fw-bold">Key Point:</h6>
                <p className="mb-0 small">
                  Headings should be used for titles only — not for styling text.
                  Use CSS for design and headings for structure.
                </p>
              </div>
            </div>
          </section>

          {/* --- 2. HEADING SYNTAX --- */}
          <section className="col-lg-5">
            <div className="card border-0 shadow-sm h-100 bg-dark text-white p-4">
              <h5 className="text-primary-emphasis mb-4">Heading Syntax</h5>

              <pre className="bg-black text-light p-3 rounded small mb-0">
{`<h1>Main Heading</h1>
<h2>Section Heading</h2>
<h3>Subsection</h3>
<h4>Sub-subsection</h4>
<h5>Minor Heading</h5>
<h6>Least Important</h6>`}
              </pre>

              <ul className="list-unstyled mt-3 small text-white-50">
                <li>✔ Block-level elements</li>
                <li>✔ Appear on new lines</li>
                <li>✔ Automatically bold & sized</li>
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
  <title>Heading Example</title>
</head>
<body>

  <h1>Main Website Title</h1>
  <h2>About Us</h2>
  <h3>Our Mission</h3>
  <h3>Our Vision</h3>
  <h2>Contact</h2>

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
                <h1>Main Website Title</h1>
                <h2>About Us</h2>
                <h3>Our Mission</h3>
                <h3>Our Vision</h3>
                <h2>Contact</h2>
              </div>
            </div>
          </section>

          {/* --- 5. BEST PRACTICES --- */}
          <section className="col-12">
            <div className="card border-0 shadow-sm p-4">
              <h5 className="fw-bold text-primary mb-3">
                📌 Best Practices
              </h5>

              <ul className="mb-0">
                <li>Use only one <code>&lt;h1&gt;</code> per page</li>
                <li>Do not skip heading levels</li>
                <li>Use headings for structure, not styling</li>
                <li>Important for SEO and accessibility</li>
              </ul>
            </div>
          </section>

          {/* --- 6. PRACTICE EXERCISE --- */}
          <section className="col-12">
            <div className="card border-0 shadow-sm p-4">
              <h5 className="fw-bold text-primary mb-3">📝 Exercise</h5>
              <ol>
                <li>Create a main title using <code>&lt;h1&gt;</code></li>
                <li>Add two sections using <code>&lt;h2&gt;</code></li>
                <li>Add subsections using <code>&lt;h3&gt;</code></li>
              </ol>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
