import { SET_CATEGORY_FILTERS } from "../actionTypes";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY_FILTERS:
      // if (state.includes(action.payload)) {
      //   console.log('state.indexOf(action.payload)', state.indexOf(action.payload))
      //   return [state.splice(state.indexOf(action.payload), 1)]
      // }
      // console.log("here?")
    // if (action.payload.length === 0) return state;
    return [...action.payload]

    // const itemsAfterFilter = state.filter(item => {
    //   return action.payload.includes(item.category);
    // });
    // console.log('itemsAfterFilter', itemsAfterFilter)
    // return Object.assign([], itemsAfterFilter);
    default:
      return state;
  }
}
