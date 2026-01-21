import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// --- DATA STRUCTURES (Outside component to prevent re-renders) ---
const NAV_ITEMS = [
  { id: 'definition', label: 'Definition', icon: 'book' },
  { id: 'syntax', label: 'Syntax', icon: 'code' },
  { id: 'categories', label: 'Categories', icon: 'layer-group' },
  { id: 'attributes', label: 'Attributes', icon: 'cog' },
];

const CATEGORIES = [
  { 
    title: 'Text Elements', icon: 'font', 
    elements: [
      { tag: '<h1>', desc: 'Heading (h1-h6)' },
      { tag: '<p>', desc: 'Paragraph' },
      { tag: '<strong>', desc: 'Important (Bold)' }
    ] 
  },
  { 
    title: 'Structural', icon: 'border-all', 
    elements: [
      { tag: '<div>', desc: 'Block container' },
      { tag: '<main>', desc: 'Primary content' },
      { tag: '<footer>', desc: 'Footer section' }
    ] 
  },
  { 
    title: 'Media & Forms', icon: 'photo-video', 
    elements: [
      { tag: '<img>', desc: 'Image (Self-closing)' },
      { tag: '<input>', desc: 'User input' },
      { tag: '<button>', desc: 'Action button' }
    ] 
  }
];

const GLOBAL_ATTRIBUTES = [
  { name: 'class', role: 'CSS Styling', example: 'class="btn-red"' },
  { name: 'id', role: 'Unique ID', example: 'id="main-header"' },
  { name: 'style', role: 'Inline CSS', example: 'style="color: blue;"' },
  { name: 'title', role: 'Tooltip Text', example: 'title="Read more"' },
  { name: 'hidden', role: 'Visibility', example: 'hidden' },
];

// --- MAIN COMPONENT ---
const HTMLElementsGuide = () => {
  const [activeSection, setActiveSection] = useState('definition');

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="bg-light min-vh-100">
    

      <main className="container py-5">
        
        {/* --- 1. BETTER DEFINITION --- */}
        <section id="definition" className="mb-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <h2 className="display-6 fw-bold mb-4">What is an HTML Element?</h2>
              <p className="fs-5 text-secondary mb-4">
                An <strong>Element</strong> is the complete package: the opening tag, the content, and the closing tag. 
                Think of the Tag as the <strong>Noun</strong> (the object) and the Attribute as the <strong>Adjective</strong> (the description).
              </p>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="p-3 bg-white border-start border-primary border-4 rounded shadow-sm">
                    <h6 className="fw-bold"><i className="fas fa-cube me-2 text-primary"></i>Building Block</h6>
                    <small className="text-muted">Elements stack together to create the webpage structure.</small>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 bg-white border-start border-success border-4 rounded shadow-sm">
                    <h6 className="fw-bold"><i className="fas fa-layer-group me-2 text-success"></i>Nesting</h6>
                    <small className="text-muted">Elements can contain other elements inside them.</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="alert alert-info border-0 shadow-sm p-4">
                <h5 className="fw-bold"><i className="fas fa-lightbulb me-2"></i>Quick Fact</h5>
                <p className="mb-0 small">The browser doesn't display the tags, only the content inside them. The tags tell the browser <em>how</em> to show that content.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. SYNTAX ANATOMY --- */}
        
        <section id="syntax" className="mb-5 py-5 border-top">
          <h2 className="text-center mb-5 fw-bold text-dark">Syntax Anatomy</h2>
          <div className="card bg-dark text-white p-5 border-0 shadow-lg overflow-auto">
            <div className="d-flex justify-content-center align-items-center gap-2 font-monospace fs-3">
              <span className="p-3 bg-primary bg-opacity-25 border border-primary rounded" title="Opening Tag">&lt;p&gt;</span>
              <span className="p-3 bg-white text-dark rounded fw-bold shadow-sm">Hello World</span>
              <span className="p-3 bg-danger bg-opacity-25 border border-danger rounded" title="Closing Tag">&lt;/p&gt;</span>
            </div>
            <div className="row mt-5 text-center small text-white-50">
              <div className="col-md-4">Start Tag: Defines the element</div>
              <div className="col-md-4">Content: What the user sees</div>
              <div className="col-md-4">End Tag: Includes a slash (/)</div>
            </div>
          </div>
        </section>

        {/* --- 3. CATEGORIES --- */}
        <section id="categories" className="mb-5 pt-5 border-top">
          <h2 className="mb-4 fw-bold"><i className="fas fa-folder text-primary me-2"></i>Common Categories</h2>
          <div className="accordion shadow-sm" id="catAccordion">
            {CATEGORIES.map((cat, idx) => (
              <div className="accordion-item border-0 mb-2 overflow-hidden rounded shadow-sm" key={idx}>
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target={`#cat-${idx}`}>
                    <i className={`fas fa-${cat.icon} me-3 text-primary`}></i>{cat.title}
                  </button>
                </h2>
                <div id={`cat-${idx}`} className="accordion-collapse collapse" data-bs-parent="#catAccordion">
                  <div className="accordion-body bg-light">
                    <div className="row g-3">
                      {cat.elements.map((el, i) => (
                        <div className="col-md-4" key={i}>
                          <div className="card border-0 p-3 h-100 shadow-sm">
                            <code className="h6 text-danger fw-bold">{el.tag}</code>
                            <small className="text-muted">{el.desc}</small>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 4. FULL ATTRIBUTES SECTION --- */}
        <section id="attributes" className="pt-5 border-top">
          <div className="row mb-4">
            <div className="col-lg-6">
              <h2 className="fw-bold"><i className="fas fa-cog text-primary me-2"></i>Attributes</h2>
              <p className="text-muted">Settings that modify how an element behaves.</p>
            </div>
            <div className="col-lg-6 text-lg-end">
              <div className="badge bg-warning text-dark p-2 px-3 rounded-pill">
                Rule: Always in the opening tag!
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* Global Attributes Table */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm h-100">
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="table-dark">
                      <tr>
                        <th>Attribute</th>
                        <th>Function</th>
                        <th>Code Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      {GLOBAL_ATTRIBUTES.map((attr, i) => (
                        <tr key={i}>
                          <td><code className="text-primary fw-bold">{attr.name}</code></td>
                          <td className="small">{attr.role}</td>
                          <td><code className="bg-light p-1 px-2 rounded small">{attr.example}</code></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Pro Tip Sidebar */}
            <div className="col-lg-4">
              <div className="card border-0 bg-primary text-white h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="fw-bold mb-3"><i className="fas fa-star me-2"></i>Pro Tips</h5>
                  <ul className="list-unstyled small">
                    <li className="mb-3">
                      <i className="fas fa-check-circle me-2"></i>
                      <strong>Quotes:</strong> Use double quotes for values (e.g., class="box").
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle me-2"></i>
                      <strong>Lowercase:</strong> HTML is not case-sensitive, but lowercase is the industry standard.
                    </li>
                    <li className="mb-0">
                      <i className="fas fa-check-circle me-2"></i>
                      <strong>Boolean:</strong> Attributes like <code>disabled</code> don't need a value!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
};

export default HTMLElementsGuide;