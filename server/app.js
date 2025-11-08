import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./Routes/productRoutes.js";
import cartRoutes from "./Routes/cartRoutes.js";
import checkoutRoutes from "./Routes/checkoutRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URI,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/ping", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server Created!! Pong :)",
  });
});

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);

export default app;