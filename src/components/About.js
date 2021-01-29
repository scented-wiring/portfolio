import { FadeInWhenVisible } from "./helpers/index";
import tom from "../images/me.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <div id="About">
      <div className="box">
        <div className="heading">
          <h1>About Me</h1>
          <img id="tom" src={tom} alt="Tom Hammersley" />
        </div>
        In the spring of 2020 I decided to start on a path that would lead to a
        new career in coding by enrolling on a software engineering course at
        the online school Manchester Codes. Since then, I have dedicated all of
        my free time to this pursuit, carefully going over course materials to
        ensure I fully understand key concepts, reading documentation, following
        tutorials and developing applications.
        <br />
        <br />I am pleased to say that in January 2021 I graduated from my
        course and I now have experience across the full-stack and the skills I
        need to take on a junior development role.
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
                <i className="fab fa-js-square fa-3x"></i>Javascript
              </div>
              <div className="technology">
                <i className="fab fa-react fa-3x"></i>React
              </div>
              <div className="technology">
                <i className="fas fa-satellite-dish fa-3x"></i>express.js
              </div>
              <div className="technology">
                <i className="fas fa-database fa-3x"></i>MySQL
              </div>
              <div className="technology">
                <i className="fas fa-check-circle fa-3x"></i>Jest & Enzyme
              </div>
              <div className="technology">
                <i className="fab fa-node fa-3x"></i>Node.js
              </div>
              <div className="technology">
                <i className="far fa-file-code fa-3x"></i>HTML
              </div>
              <div className="technology">
                <i className="fas fa-paint-brush fa-3x"></i>CSS
              </div>
            </div>
          </FadeInWhenVisible>
          <h3>Currently learning:</h3>
          <FadeInWhenVisible>
            <div id="technologies">
              <div className="technology">
                <i className="fas fa-keyboard fa-3x"></i>Typescript
              </div>
              <div className="technology">
                <i className="fab fa-vuejs fa-3x"></i>Vue
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
  );
};

export default About;
