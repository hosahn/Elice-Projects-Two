import cors from "cors";
import express from "express";
import { login_required } from "./middlewares/login_required.js";
import { userAuthRouter } from "./routers/userRouter.js";

const app = express();
// CORS 에러 방지
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//여기에 router들 작성
app.use(userAuthRouter);

app.use("/a", login_required, (req, res) => {
  res.send("a");
}); //로그인 기능 체크용 함수입니다!

export { app };
