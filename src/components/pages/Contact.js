import React from "react";
import "../../App.css";
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
    <Container component="main">
      <Typography variant="h5" className="alert" role="alert"></Typography>

      <Box
        sx={{
          marginTop: 10,
        }}
      >
        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            sx={{ width: 500 }}
          >
            <Box
              sx={{
                my: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                component="h1"
                fontFamily="Roboto Slab"
                variant="h4"
                fontWeight="900"
              >
                Contact Me
              </Typography>
              {/* REGISTRATION FORM INPUT FILED */}
              <Box component="form" sx={{ m: 1, mt: 3, width: 400 }}>
                <InputLabel required htmlFor="name">
                  Name
                </InputLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="name"
                  type="text"
                 
                />
                <InputLabel htmlFor="email">Email</InputLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="name"
                  type="text"
                
                />

                <InputLabel htmlFor="message">Message</InputLabel>
                <TextField
                  id="filled-multiline-static"
                  multiline
                  rows={5}
                  variant="outlined"
                  sx={{ width: 400 }}
               
                />

                <Box sx={{ textAlign: "center" }}>
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
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
