import { useReducer } from "react";
import {
  ADD_TO_TRACKER,
  UPDATE_TRACKER,
  ADD_MULTIPLE_TO_TRACKER,
  REMOVE_FROM_TRACKER,
  UPDATE_KEYS,
  UPDATE_THEMES,
  UPDATE_CURRENT_THEME,
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
        // Not finished
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
    case UPDATE_THEMES:
      return {
        ...state,
        themes: [...action.themes],
      };
    case UPDATE_CURRENT_THEME:
      return {
        ...state,
        currentTheme: action.currentTheme,
      };
    default:
      return state;
  }
};

export function useTrackerReducer(initialState) {
  return useReducer(reducer, initialState);
}
