import Header from "../components/Header";
import * as React from "react";
import { Grid, Link } from "@mui/material";
import Footer from "../components/Footer";

import { treeData, pieData, barData, lineData } from "./indexData";
import ApexCharts from "apexcharts";
import { Box } from "@mui/system";

export default function IndexPage() {
  const isRendered = React.useRef(false);
  React.useEffect(() => {
    if (!isRendered.current) {
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
      isRendered.current = true;
    }
  }, []);

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
          height: "1300px",
          background: "rgba(220, 20, 60, 0.7)",
          color: "#FFF",
          textAlign: "center",
        }}
      >
        <span className="title">why we service?</span>
        <Grid
          container
          sx={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
          rowSpacing={3}
        >
          <Grid item xs={12}>
            <span className="subtitle">너무 많은 와인생산국</span>
          </Grid>
          <Grid item xs={12}>
            <Box id="treeChart"></Box>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "auto",
              background: "rgba(255, 255, 255, 0.5)",
              borderRadius: "30px",
            }}
          >
            <Box id="pieChart"></Box>
          </Grid>
          <Grid item xs={6}>
            <span className="subtitle">몰려있는 가격대</span>
          </Grid>
          <Grid item xs={4}>
            <span className="subtitle">
              높은 와인소비량,
              <br />
              늘어나는 와인소비량
            </span>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              background: "rgba(255, 255, 255, 0.5)",
              borderRadius: "30px",
            }}
          >
            <Box id="barChart"></Box>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              background: "rgba(255, 255, 255, 0.5)",
              borderRadius: "30px",
            }}
          >
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
