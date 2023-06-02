import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

const App = () => {
  return (
    <div>
      <Header />
      <div class="page-body">
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
