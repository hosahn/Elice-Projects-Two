import pkg from "mongoose";
const { Schema, model } = pkg;

const UrlSchema = new Schema(
  {
    "image-url": {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { collection: "image" },
);
const UrlModel = model("Url", UrlSchema);
export { UrlModel };
