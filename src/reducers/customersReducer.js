import {
  FETCH_CUSTOMERS_PENDING,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILED,
  SEARCH_CUSTOMER
} from "../actions/types";
const INITIAL_STATE_CUSTOMERS = {
  isPending: false,
  customerList: [],
  error: ""
};

export const customersReducer = (
  state = INITIAL_STATE_CUSTOMERS,
  action = {}
) => {
  switch (action.type) {
    case FETCH_CUSTOMERS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case FETCH_CUSTOMERS_SUCCESS: {
      return Object.assign({}, state, {
        customerList: action.payload,
        isPending: false
      });
    }
    case FETCH_CUSTOMERS_FAILED:
      return Object.assign({}, state, {
        customers: action.payload,
        isPending: false
      });
    case SEARCH_CUSTOMER:
      return state;
    //     case "UPDATE_CUSTOMERS":
    //       return action.payload.data;
    //     case "ADD_CUSTOMERS":
    //       return action.payload.data;
    //     case "DELETE_CUSTOMERS":
    //       return action.payload.data;
    default:
      return state;
  }
};

export default customersReducer;

// return {
//   customerdList: [
//     { name: "Metin", surname: "Akşit", debt: 300 },
//     { name: "Ertuğrul", surname: "Akpınar", debt: 500 },
//     { name: "Türhan", surname: "Hüseynov", debt: 2000 },
//     { name: "Amin", surname: "Hüseynov", debt: 10 },
//     { name: "Ediz", surname: "Hun", debt: 700 },
//     { name: "Edison", surname: "", debt: 1300 },
//     { name: "Cem", surname: "Yılmaz", debt: -99999 }
//   ],
//   error: "",
//   isPending: false
// };
