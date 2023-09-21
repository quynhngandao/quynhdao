import React from "react";
import "../../App.css";
import "../../components/Experience.css";

export default function About() {
  return (
    <div id="about" >
    <div className="relative overflow-hidden bg-white ">
      <div className="mx-auto md:max-w-7xl ">
        <div className="relative z-10 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full text-white transform translate-x-1/2 w-52 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0, 100,0 50,100 0,200"></polygon>
          </svg>

          <div className="pt-1"></div>

          <main className="items-center justify-center lg:max-w-7xl sm:mt-12 sm:px-6 md:mt-16 md:px-8 lg:mt-20 lg:px-10">

            <div className=" sm:text-center lg:text-center md:text-center">
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
        <a href="#/animals">  Sr. Fluff </a>
        </h2>
        <img
          className="object-cover object-bottom w-full sm:h-72 md:h-full lg:w-full lg:h-full"
          src="https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.6435-9/65309185_2545513058813810_2896765178395754496_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=Qr6aUewnaJsAX8Oo_mz&_nc_ht=scontent.ffcm1-2.fna&oh=00_AfCqZ_QUoCdj-qGiVDwmrta-Z8kWDfrvowRMkyczI6Kd2w&oe=650A6E81"
          alt=""
        />
      </div>
    </div>
    </div>
  );
}
