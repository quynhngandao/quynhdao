import React from "react";
import { Box } from "@mui/material";
import "../App.css";

export default function PDF() {
  return (
    
    <Box
    fontSize="5vw"
    display="flex"
    marginTop="25px"
    justifyContent="center"
    alignItems="center"
    minHeight="70vh" // Set a reasonable minimum height
    padding="1rem" // Add some padding for better spacing
  >
              <iframe
              width="100%"
              height="100%"
                className="resume"
                title="pdfviewer"
                src="https://docs.google.com/document/d/e/2PACX-1vQCZMj9SWUUxpLUONO0ve_yXXY3L-cQag20sAsrmdoNw9WYuh9YeEXAwsloAncbzlVdY018zpF7vmWS/pub?embedded=true"
              ></iframe>
            </Box>
       
  );
}