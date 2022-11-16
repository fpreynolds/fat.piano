import { useReducer } from "react";
import { ADD_TO_TRACKER, UPDATE_TRACKER } from "./actions;";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_TRACKER:
      return {
        ...state,
        mood: [...action.mood],
      };
    case UPDATE_TRACKER: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export function useTrackerReducer(initialState) {
  return useReducer(reducer, initialState);
}
