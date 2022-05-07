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
import { UserStateContext } from "../App";
import * as Api from "../api";

export default function DetailPage() {
  const params = useParams();
  const [data, setData] = useState();
  const { user } = useContext(UserStateContext);

  useEffect(() => {
    axios.get(`http://localhost:5001/detail/${params.index}`).then(res => {
      setData(res.data);
    });
  }, [params]);

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

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
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
              </div>
            </Box>
          </Grid>
        </Grid>

        <Grid>
          <h2>{data?.result?.[0]["title"]}과 비슷한 술</h2>
        </Grid>
        <Grid container xs={12} spacing={1}>
          <Grid item xs={4} sx={{ border: "1px solid lightgray", p: 2 }}>
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
          <Grid item xs={4} sx={{ border: "1px solid lightgray", p: 2 }}>
            <Box
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
            </Box>
          </Grid>
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
                src="https://cdn.pixabay.com/photo/2016/05/17/09/27/fruit-1397736__480.jpg"
                alt="snack2"
                style={{ width: "200px", height: "300px" }}
              />

              <p>{data?.result?.[0]["snack1"]}</p>
            </div>
          </Grid>

          <Grid item xs={4} sx={{ border: "1px solid lightgray", p: 2 }}>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2016/05/17/09/27/fruit-1397736__480.jpg"
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
