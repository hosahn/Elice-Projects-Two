import React from "react";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  FormLabel,
  Grid,
  Slider,
  Tooltip,
  Input,
} from "@mui/material";
import Header from "../components/Header";
import Cardlist from "../components/Cardlist";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <Cardlist />
      <div>AboutPage</div>
      <Footer />
    </>
  );
}
