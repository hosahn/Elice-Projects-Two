import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";

import * as Api from "../api";
import Header from "../components/Header";
import Alert from "../components/Alert";
import { DispatchContext } from "../App";

import "./index.css"

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);

  const [user, setUser] = useState({ email: "", password: "" });
  const [alert, setAlert] = useState({
    isOpen: false,
    title: "",
    message: "",
  });

  const handleAlertClose = () => {
    setAlert({
      isOpen: false,
      title: "",
      message: "",
    });
  };

  const handleValueChange = (name, value) => {
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async e => {
    e.preventDefault();

    try {
      const { data } = await Api.post("user/login", user);
      const jwtToken = data.token;
      sessionStorage.setItem("userToken", jwtToken);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: data,
      });

      navigate("/main");
    } catch (err) {
      setAlert({
        isOpen: true,
        title: "Error",
        message: err?.response?.data,
      });
    }
  };

  return (
    <>
      <Header />
      {alert.isOpen && (
        <Alert
          isOpen={alert.isOpen}
          title={alert.title}
          message={alert.message}
          handleAlertClose={handleAlertClose}
        />
      )}
      <div
        className="signin-container"
        style={{
          backgroundImage: "url(" + process.env.PUBLIC_URL + "/wine-background.jpg)",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onSubmit={handleFormSubmit}
        >
          <Typography
            variant="h4"
            component="div"
            style={{ marginBottom: "30px" }}
          >
            Login
          </Typography>
          <TextField
            label="email"
            type="email"
            onChange={e => handleValueChange("email", e.target.value)}
          ></TextField>
          <br />
          <TextField
            label="pw"
            type="password"
            onChange={e => handleValueChange("password", e.target.value)}
          ></TextField>
          <br />
          <Button variant="outlined" type="submit">
            Login
          </Button>
          <Link to="/user/register" style={{ marginTop: "10px", color: "gray" }}>
            회원이 아니신가요?
          </Link>
        </form>
      </div>
    </>
  );
}
