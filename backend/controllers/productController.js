import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";
import Redis from "ioredis";
import redisConfig from "../config/redis.js";

const redis = new Redis(redisConfig, {
  tls: {
    rejectUnauthorized: false,
  },
});

const getProducts = asyncHandler(async (req, res) => {
  const cachedProducts = await redis.get("products");

  if (cachedProducts) {
    res.json(JSON.parse(cachedProducts));
  } else {
    const products = await Product.find({});

    await redis.set("products", JSON.stringify(products), "EX", 60);

    res.json(products);
  }
});

export { getProducts };
