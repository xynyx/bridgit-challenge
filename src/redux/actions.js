import { ADD_ITEM, DELETE_ITEM, SET_CATEGORY_FILTERS } from "./actionTypes";

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

export const setCategoryFilters = categories => dispatch => {
  // console.log("categories", categories);
  dispatch({
    type: SET_CATEGORY_FILTERS,
    payload: categories,
  });
};
