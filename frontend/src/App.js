import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import cartScreen from "./Screens/cartScreen";
import HomeScreen from "./Screens/HomeScreen";
import { Link } from "react-router-dom";
import ProductScreen from "./Screens/ProductScreen";
import { useDispatch, useSelector } from "react-redux";
import SigninScreen from "./Screens/signInScreen";
import { signout } from "./Action/userAction";

function App() {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;

	const dispatch = useDispatch();

	const signoutHandler = () => {
		dispatch(signout());
	};

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
						{userInfo ? (
							<div className="dropdown">
								<Link to="#">
									{userInfo.data.name} <i class="fa fa-caret-down"></i>
								</Link>
								<ul className="dropdown-content">
									<Link to="#signout" onClick={signoutHandler}>
										Sign Out
									</Link>
								</ul>
							</div>
						) : (
							<Link to="/signin">Sign In</Link>
						)}
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
