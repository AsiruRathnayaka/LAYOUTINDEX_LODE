import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  Avatar,
} from "@mui/material";
import AddButton from "../../MainComponents/AddButton";
import { Stack } from "@mui/system";
import Add from "@mui/icons-material/Add";
import UpdateDeviceDialog from "./UpdateDeviceDialog";
import DeleteDeviceDialog from "./DeleteDeviceDialog";

const LocationOverviewBody = (props) => {
  const { Devices, LocationID, reFetch, setReFetch } = props;

  return (
    <Box sx={{ width: "40%", marginTop: "20px" }}>
      <List
        sx={{
          borderRadius: "12px",
          background: "#FFFFFF",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Stack
          direction="row"
          sx={{ flexGrow: 1, alignItems: "center", paddingX: "10px" }}
        >
          <Typography
            variant="h4"
            sx={{
              flexGrow: 1,
              fontFamily: "Quicksand-Bold",
              textAlign: "center",
              margin: 1,
              fontSize: "16px",
            }}
          >
            DEVICES
          </Typography>
          <AddButton to={`/AddDevice/${LocationID}`} icon={<Add />} />
        </Stack>

        {Devices &&
          Devices.map(({ _id, serialNumber, type, image, status }) => (
            <ListItem
              sx={{
                margin: "10px",
                padding: "20px",
                background: "#FBFBFB",
                width: "96%",
                borderRadius: "12px",
              }}
              key={_id}
              disablePadding
            >
              <ListItemAvatar>
                <Avatar
                  sx={{ width: "80px", height: "80px" }}
                  alt={serialNumber}
                  src={image}
                />
              </ListItemAvatar>
              <ListItemText sx={{ padding: "10px" }}>
                <Typography sx={{ fontFamily: "Quicksand-SemiBold" }}>
                  {serialNumber}
                </Typography>
                <Typography sx={{ fontFamily: "Quicksand" }}>{type}</Typography>
                <Typography sx={{ fontFamily: "Quicksand" }}>
                  {status ? "Active" : "Inactive"}
                </Typography>
              </ListItemText>

              <ListItemSecondaryAction>
                <UpdateDeviceDialog
                  DeviceId={_id}
                  reFetch={reFetch}
                  setReFetch={setReFetch}
                />
                <DeleteDeviceDialog
                  DeviceId={_id}
                  LocationID={LocationID}
                  reFetch={reFetch}
                  setReFetch={setReFetch}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default LocationOverviewBody;
