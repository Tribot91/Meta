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

  var product = {
    favourite: false,
    code: 12,
    name: "Kitap",
    barcode: 11111111,
    category: "Okul",
    amount: 32,
    unit: "Adet",
    price: { amount: 3, currency: "AZN" },
    wholesale: { amount: 2.5, currency: "AZN" },
    purchasePrice: { amount: 1, type: "AZN" },
    discount: { amount: 5, currency: "%" }
  };

  return product;
}
