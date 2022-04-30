import { Wine } from "../db/models/Wine.js";

class mainWineService {
  // "/main" 에 연결
  static async getAnyWines() {
    const wines = await Wine.getSixofRandWines();
    return wines;
  }

  // "/main/search"에 연결
  static async getWines({ tags, minPrice, maxPrice, minPoints, maxPoints }) {
    // 입력값 에러처리 - 입력안했을 경우 값 지정
    let priceStart = minPrice || 4;
    let priceEnd = maxPrice || 3300;
    let pointsStart = minPoints || 85;
    let pointsEnd = maxPoints || 100;
    console.log({priceStart, priceEnd, pointsStart, pointsEnd})
    
    if (tags.length === 0) {
      const wines = await Wine.findByPriceandPoints({
        priceStart,
        priceEnd,
        pointsStart,
        pointsEnd,
      });
      return wines;
    }

    return await Wine.findByAll({
      tags,
      priceStart,
      priceEnd,
      pointsStart,
      pointsEnd,
    });
  }
}

export { mainWineService };
