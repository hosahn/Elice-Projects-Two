import { WineModel } from "../schemas/wine.js";

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

  // static create({ newAward }) {
  //   return AwardModel.create(newAward);
  // }

  // static FindByWineName({ wineName }) {
  //   return WineModel.find({ title: wineName });
  // }

  // // 수상 내역의 title을 기준으로 검색
  // static getAwardName({ user_id, title }) {
  //   return AwardModel.findOne({ user_id, title });
  // }

  // // 사용자 id로 수상 내역 찾기
  // static findById({ awardId }) {
  //   return AwardModel.find({ id: awardId });
  // }

  // // 사용자 id를 사용해서 사용자의 모든 수상 내역을 가져오기
  // static findByUserId({ user_id }) {
  //   return AwardModel.find({ user_id });
  // }

  // // 수상 내역 수정하기
  // static async update({ id, fieldToUpdate, newValue }) {
  //   const filter = { id };
  //   const update = { [fieldToUpdate]: newValue };
  //   const option = { returnOriginal: false };

  //   const updateAward = await AwardModel.findOneAndUpdate(
  //     filter,
  //     update,
  //     option,
  //   );
  //   return updateAward;
  // }

  // static delete({ id, user_id }) {
  //   return AwardModel.deleteOne({ id, user_id });
  // }

  // static async findByCountry({ countryName }) {
  //   const result = await WineModel.find({ country: countryName });
  //   return result;
  // }
}

export { Wine };
