import { motion } from "framer-motion";
import { FaStar, FaCodeBranch, FaUsers } from "react-icons/fa";
import "./GitHubStats.css";

export const GitHubStats = () => {
  // Replace with your actual GitHub username
  const username = "yourusername";

  const stats = [
    { icon: FaStar, label: "Total Stars", value: "120+", color: "#f1c40f" },
    {
      icon: FaCodeBranch,
      label: "Repositories",
      value: "25+",
      color: "#3498db",
    },
    { icon: FaUsers, label: "Followers", value: "50+", color: "#e74c3c" },
  ];

  return (
    <div className="github-stats">
      <motion.div
        className="stats-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3>GitHub Activity</h3>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          @{username}
        </a>
      </motion.div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            className="stat-card"
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="stat-icon" style={{ color: stat.color }}>
              <stat.icon />
            </div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* GitHub Contribution Graph - You can use GitHub's embed or a library */}
      <motion.div
        className="contribution-graph"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <img
          src={`https://ghchart.rshah.org/${username}`}
          alt="GitHub Contribution Graph"
          className="github-chart"
        />
      </motion.div>
    </div>
  );
};
