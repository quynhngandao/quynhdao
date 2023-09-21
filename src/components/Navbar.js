import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import "./Navbar.css";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useDispatch } from "react-redux";
import {
  setScrollToAbout,
  setScrollToExperience,
  setScrollToProjects,
} from "../../src/redux/action";

function Navbar() {
  const dispatch = useDispatch();
  const location = useLocation();

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  // NAVIGATION LOGIC

  const scrollToAbout = () => {
    if (location.pathname === "/contact") {
      // Set the flag to scroll to About when returning to the home page
      dispatch(setScrollToAbout());
      // Scroll to the "about" section
      scroll.scrollTo("about", { smooth: true, duration: 100 });
    }
    closeMobileMenu();
  };

  const scrollToExperience = () => {
    if (location.pathname === "/contact") {
      // Set the flag to scroll to Experience when returning to the home page
      dispatch(setScrollToExperience());
      // Scroll to the "experience" section
      scroll.scrollTo("experience", { smooth: true, duration: 100 });
    }
    closeMobileMenu();
  };

  const scrollToProjects = () => {
    if (location.pathname === "/contact") {
      // Set the flag to scroll to Experience when returning to the home page
      dispatch(setScrollToProjects());
      // Scroll to the "experience" section
      scroll.scrollTo("projects", { smooth: true, duration: 100 });
    }
    closeMobileMenu();
  };

  const handleContactClick = () => {
    // Scroll to the top of the page
    scroll.scrollToTop({ smooth: true, duration: 0 });
    closeMobileMenu();
  };

  return (
    <div className={`navbar`}>
      <div className="navbar-container">
        {location.pathname === "/" ? (
          <ScrollLink
            to="home"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={closeMobileMenu}
            className="navbar-logo"
          >
            Quynh Dao
            <i class="fa-solid fa-code fa-bounce" />
          </ScrollLink>
        ) : (
          <RouterLink to="/" onClick={closeMobileMenu} className="navbar-logo">
            Quynh Dao
            <i class="fa-solid fa-code fa-bounce" />
          </RouterLink>
        )}

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            {/* Conditionally render RouterLink or ScrollLink */}
            {location.pathname === "/" ? (
              <ScrollLink
                to="about"
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMobileMenu}
                className="nav-links"
                activeClassName="active"
              >
                About
              </ScrollLink>
            ) : (
              <RouterLink to="/" onClick={scrollToAbout} className="nav-links">
                About
              </RouterLink>
            )}
          </li>
          <li className="nav-item">
            {location.pathname === "/" ? (
              <ScrollLink
                to="projects"
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMobileMenu}
                className="nav-links"
                activeClassName="active"
              >
                Portfolio
              </ScrollLink>
            ) : (
              <RouterLink
                to="/"
                onClick={scrollToProjects}
                className="nav-links"
              >
                Portfolio
              </RouterLink>
            )}
          </li>
          <li className="nav-item">
            {location.pathname === "/" ? (
              <ScrollLink
                to="experience"
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMobileMenu}
                className="nav-links"
                activeClassName="active"
              >
                Experience
              </ScrollLink>
            ) : (
              <RouterLink
                to="/"
                onClick={scrollToExperience}
                className="nav-links"
              >
                Experience
              </RouterLink>
            )}
          </li>

          <li>
            {/* Use RouterLink for Contact */}
            <RouterLink
              to="/contact"
              className="nav-links-mobile"
              onClick={handleContactClick}
              activeClassName="active"
            >
              Contact
            </RouterLink>
          </li>
        </ul>
        {button && <Button onClick={handleContactClick} buttonStyle="btn--outline">Contact</Button>}
      </div>
    </div>
  );
}

export default Navbar;
