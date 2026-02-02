import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        "service_nl5r6zo", // Get from EmailJS dashboard
        "template_48kcawr", // Get from EmailJS dashboard
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Catalino Gabriel Villahermosa",
        },
        "Vv4kPQZXiRlf2f22D", // Get from EmailJS dashboard
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-wrapper">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Let's talk about everything!</h3>
            <p>Don't like forms? Send me an email. I like simple too!</p>

            <div className="direct-line">
              <div className="info-item">
                <div className="icon-box">
                  <FaEnvelope />
                </div>
                <div>
                  <span className="label">Mail Me</span>
                  <a href="mailto:gvillahermisa@gmail.com">
                    gvillahermisa@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <FaPhone />
                </div>
                <div>
                  <span className="label">Call Me</span>
                  <a href="tel:+63956786637">(+63) 956 786 637</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {submitStatus === "success" && (
              <motion.div
                className="status-message success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                className="status-message error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✗ Failed to send message. Please try again or email me directly.
              </motion.div>
            )}

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}{" "}
              <FaPaperPlane className="btn-icon" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
