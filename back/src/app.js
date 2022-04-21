import cors from "cors";
import express from "express";

const app = express();
// CORS 에러 방지
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//여기에 router들 작성

export { app };
