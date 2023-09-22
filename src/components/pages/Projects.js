import React from "react";
import genderstanding from "./genderstanding.png";
import playwme from "./playwme.png";
import { CardMedia, CardContent } from "@mui/material";

function Projects() {
  return (
    <div className="justify-center">
      <h2 className="my-10 text-4xl font-extrabold tracking-tight text-center text-gray-200 md:text-5xl">
        <a
          href="https://github.com/quynhngandao"
          target="_blank"
          rel="noopener noreferrer"
        >
          Projects{" "}
        </a>
      </h2>
      <div className="flex flex-col items-center ">
        <div
         style={{width:"85%"}}
          className="flex flex-col gap-12 sm:flex-row"
        >
          <div  style={{
            border: ".25px solid rgba(173, 181, 189, 0.5)", 
            borderRadius:"12px",
            transition: "border-color 0.3s ease"
          }} className="w-full hover:scale-105">
            <h3 className="pt-5 pb-0 text-center">
              <a
                style={{ color: "white" }}
                href="https://github.com/Genderstanding/Genderstanding"
              >
                Genderstanding
              </a>
            </h3>
            <CardMedia
              component="img"
              image={genderstanding}
              alt="genderstanding"
              sx={{
                maxHeight: 350,
                minWidth: 350,
                maxWidth: "75%",
                mx: "auto", // Center horizontally
                display: "block", // Remove any default inline styles
                zIndex: 10,
              }}
            />
            <CardContent
              sx={{ zIndex: 10, pb: 0, mx: 5, color: "white", flexGrow: 1 }}
            >
              <p className="text-center">
                A full-stack mobile-first web app that allows a safe space for
                users to invite friends and family to ask anonymous questions
              </p>
            </CardContent>
            <ul className="z-10 actions special">
              <li>
                <a
                  style={{
                    borderRadius: 10,
                    verticalAlign: "middle",
                    color: "white",
                  }}
                  href="https://genderstanding-116c2268e46c.herokuapp.com/#/welcome"
                  className="button"
                >
                  See Project
                </a>
              </li>
            </ul>
          </div>

          <div
            style={{
              border: ".25px solid rgba(173, 181, 189, 0.5)", 
              borderRadius:"12px",
            }}
            className="w-full hover:border-white hover:scale-105"
          >
            <h3 className="pt-5 pb-0 text-center">
              <a
                style={{ color: "white" }}
                href="https://github.com/quynhngandao/PLAYwME"
              >
                PLAYwME
              </a>
            </h3>
            <CardMedia
              component="img"
              image={playwme}
              alt="playwme"
              sx={{
                maxHeight: 350,
                minWidth: 350,
                maxWidth: "80%",
                mx: "auto", // Center horizontally
                display: "block", // Remove any default inline styles
                zIndex: 10,
              }}
            />
            <CardContent
              sx={{ zIndex: 10, pb: 0, mx: 5, color: "white", flexGrow: 1 }}
            >
              <p className="text-center">
                A full-stack web application that allow users to connect with
                local shelters and schedule playtime with local shelter animals
              </p>
            </CardContent>
            <ul className="z-10 actions special">
              <li>
                <a
                  style={{
                    borderRadius: 10,
                    verticalAlign: "middle",
                    color: "white",
                  }}
                  href="https://playwme-1cf74549f561.herokuapp.com/#/home"
                  className="button"
                >
                  See Project
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
