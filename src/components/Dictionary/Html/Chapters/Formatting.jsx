import React, { useState, useMemo } from 'react';

// --- DATA & CONSTANTS (Extracted for DRY) ---
const FORMATTING_TAGS = [
    { tag: '<h1> - <h6>', description: 'Headings (h1 largest, h6 smallest)', example: '<h1>Main Title</h1>', usage: 'Document structure and hierarchy' },
    { tag: '<p>', description: 'Paragraph', example: '<p>This is a paragraph.</p>', usage: 'Blocks of text content' },
    { tag: '<strong> or <b>', description: 'Bold text', example: '<strong>Important</strong>', usage: 'Strong importance or bold styling' },
    { tag: '<em> or <i>', description: 'Italic text', example: '<em>Emphasized</em>', usage: 'Emphasis or alternative voice' },
    { tag: '<u>', description: 'Underlined text', example: '<u>Underlined</u>', usage: 'Proper names or misspelled words' },
    { tag: '<mark>', description: 'Highlighted text', example: '<mark>Highlighted</mark>', usage: 'Marking important text' },
    { tag: '<small>', description: 'Smaller text', example: '<small>Small text</small>', usage: 'Side comments or fine print' },
    { tag: '<del>', description: 'Deleted text', example: '<del>$100</del> $75', usage: 'Showing removed content' },
    { tag: '<ins>', description: 'Inserted text', example: 'Price: <ins>$75</ins>', usage: 'Showing added content' },
    { tag: '<sub>', description: 'Subscript', example: 'H<sub>2</sub>O', usage: 'Chemical formulas, footnotes' },
    { tag: '<sup>', description: 'Superscript', example: 'E = mc<sup>2</sup>', usage: 'Exponents, footnotes' },
    { tag: '<code>', description: 'Inline code', example: '<code>console.log()</code>', usage: 'Code snippets' },
    { tag: '<pre>', description: 'Preformatted text', example: '<pre>Multi-line\n   code</pre>', usage: 'Preserving whitespace and line breaks' },
    { tag: '<blockquote>', description: 'Block quotation', example: '<blockquote>Quote text</blockquote>', usage: 'Long quotations' },
    { tag: '<q>', description: 'Inline quotation', example: '<q>Short quote</q>', usage: 'Short inline quotes' },
    { tag: '<abbr>', description: 'Abbreviation', example: '<abbr title="World Health Organization">WHO</abbr>', usage: 'Explaining abbreviations' },
    { tag: '<address>', description: 'Contact information', example: '<address>123 Street, City</address>', usage: 'Contact details' },
    { tag: '<br>', description: 'Line break', example: 'Line 1<br>Line 2', usage: 'Forcing new lines' },
    { tag: '<hr>', description: 'Horizontal rule', example: '<hr>', usage: 'Thematic break or separator' }
];

const ALIGNMENTS = [
    { value: 'left', icon: 'fas fa-align-left', label: 'Left' },
    { value: 'center', icon: 'fas fa-align-center', label: 'Center' },
    { value: 'right', icon: 'fas fa-align-right', label: 'Right' },
    { value: 'justify', icon: 'fas fa-align-justify', label: 'Justify' }
];

const FONT_FAMILIES = [
    { value: 'Arial, sans-serif', label: 'Arial' },
    { value: 'Georgia, serif', label: 'Georgia' },
    { value: 'Courier New, monospace', label: 'Courier New' },
    { value: 'Times New Roman, serif', label: 'Times New Roman' },
    { value: 'Verdana, sans-serif', label: 'Verdana' }
];

const BEST_PRACTICES = [
    { icon: 'fas fa-check text-success', text: 'Use <code>&lt;strong&gt;</code> for important text, not just bold styling' },
    { icon: 'fas fa-check text-success', text: 'Use <code>&lt;em&gt;</code> for emphasis, not just italic styling' },
    { icon: 'fas fa-check text-success', text: 'Maintain proper heading hierarchy (h1 → h2 → h3)' },
    { icon: 'fas fa-check text-success', text: 'Use semantic tags for better accessibility' },
    { icon: 'fas fa-check text-success', text: 'Avoid using <code>&lt;br&gt;</code> for visual spacing - use CSS instead' }
];

const TAB_CONFIG = [
    { id: 'formatting', label: 'Formatting Tags', icon: 'fas fa-text-height' },
    { id: 'demo', label: 'Live Demo', icon: 'fas fa-sliders-h' },
    { id: 'examples', label: 'Examples', icon: 'fas fa-code' }
];

