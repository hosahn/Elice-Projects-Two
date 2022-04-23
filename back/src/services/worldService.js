import { Wine } from "../db/index.js";
import { Country } from "../db/index.js";
import { Url } from "../db/models/Image.js";

class worldService {
  static async findByCountryWine({ countryName }) {
    const result = await Wine.findByCountry({ countryName });
    if (result.length == 0) {
      //아무것도 찾지 못한 경우
      return null; // null값 return
    }
    return [result[0], result[1], result[2]];
  } //나라에 맞는 와인을 찾아준다

  static async findByCountryDescription({ countryName }) {
    const result = await Country.findByCountryName({ countryName });
    return result;
  } //나라에 맞는 설명을 찾아준다

  static async findByWineUrl({ wineNames }) {
    const result = await Url.findByWineName({ wineNames });
    return result;
  } //나라에 맞는 와인을 찾아준 후 그 와인에 맞는 imgurl을 찾아준다.
}
export { worldService };
