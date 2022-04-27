import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useParams, NavLink } from "react-router-dom";

export default function DetailPage() {
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`http://localhost:5001/detail/${params.index}`).then(res => {
      setData(res.data);
    });
  }, [params]);

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <div>
          <img src={data?.result?.[0]["image"]} />
          <h1>{data?.result?.[0]["title"]}</h1>
        </div>
        <div>
          <p>{data?.result?.[0]["points"]}</p>
          <p>{data?.result?.[0]["description"]}</p>
          <p>{data?.result?.[0]["price"]}</p>
          <p>{data?.result?.[0]["country"]}</p>
        </div>
      </div>

      <h2>{data?.result?.[0]["title"]}과 비슷한 술입니다!</h2>
      <div style={{ display: "flex" }}>
        <div>
          <img
            src={data?.similar?.[0]}
            style={{ width: "200px", height: "300px" }}
          />
          <p>{data?.result?.[0]["similar1"]}</p>
        </div>
        <div>
          <img
            src={data?.similar?.[1]}
            style={{ width: "200px", height: "300px" }}
          />
          <p>{data?.result?.[0]["similar2"]}</p>
        </div>
        <div>
          <img
            src={data?.similar?.[2]}
            style={{ width: "200px", height: "300px" }}
          />
          <p>{data?.result?.[0]["similar3"]}</p>
        </div>
      </div>

      <h2>{data?.result?.[0]["title"]}과 잘 어울리는 안주입니다!</h2>
      <div style={{ display: "flex" }}>
        <p>{data?.result?.[0]["snack1"]}</p>
        <p>{data?.result?.[0]["snack2"]}</p>
      </div>
    </>
  );
}
