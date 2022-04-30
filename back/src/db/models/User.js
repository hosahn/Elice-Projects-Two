import { UserModel } from "../schemas/user.js";

class User {
  static async create({ newUser }) {
    console.log(newUser);
    const createdNewUser = await UserModel.create(newUser);
    return createdNewUser;
  }
  static async findByEmail({ email }) {
    const user = await UserModel.findOne({ email });
    return user;
  }
  static async findById({ user_id }) {
    const user = await UserModel.findOne({ id: user_id });
    return user;
  }
  static async findAll() {
    const users = await UserModel.find({});
    return users;
  }
  static async findByTier({ tierName }) {
    const users = await UserModel.find({ tier: tierName });
    return users;
  }
  static async update({ user_id, fieldToUpdate, newValue }) {
    const filter = { id: user_id };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedUser = await UserModel.findOneAndUpdate(
      filter,
      update,
      option,
    );
    return updatedUser;
  }

  static async likedWine({ user_id, wine }) {
    const filter = { id: user_id };
    const update = { $addToSet: { liked: [{ mid: wine }] } };
    const option = { returnOriginal: false };
    const updatedUser = await UserModel.findOneAndUpdate(
      filter,
      update,
      option,
    );
  }

  static async disLikedWine({ user_id, wine }) {
    const filter = { id: user_id };
    const update = { $pull: { liked: wine } };
    const option = { returnOriginal: false };
    const updatedUser = await UserModel.findOneAndUpdate(
      filter,
      update,
      option,
    );
  }
}
export { User };
//로그인에 사용하는 User 클래스
