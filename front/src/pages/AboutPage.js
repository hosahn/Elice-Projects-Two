import React from "react";

import Header from "../components/Header";
import Cardlist from "../components/Cardlist";

export default function AboutPage() {
  return (
    <>
      <Header />
      <img src={`logo512.png`}></img>
      <Cardlist />
      <div>AboutPage</div>
    </>
  );
}
