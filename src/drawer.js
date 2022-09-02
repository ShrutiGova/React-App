import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavBar from "./NavBar";
import logo from "./assests/logo.png";
import background from "./assests/bg.png"
import NestedList from "./list";
import SimplePaper from "./paper";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <NavBar />
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            position:"relative",
            boxSizing: "border-box",
            overflow: "hidden",
            border: "none",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box
          component="img"
          src={logo}
          sx={{
            position: "absolute",
            width: 172,
            height: 44,
            top: "20px",
            margin: "20px",
          }}
        ></Box>
        <Box component="img" src={background} />

        <Toolbar />

        <NestedList />
      </Drawer>
      <Box
        component="main"
        sx={{
          height: "1456px",
          flexGrow: 1,
          bgcolor: "#E5E5E5",
          pt: "24px",
          pl: "24px",
          pr: "15px",
        }}
      >
        <Toolbar />
        <SimplePaper />
      </Box>
    </Box>
  );
}
