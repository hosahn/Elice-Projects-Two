import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Divider,
  Grid,
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
import Footer from "../components/Footer";

const StyledTextField = styled(TextField)(() => ({
  marginBottom: "15px",
}));

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
      try {
        const { data } = await Api.get(`myPage/${user.id}`);
        setFavoriteWines(data);
      } catch (err) {
        console.log(err);
      }
    };

    if (selectedMenu === "좋아요한 와인") {
      getFavoriteWines();
    }
  }, [selectedMenu, user]);

  const handleValueChange = (name, value) => {
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    user.name = newUser.name;
    try {
      await Api.put(`myPage/${user.id}/reset`, newUser);
    } catch (err) {
      console.log(err);
    }
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
              maxHeight: "100px",
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

        <Grid item xs={8} style={{ paddingTop: "40px", minHeight: "80vh" }}>
          {selectedMenu === "회원정보 수정" ? (
            <form onSubmit={handleSubmit}>
              <StyledTextField label="email" value={user?.email} />
              <br />
              <StyledTextField
                label="name"
                value={newUser.name}
                onChange={e => handleValueChange("name", e.currentTarget.value)}
              />
              <br />
              <StyledTextField
                label="password"
                value={newUser.password}
                onChange={e =>
                  handleValueChange("password", e.currentTarget.value)
                }
              />
              <br />
              <StyledTextField label="tier" value={user?.tier} />
              <br />
              <Button variant="contained" type="submit">
                회원정보 수정
              </Button>
            </form>
          ) : (
            <Grid container spacing={1} style={{ marginBottom: "40px" }}>
              {favoriteWines?.map((wine, idx) => (
                <Grid key={`favorite-wine-${idx}`} item xs={6}>
                  <WineCard wineInfo={wine?.[0]} />
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
