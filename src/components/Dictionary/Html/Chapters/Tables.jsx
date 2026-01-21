import React, { useState } from 'react';

// Component for individual tab sections
const TabSection = ({ children, isActive, id }) => (
  <div className={`tab-pane fade ${isActive ? 'show active' : ''}`} id={id} role="tabpanel">
    {children}
  </div>
);

// Component for card containers
const InfoCard = ({ title, icon, children, color = 'primary', borderColor }) => (
  <div className={`card border-${borderColor || color} h-100 shadow`}>
    <div className={`card-header bg-${color} text-white d-flex align-items-center`}>
      <i className={`fas fa-${icon} me-2`}></i>
      <h5 className="mb-0">{title}</h5>
    </div>
    <div className="card-body">
      {children}
    </div>
  </div>
);

// Component for code blocks
const CodeBlock = ({ children, language = 'html' }) => (
  <div className="bg-dark text-light p-3 rounded mb-3">
    <pre className="mb-0 font-monospace small">
      <code>{children}</code>
    </pre>
  </div>
);

// Component for table examples
const ExampleTable = ({ children, className = '', responsive = true }) => {
  const table = (
    <table className={`table ${className}`}>
      {children}
    </table>
  );

  return responsive ? (
    <div className="table-responsive">{table}</div>
  ) : table;
};

// Data for table tags reference
const tableTags = [
  { tag: '<table>', name: 'Table', desc: 'Main container for the entire table' },
  { tag: '<thead>', name: 'Table Head', desc: 'Header section of the table' },
  { tag: '<tbody>', name: 'Table Body', desc: 'Main content section' },
  { tag: '<tfoot>', name: 'Table Foot', desc: 'Footer section' },
  { tag: '<tr>', name: 'Table Row', desc: 'Defines a row of cells' },
  { tag: '<th>', name: 'Table Header', desc: 'Header cell (bold, centered)' },
  { tag: '<td>', name: 'Table Data', desc: 'Standard data cell' },
  { tag: '<caption>', name: 'Caption', desc: 'Table title/description' },
  { tag: '<colgroup>', name: 'Column Group', desc: 'Groups columns for styling' },
];

// Data for Bootstrap table classes
const bootstrapClasses = [
  { class: '.table-striped', desc: 'Alternating row colors' },
  { class: '.table-bordered', desc: 'Adds borders to cells' },
  { class: '.table-hover', desc: 'Adds hover effect on rows' },
  { class: '.table-sm', desc: 'Compact table with less padding' },
  { class: '.table-primary', desc: 'Primary colored rows' },
  { class: '.table-success', desc: 'Success colored rows' },
  { class: '.table-danger', desc: 'Danger colored rows' },
  { class: '.table-warning', desc: 'Warning colored rows' },
  { class: '.table-info', desc: 'Info colored rows' },
];

