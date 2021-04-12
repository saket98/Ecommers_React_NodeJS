const express = require("express");
const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const data = require("../data");

const productRouter = express.Router();

productRouter.get(
	"/",
	asyncHandler(async (req, res) => {
		const products = await Product.find({});
		res.send(products);
	})
);

productRouter.get(
	"/seed",
	asyncHandler(async (req, res) => {
        await Product.remove({})
		const createdProducts = await Product.insertMany(data.products);
		res.send({ createdProducts });
	})
);

productRouter.get(
	"/:id",
	asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);
		if (product) res.send({ product });
		else res.status(404).send({ message: "Product not found" });
	})
);
module.exports = productRouter;
