import { UserModel } from "../schemas/user.js";

class User {
  static async create({ newUser }) {
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

  static async getLikedWines({ user_id }) {
    const result = await UserModel.find({ id: user_id });
    return result[0].liked;
  }

  static async addFavoriteWine({ user_id, index }) {
    const filter = { id: user_id };
    const update = { $addToSet: { liked: index } };
    const option = { returnOriginal: true };
    const updatedUser = await UserModel.findOneAndUpdate(
      filter,
      update,
      option,
    );
    return updatedUser ? true : false;
  }

  static async hasFavoriteWine({ user_id, index }) {
    const wine = await UserModel.findOne({
      id: user_id,
      liked: { $in: [index] },
    });
    return wine ? true : false;
  }

  static async removeFavoriteWine({ user_id, index }) {
    const filter = { id: user_id };
    const update = { $pull: { liked: index } }; //
    const option = { returnOriginal: true };
    const updatedUser = await UserModel.findOneAndUpdate(
      filter,
      update,
      option,
    );
    return updatedUser ? true : false;
  }
}
export { User };
//로그인에 사용하는 User 클래스
