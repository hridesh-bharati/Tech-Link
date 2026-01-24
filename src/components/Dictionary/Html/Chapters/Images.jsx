import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// --- Reusable Components ---

// CodeBlock with responsive scroll on mobile
const CodeBlock = ({ code, language = "html" }) => (
  <div className="overflow-auto mb-3" style={{ WebkitOverflowScrolling: "touch" }}>
    <SyntaxHighlighter
      language={language}
      style={atomDark}
      className="rounded"
      customStyle={{
        margin: 0,
        fontSize: "13px",
        borderRadius: "8px",
        minWidth: "min-content", // Ensures content doesn't shrink
        padding: "16px",
      }}
    >
      {code}
    </SyntaxHighlighter>
  </div>
);

// FeatureCard (Basic Topics)
const FeatureCard = ({ icon, title, color, description, code, badge }) => (
  <div className="col-12 col-md-6 mb-4 custom-card-width">
    <style>{`
.custom-card-width {
  width: 50%; 
}
@media (max-width: 767px) {
  .custom-card-width {
    width: 60% !important; 
  }
}
    `}</style>
    <div
      className="card h-100 border-0 shadow-sm" // Changed to shadow-sm for mobile
      style={{ borderLeft: `4px solid ${color}`, overflow: "hidden" }}
    >
      <div className="card-body p-3 p-md-4"> {/* Added responsive padding */}
        <div className="d-flex align-items-center mb-3 flex-wrap">
          <div
            className="rounded-circle p-2 me-3 d-flex align-items-center justify-content-center flex-shrink-0"
            style={{ backgroundColor: `${color}20`, width: "44px", height: "44px" }}
          >
            <i className={`fas fa-${icon} fa-lg`} style={{ color, fontSize: "1rem" }} />
          </div>
          <div className="d-flex align-items-center flex-wrap">
            <h5 className="card-title fw-bold mb-0 me-2" style={{ fontSize: "1rem" }}>
              {title}
            </h5>
            {badge && (
              <span
                className="badge"
                style={{
                  backgroundColor: color,
                  fontSize: "0.65rem",
                  padding: "0.25rem 0.5rem"
                }}
              >
                {badge}
              </span>
            )}
          </div>
        </div>
        <p className="text-muted mb-3 small">{description}</p>
        {code && <CodeBlock code={code} />}
      </div>
    </div>
  </div>
);

