const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  return [
    {
      product: "Kitap",
      code: 123,
      barcode: 11111111,
      amount: 45,
      buyPrice: 12,
      cost: 7,
      sum: 14,
      profitPercentage: 100,
      price: 14
    },
    {
      product: "Alienware Laptop",
      code: 1201,
      barcode: 6898210221223,
      amount: 4,
      buyPrice: 4800,
      cost: 4650,
      sum: 6000,
      profitPercentage: 50,
      price: 9000
    }
  ];
}
