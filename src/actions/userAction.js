// import axios from "axios";
import { FETCH_USER, FETCH_USER_SHOPS } from "./types";

export const fetchUser = () => async dispatch => {
  // const res = await axios.get("/api/current_user");
  const res = true;
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchUserShops = () => async dispatch => {
  // const res = await axios.get("/api/user_shops");
  const res = true;
  dispatch({ type: FETCH_USER_SHOPS, payload: res.data });
};
