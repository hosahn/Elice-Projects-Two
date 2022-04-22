import React from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

function MapChart() {
  const handleClick = e => {
    console.log(e.target);
  };

  return (
    <ComposableMap style={{ maxWidth: "1000px" }}>
      <ZoomableGroup zoom={1}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#DDD"
                stroke="#FFF"
                onClick={handleClick}
              />
            ))
          }
        </Geographies>
        <Marker coordinates={[-74.006, 40.7128]}>
          <circle r={4} fill="#F53" />
        </Marker>
      </ZoomableGroup>
    </ComposableMap>
  );
}

export default MapChart;
