import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import cartScreen from "./Screens/cartScreen";
import HomeScreen from "./Screens/HomeScreen";
import { Link } from "react-router-dom";
import ProductScreen from "./Screens/ProductScreen";
import { useSelector } from "react-redux";
import SigninScreen from "./Screens/signInScreen"

function App() {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	return (
		<BrowserRouter>
			<div className="grid-container">
				<header className="row">
					<div>
						<a className="brand" href="/">
							Clone
						</a>
					</div>
					<div>
						<Link to="/cart">
							Cart
							{cartItems.length > 0 && <span className="badge">{cartItems.length}</span>}
						</Link>
						<Link to="/signin">Sign In</Link>
					</div>
				</header>
				<main>
					<Route path="/cart/:id?" component={cartScreen}></Route>
					<Route path="/product/:id" component={ProductScreen}></Route>
					<Route path="/signin" component={SigninScreen}></Route>
					<Route path="/" component={HomeScreen} exact></Route>
				</main>
				<footer className="row center">All right reserved</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
