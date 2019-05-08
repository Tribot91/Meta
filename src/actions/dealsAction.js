// import axios from "axios";
import { FETCH_DEALS } from "./types";

export const fetchDeals = () =>
  // shop,
  // category,
  // availability,
  // term,
  // sort
  async dispatch => {
    //   const res = await axios.get(
    //     `${ROOT_URL}/Deals/shop=${shop}&category=${category}&availability=${availability}&searchTerm=${term}&per_page=50${API_KEY}&sort=${sort}`
    //   );
    const res = true;

    dispatch({
      // type: REQUEST_TYPE.Deals.FETCH_Deals,
      type: FETCH_DEALS,
      payload: res
    });
  };

// export const fetchDeals = () => async dispatch => {
//   // const res = await axios.get("/api/Deals");
//   const res = true;
//   dispatch({ type: FETCH_Deals, payload: res.data });
// };
