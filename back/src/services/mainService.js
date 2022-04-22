import { Wine } from "../db/models/Wine.js";

class mainWineService {
  // "/main" 에 연결
  static async getAnyWines() {
    const wines = await Wine.getSixofRandWines();
    return wines;
  }
}

export { mainWineService };
