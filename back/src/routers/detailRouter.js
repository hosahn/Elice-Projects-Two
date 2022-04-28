import { Router } from "express";
import { detailService } from "../services/detailService.js";
import { errorMiddleware } from "../middlewares/errorMiddleware.js";
const detailRouter = Router();

detailRouter.get(
  "/detail/:index",
  async (req, res, next) => {
    try {
      const index = req.params.index;
      const result = await detailService.findByIndex({ index });
      const similarWine = [
        result[0]["similar1"],
        result[0]["similar2"],
        result[0]["similar3"],
      ];
      const similarUrl = await detailService.findSimilarUrl({ similarWine });
      const finalResult = { result: result, similar: similarUrl };
      res.send(finalResult);
    } catch (e) {
      console.log(e);
      next();
    }
  },
  errorMiddleware,
);

export { detailRouter };
