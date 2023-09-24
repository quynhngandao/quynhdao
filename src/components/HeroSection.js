import "../App.css";
import "./HeroSection.css";
import React, { useLayoutEffect, useState } from "react";
import {
  useSpringRef,
  animated,
  useTransition,
  useSpring,
} from "@react-spring/web";

function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fontSize, setFontSize] = useState(15);
  const [fontSize2, setFontSize2] = useState(20);
  const springApi = useSpringRef();

  const name = ["Hello, I'm Quynh", "Full-Stack Developer"];

  const transitions = useTransition(activeIndex, {
    from: {
      clipPath: "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
      fontSize: fontSize, // Use the dynamic font size here
    },
    enter: {
      clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
      fontSize: fontSize2, // Use the dynamic font size here
    },
    leave: {
      clipPath: "polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)",
      fontSize: fontSize, // Use the dynamic font size here
    },
    onRest: (_springs, _ctrl, item) => {
      if (activeIndex === item) {
        setActiveIndex(activeIndex === name.length - 1 ? 0 : activeIndex + 1);
      }
    },
    exitBeforeEnter: true,
    config: {
      duration: 1500,
    },
    delay: 500,
    ref: springApi,
  });

  // Update font size based on screen width
  useLayoutEffect(() => {
    const fontSizes = {
      xlargeScreen: 90,
      largeScreen: 50,
      mediumScreen: 40,
      smallScreen: 20,
      xsmallScreen: 15,
    };
  
    const fontSizes2 = {
      xlargeScreen: 100,
      largeScreen: 60,
      mediumScreen: 50,
      smallScreen: 25,
      xsmallScreen: 20,
    };
  
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 390) {
        setFontSize(fontSizes.xsmallScreen);
        setFontSize2(fontSizes2.xsmallScreen);
      }
      else if (windowWidth <= 768) {
        setFontSize(fontSizes.smallScreen);
        setFontSize2(fontSizes2.smallScreen);
      } else if (windowWidth <= 1024) {
        setFontSize(fontSizes.mediumScreen);
        setFontSize2(fontSizes2.mediumScreen);
      } else if (windowWidth <= 1440) {
        setFontSize(fontSizes.largeScreen);
        setFontSize2(fontSizes2.largeScreen);
      } else if (windowWidth <= 2560) {
        setFontSize(fontSizes.xlargeScreen);
        setFontSize2(fontSizes2.xlargeScreen);
      } else {
        // Set default font sizes here
        setFontSize(fontSizes.xsmallScreen); // You can change this to your desired default size
        setFontSize2(fontSizes2.xsmallScreen); // You can change this to your desired default size
      }
    };
  
    // Initial font size update
    handleResize();
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  const springs = useSpring({
    from: {
      strokeDashoffset: 120,
    },
    to: {
      strokeDashoffset: 0,
    },
    config: {
      duration: 5000,
    },
    loop: true,
    ref: springApi,
  });

  useLayoutEffect(() => {
    springApi.start();
  }, [activeIndex]);

  return (
    <div>
      <div className="hero-container">
        <div className="container">
          <div className="container__inner">
            {transitions((springs, item) => (
              <animated.h1
                className="h1__container"
                style={{
                  ...springs,
                  color: "white",
                  fontFamily: "fraunces",
                  fontWeight: 900,
                }}
              >
                {name[item]}
              </animated.h1>
            ))}
            <div className="ticker">
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
