import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";
import AnimatedSection from "../components/Shared/AnimatedSection";
import API from "../utils/api.js";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  /* ================= VALIDATION ================= */
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ================= CHANGE ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  /* ================= REAL SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const res = await API.post("/contact", formData);

      // 🔥 BROWSER CONSOLE LOGS
      console.log("✅ CONTACT API RESPONSE:", res.data);
      console.log("📧 MAIL STATUS:", res.data.debug);
      console.log("🕒 TIME:", res.data.debug?.time);

      setSent(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error("❌ CONTACT ERROR:", err.response?.data || err.message);

      setServerError(
        err.response?.data?.message ||
        "❌ Server error. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };


  /* ================= STATIC DATA ================= */
  const contactDetails = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "hridesh027@gmail.com",
      link: "mailto:hridesh027@gmail.com",
      color: "var(--primary)",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+91 72679 95307",
      link: "tel:+917267995307",
      color: "var(--success)",
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Maharajganj, Uttar Pradesh, India",
      color: "var(--warning)",
    },
    {
      icon: <Clock size={20} />,
      label: "Availability",
      value: "Open for remote & onsite work",
      color: "var(--accent)",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: "https://github.com/hrideshbharati",
    },
    {
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/in/hrideshbharati",
    },
    {
      icon: <Twitter size={20} />,
      url: "https://twitter.com/hrideshbharati",
    },
  ];

  /* ================= JSX ================= */
  return (
    <div className="contact-page">
      {/* HEADER */}
      <section className="contact-header pb-4">
        <div className="container">
          <AnimatedSection>
            <h1>Let's Connect & Create</h1>
            <p className="subtitle">
              Have a project in mind? Let's discuss how we can work together to
              bring your ideas to life.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTENT */}
      <section className="contact-content mt-2">
        <div className="container contact-grid">
          {/* LEFT INFO */}
          <AnimatedSection>
            <div className="contact-info">
              <div className="info-header">
                <h2>Contact Information</h2>
                <p>
                  I'm always open to discussing freelance work, full-time roles,
                  or collaboration.
                </p>
              </div>

              <div className="contact-details">
                {contactDetails.map((item, i) => (
                  <div className="detail-item" key={i}>
                    <div
                      className="detail-icon"
                      style={{ background: item.color }}
                    >
                      {item.icon}
                    </div>
                    <div className="detail-content">
                      <span className="detail-label">{item.label}</span>
                      {item.link ? (
                        <a href={item.link} className="detail-value my-2">
                          {item.value}
                        </a>
                      ) : (
                        <span className="detail-value">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-links">
                <h3>Follow & Connect</h3>
                <div className="social-icons">
                  {socialLinks.map((s, i) => (
                    <a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="response-time">
                <Clock size={18} />
                <span>Typically respond within 24 hours</span>
              </div>
            </div>
          </AnimatedSection>

          {/* RIGHT FORM */}
          <AnimatedSection delay={0.2}>
            <div className="contact-form-container">
              <div className="form-header">
                <h2>Send me a message</h2>
                <p>Fill the form and I'll get back to you.</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "error" : ""}
                    />
                    {errors.name && (
                      <span className="error-message">{errors.name}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "error" : ""}
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject *</label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? "error" : ""}
                  />
                  {errors.subject && (
                    <span className="error-message">{errors.subject}</span>
                  )}
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "error" : ""}
                  />
                  {errors.message && (
                    <span className="error-message">{errors.message}</span>
                  )}
                </div>

                {serverError && (
                  <div className="error-message">{serverError}</div>
                )}

                <div className="form-footer">
                  <motion.button
                    type="submit"
                    className="btn-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner" /> Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} /> Send Message
                      </>
                    )}
                  </motion.button>

                  {sent && (
                    <div className="success-msg">
                      <CheckCircle size={20} />
                      <div>
                        <strong>Message sent successfully!</strong>
                        <p>I'll reply within 24 hours.</p>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;