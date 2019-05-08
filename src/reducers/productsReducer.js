const INITIAL_STATE = { products: [] };

export default function(state = INITIAL_STATE, action) {
  //   switch (action.type) {
  //     case "FETCH_PRODUCTS":
  //       return [action.payload.data, ...state];
  //     case "UPDATE_PRODUCTS":
  //       return action.payload.data;
  //     case "ADD_PRODUCTS":
  //       return action.payload.data;
  //     case "DELETE_PRODUCTS":
  //       return action.payload.data;
  //     default:
  //       return state;
  //   }

  // bu sayfada bu kadar bilgi cekilmesine gerek olmayacak. ilerde bu sayfanin cektigi kisitli bilgiden urun kodu sadece detaylar sayfasina gonderilecek ve
  // detaylar sayfasi gereken butun detayli urun bilgilerini cekecek
  return [
    {
      favourite: false,
      code: 12,
      name: "Kitap",
      category: "Okul",
      barcode: 11111111,
      amount: 32,
      unit: "Adet",
      price: { amount: 3, currency: "AZN" },
      wholesale: { amount: 2.5, currency: "AZN" },
      purchasePrice: { amount: 1, currency: "AZN" },
      discount: { amount: 5, type: "%" }
    },
    {
      favourite: false,
      code: 3,
      name: "Defter",
      category: "Okul",
      barcode: 22222222,
      amount: 44,
      unit: "Adet",
      price: { amount: 1, currency: "AZN" },
      wholesale: { amount: 0.8, currency: "AZN" },
      purchasePrice: { amount: 0.6, currency: "AZN" },
      discount: { amount: 5, type: "TL" }
    },
    {
      favourite: false,
      code: 4,
      name: "Kalem",
      category: "Okul",
      barcode: 33333333,
      amount: 70,
      unit: "Adet",
      price: { amount: 2, currency: "AZN" },
      wholesale: { amount: 1.8, currency: "AZN" },
      purchasePrice: { amount: 1.5, currency: "AZN" },
      discount: { amount: 5, type: "%" }
    },
    {
      favourite: true,
      code: 1,
      name: "Çanta",
      category: "Okul",
      barcode: 44444444,
      amount: 4,
      unit: "Adet",
      price: { amount: 18, currency: "AZN" },
      wholesale: { amount: 15, currency: "AZN" },
      purchasePrice: { amount: 13, currency: "AZN" },
      discount: { amount: 10, type: "%" }
    }
  ];
}
