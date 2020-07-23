import { SET_CATEGORY_FILTERS } from "../actionTypes";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY_FILTERS:
      return [...action.payload];
    default:
      return state;
  }
}
