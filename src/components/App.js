import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../components/About";
import Header from "../components/Header";
import Projects from "../components/Projects";

const App = () => {
  return (
    <div>
      <Header />
      <div class="page-body">
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
