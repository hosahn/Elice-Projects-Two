import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divider, Grid, List, ListItem, ListItemText } from "@mui/material";

import Header from "../components/Header";
import { UserStateContext } from "../App";

export default function MyPage() {
  const navigate = useNavigate();
  const { user } = useContext(UserStateContext);
  const [selectedMenu, setSelectedMenu] = useState("회원정보 수정");
  const [favoriteWines, setFavoriteWines] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/user/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (selectedMenu === "좋아요한 와인") {
      // 좋아요한 와인 목록 호출
    }
  }, [selectedMenu]);

  return (
    <>
      <Header />
      <Grid container direction="row" justifyContent="center">
        <Grid item xs={4} display="flex" justifyContent="center">
          <List
            component="nav"
            aria-label="mailbox folders"
            style={{
              width: "200px",
              border: "1px solid lightgray",
              borderRadius: "5px",
              marginTop: "100px",
            }}
          >
            <ListItem button>
              <ListItemText
                primary="회원정보 수정"
                onClick={() => {
                  setSelectedMenu("회원정보 수정");
                }}
              />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText
                primary="좋아요한 와인"
                onClick={() => {
                  setSelectedMenu("좋아요한 와인");
                }}
              />
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={8} style={{ paddingTop: "40px" }}>
          {selectedMenu === "회원정보 수정" ? (
            <div>회원정보 수정</div>
          ) : (
            <div>좋아요한 와인</div>
          )}
        </Grid>
      </Grid>
    </>
  );
}
