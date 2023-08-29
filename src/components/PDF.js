import React from "react";
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export default function PDF () {
  return  (
  <PopupState variant="popover" popupId="demo-popup-popover">
  {(popupState) => (
    <div>
      <Button variant="contained" {...bindTrigger(popupState)}>
       View My Resume
      </Button>
      <Popover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
          <div style={{ width: '100%' }}>
        <iframe
        title="pdfviewer"
  
        height="1000px"
        src="https://docs.google.com/document/d/e/2PACX-1vQCZMj9SWUUxpLUONO0ve_yXXY3L-cQag20sAsrmdoNw9WYuh9YeEXAwsloAncbzlVdY018zpF7vmWS/pub?embedded=true"
      >
        
      </iframe>
      </div>
      </Popover>
    </div>
  )}


{/* 
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
    > */}
       
      </PopupState>
      
  );
}
