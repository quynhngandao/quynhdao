import React from "react";
import genderstanding from "./genderstanding.png";
import playwme from "./playwme.png";
import { Card, CardMedia, CardContent, CardActionArea } from "@mui/material";

function Projects() {
  return (
    <div className="">
      <h2 className="my-10 text-2xl font-extrabold tracking-tight text-center text-gray-200 sm:text-3xl md:text-4xl">
        <a
          href="https://github.com/quynhngandao"
          target="_blank"
          rel="noopener noreferrer"
        >
          Projects{" "}
        </a>
      </h2>

      <div className="flex justify-center ">
        <div
          style={{ width: "95%" }}
          className="flex flex-col gap-8 sm:flex-row "
        >
          <div className="w-full sm:w-1/2 md:w-full lg:w-full ">
            <Card
              sx={{
                borderRadius: 4,
                minHeight: 350,
                display: "flex",
                flexDirection: "column",
                bgcolor: "transparent",
                boxShadow: "inset 0 0 0 1px white;",
              }}
              className="w-full text-center"
            >
              <h2 className="pt-5 pb-0">
                <a style={{ color: "white" }} href="#/projects">
                  Genderstanding
                </a>
              </h2>
              <CardMedia
                component="img"
                image={genderstanding}
                alt="genderstanding"
                sx={{
                  maxHeight: 350,
                  minWidth: 350,
                  maxWidth: "90%",
                  mx: "auto", // Center horizontally
                  my: 2, // Add some vertical margin
                  display: "block", // Remove any default inline styles
                  zIndex:10
                }}
              />
              <CardContent sx={{ zIndex:10, pb: 0, mx: 5, color: "white", flexGrow: 1 }}>
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
                    href="#/projects"
                    className="button"
                  >
                    See Project
                  </a>
                </li>
              </ul>
            </Card>
          </div>

          <div className="w-full">
            <Card
              sx={{
                borderRadius: 4,
                minHeight: 350,
                display: "flex",
                flexDirection: "column",
                bgcolor: "transparent",
                boxShadow: "inset 0 0 0 1px white;",
              }}
              className="text-center "
            >
              <h2 className="pt-4">
                <a
                  style={{ color: "white" }}
                  href="https://playwme-1cf74549f561.herokuapp.com/#/home"
                >
                  PLAYwME
                </a>
              </h2>
              <CardMedia
                component="img"
                image={playwme}
                alt="playwme"
                sx={{
                  maxHeight: 350,
                  minWidth: 350,
                  maxWidth: "90%",
                  mx: "auto", // Center horizontally
                  my: 2, // Add some vertical margin
                  display: "block", // Remove any default inline styles
                  zIndex:10
                }}
              />
              <CardContent sx={{ zIndex:10, pb: 0, mx: 5, color: "white", flexGrow: 1 }}>
                <p className="text-center">
                  A full-stack web application that allow users to connect with
                  local shelters and schedule playtime with local shelter
                  animals
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
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
