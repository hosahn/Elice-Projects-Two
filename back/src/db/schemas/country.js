import pkg from "mongoose";
const { Schema, model } = pkg;

const CountrySchema = new Schema(
  {
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
  },
  { collection: "country" },
);
const CountryModel = model("Country", CountrySchema);
export { CountryModel };
