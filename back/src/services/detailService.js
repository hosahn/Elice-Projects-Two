import { Wine } from "../db/index.js";

class detailService {
  static async findByIndex({ index }) {
    const result = await Wine.findByIndex({ index });
    return result;
  }

  static async findSimilarUrl({ similarWine }) {
    const result = [];
    for (let i = 0; i < similarWine.length; i++) {
      const wineName = similarWine[i];
      const tmp = await Wine.FindByWineName({ wineName });
      result.push(tmp[0]["image"]);
    }
    return result;
  }
}
export { detailService };
