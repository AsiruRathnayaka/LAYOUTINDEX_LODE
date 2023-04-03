import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { LocationOn, Phone } from "@mui/icons-material";
import DeleteLocationDialog from "./DeleteLocationDialog";

const LocationOverviewContent = ({ LocationID, address, phone }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "20px",
        width: "40%",
        height: "20%",
      }}
    >
      <Box
        sx={{
          padding: "15px",
          display: "flex",
          alignItems: "center",
          background: "#FFFFFF",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          borderRadius: "12px",
        }}
      >
        <LocationOn
          sx={{ marginRight: "10px", color: "#757575", fontSize: "20px" }}
        />
        <Typography
          sx={{
            fontFamily: "Quicksand",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          {address}
        </Typography>
      </Box>

      <Box
        sx={{
          padding: "15px",
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
          background: "#FFFFFF",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          borderRadius: "12px",
        }}
      >
        <Phone sx={{ marginRight: "10px", color: "#757575" }} />
        <Typography
          sx={{
            fontFamily: "Quicksand",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          {phone}
        </Typography>
      </Box>
      <DeleteLocationDialog LocationID={LocationID} />
    </Box>
  );
};

export default LocationOverviewContent;
