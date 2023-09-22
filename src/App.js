import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { HashRouter as Router, Route } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Animal from "./components/pages/Animal";
import video from './components/pages/video.mp4'

function App() {
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check if the components are in the viewport
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Calculate the scroll position and the viewport height
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    // You can adjust these values based on your layout and desired timing
    const experienceThreshold = 200; // Example threshold for the "Experience" component
    const projectsThreshold = 400; // Example threshold for the "Projects" component

    // Check if the "Experience" component should be visible
    if (scrollY > experienceThreshold - viewportHeight) {
      setIsExperienceVisible(true);
    }

    // Check if the "Projects" component should be visible
    if (scrollY > projectsThreshold - viewportHeight) {
      setIsProjectsVisible(true);
    }
  };

  return (
    <>
      <video src={video} autoPlay loop muted />
      <Router>
        <Navbar />
        <Route path="/animals">
          <Animal />
        </Route>
        <Route path="/" exact>
          <Home
            isExperienceVisible={isExperienceVisible}
            isProjectsVisible={isProjectsVisible}
          />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Router>
    </>
  );
}

export default App;
