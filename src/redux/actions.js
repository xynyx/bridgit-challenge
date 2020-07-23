import { ADD_ITEM } from "./actionTypes";

export const addItemToList = item => dispatch => {
  console.log('item', item)
  console.log("HERE?")
  dispatch({
    type: ADD_ITEM,
    payload: item,
  });
};
