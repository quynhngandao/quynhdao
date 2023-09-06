import React from "react";
import "../../App.css";
import Footer from "../Footer";
/***** MUI *****/
import {
  Container,
  Button,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
  InputLabel,
} from "@mui/material";

export default function Contact() {

  const handleClick = () => {
    (window.location = `mailto:nguy2884@umn.edu`);
  };
  return (
    <div>
    <Container component="main" className="border-r-24">
      <Box
        sx={{
          marginTop: 7, 
          marginBottom:7,
        }}
      >
        <Grid container  justifyContent="center">
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square

            sx={{  maxWidth: 300, minWidth:250, borderRadius:"24px", px:0, mx:0 }}
          >
            <Box
              sx={{
                my: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                component="h1"
                fontFamily="Roboto Slab"
                variant="h4"
                fontWeight="800"
              >
                Contact Me
              </Typography>
              {/* REGISTRATION FORM INPUT FILED */}
              <Box component="form" sx={{ m: 1, mt: 3, maxWidth: 320, minWidth:300 }}>
              <Box
                  sx={{
               
                    "@media (max-width: 768px)": {
                      width: "90%", 
                      margin: 2, // Add some margin for spacing
            
                    },
                  }}
                >
                <InputLabel required htmlFor="name">
                  Name
                </InputLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="name"
                  type="text"
                  sx={{ minWidth: 270, maxWidth: 250 }}
                />
                <InputLabel htmlFor="email">Email</InputLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="name"
                  type="text"
                  sx={{ minWidth: 270, maxWidth: 250 }}
                />

                <InputLabel htmlFor="message">Message</InputLabel>
                <TextField
                  id="filled-multiline-static"
                  multiline
                  rows={3}
                  variant="outlined"
                  sx={{ minWidth: 270}}
               
                />

                <Box sx={{ textAlign: "center" , ali:"center"}}>
                  {/* <a target="_blank" href="mailto:nguy2884@umn.edu"> */}
                  <Button
                    name="submit"
                    halfWidth
                    alignItems="center"
                  
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 1,
                      backgroundColor: "black",
                      borderRadius: "15px",
                    }}
                    onClick={handleClick}
                  >
                    Contact Me
                  </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
    <Footer/>
    </div>
  );
}
