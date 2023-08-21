import React from "react";
import "../../App.css";
import "../../components/Experience.css";

export default function Experience() {
  return (
    <>
      <div className="container" style={{ flexDirection: "row" }}>
        {/* SKILLS */}
        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages &amp; Tools</div>
            <ul class="list-inline dev-icons">
              <i>
                <img
                  src="/images/html-5.png"
                  alt=""
                  style={{ width: "50px", margin: "10px" }}
                />
              </i>
              <i>
                <img
                  src="/images/css-3.png"
                  alt=""
                  style={{ width: "50px", margin: "10px" }}
                />
              </i>
              <i>
                <img
                  src="/images/java-script.png"
                  alt=""
                  style={{ width: "50px", margin: "10px" }}
                />
              </i>
              <i>
                <img
                  src="/images/nodejs.png"
                  alt=""
                  style={{ width: "50px", margin: "10px" }}
                />
              </i>
              <i>
                <img
                  src="/images/physics.png"
                  alt=""
                  style={{ width: "50px", margin: "10px" }}
                />
              </i>
              <i>
                <img
                  src="/images/postgre.png"
                  alt=""
                  style={{ width: "50px", margin: "10px" }}
                />
              </i>
              <i>
                <img
                  src="/images/bootstrap.png"
                  alt=""
                  style={{ width: "50px", margin: "10px" }}
                />
              </i>
              <i>
                <img
                  src="/images/github.png"
                  alt=""
                  style={{ width: "50px", margin: "10px" }}
                />
              </i>
              <i>
                <img
                  src="/images/figma.png"
                  alt=""
                  style={{ width: "50px", margin: "10px" }}
                />
              </i>
            </ul>
          </div>
          {/* INTEREST */}
          <section
            class="resume-section"
            id="interests"
            style={{ alignItems: "center", marginLeft:"50px", paddingTop:"0" }}
          >
            <div class="resume-section-content">
              <h2 class="mb-5">About Me</h2>
              <p>
                I have contributed to projects, both independently and as part
                of a collaborative team, focusing on web application
                development. In addition to my tech background, I bring a
                diverse background that encompasses experience in the healthcare
                industry, customer service sector, a passion for animal care,
                and an interest in the evolving Web3 technology. My commitment
                to continuous learning and problem-solving drives me to seek
                opportunities where I can apply my skills and experience to make
                a positive impact.{" "}
              </p>
              <p>
                Apart from full-stack development, I enjoy bouldering and
                playing pickleball in the summer. During the winter, I enjoy
                snowboarding
              </p>
              <p class="mb-0">
                I love anything horror and mystery/detective genres and anime. I
                am a big foodie so I spend a large amount of my free time
                exploring local restaurants.
              </p>
              <br />
              <p>I have a bunny, his name is Sr. Fluff</p>
              <img
                style={{ width: "300px", height: "200px", margin: "0" }}
                alt="fluff"
                src="https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.6435-9/65309185_2545513058813810_2896765178395754496_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=Qr6aUewnaJsAX8Oo_mz&_nc_ht=scontent.ffcm1-2.fna&oh=00_AfCqZ_QUoCdj-qGiVDwmrta-Z8kWDfrvowRMkyczI6Kd2w&oe=650A6E81"
              />
            </div>
          </section>
        </section>
      </div>

      <hr class="m-0" />
      {/* EXPERIENCE */}
      <section class="resume-section" id="experience">
        <div class="resume-section-content">
          <h2 class="mb-5">Experience</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">Software Developer Student</h3>
              <div class="subheading mb-3">Prime Digital Academy</div>
              <p>
                <li className="list"> 
                 <a style={{color:"black"}} href="https://protected-tundra-96868-dd04b8c05221.herokuapp.com/"> PLAYwME </a>: A CRUD web-based application that enables users to
                  connect with local shelters, schedule playtime, and interact
                  with shelter animals - aimed to address the challenges of pet
                  homelessness and enhancing the enrichment of these animals'
                  lives 
                 <li className="list" style={{marginLeft:"25px"}}> Built with JavaScript, React, Node.js, Express.js,
                  PostgreSQL, RESTful API, Material UI, Figma </li>
                </li>
                <li className="list"> 
                  Genderstanding: Work in progress (Exploring MongoDB, AWS, and
                  Tailwind)
                </li>
              </p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">May 2023 - Sept 2023</span>
            </div>
          </div>
        </div>
      </section>
      <hr class="m-0" />
      {/* EDUCATION */}
      <section class="resume-section" id="education">
        <div class="resume-section-content">
          <h2 class="mb-5">Education</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">Prime Digital Academy</h3>
              <div class="subheading mb-3">
                Full-stack Software Engineering Certification
              </div>
              <p>
              <li className="list"> 
                  Exploration and proficiency in modern technologies/languages
                  including JavaScript, PostgreSQL, Express, React, Node,
                  C#/.Net
                </li>
                <li className="list"> 
                  Experience in public speaking, presentations, professional
                  skill development, diversity, equity, and inclusion, as well
                  as hands-on experience with real-world client projects
                </li>
              </p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">Sept 2020</span>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">University of Minnesota</h3>
              <div class="subheading mb-3">
                Bachelor of Science, Animal Science
              </div>
              <p>GPA - 3.85 </p>
              <p>
              <li className="list"> Dean’s list for academic excellence</li>
                <li className="list"> 
                  Served as a Mentor for the VSAM ACE Program from September
                  2018 to May 2019
                </li>
                <li className="list"> 
                  Held positions as a Board Member for the Vietnamese
                  International Student Association and College of Science &
                  Engineering International Ambassador from September 2019 to
                  May 2020
                </li>
              </p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">Sept 2020</span>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">North Hennepin Community College</h3>
              <div class="subheading mb-3">Associate of Arts</div>
              <p>GPA - 4.0 </p>
              <p>
              <li className="list"> Dean’s list for academic excellence</li>
                <li className="list"> Honors Society Scholar</li>
              </p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">Sept 2016</span>
            </div>
          </div>
        </div>
      </section>
      <hr class="m-0" />
      {/* COMMUNITY */}
      <section class="resume-section" id="community">
        <div class="resume-section-content">
          <h2 class="mb-5">Community Service</h2>

          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">Animal Humane Society</h3>
              <div class="subheading mb-3">Volunteer</div>

              <p>
              <li className="list"> 
                  Provided compassionate care of foster animals through
                  attending to their feeding, wound care, and medication needs
                </li>
                <li className="list"> 
                  Maintained sanitary conditions in the surgical suite through
                  instrument sterilization
                </li>
              </p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">July 2016 - present</span>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">America Reads, University of Minnesota</h3>
              <div class="subheading mb-3">literacy Tutor</div>
              <p>
              <li className="list"> 
                  Mentored elementary students, employing interactive games and
                  reading activities to enhance their literacy skills and guide
                  them towards academic achievement
                </li>
              </p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">Jan 2019 - May 2019</span>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">Ebenezer Nursing Home</h3>
              <div class="subheading mb-3">Volunteer</div>
              <p>
              <li className="list"> 
                Provided support and care  to enhance the well-being of senior patients, resulting in improved overall quality of life

                </li>
              </p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">Nov 2018 - Jan 2020</span>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">Abbott Northwestern Hospital</h3>
              <div class="subheading mb-3">Volunteer</div>
              <p>
                <li>
                Supported staff and patients through creating patient charts, facilitating phone communication, and various requests, contributing to smooth operations and efficient patient care

                </li>
              </p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">Sept 2018 - May 2019</span>
            </div>
          </div>
        </div>
      </section>
      <hr class="m-0" />
    </>
  );
}

