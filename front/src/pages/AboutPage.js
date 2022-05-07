import React from "react";
import { Grid } from "@mui/material";

import Header from "../components/Header";
import Cardlist from "../components/MemberCard";
import { memberData } from "../constants/About";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {memberData.map((member, idx) => (
            <Grid key={`member-info-${idx}`} item xs={2}>
              <Cardlist memberInfo={member} />
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
    </>
  );
}
