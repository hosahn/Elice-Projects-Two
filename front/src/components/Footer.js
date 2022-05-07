import { Box } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "rgb(50, 50, 50)",
        color: "#FFF",
        padding: "30px 0",
        textAlign: "center",
        fontSize: "16px",
      }}
    >
      wine특별시 zinfandel구 320-14번지 | All Rights Reserved | Copyright 코딩의
      민족, 2022
      <br />
      엘리스 코드 AI 트랙 4기 : 데이터분석 웹 서비스 프로젝트 20팀
    </Box>
  );
}
