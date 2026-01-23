import React from "react";

const HTMLImages = () => {
  const htmlPreview = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Images Demo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body { font-family: Arial; padding: 20px; }
    img { max-width: 100%; }
    figure { margin: 0; }
    figcaption { text-align: center; font-size: 14px; color: gray; margin-top: 6px; }
  </style>
</head>
<body>

  <h2>Basic Image</h2>
  <img src="https://via.placeholder.com/300"
       alt="Sample placeholder image"
       width="300"
       height="200" />

  <hr/>

  <h2>Lazy Loaded Image</h2>
  <img src="https://via.placeholder.com/600"
       alt="Lazy loading example"
       loading="lazy" />

  <hr/>

  <h2>Figure with Caption</h2>
  <figure>
    <img src="https://via.placeholder.com/400"
         alt="Figure example">
    <figcaption>Figure caption example</figcaption>
  </figure>

</body>
</html>`;

  return (
    <div className="html-images-docs">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-warning" href="#">
            <i className="fas fa-code me-2"></i>HTML Images Docs
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#intro">Introduction</a></li>
              <li className="nav-item"><a className="nav-link" href="#attributes">Attributes</a></li>
              <li className="nav-item"><a className="nav-link" href="#examples">Examples</a></li>
              <li className="nav-item"><a className="nav-link" href="#advanced">Advanced</a></li>
              <li className="nav-item"><a className="nav-link" href="#best-practices">Best Practices</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container py-5">
        {/* Introduction */}
        <div className="row g-4 mb-5" id="intro">
          <div className="col-lg-7">
            <h1 className="display-5 fw-bold text-warning border-bottom pb-2">
              <i className="fas fa-image me-2"></i>HTML Images
            </h1>
            <p className="lead mt-3 text-secondary">
              Images are linked resources in HTML. The <code>&lt;img&gt;</code> tag creates a placeholder and fetches the image from the given source.
            </p>
            <div className="alert alert-warning">
              <strong>Important:</strong> <code>&lt;img&gt;</code> is self-closing and doesn't require <code>&lt;/img&gt;</code>.
            </div>
            <p>
              The <code>&lt;img&gt;</code> element embeds images into a webpage. It's self-contained and pulls external resources to display.
            </p>
          </div>

          <div className="col-lg-5">
            <div className="bg-dark p-4 rounded shadow">
              <h6 className="text-warning font-monospace mb-3">
                <i className="fas fa-code me-2"></i>Basic Syntax
              </h6>
              <div className="code-block bg-light p-3 rounded">
                <code className="text-info">
                  &lt;img src="image.jpg"<br/>
                  &nbsp;&nbsp;alt="Description"<br/>
                  &nbsp;&nbsp;width="400"<br/>
                  &nbsp;&nbsp;height="300"<br/>
                  &nbsp;&nbsp;loading="lazy"<br/>
                  /&gt;
                </code>
              </div>
              <div className="mt-3">
                <small className="text-light">
                  All attributes except <code>src</code> are optional, but <code>alt</code> is highly recommended.
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* Core Attributes */}
        <h2 id="attributes" className="section-title border-bottom pb-2 mb-4">Core Attributes</h2>
        <div className="row g-4 mb-5">
          {/* src */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 attribute-card">
              <div className="card-body text-center">
                <div className="feature-icon mx-auto mb-3 d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle" style={{width: '60px', height: '60px'}}>
                  <i className="fas fa-link text-primary fa-lg"></i>
                </div>
                <h5 className="card-title fw-bold text-primary">src</h5>
                <p className="card-text small text-muted">
                  Path to the image file. Absolute URL, relative URL, or data URI.
                </p>
                <div className="bg-light p-3 rounded mt-3">
                  <code>src="images/photo.jpg"</code><br/>
                  <code>src="https://example.com/image.png"</code>
                </div>
              </div>
            </div>
          </div>

          {/* alt */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 attribute-card">
              <div className="card-body text-center">
                <div className="feature-icon mx-auto mb-3 d-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-circle" style={{width: '60px', height: '60px'}}>
                  <i className="fas fa-eye text-danger fa-lg"></i>
                </div>
                <h5 className="card-title fw-bold text-danger">alt</h5>
                <p className="card-text small text-muted">
                  Provides alternative text for accessibility, SEO, and display when the image fails to load.
                </p>
                <div className="bg-light p-3 rounded mt-3">
                  <code>alt="A student studying at a library"</code><br/>
                  <code>alt="" (decorative images)</code>
                </div>
                <span className="badge bg-danger mt-3">Required for accessibility</span>
              </div>
            </div>
          </div>

          {/* loading */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 attribute-card">
              <div className="card-body text-center">
                <div className="feature-icon mx-auto mb-3 d-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-circle" style={{width: '60px', height: '60px'}}>
                  <i className="fas fa-tachometer-alt text-success fa-lg"></i>
                </div>
                <h5 className="card-title fw-bold text-success">loading</h5>
                <p className="card-text small text-muted">
                  Controls when the browser loads the image. "lazy" defers loading until near viewport.
                </p>
                <div className="bg-light p-3 rounded mt-3">
                  <code>loading="lazy"</code><br/>
                  <code>loading="eager" (default)</code>
                </div>
                <span className="badge bg-success mt-3">Performance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Attributes */}
        <div className="row g-4 mb-5">
          {[
            { title: "width & height", desc: "Sets display dimensions in pixels", code: 'width="300" height="200"' },
            { title: "srcset & sizes", desc: "Responsive images with multiple sources", code: 'srcset="img-320w.jpg 320w"' },
            { title: "decoding", desc: "Hints how the image should be decoded", code: 'decoding="async"' },
            { title: "crossorigin", desc: "For CORS-enabled images", code: 'crossorigin="anonymous"' },
          ].map((attr, i) => (
            <div className="col-md-3" key={i}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h6 className="fw-bold">{attr.title}</h6>
                  <p className="small text-muted">{attr.desc}</p>
                  <code>{attr.code}</code>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive Example */}
        <div className="card mb-5 shadow-sm border-0" id="examples">
          <div className="card-header bg-warning fw-bold d-flex align-items-center">
            <i className="fas fa-mobile-alt me-2"></i> Responsive Image Example
          </div>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Coding workspace"
                  className="img-fluid rounded shadow"
                  loading="lazy"
                />
                <p className="small text-muted mt-2">
                  Uses <code>img-fluid</code> class for responsiveness
                </p>
              </div>
              <div className="col-md-6">
                <h5>How to Make Images Responsive</h5>
                <ul className="mb-3">
                  <li>Use CSS: <code>max-width:100%; height:auto;</code></li>
                  <li>Bootstrap: <code>class="img-fluid"</code></li>
                  <li>Use <code>srcset</code> and <code>sizes</code></li>
                  <li>Combine with <code>&lt;picture&gt;</code> for art direction</li>
                </ul>
                <div className="bg-light p-3 rounded">
                  <code>&lt;img src="image.jpg" class="img-fluid" alt="..." /&gt;</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced srcset */}
        <h2 id="advanced" className="section-title border-bottom pb-2 mb-4">Advanced: srcset & sizes (Interview Topic)</h2>
        <div className="card mb-5 shadow-sm border-0">
          <div className="card-header bg-dark text-white fw-bold">
            <i className="fas fa-rocket me-2"></i> Responsive Images with srcset
          </div>
          <div className="card-body">
            <p>The <code>srcset</code> attribute specifies multiple images for different resolutions. Browser selects the best match.</p>
            <div className="row mt-4">
              <div className="col-md-6">
                <h6>Device Pixel Ratio Example</h6>
                <pre className="bg-light p-3 rounded"><code>{`<img 
  src="standard.jpg"
  srcset="standard.jpg 1x,
          retina.jpg 2x,
          super-retina.jpg 3x"
  alt="High DPI"
/>`}</code></pre>
              </div>
              <div className="col-md-6">
                <h6>Viewport Width Example</h6>
                <pre className="bg-light p-3 rounded"><code>{`<img 
  src="small.jpg"
  srcset="small.jpg 480w,
          medium.jpg 768w,
          large.jpg 1200w"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Responsive image"
/>`}</code></pre>
              </div>
            </div>
            <div className="alert alert-info mt-4">
              <ul className="small mb-0">
                <li><strong>w descriptor:</strong> Image width in px</li>
                <li><strong>x descriptor:</strong> Device pixel ratio</li>
                <li><strong>sizes:</strong> Defines image display width</li>
                <li>Browser picks optimal image based on viewport & device</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <h2 className="section-title border-bottom pb-2 mb-4">Live Browser Preview</h2>
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg-light fw-bold">HTML Code</div>
              <div className="card-body p-0">
                <pre className="bg-dark text-light p-3 m-0" style={{maxHeight:'400px', overflow:'auto'}}>
                  <code className="text-white">{htmlPreview}</code>
                </pre>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg-light fw-bold">Live Preview</div>
              <div className="card-body p-0">
                <iframe
                  title="HTML Image Preview"
                  srcDoc={htmlPreview}
                  className="w-100"
                  style={{height:'400px', border:'none'}}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <h2 id="best-practices" className="section-title border-bottom pb-2 mb-4">Best Practices</h2>
        <div className="row g-4 mb-5">
          <div className="col-lg-8">
            <div className="alert alert-success">
              <ul className="mb-0" style={{listStyle:'none', paddingLeft:'0'}}>
                <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Always use <code>alt</code> attribute</li>
                <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Lazy load below-the-fold images</li>
                <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Set explicit width & height</li>
                <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Use modern formats (WebP, AVIF)</li>
                <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Use <code>figure</code> for captions</li>
                <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Optimize file size</li>
                <li><i className="fas fa-check text-success me-2"></i>Use <code>srcset</code> & <code>sizes</code> for responsiveness</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card h-100 border-success">
              <div className="card-header bg-success text-white fw-bold">
                <i className="fas fa-chart-line me-2"></i> Performance Tips
              </div>
              <div className="card-body">
                <ul className="small mb-0">
                  <li>Lazy load images</li>
                  <li>Set width/height</li>
                  <li>Use caching headers</li>
                  <li>Responsive breakpoints</li>
                  <li>Serve scaled images</li>
                  <li>Monitor Core Web Vitals</li>
                </ul>
                <div className="mt-3">
                  <span className="badge bg-info me-1">LCP</span>
                  <span className="badge bg-info me-1">CLS</span>
                  <span className="badge bg-info me-1">FID</span>
                  <span className="badge bg-info">SEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div>
            <h5>HTML Images Documentation</h5>
            <p className="small mb-0">Comprehensive guide with modern best practices.</p>
          </div>
          <div className="text-md-end mt-3 mt-md-0">
            <p className="small">Created with <i className="fas fa-heart text-danger"></i> for developers</p>
            <p className="small mb-0">© 2023 HTML Docs. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default HTMLImages;
