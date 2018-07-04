import * as ActionTypes from "./ActionTypes";

export const nextSlide = () => ({
  type: ActionTypes.NEXT_SLIDE
});

export const previousSlide = () => ({
  type: ActionTypes.PREVIOUS_SLIDE
});

export const setSlide = index => ({
  type: ActionTypes.SET_SLIDE,
  index
});
