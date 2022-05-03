import { Router } from "express";
import { mainWineService } from "../services/mainService.js";
import { errorMiddleware } from "../middlewares/errorMiddleware.js";

const mainRouter = Router();

mainRouter.get(
  "/main",
  async function (req, res) {
    try {
      const randSelected = await mainWineService.getAnyWines();
      res.status(200).json(randSelected); // json 형태로 제공됩니다.
    } catch (e) {
      next();
    }
  },
  errorMiddleware,
);

mainRouter.get(
  "/main/search",
  async function (req, res) {
    try {
      // 선택하지 않은 경우 빈문자열로 입력 : get과 body,,,,
      const tags = req.body.tags;
      const minPrice = req.body.minPrice;
      const maxPrice = req.body.maxPrice;
      const minPoints = req.body.minPoints;
      const maxPoints = req.body.maxPoints;

      const searchedWines = await mainWineService.getWines({
        tags,
        minPrice,
        maxPrice,
        minPoints,
        maxPoints,
      });

      if (searchedWines.errorMessage) {
        throw new Error(searchedWines.errorMessage);
      }
      res.status(200).json(searchedWines);
    } catch (e) {
      next();
    }
  },
  errorMiddleware,
);

// * query test를 위한 test pages
mainRouter.get(
  "/main/tags",
  async function (req, res) {
    try {
      const tags = req.body.tags;
      const wines = await mainWineService.findByTags({ tags });
      res.status(200).json(wines);
    } catch (e) {
      next();
    }
  },
  errorMiddleware,
);

export { mainRouter };
