import React, { useEffect, useState } from "react";
import Tab from "../MainComponents/Tab";
import MapIcon from "@mui/icons-material/Map";
import { Box } from "@mui/system";
import LocationCard from "../MainComponents/LocationCard";
import { Grid, Typography } from "@mui/material";
import AddButton from "../MainComponents/AddButton";
import Footer from "../MainComponents/Footer";
import footer from "../Images/Footer.svg";
import { FetchLocations } from "../Service/LocationAPI";

const Dashboard = () => {
  const [LocationsData, setLocationsData] = useState([]);
  const [reFetch, setReFetch] = useState(false);
  const fetchLocation = async () => {
    try {
      const response = await FetchLocations();
      console.log("~ fetchLocation ~ response:", response)
      setLocationsData(response.data);
    } catch (err) {
    console.log("~ fetchLocation ~ err:", err)
    }
  };
  useEffect(() => {
    fetchLocation();
  }, []);
  useEffect(() => {
    fetchLocation();
  }, [reFetch]);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "10px",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{ fontFamily: "Quicksand-SemiBold", fontSize: "30px" }}
          >
            LOCATIONS
          </Typography>
          <Typography sx={{ fontFamily: "Quicksand", fontSize: "15px" }}>
            DASHBOARD
          </Typography>
        </Box>

        <AddButton to="/AddLocation" label="Add Location" />
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Grid
          sx={{
            height: "70px",
            borderRadius: "8px",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            background: "#FFFFFF",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          }}
          item
          xs={2}
        >
          <Tab tabName="Locations" tabLabel="Locations" tabIcon={MapIcon} />
        </Grid>
        <Grid sx={Styles.CardView} item xs={9.8}>
          {LocationsData.length !==0  && LocationsData.map((location) => (
            <LocationCard
              LocationName={location.name}
              LocationAddress={location.address}
              LocationPhone={location.phone}
              DeviceCount={location.devices.length} 
              id={location._id}
              reFetch={reFetch} 
              setReFetch={setReFetch}
            />
          ))}
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
        }}
      >
        <Footer svg={footer} />
      </Box>
    </div>
  );
};

const Styles = {
  CardView: {
    display: "grid",
    flexDirection: "row",
    background: "#FFFFFF",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "50px",
    overflowY: "auto",
    padding: "20px",
    maxHeight: "calc(100% - 70px)",
  },
};

export default Dashboard;
