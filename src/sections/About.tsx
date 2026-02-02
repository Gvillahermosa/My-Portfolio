import { motion } from "framer-motion";
import "./About.css";

export const About = () => {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hello! My name is Catalino Gabriel Villahermosa, and I'm
                passionate about creating innovative web solutions that make a
                difference. My IT journey began in 2022 when I entered college,
                and since then, I've been dedicated to mastering the art of
                modern web development.
              </p>
              <p>
                What sets me apart is my commitment to continuous learning and
                my ability to quickly adapt to new technologies. I don't just
                write code—I build solutions that are scalable, maintainable,
                and user-focused. Whether it's crafting responsive interfaces
                with React or building robust backend systems, I bring
                enthusiasm and attention to detail to every project I work on.
              </p>
              <p>
                I'm eager to contribute my skills to real-world projects and
                collaborate with teams that value innovation and quality.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
