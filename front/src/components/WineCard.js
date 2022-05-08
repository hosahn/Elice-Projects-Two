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
  const cardContent = (
    <>
      <Grid container>
        <Grid item xs={9} sx={{ zIndex: 3 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Points: {wineInfo?.points}
            </Typography>
            <Typography
              variant="h5"
              component="div"
              style={{ fontSize: "20px" }}
            >
              {wineInfo?.title}
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              color="text.secondary"
              style={{ fontSize: "14px" }}
            >
              {wineInfo?.variety}, {wineInfo?.country}
            </Typography>
            {wineInfo?.keyword?.map((keyword, idx) => (
              <span
                key={`wine-keyword-${idx}`}
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  margin: "0 2px 2px 0",
                  borderRadius: "2px",
                  padding: "0 2px",
                  display: "inline-block",
                }}
              >
                {keyword}
              </span>
            ))}
          </CardContent>
          <CardActions>
            <Button size="small" href={"/detail/" + wineInfo?.index}>
              더보기
            </Button>
          </CardActions>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL + wineInfo?.image})`,
            backgroundSize: "contain",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
          }}
        ></Grid>
      </Grid>
    </>
  );

  return <Card style={{ width: "330px", height: "300px" }}>{cardContent}</Card>;
}
