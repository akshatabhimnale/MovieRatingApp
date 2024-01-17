import React from "react";
//import MovieIcon from "@mui/icons-material/Movie";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";

import { MenuBook, MenuOpen } from "@mui/icons-material";
import { GridMenuIcon } from "@mui/x-data-grid";
const Navbar = () => {
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <GridMenuIcon />
          <Typography> Movie Rating</Typography>
          <Tabs sx={{ marginLeft: "auto" }} textColor="inherit">
            <Tab label="Search" />
            <Tab label="Home" />
            <Tab label="Logout" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
