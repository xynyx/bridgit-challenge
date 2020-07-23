import { ADD_ITEM, DELETE_ITEM, SET_CATEGORY_FILTERS } from "../actionTypes";

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
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      const newState = [...state];
      newState.splice(action.index, 1);
      return newState;
    // case SET_CATEGORY_FILTERS:
    //   // if (action.payload.length === 0) return state;

    //   const itemsAfterFilter = state.filter(item => {
    //     return action.payload.includes(item.category);
    //   });
    //   console.log('itemsAfterFilter', itemsAfterFilter)
    //   return Object.assign([], itemsAfterFilter);
    default:
      return state;
  }
}
