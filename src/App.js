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
            <a
              href="https://www.linkedin.com/in/tom-hammersley-3b0b4b203/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="link">
                <i class="fab fa-linkedin fa-3x"></i>
                LinkedIn
              </div>
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a
              href="https://twitter.com/scentedwiring"
              target="_blank"
              rel="noreferrer"
            >
              <div className="link">
                <i class="fab fa-twitter-square fa-3x"></i>
                Twitter
              </div>
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a
              href="https://github.com/scented-wiring"
              target="_blank"
              rel="noreferrer"
            >
              <div className="link">
                <i class="fab fa-github-square fa-3x"></i>
                Github
              </div>
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a
              href="mailto:thomas.j.hammersley@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="link">
                <i class="fas fa-envelope-square fa-3x"></i>
                Email
              </div>
            </a>
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
