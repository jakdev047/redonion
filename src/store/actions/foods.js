import { SET_FOOD_ITEMS } from "./types";

export const setFoods = foods => {
  return {
    type: SET_FOOD_ITEMS,
    payload: foods
  }
};