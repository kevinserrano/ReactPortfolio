import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "../src/component/NavTabs";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Projects from "./component/pages/Projects";
import Contact from "./component/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;