import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import { UserStateContext } from "../App";

export default function MyPage() {
  const navigate = useNavigate();
  const userState = useContext(UserStateContext);

  if (!userState.user) {
    navigate("/user/login");
  }

  return (
    <>
      <Header />
      myPage
    </>
  );
}
