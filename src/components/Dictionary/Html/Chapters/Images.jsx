import React from 'react';

const HTMLImages = () => {
  return (
    <div className="container py-5">
      {/* --- 1. DEFINITION & SYNTAX --- */}
      <div className="row g-4 mb-5">
        <div className="col-lg-7">
          <h2 className="display-6 fw-bold text-warning border-bottom border-warning pb-2">
            <i className="fas fa-image me-3"></i>HTML Images
          </h2>
          <p className="lead mt-3 text-secondary">
            Images are not technically inserted into a web page; they are <strong>linked</strong> to it. 
            The <code>&lt;img&gt;</code> tag creates a holding space for the referenced image.
          </p>
          
          <div className="p-3 bg-warning bg-opacity-10 border-start border-warning border-4 rounded">
            <h6 className="fw-bold"><i className="fas fa-exclamation-triangle me-2"></i>Empty Tag:</h6>
            <p className="small mb-0">
              The <code>&lt;img&gt;</code> tag is <strong>self-closing</strong>. It contains attributes only and does not have a closing tag like <code>&lt;/img&gt;</code>.
            </p>
          </div>
        </div>

        <div className="col-lg-5">
          
          <div className="p-4 bg-dark rounded shadow-lg">
            <h6 className="text-warning mb-3 font-monospace">// Image Syntax</h6>
            <code className="text-info fs-5">
              &lt;img <br/>
              &nbsp;&nbsp;src="image.jpg" <br/>
              &nbsp;&nbsp;alt="Description" <br/>
              &nbsp;&nbsp;width="500" <br/>
              /&gt;
            </code>
          </div>
        </div>
      </div>

      {/* --- 2. THE TWO VITAL ATTRIBUTES --- */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="fw-bold text-primary"><i className="fas fa-link me-2"></i>The SRC Attribute</h5>
              <p className="small text-muted">
                Specifies the <strong>path</strong> to the image. This can be a local file or a web URL (Absolute path).
              </p>
              <code className="bg-light p-2 d-block rounded">src="img_girl.jpg"</code>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="fw-bold text-danger"><i className="fas fa-accessibility me-2"></i>The ALT Attribute</h5>
              <p className="small text-muted">
                Provides <strong>alternative text</strong> if the image cannot be displayed or for screen readers (SEO & Accessibility).
              </p>
              <code className="bg-light p-2 d-block rounded">alt="Girl in a jacket"</code>
            </div>
          </div>
        </div>
      </div>

      {/* --- 3. LIVE EXAMPLE: RESPONSIVE IMAGES --- */}
      <div className="card border-0 shadow-sm mb-5 overflow-hidden">
        <div className="card-header bg-warning text-dark fw-bold">
          <i className="fas fa-expand-arrows-alt me-2"></i>Live Image Demo
        </div>
        <div className="card-body text-center bg-white p-5">
          <h6 className="mb-3 text-muted">Responsive Image (Width 100% of container)</h6>
          {/* Example of a responsive image using Bootstrap class 'img-fluid' */}
          <div className="mx-auto" style={{ maxWidth: '600px' }}>
             <img 
               src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" 
               alt="Coding on a laptop" 
               className="img-fluid rounded shadow"
             />
          </div>
          <div className="mt-4">
             <span className="badge bg-secondary me-2">Class: img-fluid</span>
             <span className="badge bg-secondary">Style: rounded</span>
          </div>
        </div>
      </div>

      {/* --- 4. QUICK REFERENCE TABLE --- */}
      <div className="card border-0 shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-dark">
              <tr>
                <th>Attribute</th>
                <th>Purpose</th>
                <th>Recommended Unit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>width</code></td>
                <td>Sets the width of the image.</td>
                <td>Pixels (px) or %</td>
              </tr>
              <tr>
                <td><code>height</code></td>
                <td>Sets the height of the image.</td>
                <td>Pixels (px)</td>
              </tr>
              <tr>
                <td><code>loading</code></td>
                <td>Optimization: use "lazy" for speed.</td>
                <td>Keyword (lazy/eager)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* --- 5. BEST PRACTICES FOOTER --- */}
      <div className="mt-5 text-center">
        <p className="text-secondary small">
          <i className="fas fa-lightbulb text-warning me-2"></i>
          <strong>Always</strong> specify width and height to prevent page layout jumps while loading.
        </p>
      </div>
    </div>
  );
};

export default HTMLImages;