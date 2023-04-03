import React, { useEffect, useState } from "react";
import Tab from "../MainComponents/Tab";
import MapIcon from "@mui/icons-material/Map";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import LocationOverviewHeader from "./Components/LocationOverviewHeader";
import LocationOverviewBody from "./Components/LocationOverviewBody";
import LocationOverviewContent from "./Components/LocationOverviewContent";
import Footer from "../MainComponents/Footer";
import footer from "../Images/Footer.svg";
import { useParams } from "react-router-dom";
import { FetchOneLocation } from "../Service/LocationAPI";

const LocationOverviewScreen = () => {
  const { id } = useParams();
  const [LocationData, setLocationData] = useState({});
  const [reFetch, setReFetch] = useState(false);

  const fetchLocation = async () => {
    try {
      const response = await FetchOneLocation(id);
      console.log("~ fetchLocation ~ response:", response);
      setLocationData(response.data);
    } catch (err) {
      console.log("~ fetchLocation ~ err:", err);
    }
  };
  useEffect(() => {
    fetchLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    fetchLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            LOCATION
          </Typography>
          <Typography sx={{ fontFamily: "Quicksand", fontSize: "15px" }}>
            OVERVIEW
          </Typography>
        </Box>
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
        <Grid
          item
          xs={9.8}
          sx={{
            display: "inline-flex",
            width: "80%",
            borderRadius: "8px",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <LocationOverviewHeader
            LocationName={LocationData.name}
            DeviceCount={LocationData.devices && LocationData.devices.length}
          />

          <Grid
            sx={{
              display: "flex",
              borderRadius: "8px",
              justifyContent: "space-between",
              flexDirection: "row",
              width: "80%",
            }}
          >
            <LocationOverviewBody
              Devices={LocationData.devices && LocationData.devices}
              LocationID={LocationData._id}
              reFetch={reFetch}
              setReFetch={setReFetch}
            />
            <LocationOverviewContent
              LocationID={LocationData._id}
              address={LocationData.address}
              phone={LocationData.phone}
            />
          </Grid>
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

export default LocationOverviewScreen;
