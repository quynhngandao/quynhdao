import React from "react";
import "../../App.css";
import resume from "../resume.pdf"

export default function Contact() {
  // const handleClick = () => {
  //   window.location = `mailto:nguy2884@umn.edu`;
  // };
  return (
    <div div className="">
    <div id="footer" className="items-center justify-center">
      <section className="">
        <form >
          {" "}
          <h2 className="text-center">Contact Me</h2>
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="3"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </form>
      </section>
      <section className="text-center">
        <section>
          <h3>Email</h3>
          <p className="text-center">
            <a href="/">quynhngannguyendao@gmail.com</a>
          </p>
        </section>

        <h3>Connect</h3>
        <ul className="icons alt">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/daoquynh29/"
              className="icon brands alt fa-linkedin"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/quynhngandao"
              className="icon brands alt fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
         
        </ul>

        <section>
          <h3>Resume</h3>
          <ul className="icons alt">
          <li>
          <a
              target="_blank"
              rel="noopener noreferrer"
              href={resume} 
              className="icon fa-regular alt fa-file-pdf"
            >
                <span className="label">Resume</span>
            </a>
            </li>
            </ul>
        </section>
      </section>
    </div>
    </div>
  );
}
