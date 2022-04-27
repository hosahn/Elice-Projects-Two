import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

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
      <div>DetailPage</div>

      <img src={data?.result?.[0]["image"]} />

      <div>
        <p>{data?.result?.[0]["points"]}</p>
        <p>{data?.result?.[0]["description"]}</p>
        <p>{data?.result?.[0]["price"]}</p>
        <p>{data?.result?.[0]["country"]}</p>
      </div>
      <h1>{data?.result?.[0]["title"]}</h1>

      <div>
        <img src={data?.similar?.[0]} />
        <p>{data?.result?.[0]["similar1"]}</p>
        <img src={data?.similar?.[1]} />
        <p>{data?.result?.[0]["similar2"]}</p>
        <img src={data?.similar?.[2]} />
        <p>{data?.result?.[0]["similar3"]}</p>
      </div>

      <div>
        <p>{data?.result?.[0]["snack1"]}</p>
        <p>{data?.result?.[0]["snack2"]}</p>
      </div>
    </>
  );
}
