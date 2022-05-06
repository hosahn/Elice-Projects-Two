import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

export default function WineCard({ wineInfo }) {
  // wineInfo = {
  //     title : "Wanted Zin (원티드 진)",
  //     image : "/wanted_zin.png",
  //     variety : "Zinfandel(진판델)",
  //     country : "Italy",
  //     points : "레드와인",
  //     keyword: ['hot', 'cold']
  // }

  const cardContent = (
    <React.Fragment>
      <Grid container>
        <Grid item xs={9} sx={{zIndex: 3}}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {wineInfo.points}
            </Typography>
            <Typography variant="h5" component="div">
              {wineInfo.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {wineInfo.variety}, {wineInfo.country}
            </Typography>
            <Typography variant="body2">{wineInfo.keyword}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">더보기</Button>
          </CardActions>
        </Grid>
        <Grid item xs={3}>
          <img
            style={{ width:"100%" }} 
            src={process.env.PUBLIC_URL + wineInfo.url}
            alt={wineInfo.title}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );

  return <Card>{cardContent}</Card>;
}
