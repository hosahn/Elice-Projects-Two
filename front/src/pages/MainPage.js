import React, { useState } from "react";
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
import { styled, alpha } from '@mui/material/styles';
import Header from "../components/Header";
import SearchIcon from '@mui/icons-material/Search';
import WineCard from "../components/WineCard";

export default function MainPage() {
  const [priceValue, setPriceValue] = useState([80000, 150000]);
  const [pointsValue, setPointsValue] = useState([80, 100]);

  const handleChange = (e, newValue) => {
    if (e.target.name === "price") {
      setPriceValue(newValue);
    } else {
      setPointsValue(newValue);
    }
  };

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

  return (
    <>
      <Header />
      <Container maxWidth="lg" className="mt-3" component="div" xs="1">
        <Grid container component="div" sx={{ border: "1px solid lightgray", p: 3 }} spacing={2}>
          <Grid item xs="6" component="div" sx={{ mb: 3, borderRight: "1px grey solid" }}>
            <FormLabel sx={{ mr: 2 }}>Tags</FormLabel><br />
            <Tooltip title="sweet 설명" placement="top-end">
              <FormControlLabel control={<Checkbox />} label="sweet" />
            </Tooltip>
            <Tooltip title="dry 설명" placement="top-end">
              <FormControlLabel control={<Checkbox />} label="dry" />
            </Tooltip>
            <Tooltip title="oak 설명" placement="top-end">
              <FormControlLabel control={<Checkbox />} label="oak" />
            </Tooltip>
            <Tooltip title="red 설명" placement="top-end">
              <FormControlLabel control={<Checkbox />} label="red" />
            </Tooltip>
            <Tooltip title="white 설명" placement="top-end">
              <FormControlLabel control={<Checkbox />} label="white" />
            </Tooltip>
            <Tooltip title="rose 설명" placement="top-end">
              <FormControlLabel control={<Checkbox />} label="rose" />
            </Tooltip>
            <Tooltip title="sparkling 설명" placement="top-end">
              <FormControlLabel control={<Checkbox />} label="sparkling" />
            </Tooltip>
            <Tooltip title="for Dessert 설명" placement="top-end">
              <FormControlLabel control={<Checkbox />} label="for Dessert" />
            </Tooltip>
            <Tooltip title="for Meal 설명" placement="top-end">
              <FormControlLabel control={<Checkbox />} label="for Meal" />
            </Tooltip>
          </Grid>

          <Grid item xs="6">
            <Box
              component="div"
              sx={{ mb: 3.5 }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <FormLabel sx={{ mr: 2 }}>Price</FormLabel>
              <Slider
                min={3000}
                max={500000}
                step={1000}
                name="price"
                value={priceValue}
                onChange={handleChange}
                valueLabelDisplay="auto"
                sx={{ width: 300, marginRight: 2 }}
              />
              <Input
                type="text"
                value={priceValue[0]}
                onChange={(e)=>{
                  setPriceValue([Number(e.target.value), priceValue[1]])
                }}
              />
              ~
              <Input
                type="text"
                value={priceValue[1]}
                onChange={(e)=>{
                  setPriceValue([priceValue[0], Number(e.target.value)])
                }}
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
                sx={{ width: 300, marginRight: 2}}
              />
              {pointsValue[0]} ~ {pointsValue[1]} 점
            </Box>
          </Grid>
          <Search sx={{border: "1px black solid", margin: 3}} >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
        </Grid>

        <Grid container xs={12} spacing={1}>
          <Grid item xs={4}>
            <WineCard
              wineInfo={{
                title : "Wanted Zin (원티드 진)",
                url : "/wanted_zin.png",
                grape : "Zinfandel(진판델)",
                location : "Puglia, Italy",
                type: "레드와인",
                description: "바닐라와 초콜릿 향을 느낄 수 있고 끝맛에 라즈베리의 향 또한 느껴집니다. 오크, 체리, 블랙프루트의 존재감이 살아있으며 볼드하고 훌륭한 와인입니다"
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <WineCard
              wineInfo={{
                title : "Wanted Zin (원티드 진)",
                url : "/wanted_zin.png",
                grape : "Zinfandel(진판델)",
                location : "Puglia, Italy",
                type: "레드와인",
                description: "바닐라와 초콜릿 향을 느낄 수 있고 끝맛에 라즈베리의 향 또한 느껴집니다. 오크, 체리, 블랙프루트의 존재감이 살아있으며 볼드하고 훌륭한 와인입니다"
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <WineCard
              wineInfo={{
                title : "Wanted Zin (원티드 진)",
                url : "/wanted_zin.png",
                grape : "Zinfandel(진판델)",
                location : "Puglia, Italy",
                type: "레드와인",
                description: "바닐라와 초콜릿 향을 느낄 수 있고 끝맛에 라즈베리의 향 또한 느껴집니다. 오크, 체리, 블랙프루트의 존재감이 살아있으며 볼드하고 훌륭한 와인입니다"
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
