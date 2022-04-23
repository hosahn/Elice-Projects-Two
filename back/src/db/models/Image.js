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

  static async findByWineName({ wineNames }) {
    const length = wineNames.length;
    console.log(length);
    const result = [];
    for (let i = 0; i < length; i++) {
      console.log(i);
      const tmpUrl = await UrlModel.findOne({ wine: wineNames[i] });
      result.push(tmpUrl);
    }
    console.log(result);
    return result;
  }
}
export { Url };
