import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";
import "./Projects.css";

import idrisImg from "../assets/projects/idris.png";
import shareSpaceImg from "../assets/projects/sharespace.png";
import snpsImg from "../assets/projects/SNPS.png";
import saoImg from "../assets/projects/sao.jpg";
import jeepneyGuideImg from "../assets/projects/jeepneyguide.jpg";

const projects = [
  {
    title: "Integrated Disaster Response Information System",
    description:
      "A comprehensive disaster response management system that helps coordinate emergency responses, track resources, and manage critical information during disasters. Features real-time updates and efficient data management.",
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
    category: "web",
    image: idrisImg,
    github: "#",
    demo: "#",
  },
  {
    title: "ShareSpace",
    description:
      "A modern room booking system that simplifies space reservation and management. Features real-time availability, user authentication, and seamless booking experience with Firebase as the backend service.",
    tags: ["React", "TypeScript", "Firebase"],
    category: "web",
    image: shareSpaceImg,
    github: "#",
    demo: "#",
  },
  {
    title: "SNPS Management System",
    description:
      "A comprehensive school management system designed to streamline administrative tasks, student records, grade management, and academic workflows. Built to enhance efficiency in educational institutions.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    category: "web",
    image: snpsImg,
    github: "#",
    demo: "#",
  },
  {
    title: "SAO - Student Affairs Office System",
    description:
      "A dedicated platform for managing student affairs operations including student services, document processing, and administrative workflows. Streamlines communication between students and the affairs office.",
    tags: ["Django", "Python", "SQLite"],
    category: "web",
    image: saoImg,
    github: "#",
    demo: "#",
  },
  {
    title: "Jeepney Guide",
    description:
      "A mobile navigation app designed to help commuters navigate jeepney routes efficiently. Features route planning, real-time tracking, and fare estimation to make public transportation easier and more accessible.",
    tags: ["React Native", "Expo"],
    category: "mobile",
    image: jeepneyGuideImg,
    github: "#",
    demo: "#",
  },
];

const categories = ["all", "web", "mobile"];

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    title: string;
  } | null>(null);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= filteredProjects.length ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? Math.max(0, filteredProjects.length - itemsPerPage)
        : prev - 1,
    );
  };

  const isCarousel = filteredProjects.length > 3;

  return (
    <section id="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Some Things I've Built
        </motion.h2>

        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentIndex(0);
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {!isCarousel ? (
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                onImageClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            ))}
          </div>
        ) : (
          <div className="carousel-container">
            <button
              className="carousel-btn prev"
              onClick={prevSlide}
              aria-label="Previous project"
            >
              <FaChevronLeft />
            </button>

            <div className="carousel-viewport">
              <motion.div
                className="carousel-track"
                animate={{
                  x: `-${currentIndex * (100 / filteredProjects.length)}%`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{
                  width: `${(filteredProjects.length / itemsPerPage) * 100}%`,
                }}
              >
                {filteredProjects.map((project, index) => (
                  <div
                    key={index}
                    className="carousel-item"
                    style={{ width: `${100 / filteredProjects.length}%` }}
                  >
                    <ProjectCard
                      project={project}
                      index={index}
                      onImageClick={() =>
                        setSelectedImage({
                          image: project.image,
                          title: project.title,
                        })
                      }
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            <button
              className="carousel-btn next"
              onClick={nextSlide}
              aria-label="Next project"
            >
              <FaChevronRight />
            </button>
          </div>
        )}

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="project-modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="project-modal-close"
                  onClick={() => setSelectedImage(null)}
                >
                  <FaTimes />
                </button>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="project-modal-image"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
  onImageClick,
}: {
  project: any;
  index: number;
  onImageClick: () => void;
}) => (
  <motion.div
    className="project-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div
      className="project-image"
      onClick={project.image ? onImageClick : undefined}
      style={project.image ? { cursor: "pointer" } : undefined}
    >
      {project.image ? (
        <>
          <img src={project.image} alt={project.title} />
          <div className="project-image-overlay">
            <span>Click to enlarge</span>
          </div>
        </>
      ) : (
        "Project Screenshot"
      )}
    </div>
    <div className="project-content">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag: string) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <FaGithub />
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  </motion.div>
);
