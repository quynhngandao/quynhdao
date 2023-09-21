import React from "react";
import "../../App.css";
import "../../components/Experience.css";
import fluff from '../pages/fluff.jpeg'

export default function About() {
  return (
    <div id="about" >
    <div className="relative overflow-hidden bg-white ">
      <div className="mx-auto md:max-w-8xl">
        <div className="relative z-10 bg-white sm:pb-16 md:pb-20 md:max-w-3xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full text-white transform translate-x-1/2 w-60 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0, 100,0 50,100 0,200"></polygon>
          </svg>

          <div className="pt-1"></div>

          <main className="items-center justify-center sm:mt-12 sm:px-6 md:mt-16 md:px-8 lg:mt-20 lg:px-10">

            <div className="aboutme 2xl:ml-5 sm:text-center lg:text-center md:text-center">
              <h2 className="my-6 text-2xl font-extrabold tracking-tight text-center text-gray-700 sm:text-3xl md:text-4xl">
              <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/daoquynh29/"> About me</a>
              </h2>
              <div className="mx-5 text-sm text-center">
                <p className="">
                  I'm a graduate from the University of Minnesota with a premed
                  background. I have a diverse background working with both
                  animals and people in healthcare, customer service, tutoring,
                  and research. These experiences have equipped me with a wide
                  range of skills and perspectives. Recently, I made a
                  transition into the tech industry because I was drawn to an
                  environment that fosters continuous learning and
                  problem-solving.
                </p>

                <p className="">
                  I had the opportunity to contribute to various projects, both
                  independently and as part of collaborative teams, with a focus
                  on full-stack development. My commitment to learning drives me
                  to seek opportunities to apply my skills to make a positive
                  impact through technology.
                </p>

                <p className="">
                  Outside of full-stack development, I like rock climbing,
                  playing pickleball, and snowboarding. I enjoy horror and
                  mystery/detective genres. Because I am a big foodie, I spend a
                  lot of my free time exploring local restaurants. Additionally,
                  I take pride in being a longtime volunteer at the Animal
                  Humane Society.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className=" lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <h2 className="my-6 text-2xl font-extrabold tracking-tight text-center text-gray-700 sm:text-3xl md:text-4xl">
         Sr. Fluff 
        </h2>
        <img
          className="object-cover object-bottom w-full sm:h-72 md:h-full lg:w-full lg:h-full"
          src={fluff} alt="sr.fluff"  />
      </div>
    </div>
    </div>
  );
}
