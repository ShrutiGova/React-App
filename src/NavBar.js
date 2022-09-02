import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import profile from "./assests/profile.png";
import ListItemText from "@mui/material/ListItemText";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Badge from "@mui/material/Badge";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        
        sx={{
          background: "white",
          color: "black",
          width: 1,
          height: 75,
          
          gap: "391px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              height: 45,
              width: 44,
              borderRadius: "40px",
              background: "#ffffff1c",
              boxShadow: "1px 3px 2px 0px #726c6c3d",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="General Search"
                variant="standard"
              />
            </Box>
          </Typography>
        </Toolbar>
        <Toolbar sx={{ gap: "10px" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              height: 45,
              width: 44,
              borderRadius: "40px",
              background: "#ffffff1c",
              boxShadow: "1px 3px 2px 0px #726c6c3d",
            }}
          >
            <LightModeOutlinedIcon />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              height: 45,
              width: 44,
              borderRadius: "40px",
              background: "#ffffff1c",
              boxShadow: "1px 3px 2px 0px #726c6c3d",
            }}
          >
            <Badge variant="dot" color="success">
              <NotificationsOutlinedIcon />
            </Badge>
          </IconButton>
          <Avatar alt="Travis Howard" src={profile} />
          <ListItemText primary="Jane Cooper" secondary="UI Designer" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
