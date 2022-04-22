import { Router } from "express";
import { mainWineService } from "../services/mainService";

const mainRouter = Router();

// main 페이지에서 randomly 와인 6개 정보 제공
mainRouter.get("/main", async function (req, res) {
  try {
    // 6개 랜덤으로 받아와서 반환 <- 일단 다 받아오게 해두었으나 postman 오류
    const randSelected = await mainWineService.getAnyWines();
    res.status(200).send(randSelected);
  } catch (e) {
    res.status(400).send(e);
  }
});

// mainRouter.get("/main/search", async function (req, res) {
//     try{

//     } catch(e) {

//     }
// });

export { mainRouter };
