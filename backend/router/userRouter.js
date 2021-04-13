const express = require("express");
const data = require("../data.js");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const generateToken = require("../util.js");

const userRouter = express.Router();

userRouter.get(
	"/",
	asyncHandler(async (req, res) => {
		const user = await User.find({});
		res.send({ user });
	})
);

userRouter.get(
	"/seed",
	asyncHandler(async (req, res) => {
		const createUser = await User.insertMany(data.users);
		res.send({ createUser });
	})
);

userRouter.post(
	"/signin",
	asyncHandler(async (req, res) => {
		const user = await User.findOne({ email: req.body.email });
		if (user) {
			console.log(bcrypt.compareSync(req.body.password, user.password));
			if (result) {
				res.send({
					_id: user._id,
					name: user.name,
					email: user.email,
					isAdmin: user.isAdmin,
					token: generateToken(user),
				});
				return;
			}
		}
		res.status(401).send({ message: "Invalid email or password" });
	})
);

module.exports = userRouter;
