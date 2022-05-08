import React, { useState, useEffect } from "react";
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
import SearchIcon from "@mui/icons-material/Search";

import * as Api from "../api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WineCard from "../components/WineCard";
import { tagList } from "../constants/Tags";

export default function MainPage() {
  const [priceValue, setPriceValue] = useState([80000, 150000]);
  const [pointsValue, setPointsValue] = useState([80, 100]);
  const [tags, setTags] = useState([]);
  const [wineInfos, setWineInfos] = useState([]);

  useEffect(() => {
    Api.get("main").then(res => {
      setWineInfos(res.data);
    });
  }, []);

  const handleChange = (e, newValue) => {
    if (e.target.name === "price") {
      setPriceValue(newValue);
    } else {
      setPointsValue(newValue);
    }
  };

  const TagHandle = event => {
    const selected = event.target.value;
    setTags(
      tags.includes(selected)
        ? tags.filter(tag => tag !== selected)
        : [...tags, selected],
    );
  };

  const SubmitHandle = () => {
    if (tags.length === 0) {
      alert("최소한 하나 이상의 태그를 선택해주세요");
      return;
    } else {
      const minimumPrice = 3000; // krw 3,000
      const maximumPrice = 500000; // krw 500,000
      const priceInterval = maximumPrice - minimumPrice;

      const searchBody = {
        tags,
        minPrice: Math.round(
          ((priceValue[0] - minimumPrice) / priceInterval) * 100,
        ),
        maxPrice: Math.round(
          ((priceValue[1] - minimumPrice) / priceInterval) * 100,
        ),
        minPoints: pointsValue[0],
        maxPoints: pointsValue[1],
      };

      Api.post("main/search", searchBody).then(res => {
        setWineInfos(res.data);
      });
    }
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg" className="mt-3" component="div" xs="1">
        <Grid
          container
          component="div"
          sx={{ border: "1px solid lightgray", p: 3 }}
          spacing={2}
          style={{ margin: "20px 0" }}
        >
          {/* tag selector */}
          <Grid
            item
            xs={6}
            component="div"
            sx={{ mb: 3, borderRight: "1px grey solid" }}
          >
            <FormGroup onChange={TagHandle} row={true}>
              <FormLabel sx={{ mr: 2 }}>Tags</FormLabel>
              {tagList.map((tagInfo, idx) => (
                <Tooltip
                  key={`tag-info-${idx}`}
                  title={tagInfo.description}
                  placement="top-end"
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label={tagInfo.name}
                    value={tagInfo.name}
                  />
                </Tooltip>
              ))}
            </FormGroup>
          </Grid>

          {/* sliders */}
          <Grid item xs={6}>
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
                onChange={e => {
                  setPriceValue([Number(e.target.value), priceValue[1]]);
                }}
              />
              ~
              <Input
                type="text"
                value={priceValue[1]}
                onChange={e => {
                  setPriceValue([priceValue[0], Number(e.target.value)]);
                }}
              />
            </Box>
            <Box
              component="div"
              sx={{ mb: 1 }}
              style={{
                display: "flex",
                alignItems: "center",
                verticalAlign: "center",
              }}
            >
              <FormLabel sx={{ mr: 2 }}>Points</FormLabel>
              <Slider
                name="points"
                value={pointsValue}
                onChange={handleChange}
                valueLabelDisplay="auto"
                sx={{ width: 300, marginRight: 2 }}
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
              startIcon={<SearchIcon sx={{ color: "#FFF" }} />}
            >
              FIND MY WINES
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          component="div"
          sx={{ p: 3 }}
          spacing={2}
          style={{ margin: "10px 0" }}
        >
          {wineInfos.map((wine, idx) => {
            return (
              <Grid key={`wine-info-${idx}`} item xs={4}>
                <WineCard wineInfo={wine} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
