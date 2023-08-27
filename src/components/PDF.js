import React from 'react';
import { Box } from '@mui/material';

export default function PDF () {

  return (
    <Box  sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        paddingTop: "30px",
      }}>
        <h2 class="mb-5">Resume</h2>
      <iframe title="pdfviewer" width="50%"  height= '1000px' src="https://docs.google.com/document/d/e/2PACX-1vQCZMj9SWUUxpLUONO0ve_yXXY3L-cQag20sAsrmdoNw9WYuh9YeEXAwsloAncbzlVdY018zpF7vmWS/pub?embedded=true"></iframe>
    </Box>
  );
};
