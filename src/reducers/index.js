import { combineReducers } from "redux";

import slideReducer from "./SlideReducer";

export default combineReducers({
  slideIndex: slideReducer
});
