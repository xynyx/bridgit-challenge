import { ADD_ITEM } from "../actionTypes";

const initialState = [
  {
    name: "Carrot",
    category: "Vegetable",
    price: "$1.00",
  },
  {
    name: "Chicken",
    category: "Meat",
    price: "$10.00",
  },
  {
    name: "Raspberry",
    category: "Fruit",
    price: "$5.00",
  },
];

export default function (state = initialState, action) {
  console.log("here")
  switch (action.type) {

    case ADD_ITEM:
      console.log("hesdfre?")
      return [...state, action.payload];
    default:
      return state;
  }
}
