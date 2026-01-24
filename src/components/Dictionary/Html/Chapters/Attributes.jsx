import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CoreAttributesGuide = () => {
  return (
    <div className="bg-light">
      {/* Hero Section - Mobile Optimized */}
      <header className="bg-primary-subtle text-white py-4 py-md-5">
        <div className="container px-3 px-md-4">
          <div className="row align-items-center">
            <div className="col-12 col-lg-8 mb-4 mb-lg-0">
              <h1 className="h2 fw-bold mb-3 text-danger">
                <i className="fas fa-cogs me-2"></i>
                HTML Core Attributes Guide
              </h1>
              <p className="text-dark mb-4  d-md-block">
                Master essential HTML attributes that control element behavior, styling, and functionality.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-white text-dark px-2 px-md-3 py-1 py-md-2 fs-6">
                  <i className="fas fa-check-circle text-success me-1"></i>
                  Beginner Friendly
                </span>
                <span className="badge bg-white text-dark px-2 px-md-3 py-1 py-md-2 fs-6">
                  <i className="fas fa-code text-primary me-1"></i>
                  Real Examples
                </span>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="bg-white text-dark rounded-3 p-3 p-md-4 shadow">
                <h5 className="fw-bold mb-3">Quick Facts</h5>
                <div className="text-start">
                  <div className="d-flex align-items-center mb-2 mb-md-3">
                    <i className="fas fa-tag text-primary me-2 me-md-3 fs-5"></i>
                    <div>
                      <div className="fw-bold">5 Core Attributes</div>
                      <small className="text-muted">Every developer must know</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-2 mb-md-3">
                    <i className="fas fa-globe text-success me-2 me-md-3 fs-5"></i>
                    <div>
                      <div className="fw-bold">Global Scope</div>
                      <small className="text-muted">Work on all HTML elements</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction - Mobile Optimized */}
      <section className="py-4 py-md-5 bg-white">
        <div className="container px-3 px-md-4">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="text-center mb-4 mb-md-5">
                <h2 className="h3 h2-md fw-bold mb-3">
                  <i className="fas fa-graduation-cap text-primary me-2"></i>
                  What Are HTML Attributes?
                </h2>
                <p className="fs-6 fs-md-5 text-muted px-2 px-md-0">
                  Attributes provide <strong>additional information</strong> about HTML elements.
                  They are always specified in the <strong>opening tag</strong>.
                </p>
              </div>

              <div className="alert alert-info border-start border-5 border-info py-3">
                <div className="d-flex align-items-start">
                  <i className="fas fa-info-circle fs-4 me-3 d-none d-md-block"></i>
                  <div>
                    <h5 className="fw-bold mb-2">Key Concept</h5>
                    <p className="mb-0 fs-6">
                      Think of an HTML element as a <strong>noun</strong>, attributes as <strong>adjectives</strong> that describe it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Attributes Section - Mobile Optimized */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container px-3 px-md-4">
          <h2 className="text-center fw-bold mb-4 mb-md-5 h3 h2-md">
            <i className="fas fa-star text-warning me-2"></i>
            The 5 Core Attributes
          </h2>

          {/* 1. ID Attribute - Mobile Optimized */}
          <div className="card border-0 shadow mb-4 mb-md-5 overflow-hidden">
            <div className="card-header bg-danger text-white py-3 py-md-4">
              <div className="d-flex align-items-center">
                <div className="bg-white text-danger rounded-circle p-2 p-md-3 me-3 me-md-4">
                  <i className="fas fa-fingerprint fs-4 fs-md-3"></i>
                </div>
                <div>
                  <h3 className="h4 h3-md fw-bold mb-1">1. The ID Attribute</h3>
                  <p className="mb-0 opacity-75 fs-6">Unique Identifier</p>
                </div>
              </div>
            </div>
            <div className="card-body p-3 p-md-4 p-lg-5">
              <div className="row g-3 g-md-4 g-lg-5">
                <div className="col-12 col-lg-6">
                  <h5 className="fw-bold mb-2 mb-md-3 fs-5">
                    <i className="fas fa-info-circle text-danger me-2"></i>
                    Description
                  </h5>
                  <p className="fs-6 fs-md-5">
                    The <code>id</code> attribute specifies a <strong>unique identifier</strong> for an HTML element.
                  </p>

                  <h5 className="fw-bold mt-3 mt-md-4 mb-2 mb-md-3 fs-5">
                    <i className="fas fa-exclamation-triangle text-warning me-2"></i>
                    Rules & Best Practices
                  </h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-1 mb-md-2"><i className="fas fa-check text-success me-2"></i>Must be unique within the page</li>
                    <li className="mb-1 mb-md-2"><i className="fas fa-check text-success me-2"></i>No spaces allowed</li>
                    <li className="mb-1 mb-md-2"><i className="fas fa-check text-success me-2"></i>Case-sensitive</li>
                    <li><i className="fas fa-check text-success me-2"></i>Use hyphens (main-header)</li>
                  </ul>
                </div>
                <div className="col-12 col-lg-6">
                  <h5 className="fw-bold mb-2 mb-md-3 fs-5">
                    <i className="fas fa-code text-dark me-2"></i>
                    Examples
                  </h5>

                  <div className="mb-3 mb-md-4">
                    <h6 className="fw-bold fs-6">Syntax:</h6>
                    <div className="bg-dark text-white p-2 p-md-3 rounded overflow-auto">
                      <code className="fs-6">&lt;div id="unique-name"&gt;Content&lt;/div&gt;</code>
                    </div>
                  </div>

                  <div className="mb-3 mb-md-4">
                    <h6 className="fw-bold fs-6">Usage:</h6>
                    <div className="bg-light p-2 p-md-3 border rounded overflow-auto">
                      <pre className="mb-0 fs-6">
                        {`<header id="main-header">
<nav id="navigation">
<main id="content">
<footer id="footer">`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Demo for ID - Mobile Optimized */}
              <div className="mt-3 mt-md-4 p-3 p-md-4 bg-dark rounded text-white">
                <h6 className="fw-bold mb-2 mb-md-3 fs-6">
                  <i className="fas fa-play-circle me-2"></i>
                  Interactive Demo
                </h6>
                <div className="row g-2 g-md-3">
                  <div className="col-12 col-md-6">
                    <div className="bg-secondary p-2 p-md-3 rounded overflow-auto">
                      <code className="text-warning fs-6">&lt;button id="demo-button"&gt;Click Me&lt;/button&gt;</code>
                    </div>
                    <button id="demo-button" className="btn btn-danger mt-2 w-100">
                      Button with ID
                    </button>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="bg-secondary p-2 p-md-3 rounded overflow-auto">
                      <code className="text-warning fs-6">#demo-button {'{'} color: red; {'}'}</code>
                    </div>
                    <p className="mt-2 small">
                      Unique CSS selector <code>#demo-button</code>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. CLASS Attribute - Mobile Optimized */}
          <div className="card border-0 shadow mb-4 mb-md-5 overflow-hidden">
            <div className="card-header bg-primary text-white py-3 py-md-4">
              <div className="d-flex align-items-center">
                <div className="bg-white text-primary rounded-circle p-2 p-md-3 me-3 me-md-4">
                  <i className="fas fa-tags fs-4 fs-md-3"></i>
                </div>
                <div>
                  <h3 className="h4 h3-md fw-bold mb-1">2. The CLASS Attribute</h3>
                  <p className="mb-0 opacity-75 fs-6">Reusable Styling</p>
                </div>
              </div>
            </div>
            <div className="card-body p-3 p-md-4 p-lg-5">
              <div className="row g-3 g-md-4 g-lg-5">
                <div className="col-12 col-lg-6">
                  <h5 className="fw-bold mb-2 mb-md-3 fs-5">
                    <i className="fas fa-info-circle text-primary me-2"></i>
                    Description
                  </h5>
                  <p className="fs-6 fs-md-5">
                    The <code>class</code> attribute specifies one or more class names for an element.
                  </p>

                  <h5 className="fw-bold mt-3 mt-md-4 mb-2 mb-md-3 fs-5">
                    <i className="fas fa-bolt text-warning me-2"></i>
                    Key Features
                  </h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-1 mb-md-2"><i className="fas fa-check text-success me-2"></i><strong>Reusable:</strong> Same class on multiple elements</li>
                    <li className="mb-1 mb-md-2"><i className="fas fa-check text-success me-2"></i><strong>Multiple Classes:</strong> Space-separated</li>
                    <li className="mb-1 mb-md-2"><i className="fas fa-check text-success me-2"></i><strong>Framework Friendly:</strong> Bootstrap, Tailwind</li>
                    <li><i className="fas fa-check text-success me-2"></i><strong>Grouping:</strong> Select multiple at once</li>
                  </ul>
                </div>
                <div className="col-12 col-lg-6">
                  <h5 className="fw-bold mb-2 mb-md-3 fs-5">
                    <i className="fas fa-code text-dark me-2"></i>
                    Examples
                  </h5>

                  <div className="mb-3 mb-md-4">
                    <h6 className="fw-bold fs-6">Syntax:</h6>
                    <div className="bg-dark text-white p-2 p-md-3 rounded overflow-auto">
                      <code className="fs-6">&lt;div class="class1 class2"&gt;Content&lt;/div&gt;</code>
                    </div>
                  </div>

                  <div className="mb-3 mb-md-4">
                    <h6 className="fw-bold fs-6">Usage:</h6>
                    <div className="bg-light p-2 p-md-3 border rounded overflow-auto">
                      <pre className="mb-0 fs-6">
                        {`<button class="btn btn-primary">
<button class="btn btn-success">
<button class="btn btn-danger">`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Demo for CLASS - Mobile Optimized */}
              <div className="mt-3 mt-md-4 p-3 p-md-4 bg-primary bg-opacity-10 rounded">
                <h6 className="fw-bold mb-2 mb-md-3 fs-6 text-primary">
                  <i className="fas fa-play-circle me-2"></i>
                  Multiple Classes Demo
                </h6>
                <div className="row g-2 g-md-3">
                  <div className="col-6 col-md-4">
                    <div className="p-2 border rounded text-center">
                      <div className="bg-danger-subtle p-2 p-md-3 rounded mb-2 overflow-auto">
                        <code className="fs-6">&lt;div class="box red"&gt;</code>
                      </div>
                      <div className="box red p-2 p-md-3 rounded" style={{ backgroundColor: '#dc3545', color: 'white', fontSize: '0.9rem' }}>
                        Box 1
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="p-2 border rounded text-center">
                      <div className="bg-success text-white p-2 p-md-3 rounded mb-2 overflow-auto">
                        <code className="fs-6">&lt;div class="box green"&gt;</code>
                      </div>
                      <div className="box green p-2 p-md-3 rounded" style={{ backgroundColor: '#28a745', color: 'white', fontSize: '0.9rem' }}>
                        Box 2
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 mt-2 mt-md-0">
                    <div className="p-2 border rounded text-center">
                      <div className="bg-warning text-dark p-2 p-md-3 rounded mb-2 overflow-auto">
                        <code className="fs-6">&lt;div class="box yellow"&gt;</code>
                      </div>
                      <div className="box yellow p-2 p-md-3 rounded" style={{ backgroundColor: '#ffc107', color: 'black', fontSize: '0.9rem' }}>
                        Box 3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. STYLE Attribute - Mobile Optimized */}
          <div className="card border-0 shadow mb-4 mb-md-5 overflow-hidden">
            <div className="card-header bg-success text-white py-3 py-md-4">
              <div className="d-flex align-items-center">
                <div className="bg-white text-success rounded-circle p-2 p-md-3 me-3 me-md-4">
                  <i className="fas fa-paint-brush fs-4 fs-md-3"></i>
                </div>
                <div>
                  <h3 className="h4 h3-md fw-bold mb-1">3. The STYLE Attribute</h3>
                  <p className="mb-0 opacity-75 fs-6">Inline CSS Styling</p>
                </div>
              </div>
            </div>
            <div className="card-body p-3 p-md-4 p-lg-5">
              <div className="row g-3 g-md-4 g-lg-5">
                <div className="col-12 col-lg-6">
                  <h5 className="fw-bold mb-2 mb-md-3 fs-5">
                    <i className="fas fa-info-circle text-success me-2"></i>
                    Description
                  </h5>
                  <p className="fs-6 fs-md-5">
                    The <code>style</code> attribute applies <strong>inline CSS styles</strong> directly to an element.
                  </p>

                  <h5 className="fw-bold mt-3 mt-md-4 mb-2 mb-md-3 fs-5">
                    <i className="fas fa-exclamation-triangle text-warning me-2"></i>
                    When to Use
                  </h5>
                  <div className="row">
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                      <div className="alert alert-success py-2">
                        <h6 className="fw-bold fs-6"><i className="fas fa-check me-2"></i>Good For:</h6>
                        <ul className="small mb-0 ps-3">
                          <li>Quick testing</li>
                          <li>Dynamic styles</li>
                          <li>One-time styling</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="alert alert-danger py-2">
                        <h6 className="fw-bold fs-6"><i className="fas fa-times me-2"></i>Avoid For:</h6>
                        <ul className="small mb-0 ps-3">
                          <li>Repeated styles</li>
                          <li>Main styling</li>
                          <li>Large projects</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <h5 className="fw-bold mb-2 mb-md-3 fs-5">
                    <i className="fas fa-code text-dark me-2"></i>
                    Examples
                  </h5>

                  <div className="mb-3 mb-md-4">
                    <h6 className="fw-bold fs-6">Syntax:</h6>
                    <div className="bg-dark text-white p-2 p-md-3 rounded overflow-auto">
                      <code className="fs-6">&lt;div style="color: blue;"&gt;Content&lt;/div&gt;</code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Demo for STYLE - Mobile Optimized */}
              <div className="mt-3 mt-md-4 p-3 p-md-4 bg-success bg-opacity-10 rounded">
                <h6 className="fw-bold mb-2 mb-md-3 fs-6 text-success">
                  <i className="fas fa-play-circle me-2"></i>
                  Style Demo
                </h6>
                <div className="row g-2 g-md-3">
                  <div className="col-12 col-md-4">
                    <div className="p-2 border rounded text-center">
                      <div className="mb-2 overflow-auto">
                        <code className="fs-6">&lt;div style="color: red;"&gt;</code>
                      </div>
                      <div style={{ color: 'red', fontSize: '1rem' }}>
                        Red Text
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 mt-2 mt-md-0">
                    <div className="p-2 border rounded text-center">
                      <div className="mb-2 overflow-auto">
                        <code className="fs-6">&lt;div style="background: yellow;"&gt;</code>
                      </div>
                      <div style={{ background: 'yellow', padding: '8px' }}>
                        Yellow BG
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 mt-2 mt-md-0">
                    <div className="p-2 border rounded text-center">
                      <div className="mb-2 overflow-auto">
                        <code className="fs-6">&lt;div style="border: 2px blue;"&gt;</code>
                      </div>
                      <div style={{ border: '2px solid blue', padding: '8px' }}>
                        Blue Border
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. TITLE Attribute - Mobile Optimized */}
          <div className="card border-0 shadow mb-4 mb-md-5 overflow-hidden">
            <div className="card-header bg-warning text-dark py-3 py-md-4">
              <div className="d-flex align-items-center">
                <div className="bg-white text-warning rounded-circle p-2 p-md-3 me-3 me-md-4">
                  <i className="fas fa-comment-alt fs-4 fs-md-3"></i>
                </div>
                <div>
                  <h3 className="h4 h3-md fw-bold mb-1">4. The TITLE Attribute</h3>
                  <p className="mb-0 opacity-75 fs-6">Tooltip & Accessibility</p>
                </div>
              </div>
            </div>
            <div className="card-body p-3 p-md-4 p-lg-5">
              <div className="row g-3 g-md-4 g-lg-5">
                <div className="col-12 col-lg-6">
                  <h5 className="fw-bold mb-2 mb-md-3 fs-5">
                    <i className="fas fa-info-circle text-warning me-2"></i>
                    Description
                  </h5>
                  <p className="fs-6 fs-md-5">
                    The <code>title</code> attribute provides <strong>additional information</strong> as a tooltip.
                  </p>

                  <h5 className="fw-bold mt-3 mt-md-4 mb-2 mb-md-3 fs-5">
                    <i className="fas fa-universal-access text-info me-2"></i>
                    Accessibility
                  </h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-1 mb-md-2"><i className="fas fa-check text-success me-2"></i>Screen readers read title</li>
                    <li className="mb-1 mb-md-2"><i className="fas fa-check text-success me-2"></i>Helps all users</li>
                    <li><i className="fas fa-check text-success me-2"></i>Provides context</li>
                  </ul>
                </div>
                <div className="col-12 col-lg-6">
                  <h5 className="fw-bold mb-2 mb-md-3 fs-5">
                    <i className="fas fa-code text-dark me-2"></i>
                    Examples
                  </h5>

                  <div className="mb-3 mb-md-4">
                    <h6 className="fw-bold fs-6">Syntax:</h6>
                    <div className="bg-dark text-white p-2 p-md-3 rounded overflow-auto">
                      <code className="fs-6">&lt;a title="description"&gt;Link&lt;/a&gt;</code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Demo for TITLE - Mobile Optimized */}
              <div className="mt-3 mt-md-4 p-3 p-md-4 bg-warning bg-opacity-10 rounded">
                <h6 className="fw-bold mb-2 mb-md-3 fs-6 text-warning">
                  <i className="fas fa-mouse-pointer me-2"></i>
                  Hover Demo (Move cursor)
                </h6>
                <div className="row g-2 g-md-3">
                  <div className="col-12 col-md-6 col-lg-3">
                    <button
                      className="btn btn-outline-dark w-100"
                      title="This will navigate to home page"
                    >
                      Home
                    </button>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3 mt-2 mt-md-0">
                    <div
                      className="p-2 border rounded text-center"
                      title="Information icon tooltip"
                    >
                      <i className="fas fa-info-circle"></i>
                      <div className="small mt-1">Info</div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3 mt-2 mt-lg-0">
                    <div
                      className="p-2 border rounded text-center"
                      title="Cascading Style Sheets"
                    >
                      <abbr title="Cascading Style Sheets">CSS</abbr>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3 mt-2 mt-lg-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                      title="Type keywords to search"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5. DATA-* Attributes - Mobile Optimized */}
          <div className="card border-0 shadow mb-4 mb-md-5  overflow-hidden">
            <div className="card-header bg-info text-white py-3 py-md-4">
              <div className="d-flex align-items-center">
                <div className="bg-white text-info rounded-circle p-2 p-md-3 me-3 me-md-4">
                  <i className="fas fa-database fs-4 fs-md-3"></i>
                </div>
                <div>
                  <h3 className="h4 h3-md fw-bold mb-1">5. DATA-* Attributes</h3>
                  <p className="mb-0 opacity-75 fs-6">Custom Data Storage</p>
                </div>
              </div>
            </div>
            <div className="card-body p-3 p-md-4 p-lg-5">
              <div className="row g-3 g-md-4 g-lg-5">
                <div className="col-12 col-lg-6">
                  <h5 className="fw-bold mb-2 mb-md-3 fs-5">
                    <i className="fas fa-info-circle text-info me-2"></i>
                    Description
                  </h5>
                  <p className="fs-6 fs-md-5">
                    <code>data-*</code> attributes store <strong>custom data</strong> private to the page.
                  </p>

                  <h5 className="fw-bold mt-3 mt-md-4 mb-2 mb-md-3 fs-5">
                    <i className="fas fa-bolt text-warning me-2"></i>
                    Why Use?
                  </h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-1 mb-md-2"><i className="fas fa-check text-success me-2"></i>Store extra information</li>
                    <li className="mb-1 mb-md-2"><i className="fas fa-check text-success me-2"></i>Perfect for JavaScript</li>
                    <li><i className="fas fa-check text-success me-2"></i>Great for dynamic content</li>
                  </ul>
                </div>
                <div className="col-12 col-lg-6">
                  <h5 className="fw-bold mb-2 mb-md-3 fs-5">
                    <i className="fas fa-code text-dark me-2"></i>
                    Examples
                  </h5>

                  <div className="mb-3 mb-md-4">
                    <h6 className="fw-bold fs-6">Syntax:</h6>
                    <div className="bg-dark text-white p-2 p-md-3 rounded overflow-auto">
                      <code className="fs-6">&lt;div data-user-id="123"&gt;User&lt;/div&gt;</code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Demo for DATA-* - Mobile Optimized */}
              <div className="mt-3 mt-md-4 p-3 p-md-4 bg-info bg-opacity-10 rounded">
                <h6 className="fw-bold mb-2 mb-md-3 fs-6 text-info">
                  <i className="fas fa-database me-2"></i>
                  Data Attributes Demo
                </h6>
                <div className="row g-2 g-md-3">
                  <div className="col-12 col-md-6">
                    <div className="p-2 p-md-3 border rounded overflow-auto">
                      <h6 className="fs-6">HTML:</h6>
                      <code className="text-dark fs-6">
                        {`<div data-user-id="U1001" 
     data-role="moderator">
  John Doe
</div>`}
                      </code>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mt-2 mt-md-0">
                    <div className="p-2 p-md-3 border rounded overflow-auto">
                      <h6 className="fs-6">JavaScript:</h6>
                      <pre className="mb-0 fs-6">
                        {`const userId = element
  .dataset.userId; // "U1001"`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

{/* 6. Internationalization Attributes - Mobile Optimized */}
<div className="card border-0 shadow overflow-hidden">
  <div className="card-header bg-primary text-white py-3 py-md-4">
    <div className="d-flex align-items-center">
      <div className="bg-white text-primary rounded-circle p-2 p-md-3 me-3 me-md-4">
        <i className="fas fa-globe fs-4 fs-md-3"></i>
      </div>
      <div>
        <h3 className="h4 h3-md fw-bold mb-1">
          6. Internationalization Attributes
        </h3>
        <p className="mb-0 opacity-75 fs-6">
          Multilingual & Localization Support
        </p>
      </div>
    </div>
  </div>

  <div className="card-body p-3 p-md-4 p-lg-5">
    <div className="row g-3 g-md-4 g-lg-5">
      {/* Description */}
      <div className="col-12 col-lg-6">
        <h5 className="fw-bold mb-2 mb-md-3 fs-5">
          <i className="fas fa-info-circle text-primary me-2"></i>
          Description
        </h5>
        <p className="fs-6 fs-md-5">
          <code>lang</code>, <code>dir</code>, and{" "}
          <code>translate</code> attributes help make content{" "}
          <strong>accessible across different languages</strong> and
          regions.
        </p>

        <h5 className="fw-bold mt-3 mt-md-4 mb-2 mb-md-3 fs-5">
          <i className="fas fa-bolt text-warning me-2"></i>
          Why Use?
        </h5>
        <ul className="list-unstyled mb-0">
          <li className="mb-1 mb-md-2">
            <i className="fas fa-check text-success me-2"></i>
            Multi-language support
          </li>
          <li className="mb-1 mb-md-2">
            <i className="fas fa-check text-success me-2"></i>
            Screen reader friendly
          </li>
          <li className="mb-1 mb-md-2">
            <i className="fas fa-check text-success me-2"></i>
            SEO optimization
          </li>
          <li>
            <i className="fas fa-check text-success me-2"></i>
            Correct text direction (LTR / RTL)
          </li>
        </ul>
      </div>

      {/* Key Attributes */}
      <div className="col-12 col-lg-6">
        <h5 className="fw-bold mb-2 mb-md-3 fs-5">
          <i className="fas fa-code text-dark me-2"></i>
          Key Attributes
        </h5>

        <div className="bg-dark text-white p-2 p-md-3 rounded overflow-auto">
          <code className="d-block fs-6 mb-1">
            lang="en" → Defines language
          </code>
          <code className="d-block fs-6 mb-1">
            dir="ltr | rtl" → Text direction
          </code>
          <code className="d-block fs-6">
            translate="yes | no" → Translation hint
          </code>
        </div>
      </div>
    </div>

    {/* Live Demo */}
    <div className="mt-3 mt-md-4 p-3 p-md-4 bg-primary bg-opacity-10 rounded">
      <h6 className="fw-bold mb-2 mb-md-3 fs-6 text-primary">
        <i className="fas fa-language me-2"></i>
        Internationalization Demo
      </h6>

      <div className="row g-2 g-md-3">
        <div className="col-12 col-md-6">
          <div className="p-2 p-md-3 border rounded overflow-auto">
            <h6 className="fs-6">English (LTR)</h6>
            <code className="fs-6 d-block">
{`<html lang="en" dir="ltr">
  <h1 translate="no">BrandName</h1>
  <p>Hello World</p>
</html>`}
            </code>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="p-2 p-md-3 border rounded overflow-auto">
            <h6 className="fs-6">Arabic (RTL)</h6>
            <code className="fs-6 d-block">
{`<html lang="ar" dir="rtl">
  <h1 translate="no">اسم العلامة</h1>
  <p>مرحبا بالعالم</p>
</html>`}
            </code>
          </div>
        </div>
      </div>

      {/* Language Switcher UI */}
      <div className="mt-3 mt-md-4">
        <h6 className="fw-bold fs-6">
          <i className="fas fa-exchange-alt me-2"></i>
          Language Switcher Example
        </h6>
        <div className="d-flex flex-wrap gap-2">
          <button className="btn btn-sm btn-outline-primary">English</button>
          <button className="btn btn-sm btn-outline-primary">हिंदी</button>
          <button className="btn btn-sm btn-outline-primary">العربية</button>
          <button className="btn btn-sm btn-outline-primary">Français</button>
        </div>
      </div>
    </div>

    {/* Best Practices */}
    <div className="mt-3 mt-md-4 p-3 p-md-4 bg-light rounded">
      <h6 className="fw-bold mb-3 fs-6">
        <i className="fas fa-star me-2"></i>
        Best Practices
      </h6>

      <div className="row g-3">
        <div className="col-12 col-md-3">
          <div className="border-start border-primary border-3 ps-3">
            <h6 className="fw-bold fs-6">Declare Language</h6>
            <p className="fs-6 mb-0">
              Always set <code>lang</code> on <code>&lt;html&gt;</code>
            </p>
          </div>
        </div>

        <div className="col-12 col-md-3">
          <div className="border-start border-primary border-3 ps-3">
            <h6 className="fw-bold fs-6">Mixed Content</h6>
            <p className="fs-6 mb-0">
              Use <code>lang</code> on individual elements
            </p>
          </div>
        </div>

        <div className="col-12 col-md-3">
          <div className="border-start border-primary border-3 ps-3">
            <h6 className="fw-bold fs-6">Translation Control</h6>
            <p className="fs-6 mb-0">
              Use <code>translate="no"</code> for brand names
            </p>
          </div>
        </div>

        <div className="col-12 col-md-3">
          <div className="border-start border-primary border-3 ps-3">
            <h6 className="fw-bold fs-6">SEO i18n</h6>
            <p className="fs-6 mb-0">
              Use <code>hreflang</code> for language pages
            </p>
          </div>
        </div>
      </div>

     {/* hreflang Example */}
<div className="mt-3 bg-dark text-white p-2 p-md-3 rounded overflow-auto">
  <code className="fs-6 d-block">
    &lt;link rel="alternate" hreflang="en" href="https://site.com/en" /&gt;
    <br />
    &lt;link rel="alternate" hreflang="hi" href="https://site.com/hi" /&gt;
    <br />
    &lt;link rel="alternate" hreflang="ar" href="https://site.com/ar" /&gt;
  </code>
</div>

    </div>
  </div>
</div>

          
        </div>
      </section>

      {/* Boolean Attributes - Mobile Optimized */}
      <section className="py-4 py-md-5 bg-white">
        <div className="container px-3 px-md-4">
          <h2 className="text-center fw-bold mb-4 h3 h2-md">
            <i className="fas fa-toggle-on text-success me-2"></i>
            Boolean Attributes
          </h2>
          <p className="text-center text-muted mb-4 fs-6">
            Don't require a value. Presence = true.
          </p>

          <div className="row g-2 g-md-3">
            {[
              { name: 'disabled', desc: 'Disables element', example: '<input disabled>', icon: 'ban' },
              { name: 'readonly', desc: 'Read-only input', example: '<input readonly>', icon: 'eye' },
              { name: 'required', desc: 'Mandatory field', example: '<input required>', icon: 'asterisk' },
              { name: 'checked', desc: 'Pre-selects', example: '<input checked>', icon: 'check-square' },
              { name: 'selected', desc: 'Pre-selects option', example: '<option selected>', icon: 'check' },
              { name: 'hidden', desc: 'Hides element', example: '<div hidden>', icon: 'eye-slash' },
            ].map((attr, idx) => (
              <div className="col-6 col-md-4 col-lg-3" key={idx}>
                <div className="card border-0 shadow-sm h-100 mb-2">
                  <div className="card-body text-center p-2 p-md-3">
                    <div className={`bg-${['primary', 'success', 'warning', 'info', 'danger', 'secondary'][idx]} text-white rounded-circle p-2 d-inline-flex mb-2`}>
                      <i className={`fas fa-${attr.icon}`}></i>
                    </div>
                    <h6 className="fw-bold mb-1">
                      <code className="fs-6">{attr.name}</code>
                    </h6>
                    <p className="small text-muted mb-2">{attr.desc}</p>
                    <div className="bg-light p-1 rounded">
                      <code className="small text-danger">{attr.example}</code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table - Mobile Optimized */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container px-3 px-md-4">
          <h2 className="text-center fw-bold mb-4 h3 h2-md">
            <i className="fas fa-balance-scale text-dark me-2"></i>
            Comparison Table
          </h2>

          <div className="table-responsive">
            <table className="table table-bordered table-hover bg-white fs-6">
              <thead className="table-dark">
                <tr>
                  <th>Attribute</th>
                  <th>Unique?</th>
                  <th>Multiple?</th>
                  <th>Primary Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>id</code></td>
                  <td><span className="badge bg-danger">Unique</span></td>
                  <td><span className="badge bg-secondary">No</span></td>
                  <td>Unique identification</td>
                </tr>
                <tr>
                  <td><code>class</code></td>
                  <td><span className="badge bg-success">Reusable</span></td>
                  <td><span className="badge bg-success">Yes</span></td>
                  <td>Group styling</td>
                </tr>
                <tr>
                  <td><code>style</code></td>
                  <td><span className="badge bg-warning">Inline</span></td>
                  <td><span className="badge bg-success">Yes</span></td>
                  <td>Inline styling</td>
                </tr>
                <tr>
                  <td><code>title</code></td>
                  <td><span className="badge bg-success">Reusable</span></td>
                  <td><span className="badge bg-secondary">No</span></td>
                  <td>Accessibility</td>
                </tr>
                <tr>
                  <td><code>data-*</code></td>
                  <td><span className="badge bg-info">Custom</span></td>
                  <td><span className="badge bg-success">Yes</span></td>
                  <td>Custom data</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoreAttributesGuide;