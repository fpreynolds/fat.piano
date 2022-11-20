import { useReducer } from "react";
import {
  ADD_TO_TRACKER,
  UPDATE_TRACKER,
  ADD_MULTIPLE_TO_TRACKER,
  REMOVE_FROM_TRACKER,
  UPDATE_KEYS,
  UPDATE_CURRENT_KEY,
} from "./actions;";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_TRACKER:
      return {
        ...state,
        tracker: [...action.key],
      };
    case UPDATE_TRACKER:
      return {
        ...state,
        //!TODO:
        tracker: [...action.tracker],
        // Not finished, may not work
      };
    case ADD_MULTIPLE_TO_TRACKER:
      return {
        ...state,
        tracker: [...state.tracker, ...action.keys],
      };
    case REMOVE_FROM_TRACKER:
      let newState = state.tracker.filter((key) => {
        return key._id !== action._id;
      });
      return {
        ...state,
        tracker: newState,
      };
    case UPDATE_KEYS:
      return {
        ...state,
        keys: [...action.keys],
      };
    case UPDATE_CURRENT_KEY:
      return {
        ...state,
        currentKey: action.currentKey,
      };
    default:
      return state;
  }
};

export function useTrackerReducer(initialState) {
  return useReducer(reducer, initialState);
}
