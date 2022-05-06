import Header from "../components/Header";
import * as React from "react";
import ReactDOM from "react-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function IndexPage() {
  return (
    <>
      <Header />
      <div className="index-content" />
      <div className="index-container" />
    </>
  );
}
