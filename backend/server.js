import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDb from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();
connectDb();

const app = express();

app.use(express.json());

app.use("/api/v1/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Api is running...");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(
    `Server is running on port ${port} in ${process.env.MODE} mode`.yellow.bold
  );
});
