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
    if (minPrice === "") {
      var priceStart = 4;
    } else {
      var priceStart = minPrice;
    }
    if (maxPrice === "") {
      var priceEnd = 3300;
    } else {
      var priceEnd = maxPrice;
    }
    if (minPoints === "") {
      var pointsStart = 85;
    } else {
      var pointsStart = minPoints;
    }
    if (maxPoints === "") {
      var pointsEnd = 100;
    } else {
      var pointsEnd = maxPoints;
    }

    if (Array.isArray(tags)&&tags.length === 0) {
      const wines = await Wine.findByPriceandPoints({
        priceStart,
        priceEnd,
        pointsStart,
        pointsEnd,
      });
      return wines;
    } else {
      const wines = await Wine.findByAll({
        tags,
        priceStart,
        priceEnd,
        pointsStart,
        pointsEnd,
      });
      return wines;
    }

    // if (minPoints == "" && maxPoints !== "") {
    //   const errorMessage = "검색할 와인의 최소 점수를 모두 작성하세요!";
    //   return { errorMessage };
    // }
    // if (minPoints !== "" && maxPoints == "") {
    //   const errorMessage = "검색할 와인의 최대 점수를 작성하세요!";
    //   return { errorMessage };
    // }
  }

  // * (이하) query test를 위한 코드

  static async findByTags({ tags }) {
    const wines = await Wine.findByTags({ tags });
    return wines;
  }
}

export { mainWineService };
