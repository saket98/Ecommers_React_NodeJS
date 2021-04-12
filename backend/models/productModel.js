const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
	{
		name: { type: String, require: true },
		category: { type: String, require: true },
		image: { type: String, require: true },
		brand: { type: String, require: true },
		description: { type: String, require: true },
		price: { type: Number, require: true },
		rating: { type: Number, require: true },
		numReviews: { type: Number, require: true },
		countInStock: { type: Number, require: true },
	},
	{
		timestamp: true,
	}
);

const Product = mongoose.model("Product", productSchema)

module.exports = Product