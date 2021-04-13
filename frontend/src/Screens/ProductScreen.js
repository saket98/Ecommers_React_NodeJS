import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsproducts } from "../Action/ProductAction";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import Rating from "../Components/Rating";

export default function ProductScreen(props) {
	const dispatch = useDispatch();
	const productId = props.match.params.id;
	const [qty, setQty] = useState(1);
	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;
	console.log(product);

	useEffect(() => {
		dispatch(detailsproducts(productId));
	}, [dispatch, productId]);

	const addToCartHandler = () => {
		props.history.push(`/cart/${productId}?qty=${qty}`);
	};
	return (
		<div>
			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<MessageBox variant="danger">{error}</MessageBox>
			) : (
				<div>
					<Link to="/">Back to result</Link>
					<div className="row top">
						<div className="col-2">
							<img className="large" src={product.product.image} alt={product.product.name}></img>
						</div>
						<div className="col-1">
							<ul>
								<li>
									<h1>{product.product.name}</h1>
								</li>
								<li>
									<Rating rating={product.product.rating} numReviews={product.product.numReviews}></Rating>
								</li>
								<li>Pirce : ₹{product.product.price}</li>
								<li>
									<p>
										Description : 
										{product.product.description}
									</p>
								</li>
							</ul>
						</div>
						<div className="col-1">
							<div className="card card-body">
								<ul>
									<li>
										<div className="row">
											<div>Price</div>
											<div className="price">₹{product.product.price}</div>
										</div>
									</li>
									<li>
										<div className="row">
											<div>Status</div>
											<div>{product.product.countInStock > 0 ? <span className="success">In Stock</span> : <span className="danger">Unavailable</span>}</div>
										</div>
									</li>
									{product.product.countInStock > 0 && (
										<>
											<li>
												<div className="row">
													<div>Qty</div>
													<div>
														<select value={qty} onChange={(e) => setQty(e.target.value)}>
															{[...Array(product.product.countInStock).keys()].map((x) => (
																<option key={x + 1} value={x + 1}>
																	{x + 1}
																</option>
															))}
														</select>
													</div>
												</div>
											</li>
											<li>
												<button onClick={addToCartHandler} className="primary block">
													Add to Cart
												</button>
											</li>
										</>
									)}
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
