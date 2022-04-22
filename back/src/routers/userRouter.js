import is from "@sindresorhus/is";
import { Router } from "express";
import { userAuthService } from "../services/userService.js";

const userRouter = Router();

userRouter.post("/user/register", async function (req, res, next) {
  console.log(req.body.name);
  try {
    if (is.emptyObject(req.body)) {
      throw new Error("body 제대로 안 넘어왔습니다.");
    }
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
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
});
userRouter.post("/user/login", async function (req, res, next) {
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
});

export { userRouter };
