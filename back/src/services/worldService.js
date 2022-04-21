import { Wine } from "../db/index.js";

class worldService {
  static async findByCountry({ countryName }) {
    const result = await Wine.findByCountry({ countryName });
    console.log(result.length);
  }

  static async findByRegion({ regionName }) {
    const result = await Wine.findByRegion({ regionName });
  }
}
export { worldService };
