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
    // const winesFixed = {
    //   title: wines[0]["title"],

    // }
    // return winesFixed
  }

  static async findWines({ tags, minPrice, maxPrice, minPoints, maxPoints }) {
    // 1 or 2 or 3   x = math.randint(1,3) tmpTag =  array[x]; Wine.find({description : tmpTag})
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

  // * codes for query test
  // price로 검색
  static async findByPrice({ minPrice, maxPrice }) {
    const wines = await WineModel.aggregate()
      .match({ price: { $gte: minPrice, $lte: maxPrice } })
      .sample(3);
    return wines;
  }
  // points로 검색
  static async findByPoints({ minPoints, maxPoints }) {
    const wines = await WineModel.aggregate()
      .match({ points: { $gte: minPoints, $lte: maxPoints } })
      .sample(3);
    return wines;
  }
  // tags array로 검색
  static async findByTags({ tags }) {
    // {tags:  ['oak', 'berries']} , keyword: ['oak', 'smoky', ..]
    result = [];
    for (let i = 0; i < tags.length; i++) {
      const tag = tags[i];
      const wine = await WineModel.find({
        keyword: { $regex: tag },
      }).limit(1);
      result.push(wine);
      // * result 내 중복값 방지하기 위한 코드
      // for (let s = 0; s < wines.length; s++) {
      //   const wine = wines[s]["title"];
      //   if (!result.includes(wine)) {
      //     result.push(wine);
      //   }
    }
    // * for in 을 사용하려던 시도
    // for (let tag in tags) {
    //   const wine = await WineModel.find({ keyword: { $regex: tag } }).limit(1);
    //   result.push(wine);
    // }

    return result;
  }

  static async findByTagString({ tag }) {
    const wines = await WineModel.find({
      keyword: { $elemMatch: { $regex: tag } },
    }).limit(2);
    return wines;
  }
}

export { Wine };
