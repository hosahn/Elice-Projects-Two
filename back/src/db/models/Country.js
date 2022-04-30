import { CountryModel } from "../schemas/country.js";

class Country {
  // countryName에 맞는 description을 return 합니다.
  static async findByCountryName({ countryName }) {
    return await CountryModel.find({ country: countryName });
  }
}
export { Country };
