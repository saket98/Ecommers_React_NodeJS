const express = require("express");
const app = express();
const data = require("./data");

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
