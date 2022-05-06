import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { UserStateContext, DispatchContext } from "../App";

export default function Header() {
  const userState = useContext(UserStateContext);
  const dispatch = useContext(DispatchContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const isLogin = !!userState.user;

  const logout = () => {
    sessionStorage.removeItem("userToken");
    dispatch({ type: "LOGOUT" });
  };

  const handleMenuClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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

          <Button variant="text" color="primary" xs="1">
            <Link
              to="/world_map"
              style={{ textDecoration: "none", color: "#FFFFFF" }}
            >
              Wine Map
            </Link>
          </Button>
          <Button variant="text" color="primary" xs="1">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "#FFFFFF" }}
            >
              About Us
            </Link>
          </Button>
          {!isLogin && (
            <Button variant="text" color="primary" xs="1">
              <Link
                to="/user/login"
                style={{ textDecoration: "none", color: "#FFFFFF" }}
              >
                login
              </Link>
            </Button>
          )}
          {isLogin && (
            <div>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuClick}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem style={{ fontSize: "14px" }}>
                  <Link
                    to="/my_page"
                    style={{ textDecoration: "none", color: "#000000" }}
                  >
                    My Page
                  </Link>
                </MenuItem>
                <MenuItem style={{ fontSize: "14px" }}>
                  <Link
                    to="/main"
                    style={{ textDecoration: "none", color: "#000000" }}
                    onClick={logout}
                  >
                    Logout
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
