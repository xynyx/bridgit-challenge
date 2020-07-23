import { SET_CATEGORY_FILTERS } from "../actionTypes";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY_FILTERS:
      console.log('action', action)
    default:
      return state;
  }
}
