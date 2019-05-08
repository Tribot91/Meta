import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// actionlarin reducerlara biz ne zaman istersek o zaman ulasmasini sagliyor
import reduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";
// reducer-a ulasmadan butun promise iceren actionlari resolve etmeye yariyor
// import reduxPromise from 'redux-promise';

import App from "./components/App";
import rootReducer from "./reducers";

const initialState = {};

const logger = createLogger();
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(reduxThunk, logger)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); //reduxPromise,

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
