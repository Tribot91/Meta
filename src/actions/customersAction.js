import {
  FETCH_CUSTOMERS_PENDING,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILED,
  CREATE_CUSTOMER_PENDING,
  CREATE_CUSTOMER_SUCCESS,
  CREATE_CUSTOMER_FAILED,
  SEARCH_CUSTOMER
} from "./types";

export const setCustomerSearch = text => {
  return {
    type: SEARCH_CUSTOMER,
    payload: text
  };
};

export const fetchCustomers = () => async dispatch => {
  dispatch({ type: FETCH_CUSTOMERS_PENDING });
  fetch(
    "http://xxx:8080/customer"
  )
    // fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => dispatch({ type: FETCH_CUSTOMERS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: FETCH_CUSTOMERS_FAILED, payload: error }));
};

export const createCustomer = props => async dispatch => {
  dispatch({ type: CREATE_CUSTOMER_PENDING });
  fetch(
    "http://xxx:8080/customer",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(props)
    }
  )
    .then(res => res.json())
    .then(data => dispatch({ type: CREATE_CUSTOMER_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: CREATE_CUSTOMER_FAILED, payload: error }));
};
