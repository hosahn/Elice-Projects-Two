import { WineModel } from "../schemas/wine.js";

class Wine {
  // 수상 내역을 새로 생성합니다.

  static FindByWineName({ wineName }) {
    return WineModel.find({ title: wineName });
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
