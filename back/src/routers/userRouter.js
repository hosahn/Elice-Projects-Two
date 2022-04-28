import is from "@sindresorhus/is";
import { Router } from "express";
import { errorMiddleware } from "../middlewares/errorMiddleware.js";
import { userAuthService } from "../services/userService.js";

const userRouter = Router();
userRouter.post(
  "/user/register",
  async function (req, res, next) {
    try {
      if (is.emptyObject(req.body)) {
        throw new Error("body 제대로 안 넘어왔습니다.");
      }

      const name = req.body.name;
      const email = req.body.email;
      const password = req.body.password;
      const rePassword = req.body.rePassword;

      if (rePassword != password) {
        throw new Error("패스워드가 일치하지 않습니다. 다시 확인해주세요");
      }

      const newUser = await userAuthService.addUser({
        name,
        email,
        password,
      });
      if (newUser.errorMessage) {
        throw new Error(newUser.errorMessage);
      }
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  },
  errorMiddleware,
);
userRouter.post(
  "/user/login",
  async function (req, res, next) {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const user = await userAuthService.getUser({ email, password });
      if (user.errorMessage) {
        throw new Error(user.errorMessage);
      }
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  },
  errorMiddleware,
);

export { userRouter };
