const express = require("express");
const data = require("../data.js");
const User = require("../models/userModel");

const userRouter = express.Router();

userRouter.get("/seed", async (req, res) => {
	const createUser = await User.insertMany(data.users);
	res.send({ createUser });
});

module.exports = userRouter;
