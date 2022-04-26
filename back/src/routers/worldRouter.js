import { Router } from "express";
import { worldService } from "../services/worldService.js";
import { errorMiddleware } from "../middlewares/errorMiddleware.js";
const worldRouter = Router();

worldRouter.get(
  "/worldMap",
  async (req, res, next) => {
    try {
      //DB 통합 후 사용할 함수입니다.
      const countryName = req.body.country;
      if (!countryName) {
        throw new Error("요청하신 정보를 찾을 수 없습니다.");
      } //CountryName은 필수로 와야하는 정보
      const wines = await worldService.findByCountryWine({ countryName });
      //wines에서 추출할 정보 : 와인 이름, 태그, 이미지url
      const countryDescription = await worldService.findByCountryDescription({
        countryName,
      }); //countryDescription에서 추출할 정보 : description
      const result = { wine: wines, description: countryDescription };
      res.send(result);
    } catch (e) {
      next();
    }
  },
  errorMiddleware,
);

export { worldRouter };
