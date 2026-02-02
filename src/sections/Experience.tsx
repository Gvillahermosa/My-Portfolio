import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";
import "./Experience.css";

const timeline = [
  {
    type: "education",
    title: "Bachelor of Science in Information Technology",
    organization: "Cebu Technological University - Argao Campus",
    date: "2022 - Present",
    description:
      "Studying information technology fundamentals, web development, and system administration. Relevant coursework includes Network Management, Database Systems, Web Development, and IT Infrastructure.",
    icon: FaGraduationCap,
  },
  {
    type: "project",
    title: "Full-Stack Developer",
    organization: "Personal Projects",
    date: "2023 - Present",
    description:
      "Building modern web applications using React, TypeScript, and FastAPI. Focus on creating scalable, user-friendly solutions with clean code practices.",
    icon: FaCode,
  },
  {
    type: "work",
    title: "Software Developer",
    organization: "Depzilla Corp.",
    date: "Present",
    description:
      "Currently undergoing On-the-Job Training as a Software Developer, gaining hands-on experience in software development, collaborating with development teams, and working on real-world projects.",
    icon: FaBriefcase,
  },
  // Add more timeline items as needed
];

export const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience & Education</h2>
          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.div
                className="timeline-item"
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="timeline-icon">
                  <item.icon />
                </div>
                <div className="timeline-content">
                  <span className="timeline-date">{item.date}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-organization">{item.organization}</p>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
