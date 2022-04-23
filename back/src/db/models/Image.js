import { UrlModel } from "../schemas/image.js";

class Url {
  // 수상 내역을 새로 생성합니다.

  static async getSixofRandUrl({ countryName }) {
    const sixWine = await WineModel.aggregate([
      { $match: { country: countryName } },
      { $sample: { size: 6 } },
    ]);
    return sixWine;
  }

  static async findByWineName({ wines }) {
    const length = wines.length;
    const result = [];
    for (i = 0; i < length; i++) {
      tmpUrl = await UrlModel.find({ wine: wines[i] });
      result.push(tmpUrl);
    }
    return result;
  }
}
export { Url };
