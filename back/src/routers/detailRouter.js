import { Router } from "express";
import { detailService } from "../services/detailService.js";
import { errorMiddleware } from "../middlewares/errorMiddleware.js";
const detailRouter = Router();

detailRouter.get(
  "/detail/:index",
  async (req, res, next) => {
    try {
      const index = req.params.index;
      if (!index || index > "17010") {
        throw new Error("유효하지 않은 요청입니다.");
      }
      const result = await detailService.findByIndex({ index });
      res.send(result);
    } catch (e) {
      console.log(e);
      next();
    }
  },
  errorMiddleware,
);

export { detailRouter };
