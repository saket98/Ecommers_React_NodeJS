const express = require("express");
const data = require("../data.js");

const userRouter = express.Router();

userRouter.get("/seed", async (res, req) => {
	const createUser = await User.insertMany(data.users);
});

module.exports = userRouter;