const EXAMPLES = {
    basic: `<!DOCTYPE html>
<html>
<head>
    <title>Basic Formatting</title>
</head>
<body>
    <h1>Main Heading</h1>
    <h2>Subheading</h2>
    <p>This is a <strong>bold text</strong> and this is <em>italic text</em>.</p>
    <p>Chemical formula: H<sub>2</sub>O<br>Mathematical: E = mc<sup>2</sup></p>
    <p><mark>Highlight important points</mark> and use <small>small text for details</small>.</p>
    <hr>
    <address>Contact us at: 123 Street, City<br>Email: info@example.com</address>
</body>
</html>`,

    advanced: `<!DOCTYPE html>
<html>
<head>
    <title>Advanced Formatting</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .highlight { background-color: yellow; padding: 2px 5px; }
    </style>
</head>
<body>
    <article>
        <header>
            <h1>Article Title</h1>
            <p><small>Published on: <time datetime="2024-01-20">January 20, 2024</time></small></p>
        </header>
        <section>
            <h2>Introduction</h2>
            <p>In this article, we'll explore <abbr title="HyperText Markup Language">HTML</abbr> formatting.</p>
            <blockquote cite="https://example.com">
                <p>"Good formatting makes content accessible and readable."</p>
                <footer>— John Doe, <cite>Web Design Principles</cite></footer>
            </blockquote>
        </section>
        <section>
            <h2>Code Example</h2>
            <pre><code>function greet() {
    console.log("Hello, World!");
    return true;
}</code></pre>
        </section>
        <footer>
            <p><ins>Updated:</ins> Added new examples on <del>2023-12-15</del> 2024-01-20</p>
            <p>Tags: <mark>HTML</mark>, <mark>Web Development</mark>, <mark>Formatting</mark></p>
        </footer>
    </article>
</body>
</html>`
};

