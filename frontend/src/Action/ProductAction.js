import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../Constants/ProductConstants";
import Axios from "axios";

export const listproducts = () => async (dispatch) => {
	dispatch({
		type: PRODUCT_LIST_REQUEST,
	});
	try {
		const { data } = await Axios.get("/api/products");
		dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
	}
};
