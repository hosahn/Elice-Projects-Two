import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

import * as Api from "../api";
import { countryGrades } from "../constants/Country";

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

function WorldMap({ setDescription, setWine, setIsExist, setTooltipContent }) {
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
      <ComposableMap
        data-tip=""
        style={{
          width: "1200px",
          height: "400px",
          border: "1px solid lightgray",
        }}
      >
        <ZoomableGroup zoom={1.2}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={getCountryGrade(geo.properties.NAME)}
                    stroke="#FFF"
                    onClick={() => handleClick(geo.properties.NAME)}
                    style={{
                      default: {
                        outline: "none",
                      },
                      hover: {
                        fill: "#F53",
                        outline: "none",
                        cursor: "pointer",
                      },
                    }}
                    onMouseEnter={() => {
                      const { NAME } = geo.properties;
                      setTooltipContent(`${NAME}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
}

export default memo(WorldMap);
