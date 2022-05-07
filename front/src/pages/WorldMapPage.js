import React, { useState } from "react";
import { Container, Typography, Paper, Grid } from "@mui/material";
import ReactTooltip from "react-tooltip";

import Header from "../components/Header";
import WineCard from "../components/WineCard";
import Footer from "../components/Footer";
import WorldMap from "../components/WorldMap";

function MapChart() {
  const [wine, setWine] = useState({});
  const [description, setDescription] = useState("");
  const [isExist, setIsExist] = useState(false);
  const [content, setContent] = useState("");

  return (
    <>
      <Header />
      <Container
        maxWidth="lg"
        className="mt-3"
        component="div"
        xs="1"
        style={{ minHeight: "75vh" }}
      >
        <div style={{ margin: "20px 0" }}>
          <WorldMap
            setWine={setWine}
            setDescription={setDescription}
            setIsExist={setIsExist}
            setTooltipContent={setContent}
          />
          <ReactTooltip place="top" type="dark" effect="float">
            {content}
          </ReactTooltip>
        </div>

        {isExist && (
          <Paper
            style={{
              width: "960px",
              height: "120px",
              border: "1px solid lightgray",
              display: "flex",
              alignItems: "center",
              padding: "10px 20px",
              margin: "0 0 20px 75px",
            }}
          >
            <Typography variant="subtitle1">{description}</Typography>
          </Paper>
        )}

        {isExist && (
          <Grid
            container
            component="div"
            sx={{ p: 3 }}
            spacing={2}
            style={{ margin: "10px 0" }}
          >
            {wine.map((wine, idx) => {
              return (
                <Grid key={`world-wine-${idx}`} item xs={4}>
                  <WineCard wineInfo={wine} />
                </Grid>
              );
            })}
          </Grid>
        )}
      </Container>

      <Footer />
    </>
  );
}

export default MapChart;
