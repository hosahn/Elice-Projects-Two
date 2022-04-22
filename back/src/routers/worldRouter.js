import { Router } from "express";
import { worldService } from "../services/worldService.js";

const worldRouter = Router();

worldRouter.get("/world_map", async (req, res) => {
  const countryName = req.body.country;

  if (!countryName) {
    res.sendStatus(201);
  }
  const wines = await worldService.findByCountryWine({ countryName });
  const countryDescription = await worldService.findByCountryDescription({
    countryName,
  });

  if (!wines || !countryDescription) {
    res.send("요청하신 정보를 찾을 수 없습니다.");
  }
  const result = { wine: wines, description: countryDescription };
  res.send(result);
});
export { worldRouter };
