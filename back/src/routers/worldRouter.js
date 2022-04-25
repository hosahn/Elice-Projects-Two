import { Router } from "express";
import { worldService } from "../services/worldService.js";

const worldRouter = Router();

worldRouter.get("/world_map", async (req, res, next) => {
  try {
    const countryName = req.body.country;

    if (!countryName) {
      throw new Error("요청하신 정보를 찾을 수 없습니다.");
    } //CountryName은 필수로 와야하는 정보

    const wines = await worldService.findByCountryWine({ countryName });
    const countryDescription = await worldService.findByCountryDescription({
      countryName,
    });

    const wineNames = [];
    for (let i = 0; i < 3; i++) {
      wineNames.push(wines[i].title);
    }

    const urls = await worldService.findByWineUrl({ wineNames });
    if (!wineNames || !countryDescription) {
      throw new Error("요청하신 정보를 찾을 수 없습니다.");
    } //찾고자 하는 나라의 정보/와인이 하나도 없다면 에러 발생

    const result = {
      wine: wines,
      description: countryDescription,
      url: urls,
    };
    res.send(result);
    // result에 와인 데이터, 나라에 대한 설명, 와인 이미지 url을 담아 전송
  } catch (e) {
    res.send(e);
  }
});
export { worldRouter };
