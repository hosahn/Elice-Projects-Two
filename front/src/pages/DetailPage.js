import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useParams, NavLink } from "react-router-dom";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  FormLabel,
  Grid,
  Slider,
  Tooltip,
  Input,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import WineCard from "../components/WineCard";

import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import GitHubIcon from "@mui/icons-material/GitHub";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { UserStateContext } from "../App";
import * as Api from "../api";
import Footer from "../components/Footer";

export default function DetailPage() {
  const params = useParams();
  const [data, setData] = useState();
  const { user } = useContext(UserStateContext);
  const [isLiked, setisLiked] = useState("000000");

  useEffect(() => {
    Api.get(`detail/${params.index}`).then(res => {
      setData(res.data);
      console.log(res.data);
    });
  }, [params]);

  const likeHandler = () => {
    console.log(user);
    console.log(data?.result?.[0]);
    setisLiked(
      isLiked === "rgba(215, 25, 235, 0.54)"
        ? "000000"
        : "rgba(215, 25, 235, 0.54)",
    );
    Api.post(`detail/${params.index}`, {
      user_id: user.id,
    }).then(res => {});
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  return (
    <>
      <Header />
      <Container
        maxWidth="lg"
        style={{ marginTop: "20px" }}
        component="div"
        xs="1"
      >
        <Grid
          container
          component="div"
          sx={{ border: "1px solid lightgray", p: 3 }}
          spacing={3}
        >
          <Grid
            item
            xs="4"
            component="div"
            sx={{ mb: 3, borderRight: "1px grey solid" }}
          >
            <Box
              component="div"
              sx={{ mb: 3.5 }}
              style={{ display: "flex", alignItems: "center" }}
              spacing={4}
            >
              <div>
                <img src={data?.result?.[0]["image"]} alt="mainImage" />
              </div>
            </Box>
          </Grid>

          <Grid item xs="6">
            <Box
              component="div"
              sx={{ mb: 3.5 }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <div>
                <h1>{data?.result?.[0]["title"]}</h1>
                <br></br>
                <p>평점: {data?.result?.[0]["points"]}</p>
                <p>설명: {data?.result?.[0]["description"]}</p>
                <p>가격: ${data?.result?.[0]["price"]}</p>
                <p>원산지: {data?.result?.[0]["country"]}</p>
                <IconButton sx={{ color: isLiked }} onClick={likeHandler}>
                  <FavoriteIcon />
                </IconButton>
              </div>
            </Box>
          </Grid>
        </Grid>

        <Grid>
          <h2>{data?.result?.[0]["title"]}과 비슷한 술</h2>
        </Grid>
        <Grid container xs={12} spacing={1}>
          {/* <Grid item xs={4} sx={{ border: "1px solid lightgray", p: 2 }}>
            <Box
              component="div"
              sx={{ mb: 3.5 }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src={data?.similar?.[0]}
                style={{ width: "200px", height: "300px" }}
                alt="similar1"
              />
              <p>{data?.result?.[0]["similar1"]}</p>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ border: "1px solid lightgray", p: 2 }}> */}

          <Grid container xs={12} spacing={1}>
            {data?.similar?.map((wine, idx) => {
              return (
                <Grid key={`world-wine-${idx}`} item xs={4}>
                  <WineCard
                    wineInfo={{
                      title: wine.title,
                      image: wine.image,
                      location: wine.region_1,
                      type: wine.keyword.join(" "),
                      description: wine.description,
                      index: wine.index,
                    }}
                  ></WineCard>
                </Grid>
              );
            })}
          </Grid>
          {/* <Box
              component="div"
              sx={{ mb: 3.5 }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src={data?.similar?.[1]}
                style={{ width: "200px", height: "300px" }}
                alt="similar1"
              />
              <p>{data?.result?.[0]["similar1"]}</p>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ border: "1px solid lightgray", p: 2 }}>
            <Box
              component="div"
              sx={{ mb: 3.5 }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src={data?.similar?.[2]}
                style={{ width: "200px", height: "300px" }}
                alt="similar1"
              />
              <p>{data?.result?.[0]["similar1"]}</p>
            </Box> */}
          {/* </Grid> */}
        </Grid>

        <Grid>
          {" "}
          <h2>{data?.result?.[0]["title"]}과 잘 어울리는 안주</h2>
        </Grid>

        <Grid container xs={12} spacing={1}>
          <Grid
            item
            xs={4}
            sx={{ border: "1px solid lightgray", p: 2 }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <img
                src={data?.result?.[0]["snackImage1"]}
                alt="snack2"
                style={{ width: "200px", height: "300px" }}
              />

              <p>{data?.result?.[0]["snack1"]}</p>
            </div>
          </Grid>

          <Grid item xs={4} sx={{ border: "1px solid lightgray", p: 2 }}>
            <div>
              <img
                src={data?.result?.[0]["snackImage2"]}
                alt="snack2"
                style={{ width: "200px", height: "300px" }}
              />
              <p>{data?.result?.[0]["snack2"]}</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
