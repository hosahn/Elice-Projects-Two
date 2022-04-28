import { WineModel } from "../schemas/wine.js";

// TODO .exec() 하면 promise로 만들어줌

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

  //static async findWines({ tags, minPrice, maxPrice, minPoints, maxPoints }) {
  // 1 or 2 or 3   x = math.randint(1,3) tmpTag =  array[x]; Wine.find({description : tmpTag})
  //}


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

  static async findByTagsandReturnTitle({ tags }) {
    let result = [];
    for (let i in tags) {
      const tag = tags[i];
      const wines = await WineModel.find({
        keyword: { $elemMatch: { $regex: tag } },
      }).limit(6);
      for (let w in wines) {
        const winesFixed = {
          title: wines[w].title,
        };
        result.push(winesFixed);
      }
    }
    return result;
  }

  static async findByTagString({ tag }) {
    const wines = await WineModel.find({
      keyword: { $elemMatch: { $regex: tag } },
    }).limit(2);
    return wines;
  }

  static async findByPriceandPoints({
    minPrice,
    maxPrice,
    minPoints,
    maxPoints,
  }) {
    const wines = await WineModel.aggregate()
      .match({
        price: { $gte: minPrice, $lte: maxPrice },
        points: { $gte: minPoints, $lte: maxPoints },
      })
      .sample(3);
    return wines;
  }
}

export { Wine };
