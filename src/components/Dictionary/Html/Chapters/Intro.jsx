import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Intro = () => {
  // Removed unused showExample state
  const [versions] = useState([
    { year: 1991, version: 'HTML 1.0', description: 'First version with 18 elements' },
    { year: 1995, version: 'HTML 2.0', description: 'Standard for basic web pages' },
    { year: 1997, version: 'HTML 3.2', description: 'Added tables, applets, text flow' },
    { year: 1999, version: 'HTML 4.01', description: 'Introduced CSS support' },
    { year: 2000, version: 'XHTML 1.0', description: 'Stricter, XML-based version' },
    { year: 2008, version: 'HTML5 Draft', description: 'Started development' },
    { year: 2014, version: 'HTML5', description: 'Official W3C Recommendation' },
  ]);

  const [features] = useState([
    'Creates structure of web pages',
    'Uses tags/elements to define content',
    'Platform-independent (works on all devices)',
    'Supports multimedia (images, video, audio)',
    'Hypertext capability (links between pages)',
    'Integrates with CSS and JavaScript',
    'Semantic elements for better accessibility'
  ]);

  // Add smooth scrolling for anchor links
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add navigation for better UX
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <div className="intro-container container-fluid p-0">
      {/* Header */}
      <header className="intro-header bg-primary text-white py-4">
        <div className="container">
          <h1 className="display-4">
            <i className="fas fa-code me-3"></i>
            HTML Introduction
          </h1>
          <p className="lead">The standard markup language for creating Web pages</p>
          
          {/* Navigation Menu */}
          <nav className="nav nav-pills justify-content-center mt-3">
            <button 
              className={`nav-link mx-1 ${activeSection === 'introduction' ? 'active bg-white text-primary' : 'text-white'}`}
              onClick={() => { setActiveSection('introduction'); scrollToSection('introduction'); }}
            >
              <i className="fas fa-info-circle me-2"></i>Introduction
            </button>
            <button 
              className={`nav-link mx-1 ${activeSection === 'history' ? 'active bg-white text-primary' : 'text-white'}`}
              onClick={() => { setActiveSection('history'); scrollToSection('history'); }}
            >
              <i className="fas fa-timeline me-2"></i>History
            </button>
            <button 
              className={`nav-link mx-1 ${activeSection === 'features' ? 'active bg-white text-primary' : 'text-white'}`}
              onClick={() => { setActiveSection('features'); scrollToSection('features'); }}
            >
              <i className="fas fa-list-check me-2"></i>Features
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-5">
        
        {/* Introduction Section */}
        <section id="introduction" className="intro-content mb-5">
          <h2 className="mb-4 border-bottom pb-3">
            <i className="fas fa-info-circle text-primary me-2"></i>
            What is HTML?
          </h2>
          <div className="row">
            <div className="col-lg-8">
              <div className="card shadow-sm mb-4 border-0">
                <div className="card-body">
                  <p className="card-text fs-5">
                    <strong>HTML (HyperText Markup Language)</strong> is the standard markup language 
                    for documents designed to be displayed in a web browser. It defines the structure 
                    and content of web pages.
                  </p>
                  <p className="card-text">
                    With HTML you can create your own Website. HTML is easy to learn and is the 
                    foundation of all websites on the internet.
                  </p>
                  
                  <div className="alert alert-info mt-3 border-start border-5 border-info">
                    <i className="fas fa-lightbulb me-2"></i>
                    <strong>Fun Fact:</strong> The first version of HTML had only 18 elements. 
                    Today, HTML5 has over 100 elements!
                  </div>
                </div>
              </div>

              <h3 className="mt-5 mb-3">
                <i className="fas fa-cogs text-primary me-2"></i>
                How HTML Works
              </h3>
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <p>HTML uses a system of tags and attributes to define elements within a page:</p>
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <div className="card h-100 border-primary">
                        <div className="card-body text-center">
                          <i className="fas fa-tag text-primary fa-2x mb-2"></i>
                          <h5 className="card-title">Tags</h5>
                          <p className="card-text small">Mark the beginning and end of an element</p>
                          <code className="text-primary">&lt;p&gt;...&lt;/p&gt;</code>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card h-100 border-warning">
                        <div className="card-body text-center">
                          <i className="fas fa-list-alt text-warning fa-2x mb-2"></i>
                          <h5 className="card-title">Elements</h5>
                          <p className="card-text small">The complete tag with content</p>
                          <code className="text-warning">&lt;p&gt;Content&lt;/p&gt;</code>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card h-100 border-info">
                        <div className="card-body text-center">
                          <i className="fas fa-pen text-info fa-2x mb-2"></i>
                          <h5 className="card-title">Attributes</h5>
                          <p className="card-text small">Provide additional information</p>
                          <code className="text-info">&lt;p class="text"&gt;</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="card shadow-sm border-0">
                <div className="card-header bg-primary text-white">
                  <h5 className="mb-0">
                    <i className="fas fa-key me-2"></i>
                    Key Points
                  </h5>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-start mb-3">
                    <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                    <span>HTML is not a programming language, it's a markup language</span>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                    <span>HTML describes the structure of a web page</span>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                    <span>HTML elements are the building blocks of HTML pages</span>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                    <span>Browsers render HTML documents as web pages</span>
                  </div>
                </div>
              </div>

              <div className="card shadow-sm mt-4 border-0">
                <div className="card-header bg-info text-white">
                  <h5 className="mb-0">
                    <i className="fas fa-file-code me-2"></i>
                    File Extension
                  </h5>
                </div>
                <div className="card-body text-center">
                  <div className="file-extension-display">
                    <div className="mb-3">
                      <span className="fs-1 fw-bold text-info">.html</span>
                      <p className="text-muted mt-2 small">Most common extension</p>
                    </div>
                    <div>
                      <span className="fs-1 fw-bold text-secondary">.htm</span>
                      <p className="text-muted mt-2 small">Used on older Windows systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History & Versions Section */}
        <section id="history" className="history-content mb-5 pt-5 border-top">
          <h2 className="mb-4">
            <i className="fas fa-timeline me-2 text-primary"></i>
            HTML History & Versions
          </h2>
          
          <div className="card shadow-sm mb-5 border-0">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <p className="card-text">
                    HTML was created by <strong>Tim Berners-Lee</strong> in 1991 while working at CERN. 
                    The first version had just 18 elements. HTML has evolved through several versions 
                    over the years, with HTML5 being the latest standard.
                  </p>
                </div>
                <div className="col-md-4 text-center">
                  <div className="bg-light p-3 rounded">
                    <i className="fas fa-user-tie fa-3x text-primary mb-2"></i>
                    <h6>Tim Berners-Lee</h6>
                    <p className="small mb-0">Inventor of HTML</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline position-relative">
            {/* Timeline line */}
            <div className="timeline-line position-absolute start-50 translate-middle-x" style={{
              width: '2px',
              backgroundColor: '#007bff',
              top: 0,
              bottom: 0
            }}></div>
            
            {versions.map((item, index) => (
              <div className="timeline-item position-relative mb-4" key={index}>
                <div className={`timeline-marker position-absolute rounded-circle ${
                  index % 2 === 0 ? 'start-50 translate-middle-x bg-primary' : 'start-50 translate-middle-x bg-primary'
                }`} style={{
                  width: '20px',
                  height: '20px',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  border: '3px solid white',
                  boxShadow: '0 0 0 3px #007bff'
                }}></div>
                
                <div className={`timeline-content card shadow-sm ${
                  index % 2 === 0 ? 'me-auto' : 'ms-auto'
                }`} style={{
                  width: '45%'
                }}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="card-title text-primary">{item.version}</h5>
                      <span className="badge bg-primary rounded-pill">{item.year}</span>
                    </div>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card shadow-sm mt-5 border-0">
            <div className="card-header bg-warning text-dark">
              <h5 className="mb-0">
                <i className="fas fa-exclamation-triangle me-2"></i>
                Did You Know?
              </h5>
            </div>
            <div className="card-body">
              <p className="mb-0">
                HTML5 is not just an update to HTML4. It's a complete overhaul that introduced 
                semantic elements, multimedia support without plugins, and APIs for complex web applications.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features-content mb-5 pt-5 border-top">
          <h2 className="mb-4">
            <i className="fas fa-list-check me-2 text-primary"></i>
            HTML Features
          </h2>
          
          <div className="row">
            {features.map((feature, index) => (
              <div className="col-md-6 mb-3" key={index}>
                <div className="card feature-card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <div className="d-flex align-items-start">
                      <div className="feature-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{width: '40px', height: '40px', flexShrink: 0}}>
                        {index + 1}
                      </div>
                      <div>
                        <h5 className="card-title">{feature}</h5>
                        <p className="card-text text-muted small">
                          {index === 0 && "Organizes content with headings, paragraphs, lists, etc."}
                          {index === 1 && "Tags like <h1>, <p>, <div> define different content types"}
                          {index === 2 && "Can be viewed on Windows, Mac, Linux, and mobile devices"}
                          {index === 3 && "<img>, <video>, <audio> tags for rich media content"}
                          {index === 4 && "<a> tag creates clickable links to other pages/resources"}
                          {index === 5 && "Works together with CSS for styling and JS for interactivity"}
                          {index === 6 && "<header>, <footer>, <article> describe content meaning"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <div className="card shadow-sm border-success border-2">
                <div className="card-header bg-success text-white">
                  <h5 className="mb-0">
                    <i className="fas fa-thumbs-up me-2"></i>
                    Advantages
                  </h5>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Easy to learn and use</strong>
                      <p className="small text-muted mb-0 ms-4">Simple syntax with clear documentation</p>
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Supported by all browsers</strong>
                      <p className="small text-muted mb-0 ms-4">Universal compatibility</p>
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Free and open standard</strong>
                      <p className="small text-muted mb-0 ms-4">No licensing fees</p>
                    </li>
                    <li className="mb-0">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Integrates easily with other languages</strong>
                      <p className="small text-muted mb-0 ms-4">CSS, JavaScript, PHP, etc.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow-sm border-danger border-2">
                <div className="card-header bg-danger text-white">
                  <h5 className="mb-0">
                    <i className="fas fa-exclamation-circle me-2"></i>
                    Limitations
                  </h5>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-times-circle text-danger me-2"></i>
                      <strong>Static language</strong>
                      <p className="small text-muted mb-0 ms-4">Needs JavaScript for dynamic content</p>
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-times-circle text-danger me-2"></i>
                      <strong>Limited security features</strong>
                      <p className="small text-muted mb-0 ms-4">Relies on other technologies for security</p>
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-times-circle text-danger me-2"></i>
                      <strong>Verbose code for complex layouts</strong>
                      <p className="small text-muted mb-0 ms-4">Can lead to large file sizes</p>
                    </li>
                    <li className="mb-0">
                      <i className="fas fa-times-circle text-danger me-2"></i>
                      <strong>Browser compatibility issues</strong>
                      <p className="small text-muted mb-0 ms-4">Rendering differences between browsers</p>
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

export default Intro;