import React, { useState } from "react";
import CheckoutSteps from "../Components/CheckoutSteps";

export default function ShippingAddressScreen() {
	const [fullName, setFullName] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [country, setCountry] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        
    }

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
			</form>
		</div>
	);
}
