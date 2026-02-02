import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Background } from "./components/Background";
import { Navbar } from "./components/Navbar";
import { BackToTop } from "./components/BackToTop";
import { Loader } from "./components/Loader";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Certifications } from "./sections/Certifications";
import { Contact } from "./sections/Contact";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Background />
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Contact />
          </main>
          <footer
            style={{
              textAlign: "center",
              padding: "2rem",
              color: "var(--text-muted)",
              fontSize: "0.9rem",
              position: "relative",
              zIndex: 10,
            }}
          >
            <div style={{ marginBottom: "1rem" }}>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--text-muted)",
                  margin: "0 1rem",
                  fontSize: "1.5rem",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--text-muted)",
                  margin: "0 1rem",
                  fontSize: "1.5rem",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="mailto:your.email@example.com"
                style={{
                  color: "var(--text-muted)",
                  margin: "0 1rem",
                  fontSize: "1.5rem",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            <p>Built with React & Framer Motion</p>
            <p style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>
              © 2026 Catalino Gabriel Villahermosa. All rights reserved.
            </p>
          </footer>
          <BackToTop />
        </>
      )}
    </>
  );
}

export default App;
