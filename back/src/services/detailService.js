import { Wine } from "../db/index.js";

class detailService {
  static async findByIndex({ index }) {
    const result = await Wine.findByIndex({ index });
    return result;
  }
}
export { detailService };
