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
} from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import Header from "../components/Header";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

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

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

  return (
    <>
      <Header />
      <Container maxWidth="lg" style={{ marginTop: "20px" }} component="div" xs="1">
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
          </Grid>
        </Grid>

        <Search sx={{border: "1px black solid", margin: 3}} >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
      </Container>
    </>
  );
}
