const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  return [
    {
      no: 1723,
      type: "Alış",
      date: "2018/8/10",
      from: "Bayi 2",
      to: "",
      note: "",
      reserve: false,
      price: 520,
      debt: 80,
      discount: {
        amount: 7,
        type: "AZN"
      }
    },
    {
      no: 1701,
      type: "Alış",
      date: "2018/2/9",
      from: "Bayi 3",
      to: "",
      note: "Haftaya ödeyecek",
      reserve: false,
      price: 120,
      debt: 1,
      discount: {
        amount: 3,
        type: "%"
      }
    },
    {
      no: 1650,
      type: "Alış",
      date: "2018/1/23",
      from: "Bayi 2",
      to: "Metin Akşit",
      note: "",
      reserve: false,
      price: 10,
      debt: 10,
      discount: {
        amount: 10,
        type: "%"
      }
    },
    {
      no: 1612,
      type: "Alış",
      date: "2018/1/2",
      from: "Bayi 2",
      to: "",
      note: "",
      reserve: false,
      price: 120,
      debt: 0,
      discount: {
        amount: 25,
        type: "AZN"
      }
    }
  ];
}
