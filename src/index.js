import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import App from "./App";
import store from "./store";
import { connect, Provider } from "react-redux";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
