import React from "react";
import ReactDOM from "react-dom";
import Main from "./App";
import axios from "axios";
import { Provider } from "react-redux";
import Store from "./redux/store";
const token = localStorage.getItem("token");
axios.defaults.baseURL = "  ";
axios.defaults.headers.common["Authorization"] = token && "Bearer " + token;
ReactDOM.render(
  <Provider store={Store}>
    <Main />
  </Provider>,
  document.getElementById("app")
);

if (module.hot) {
  // enables hot module replacement if plugin is installed
  module.hot.accept();
}
