import pkg from "mongoose";
const { Schema, model } = pkg;

const WineSchema = new Schema(
  {
    index: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    variety: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    snack1: {
      type: String,
      required: true,
    },
    snack2: {
      type: String,
      required: true,
    },
    similar1: {
      type: String,
      required: true,
    },
    similar2: {
      type: String,
      required: true,
    },
    similar3: {
      type: String,
      required: true,
    },
    keyword: {
      type: String,
      required: true,
    },
  },

  { collection: "wine" },
);
const WineModel = model("wine", WineSchema);
export { WineModel };
