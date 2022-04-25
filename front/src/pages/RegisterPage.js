import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";

import * as Api from "../api";
import Header from "../components/Header";
import Alert from "../components/Alert";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    rePassword: "",
  });

  const [alert, setAlert] = useState({
    isOpen: false,
    title: "",
    message: "",
  });

  const handleValueChange = (name, value) => {
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleAlertClose = () => {
    if (alert.title === "Success") {
      navigate("/user/login");
    } else {
      setAlert({
        isOpen: false,
        title: "",
        message: "",
      });
    }
  };

  const handleFormSubmit = async e => {
    e.preventDefault();

    try {
      await Api.post("user/register", user);
      setAlert({
        isOpen: true,
        title: "Success",
        message: "회원가입에 성공했습니다.",
      });
    } catch (err) {
      setAlert({
        isOpen: true,
        title: "Error",
        message: err.response.data,
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
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
        onSubmit={handleFormSubmit}
      >
        <Typography
          variant="h4"
          component="div"
          style={{ marginBottom: "30px" }}
        >
          Register
        </Typography>
        <TextField
          label="email"
          type="email"
          onChange={e => handleValueChange("email", e.target.value)}
        ></TextField>
        <br />
        <TextField
          label="name"
          type="text"
          onChange={e => handleValueChange("name", e.target.value)}
        ></TextField>
        <br />
        <TextField
          label="pw"
          type="password"
          onChange={e => handleValueChange("password", e.target.value)}
        ></TextField>
        <br />
        <TextField
          label="confirm pw"
          type="password"
          onChange={e => handleValueChange("rePassword", e.target.value)}
        ></TextField>
        <br />
        <Button variant="outlined" type="submit">
          Register
        </Button>
      </form>
    </>
  );
}
