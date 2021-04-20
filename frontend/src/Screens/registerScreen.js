import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../Action/userAction";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";

function RegisterScreen(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [ConfirmedPassword, setConfirmedPassword] = useState("");

	const redirect = props.location.search ? props.location.search.split("?")[1] : "/";

	const userRegister = useSelector((state) => state.userRegister);
	const { userInfo, loading, error } = userRegister;

	const dispatch = useDispatch();
	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== ConfirmedPassword) {
			alert("Password and Confirm Password is not matching");
		} else {
			dispatch(register(name, email, password));
		}
	};

	useEffect(() => {
		if (userInfo) {
			props.history.push(redirect);
		}
	}, [props.history, redirect, userInfo]);

	return (
		<div>
			<form className="form" onSubmit={submitHandler}>
				<div>
					<h1>Create Account</h1>
				</div>
				{loading && <LoadingBox></LoadingBox>}
				{error && <MessageBox variant="danger">{error}</MessageBox>}
				<div>
					<lable htmlFor="name">Name</lable>
					<input type="name" id="name" placeholder="Enter name" required onChange={(e) => setName(e.target.value)}></input>
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
					<lable htmlFor="confirmedPassword">Confirm Password</lable>
					<input type="password" id="confirmedPassword" placeholder="Please renter password" required onChange={(e) => setConfirmedPassword(e.target.value)}></input>
				</div>
				<div>
					<lable />
					<button className="primary" type="submit">
						Register
					</button>
				</div>
				<div>
					<label />
					<div>
						Already have an account <Link to={`/signin?redirect=${redirect}`}>Sing-In</Link>
					</div>
				</div>
			</form>
		</div>
	);
}

export default RegisterScreen;
