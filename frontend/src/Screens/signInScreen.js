import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../Action/userAction";

function SigninScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(signin(email, password));
	};

	return (
		<div>
			<form className="form" onSubmit={submitHandler}>
				<div>
					<h1>Sign In</h1>
				</div>
				<div>
					<lable htmlFor="email">Email address</lable>
					<input type="email" id="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)}></input>
				</div>
				<div>
					<lable htmlFor="password">Password</lable>
					<input type="password" id="password" placeholder="Enter password" required onChange={(e) => setPassword(e.target.value)}></input>
				</div>
				<div>
					<lable />
					<button className="primary" type="submit">
						Sign In
					</button>
				</div>
				<div>
					<label />
					<div>
						New Customer? <Link to="/register">Create your account</Link>
					</div>
				</div>
			</form>
		</div>
	);
}

export default SigninScreen;
