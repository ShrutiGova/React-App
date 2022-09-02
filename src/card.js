import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { IconButton } from "@mui/material";
const cardStyle = {
  width: 215,
  height: 152,
  margin: "8px",
  background: "#FFFFFF",
  boxShadow:
    "0px 50px 80px rgba(41, 72, 152, 0.05), 0px 64.81px 46.85px rgba(41, 72, 152, 0.038), 0px 38.52px 25.48px rgba(41, 72, 152, 0.0304), 0px 20px 13px rgba(41, 72, 152, 0.025), 0px 8.15px 6.52px rgba(41, 72, 152, 0.0196), 0px 4px 3.15px rgba(41, 72, 152, 0.012)",
  borderRadius: "6px",
};
const circle1={
      width: 100,
    height: 50,
    background: "rgba(58, 208, 154, 0.15)",
    position: "absolute",
    borderRadius: "57px 57px 0 0",
    transform: "translate(99px, 86px)"
};
const circle2={
    width: 50,
    height: 100,
    background: "rgba(58, 208, 154, 0.15)",
    position: "absolute",
    borderRadius: "57px 0px 0px 57px",
    transform: "translate(148px, 38px)"
}
export default function BasicCard() {
  return (
    <Box component="div" sx={{ display: "flex", gap: "24px" }}>
      <Card sx={cardStyle}>
        <CardContent>
          <Box sx={circle1}></Box>
          <Box sx={circle2}></Box>

          <Typography sx={{ display: "flex", gap: "100px" }}>
            <IconButton>
              <CurrencyExchangeIcon sx={{ color: "#428777" }} />
            </IconButton>
            <Typography component="div" sx={{ color: "#428777" }}>
              +25%
            </Typography>
          </Typography>
          <Typography sx={{ position: "relative", top: "20px" }}>
            <Typography variant="h5" sx={{ mb: 1.5 }}>
              691
            </Typography>
            <Typography variant="body2">Total Invoice</Typography>
          </Typography>
        </CardContent>
      </Card>
      <Card sx={cardStyle}>
        <CardContent>
          <Box sx={circle1}></Box>
          <Box sx={circle2}></Box>

          <Typography sx={{ display: "flex", gap: "100px" }}>
            <IconButton>
              <CurrencyExchangeIcon sx={{ color: "#F0CA43" }} />
            </IconButton>
            <Typography component="div" sx={{ color: "#428777" }}>
              +10%
            </Typography>
          </Typography>
          <Typography sx={{ position: "relative", top: "20px" }}>
            <Typography variant="h5" sx={{ mb: 1.5 }}>
              741
            </Typography>
            <Typography variant="body2">Paid Invoice</Typography>
          </Typography>
        </CardContent>
      </Card>
      <Card sx={cardStyle}>
        <CardContent>
          <Box sx={circle1}></Box>
          <Box sx={circle2}></Box>

          <Typography sx={{ display: "flex", gap: "100px" }}>
            <IconButton sx={{ color: "#EE4444" }}>
              <CurrencyExchangeIcon />
            </IconButton>
            <Typography component="div" sx={{ color: "#EE4444" }}>
              -15%
            </Typography>
          </Typography>
          <Typography sx={{ position: "relative", top: "20px" }}>
            <Typography variant="h5" sx={{ mb: 1.5 }}>
              123
            </Typography>
            <Typography variant="body2">Unpaid Invoice</Typography>
          </Typography>
        </CardContent>
      </Card>
      <Card sx={cardStyle}>
        <CardContent>
          <Box sx={circle1}></Box>
          <Box sx={circle2}></Box>

          <Typography sx={{ display: "flex", gap: "110px" }}>
            <IconButton>
              <CurrencyExchangeIcon sx={{ color: "#9BABC5" }} />
            </IconButton>
            <Typography component="div" sx={{ color: "#EE4444" }}>
              -3%
            </Typography>
          </Typography>
          <Typography sx={{ position: "relative", top: "20px" }}>
            <Typography variant="h5" sx={{ mb: 1.5 }}>
              50
            </Typography>
            <Typography variant="body2">Draft Invoice</Typography>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
