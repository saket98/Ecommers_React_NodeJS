import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveShippingAddress } from "../Action/CartAction";
import CheckoutSteps from "../Components/CheckoutSteps";

export default function ShippingAddressScreen(props) {
	const [fullName, setFullName] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [country, setCountry] = useState("");
	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(saveShippingAddress({ fullName, address, city, postalCode, country }));
		props.history.push('/payment')
	};

	return (
		<div>
			<CheckoutSteps step1 step2></CheckoutSteps>
			<form className="form" onSubmit={submitHandler}>
				<div>
					<h1>Shipping Address</h1>
				</div>
				<div>
					<label htmlFor="fullName">Full Name</label>
					<input type="text" id="fullName" placeholder="Enter Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} require></input>
				</div>
				<div>
					<label htmlFor="address">Address</label>
					<input type="text" id="address" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} require></input>
				</div>
				<div>
					<label htmlFor="city">City</label>
					<input type="text" id="city" placeholder="Enter City Name" value={city} onChange={(e) => setCity(e.target.value)} require></input>
				</div>
				<div>
					<label htmlFor="postalcode">Postal Code</label>
					<input type="text" id="postalcode" placeholder="Enter Postal Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} require></input>
				</div>
				<div>
					<label htmlFor="country">Country</label>
					<input type="text" id="country" placeholder="Enter Country Name" value={country} onChange={(e) => setCountry(e.target.value)} require></input>
				</div>
				<div>
					<lable />
					<button className="primary" type="submit">
						Continue
					</button>
				</div>
			</form>
		</div>
	);
}
