import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import "../App.css";

export default function PDF() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="contained" {...bindTrigger(popupState)}>
            View My Resume
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
         
          >
            <Box>
              <iframe
                className="resume"
                title="pdfviewer"
                src="https://docs.google.com/document/d/e/2PACX-1vQCZMj9SWUUxpLUONO0ve_yXXY3L-cQag20sAsrmdoNw9WYuh9YeEXAwsloAncbzlVdY018zpF7vmWS/pub?embedded=true"
              ></iframe>
            </Box>
          </Popover>
        </div>
      )}

      {/*
       */}
    </PopupState>
  );
}
