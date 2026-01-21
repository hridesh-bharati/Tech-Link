import React, { useState } from 'react';

// --- DATA: Common Text Formatting Tags ---
const FORMATTING_TAGS = [
  { tag: '<strong>', effect: 'Bold text', use: 'Importance' },
  { tag: '<em>', effect: 'Italic text', use: 'Emphasis' },
  { tag: '<mark>', effect: 'Yellow background', use: 'Highlighting' },
  { tag: '<small>', effect: 'Smaller font', use: 'Side comments' },
  { tag: '<ins>', effect: 'Underline', use: 'Inserted text' },
];

const ParagraphsGuide = () => {
  const [textAlign, setTextAlign] = useState('left');

  return (
    <div className="bg-light min-vh-100 pb-5">
      {/* --- Header --- */}
      <header className="bg-success text-white py-5 shadow-sm mb-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Paragraphs in HTML</h1>
          <p className="lead">
            The <code>&lt;p&gt;</code> element is the backbone of web content.
          </p>
        </div>
      </header>

      <main className="container">
        <div className="row g-4">

          {/* --- 1. THE DEFINITION --- */}
          <section className="col-lg-7">
            <div className="card border-0 shadow-sm h-100 p-4">
              <h2 className="h3 fw-bold mb-3 text-success">
                <i className="fas fa-align-left me-2"></i>What is a Paragraph?
              </h2>

              {/* ✅ NEW DEFINITION */}
              <p className="fs-5 text-secondary">
                The <strong>&lt;p&gt; (paragraph) tag</strong> in HTML is used to define
                a block of text content. It represents a group of related sentences and
                helps structure written content on a webpage.
              </p>

              <p className="text-secondary">
                Browsers automatically add <strong>margin (white space)</strong> before
                and after a <code>&lt;p&gt;</code> element, making the content easier
                to read and visually separated from other elements.
              </p>

              <div className="mt-4 p-3 bg-light border-start border-success border-4 rounded">
                <h6 className="fw-bold">Key Rule:</h6>
                <p className="mb-0 small">
                  Extra spaces or new lines in HTML code are ignored by the browser.
                  To create a new line inside a paragraph, use the
                  <code> &lt;br /&gt;</code> tag.
                </p>
              </div>
            </div>
          </section>

          {/* --- 2. THE VISUAL ANATOMY --- */}
          <section className="col-lg-5">
            <div className="card border-0 shadow-sm h-100 bg-dark text-white p-4">
              <h5 className="text-success-emphasis mb-4">Code Syntax</h5>

              <div className="font-monospace fs-4 text-center py-3">
                <span className="text-success">&lt;p&gt;</span>
                <span className="mx-2">Your text here...</span>
                <span className="text-success">&lt;/p&gt;</span>
              </div>

              <ul className="list-unstyled mt-3 small text-white-50">
                <li>✔ Block-level element</li>
                <li>✔ Starts on a new line</li>
                <li>✔ Takes full available width</li>
              </ul>
            </div>
          </section>

          {/* --- 3. INTERACTIVE ALIGNMENT DEMO --- */}
          <section className="col-12 mt-4">
            <div className="card border-0 shadow-sm p-4">
              <div
                className={`p-4 bg-white border rounded shadow-inner text-${textAlign}`}
                style={{ transition: 'all 0.3s ease' }}
              >
                <p className="mb-0 fs-5">
                  This paragraph demonstrates how text alignment works.
                  Paragraphs improve readability and organize long content
                  such as articles, blogs, and documentation.
                </p>
              </div>
            </div>
          </section>

          {/* --- 4. FORMATTING TABLE --- */}
          <section className="col-12 mt-4">
            <div className="card border-0 shadow-sm overflow-hidden">
              <div className="card-header bg-success text-white fw-bold">
                Text Formatting inside Paragraphs
              </div>

              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Tag</th>
                      <th>Visual Result</th>
                      <th>Best Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FORMATTING_TAGS.map((item, i) => (
                      <tr key={i}>
                        <td>
                          <code className="text-success fw-bold">
                            {item.tag}
                          </code>
                        </td>
                        <td>
                          {item.tag === '<strong>' && <strong>{item.effect}</strong>}
                          {item.tag === '<em>' && <em>{item.effect}</em>}
                          {item.tag === '<mark>' && <mark>{item.effect}</mark>}
                          {item.tag === '<small>' && <small>{item.effect}</small>}
                          {item.tag === '<ins>' && <ins>{item.effect}</ins>}
                        </td>
                        <td className="small text-muted">{item.use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
           {/* --- HTML CODE EXAMPLE --- */}
<div className="mt-4">
  <h5 className="fw-bold text-success mb-2">HTML Example:</h5>

  <pre className="bg-dark text-light p-3 rounded small">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Paragraph Example</title>
</head>
<body>

  <p>This is my first paragraph in HTML.</p>

  <p>
    This is my second paragraph.
    Browser automatically adds space
    before and after paragraphs.
  </p>

</body>
</html>`}
  </pre>
</div>

{/* --- OUTPUT PREVIEW --- */}
<div className="mt-4">
  <h5 className="fw-bold text-success mb-2">Output:</h5>

  <div className="p-4 bg-white border rounded shadow-sm">
    <p>This is my first paragraph in HTML.</p>

    <p>
      This is my second paragraph.
      Browser automatically adds space
      before and after paragraphs.
    </p>
  </div>
</div>

          </section>

        </div>
      </main>
    </div>
  );
};

export default ParagraphsGuide;
