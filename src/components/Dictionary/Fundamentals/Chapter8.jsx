import React from "react";
import {
  GraduationCap,
  Hospital,
  Building,
  Film,
  Car,
  ShoppingCart
} from "lucide-react";

/* =========================
   Style Helpers
========================= */
const cardBase = {
  borderRadius: "var(--border-radius-md)",
  backgroundColor: "var(--bg-card)",
  boxShadow: "var(--shadow-sm)"
};

const textXS = {
  fontSize: "var(--text-xs)",
  color: "var(--text-secondary)"
};

const sectionTitle = (icon, title) => (
  <h4 className="fw-bold mb-3">
    {icon} {title}
  </h4>
);

/* =========================
   Reusable Components
========================= */
const SimpleCard = ({ children, style }) => (
  <div className="card border-0 h-100" style={{ ...cardBase, ...style }}>
    <div className="card-body p-2">{children}</div>
  </div>
);

/* =========================
   Main Component
========================= */
export default function Chapter8() {
  /* ---------- DATA ---------- */
  const applicationDomains = [
    { name: "Education", icon: <GraduationCap size={24} />, ex: "E-Learning", color: "var(--primary)" },
    { name: "Healthcare", icon: <Hospital size={24} />, ex: "Telemedicine", color: "var(--danger)" },
    { name: "Business", icon: <Building size={24} />, ex: "ERP Systems", color: "var(--warning)" },
    { name: "Entertainment", icon: <Film size={24} />, ex: "Streaming", color: "var(--info)" },
    { name: "Transport", icon: <Car size={24} />, ex: "GPS", color: "var(--success)" },
    { name: "E-Commerce", icon: <ShoppingCart size={24} />, ex: "Online Shopping", color: "var(--primary-blue)" }
  ];

  const specializedApplications = [
    { title: "Artificial Intelligence", apps: "Virtual Assistants, Predictive Analytics", color: "var(--primary)" },
    { title: "Internet of Things", apps: "Smart Homes, Wearables", color: "var(--success)" },
    { title: "Cloud Computing", apps: "SaaS, PaaS, IaaS", color: "var(--primary-blue)" },
    { title: "Cybersecurity", apps: "Data Protection, Threat Detection", color: "var(--danger)" }
  ];

  const emergingTechnologies = [
    { tech: "Quantum Computing", app: "Drug Discovery", color: "var(--primary)" },
    { tech: "Augmented Reality", app: "Education", color: "var(--info)" },
    { tech: "5G Technology", app: "Smart Cities", color: "var(--success)" },
    { tech: "Blockchain", app: "Smart Contracts", color: "var(--warning)" }
  ];

  const realWorldCaseStudies = [
    { company: "Tesla", application: "Autonomous Driving", impact: "40% accident reduction", color: "var(--success)" },
    { company: "Netflix", application: "Content Recommendation", impact: "80% content from recommendations", color: "var(--danger)" },
    { company: "Amazon", application: "Predictive Shipping", impact: "Same-day delivery", color: "var(--warning)" },
    { company: "Google", application: "Language Translation", impact: "100+ languages", color: "var(--primary-blue)" }
  ];

  const industryImpact = [
    { industry: "Manufacturing", before: "Manual assembly", after: "Robotic automation", improvement: "300% productivity" },
    { industry: "Agriculture", before: "Manual labor", after: "Precision farming", improvement: "50% yield increase" },
    { industry: "Tourism", before: "Travel agents", after: "Online booking", improvement: "Global accessibility" },
    { industry: "Journalism", before: "Print newspapers", after: "Real-time updates", improvement: "Instant distribution" }
  ];

  const futureTrends = [
    { title: "AI Integration", desc: "Built-in AI in every app", color: "var(--primary)" },
    { title: "Ubiquitous Computing", desc: "Computers everywhere", color: "var(--primary-blue)" },
    { title: "Ethical Computing", desc: "Privacy & fairness focus", color: "var(--warning)" }
  ];

  const quickFacts = [
    "Every industry is affected by computers",
    "New software is created daily",
    "Millions of tech jobs created",
    "Global digital connectivity achieved"
  ];

  /* ---------- UI ---------- */
  return (
    <div className="min-vh-100" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Hero */}
      <div
        className="text-center text-white py-4"
        style={{ background: "linear-gradient(135deg,#667eea,#764ba2)" }}
      >
        <h1 className="display-6 fw-bold">🌍 Chapter 8: Applications of Computer</h1>
        <p style={{ opacity: 0.9 }}>How computers transform modern life</p>
      </div>

      <div className="container py-4">
        {/* Intro */}
        <SimpleCard style={{ borderRadius: "var(--border-radius-lg)" }}>
          <p className="mb-0" style={{ lineHeight: 1.6 }}>
            <strong>Computers have evolved</strong> from simple calculating machines to
            indispensable tools used in education, healthcare, business, entertainment,
            transportation, and scientific research.
          </p>
        </SimpleCard>

        {/* Domains */}
        {sectionTitle("🏢", "Major Application Domains")}
        <div className="row g-2 mb-4">
          {applicationDomains.map((d, i) => (
            <div key={i} className="col-6 col-md-4 col-lg-2">
              <SimpleCard style={{ border: `2px solid ${d.color}` }}>
                <div className="text-center">
                  <div style={{ color: d.color }}>{d.icon}</div>
                  <div className="fw-bold" style={{ color: d.color, fontSize: "var(--text-sm)" }}>
                    {d.name}
                  </div>
                  <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
                    {d.ex}
                  </div>
                </div>
              </SimpleCard>
            </div>
          ))}
        </div>

        {/* Specialized + Emerging */}
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            {sectionTitle("🎯", "Specialized Applications")}
            <div className="row g-2">
              {specializedApplications.map((s, i) => (
                <div key={i} className="col-6">
                  <SimpleCard style={{ backgroundColor: `${s.color}10`, border: `1px solid ${s.color}` }}>
                    <div className="fw-bold" style={{ color: s.color, fontSize: "var(--text-sm)" }}>
                      {s.title}
                    </div>
                    <div style={textXS}>{s.apps}</div>
                  </SimpleCard>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6">
            {sectionTitle("🚀", "Emerging Technologies")}
            <div className="row g-2">
              {emergingTechnologies.map((t, i) => (
                <div key={i} className="col-6">
                  <SimpleCard style={{ border: `1px solid ${t.color}` }}>
                    <div className="fw-bold" style={{ color: t.color, fontSize: "var(--text-sm)" }}>
                      {t.tech}
                    </div>
                    <div style={textXS}>{t.app}</div>
                  </SimpleCard>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies */}
        {sectionTitle("📈", "Real World Examples")}
        <div className="row g-2 mb-4">
          {realWorldCaseStudies.map((c, i) => (
            <div key={i} className="col-6 col-md-3">
              <SimpleCard style={{ borderLeft: `4px solid ${c.color}` }}>
                <div className="fw-bold" style={{ color: c.color }}>{c.company}</div>
                <div style={textXS}>{c.application}</div>
                <div style={{ ...textXS, fontWeight: 500, color: c.color }}>{c.impact}</div>
              </SimpleCard>
            </div>
          ))}
        </div>

        {/* Industry Impact */}
        {sectionTitle("🔄", "Industry Transformation")}
        <div className="row g-2 mb-4">
          {industryImpact.map((i, idx) => (
            <div key={idx} className="col-6 col-md-3">
              <SimpleCard>
                <div className="fw-bold">{i.industry}</div>
                <div style={textXS}><span className="text-danger">Before:</span> {i.before}</div>
                <div style={textXS}><span className="text-success">After:</span> {i.after}</div>
                <div style={{ ...textXS, fontWeight: 600, color: "var(--warning)" }}>{i.improvement}</div>
              </SimpleCard>
            </div>
          ))}
        </div>

        {/* Future Trends */}
        {sectionTitle("🔮", "Future Trends")}
        <div className="row g-2 mb-4">
          {futureTrends.map((t, i) => (
            <div key={i} className="col-4">
              <div className="text-center p-2 rounded-2" style={{
                backgroundColor: `${t.color}10`,
                border: `1px solid ${t.color}40`
              }}>
                <div className="fw-bold" style={{ color: t.color }}>{t.title}</div>
                <div style={textXS}>{t.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Facts */}
        {sectionTitle("💡", "Quick Facts")}
        <div className="row g-2 mb-4">
          {quickFacts.map((f, i) => (
            <div key={i} className="col-6 col-md-3">
              <div className="p-2 rounded-2 text-center" style={{
                backgroundColor: "rgba(102,126,234,0.1)",
                border: "1px solid rgba(102,126,234,0.3)"
              }}>
                <div style={textXS}>{f}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <SimpleCard style={{
          borderRadius: "var(--border-radius-lg)",
          backgroundColor: "rgba(102,126,234,0.1)",
          border: "1px solid rgba(102,126,234,0.3)"
        }}>
          <h5 className="fw-bold" style={{ color: "#667eea" }}>🎯 Chapter Summary</h5>
          <p className="mb-0" style={{ fontSize: "var(--text-sm)" }}>
            Computers are no longer optional tools—they are essential partners in
            innovation, productivity, and global connectivity.
          </p>
        </SimpleCard>
      </div>
    </div>
  );
}
