import { Box } from "@mui/system";

import StoreIcon from "@mui/icons-material/Store";
import { Avatar, Typography } from "@mui/material";
// import { LocationsData } from "../../Database/DataArrays";

const LocationOverviewHeader = (props) => {
    const {LocationName, DeviceCount  }=props
    

    
  return (
    <>
      <Box sx={{display:"flex", flexDirection: "row", alignItems: "center", justifyContent:"space-between", width:"80%" ,background: "#FFFFFF",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)", padding:"5px", borderRadius:"12px"}} >
        <StoreIcon sx={{fontSize: 40 , color: "orange"}}/>
        <Typography sx={{fontFamily:"Quicksand" , fontSize:"25px"}} >{LocationName}</Typography>
        <Avatar
                sx={{
                  background: "green",
                  width: "30px",
                  height: "30px"
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Quicksand",
                    fontSize: "20px",
                    color: "white",
                  }}
                >
                  {DeviceCount}
                </Typography>
              </Avatar>
      </Box>
    </>
  );
};

export default LocationOverviewHeader;
