import mongoose from "mongoose";

const receiptSchema = new mongoose.Schema(
  {
    customer: {
      name: { type: String, required: true },
      email: { type: String, required: true },
    },
    total: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Receipt = mongoose.model("Receipt", receiptSchema);

export default Receipt;
