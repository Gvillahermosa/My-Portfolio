import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import "./Certifications.css";
import awsCert from "../assets/certificate/aws.jpg";
import htmlCert from "../assets/certificate/html_cert.jpg";
import jsCert from "../assets/certificate/javascript_certificate.jpg";
import psiteCert from "../assets/certificate/psite.jpg";

const certifications = [
  {
    title: "AWS Certification",
    issuer: "Amazon Web Services",
    date: "2025",
    image: awsCert,
    link: "#",
  },
  {
    title: "HTML Certification",
    issuer: "Certification Provider",
    date: "2025",
    image: htmlCert,
    link: "https://www.freecodecamp.org/certification/gabu2003/responsive-web-design",
  },
  {
    title: "JavaScript Certification",
    issuer: "Certification Provider",
    date: "2025",
    image: jsCert,
    link: "http://freecodecamp.org/certification/gabu2003/javascript-algorithms-and-data-structures-v8",
  },
  {
    title: "PSITE Certification",
    issuer: "PSITE",
    date: "2025",
    image: psiteCert,
    link: "#",
  },
];

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<{
    image: string;
    title: string;
  } | null>(null);

  return (
    <section id="certifications">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                className="cert-card"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="cert-image-wrapper"
                  onClick={() =>
                    setSelectedCert({ image: cert.image, title: cert.title })
                  }
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="cert-image"
                  />
                  <div className="cert-overlay">
                    <span>Click to view</span>
                  </div>
                </div>
                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                    >
                      View Details <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <AnimatePresence>
          {selectedCert && (
            <motion.div
              className="cert-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                className="cert-modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="cert-modal-close"
                  onClick={() => setSelectedCert(null)}
                >
                  <FaTimes />
                </button>
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="cert-modal-image"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
