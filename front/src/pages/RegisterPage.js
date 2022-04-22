import React from "react";
import { Button, TextField, Typography } from "@mui/material";

import Header from "../components/Header";

export default function RegisterPage() {
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
          Register
        </Typography>
        <TextField label="email" type="email"></TextField>
        <br />
        <TextField label="name" type="text"></TextField>
        <br />
        <TextField label="pw" type="password"></TextField>
        <br />
        <TextField label="confirm pw" type="password"></TextField>
        <br />
        <Button variant="outlined">Register</Button>
      </div>
    </>
  );
}
