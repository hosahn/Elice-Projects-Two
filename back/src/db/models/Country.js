import { CountryModel } from "../schemas/country.js";

class Country {
  // 수상 내역을 새로 생성합니다.
  static async findByCountryName({ countryName }) {
    return await CountryModel.find({ country: countryName });
  }
}
export { Country };
