import { WineModel } from "../schemas/wine.js";
import _ from "lodash";

class Wine {
  static FindByWineName({ wineName }) {
    return WineModel.find({ title: wineName });
  }

  // * /main -> 데이터 6개를 랜덤하게 받아오기
  static async getSixofRandWines() {
    const wines = await WineModel.aggregate([{ $sample: { size: 6 } }]);
    return wines.map(({ index, title, price, points, image, keyword }) => {
      return {
        index,
        title,
        price,
        points,
        image,
        keyword,
      };
    });
  }

  // * /main/search -> 조건에 따른 데이터 6개 받아오기
  static async findByAll({
    tags,
    priceStart,
    priceEnd,
    pointsStart,
    pointsEnd,
  }) {
    let result = [];
    for (let i in tags) {
      const tag = tags[i];
      const wines = await WineModel.aggregate().match({
        price: { $gte: priceStart, $lte: priceEnd },
        points: { $gte: pointsStart, $lte: pointsEnd },
        keyword: { $elemMatch: { $regex: tag } },
      });
      for (let w in wines) {
        const wine = wines[w];
        result.push(wine);
      }
    }
    const uniqResult = _.uniqBy(result, "index");
    const uniqRandResult = _.sampleSize(uniqResult, 6);
    return uniqRandResult;
  }

  // * tag 없을 때 price와 points "AND"로 검색
  static async findByPriceandPoints({
    priceStart,
    priceEnd,
    pointsStart,
    pointsEnd,
  }) {
    const wines = await WineModel.aggregate()
      .match({
        price: { $gte: priceStart, $lte: priceEnd },
        points: { $gte: pointsStart, $lte: pointsEnd },
      })
      .sample(6);
    return wines;
  }

  // countryName으로 3개의 sample을 찾는다.
  static async findByCountry({ countryName }) {
    const result = await WineModel.aggregate([
      { $match: { country: countryName } },
    ]).sample(3);
    return result;
  }

  static async findByIndex({ index }) {
    const result = await WineModel.find({ index });
    return result;
  }
}

export { Wine };
