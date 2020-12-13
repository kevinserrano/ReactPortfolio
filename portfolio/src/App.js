import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./component/NavBar";
import Home from "./component/Home";
import About from "./component/About";
import Projects from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;