// AttributeCard (Core Attributes)
const AttributeCard = ({ icon, title, color, description, examples, tags }) => (
  <div className="col-12 col-md-6 col-lg-4 mb-4">
    <div className="card h-100 border-0 shadow-sm hover-shadow" style={{ overflow: "hidden" }}>
      <div className="card-body text-center d-flex flex-column p-3">
        <div
          className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle p-2"
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: `${color}15`,
            flexShrink: 0
          }}
        >
          <i className={`fas fa-${icon} fa-lg`} style={{ color, fontSize: "1.25rem" }} />
        </div>
        <h5 className="card-title fw-bold mb-2" style={{ color, fontSize: "1rem" }}>
          {title}
        </h5>
        <p className="small text-muted mb-3">{description}</p>
        <div className="bg-light p-2 rounded mt-auto mb-3 w-100 overflow-auto">
          {examples.map((example, idx) => (
            <code
              key={idx}
              className="d-block text-start small"
              style={{ color, fontSize: "12px", whiteSpace: "nowrap" }}
            >
              {example}
            </code>
          ))}
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {tags?.map((tag, idx) => (
            <span
              key={idx}
              className="badge me-1 mb-1"
              style={{
                backgroundColor: color,
                fontSize: "0.6rem",
                padding: "0.2rem 0.4rem"
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// BestPracticeCard
const BestPracticeCard = ({ icon, text, color }) => (
  <div className="col-12 col-md-6">
    <div
      className="d-flex align-items-center p-2 p-md-3 rounded"
      style={{
        backgroundColor: `var(--bs-${color}-light)`,
        borderLeft: `3px solid var(--bs-${color})`,
        minHeight: "60px"
      }}
    >
      <i
        className={`fas fa-${icon} me-2 me-md-3`}
        style={{
          color: `var(--bs-${color})`,
          fontSize: "0.9rem",
          flexShrink: 0
        }}
      />
      <span className="fw-medium small">{text}</span>
    </div>
  </div>
);

// --- Data Arrays --- (Same as before)

const basicTopics = [
  {
    id: 1,
    icon: "image",
    title: "1️⃣ Insert Image",
    color: "#4361ee",
    description:
      "Use the <img> tag to embed images in HTML. It is self-contained and fetches external image sources.",
    code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Image</title>
</head>
<body>
    <img src="image.jpg" alt="Description">
</body>
</html>
    `,
    badge: "Basic",
  },
  {
    id: 2,
    icon: "expand-arrows-alt",
    title: "2️⃣ Set Height & Width",
    color: "#06d6a0",
    description:
      "Control image size using width and height attributes. Helps prevent layout shifts.",
    code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Image Size</title>
</head>
<body>
<img src="photo.jpg" width="300" height="200" alt="Sized Image">
</body>
</html>
        `,
    badge: "Layout",
  },
  {
    id: 3,
    icon: "square",
    title: "3️⃣ Set Image Border",
    color: "#ef476f",
    description: "Add a border around images using CSS or Bootstrap utilities.",
    code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Image Border</title>
</head>
<body>
<img src="photo.jpg" border="2" alt="Bordered Image">
</body>
</html>
    `,
    badge: "Styling",
  },
  {
    id: 4,
    icon: "align-center",
    title: "4️⃣ Image Alignment",
    color: "#ffd166",
    description: "Align images left, center, or right using Bootstrap flex and utility classes.",
    code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Image Alignment</title>
</head>
<body>
<img src="photo.jpg" class="d-block mx-auto" alt="Centered Image">
</body>
</html>
    `,
    badge: "Alignment",
  },
];

const attributes = [
  {
    icon: "link",
    title: "src",
    color: "#4361ee",
    description: "Path to the image file.",
    examples: ['src="images/photo.jpg"', 'src="https://example.com/image.png"'],
    tags: ["Required"],
  },
  {
    icon: "eye",
    title: "alt",
    color: "#ef476f",
    description: "Alternative text for accessibility and SEO.",
    examples: ['alt="A student studying"'],
    tags: ["Accessibility", "SEO", "Required"],
  },
  {
    icon: "tachometer-alt",
    title: "loading",
    color: "#06d6a0",
    description: "Controls lazy or eager loading.",
    examples: ['loading="lazy"', 'loading="eager"'],
    tags: ["Performance"],
  },
  {
    icon: "responsive",
    title: "width & height",
    color: "#7209b7",
    description:
      "Set explicit dimensions to prevent layout shifts and improve CLS score.",
    examples: ['width="800"', 'height="600"'],
    tags: ["Core Web Vitals"],
  },
  {
    icon: "images",
    title: "srcset & sizes",
    color: "#f8961e",
    description: "Define responsive images for different screen sizes.",
    examples: ['srcset="image-480w.jpg 480w"', 'sizes="(max-width: 600px) 480px"'],
    tags: ["Responsive"],
  },
  {
    icon: "palette",
    title: "style",
    color: "#4cc9f0",
    description: "Inline CSS styles. Prefer external CSS for maintainability.",
    examples: ['style="border-radius:8px;"'],
    tags: ["CSS"],
  },
];

const bestPractices = [
  { text: "Always use meaningful alt attributes", icon: "check-circle", color: "success" },
  { text: "Use lazy loading for below-the-fold images", icon: "rocket", color: "primary" },
  { text: "Set explicit width & height to prevent layout shifts", icon: "ruler", color: "info" },
  { text: "Use modern formats (WebP, AVIF)", icon: "file-image", color: "warning" },
  { text: "Optimize image size before uploading", icon: "compress", color: "danger" },
  { text: "Use figure & figcaption for captions", icon: "image", color: "secondary" },
  { text: "Implement responsive images with srcset", icon: "mobile-alt", color: "dark" },
  { text: "Add proper file extensions (.jpg, .png, .webp)", icon: "file-alt", color: "success" },
];

// --- Main Component ---
const HTMLImages = () => (
  <div className="html-images-docs bg-light">
    <div className="container py-3 py-md-4"> {/* Reduced padding on mobile */}

      {/* Image Basics */}
      <section id="basics" className="mb-4">
        <h2 className="fw-bold mb-3 pb-2 border-bottom" style={{
          borderColor: "#4361ee",
          fontSize: "1.5rem" // Smaller on mobile
        }}>
          Image Handling Basics
        </h2>
        <p className="small mb-3">
          The <code>&lt;img&gt;</code> tag embeds images in a webpage.
          It is <strong>self-contained</strong> and fetches external images using the <code>src</code> attribute.
          It does not have a closing tag.
        </p>
        <p className="small mb-3">
          <strong>Note:</strong> Always include the <code>alt</code> attribute for accessibility and SEO.
        </p>
        <div className="row g-3">
          {basicTopics.map(topic => <FeatureCard key={topic.id} {...topic} />)}
        </div>
      </section>

      {/* Attributes */}
      <section id="attributes" className="mb-4">
        <h2 className="fw-bold mb-3 pb-2 border-bottom" style={{
          borderColor: "#ef476f",
          fontSize: "1.5rem"
        }}>
          Core Attributes
        </h2>
        <div className="row g-3">
          {attributes.map((attr, idx) => <AttributeCard key={idx} {...attr} />)}
        </div>
      </section>

      {/* Best Practices */}
      <section id="best-practices" className="mb-4">
        <h2 className="fw-bold mb-3 pb-2 border-bottom" style={{
          borderColor: "#ffd166",
          fontSize: "1.5rem"
        }}>
          Best Practices
        </h2>
        <div className="row g-2">
          {bestPractices.map((bp, idx) => <BestPracticeCard key={idx} {...bp} />)}
        </div>
      </section>

    </div>
  </div>
);

export default HTMLImages;