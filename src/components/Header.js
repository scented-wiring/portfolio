import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import "../styles/Header.css";

const Header = () => {
  const AnimateLink = ({ children }) => {
    return (
      <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
        {children}
      </motion.div>
    );
  };

  return (
    <div id="Header-wrap">
      <div id="Header">
        <div id="top">
          <motion.div
            initial={{ x: 800 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <HashLink
              to="#About"
              scroll={(el) => {
                el.scrollIntoView(true);
                window.scrollBy(0, -150);
              }}
            >
              <div id="title">Tom Hammersley - Portfolio</div>
            </HashLink>
          </motion.div>
          <motion.div
            initial={{ x: -700 }}
            animate={{ x: 700 }}
            transition={{ duration: 1 }}
          >
            <div id="links">
              <AnimateLink>
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
              </AnimateLink>
              <AnimateLink>
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
              </AnimateLink>
              <AnimateLink>
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
              </AnimateLink>
              <AnimateLink>
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
              </AnimateLink>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div id="navbar">
            <AnimateLink>
              <HashLink
                to="#About"
                scroll={(el) => {
                  el.scrollIntoView(true);
                  window.scrollBy(0, -150);
                }}
              >
                <div className="nav">About</div>
              </HashLink>
            </AnimateLink>
            <AnimateLink>
              <HashLink
                to="#Projects"
                scroll={(el) => {
                  el.scrollIntoView(true);
                  window.scrollBy(0, -150);
                }}
              >
                <div className="nav">Projects</div>
              </HashLink>
            </AnimateLink>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
