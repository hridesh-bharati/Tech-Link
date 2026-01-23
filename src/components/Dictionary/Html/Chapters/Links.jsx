import React from "react";

const HTMLLinks = () => {

  const doctypeExample = `<!DOCTYPE html>
<html>
<head>
  <title>HTML Links Demo</title>
</head>
<body style="font-family: Arial">

  <h1>Main Website Title</h1>

  <p>
    <a href="https://google.com" target="_blank">
      Visit Google
    </a>
  </p>

  <p>
    <a href="mailto:support@example.com">
      Send Email
    </a>
  </p>

  <p>
    <a href="https://github.com">
      <img src="https://via.placeholder.com/50" alt="GitHub Logo" />
    </a>
  </p>

</body>
</html>`;

  return (
    <div className="container py-5">

      {/* --- 1. CORE CONCEPT --- */}
      <div className="row g-4 mb-5">
        <div className="col-lg-6">
          <h2 className="display-6 fw-bold text-primary border-bottom pb-2">
            HTML Links (Hyperlinks)
          </h2>

          <p className="lead mt-3">
            Links are the foundation of the web. They allow users to click their
            way from page to page using the <code>&lt;a&gt;</code> (Anchor) tag.
          </p>

          <div className="card border-0 bg-primary bg-opacity-10 p-3 mb-3">
            <h6 className="fw-bold">
              <i className="fas fa-info-circle me-2"></i>Key Rule:
            </h6>
            <p className="small mb-0">
              The <code>href</code> attribute is mandatory. It specifies the
              destination address of the link.
            </p>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="p-4 bg-dark rounded shadow-lg">
            <h6 className="text-white-50 mb-3 font-monospace">
              // Syntax Example
            </h6>
            <code className="text-info fs-5">
              &lt;a href="https://google.com" target="_blank"&gt; <br />
              &nbsp;&nbsp;Visit Google <br />
              &lt;/a&gt;
            </code>
          </div>
        </div>
      </div>

      {/* --- 2. TARGET ATTRIBUTE EXPLAINED --- */}
      <div className="card border-0 shadow-sm mb-5">
        <div className="card-header bg-primary text-white fw-bold">
          The "Target" Attribute
        </div>

        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0 text-center">
            <thead className="table-light">
              <tr>
                <th>Value</th>
                <th>Result</th>
                <th>Common Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>_self</code></td>
                <td>Opens in the same window/tab.</td>
                <td>Default behavior.</td>
              </tr>
              <tr>
                <td><code>_blank</code></td>
                <td>Opens in a <strong>new tab</strong>.</td>
                <td>External websites.</td>
              </tr>
              <tr>
                <td><code>_parent</code></td>
                <td>Opens in the parent frame.</td>
                <td>Used with iframes.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* --- 3. DOCTYPE LIVE EXAMPLE --- */}
      <section className="mb-5">
        <h3 className="fw-bold text-primary mb-4">
          Live Example (With DOCTYPE)
        </h3>

        <div className="row g-4">
          <div className="col-md-6">
            <pre className="bg-dark text-light p-3 rounded small">
{doctypeExample}
            </pre>
          </div>

          <div className="col-md-6">
            <iframe
              title="HTML Link Live Preview"
              className="w-100 border rounded"
              style={{ height: "300px" }}
              srcDoc={doctypeExample}
            />
          </div>
        </div>
      </section>

      {/* --- 4. TYPES OF LINKS --- */}
      <h3 className="fw-bold mb-4">Practical Link Types</h3>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 text-center">
            <div className="text-primary mb-3">
              <i className="fas fa-globe fa-2x"></i>
            </div>
            <h6 className="fw-bold">Absolute URL</h6>
            <p className="small text-muted">
              A full web address including https://
            </p>
            <a
              href="https://www.wikipedia.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-sm"
            >
              External Site
            </a>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 text-center">
            <div className="text-danger mb-3">
              <i className="fas fa-envelope fa-2x"></i>
            </div>
            <h6 className="fw-bold">Email Link</h6>
            <p className="small text-muted">
              Opens default email application.
            </p>
            <a
              href="mailto:support@example.com"
              className="btn btn-outline-danger btn-sm"
            >
              Send Email
            </a>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 text-center">
            <div className="text-success mb-3">
              <i className="fas fa-mouse-pointer fa-2x"></i>
            </div>
            <h6 className="fw-bold">Image Link</h6>
            <p className="small text-muted">
              Image inside anchor tag.
            </p>
            <a href="https://github.com">
              <img
                src="https://via.placeholder.com/40"
                alt="GitHub"
                className="rounded-circle border"
              />
            </a>
          </div>
        </div>
      </div>

      {/* --- 5. BEST PRACTICES --- */}
      <div className="mt-5 p-4 bg-white border-start border-primary border-4 rounded shadow-sm">
        <h5 className="fw-bold mb-3">
          <i className="fas fa-star text-warning me-2"></i>
          Best Practices
        </h5>

        <div className="row">
          <div className="col-md-6">
            <p className="small mb-1">
              <strong>1. Descriptive Text:</strong> Avoid "Click Here".
            </p>
            <p className="small mb-1">
              <strong>2. Accessibility:</strong> Use title attribute.
            </p>
          </div>
          <div className="col-md-6">
            <p className="small mb-1">
              <strong>3. Security:</strong> Use rel="noopener".
            </p>
            <p className="small mb-1">
              <strong>4. Internal Links:</strong> Prefer relative URLs.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HTMLLinks;
