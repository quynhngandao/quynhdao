import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { HashRouter as Router, Route } from "react-router-dom";
// import Projects from "./components/pages/Projects";
// import Experience from "./components/pages/Experience";
import Contact from "./components/pages/Contact";
import Animal from "./components/pages/Animal";

function App() {
  return (
    <>
      <Router>
        <Navbar />  
        <Route path="/animals" component={Animal} />
        <Route path="/" exact component={Home} />
        {/* <Route path="/projects" component={Projects} />
        <Route path="/experience" component={Experience} /> */}
        <Route  path="/contact" component={Contact} />
      </Router>
    </>
  );
}

export default App;
