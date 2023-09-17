import React from "react";
import genderstanding from "./genderstanding.png";
import playwme from "./playwme.png";
import { Card, CardMedia, CardContent, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Projects() {
  return (
    <div className="flex justify-center py-5">
      <div style={{ width: "95%" }} className="flex flex-col gap-4 sm:flex-row ">
        <div className="w-full sm:w-1/2 md:w-full lg:w-full ">
          <Card sx={{borderRadius:4}} className="w-full text-center">
            <h2 className="pt-4 pb-0">
              <a style={{color:"#36373a"}} href="https://genderstanding-116c2268e46c.herokuapp.com/#/welcome">
                Genderstanding
              </a>
            </h2>

            <CardMedia
              component="img"
              image={genderstanding}
              alt="genderstanding"
              sx={{
                maxHeight: 350,
                maxWidth: "90%",
                mx: "auto", // Center horizontally
                my: 2, // Add some vertical margin
                display: "block", // Remove any default inline styles
              }}
            />
                 <CardContent sx={{ py: 0, mx:4, color:"#36373a" }}>
              <p className="text-center ">
                An invite-only social media app that allow users to invite
                friends and family to ask anonymous question
              </p>
            </CardContent>
            <ul className="actions special">
              <li>
                <a style={{borderRadius:10, verticalAlign:"middle", color:"#36373a" }}
                  href="https://genderstanding-116c2268e46c.herokuapp.com/#/welcome"
                  className="button"
                >
                  See Project
                </a>
              </li>
            </ul>
          </Card>
        </div>

        <div className="w-full">
          <Card sx={{borderRadius:4}} className="text-center ">
            <h2 className="pt-4">
              <a style={{color:"#36373a"}} href="https://playwme-1cf74549f561.herokuapp.com/#/home">
                PLAYwME
              </a>
            </h2>
            <CardMedia
              component="img"
              image={playwme}
              alt="playwme"
              sx={{
                maxHeight: 350,
                maxWidth: "90%",
                mx: "auto", // Center horizontally
                my: 2, // Add some vertical margin
                display: "block", // Remove any default inline styles
              }}
            />
            <CardContent sx={{ py: 0, mx:4, color:"#36373a"}}>
              <p className="text-center" >
                An invite-only social media app that allow users to invite
                friends and family to ask anonymous question
              </p>
            </CardContent>
            <ul className="actions special">
              <li>
                <a style={{borderRadius:10,  verticalAlign:"middle" , color:"#36373a"}}
                  href="https://genderstanding-116c2268e46c.herokuapp.com/#/welcome"
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
  );
}

export default Projects;
