import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLen: [5, "Name of product must be at least 10 character length"],
      maxLen: [50, "Name of product shouldn't exceed 50 characters"],
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;