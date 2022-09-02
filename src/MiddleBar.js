import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CachedIcon from "@mui/icons-material/Cached";
export default function MiddleBar() {
  return (
    <Box sx={{ flexGrow: 1, p: "16px" }}>
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(90.73deg, #3AD09A 0%, #2B9770 100%)",
          boxShadow:
            "0px 50px 80px rgba(41, 72, 152, 0.05), 0px 64.81px 46.85px rgba(41, 72, 152, 0.038), 0px 38.52px 25.48px rgba(41, 72, 152, 0.0304), 0px 20px 13px rgba(41, 72, 152, 0.025), 0px 8.15px 6.52px rgba(41, 72, 152, 0.0196), 0px 4px 3.15px rgba(41, 72, 152, 0.012)",
          borderRadius: "10px",
          width: 967,
          height: 128,
        }}
      >
        <Box
          sx={{
            width: 114,
            height: 100,
            position: "absolute",
            background: "transparent",
            borderRadius: "50%",
            transform: "translate(848px, 13px)",
            boxShadow: "0px 0px 0px 1px white",
          }}
        ></Box>
        <Box
          sx={{
            width: 133,
            height: 127,
            position: "absolute",
            background: "transparent",
            borderRadius: "50%",
            transform: "translate(823px, 1px)",
            boxShadow: "-1px 0px 0px 0px white",
          }}
        ></Box>
        <Box
          sx={{
            width: 112,
            height: 127,
            position: "absolute",
            background: "transparent",
            borderRadius: "47%",
            transform: "translate(767px, 1px)",
            boxShadow: "-1px 0px 0px 0px white",
          }}
        ></Box>
        <Box
          sx={{
            width: 94,
            height: 131,
            position: "absolute",
            background: "transparent",
            borderRadius: "47%",
            transform: "translate(739px, 1px)",
            boxShadow: "-1px 0px 0px 0px white",
          }}
        ></Box>
        <Box
          sx={{
            width: 128,
            height: 127,
            position: "absolute",
            background: "transparent",
            borderRadius: "47%",
            transform: "translate(794px, 1px)",
            boxShadow: "-1px 0px 0px 0px white",
          }}
        ></Box>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ top: "17px", position: "relative" }}>
            <Typography>Orderdue</Typography>
            <Typography
              variant="h4"
              sx={{
                display: "flex",
                position: "relative",
                left: "-14px",
                top: "9px",
              }}
            >
              <IconButton>
                <CurrencyRupeeIcon sx={{ color: "white" }} />
              </IconButton>
              3,648,528.34
              <Typography size="small">INR</Typography>
            </Typography>
            <Typography>
              Last update 10 minutes ago.
              <IconButton>
                <CachedIcon sx={{ color: "white" }} />
              </IconButton>
            </Typography>
          </Box>
          <Box>
            <Typography>Due within next 30 days</Typography>
            <Typography
              variant="h4"
              sx={{
                display: "flex",
                position: "relative",
                left: "-14px",
                top: "9px",
              }}
            >
              <IconButton>
                <CurrencyRupeeIcon sx={{ color: "white" }} />
              </IconButton>
              1,115,711.43
              <Typography size="small">INR</Typography>
            </Typography>
          </Box>
          <Box>
            {" "}
            <Typography>Average time to get paid</Typography>
            <Typography>5 Days</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
