import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { IconButton } from "@mui/material";
import BasicCard from "./card";
import MiddleBar from "./MiddleBar";
import SimpleBox from "./Box";
export default function SimplePaper() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "fit-content",

            display: "flex",
            alignItems: "start",
          },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: "flex", fontWeight: 700 }}
          >
            Invoices
          </Typography>
          <Typography>
            <IconButton sx={{ color: "#3AD09A" }}>
              <CardGiftcardIcon />
            </IconButton>
            What's New
          </Typography>
        </Box>
      </Box>
      <BasicCard />
      <MiddleBar />
      <SimpleBox/>

    </Box>
  );
}
