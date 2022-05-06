import Header from "../components/Header";
import * as React from "react";
import { Grid, Link } from "@mui/material";
import Footer from "../components/Footer";

import { treeData, pieData, barData, lineData } from "./indexData";
import ApexCharts from "apexcharts";
import { Box } from "@mui/system";

export default function IndexPage() {
  setTimeout(() => {
    console.log("rendering charts");
    const treeChart = new ApexCharts(
      document.querySelector("#treeChart"),
      treeData,
    );
    const pieChart = new ApexCharts(
      document.querySelector("#pieChart"),
      pieData,
    );
    const barChart = new ApexCharts(
      document.querySelector("#barChart"),
      barData,
    );
    const lineChart = new ApexCharts(
      document.querySelector("#lineChart"),
      lineData,
    );
    treeChart.render();
    pieChart.render();
    barChart.render();
    lineChart.render();
  }, 1000);

  return (
    <>
      <Header />
      <div className="index-container" />
      <div
        className="index-content"
        style={{
          marginTop: "40vh",
          fontSize: "128px",
          color: "#FFF",
          textAlign: "right",
        }}
      >
        <span style={{ background: "rgba(0, 0, 0, 0.6)" }}>
          당신을 위한 와인,
          <br />
          Drunken Rabbit
        </span>
      </div>

      {/* why we service? */}
      <div
        className="index-content"
        style={{
          height: "1600px",
          background: "rgba(220, 20, 60, 0.7)",
          color: "#FFF",
          textAlign: "center",
        }}
      >
        <span className="title">why we service?</span>
        <Grid container>
          <Grid item xs={12}>
            <Box id="treeChart" sx={{ margin: "40px" }}></Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "auto",
            }}
          >
            <Box id="pieChart"></Box>
          </Grid>
          <Grid item xs={6}>
            <Box id="barChart"></Box>
          </Grid>
          <Grid item xs={6}>
            <Box id="lineChart"></Box>
          </Grid>
        </Grid>
      </div>

      {/* master, 와인 추천해주세요 */}
      <div
        className="index-content"
        style={{
          marginTop: "200px",
          marginBottom: "100px",
          padding: "30px 0",
          height: "auto",
          background: "rgba(220, 20, 60, 0.7)",
          color: "#FFF",
          textAlign: "center",
        }}
      >
        <span className="title">
          <Link
            href="/main"
            sx={{ textDecoration: "underline", color: "#FFF" }}
          >
            Master,
            <br />
            와인 추천해주세요!
          </Link>
        </span>
      </div>

      <Footer />
    </>
  );
}
