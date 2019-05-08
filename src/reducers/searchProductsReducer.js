const INITIAL_STATE = { products: [] };

export default function(state = INITIAL_STATE, action) {
  return [
    {
      code: 12,
      name: "Kitap",
      barcode: 11111111,
      amount: 32,
      unit: "Adet",
      price: { amount: 3, currency: "AZN" }
    },
    {
      code: 3,
      name: "Defter",
      barcode: 22222222,
      amount: 44,
      unit: "Adet",
      price: { amount: 1, currency: "AZN" }
    },
    {
      code: 4,
      name: "Kalem",
      barcode: 33333333,
      amount: 70,
      unit: "Adet",
      price: { amount: 2, currency: "AZN" }
    },
    {
      code: 1,
      name: "Çanta",
      barcode: 44444444,
      amount: 4,
      unit: "Adet",
      price: { amount: 18, currency: "AZN" }
    }
  ];
}
