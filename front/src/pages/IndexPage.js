import * as React from "react";
import { Button, Grid, Link } from "@mui/material";
import { Box } from "@mui/system";
import ApexCharts from "apexcharts";

import "../styles/index.css";
import { treeData, pieData, barData, lineData } from "../constants/GraphDatas";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function IndexPage() {
  const isRendered = React.useRef(false);

  React.useEffect(() => {
    if (!isRendered.current) {
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
        className="index-content index-title"
        style={{
          marginTop: "50vh",
          fontSize: "70px",
          color: "#FFF",
          textAlign: "right",
        }}
      >
        <span
          style={{
            marginBottom: "3px",
            display: "inline-block",
            textShadow: "4px 2px 2px black",
          }}
        >
          당신을 위한 와인,
          <br />
          Drunken Rabbit
        </span>
      </div>

      {/* why we service? */}
      <div
        className="index-content"
        style={{
          height: "auto",
          background: "rgba(220, 20, 60, 0.7)",
          color: "#FFF",
          textAlign: "center",
        }}
      >
        <span className="title">why we service?</span>
        <Grid
          container
          sx={{
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
            <Box id="treeChart" style={{ color: "#000" }}></Box>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "6px 0 20px 0",
            }}
          >
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "auto",
                background: "rgba(255, 255, 255, 0.5)",
              }}
            >
              <Box id="pieChart"></Box>
            </Grid>
            <Grid item xs={6}>
              <span className="subtitle">몰려있는 가격대</span>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
              }}
            >
              <Box id="barChart" style={{ color: "#000" }}></Box>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                background: "rgba(255, 255, 255, 0.5)",
              }}
            >
              <Box id="lineChart" style={{ color: "#000" }}></Box>
            </Grid>
          </Grid>
        </Grid>
      </div>

      {/* master, 와인 추천해주세요 */}
      <div
        className="index-content index-title"
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
        <span className="title" style={{ display: "block" }}>
          Master,
          <br />
          와인 추천해주세요!
        </span>
        <Link href="/main" sx={{ textDecoration: "none", color: "#FFF" }}>
          <Button
            style={{
              color: "#000",
              fontSize: "18px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "3px",
              marginTop: "10px",
            }}
          >
            오늘의 와인 보러가기
          </Button>
        </Link>
      </div>

      <Footer />
    </>
  );
}
