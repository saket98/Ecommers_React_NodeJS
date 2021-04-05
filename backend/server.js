const express = require("express");
const mongoose = require("mongoose");
const { products } = require("./data");
const data = require("./data");
const userRouter = require("./router/userRouter");

const app = express();

mongoose
	.connect("mongodb://localhost:27017/Amazon", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then(() => {
		console.log("mongodb connected.");
	})
	.catch((err) => console.log(err.message));

app.get("/api/products/:id", (req, res) => {
	const product = products.find((x) => x._id === req.params.id);
	if (product) {
		res.send(product);
	} else {
		res.status(404).send({ message: "Product not found" });
	}
});

app.get("/api/products", (req, res) => {
	res.send(data.products);
});

app.use("api/users", userRouter);

const PORT = 5000;

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
