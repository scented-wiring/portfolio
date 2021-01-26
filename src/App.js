import { motion } from "framer-motion";
import "./App.css";

const App = () => {
  return (
    <div id="App">
      <motion.header
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
      />
      <div id="header">
        <div id="title">Tom Hammersley - Portfolio</div>
        <div id="links">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div className="link">
              <i class="fab fa-linkedin fa-3x"></i>
              LinkedIn
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div className="link">
              <i class="fab fa-twitter-square fa-3x"></i>
              Twitter
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div className="link">
              <i class="fab fa-github-square fa-3x"></i>
              Github
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div className="link">
              <i class="fas fa-envelope-square fa-3x"></i>
              Email
            </div>
          </motion.div>
        </div>
      </div>
      <div id="navbar">
        <div className="nav">About</div> <div className="nav">Projects</div>
      </div>
    </div>
  );
};

export default App;
