import { ADD_ITEM, DELETE_ITEM } from "./actionTypes";

export const addItemToList = item => dispatch => {
  dispatch({
    type: ADD_ITEM,
    payload: item,
  });
};

export const deleteItemFromList = index => dispatch => {
  dispatch({
    type: DELETE_ITEM,
    index,
  });
};
