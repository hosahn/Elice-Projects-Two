import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import { UserStateContext, DispatchContext } from "../App";
import logo from "../logo.svg";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const userState = useContext(UserStateContext);
  const dispatch = useContext(DispatchContext);

  const headerText = {
    "/": "WELCOME",
    "/main": "MAIN",
    "/world_map": "WORLD MAP",
    "/about": "ABOUT US",
    "/user/login": "LOGIN",
  };

  const isLogin = !!userState.user;

  const logout = () => {
    sessionStorage.removeItem("userToken");
    dispatch({ type: "LOGOUT" });
    navigate("/");
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
            {headerText[location.pathname]}
          </Typography>

          <Button
            variant="text"
            color="inherit"
            onClick={() => navigate("/main")}
          >
            HOME
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => navigate("/world_map")}
          >
            World Map
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => navigate("/about")}
          >
            About us
          </Button>
          {!isLogin && (
            <Button
              variant="text"
              color="inherit"
              onClick={() => navigate("/user/login")}
            >
              Login
            </Button>
          )}
          {isLogin && (
            <Button variant="text" color="inherit" onClick={logout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
