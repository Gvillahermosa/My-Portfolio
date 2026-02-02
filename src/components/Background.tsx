import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { SiTypescript, SiCplusplus } from "react-icons/si";
import "./Background.css";

const icons = [
  { Icon: FaReact, x: "10%", y: "20%", delay: 0 },
  { Icon: FaPython, x: "80%", y: "15%", delay: 2 },
  { Icon: FaJs, x: "50%", y: "50%", delay: 4 },
  { Icon: SiTypescript, x: "20%", y: "70%", delay: 1 },
  { Icon: FaHtml5, x: "70%", y: "80%", delay: 3 },
  { Icon: FaCss3, x: "90%", y: "40%", delay: 5 },
  { Icon: FaNodeJs, x: "30%", y: "30%", delay: 2.5 },
  { Icon: FaDatabase, x: "60%", y: "10%", delay: 1.5 },
  { Icon: FaGitAlt, x: "10%", y: "90%", delay: 3.5 },
  { Icon: SiCplusplus, x: "85%", y: "85%", delay: 4.5 },
];

export const Background = () => {
  return (
    <div className="floating-bg">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="floating-icon"
          style={{
            left: item.x,
            top: item.y,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          <item.Icon />
        </motion.div>
      ))}
    </div>
  );
};
