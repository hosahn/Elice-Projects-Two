import { Router } from "express";
import { mainWineService } from "../services/mainService";

const mainRouter = Router();

// main 페이지에서 randomly 와인 6개 정보 제공
mainRouter.get("/main", async function (req, res) {
  try {
    // 6개 랜덤으로 받아와서 반환
    const randSelected = await mainWineService.getAnyWines({});
    res.status(200).send(randSelected);
  } catch (e) {
    res.send(e);
  }
});

// mainRouter.get("/main/search", async function (req, res) {
//     try{

//     } catch(e) {
        
//     }
// });

export { mainRouter };
