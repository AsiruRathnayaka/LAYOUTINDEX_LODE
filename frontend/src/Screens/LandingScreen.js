import React from "react";
import Header from "../MainComponents/Header";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import Pin from "../Images/Pin.png";
import { Link } from "react-router-dom";

const LandingScreen = () => {
  return (
    <>
      <Header />
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", flexDirection: "row" }}
      >
        <Grid sx={{ display: "flex", flexDirection: "column" }} item xs={6}>
          <Typography
            sx={{
              color: "black",
              fontFamily: "Quicksand-Bold",
              
              fontSize: "10vh",
              paddingLeft: "5vw",
              paddingTop: "5vw",
            }}
          >
            Location & <br /> Device Monitor
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontFamily: "Quicksand",
              fontSize: "2.5vh",
              paddingLeft: "5vw",
              paddingTop: "1vw",
            }}
          >
            Efficiently manage multiple locations and devices with our user-{" "}
            <br /> friendly solution, offering easy storage, validation, and
            seamless <br /> adding/removing of devices.
          </Typography>
          <Button
            sx={{
              mt: "2vw",
              ml: "5vw",
              width: "20%",
              padding: "10px",
              borderRadius: "8px",
              background: "black",
              fontFamily: "Quicksand",
            }}
            component={Link}
            to="/Dashboard"
            variant="contained"
            endIcon={<NavigateNextRoundedIcon />}
          >
            Go To Locations
          </Button>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          item
          xs={6}
        >
          <img
            src={Pin}
            alt="Pin"
            style={{ width: "20Vw", marginTop: "15vh" }}
          ></img>
        </Grid>
      </Grid>
    </>
  );
};

export default LandingScreen;
