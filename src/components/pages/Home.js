import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import { Element, scroller } from "react-scroll"; // Import Element and scroller from react-scroll
import { useLocation } from "react-router-dom";
import {
  setScrollToAbout,
  setScrollToExperience,
  setScrollToProjects,
} from "../../redux/action";

function Home() {
  const location = useLocation();
  const dispatch = useDispatch();

  const scrollToAboutFlag = useSelector((state) => state.scrollToAbout);
  const scrollToExperienceFlag = useSelector(
    (state) => state.scrollToExperience
  );
  const scrollToProjectsFlag = useSelector((state) => state.scrollToProjects);

  const [activeSection, setActiveSection] = useState("home"); // Initialize with the default section name

  useEffect(() => {
    // Listen for scroll events and update the active section
    const handleScroll = () => {
      const yOffset = window.scrollY;
      const aboutSectionOffset = document.getElementById("about")?.offsetTop;
      const projectsSectionOffset = document.getElementById("projects")?.offsetTop;
      const experienceSectionOffset = document.getElementById("experience")?.offsetTop;
    
      if (yOffset >= aboutSectionOffset && yOffset < projectsSectionOffset) {
        setActiveSection("about");
      } else if (yOffset >= projectsSectionOffset && yOffset < experienceSectionOffset) {
        setActiveSection("projects");
      } else if (yOffset >= experienceSectionOffset) {
        setActiveSection("experience");
      }
    };
    

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll to the section when the flag is set
    if (scrollToAboutFlag) {
      scroller.scrollTo("about", { smooth: true, duration: 100 });
      dispatch(setScrollToAbout());
    } else if (scrollToExperienceFlag) {
      scroller.scrollTo("experience", { smooth: true, duration: 100 });
      dispatch(setScrollToExperience());
    } else if (scrollToProjectsFlag) {
      scroller.scrollTo("projects", { smooth: true, duration: 100 });
      dispatch(setScrollToProjects());
    }
  }, [
    scrollToAboutFlag,
    scrollToExperienceFlag,
    scrollToProjectsFlag,
    dispatch,
  ]);

  return (
    <div>
      <Element id="home" name="home">
        <div className={`section ${activeSection === "home" ? "active" : ""}`}>
          <HeroSection />
        </div>
      </Element>

      {/* About Section */}
      <Element id="about" name="about">
        <div
          className={`section ${activeSection === "about" ? "active" : ""}`}
        >
          <About />
        </div>
      </Element>

      {/* Projects Section */}
      <Element id="projects" name="projects">
        <div
          className={`section ${activeSection === "projects" ? "active" : ""}`}
        >
          <Projects />
        </div>
      </Element>

      {/* Experience Section */}
      <Element id="experience" name="experience">
        <div
          className={`section ${
            activeSection === "experience" ? "active" : ""
          }`}
        >
          <Experience />
        </div>
      </Element>

      <Footer />
    </div>
  );
}

export default Home;
