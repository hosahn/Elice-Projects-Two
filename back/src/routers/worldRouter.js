import { Router } from "express";
import { worldService } from "../services/worldService.js";

const worldRouter = Router();

worldRouter.get("/world_map", async (req, res) => {
  countryName = req.body.country;
  const result = await worldService.findByCountry({ countryName });
  return result;
});

export { worldRouter };
