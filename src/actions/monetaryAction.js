// import axios from "axios";
import { FETCH_TRANSACTIONS, CREATE_TRANSACTION } from "./types";

export const fetchTransactions = props => async dispatch => {
  // const res = await axios.get("/api/product");
  const res = true;
  dispatch({ type: FETCH_TRANSACTIONS, payload: res.data });
};

export const createTransaction = props => async dispatch => {
  // const res = await axios.post("/api/product", props);
  const res = true;
  dispatch({ type: CREATE_TRANSACTION, payload: res.data });
};
