import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import App from "./app-universal.jsx";
import "react-phone-number-input/style.css";
import config from "config";
import { Provider } from "react-redux";
import Store from "./redux/store.js";

const MainApp = () => (
  <Provider store={Store}>
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
);

export default MainApp;
