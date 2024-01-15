import React from "react";
import MovieIcon from "@mui/icons-material/Movie";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
const Navbar = () => {
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <Typography>Movie Rating</Typography>

          <Tabs sx={{ marginLeft: "auto" }} textColor="inherit">
            <Tab label="Search" />
            <Tab label="Home" />
            <Tab label="Login" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
