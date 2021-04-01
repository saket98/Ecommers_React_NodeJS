import React, { useEffect } from "react";
import Product from "../Components/Product";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import { listproducts } from "../Action/ProductAction";
import { useDispatch, useSelector } from "react-redux";

export default function HomeScreen() {
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { loading, error, products } = productList;

	useEffect(() => {
		dispatch(listproducts());
	}, [dispatch]);

	return (
		<div>
			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<MessageBox variant="danger">{error}</MessageBox>
			) : (
				<div className="row center">
					{products.map((product) => (
						<Product key={product._id} product={product}></Product>
					))}
				</div>
			)}
		</div>
	);
}
