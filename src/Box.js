import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import BasicTable from "./table";

import Select from "@mui/material/Select";

export default function SimpleBox() {
  return (
    <Box sx={{ background: "#FFFFFF", height: "800px", borderRadius: "8px" }}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ p: 4 }}>
          <Typography variant="h6">Latest Invoice</Typography>
        </Box>
        <Box sx={{ display: "flex", p: 3 }}>
          <FormControl sx={{ m: "4px", minWidth: 161 }} size="small">
            <InputLabel id="demo-select-small" size="small">
              All Customers
            </InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              label="All Customers"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: "4px", minWidth: 161 }} size="small">
            <InputLabel id="demo-select-small">All Statuses</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              label="All Customers"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: "4px", minWidth: 118 }} size="small">
            <InputLabel id="demo-select-small">From</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              label="All Customers"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: "4px", minWidth: 118 }} size="small">
            <InputLabel id="demo-select-small">To</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              label="All Customers"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Box
            sx={{
              display: "flex",
              border: "1px solid #80808073",
              borderRadius: "4px",
              width: 161,
              height: 40,
              margin: "4px",
              
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <FormControl sx={{ m: "4px", minWidth: 161 }} size="small">
              <InputLabel id="demo-select-small">Enter Invoice#</InputLabel>{" "}
              <IconButton
                sx={{ position: "relative", left: "116px", width: "43px" }}
              >
                <SearchIcon />
              </IconButton>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <BasicTable />
      
    </Box>
  );
}
