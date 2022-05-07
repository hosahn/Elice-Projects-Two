import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from '@mui/icons-material/Email';
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function Cardlist({ item }) {
  return (
    <>
      <Grid item xs={2} sx={{ p: 1 }}>
        <Card>
          <Card sx={{ width: "100%" }}>
            <CardMedia component="img" height="140" image={item.img} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.author}
              </Typography>
            </CardContent>
            <CardActions>
              {
                <IconButton
                  sx={{ color: "#000000" }}
                  target="_blank"
                  href={item.github}
                >
                  <GitHubIcon />
                </IconButton>
              }
              {
                <IconButton
                  sx={{ color: "#3366CC" }}
                  target="_blank"
                  href={item.email}
                >
                  <EmailIcon />
                </IconButton>
              }
            </CardActions>
          </Card>
        </Card>
      </Grid>
    </>
  );
}