// Main Component
const HTMLTables = () => {
  const [activeTab, setActiveTab] = useState('basic');

  const tabs = [
    { id: 'basic', label: 'Basic Structure', icon: 'layer-group' },
    { id: 'advanced', label: 'Merging Cells', icon: 'expand-alt' },
    { id: 'styling', label: 'Styling', icon: 'paint-brush' },
    { id: 'semantic', label: 'Semantic Tags', icon: 'code' },
  ];

  return (
    <div className="container py-5">
      {/* Header */}
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary mb-3">
          <i className="fas fa-table me-3"></i>HTML Tables Complete Guide
        </h1>
        <p className="lead text-muted">
          Master HTML tables with interactive examples, best practices, and modern techniques
        </p>
      </header>

      {/* Navigation Tabs */}
      <nav className="mb-4">
        <div className="nav nav-pills justify-content-center" id="nav-tab" role="tablist">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`nav-link ${activeTab === tab.id ? 'active' : ''} mx-2`}
              onClick={() => setActiveTab(tab.id)}
              style={{ minWidth: '160px' }}
            >
              <i className={`fas fa-${tab.icon} me-2`}></i>
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Tab Content */}
      <div className="tab-content" id="nav-tabContent">
        {/* Basic Structure Tab */}
        {activeTab === 'basic' && (
          <div className="row g-4">
            <div className="col-lg-6">
              <InfoCard title="Table Anatomy" icon="layer-group" color="primary">
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary text-white rounded-circle p-3 me-3">
                      <i className="fas fa-th-large fa-2x"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1">Hierarchy Flow</h5>
                      <p className="text-muted mb-0">Table → Rows → Cells</p>
                    </div>
                  </div>
                  
                  <div className="alert alert-info d-flex align-items-center">
                    <i className="fas fa-lightbulb me-3 fs-4"></i>
                    <div>
                      <strong>Remember:</strong> Tables are for tabular data only, not for page layout!
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h6 className="fw-bold border-bottom pb-2 mb-3">Core Elements:</h6>
                  <div className="list-group">
                    {[
                      { num: 1, tag: '<table>', desc: 'Main container for the entire table', color: 'primary' },
                      { num: 2, tag: '<tr>', desc: 'Table Row - creates horizontal rows', color: 'success' },
                      { num: 3, tag: '<th>', desc: 'Table Header - bold and centered', color: 'warning' },
                      { num: 4, tag: '<td>', desc: 'Table Data - regular content cell', color: 'info' },
                    ].map(item => (
                      <div key={item.num} className="list-group-item border-0 py-3">
                        <div className="d-flex align-items-center">
                          <span className={`badge bg-${item.color} me-3`}>{item.num}</span>
                          <div className="flex-grow-1">
                            <code className="fw-bold fs-6">{item.tag}</code>
                            <small className="text-muted d-block mt-1">{item.desc}</small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </InfoCard>
            </div>

            <div className="col-lg-6">
              <InfoCard title="Live Example" icon="code" color="success">
                <h6 className="fw-bold mb-2">HTML Code:</h6>
                <CodeBlock>
{`<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>25</td>
      <td>New York</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>30</td>
      <td>London</td>
    </tr>
  </tbody>
</table>`}
                </CodeBlock>

                <h6 className="fw-bold mb-3">Live Preview:</h6>
                <ExampleTable className="table-bordered table-hover">
                  <thead className="table-success">
                    <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>City</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>John Doe</strong></td>
                      <td>25</td>
                      <td>New York</td>
                      <td><span className="badge bg-success">Active</span></td>
                    </tr>
                    <tr>
                      <td><strong>Jane Smith</strong></td>
                      <td>30</td>
                      <td>London</td>
                      <td><span className="badge bg-warning">Pending</span></td>
                    </tr>
                    <tr>
                      <td><strong>Bob Johnson</strong></td>
                      <td>28</td>
                      <td>Tokyo</td>
                      <td><span className="badge bg-danger">Inactive</span></td>
                    </tr>
                  </tbody>
                </ExampleTable>
              </InfoCard>
            </div>
          </div>
        )}

        {/* Merging Cells Tab */}
        {activeTab === 'advanced' && (
          <div className="row g-4">
            <div className="col-md-6">
              <InfoCard title="colspan - Merge Columns" icon="columns" color="warning" borderColor="warning">
                <div className="mb-4">
                  <p className="text-muted">
                    Use <code>colspan</code> to make a cell span across multiple columns horizontally.
                  </p>
                  
                  <div className="bg-light p-3 rounded mb-4">
                    <h6 className="fw-bold mb-2">Syntax:</h6>
                    <code className="d-block p-2 bg-white rounded">{'<th colspan="2">Full Name</th>'}</code>
                  </div>
                </div>

                <h6 className="fw-bold mb-3">Example:</h6>
                <ExampleTable className="table-bordered text-center" responsive={false}>
                  <thead className="table-warning">
                    <tr>
                      <th colSpan="2" className="bg-warning bg-opacity-25">Full Name</th>
                      <th>Age</th>
                      <th>Department</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John</td>
                      <td>Doe</td>
                      <td>25</td>
                      <td>Engineering</td>
                    </tr>
                    <tr>
                      <td>Jane</td>
                      <td>Smith</td>
                      <td>30</td>
                      <td>Marketing</td>
                    </tr>
                  </tbody>
                </ExampleTable>
              </InfoCard>
            </div>

            <div className="col-md-6">
              <InfoCard title="rowspan - Merge Rows" icon="bars" color="danger" borderColor="danger">
                <div className="mb-4">
                  <p className="text-muted">
                    Use <code>rowspan</code> to make a cell span across multiple rows vertically.
                  </p>
                  
                  <div className="bg-light p-3 rounded mb-4">
                    <h6 className="fw-bold mb-2">Syntax:</h6>
                    <code className="d-block p-2 bg-white rounded">{'<td rowspan="3">Contact Info</td>'}</code>
                  </div>
                </div>

                <h6 className="fw-bold mb-3">Example:</h6>
                <ExampleTable className="table-bordered text-center" responsive={false}>
                  <thead className="table-danger">
                    <tr>
                      <th>ID</th>
                      <th rowSpan="3" className="bg-danger bg-opacity-25 align-middle">
                        Contact Info<br/>
                        <small className="text-muted">(Same for all)</small>
                      </th>
                      <th>Department</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>101</td>
                      <td>Engineering</td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>Marketing</td>
                    </tr>
                    <tr>
                      <td>103</td>
                      <td>Sales</td>
                    </tr>
                  </tbody>
                </ExampleTable>
              </InfoCard>
            </div>

            <div className="col-12">
              <InfoCard title="Combined Example" icon="project-diagram" color="info">
                <div className="mb-4">
                  <p className="text-muted">
                    Real-world example combining both <code>colspan</code> and <code>rowspan</code>.
                  </p>
                </div>

                <ExampleTable className="table-bordered">
                  <thead className="table-info">
                    <tr>
                      <th rowSpan="2" className="align-middle text-center">ID</th>
                      <th colSpan="2" className="text-center">Name</th>
                      <th rowSpan="2" className="align-middle text-center">Department</th>
                      <th rowSpan="2" className="align-middle text-center">Salary</th>
                      <th rowSpan="2" className="align-middle text-center">Actions</th>
                    </tr>
                    <tr>
                      <th className="text-center">First</th>
                      <th className="text-center">Last</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>101</td>
                      <td>John</td>
                      <td>Doe</td>
                      <td>Engineering</td>
                      <td>$85,000</td>
                      <td>
                        <button className="btn btn-sm btn-outline-primary me-1">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-danger">
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>Jane</td>
                      <td>Smith</td>
                      <td>Marketing</td>
                      <td>$75,000</td>
                      <td>
                        <button className="btn btn-sm btn-outline-primary me-1">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-danger">
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className="table-secondary">
                    <tr>
                      <td colSpan="4" className="text-end fw-bold">Average Salary:</td>
                      <td className="fw-bold">$80,000</td>
                      <td></td>
                    </tr>
                  </tfoot>
                </ExampleTable>
              </InfoCard>
            </div>
          </div>
        )}

        {/* Styling Tab */}
        {activeTab === 'styling' && (
          <div className="row g-4">
            <div className="col-lg-6">
              <InfoCard title="Bootstrap Table Classes" icon="palette" color="success">
                <div className="mb-4">
                  <h6 className="fw-bold mb-3">Common Table Styles:</h6>
                  <ExampleTable className="table-striped table-hover">
                    <thead className="table-success">
                      <tr>
                        <th>Class</th>
                        <th>Description</th>
                        <th>Preview</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bootstrapClasses.map((cls, index) => (
                        <tr key={index} className={cls.class.replace('.', '')}>
                          <td><code>{cls.class}</code></td>
                          <td>{cls.desc}</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className={`me-2 p-1 rounded ${cls.class.replace('.', '')} small`}>
                                Sample
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </ExampleTable>
                </div>

                <div className="mt-4">
                  <h6 className="fw-bold mb-3">Table Borders:</h6>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="p-3 border rounded">
                        <h6 className="small fw-bold">Normal Border</h6>
                        <ExampleTable className="table-bordered" responsive={false}>
                          <tbody>
                            <tr><td>Cell 1</td><td>Cell 2</td></tr>
                          </tbody>
                        </ExampleTable>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 border rounded">
                        <h6 className="small fw-bold">Borderless</h6>
                        <ExampleTable className="table-borderless" responsive={false}>
                          <tbody>
                            <tr><td>Cell 1</td><td>Cell 2</td></tr>
                          </tbody>
                        </ExampleTable>
                      </div>
                    </div>
                  </div>
                </div>
              </InfoCard>
            </div>

            <div className="col-lg-6">
              <InfoCard title="Responsive & Advanced" icon="mobile-alt" color="primary">
                <div className="alert alert-info d-flex align-items-center">
                  <i className="fas fa-info-circle me-3 fs-4"></i>
                  <div>
                    <strong>Pro Tip:</strong> Always wrap tables in <code>div.table-responsive</code> for mobile compatibility.
                  </div>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold mb-3">Responsive Example:</h6>
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead className="table-primary">
                        <tr>
                          <th>Product ID</th>
                          <th>Product Name</th>
                          <th>Category</th>
                          <th>Price</th>
                          <th>Stock</th>
                          <th>Rating</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>P001</td>
                          <td>Wireless Mouse</td>
                          <td>Electronics</td>
                          <td>$29.99</td>
                          <td>150</td>
                          <td>
                            <div className="text-warning">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                            </div>
                          </td>
                          <td><span className="badge bg-success">In Stock</span></td>
                          <td>
                            <button className="btn btn-sm btn-outline-success">
                              <i className="fas fa-eye"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-4">
                  <h6 className="fw-bold mb-3">Table Sizing Comparison:</h6>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="p-3 border rounded">
                        <h6 className="small fw-bold"><code>.table-sm</code></h6>
                        <ExampleTable className="table-sm table-bordered" responsive={false}>
                          <tbody>
                            <tr><td>Compact</td><td>Cells</td></tr>
                          </tbody>
                        </ExampleTable>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 border rounded">
                        <h6 className="small fw-bold">Default Size</h6>
                        <ExampleTable className="table-bordered" responsive={false}>
                          <tbody>
                            <tr><td>Regular</td><td>Cells</td></tr>
                          </tbody>
                        </ExampleTable>
                      </div>
                    </div>
                  </div>
                </div>
              </InfoCard>
            </div>
          </div>
        )}

        {/* Semantic Tags Tab */}
        {activeTab === 'semantic' && (
          <div className="row g-4">
            <div className="col-lg-8">
              <InfoCard title="Semantic Table Structure" icon="sitemap" color="info">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-4">
                      <div className="d-flex align-items-center mb-2">
                        <div className="bg-info text-white rounded-circle p-2 me-2">
                          <i className="fas fa-heading"></i>
                        </div>
                        <h6 className="fw-bold mb-0">&lt;thead&gt;</h6>
                      </div>
                      <p className="text-muted small">Contains header rows (column titles).</p>
                      <CodeBlock>{'<thead><tr><th>Header</th></tr></thead>'}</CodeBlock>
                    </div>

                    <div className="mb-4">
                      <div className="d-flex align-items-center mb-2">
                        <div className="bg-success text-white rounded-circle p-2 me-2">
                          <i className="fas fa-list"></i>
                        </div>
                        <h6 className="fw-bold mb-0">&lt;tbody&gt;</h6>
                      </div>
                      <p className="text-muted small">Contains main data rows.</p>
                      <CodeBlock>{'<tbody><tr><td>Data</td></tr></tbody>'}</CodeBlock>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-4">
                      <div className="d-flex align-items-center mb-2">
                        <div className="bg-warning text-white rounded-circle p-2 me-2">
                          <i className="fas fa-shoe-prints"></i>
                        </div>
                        <h6 className="fw-bold mb-0">&lt;tfoot&gt;</h6>
                      </div>
                      <p className="text-muted small">Contains footer rows (totals, summaries).</p>
                      <CodeBlock>{'<tfoot><tr><td>Total</td></tr></tfoot>'}</CodeBlock>
                    </div>

                    <div className="mb-4">
                      <div className="d-flex align-items-center mb-2">
                        <div className="bg-primary text-white rounded-circle p-2 me-2">
                          <i className="fas fa-heading"></i>
                        </div>
                        <h6 className="fw-bold mb-0">&lt;caption&gt;</h6>
                      </div>
                      <p className="text-muted small">Table title/description.</p>
                      <CodeBlock>{'<caption>Monthly Report</caption>'}</CodeBlock>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h6 className="fw-bold mb-3">Complete Semantic Example:</h6>
                  <CodeBlock>
{`<table class="table">
  <caption>Employee Information with Salary Details</caption>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Full Name</th>
      <th scope="col">Department</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">101</th>
      <td>John Doe</td>
      <td>Engineering</td>
      <td>$85,000</td>
    </tr>
    <tr>
      <th scope="row">102</th>
      <td>Jane Smith</td>
      <td>Marketing</td>
      <td>$75,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3" class="text-end fw-bold">Total Salary:</td>
      <td class="fw-bold">$160,000</td>
    </tr>
  </tfoot>
</table>`}
                  </CodeBlock>
                </div>
              </InfoCard>
            </div>

            <div className="col-lg-4">
              <InfoCard title="HTML Table Tags Reference" icon="tags" color="success">
                <div className="table-responsive">
                  <table className="table table-hover table-sm">
                    <thead className="table-success">
                      <tr>
                        <th>Tag</th>
                        <th>Name</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableTags.map((tag, index) => (
                        <tr key={index}>
                          <td><code className="text-primary">{tag.tag}</code></td>
                          <td><strong>{tag.name}</strong></td>
                          <td className="small">{tag.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="alert alert-warning mt-3">
                  <i className="fas fa-exclamation-triangle me-2"></i>
                  <div>
                    <strong>Best Practice:</strong> Always use semantic tags and <code>scope</code> attribute for accessibility.
                  </div>
                </div>

                <div className="mt-3">
                  <h6 className="fw-bold mb-2">Scope Attribute:</h6>
                  <ul className="list-unstyled small">
                    <li className="mb-1">
                      <code>scope="col"</code> - For column headers
                    </li>
                    <li className="mb-1">
                      <code>scope="row"</code> - For row headers
                    </li>
                    <li className="mb-1">
                      <code>scope="colgroup"</code> - For column groups
                    </li>
                    <li>
                      <code>scope="rowgroup"</code> - For row groups
                    </li>
                  </ul>
                </div>
              </InfoCard>
            </div>
          </div>
        )}
      </div>

      {/* Cheat Sheet */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card border-dark shadow-lg">
            <div className="card-header bg-dark text-white d-flex align-items-center">
              <i className="fas fa-clipboard-list me-3 fs-4"></i>
              <h4 className="mb-0">HTML Tables Cheat Sheet</h4>
            </div>
            <div className="card-body">
              <div className="row g-4">
                <div className="col-md-3">
                  <div className="p-3 bg-primary bg-opacity-10 rounded h-100">
                    <h6 className="fw-bold text-primary mb-3">
                      <i className="fas fa-cube me-2"></i>Basic Structure
                    </h6>
                    <CodeBlock>
{`<table>
  <tr>
    <td>Data</td>
  </tr>
</table>`}
                    </CodeBlock>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="p-3 bg-success bg-opacity-10 rounded h-100">
                    <h6 className="fw-bold text-success mb-3">
                      <i className="fas fa-expand-alt me-2"></i>Merging Cells
                    </h6>
                    <div className="mb-2">
                      <code>colspan="2"</code>
                      <small className="d-block text-muted">Merge columns</small>
                    </div>
                    <div>
                      <code>rowspan="2"</code>
                      <small className="d-block text-muted">Merge rows</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="p-3 bg-danger bg-opacity-10 rounded h-100">
                    <h6 className="fw-bold text-danger mb-3">
                      <i className="fas fa-universal-access me-2"></i>Accessibility
                    </h6>
                    <div className="mb-2">
                      <code>scope="col"</code>
                      <small className="d-block text-muted">Column header</small>
                    </div>
                    <div>
                      <code>scope="row"</code>
                      <small className="d-block text-muted">Row header</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="p-3 bg-warning bg-opacity-10 rounded h-100">
                    <h6 className="fw-bold text-warning mb-3">
                      <i className="fas fa-lightbulb me-2"></i>Best Practices
                    </h6>
                    <ul className="small mb-0">
                      <li>Use semantic tags</li>
                      <li>Add table headers</li>
                      <li>Make responsive</li>
                      <li>Use proper scope</li>
                      <li>Add captions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card border-primary shadow">
            <div className="card-header bg-primary text-white d-flex align-items-center">
              <i className="fas fa-key me-3 fs-4"></i>
              <h5 className="mb-0">Key Takeaways</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Tables are for tabular data only
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Use semantic tags for better accessibility
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <code>colspan</code> merges columns, <code>rowspan</code> merges rows
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Always make tables responsive
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Use <code>scope</code> attribute for accessibility
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Add captions for table descriptions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-5 pt-4 border-top">
        <div className="row">
          <div className="col-md-6">
            <h6 className="fw-bold">Additional Resources:</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-decoration-none"><i className="fas fa-book me-1"></i> MDN Web Docs - Tables</a></li>
              <li><a href="#" className="text-decoration-none"><i className="fas fa-graduation-cap me-1"></i> W3C Table Guidelines</a></li>
              <li><a href="#" className="text-decoration-none"><i className="fab fa-bootstrap me-1"></i> Bootstrap Tables</a></li>
            </ul>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="text-muted small">
              <i className="fas fa-code me-1"></i> Built with React & Bootstrap
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HTMLTables;