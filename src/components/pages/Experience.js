import React from "react";

function Experience() {
  return (
    <>
      <div className="grid gap-4 grid-6 cols-4">
        <div className="relative col-start-1 col-end-4 p-4 mt-10 ml-10 text-center bg-gray-100 border border-gray-300 rounded-2xl">
          <h2 className="text-xl font-semibold">Sept 2014 - May 2016</h2>
          <ul className="mt-2 text-lg font-bold">
            North Hennepin Community College -{" "}
            <span className="text-lg font-normal ">
              Associate of Arts, Liberal Arts
            </span>
          </ul>
          <li className="mt-4 text-md sm:text-xs md-text-sm">
            Attended PSEO during my last 2 years of high school
          </li>
        </div>

        <div className="col-span-3 col-start-4 col-end-7 row-start-2 row-end-3 p-4 mt-10 mr-10 text-center bg-gray-100 border border-gray-300 rounded-2xl">
          <h2 className="text-xl font-semibold">Sept 2016 - May 2020</h2>
          <ul className="mt-2 text-lg font-bold ">
            University of Minnesota -{" "}
            <span className="text-lg font-normal ">
              Bachelor of Science, Animal Science
            </span>
          </ul>
          <li className="mt-4 text-md sm:text-xs md-text-sm">
            Studied Animal Science while taking Premed prerequisites.
          </li>
          <li className="mt-4 text-md sm:text-xs md-text-sm">
            Worked various jobs as a waitress, tutor, undergrad research, and
            healthcare.
          </li>
          <li className="mt-2 text-md sm:text-xs md-text-sm">
            Served as a board member for student groups
          </li>
          <li className="mt-2 text-md sm:text-xs md-text-sm">
            Volunteered at hospitals and animal shelters
          </li>
        </div>

        {/*  */}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="relative w-2/3 col-start-1 col-end-4 p-4 mt-10 ml-10 text-center bg-gray-100 border border-gray-300 rounded-2xl">
          <h2 className="text-xl font-semibold">May 2023 - Sept 2023</h2>
          <ul className="mt-2 text-lg font-bold ">
            Prime Digital Academy -{" "}
            <span className="text-lg font-normal ">
              Full-Stack Software Engineering Certification
            </span>
          </ul>
          <li className="mt-4 text-md sm:text-xs md-text-sm">
            Exploration of modern technologies/languages including C#/.Net, Git,
            Multer, Heroku, Redis, Docker
          </li>
          <li className="mt-4 text-md sm:text-xs md-text-sm">
            Designed projects wireframes and collaborated with UX/UI designers
          </li>
          <li className="mt-4 text-md sm:text-xs md-text-sm">
            Experience in public speaking, presentations, professional skill
            development, diversity, equity, and inclusion
          </li>
        </div>
        <div className="col-span-3 col-start-4 col-end-7 row-start-2 row-end-3 p-3 text-center border rounded-2xl"></div>
      </div>
    </>
  );
}

export default Experience;
