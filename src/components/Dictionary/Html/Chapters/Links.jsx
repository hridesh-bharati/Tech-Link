import React from 'react';

const HTMLLinks = () => {
  return (
    <div className="container py-5">
      {/* --- 1. CORE CONCEPT --- */}
      <div className="row g-4 mb-5">
        <div className="col-lg-6">
          <h2 className="display-6 fw-bold text-primary border-bottom pb-2">HTML Links (Hyperlinks)</h2>
          <p className="lead mt-3">
            Links are the foundation of the web. They allow users to click their way from page to page using the <code>&lt;a&gt;</code> (Anchor) tag.
          </p>
          <div className="card border-0 bg-primary bg-opacity-10 p-3 mb-3">
            <h6 className="fw-bold"><i className="fas fa-info-circle me-2"></i>Key Rule:</h6>
            <p className="small mb-0">The <code>href</code> attribute is mandatory. It specifies the destination address of the link.</p>
          </div>
        </div>
        
        <div className="col-lg-6">
          
          <div className="p-4 bg-dark rounded shadow-lg">
            <h6 className="text-white-50 mb-3 font-monospace">// Syntax Example</h6>
            <code className="text-info fs-5">
              &lt;a href="https://google.com" target="_blank"&gt; <br/>
              &nbsp;&nbsp;Visit Google <br/>
              &lt;/a&gt;
            </code>
          </div>
        </div>
      </div>

      {/* --- 2. TARGET ATTRIBUTE EXPLAINED --- */}
      <div className="card border-0 shadow-sm mb-5">
        <div className="card-header bg-primary text-white fw-bold">The "Target" Attribute</div>
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
                <td>Linking to external websites.</td>
              </tr>
              <tr>
                <td><code>_parent</code></td>
                <td>Opens in the parent frame.</td>
                <td>Used when working with iframes.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* --- 3. TYPES OF LINKS (EXAMPLES) --- */}
      <h3 className="fw-bold mb-4">Practical Link Types</h3>
      <div className="row g-4">
        {/* Absolute URL */}
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 text-center">
            <div className="text-primary mb-3"><i className="fas fa-globe fa-2x"></i></div>
            <h6 className="fw-bold">Absolute URL</h6>
            <p className="small text-muted">A full web address including the protocol (https://).</p>
            <a href="https://www.wikipedia.org" target="_blank" className="btn btn-outline-primary btn-sm">External Site</a>
          </div>
        </div>

        {/* Email Protocol */}
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 text-center">
            <div className="text-danger mb-3"><i className="fas fa-envelope fa-2x"></i></div>
            <h6 className="fw-bold">Email Link</h6>
            <p className="small text-muted">Triggers the user's default email app.</p>
            <a href="mailto:support@example.com" className="btn btn-outline-danger btn-sm">Send Email</a>
          </div>
        </div>

        {/* Image as Link */}
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 text-center">
            <div className="text-success mb-3"><i className="fas fa-mouse-pointer fa-2x"></i></div>
            <h6 className="fw-bold">Clickable Image</h6>
            <p className="small text-muted">Using an image inside the anchor tag.</p>
            <a href="https://github.com" className="d-block mt-2">
              <img src="https://via.placeholder.com/40" alt="Logo" className="rounded-circle border" />
            </a>
          </div>
        </div>
      </div>

      {/* --- 4. BEST PRACTICES --- */}
      <div className="mt-5 p-4 bg-white border-start border-primary border-4 rounded shadow-sm">
        <h5 className="fw-bold mb-3"><i className="fas fa-star text-warning me-2"></i>Best Practices</h5>
        <div className="row">
          <div className="col-md-6">
            <p className="small mb-1"><strong>1. Descriptive Text:</strong> Avoid "Click Here". Use "Download the PDF" instead.</p>
            <p className="small mb-1"><strong>2. Accessibility:</strong> Use the <code>title</code> attribute for extra info.</p>
          </div>
          <div className="col-md-6">
            <p className="small mb-1"><strong>3. Security:</strong> When using <code>_blank</code>, add <code>rel="noopener"</code>.</p>
            <p className="small mb-1"><strong>4. Internal Links:</strong> Use relative paths (e.g., <code>href="/about"</code>).</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTMLLinks;