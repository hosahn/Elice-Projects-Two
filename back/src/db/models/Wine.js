import { WineModel } from "../schemas/wine.js";

class Wine {
  // 모든 데이터를 불러오기
  static async findAll() {
    const wines = await WineModel.find({});
    return wines;
  }

  // 데이터 6개를 랜덤하게 받아오기
  static async getSixofRandWines() {
    const wines = await WineModel.aggregate([{ $sample: { size: 6 } }]);
    return wines;
  }

  //static async findWines({ tags, minPrice, maxPrice, minPoints, maxPoints }) {}

  // static async findByTags({ tags }) {
  //   for (tag in tags) {
  //     const result = await WineModel.find({
  //       description: { $regex: tag, $options: "i" },
  //     });
  //   }
  //   return WineModel.find;
  // }

  // price로 검색
  static async findByPrice({ minPrice, maxPrice }) {
    const wines = await WineModel.find({
      price: { $gte: minPrice, $lte: maxPrice },
    });
    return wines;
  }
  // points로 검색
  static async findByPoints({ minPoints, maxPoints }) {
    const wines = await WineModel.find({
      points: { $gte: minPoints, $lte: maxPoints },
    });
    return wines;
  }
}

export { Wine };
