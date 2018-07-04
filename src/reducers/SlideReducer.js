import * as ActionTypes from "../actions/ActionTypes";

export default function slideReducer(state = 0, action) {
  const { type } = action;
  switch (type) {
    case ActionTypes.NEXT_SLIDE:
      return state + 1;
    case ActionTypes.PREVIOUS_SLIDE:
      return state > 0 ? state - 1 : 0;
    case ActionTypes.SET_SLIDE:
      return action.index;
    default:
      return state;
  }
}
