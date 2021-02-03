import { useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Projects from "../components/Projects";

const App = () => {
  const [beautify, setBeautify] = useState(false);

  return (
    <div>
      <Header beautify={beautify} setBeautify={setBeautify} />
      <About />
      <Projects beautify={beautify} />
      <Contact />
    </div>
  );
};

export default App;
