import { motion } from "framer-motion";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "../styles/Header.css";
import { AnimateLink, handleBeautify } from "./helpers/index";

const Header = () => {
  const [beautify, setBeautify] = useState(false);

  const handleCheck = () => {
    handleBeautify(beautify, setBeautify);
  };

  return (
    <div id="Header-wrap">
      <div id="Header">
        <div id="top">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <HashLink smooth to="#">
              <div id="title">Tom Hammersley - Portfolio</div>
            </HashLink>
          </motion.div>
          <div id="links">
            <AnimateLink>
              <a
                href="https://www.linkedin.com/in/tom-hammersley-3b0b4b203/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="link">
                  <i className="fab fa-linkedin fa-3x"></i>
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
                  <i className="fab fa-twitter-square fa-3x"></i>
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
                  <i className="fab fa-github-square fa-3x"></i>
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
                  <i className="fas fa-envelope-square fa-3x"></i>
                  Email
                </div>
              </a>
            </AnimateLink>
          </div>
        </div>

        <div id="navbar">
          <AnimateLink>
            <HashLink smooth to="#About">
              <div className="nav">About</div>
            </HashLink>
          </AnimateLink>
          <AnimateLink>
            <HashLink smooth to="#Projects">
              <div className="nav">Projects</div>
            </HashLink>
          </AnimateLink>
          <AnimateLink>
            <HashLink smooth to="#Contact">
              <div className="nav">Contact</div>
            </HashLink>
          </AnimateLink>
          <div id="beautify">
            <label for="vehicle1">Beautify</label>
            <input
              type="checkbox"
              id="beautify-check"
              name="beautify"
              onChange={handleCheck}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
