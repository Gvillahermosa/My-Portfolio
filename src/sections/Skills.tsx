import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaPython,
  FaDatabase,
  FaLinux,
} from "react-icons/fa";
import { TbBrandXamarin, TbBrandOffice } from "react-icons/tb";
import {
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiSupabase,
  SiFirebase,
  SiArduino,
  SiN8N,
  SiBootstrap,
  SiMui,
  SiShadcnui,
  SiTailwindcss,
  SiFastapi,
  SiFlutter,
  SiDjango,
} from "react-icons/si";
import "./Skills.css";

const skillsRow1 = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
];

const skillsRow2 = [
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Xamarin", icon: TbBrandXamarin, color: "#3498DB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Material UI", icon: SiMui, color: "#007FFF" },
  { name: "shadcn/ui", icon: SiShadcnui, color: "#000000" },
];

const skillsRow3 = [
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "SQL", icon: FaDatabase, color: "#4479A1" },
];

const skillsRow4 = [
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "Linux", icon: FaLinux, color: "#FCC624" },
  { name: "Arduino", icon: SiArduino, color: "#00979D" },
];

const skillsRow5 = [
  { name: "n8n", icon: SiN8N, color: "#EA4B71" },
  { name: "MS Office", icon: TbBrandOffice, color: "#EA4B71" },
];

export const Skills = () => {
  const allRows = [skillsRow1, skillsRow2, skillsRow3, skillsRow4, skillsRow5];

  return (
    <section id="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="skills-pyramid">
          {allRows.map((row, rowIndex) => (
            <div key={rowIndex} className="skills-row">
              {row.map((skill, index) => (
                <motion.div
                  className="skill-card"
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: rowIndex * 0.2 + index * 0.05,
                  }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    <skill.icon />
                  </div>
                  <div className="skill-name">{skill.name}</div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
