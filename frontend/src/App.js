import React from "react";
import {Route, BrowserRouter } from "react-router-dom";
import cartScreen from "./Screens/cartScreen";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

function App() {
	return (
		<BrowserRouter>
			<div className="grid-container">
				<header className="row">
					<div>
						<a className="brand" href="/">
							amazona
						</a>
					</div>
					<div>
						<a href="/cart">Cart</a>
						<a href="/signin">Sign In</a>
					</div>
				</header>
				<main>
					<Route path="/cart/:id?" component={cartScreen}></Route>
					<Route path="/product/:id" component={ProductScreen}></Route>
					<Route path="/" component={HomeScreen} exact></Route>
				</main>
				<footer className="row center">All right reserved</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
