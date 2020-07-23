import { ADD_ITEM, DELETE_ITEM } from "../actionTypes";

const initialState = [
  {
    name: "Carrots",
    category: "Vegetable",
    price: "$1.00",
  },
  {
    name: "Chicken",
    category: "Meat",
    price: "$10.00",
  },
  {
    name: "Raspberries",
    category: "Fruit",
    price: "$5.00",
  },
  {
    name: "Rye Bread",
    category: "Grains",
    price: "$2.00",
  },
];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      const newState = [...state];

      newState.splice(action.index, 1);

      return newState;
    default:
      return state;
  }
}
