import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";

export default function LoginPage() {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          style={{ marginBottom: "30px" }}
        >
          Login
        </Typography>
        <TextField label="email" type="email"></TextField>
        <br />
        <TextField label="pw" type="password"></TextField>
        <br />
        <Button variant="outlined">Login</Button>
        <Link to="/user/register" style={{ marginTop: "10px", color: "gray" }}>
          회원이 아니신가요?
        </Link>
      </div>
    </>
  );
}
