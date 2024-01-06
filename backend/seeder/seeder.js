import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import connectDb from "../config/db.js";
import products from "../data/products.js";
import Product from "../models/productModel.js";

dotenv.config();
connectDb();

const importData = async () => {
  try {
    await Product.deleteMany();

    await Product.insertMany(products);
    console.log(`Data Imported!`.green.inverse);
    process.exit();
  } catch (err) {
    console.log(`${err}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany({});
    console.log(`Data Destroyed !`.red.inverse);
    process.exit();
  } catch (err) {
    console.log(`${err}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] == "-d") {
  destroyData();
  console.log("in destroy");
} else {
  importData();
  console.log("in import");
}
