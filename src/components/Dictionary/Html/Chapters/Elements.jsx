import React, { useState, useCallback, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Extract constant data outside component to prevent recreation on each render
const ELEMENT_CATEGORIES = [
  {
    category: 'Text Elements',
    icon: 'font',
    elements: [
      { tag: '<h1> to <h6>', description: 'Heading tags (h1 largest, h6 smallest)' },
      { tag: '<p>', description: 'Paragraph element' },
      { tag: '<span>', description: 'Inline container for text' },
      { tag: '<strong>', description: 'Important text (bold)' },
      { tag: '<em>', description: 'Emphasized text (italic)' },
      { tag: '<br>', description: 'Line break (self-closing)' },
      { tag: '<hr>', description: 'Horizontal rule (self-closing)' }
    ]
  },
  {
    category: 'Structural Elements',
    icon: 'layer-group',
    elements: [
      { tag: '<div>', description: 'Division or section' },
      { tag: '<header>', description: 'Header section' },
      { tag: '<nav>', description: 'Navigation links' },
      { tag: '<main>', description: 'Main content' },
      { tag: '<section>', description: 'Section in document' },
      { tag: '<article>', description: 'Independent content' },
      { tag: '<footer>', description: 'Footer section' },
      { tag: '<aside>', description: 'Content aside from main content' }
    ]
  },
  {
    category: 'List Elements',
    icon: 'list',
    elements: [
      { tag: '<ul>', description: 'Unordered list' },
      { tag: '<ol>', description: 'Ordered list' },
      { tag: '<li>', description: 'List item' },
      { tag: '<dl>', description: 'Description list' },
      { tag: '<dt>', description: 'Description term' },
      { tag: '<dd>', description: 'Description details' }
    ]
  },
  {
    category: 'Table Elements',
    icon: 'table',
    elements: [
      { tag: '<table>', description: 'Table container' },
      { tag: '<thead>', description: 'Table header' },
      { tag: '<tbody>', description: 'Table body' },
      { tag: '<tr>', description: 'Table row' },
      { tag: '<th>', description: 'Table header cell' },
      { tag: '<td>', description: 'Table data cell' }
    ]
  },
  {
    category: 'Form Elements',
    icon: 'edit',
    elements: [
      { tag: '<form>', description: 'Form container' },
      { tag: '<input>', description: 'Input field' },
      { tag: '<textarea>', description: 'Multi-line text input' },
      { tag: '<select>', description: 'Dropdown list' },
      { tag: '<option>', description: 'Option in dropdown' },
      { tag: '<button>', description: 'Clickable button' },
      { tag: '<label>', description: 'Label for form element' }
    ]
  },
  {
    category: 'Media Elements',
    icon: 'images',
    elements: [
      { tag: '<img>', description: 'Image (self-closing)' },
      { tag: '<audio>', description: 'Audio content' },
      { tag: '<video>', description: 'Video content' },
      { tag: '<figure>', description: 'Figure container' },
      { tag: '<figcaption>', description: 'Caption for figure' }
    ]
  }
];

const COMMON_ATTRIBUTES = [
  { attribute: 'id', description: 'Unique identifier for element', example: '<div id="header">' },
  { attribute: 'class', description: 'Class name for CSS styling', example: '<p class="text-red">' },
  { attribute: 'style', description: 'Inline CSS styles', example: '<h1 style="color:blue;">' },
  { attribute: 'title', description: 'Tooltip text on hover', example: '<a title="Tooltip">' },
  { attribute: 'data-*', description: 'Custom data attributes', example: '<div data-user="123">' },
  { attribute: 'hidden', description: 'Hides the element', example: '<p hidden>' },
  { attribute: 'lang', description: 'Language of element content', example: '<html lang="en">' }
];

const EXAMPLES = {
  basic: `<h1>This is a Heading</h1>
<p>This is a paragraph.</p>`,
  nested: `<div class="container">
  <h2>Section Title</h2>
  <p>Paragraph inside div</p>
</div>`,
  selfClosing: `<img src="image.jpg" alt="Description">
<br>
<input type="text">`
};

const NAV_ITEMS = [
  { id: 'what-is-element', label: 'What is Element', icon: 'question-circle' },
  { id: 'syntax', label: 'Syntax', icon: 'code' },
  { id: 'categories', label: 'Categories', icon: 'folder-open' },
  { id: 'attributes', label: 'Attributes', icon: 'cog' },
  { id: 'examples', label: 'Examples', icon: 'laptop-code' }
];

// Sub-components for better organization
const ElementCard = ({ tag, description, onCopy }) => (
  <div className="card h-100 border-light shadow-sm">
    <div className="card-body">
      <h6 className="card-title text-primary">
        <code>{tag}</code>
      </h6>
      <p className="card-text small">{description}</p>
      <button 
        className="btn btn-sm btn-outline-primary"
        onClick={onCopy}
      >
        <i className="fas fa-copy me-1"></i> Copy
      </button>
    </div>
  </div>
);

const AttributeCard = ({ attribute, description, example }) => (
  <div className="col-md-6 mb-3">
    <div className="card h-100 border-light">
      <div className="card-body">
        <h6 className="card-title">
          <code className="text-primary">{attribute}</code>
        </h6>
        <p className="card-text small">{description}</p>
        <div className="mt-2">
          <small className="text-muted">Example:</small><br/>
          <code className="bg-light p-1">
            {example}
          </code>
        </div>
      </div>
    </div>
  </div>
);

const ExampleCard = ({ title, exampleKey, showCode, onToggle, children }) => (
  <div className="col-md-4">
    <div className="card h-100 shadow-sm border-0">
      <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
        <h6 className="mb-0">{title}</h6>
        <button 
          className="btn btn-sm btn-outline-info"
          onClick={() => onToggle(exampleKey)}
        >
          {showCode ? 'View Preview' : 'View Code'}
        </button>
      </div>
      <div className="card-body bg-light">
        {showCode ? (
          <div className="bg-dark text-info p-3 rounded">
            <pre className="mb-0"><code>{EXAMPLES[exampleKey]}</code></pre>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  </div>
);

const Elements = () => {
  const [activeSection, setActiveSection] = useState('what-is-element');
  const [showCode, setShowCode] = useState({
    basic: true,
    nested: false,
    selfClosing: false
  });
  const [copiedTag, setCopiedTag] = useState(null);

  // Memoize the scroll function
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  }, []);

  // Optimize showCode toggle
  const toggleCodeView = useCallback((key) => {
    setShowCode(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);

  // Memoize the copy function
  const handleCopyTag = useCallback(async (tag) => {
    try {
      await navigator.clipboard.writeText(tag);
      setCopiedTag(tag);
      setTimeout(() => setCopiedTag(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, []);

  // Memoize computed values
  const elementCharacteristics = useMemo(() => [
    {
      icon: 'tag',
      color: 'primary',
      title: 'Have Tags',
      description: 'Defined by opening and closing tags'
    },
    {
      icon: 'text-height',
      color: 'success',
      title: 'Contain Content',
      description: 'Can contain text, other elements, or be empty'
    },
    {
      icon: 'sliders-h',
      color: 'warning',
      title: 'Have Attributes',
      description: 'Can have attributes for additional information'
    },
    {
      icon: 'sitemap',
      color: 'info',
      title: 'Can be Nested',
      description: 'Elements can contain other elements'
    }
  ], []);

  const attributeRules = useMemo(() => [
    {
      icon: 'check',
      color: 'success',
      title: 'Always in opening tag',
      description: 'Never in closing tag'
    },
    {
      icon: 'check',
      color: 'success',
      title: 'Use quotes',
      description: 'attribute="value" or attribute=\'value\''
    },
    {
      icon: 'check',
      color: 'success',
      title: 'Case-insensitive',
      description: 'But lowercase is recommended'
    },
    {
      icon: 'times',
      color: 'danger',
      title: 'No spaces in attribute name',
      description: 'Use hyphens or camelCase'
    }
  ], []);

  const bestPractices = useMemo(() => [
    'Use semantic attributes (alt, title)',
    'Keep attribute names lowercase',
    'Quote all attribute values',
    'Use CSS classes instead of inline styles'
  ], []);

  return (
    <div className="elements-container container-fluid p-0">
      {/* Header */}
      <header className="elements-header bg-dark text-white py-5">
        <div className="container">
          <h1 className="display-4">
            <i className="fas fa-cubes me-3"></i>
            HTML Elements
          </h1>
          <p className="lead">The Building Blocks of Web Pages</p>
          
          {/* Navigation */}
          <nav className="nav nav-pills justify-content-center mt-4 flex-wrap">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={`nav-link mx-1 mb-2 ${activeSection === item.id ? 'active bg-primary' : 'text-white'}`}
                onClick={() => scrollToSection(item.id)}
              >
                <i className={`fas fa-${item.icon} me-2`}></i>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-5">
        {/* What is HTML Element */}
        <section id="what-is-element" className="mb-5">
          <h2 className="mb-4 border-bottom pb-3">
            <i className="fas fa-question-circle text-primary me-2"></i>
            What is an HTML Element?
          </h2>
          
          <div className="row">
            <div className="col-lg-8">
              <div className="card shadow-sm mb-4 border-0">
                <div className="card-body">
                  <h4 className="card-title text-primary">Definition</h4>
                  <p className="card-text fs-5">
                    An <strong>HTML Element</strong> is the fundamental building block of HTML documents. 
                    It consists of content wrapped between opening and closing tags.
                  </p>
                  
                  <div className="row mt-4">
                    <div className="col-md-6 mb-4">
                      <div className="card h-100 border-primary">
                        <div className="card-body text-center">
                          <i className="fas fa-cube fa-3x text-primary mb-3"></i>
                          <h5>Building Blocks</h5>
                          <p className="small">Everything in HTML is made of elements</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="card h-100 border-success">
                        <div className="card-body text-center">
                          <i className="fas fa-layer-group fa-3x text-success mb-3"></i>
                          <h5>Hierarchical</h5>
                          <p className="small">Elements can be nested inside other elements</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {copiedTag && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                      Copied: <code>{copiedTag}</code>
                      <button type="button" className="btn-close" onClick={() => setCopiedTag(null)}></button>
                    </div>
                  )}

                  <div className="alert alert-info mt-3">
                    <i className="fas fa-lightbulb me-2"></i>
                    <strong>Analogy:</strong> Think of HTML elements as LEGO blocks. 
                    Each element is a block that can be combined with others to build complex structures (web pages).
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow-sm border-0">
                <div className="card-header bg-primary text-white">
                  <h5 className="mb-0">
                    <i className="fas fa-bullseye me-2"></i>
                    Element Characteristics
                  </h5>
                </div>
                <div className="card-body">
                  {elementCharacteristics.map((char, index) => (
                    <div className="d-flex align-items-start mb-3" key={index}>
                      <div 
                        className={`icon-circle bg-${char.color} text-white rounded-circle d-flex align-items-center justify-content-center me-3`}
                        style={{width: '30px', height: '30px'}}
                      >
                        <i className={`fas fa-${char.icon}`}></i>
                      </div>
                      <div>
                        <strong>{char.title}</strong>
                        <p className="small text-muted mb-0">{char.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Element Syntax */}
        <section id="syntax" className="mb-5 pt-5 border-top">
          <h2 className="mb-4">
            <i className="fas fa-code me-2 text-primary"></i>
            Element Syntax & Structure
          </h2>
          
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-header bg-success text-white">
                  <h5 className="mb-0">
                    <i className="fas fa-check-circle me-2"></i>
                    Basic Element Structure
                  </h5>
                </div>
                <div className="card-body">
                  <div className="syntax-diagram mb-4">
                    <div className="text-center mb-3">
                      <code className="display-6 text-success">
                        &lt;tagname&gt;Content&lt;/tagname&gt;
                      </code>
                    </div>
                    <div className="row text-center">
                      <div className="col-4">
                        <div className="p-3 border rounded bg-light">
                          <small className="text-muted">Opening Tag</small>
                          <div className="text-primary fw-bold">&lt;tagname&gt;</div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="p-3 border rounded bg-light">
                          <small className="text-muted">Content</small>
                          <div className="text-dark fw-bold">Content</div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="p-3 border rounded bg-light">
                          <small className="text-muted">Closing Tag</small>
                          <div className="text-danger fw-bold">&lt;/tagname&gt;</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-header bg-info text-white">
                  <h5 className="mb-0">
                    <i className="fas fa-tags me-2"></i>
                    Element Types
                  </h5>
                </div>
                <div className="card-body">
                  <div className="mb-4">
                    <h6 className="text-primary">Container Elements</h6>
                    <p className="small">Have opening and closing tags with content:</p>
                    <code className="bg-light p-2 d-block">
                      &lt;p&gt;This is a paragraph.&lt;/p&gt;
                    </code>
                  </div>
                  
                  <div className="mb-4">
                    <h6 className="text-warning">Empty Elements (Self-closing)</h6>
                    <p className="small">Don't have closing tags:</p>
                    <code className="bg-light p-2 d-block">
                      &lt;img src="photo.jpg" alt="Photo"&gt;<br/>
                      &lt;br&gt;<br/>
                      &lt;hr&gt;
                    </code>
                  </div>
                  
                  <div>
                    <h6 className="text-success">Nested Elements</h6>
                    <p className="small">Elements inside other elements:</p>
                    <code className="bg-light p-2 d-block">
                      &lt;div&gt;<br/>
                      &nbsp;&nbsp;&lt;h1&gt;Title&lt;/h1&gt;<br/>
                      &nbsp;&nbsp;&lt;p&gt;Paragraph&lt;/p&gt;<br/>
                      &lt;/div&gt;
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Element Categories */}
        <section id="categories" className="mb-5 pt-5 border-top">
          <h2 className="mb-4">
            <i className="fas fa-folder-open me-2 text-primary"></i>
            HTML Element Categories
          </h2>
          
          <div className="accordion" id="elementAccordion">
            {ELEMENT_CATEGORIES.map((category, catIndex) => (
              <div className="accordion-item mb-3 border" key={catIndex}>
                <h2 className="accordion-header" id={`heading${catIndex}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${catIndex}`}
                    aria-expanded="false"
                    aria-controls={`collapse${catIndex}`}
                  >
                    <i className={`fas fa-${category.icon} me-3`}></i>
                    <strong>{category.category}</strong>
                  </button>
                </h2>
                <div
                  id={`collapse${catIndex}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${catIndex}`}
                  data-bs-parent="#elementAccordion"
                >
                  <div className="accordion-body">
                    <div className="row">
                      {category.elements.map((element, elemIndex) => (
                        <div className="col-md-6 col-lg-4 mb-3" key={elemIndex}>
                          <ElementCard
                            tag={element.tag}
                            description={element.description}
                            onCopy={() => handleCopyTag(element.tag)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Attributes Section */}
        <section id="attributes" className="mb-5 pt-5 border-top">
          <h2 className="mb-4">
            <i className="fas fa-cog me-2 text-primary"></i>
            HTML Attributes
          </h2>
          
          <div className="row">
            <div className="col-lg-8">
              <div className="card shadow-sm mb-4 border-0">
                <div className="card-body">
                  <p className="card-text">
                    <strong>HTML Attributes</strong> provide additional information about HTML elements. 
                    They are always specified in the opening tag and usually come in name/value pairs.
                  </p>
                  
                  <div className="alert alert-warning mt-3">
                    <h5>Syntax:</h5>
                    <code className="fs-5">
                      &lt;tagname <span className="text-primary">attribute="value"</span>&gt;Content&lt;/tagname&gt;
                    </code>
                  </div>

                  <div className="row mt-4">
                    {COMMON_ATTRIBUTES.map((attr, index) => (
                      <AttributeCard
                        key={index}
                        attribute={attr.attribute}
                        description={attr.description}
                        example={attr.example}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow-sm border-0">
                <div className="card-header bg-danger text-white">
                  <h5 className="mb-0">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    Attribute Rules
                  </h5>
                </div>
                <div className="card-body">
                  {attributeRules.map((rule, index) => (
                    <div className="d-flex align-items-start mb-3" key={index}>
                      <i className={`fas fa-${rule.icon} text-${rule.color} me-3 mt-1`}></i>
                      <div>
                        <strong>{rule.title}</strong>
                        <p className="small text-muted mb-0">{rule.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card shadow-sm mt-4 border-0">
                <div className="card-header bg-success text-white">
                  <h5 className="mb-0">
                    <i className="fas fa-star me-2"></i>
                    Best Practices
                  </h5>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled small">
                    {bestPractices.map((practice, index) => (
                      <li className="mb-2" key={index}>
                        <i className="fas fa-check-circle text-success me-2"></i>
                        {practice}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Examples Section */}
        <section id="examples" className="mb-5 pt-5 border-top">
          <h2 className="mb-4 text-center">
            <i className="fas fa-laptop-code me-2 text-primary"></i>
            Interactive Code Examples
          </h2>
          
          <div className="row g-4">
            <ExampleCard
              title="Basic Elements"
              exampleKey="basic"
              showCode={showCode.basic}
              onToggle={toggleCodeView}
            >
              <div className="p-3 bg-white border rounded shadow-inner">
                <h1 className="h3">This is a Heading</h1>
                <p className="text-muted mb-0">This is a paragraph.</p>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Nested Structure"
              exampleKey="nested"
              showCode={showCode.nested}
              onToggle={toggleCodeView}
            >
              <div className="p-3 bg-white border rounded">
                <div className="p-2 border border-primary border-dashed rounded bg-light text-center">
                  <h4 className="h5 text-primary">Section Title</h4>
                  <p className="small mb-0">Inner element content</p>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Empty Elements"
              exampleKey="selfClosing"
              showCode={showCode.selfClosing}
              onToggle={toggleCodeView}
            >
              <div className="p-3 bg-white border rounded text-center">
                <div className="alert alert-secondary py-1 mb-2">Image Placeholder</div>
                <hr className="my-2" />
                <input type="text" className="form-control form-control-sm" placeholder="Text input field..." />
              </div>
            </ExampleCard>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Elements;