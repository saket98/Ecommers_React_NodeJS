const express = require("express");
const { products } = require("./data");
const app = express();
const data = require("./data");

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



app.get("/", function (req, res) {
	res.send("Hello World...!!!");
});

const PORT = 5000;

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
