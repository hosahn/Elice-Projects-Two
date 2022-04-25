import { Router } from "express";
import { detailService } from "../services/detailService.js";
import { errorMiddleware } from "../middlewares/errorMiddleware.js";
const worldRouter = Router();

worldRouter.get(
  "/detail/:index",
  async (req, res, next) => {
    try {
      const index = req.params.index;

      if (!index || typeof index != Number) {
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
