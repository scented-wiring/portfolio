import React from "react";
import { HashLink } from "react-router-hash-link";
import "../styles/Header.css";

const Header = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -195;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <div id="Header-wrap">
      <div id="Header">
        <div id="top" className="transition">
          <div className="wrapper">
            <div id="content">
              <div id="title">
                <h1>Tom Hammersley - Portfolio</h1>
              </div>

              <div id="links">
                <a
                  href="https://www.linkedin.com/in/tom-hammersley-3b0b4b203/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="link transition">
                    <i className="fab fa-linkedin fa-3x"></i>
                    LinkedIn
                  </div>
                </a>

                <a
                  href="https://github.com/scented-wiring"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="link transition">
                    <i className="fab fa-github-square fa-3x"></i>
                    Github
                  </div>
                </a>

                <a href="mailto:thomas.j.hammersley@gmail.com" rel="noreferrer">
                  <div className="link transition">
                    <i className="fas fa-envelope-square fa-3x"></i>
                    Email
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div id="navbar" className="transition">
            <div className="wrapper">
              <HashLink
                smooth
                to="/#About"
                scroll={(el) => scrollWithOffset(el)}
              >
                <div className="nav">About</div>
              </HashLink>
              <HashLink
                smooth
                to="/#Projects"
                scroll={(el) => scrollWithOffset(el)}
              >
                <div className="nav">Projects</div>
              </HashLink>
              <div id="beautify">
                <label htmlFor="vehicle1">Beautify</label>
                <input type="checkbox" className="beautify"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.onload = (event) => {
  const beautifyButton = document.querySelector("input.beautify");

  beautifyButton.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("beautify");
  });
};

export default Header;
