import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import logo from "../logo.svg";

export default function Header() {
  const [value, setValue] = useState("");

  const handleClick = e => {
    setValue(e.target.innerText);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <a href="/">
            <img
              src={logo}
              alt="logo"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hello
          </Typography>

          <Button variant="text" color="primary" onClick={handleClick}>
            <Link
              to="/main"
              style={{ textDecoration: "none", color: "#FFFFFF" }}
            >
              HOME
            </Link>
          </Button>
          <Button variant="text" color="primary" onClick={handleClick}>
            <Link
              to="/world_map"
              style={{ textDecoration: "none", color: "#FFFFFF" }}
            >
              World Map
            </Link>
          </Button>
          <Button variant="text" color="primary" onClick={handleClick}>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "#FFFFFF" }}
            >
              About Us
            </Link>
          </Button>
          <Button variant="text" color="primary" onClick={handleClick}>
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
