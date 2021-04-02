import React, { useEffect, useState } from "react";
import Rating from "../Components/Rating";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import { detailsproducts } from "../Action/ProductAction";

export default function ProductScreen(props) {
	const dispatch = useDispatch();
	const productId = props.match.params.id;
	const [qty, setQty] = useState(1);
	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;

	useEffect(() => {
		dispatch(detailsproducts(productId));
	}, [dispatch, productId]);

	const addToCartHandler = () =>{
		props.history.push(`/cart/${productId}/qty={qty}`)
	}

	return (
		<div>
			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<MessageBox variant="danger">{error}</MessageBox>
			) : (
				<div>
					<div className="row top">
						<div className="col-2">
							<img className="large" src={product.image} alt={product.name} title={product.name}></img>
						</div>
						<ul>
							<li>
								<h1>{product.name}</h1>
							</li>
							<li>
								<Rating rating={product.rating} numReviews={product.numReviews}></Rating>
							</li>
							<li>
								<h1>₹{product.price}</h1>
							</li>
							<li>
								<h1>{product.description}</h1>
							</li>
						</ul>
						<div className="col-1">
							<div className="card card-body">
								<ul>
									<li>
										<div className="row">
											<div>Price</div>
											<div className="price">₹{product.price}</div>
										</div>
									</li>
									<li>
										<div className="row">
											<div>Status</div>
											<div>{product.countInStock > 0 ? <span className="success">In Stock</span> : <span className="error">Out of Stock</span>}</div>
										</div>
									</li>
									{product.countInStock > 0 && (
										<>
											<li>
												<div className="row">
													<div>Qty</div>
													<div>
														<select value={qty} onChange={(e) => setQty(e.target.value)}>
															{[...Array(product.countInStock).keys()].map((x) => {
																<option key={x + 1} value={x + 1}>
																	{x + 1}
																</option>;
															})}
														</select>
													</div>
												</div>
											</li>
											<li>
												<button onClick={addToCartHandler} className="primary block">Add to Cart</button>
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
