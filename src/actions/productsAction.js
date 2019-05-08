// import axios from "axios";
import { FETCH_PRODUCTS } from "./types";

export const fetchProducts = (
  shop,
  category,
  availability,
  term,
  sort
) => async dispatch => {
  //   const res = await axios.get(
  //     `${ROOT_URL}/products/shop=${shop}&category=${category}&availability=${availability}&searchTerm=${term}&per_page=50${API_KEY}&sort=${sort}`
  //   );
  const res = true;

  dispatch({
    // type: REQUEST_TYPE.PRODUCTS.FETCH_PRODUCTS,
    type: FETCH_PRODUCTS,
    payload: res
  });
};

// export const fetchProducts = () => async dispatch => {
//   // const res = await axios.get("/api/products");
//   const res = true;
//   dispatch({ type: FETCH_PRODUCTS, payload: res.data });
// };
