import { WineModel } from "../schemas/wine.js";

class Wine {
  static FindByWineName({ wineName }) {
    return WineModel.find({ title: wineName });
  }

  // * /main -> 데이터 6개를 랜덤하게 받아오기
  static async getSixofRandWines() {
    let result = [];
    const wines = await WineModel.aggregate([{ $sample: { size: 6 } }]);
    for (let w in wines) {
      const wine = {
        index: wines[w].index,
        title: wines[w].title,
        price: wines[w].price,
        points: wines[w].points,
        image: wines[w].image,
        keyword: wines[w].keyword,
      };
      result.push(wine);
    }
    return result;
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
    return result;
  }

  // *** codes for query test
  // * tags array로 검색
  static async findByTags({ tags }) {
    let result = [];
    for (let i in tags) {
      const tag = tags[i];
      const wines = await WineModel.find({
        keyword: { $elemMatch: { $regex: tag } },
      }).limit(6);
      for (let w in wines) {
        let wine = wines[w];
        result.push(wine);
        // 중복값 처리 (1)-> 안됨 ㅠㅠ
        // if (!result.includes(wine)) {
        // result.push(wine);
        // }
      }
    }
    // 중복값 처리 (2) -> 안됨..
    const resultSet = new Set(result);
    const resultArray = Array.from(resultSet);
    return resultArray;
    // return result;  <- 중복값 처리를 (1)로 할 때의 return 값
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

  static async findByCountry({ countryName }) {
    console.log(countryName);
    const result = await WineModel.findOne({ country: countryName });
    return result;
  }

  static async findByIndex({ index }) {
    const result = await WineModel.find({ index });
    return result;
  }
}

export { Wine };
