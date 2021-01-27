import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import tom from "../images/me.jpg";
import "../styles/About.css";

const About = () => {
  function FadeInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div id="About">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="box">
          <div className="heading">
            <h1>About Me</h1>
            <img id="tom" src={tom} alt="Tom Hammersley" />
          </div>
          In the spring of 2020 I decided to start on a path that would lead to
          a new career in coding by enrolling on a software engineering course
          at the online school Manchester Codes. Since then, I have dedicated
          all of my free time to this pursuit, carefully going over course
          materials to ensure I fully understand key concepts, reading
          documentation, following tutorials and developing applications.
          <br />
          <br />I am pleased to say that in January 2021 I graduated from my
          course and I now have experience across the full-stack and the skills
          I need to take on a junior development role.
          <br />
          <br />
          While seeking new career opportunities, I am continuing to develop
          projects to expand on my knowledge and learn new technologies.
          <div className="heading">
            <h2>Technologies</h2>
            <h3>Proficient in:</h3>
            <FadeInWhenVisible>
              <div id="technologies">
                <div className="technology">
                  <i class="fab fa-js-square fa-3x"></i>Javascript
                </div>
                <div className="technology">
                  <i class="fab fa-react fa-3x"></i>React
                </div>
                <div className="technology">
                  <i class="fas fa-satellite-dish fa-3x"></i>express.js
                </div>
                <div className="technology">
                  <i class="fas fa-database fa-3x"></i>SQL
                </div>
                <div className="technology">
                  <i class="fas fa-check-circle fa-3x"></i>Jest & Enzyme
                </div>
                <div className="technology">
                  <i class="fab fa-node fa-3x"></i>Node
                </div>
                <div className="technology">
                  <i class="far fa-file-code fa-3x"></i>HTML
                </div>
                <div className="technology">
                  <i class="fas fa-paint-brush fa-3x"></i>CSS
                </div>
              </div>
            </FadeInWhenVisible>
            <h3>Currently learning:</h3>
            <FadeInWhenVisible>
              <div id="technologies">
                <div className="technology">
                  <i class="fas fa-keyboard fa-3x"></i>Typescript
                </div>
                <div className="technology">
                  <i class="fab fa-vuejs fa-3x"></i>Vue
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
