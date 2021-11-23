import React from "react";
import ReactDOM from "react-dom";
import Main from "./App";
import axios from "axios";
import { Provider } from "react-redux";
import Store from "./redux/store";
axios.defaults.baseURL = "http://teach-api.uz/teach-api/public/api/";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");
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