// --- REUSABLE COMPONENTS ---
const Card = ({ children, className = '' }) => (
    <div className={`card shadow-sm ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = '' }) => (
    <div className={`card-header ${className}`}>{children}</div>
);

const CardBody = ({ children, className = '' }) => (
    <div className={`card-body ${className}`}>{children}</div>
);

const ResponsiveTable = () => (
    <div className="table-responsive">
        <table className="table table-hover">
            <thead className="table-primary d-none d-md-table-header-group">
                <tr>
                    <th>Tag</th>
                    <th>Description</th>
                    <th>Example</th>
                    <th>Usage</th>
                </tr>
            </thead>
            <tbody>
                {FORMATTING_TAGS.map((tag, index) => (
                    <tr key={index} className="position-relative">
                        {/* Mobile View */}
                        <td className="d-md-none">
                            <div className="d-flex flex-column gap-2">
                                <div>
                                    <code className="text-danger fw-bold">{tag.tag}</code>
                                    <div className="text-muted small mt-1">{tag.description}</div>
                                </div>
                                <div>
                                    <div className="fw-semibold small">Example:</div>
                                    <code className="text-success small">{tag.example}</code>
                                </div>
                                <div className="small text-muted">
                                    <em>{tag.usage}</em>
                                </div>
                            </div>
                        </td>

                        {/* Desktop View */}
                        <td className="d-none d-md-table-cell">
                            <code className="text-danger fw-bold">{tag.tag}</code>
                        </td>
                        <td className="d-none d-md-table-cell">{tag.description}</td>
                        <td className="d-none d-md-table-cell">
                            <code className="text-success small">{tag.example}</code>
                        </td>
                        <td className="d-none d-md-table-cell small text-muted">{tag.usage}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const DemoControls = ({ fontSize, textColor, bgColor, onFontSizeChange, onTextColorChange, onBgColorChange }) => (
    <div className="row g-3 mb-4">
        {[
            {
                label: `Font Size: ${fontSize}px`,
                control: (
                    <input
                        type="range"
                        className="form-range"
                        min="12"
                        max="36"
                        value={fontSize}
                        onChange={onFontSizeChange}
                        aria-label="Font size"
                    />
                ),
                colClass: 'col-12 col-sm-6 col-md-3'
            },
            {
                label: 'Text Color',
                control: (
                    <input
                        type="color"
                        className="form-control form-control-color w-100"
                        value={textColor}
                        onChange={onTextColorChange}
                        aria-label="Text color"
                    />
                ),
                colClass: 'col-6 col-sm-6 col-md-3'
            },
            {
                label: 'Background Color',
                control: (
                    <input
                        type="color"
                        className="form-control form-control-color w-100"
                        value={bgColor}
                        onChange={onBgColorChange}
                        aria-label="Background color"
                    />
                ),
                colClass: 'col-6 col-sm-6 col-md-3'
            },
            {
                label: 'Font Family',
                control: (
                    <select className="form-select" aria-label="Font family">
                        {FONT_FAMILIES.map((font, index) => (
                            <option key={index} value={font.value}>{font.label}</option>
                        ))}
                    </select>
                ),
                colClass: 'col-12 col-md-3'
            }
        ].map((control, index) => (
            <div key={index} className={control.colClass}>
                <label className="form-label small mb-1">{control.label}</label>
                {control.control}
            </div>
        ))}
    </div>
);

const AlignmentButtons = () => (
    <div className="mb-4">
        <label className="form-label d-block mb-2">Text Alignment:</label>
        <div className="btn-group btn-group-sm flex-wrap" role="group">
            {ALIGNMENTS.map((align, index) => (
                <button
                    key={index}
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {
                        const demoText = document.getElementById('demo-text');
                        if (demoText) demoText.style.textAlign = align.value;
                    }}
                    aria-label={`Align text ${align.label.toLowerCase()}`}
                >
                    <i className={align.icon}></i>
                    <span className="d-none d-sm-inline ms-1">{align.label}</span>
                </button>
            ))}
        </div>
    </div>
);

const DemoPreview = ({ fontSize, textColor, bgColor }) => (
    <div className="card">
        <CardHeader className="bg-light">
            <h5 className="mb-0">Live Preview</h5>
        </CardHeader>
        <CardBody>
            <div
                id="demo-text"
                className="p-3 rounded demo-preview"
                style={{
                    fontSize: `${fontSize}px`,
                    color: textColor,
                    backgroundColor: bgColor,
                    minHeight: '150px',
                    overflowX: 'auto'
                }}
            >
                <h1 className="h4">This is a Heading 1</h1>
                <p className="mb-2">
                    This is a <strong>paragraph</strong> demonstrating various
                    <em> text formatting</em> options. You can see how
                    <mark> different styles</mark> affect the appearance.
                </p>
                <p className="mb-2">
                    Here's some <code>inline code</code> and a
                    <sub> subscript</sub> with <sup>superscript</sup>.
                    Also showing <del>deleted text</del> and
                    <ins> inserted text</ins>.
                </p>
                <blockquote className="blockquote mb-0 small">
                    <p>This is a blockquote showing quoted text.</p>
                    <footer className="blockquote-footer">Author Name</footer>
                </blockquote>
            </div>
        </CardBody>
    </div>
);

const CodeExample = ({ title, code }) => (
    <div className="mb-4">
        <h5 className="text-success h6 mb-2">{title}</h5>
        <pre className="bg-dark text-light p-3 rounded small" style={{ overflowX: 'auto' }}>
            <code>{code}</code>
        </pre>
    </div>
);

const QuickReference = () => {
    const commonTags = useMemo(() => FORMATTING_TAGS.slice(0, 8), []);

    return (
        <Card className="sticky-top">
            <CardHeader className="bg-success text-white">
                <h5 className="mb-0 h6">
                    <i className="fas fa-bookmark me-2"></i>Quick Reference
                </h5>
            </CardHeader>
            <CardBody>
                <div className="mb-4">
                    <h6 className="text-success small">Most Common Tags:</h6>
                    <div className="d-flex flex-wrap gap-1 mt-2">
                        {commonTags.map((tag, index) => (
                            <span key={index} className="badge bg-light text-dark border small">
                                {tag.tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <h6 className="text-success small">Text Effects:</h6>
                    <ul className="list-unstyled small mb-0">
                        <li className="mb-1">
                            <strong className="me-1">Bold:</strong>
                            <code className="small">&lt;b&gt;</code> or <code className="small">&lt;strong&gt;</code>
                        </li>
                        <li className="mb-1">
                            <strong className="me-1">Italic:</strong>
                            <code className="small">&lt;i&gt;</code> or <code className="small">&lt;em&gt;</code>
                        </li>
                        <li className="mb-1">
                            <strong className="me-1">Underline:</strong>
                            <code className="small">&lt;u&gt;</code> or <code className="small">&lt;ins&gt;</code>
                        </li>
                        <li>
                            <strong className="me-1">Strikethrough:</strong>
                            <code className="small">&lt;s&gt;</code> or <code className="small">&lt;del&gt;</code>
                        </li>
                    </ul>
                </div>

                <div className="alert alert-info small p-2 mb-0">
                    <i className="fas fa-info-circle me-2"></i>
                    Always close your tags properly.
                </div>
            </CardBody>
        </Card>
    );
};

const TabNavigation = ({ activeTab, onTabChange }) => (
    <div className="card-header bg-white border-bottom px-2">
        <ul className="nav nav-tabs card-header-tabs flex-nowrap overflow-auto" style={{ whiteSpace: 'nowrap' }}>
            {TAB_CONFIG.map((tab) => (
                <li className="nav-item flex-shrink-0" key={tab.id}>
                    <button
                        className={`nav-link ${activeTab === tab.id ? 'active' : ''} px-3 py-2`}
                        onClick={() => onTabChange(tab.id)}
                        aria-label={`Switch to ${tab.label} tab`}
                    >
                        <i className={`${tab.icon} me-1`}></i>
                        <span className="d-none d-md-inline">{tab.label}</span>
                    </button>
                </li>
            ))}
        </ul>
    </div>
);

const BestPracticesList = () => (
    <Card>
        <CardHeader className="bg-primary text-white">
            <h5 className="mb-0 h6">
                <i className="fas fa-lightbulb me-2"></i>Best Practices
            </h5>
        </CardHeader>
        <CardBody className="p-0">
            <ul className="list-group list-group-flush">
                {BEST_PRACTICES.map((practice, index) => (
                    <li key={index} className="list-group-item px-3 py-2">
                        <i className={`${practice.icon} me-2`}></i>
                        <span dangerouslySetInnerHTML={{ __html: practice.text }} />
                    </li>
                ))}
            </ul>
        </CardBody>
    </Card>
);

// --- MAIN COMPONENT ---
const HtmlFormattingCourse = () => {
    const [activeTab, setActiveTab] = useState('formatting');
    const [fontSize, setFontSize] = useState(16);
    const [textColor, setTextColor] = useState('#000000');
    const [bgColor, setBgColor] = useState('#ffffff');

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        // Scroll to top on mobile when changing tabs
        if (window.innerWidth < 768) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'formatting':
                return (
                    <>
                        <h3 className="h4 mb-3 text-primary">HTML Text Formatting Tags</h3>
                        <p className="text-muted mb-4 small">
                            HTML provides various tags to format text with special meaning.
                            These tags help structure content and make it more readable.
                        </p>
                        <ResponsiveTable />
                    </>
                );

            case 'demo':
                return (
                    <>
                        <h3 className="h4 mb-3 text-primary">Live Formatting Demo</h3>
                        <DemoControls
                            fontSize={fontSize}
                            textColor={textColor}
                            bgColor={bgColor}
                            onFontSizeChange={(e) => setFontSize(e.target.value)}
                            onTextColorChange={(e) => setTextColor(e.target.value)}
                            onBgColorChange={(e) => setBgColor(e.target.value)}
                        />
                        <AlignmentButtons />
                        <DemoPreview fontSize={fontSize} textColor={textColor} bgColor={bgColor} />
                    </>
                );

            case 'examples':
                return (
                    <>
                        <h3 className="h4 mb-3 text-primary">Complete HTML Examples</h3>
                        <CodeExample title="Example 1: Basic Text Formatting" code={EXAMPLES.basic} />
                        <CodeExample title="Example 2: Advanced Formatting" code={EXAMPLES.advanced} />
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-vh-100 bg-light">
            {/* Header */}
            <header className="bg-primary text-white py-4">
                <div className="container">
                    <h1 className="h3 fw-bold mb-2">HTML Text Formatting Complete Course</h1>
                    <p className="small mb-0 opacity-75">Learn all HTML tags for formatting and styling text content</p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container py-4">
                <div className="row g-3">
                    {/* Left Column - Course Content */}
                    <div className="col-lg-8">
                        {/* Navigation Tabs */}
                        <Card className="mb-3">
                            <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
                            <CardBody className="p-3">
                                {renderTabContent()}
                            </CardBody>
                        </Card>

                        {/* Best Practices */}
                        <BestPracticesList />
                    </div>

                    {/* Right Column - Quick Reference */}
                    <div className="col-lg-4">
                        <div className="sticky-column">
                            <QuickReference />
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default HtmlFormattingCourse;