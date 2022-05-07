import cors from "cors";
import express from "express";
import { login_required } from "./middlewares/login_required.js";
import { userRouter } from "./routers/userRouter.js";
import { worldRouter } from "./routers/worldRouter.js";
import { mainRouter } from "./routers/mainRouter.js";
import { detailRouter } from "./routers/detailRouter.js";
import { myPageRouter } from "./routers/myPageRouter.js";
const app = express();
// CORS 에러 방지
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//여기에 router들 작성
app.use(userRouter);
app.use(worldRouter);
app.use(mainRouter);
app.use(myPageRouter);
app.use(detailRouter);

export { app };
