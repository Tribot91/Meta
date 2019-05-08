const INITIAL_STATE = null;

export default function(state = INITIAL_STATE, action) {
  //   switch (action.type) {
  //     case "FETCH_PRODUCT":
  //       return [action.payload.data, ...state];
  //     case "UPDATE_PRODUCT":
  //       return action.payload.data;
  //     case "ADD_PRODUCT":
  //       return action.payload.data;
  //     case "DELETE_PRODUCT":
  //       return action.payload.data;
  //     default:
  //       return state;
  //   }

  var categories = ["Okul", "Ofis", "Ev"];

  return categories;
}
