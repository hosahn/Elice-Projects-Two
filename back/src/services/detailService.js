import { Wine } from "../db/index.js";
import { Url } from "../db/models/Image.js";

class detailService {
  static async findByIndex({ index }) {
    const result = await Wine.findByIndex({ index });
    return result;
  }
}
export { detailService };
