import { Wine } from "../db/models/Wine.js";

class mainWineService {
  // "/main" 에 연결
  static async getAnyWines() {
    const wines = await Wine.getSixofRandWines();
    return wines;
  }

  // "/main/search"에 연결
  static async getWines({ tags, minPrice, maxPrice, minPoints, maxPoints }) {
    // 입력값 에러처리
    // min/max 중 하나만 작성했을 경우 - (1) 엄격하게 제어 (2) 최댓값으로 혹은 최솟값으로  ?  - 우선 (1)로 구현하겠음
    if (minPrice == "" && maxPrice !== "") {
      const errorMessage = "검색할 와인의 최소 가격을 작성하세요!";
      return { errorMessage };
    }
    if (minPrice !== "" && maxPrice == "") {
      const errorMessage = "검색할 와인의 최대 가격을 작성하세요!";
      return { errorMessage };
    }
    if (minPoints == "" && maxPoints !== "") {
      const errorMessage = "검색할 와인의 최소 점수를 모두 작성하세요!";
      return { errorMessage };
    }
    if (minPoints !== "" && maxPoints == "") {
      const errorMessage = "검색할 와인의 최대 점수를 작성하세요!";
      return { errorMessage };
    }

    // db 함수에 변수 전달
    const wines = await Wine.findWines({
      tags,
      minPrice,
      maxPrice,
      minPoints,
      maxPoints,
    });

    return wines;
  }

  // * (이하) query test를 위한 코드

  static async findByTags({ tags }) {
    const wines = await Wine.findByTags({ tags });
    return wines;
  }

  static async findByPriceandPoints({
    minPrice,
    maxPrice,
    minPoints,
    maxPoints,
  }) {
    const wines = await Wine.findByPriceandPoints({
      minPrice,
      maxPrice,
      minPoints,
      maxPoints,
    });
    return wines;
  }

  static async findByAll({ tags, minPrice, maxPrice, minPoints, maxPoints }) {
    const wines = await Wine.findByAll({
      tags,
      minPrice,
      maxPrice,
      minPoints,
      maxPoints,
    });
    return wines;
  }
}

export { mainWineService };
