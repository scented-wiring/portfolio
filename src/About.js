import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <div id="About">
      <motion.div animate={{ scale: [0.1, 1] }} transition={{ duration: 0.5 }}>
        <div id="about-box">
          In the spring of 2020 I decided to start on a path that would lead to
          a new career in coding by enrolling on a software engineering course
          at online school Manchester Codes. Since then, I have dedicated all of
          my free time to this pursuit, carefully going over the course
          materials to ensure I fully understand the key concepts and developing
          frontend and backend projects (which can be found on my GitHub page).
          <br />
          <br />I am pleased to say that in January 2021 I graduated from my
          course and I now have the skills I need to take on a junior
          development role. While seeking new career opportunities, I am
          continuing to develop projects to expand on my knowledge and acquire
          new skills.
        </div>
      </motion.div>
    </div>
  );
};

export default About;
