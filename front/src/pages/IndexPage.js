import Header from "../components/Header";
import * as React from "react";
import { Link } from "@mui/material";
import Footer from "../components/Footer";

export default function IndexPage() {
  return (
    <>
      <Header />
      <div className="index-container" />
      <div
        className="index-content"
        style={{
          marginTop: "40vh",
          fontSize: "128px",
          color: "#FFF",
          textAlign: "right",
        }}
      >
        <span style={{ background: "rgba(0, 0, 0, 0.6)" }}>
          당신을 위한 와인,
          <br />
          Drunken Rabbit
        </span>
      </div>

      {/* why we service? */}
      <div
        className="index-content"
        style={{
          background: "rgba(220, 20, 60, 0.7)",
          color: "#FFF",
          textAlign: "center",
        }}
      >
        <span className="title">why we service?</span>
      </div>

      {/* master, 와인 추천해주세요 */}
      <div
        className="index-content"
        style={{
          marginTop: "200px",
          marginBottom: "100px",
          padding: "30px 0",
          height: "auto",
          background: "rgba(220, 20, 60, 0.7)",
          color: "#FFF",
          textAlign: "center",
        }}
      >
        <span className="title">
          <Link
            href="/main"
            sx={{ textDecoration: "underline", color: "#FFF" }}
          >
            Master,
            <br />
            와인 추천해주세요!
          </Link>
        </span>
      </div>

      <Footer />
    </>
  );
}
