import React from "react";
import { Box } from "@mui/material";

export default function PDF() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight:"100vh",
        width: "60%",
        paddingTop: "30px",
        padding: "20px", // Add padding to the content
        border: "2px solid #ccc", // Add a border with a light gray color
        borderRadius: "10px", // Add rounded corners
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
        backgroundColor: "#f9f9f9", // Set a background color
        margin: "20px", // Add some margin around the content
        textAlign: "center",
      }}
    >
      <h2 class="mb-5">Resume</h2>
      <iframe
        title="pdfviewer"
        width="100%"
        height="1000px"
        src="https://docs.google.com/document/d/e/2PACX-1vQCZMj9SWUUxpLUONO0ve_yXXY3L-cQag20sAsrmdoNw9WYuh9YeEXAwsloAncbzlVdY018zpF7vmWS/pub?embedded=true"
      ></iframe>
    </Box>
  );
}
