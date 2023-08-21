import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {


  return (
    <div className="footer-container">
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Quynh Dao
              <i class="fa-solid fa-code fa-bounce" />
            </Link>
          </div>
          <small class="website-rights">Quynh Dao © 2023</small>
          <div class="social-icons">
          <a
              className="social-icon-link linkedin"
              href="https://www.linkedin.com/in/daoquynh29/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
              
           </a>
           <a
              className="social-icon-link github"
              href="https://github.com/quynhngandao"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
