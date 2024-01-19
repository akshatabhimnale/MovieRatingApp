import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, FormGroup, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Login() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", flexDirection: "row" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          "& > :not(style)": {
            width: 600,
            height: 682,
          },
        }}
      >
        <Paper elevation={3} style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img src="/img/Academy_Award_trophy.png"></img>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <img src="/img/best-film.webp" style={{ width: 225 }} />
            </div>

            <FormGroup style={{ flexDirection: "column" }}>
              <h1>Hello Admin</h1>
              <h3>Login to manage your account</h3>
              <TextField
                required
                id="outlined-required"
                label="Email Id"
                style={{ width: 350 }}
              />
              <TextField
                required
                id="outlined-required"
                label="Password"
                type="password"
                style={{ width: 350 }}
              />
              <FormControlLabel control={<Checkbox />} label="Remember me" />
            </FormGroup>
            <div>
              <Button
                variant="contained"
                style={{ backgroundColor: "black", width: 350 }}
              >
                Login
              </Button>
            </div>
          </div>
        </Paper>
      </Box>
    </Box>
  );
}
