import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Tab(props) {
  const [selectedTab, setSelectedTab] = React.useState(props.tabName);

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const Icon = props.tabIcon;

  return (
    <List sx={{width: "80%"}}>
      <ListItemButton
  component={Link}
  to="/Dashboard"
  sx={{ borderRadius: "50px" }}
  selected={selectedTab === props.tabName}
  onClick={() => handleTabClick(props.tabName)}
  disableRipple // add this prop
>

        <ListItemAvatar>
          <Avatar sx={{ background: "black", width: "25px", height: "25px" }}>
            <Icon sx={{ fontSize: 18 }} />
          </Avatar >
        </ListItemAvatar>
        <Typography sx={{ fontFamily: "Quicksand" }} variant="body1" component="div">
          {props.tabLabel}
        </Typography>
      </ListItemButton>
    </List>
  );
}
