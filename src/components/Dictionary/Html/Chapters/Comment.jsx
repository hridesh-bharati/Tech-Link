import React from "react";

const Comment = () => {
  return (
    <div className="container py-5">
      
      {/* Page Title */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">HTML Comments</h2>
        <p className="text-muted mt-2">
          HTML comments help developers explain code and leave notes without affecting output.
        </p>
      </div>

      {/* Intro Card */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h5 className="card-title">📌 What are HTML Comments?</h5>
          <p className="card-text text-muted">
            HTML comments are used to explain code, write notes, and mark temporary
            changes. They are not rendered in the browser but remain visible in the
            page source.
          </p>
        </div>
      </div>

      {/* Syntax */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h5 className="card-title">🧩 Basic Syntax</h5>

          <pre className="bg-dark text-light p-3 rounded mt-3">
{`<!-- This is an HTML comment -->`}
          </pre>

          <ul className="mt-3">
            <li>Starts with <code>&lt;!--</code></li>
            <li>Ends with <code>--&gt;</code></li>
            <li>Can contain any text</li>
          </ul>
        </div>
      </div>

      {/* Types */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h5 className="card-title">📂 Types of HTML Comments</h5>

          {/* Single Line */}
          <div className="mt-4">
            <span className="badge bg-primary mb-2">Single-line Comment</span>
            <pre className="bg-dark text-light p-2 rounded small">
{`<!-- This is a single-line comment -->`}
            </pre>
            <p className="small text-muted">
              Used for short explanations or quick notes.
            </p>
          </div>

          {/* Multi Line */}
          <div className="mt-4">
            <span className="badge bg-success mb-2">Multi-line Comment</span>
            <pre className="bg-dark text-light p-2 rounded small">
{`<!--
  This is a multi-line comment
  Used for long explanations
-->`}
            </pre>
            <p className="small text-muted">
              Best for long descriptions or section explanations.
            </p>
          </div>
        </div>
      </div>

      {/* Example */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h5 className="card-title">📘 Complete Example</h5>

          <pre className="bg-dark text-light p-3 rounded mt-3 small">
{`<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
  <!-- Meta description for SEO -->
</head>
<body>

  <!-- Header Section -->
  <header>
    <h1>Welcome</h1>
  </header>

  <!-- Main Content -->
  <main>
    <p>This is my website content.</p>
  </main>

  <!-- TODO: Add footer -->
</body>
</html>`}
          </pre>
        </div>
      </div>

      {/* Best Practices */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h5 className="card-title">✅ Best Practices</h5>
          <ul className="mt-3">
            <li>Write comments only where they add value</li>
            <li>Avoid commenting obvious code</li>
            <li>Remove outdated or misleading comments</li>
          </ul>
        </div>
      </div>

      {/* Note */}
      <div className="alert alert-warning shadow-sm">
        <strong>⚠ Note:</strong> HTML comments do not appear on the webpage,
        but anyone can view them using “View Page Source”.
      </div>

    </div>
  );
};

export default Comment;
