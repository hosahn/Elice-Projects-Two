import pkg from "mongoose";
const { Schema, model } = pkg;

const UserSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    tier: {
      type: String,
      required: false,
      default: "일반 회원",
    },
    liked: {
      type: Array,
      required: true,
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

const UserModel = model("User", UserSchema);
export { UserModel };

//UserModel (DB연결완료)
