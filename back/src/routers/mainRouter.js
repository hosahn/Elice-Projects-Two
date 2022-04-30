import { Router } from "express";
import { mainWineService } from "../services/mainService.js";

const mainRouter = Router();

mainRouter.get("/main", async function (req, res) {
  try {
    const randSelected = await mainWineService.getAnyWines();
    res.status(200).json(randSelected); // json 형태로 제공됩니다.
  } catch (e) {
    res.status(400).send(e);
  }
});


mainRouter.get("/main/search", async function (req, res) {
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
    res.status(404).send(e);
  }
});

// * query test를 위한 test pages
mainRouter.get("/main/tags", async function (req, res) {
  try {
    const tags = req.body.tags;
    const wines = await mainWineService.findByTags({ tags });
    res.status(200).json(wines);
  } catch (e) {
    res.status(404).send(e);
  }
});

export { mainRouter };
