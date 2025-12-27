import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Globe,
  Linkedin,
  Github,
  Twitter
} from "lucide-react";
import AnimatedSection from "../components/Shared/AnimatedSection";
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

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSent(true);
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    // Hide success message after 4 seconds
    setTimeout(() => setSent(false), 4000);
  };

  const contactDetails = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "hrideshbharati027@gmail.com",
      link: "mailto:hrideshbharati027@gmail.com",
      color: "var(--primary)"
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+91 72679 95307",
      link: "tel:+917267995307",
      color: "var(--success)"
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Maharajganj, Uttar Pradesh, India",
      color: "var(--warning)"
    },
    {
      icon: <Clock size={20} />,
      label: "Availability",
      value: "Open for remote & onsite work",
      color: "var(--accent)"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      url: "https://github.com/hrideshbharati",
      color: "var(--gray-900)"
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/hrideshbharati",
      color: "#0A66C2"
    },
    {
      icon: <Twitter size={20} />,
      label: "Twitter",
      url: "https://twitter.com/hrideshbharati",
      color: "#1DA1F2"
    }
  ];

  return (
    <div className="contact-page">
      {/* HEADER */}
      <section className="contact-header">
        <div className="container">
          <AnimatedSection>
            <h1>Let's Connect & Create</h1>
            <p className="subtitle">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTENT */}
      <section className="contact-content">
        <div className="container contact-grid">
          {/* LEFT SIDE - CONTACT INFO */}
          <AnimatedSection>
            <div className="contact-info">
              <div className="info-header">
                <h2>Contact Information</h2>
                <p>
                  I'm always open to discussing new opportunities, whether it's freelance work, 
                  full-time positions, or collaborative projects.
                </p>
              </div>

              <div className="contact-details">
                {contactDetails.map((detail, index) => (
                  <div className="detail-item" key={index}>
                    <div className="detail-icon" style={{ background: detail.color }}>
                      {detail.icon}
                    </div>
                    <div className="detail-content">
                      <span className="detail-label">{detail.label}</span>
                      {detail.link ? (
                        <a href={detail.link} className="detail-value">
                          {detail.value}
                        </a>
                      ) : (
                        <span className="detail-value">{detail.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-links">
                <h3>Follow & Connect</h3>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      style={{ '--social-color': social.color }}
                      aria-label={social.label}
                    >
                      {social.icon}
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

          {/* RIGHT SIDE - CONTACT FORM */}
          <AnimatedSection delay={0.2}>
            <div className="contact-form-container">
              <div className="form-header">
                <h2>Send me a message</h2>
                <p>Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    Subject <span className="required">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this regarding?"
                    className={errors.subject ? 'error' : ''}
                  />
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Your Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, ideas, or questions..."
                    className={errors.message ? 'error' : ''}
                  />
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <div className="form-footer">
                  <motion.button
                    type="submit"
                    className="btn-submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {sent && (
                    <motion.div
                      className="success-msg"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <CheckCircle size={20} />
                      <div>
                        <strong>Message sent successfully!</strong>
                        <p>I'll get back to you within 24 hours.</p>
                      </div>
                    </motion.div>
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