import { Link, Switch, Route } from "react-router-dom";
import { motion } from "framer-motion";
import About from "./About";
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
        <motion.div
          initial={{ x: 800 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <div id="title">Tom Hammersley - Portfolio</div>
        </motion.div>
        <motion.div
          initial={{ x: -700 }}
          animate={{ x: 700 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <div id="links">
            <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
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
            <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
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
            <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
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
            <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
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
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div id="navbar">
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <Link to="/">
              <div className="nav">About</div>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <Link to="/projects">
              <div className="nav">Projects</div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <Switch>
        <Route exact path="/" component={About} />
      </Switch>
    </div>
  );
};

export default App;
