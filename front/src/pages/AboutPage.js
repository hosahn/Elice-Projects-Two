import React from "react";
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
import Header from "../components/Header";
import Cardlist from "../components/Cardlist";

export default function AboutPage() {
  const itemData = [
    {
      img: "logo512.png",
      title: "이호산(팀장)",
      author: "BE",
      github: "https://naver.com",
      something: "https://google.com",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "logo512.png",
      title: "노서현",
      author: "BE",
      github: "https://naver.com",
      something: "https://google.com",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "logo512.png",
      title: "심은지",
      author: "BE",
      github: "https://naver.com",
      something: "https://google.com",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "logo512.png",
      title: "명하준",
      author: "BE",
      github: "https://github.com/hajun-myoung",
      something: "mailto:fe.denver@gmail.com",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "logo512.png",
      title: "김효진",
      author: "BE",
      github: "https://naver.com",
      something: "https://google.com",
      rows: 2,
      cols: 2,
      featured: true,
    },
  ];

  return (
    <>
      <Header />
    <Grid container>
      {itemData.map(item => {
        return <Cardlist item={item}></Cardlist>;
      })}
      </Grid>
    </>
  );
}
