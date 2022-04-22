import { Wine } from "../db/index.js";
import { Country } from "../db/index.js";

class worldService {
  static async findByCountryWine({ countryName }) {
    const result = await Wine.findByCountry({ countryName });
    return [result[0], result[1], result[2]];
  }

  static async findByCountryDescription({ countryName }) {
    const result = await Country.findByCountryName({ countryName });
    return result;
  }
}
export { worldService };
