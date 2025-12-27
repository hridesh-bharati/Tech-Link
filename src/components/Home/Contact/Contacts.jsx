import React, { useState } from "react";
import { motion } from "framer-motion";
import GradientText from "../../Shared/GradientText";
import AnimatedSection from "../../Shared/AnimatedSection";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: "bi-geo-alt",
      title: "Location",
      info: "Maharajganj, Uttar Pradesh",
      link: "https://maps.google.com",
    },
    {
      icon: "bi-envelope",
      title: "Email",
      info: "hrideshbharati027@gmail.com",
      link: "mailto:hrideshbharati027@gmail.com",
    },
    {
      icon: "bi-phone",
      title: "Phone",
      info: "+91 726 799 5307",
      link: "tel:+917267995307",
    },
  ];

  const socialLinks = [
    { icon: "bi-github", url: "https://github.com/hridesh-bharati" },
    { icon: "bi-linkedin", url: "https://www.linkedin.com/in/hridesh-bharati-95867425b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitStatus(null), 4000);
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">

        {/* TITLE */}
        <div className="section-header text-center">
          <h2><GradientText>Get In Touch</GradientText></h2>
          <p>Let’s build something amazing together</p>
        </div>

        <div className="contact-grid">

          {/* LEFT INFO */}
          <AnimatedSection className="contact-left" delay={0.2}>
            <h3>Contact Information</h3>
            <p className="contact-desc">
              Have a project in mind or just want to say hello?
              I’m always open to new ideas and collaborations.
            </p>

            <div className="contact-cards">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                  whileHover={{ y: -6 }}
                >
                  <div className="icon-box">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <span>{item.info}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* SOCIAL */}
            <div className="social-section">
              <h4>Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className={`bi ${s.icon}`}></i>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* AVAILABILITY */}
            <div className="availability-box">
              <span className="dot"></span>
              Available for new projects
            </div>
          </AnimatedSection>

          {/* RIGHT FORM */}
          <AnimatedSection className="contact-right" delay={0.4}>
            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Send Me a Message</h3>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />

              <motion.button
                type="submit"
                className="btn-submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>

              {submitStatus === "success" && (
                <motion.div
                  className="success-msg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <i className="bi bi-check-circle"></i>
                  Message sent successfully!
                </motion.div>
              )}
            </form>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default Contact;
