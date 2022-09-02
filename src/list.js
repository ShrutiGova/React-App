import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import Divider from "@mui/material/Divider";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import salesIcon from "./assests/sales.png";
import accountingIcon from "./assests/accounting.png";
import Badge from "@mui/material/Badge";

import payrollIcon from "./assests/payroll.png";
import integrationIcon from "./assests/integration.png";

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          pt: "0px",
          mt: "-164px",
          position: "initial",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton>
          <ListItemIcon>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton
          onClick={handleClick}
          sx={{ background: "#3AD09A", borderRadius: "6px" }}
        >
          <ListItemIcon>
            <Box component="img" src={salesIcon}></Box>
          </ListItemIcon>
          <ListItemText primary="Sales" sx={{ color: "white" }} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 7, pb: 0 }}>
              <ListItemText secondary="Estimates" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 7, pb: 0 }}>
              <ListItemText
                sx={{
                  borderLeft: "5px solid #3AD09A",
                  pl: "20px",
                  borderRadius: "2px",
                  color: "#3AD09A",
                }}
              >
                Invoices
              </ListItemText>
            </ListItemButton>
            <ListItemButton sx={{ pl: 7, pb: 0 }}>
              <ListItemText secondary="Recurrying Invoices" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 7, pb: 0 }}>
              <ListItemText secondary="Customers Statements" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 7, pb: 0 }}>
              <ListItemText secondary="Customer" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 7, pb: 0 }}>
              <ListItemText secondary="Product & services" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton>
          <ListItemIcon>
            <Badge color="primary" variant="dot">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary="Purchases" />
          <ExpandMore />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Box component="img" src={accountingIcon}></Box>
          </ListItemIcon>
          <ListItemText primary="Accounting" />
          <ExpandMore />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Box component="img" src={payrollIcon}></Box>
          </ListItemIcon>
          <ListItemText primary="Payroll" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <BarChartOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>
      </List>
      <Divider variant="middle" />
      <List>
        <ListItemButton>
          <ListItemIcon>
            <Box component="img" src={integrationIcon}></Box>
          </ListItemIcon>
          <ListItemText primary="Integrations" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <SettingsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <LogoutOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </List>
  );
}
