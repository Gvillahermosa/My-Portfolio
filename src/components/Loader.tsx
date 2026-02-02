import { motion } from "framer-motion";
import "./Loader.css";

export const Loader = () => {
  return (
    <motion.div
      className="loader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loader-content">
        <motion.div
          className="loader-logo"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1,
          }}
        >
          <span className="loader-text">&lt;/&gt;</span>
        </motion.div>

        <motion.div
          className="loader-bar-container"
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div
            className="loader-bar"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.div>

        <motion.p
          className="loader-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
};
