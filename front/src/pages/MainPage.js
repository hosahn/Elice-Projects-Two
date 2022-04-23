import React, { useState } from "react";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  FormLabel,
  Slider,
  Tooltip,
} from "@mui/material";

import Header from "../components/Header";

export default function MainPage() {
  const [priceValue, setPriceValue] = useState([20, 60]);
  const [pointsValue, setPointsValue] = useState([80, 100]);

  const handleChange = (e, newValue) => {
    if (e.target.name === "price") {
      setPriceValue(newValue);
    } else {
      setPointsValue(newValue);
    }
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg" style={{ marginTop: "20px" }}>
        <Box component="div" sx={{ border: "1px solid lightgray", p: 3 }}>
          <Box component="div" sx={{ mb: 3 }}>
            <FormLabel sx={{ mr: 2 }}>Tags</FormLabel>
            <Tooltip title="sweet 설명" placement="top-end">
              <FormControlLabel control={<Checkbox />} label="sweet" />
            </Tooltip>
            <Tooltip title="dry 설명" placement="top-end">
              <FormControlLabel control={<Checkbox />} label="dry" />
            </Tooltip>
            <Tooltip title="oak 설명" placement="top-end">
              <FormControlLabel control={<Checkbox />} label="oak" />
            </Tooltip>
          </Box>
          <Box
            component="div"
            sx={{ mb: 3.5 }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <FormLabel sx={{ mr: 2 }}>Price</FormLabel>
            <Slider
              name="price"
              value={priceValue}
              onChange={handleChange}
              valueLabelDisplay="auto"
              sx={{ width: 300 }}
            />
          </Box>
          <Box
            component="div"
            sx={{ mb: 1 }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <FormLabel sx={{ mr: 2 }}>Points</FormLabel>
            <Slider
              name="points"
              value={pointsValue}
              onChange={handleChange}
              valueLabelDisplay="auto"
              sx={{ width: 300 }}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
}
