import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { Box, Container, Typography, Paper, Grid } from "@mui/material";

import * as Api from "../api";
import Header from "../components/Header";
import { countryGrades } from "../constants/Country";
import WineCard from "../components/WineCard";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const convertCountryName = name => {
  switch (name) {
    case "United States of America":
      return "US";
    case "United Kingdom":
      return "England";
    default:
      return name;
  }
};

const getCountryGrade = country => {
  const grade = countryGrades[convertCountryName(country)];

  switch (grade) {
    case 1:
      return "#FDEEF2";
    case 2:
      return "#F8CCD9";
    case 3:
      return "#F198B3";
    case 4:
      return "#E9658D";
    case 5:
      return "#CA2C57";
    default:
      return "#DDD";
  }
};

function MapChart() {
  const [wine, setWine] = useState({});
  const [description, setDescription] = useState("");
  const [isExist, setIsExist] = useState(false);

  const handleClick = async name => {
    try {
      const res = await Api.get(`worldMap/${convertCountryName(name)}`);

      setDescription(res.data.description[0].description);
      setWine(res.data.wine);
      setIsExist(true);
    } catch (err) {
      setIsExist(false);
    }
  };

  return (
    <>
      <Header />
      <Container fixed style={{ textAlign: "center" }}>
        <ComposableMap
          style={{
            width: "1000px",
            height: "400px",
            margin: "20px 0",
            border: "1px solid lightgray",
          }}
        >
          <ZoomableGroup zoom={2}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map(geo => {
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={getCountryGrade(geo.properties.NAME)}
                      stroke="#FFF"
                      onClick={() =>
                        handleClick(
                          geo.properties.NAME,
                          geo.properties.CONTINENT,
                        )
                      }
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>

        {isExist && (
          <Paper
            style={{
              width: "960px",
              height: "120px",
              border: "1px solid lightgray",
              display: "flex",
              alignItems: "center",
              padding: "10px 20px",
              marginLeft: "75px",
            }}
          >
            <Typography variant="subtitle1">{description}</Typography>
          </Paper>
        )}

        {isExist && (
          <Grid container xs={12} spacing={1}>
            {wine.map(wine => {
              return (
                <Grid item xs={4}>
                  <WineCard wineInfo={wine} />
                </Grid>
              );
            })}
          </Grid>
        )}
      </Container>
    </>
  );
}

export default MapChart;
