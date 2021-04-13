const jwt = require("jsonwebtoken");

export const generateToken = (user) => {
	return jwt.sign(
		{
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		},
		process.env.SECRET,
		{
			expiresIn: "30d",
		}
	);
};
