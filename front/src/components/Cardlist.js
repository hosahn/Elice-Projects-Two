import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Cardlist() {
  return (
    <Box sx={{ width: 800, height: 100 }}>
      <ImageList cols={5} gap={10}>
        {itemData.map(item => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                  a
                  target="_blank"
                  href={item.github}
                >
                  <GitHubIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: "",
    title: "이호산(팀장)",
    author: "BE",
    github: "https://naver.com",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "",
    title: "노서현",
    author: "FE",
    github: "https://naver.com",
  },
  {
    img: "",
    title: "심은지",
    author: "BE",
    github: "https://naver.com",
  },
  {
    img: "",
    title: "명하준",
    author: "FE",
    github: "https://naver.com",
  },
  {
    img: "",
    title: "김효진",
    author: "FE",
    github: "https://naver.com",
  },
];
