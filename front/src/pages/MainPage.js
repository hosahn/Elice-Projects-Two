import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormLabel,
  Grid,
  Slider,
  Tooltip,
  Input,
  FormGroup,
} from "@mui/material";
import Header from "../components/Header";
import SearchIcon from '@mui/icons-material/Search';
import WineCard from "../components/WineCard";

import * as Api from "../api"

export default function MainPage() {
  const [priceValue, setPriceValue] = useState([80000, 150000]);
  const [pointsValue, setPointsValue] = useState([80, 100]);
  const [tags, setTags] = useState([]);
  const [wineInfos, setWineInfos] = useState([]);

  const handleChange = (e, newValue) => {
    if (e.target.name === "price") {
      setPriceValue(newValue);
    } else {
      setPointsValue(newValue);
    }
  };

const TagHandle = (event) => {
  const selected = event.target.value
  setTags(tags.includes(selected) ? tags.filter(tag=>tag!=selected) : [...tags, selected])
}

const SubmitHandle = () => {
  const minimumPrice = 3000 // krw 3,000
  const maximumPrice = 500000 // krw 500,000
  const priceInterval = maximumPrice - minimumPrice

  const searchBody = {
    tags,
    minPrice: Math.round(((priceValue[0] - minimumPrice)/priceInterval) * 100),
    maxPrice: Math.round(((priceValue[1] - minimumPrice)/priceInterval) * 100),
    minPoints: pointsValue[0],
    maxPoints: pointsValue[1],
  }

  console.log(searchBody)

  Api.post("main/search", searchBody)
    .then(res => {
      setWineInfos(res.data)
      console.log(res.data)
    })
}

  return (
    <>
      <Header />
      <Container maxWidth="lg" className="mt-3" component="div" xs="1">
        <Grid container component="div" sx={{ border: "1px solid lightgray", p: 3 }} spacing={2}>
          {/* tag selector */}
          <Grid item xs="6" component="div" sx={{ mb: 3, borderRight: "1px grey solid" }}>
            <FormGroup onChange={TagHandle} row={true}>
              <FormLabel sx={{ mr: 2 }}>Tags</FormLabel>
              <Tooltip title="sweet 설명" placement="top-end">
                <FormControlLabel control={<Checkbox />} label="sweet" value="sweet" />
              </Tooltip>
              <Tooltip title="dry 설명" placement="top-end">
                <FormControlLabel control={<Checkbox />} label="dry" value="dry" />
              </Tooltip>
              <Tooltip title="oak 설명" placement="top-end">
                <FormControlLabel control={<Checkbox />} label="oak" value="oak" />
              </Tooltip>
              <Tooltip title="red 설명" placement="top-end">
                <FormControlLabel control={<Checkbox />} label="red" value="red" />
              </Tooltip>
              <Tooltip title="white 설명" placement="top-end">
                <FormControlLabel control={<Checkbox />} label="white" value="white" />
              </Tooltip>
              <Tooltip title="rose 설명" placement="top-end">
                <FormControlLabel control={<Checkbox />} label="rose" value="rose" />
              </Tooltip>
              <Tooltip title="sparkling 설명" placement="top-end">
                <FormControlLabel control={<Checkbox />} label="sparkling" value="sparkling" />
              </Tooltip>
              <Tooltip title="for Dessert 설명" placement="top-end">
                <FormControlLabel control={<Checkbox />} label="for Dessert"  value="dessert" />
              </Tooltip>
              <Tooltip title="for Meal 설명" placement="top-end">
                <FormControlLabel control={<Checkbox />} label="for Meal" value="meal" />
              </Tooltip>
            </FormGroup>
          </Grid>

          {/* sliders */}
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
              style={{ display: "flex", alignItems: "center", verticalAlign: "center"}}
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

          {/* submit button */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="error" // not error, just for color
              onClick={SubmitHandle}
              startIcon={<SearchIcon sx={{color: "#FFF"}}/>}
            >
              FIND MY WINES
            </Button>
          </Grid>
        </Grid>

        <Grid container xs={12} spacing={1}>
          {
            wineInfos.map(wine => {
              return (
                <Grid item xs={4}>
                  <WineCard
                  wineInfo={{
                    title : wine.title,
                    url : wine.image,
                    location : wine.region_1,
                    type: wine.keyword.join(" "),
                    description: wine.description,
                  }}
                />
              </Grid>
            )
            })
          }
        </Grid>
      </Container>
    </>
  );
}
