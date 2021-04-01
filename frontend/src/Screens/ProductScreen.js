import React, { useEffect } from "react";
import Rating from "../Components/Rating";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import { detailsproducts } from "../Action/ProductAction";

export default function ProductScreen(props) {
	const dispatch = useDispatch();
	const productId = props.match.params.id;
	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;

	useEffect(() => {
		dispatch(detailsproducts(productId));
	}, [dispatch, productId]);

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
									<li>
										<button className="primary block">Add to Cart</button>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
