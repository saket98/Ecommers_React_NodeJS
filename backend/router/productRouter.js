const express = require("express");
const Product = require("../models/productModel");
const asyncHandler = require('express-async-handler');
const data = require("../data");

const productRouter = express.Router();

productRouter.get(
	"/:id",
	asyncHandler(async (req, res) => {
		const createdProducts = await Product.insertMany(data.products);
		res.send({ createdProducts });
	})
);

module.exports = productRouter;
