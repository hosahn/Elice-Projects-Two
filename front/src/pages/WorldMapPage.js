import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { Box, Typography } from "@mui/material";

import * as Api from "../api";
import Header from "../components/Header";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const countryGrades = {
  US: 5,
  France: 4,
  Italy: 4,
  Portugal: 4,
  Chile: 3,
  Spain: 3,
  "New Zealand": 3,
  Argentina: 3,
  Australia: 3,
  Austria: 3,
  "South Africa": 3,
  Israel: 3,
  Canada: 2,
  Germany: 2,
  Bulgaria: 2,
  Greece: 2,
  Lebanon: 1,
  Hungary: 1,
  Slovenia: 1,
  Moldova: 1,
  Turkey: 1,
  Uruguay: 1,
  Romania: 1,
  Georgia: 1,
  Mexico: 1,
  England: 1,
  Morocco: 1,
  Croatia: 1,
  Switzerland: 1,
};

function MapChart() {
  const [wine, setWine] = useState({});
  const [description, setDescription] = useState("");
  const [isExist, setIsExist] = useState(false);

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

  const handleClick = async name => {
    try {
      const res = await Api.get(`worldMap/${convertCountryName(name)}`);
      console.log(res.data.wine);
      setDescription(res.data?.description[0]?.description);
      setWine(res.data?.wine);
      setIsExist(true);
    } catch (err) {
      console.log(err);
      //isExist false로 체크.
      //!isExist일 경우에만 description과 와인 카드 보여주기.
    }
  };

  const getCountryGrade = country => {
    const grade = countryGrades[convertCountryName(country)];
    switch (grade) {
      case 1:
        return "green";
      case 2:
        return "yellow";
      case 3:
        return "blue";
      case 4:
        return "orange";
      case 5:
        return "red";
      default:
        return "#DDD";
    }
  };

  return (
    <>
      <Header />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ComposableMap
          style={{
            width: "1000px",
            maxHeight: "400px",
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
          <Box
            style={{
              width: "960px",
              minHeight: "120px",
              border: "1px solid lightgray",
              display: "flex",
              alignItems: "center",
              padding: "10px 20px",
            }}
          >
            <Typography variant="subtitle1">{description}</Typography>
          </Box>
        )}
      </Box>
    </>
  );
}

export default MapChart;
