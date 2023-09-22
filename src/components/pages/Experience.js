import React from "react";
import resume from "../resume.pdf";

function Experience() {
  return (
    <div className="pr-2 m-4">
      <h2 className="my-10 text-4xl font-extrabold tracking-tight text-center text-gray-200 md:text-5xl">
            <a href={resume} target="_blank" rel="noopener noreferrer">
          Experience
        </a>
      </h2>
      <div className="flex items-center justify-center ">
        <ol className="list-none sm:flex">
          <li className="relative mb-6 md:w-1/4 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-700 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-5 sm:pr-8">
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-100">
                Sept 2014 - May 2016
              </time>
              <h2 className="text-lg font-bold text-gray-100 dark:text-white">
                North Hennepin Community College
              </h2>
              <p className="font-semibold text-gray-100 text-md dark:text-white">
                Associate of Arts, Liberal Arts{" "}
              </p>

              <p className="font-normal text-left text-gray-100 dark:text-gray-400">
                Attended PSEO full-time
              </p>
            </div>
          </li>
          <li className="relative mb-6 md:w-1/2 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-700 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-5 sm:pr-8">
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-100">
                Sept 2016 - May 2020
              </time>
              <h2 className="text-lg font-bold text-gray-100 dark:text-white">
                University of Minnesota
              </h2>
              <p className="font-semibold text-gray-100 text-md dark:text-white">
                Bachelor of Science, Animal Science{" "}
              </p>

              <p className="font-normal text-left text-gray-100 dark:text-gray-400">
                Studied Animal Science while taking Premed prerequisites
              </p>
              <p className="font-normal text-left text-gray-100 dark:text-gray-400">
                Worked various jobs, including waitress, tutor, undergrad
                researcher, and healthcare positions
              </p>
              <p className="font-normal text-left text-gray-100 dark:text-gray-400">
                Served as a board member for student groups
              </p>
              <p className="font-normal text-left text-gray-100 dark:text-gray-400">
                Volunteered at hospitals and animal shelters
              </p>
            </div>
          </li>
          <li className="relative mb-6 md:w-1/2 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-700 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-5 sm:pr-10">
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-100">
                May 2023 - Sept 2023
              </time>
              <h2 className="text-lg font-bold text-gray-100 dark:text-white">
                Prime Digital Academy{" "}
              </h2>
              
              <p className="font-semibold text-gray-100 text-md dark:text-white">
                Full-Stack Software Engineering Certification{" "}
              </p>
              <p className="font-normal text-left text-gray-100 dark:text-gray-400">
                Proficient in HTML/CSS, JavaScript, React, Node.js, PostgreSQL,
                Tailwind CSS, and Material UI
              </p>
              <p className="font-normal text-left text-gray-100 dark:text-gray-400">
                Explored modern technologies/languages, including C#/.NET,
                Multer, Heroku, Redis, Docker, APIs, and Figma
              </p>
              <p className="font-normal text-left text-gray-100 dark:text-gray-400">
                Designed project wireframes and collaborated with UX/UI
                designers
              </p>
              <p className="font-normal text-left text-gray-100 dark:text-gray-400">
                Gained experience in public speaking, presentations,
                professional skill development, diversity, equity, and inclusion
                initiatives
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Experience;
