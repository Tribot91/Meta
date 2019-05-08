// import axios from "axios";
import { FETCH_PRODUCT, CREATE_PRODUCT } from "./types";

export const fetchProduct = props => async dispatch => {
  // const res = await axios.get("/api/product");
  const res = true;
  dispatch({ type: FETCH_PRODUCT, payload: res.data });
};

export const createProduct = props => async dispatch => {
  // const res = await axios.post("/api/product", props);
  const res = true;
  dispatch({ type: CREATE_PRODUCT, payload: res.data });
};
