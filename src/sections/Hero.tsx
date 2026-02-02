import { motion } from "framer-motion";
import profilePic from "../assets/formal.jpg";
import "./Hero.css";

export const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-greeting">Hi, my name is</p>
          <h1>Catalino Gabriel Villahermosa.</h1>
          <h2>I build things for the web.</h2>
          <p className="hero-description">
            I'm a student and aspiring software engineer passionate about
            creating engaging web applications. I enjoy learning new
            technologies and building projects that solve real-world problems
            with clean, user-friendly designs.
          </p>
          <div className="cta-group">
            <a href="#projects" className="primary-btn">
              Check out my work!
            </a>
            <a href="#contact" className="secondary-btn">
              Get in touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
            >
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-content">
            <img src={profilePic} alt="John Doe" className="profile-img" />
          </div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow-down"></div>
        </motion.div>
      </div>
    </section>
  );
};
