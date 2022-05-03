import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Divider,
  Grid,
  Input,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import * as Api from "../api";
import Header from "../components/Header";
import { UserStateContext } from "../App";
import WineCard from "../components/WineCard";

export default function MyPage() {
  const navigate = useNavigate();
  const { user } = useContext(UserStateContext);
  const [selectedMenu, setSelectedMenu] = useState("회원정보 수정");
  const [favoriteWines, setFavoriteWines] = useState([]);
  const [newUser, setNewUser] = useState({ name: user?.name, password: "" });

  useEffect(() => {
    if (!user) {
      navigate("/user/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    const getFavoriteWines = async () => {
      const { data } = await Api.get(`myPage/${user.id}`);
      setFavoriteWines(data[0]);
    };

    const updateUserInfo = async () => {
      const res = await Api.put(`myPage/${user.id}/reset`, newUser);
      console.log(res);
    };

    if (selectedMenu === "좋아요한 와인") {
      getFavoriteWines();
    }
  }, [selectedMenu]);

  const handleValueChange = (name, value) => {
    setNewUser(prev => ({ ...prev, [name]: value }));
    console.log(name, value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(newUser);
    // newUser -> name, password 만
  };

  return (
    <>
      <Header />
      <Grid container direction="row" justifyContent="center">
        <Grid item xs={4} display="flex" justifyContent="center">
          <List
            component="nav"
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
            <form onSubmit={handleSubmit}>
              <TextField label="email" value={user.email} />
              <br />
              <TextField
                label="name"
                value={newUser.name}
                onChange={e => handleValueChange("name", e.currentTarget.value)}
              />
              <br />
              <TextField
                label="password"
                value={newUser.password}
                onChange={e =>
                  handleValueChange("password", e.currentTarget.value)
                }
              />
              <br />
              <TextField label="tier" value={user.tier} />
              <br />
              <Button variant="contained" type="submit">
                회원정보 수정
              </Button>
            </form>
          ) : (
            <Grid container xs={12} spacing={1}>
              {favoriteWines?.map((wine, idx) => (
                <Grid key={`favorite-wine-${idx}`} item xs={6}>
                  <WineCard wineInfo={wine} />
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
}
