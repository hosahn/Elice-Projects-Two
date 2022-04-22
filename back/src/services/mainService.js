import { Wine } from "../db/models";

class mainWineService {
  static async getAnyWines({}) {
    const wines = await Wine.getSixofRandWines({});
    return wines;
  }
}

export { mainWineService };
