import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import { setSlide } from "./actions/Slides";
import configureStore from "./store";

const root = document.getElementById("root");
const store = configureStore();

const slideIndex = parseInt(window.location.hash.slice(1));

if (slideIndex) {
  store.dispatch(setSlide(slideIndex));
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
