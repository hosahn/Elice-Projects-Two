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
  return (
    <>
      <Header />
      <img src={`logo512.png`}></img>
      
      <Grid container xs={12} spacing={1}>
          
          <Grid item xs={4}>
            <Cardlist
              itemData={{
                img: 'logo512.png',
                title: '노서현',
                author: 'BE',
                github: 'https://naver.com',
                something: 'https://google.com',
    
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Cardlist
              itemData={{
                img: 'logo512.png',
                title: '이호산(팀장)',
                author: 'BE',
                github: 'https://naver.com',
                something: 'https://google.com',
    
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Cardlist
              itemData={{
                img: 'logo512.png',
                title: '이호산(팀장)',
                author: 'BE',
                github: 'https://naver.com',
                something: 'https://google.com',
    
              }}
            />
          </Grid>
      </Grid>
     
     <div>AboutPage</div>
    
     </>
  );
}
