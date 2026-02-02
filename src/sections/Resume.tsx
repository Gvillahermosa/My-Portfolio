import { motion } from "framer-motion";
import { FaDownload, FaEye } from "react-icons/fa";
import "./Resume.css";

export const Resume = () => {
  return (
    <section id="resume">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Resume</h2>
          <div className="resume-content">
            <motion.div
              className="resume-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="resume-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3>Download My Resume</h3>
              <p className="resume-description">
                Get a comprehensive overview of my education, skills, projects,
                and experience. Available in PDF format.
              </p>
              <div className="resume-actions">
                <a
                  href="/resume.pdf"
                  download="Catalino_Gabriel_Villahermosa_Resume.pdf"
                  className="resume-btn download-btn"
                >
                  <FaDownload />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={() => window.open("/resume.pdf", "_blank")}
                  className="resume-btn preview-btn"
                >
                  <FaEye />
                  <span>View Online</span>
                </button>
              </div>
              <p className="resume-note">Last updated: February 2026</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
