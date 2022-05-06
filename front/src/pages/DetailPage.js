import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useParams, NavLink } from "react-router-dom";
import WineCard from "../components/WineCard";
import { UserStateContext } from "../App";
import * as Api from "../api";
import Footer from "../components/Footer";

export default function DetailPage() {
  const params = useParams();
  const [data, setData] = useState();
  const { user } = useContext(UserStateContext);

  useEffect(() => {
    axios.get(`http://localhost:5001/detail/${params.index}`).then(res => {
      setData(res.data);
    });
  }, [params]);

  const likeHandler = () => {
    console.log(user);
    console.log(data?.result?.[0]);
    Api.post(`detail/${params.index}`, {
      user_id: user.id,
      bool: user.liked.includes(String(data?.result?.[0]["index"])) ? 1 : 0, //1이 좋아요 눌러놓은 상태, 0이 안누른상태
    }).then(res => {});
  };

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <div>
          <img src={data?.result?.[0]["image"]} alt="mainImage" />
          <h1>{data?.result?.[0]["title"]}</h1>
        </div>
        <div>
          <p>{data?.result?.[0]["points"]}</p>
          <p>{data?.result?.[0]["description"]}</p>
          <p>{data?.result?.[0]["price"]}</p>
          <p>{data?.result?.[0]["country"]}</p>
        </div>
      </div>

      <button onClick={likeHandler}>좋아요</button>

      <h2>{data?.result?.[0]["title"]}과 비슷한 술입니다!</h2>
      <div style={{ display: "flex" }}>
        <div>
          <img
            src={data?.similar?.[0]}
            style={{ width: "200px", height: "300px" }}
            alt="similar1"
          />
          <p>{data?.result?.[0]["similar1"]}</p>
        </div>
        <div>
          <img
            src={data?.similar?.[1]}
            style={{ width: "200px", height: "300px" }}
            alt="similar2"
          />
          <p>{data?.result?.[0]["similar2"]}</p>
        </div>
        <div>
          <img
            src={data?.similar?.[2]}
            style={{ width: "200px", height: "300px" }}
            alt="similar3"
          />
          <p>{data?.result?.[0]["similar3"]}</p>
        </div>
      </div>

      <h2>{data?.result?.[0]["title"]}과 잘 어울리는 안주입니다!</h2>
      <div style={{ display: "flex" }}>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2016/05/17/09/27/fruit-1397736__480.jpg"
            alt="snack2"
            style={{ width: "200px", height: "300px" }}
          />
          <p>{data?.result?.[0]["snack1"]}</p>
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2016/05/17/09/27/fruit-1397736__480.jpg"
            alt="snack2"
            style={{ width: "200px", height: "300px" }}
          />
          <p>{data?.result?.[0]["snack2"]}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
