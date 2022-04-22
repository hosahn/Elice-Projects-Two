import { Wine } from "../db/models";

class mainWineService {
 // "/main" 에 연결
  static async getAnyWines() {
    const wines = await Wine.findAll();
    return wines;
  }
}



export { mainWineService };
