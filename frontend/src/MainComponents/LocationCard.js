import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Home from "@mui/icons-material/Home";
import Room from "@mui/icons-material/Room";
import Store from "@mui/icons-material/Store";
import { Avatar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AlertDialogSlide from "./Dialog";

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

export default function LocationCard(props) {
  const {
    LocationName,
    LocationAddress,
    LocationPhone,
    DeviceCount,
    id,
    reFetch,
    setReFetch,
  } = props;
  const [open, setOpen] = React.useState(false);

  const data = [{ icon: <Room />, label: LocationAddress }];

  return (
    <Box sx={{ display: "flex", border: "1px solid #D4D4D4" }}>
      <>
        <Paper elevation={0} sx={{ background: "#FBFBFB", flexGrow: 1 }}>
          <FireNav component="nav" disablePadding>
            <ListItem href="#customized-list">
              <ListItemIcon sx={{ fontSize: 20 }}>
                <Store sx={{ color: "orange" }} />
              </ListItemIcon>
              <ListItemText
                primary={LocationName}
                primaryTypographyProps={{
                  marginRight: "20px",
                  fontFamily: "Quicksand-Medium",
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
              />
              <Avatar
                sx={{
                  background: "green",
                  width: "25px",
                  height: "25px",
                  left: 7,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Quicksand",
                    fontSize: "15px",
                    color: "white",
                  }}
                >
                  {DeviceCount}
                </Typography>
              </Avatar>
            </ListItem>
            <Divider />
            <ListItem component="div" disablePadding>
              <ListItemButton
                sx={{ height: 56 }}
                component={Link}
                to={`/LocationOverview/${id}`}
              >
                <ListItemIcon>
                  <Home color="black" />
                </ListItemIcon>
                <ListItemText
                  primary="Location Overview"
                  primaryTypographyProps={{
                    color: "black",
                    fontWeight: "medium",
                    variant: "body2",
                    fontFamily: " Quicksand",
                  }}
                />
              </ListItemButton>
              <Tooltip title="Edit Location Details">
                <AlertDialogSlide
                  LocationId={id}
                  reFetch={reFetch}
                  setReFetch={setReFetch}
                />
              </Tooltip>
            </ListItem>
            <Divider />
            <Box
              sx={{
                bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                pb: open ? 2 : 0,
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  "&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary={LocationPhone}
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontFamily: "Quicksand",
                    lineHeight: "20px",
                    mb: "5px",
                  }}
                  secondary="Click here to see Location Address"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontFamily: "Quicksand",
                    fontSize: 12,
                    lineHeight: "16px",
                    color: open ? "rgba(0,0,0,0)" : "#B1B1B1",
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transform: open ? "rotate(-180deg)" : "rotate(0)",
                    transition: "0.2s",
                  }}
                />
              </ListItemButton>
              {open &&
                data.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: "black" }}
                  >
                    <ListItemIcon sx={{ color: "inherit" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                      }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </FireNav>
        </Paper>
      </>
    </Box>
  );
}
