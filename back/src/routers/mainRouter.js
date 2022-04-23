import { Router } from "express";
import { mainWineService } from "../services/mainService.js";

const mainRouter = Router();

// main 페이지에서 randomly 와인 6개 정보 제공
mainRouter.get("/", (req, res) => {
  res.send("index page");
});
mainRouter.get("/main", async function (req, res) {
  try {
    const randSelected = await mainWineService.getAnyWines();
    res.status(200).json(randSelected); // json 형태로 제공됩니다.
    // * 필드: id, "", country, description, designation, points, price, province, region_1, taster_name, taster_twitter_handel, title, variety, winery
    // ? 이 중에 id, title, country, description, points, price만 가지고 오면 될까요? 근데 방법을 모르겠습니당
  } catch (e) {
    res.status(400).send(e);
  }
});

// main/search ->  filterd wine 정보 제공
mainRouter.get("/main/search", async function (req, res) {
  // req.body: title, min/maxPrice, min/maxPoints, tags
  try {
    // 선택하지 않은 경우 빈문자열로 입력
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

// query test를 위한 test pages
mainRouter.get("/main/price", async function (req, res) {
  try {
    const minPrice = req.body.minPrice;
    const maxPrice = req.body.maxPrice;
    const wines = await mainWineService.findByPrice({ minPrice, maxPrice });
    res.status(200).json(wines);
  } catch (e) {
    res.status(404).send(e);
  }
});
export { mainRouter };
