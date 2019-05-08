// import axios from "axios";
import { FETCH_SHOPS } from "./types";

export const fetchShops = () => async dispatch => {
  // const res = await axios.get("/api/shops");
  const res = true;
  dispatch({ type: FETCH_SHOPS, payload: res.data });
};
