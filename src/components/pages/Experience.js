import React from "react";
import "../../App.css";
import "../../components/Experience.css";
import PDF from "../PDF";

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
   
 <PDF/>
     
    </>
  );
}

