const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  //   switch (action.type) {
  //     case "FETCH_USER_SHOPS":
  //       return [action.payload.data, ...state];
  //     default:
  //       return state;
  //   }

  var userShops = ["BAYİ 1", "BAYİ 3", "BAYİ 4"];

  return userShops;
}
