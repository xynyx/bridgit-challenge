import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const initialState = {
  items: [
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
  ],
  filters: [],
};

const store = createStore(rootReducer, initialState, composeWithDevTools());

export default store;
