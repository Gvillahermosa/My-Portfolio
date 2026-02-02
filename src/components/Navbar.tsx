import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;
      let current = "";
      sections.forEach((section) => {
        if (section && section.offsetTop <= scrollPosition) {
          current = section.getAttribute("id") || "";
        }
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">G4BU</div>

      {/* Desktop Menu */}
      <div className="desktop-menu-container">
        <ul className="nav-links desktop-menu">
          {navItems.map((item) => (
            <li key={item.id} style={{ position: "relative" }}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${
                  activeSection === item.id ? "active-link" : ""
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="nav-indicator"
                    layoutId="nav-indicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-actions">
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              style={{ display: "inline-block" }}
              key={theme}
              initial={{ y: -20, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 20, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </motion.div>
          </AnimatePresence>
        </button>
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className="mobile-nav-links">
              {navItems.map((item) => (
                <li key={item.id} style={{ position: "relative" }}>
                  <a
                    href={`#${item.id}`}
                    className={`mobile-nav-link ${activeSection === item.id ? "active-link" : ""}`}
                    onClick={() => {
                      setActiveSection(item.id);
                      handleMobileLinkClick();
                    }}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        className="nav-indicator"
                        layoutId="mobile-nav-indicator"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                        style={{
                          height: "100%",
                          width: "100%",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          borderRadius: "8px",
                          zIndex: -1,
                        }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
