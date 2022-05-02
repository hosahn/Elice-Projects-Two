import { Router } from "express";
import { myPageService } from "../services/myPageService.js";
import { login_required } from "../middlewares/login_required";
import { errorMiddleware } from "../middlewares/errorMiddleware.js";
import { detailService } from "../services/detailService.js";
import { userAuthService } from "../services/userService";

const myPageRouter = Router();

myPageRouter.get("/myPage/:email", login_required, async (req, res) => {
  const user = req.params.email;
  console.log(user);
  const likedWine = await myPageService.getLikedWines({ user });
  const result = [];
  for (let i = 0; i < likedWine.length; i++) {
    let tmp = result[i];
    result.push(detailService.findByIndex({ tmp }));
  }
  res.send(result);
});

myPageRouter.put(
  "/myPage/reset/:id",
  login_required,
  async function (req, res, next) {
    try {
      // URI로부터 사용자 id를 추출함.
      const user_id = req.params.id;
      // body data 로부터 업데이트할 사용자 정보를 추출함.
      const name = req.body.name ?? null;
      const email = req.body.email ?? null;
      const password = req.body.password ?? null;
      const description = req.body.description ?? null;
      const toUpdate = { name, email, password, description };
      // 해당 사용자 아이디로 사용자 정보를 db에서 찾아 업데이트함. 업데이트 요소가 없을 시 생략함
      const updatedUser = await userAuthService.setUser({ user_id, toUpdate });
      if (updatedUser.errorMessage) {
        throw new Error(updatedUser.errorMessage);
      }

      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  },
);

export { myPageRouter };
