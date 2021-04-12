const express = require("express");
const data = require("../data.js");
const User = require("../models/userModel");
const asyncHandler = require('express-async-handler')

const userRouter = express.Router();

userRouter.get(
	"/seed",
	asyncHandler(async (req, res) => {
		const createUser = await User.insertMany(data.users);
		res.send({ createUser });
	})
);

module.exports = userRouter;
