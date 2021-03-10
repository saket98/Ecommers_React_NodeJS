import React from "react";
import Rating from "../Components/Rating";
import data from "../data";

export default function ProductScreen(props) {
	const product = data.products.find((x) => x._id === props.match.params.id);

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
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
	);
}
