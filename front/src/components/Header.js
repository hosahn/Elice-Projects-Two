import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export default function Header() {
  const [value, setValue] = useState("");

  const handleClick = e => {
    setValue(e.target.innerText);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "#CA2C57" }}>
          <Typography sx={{ flexGrow: 1 }}>
            <Link to="/main">
              <img
                src={process.env.PUBLIC_URL + "/logo512.png"}
                alt="logo"
                style={{ height: "75px" }}
              />
            </Link>
          </Typography>

          <Button variant="text" color="primary" onClick={handleClick} xs="1">
            <Link
              to="/world_map"
              style={{ textDecoration: "none", color: "#FFFFFF" }}
            >
              Wine Map
            </Link>
          </Button>
          <Button variant="text" color="primary" onClick={handleClick} xs="1">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "#FFFFFF" }}
            >
              About Us
            </Link>
          </Button>
          <Button variant="text" color="primary" onClick={handleClick} xs="1">
            <Link
              to="/user/login"
              style={{ textDecoration: "none", color: "#FFFFFF" }}
            >
              login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
