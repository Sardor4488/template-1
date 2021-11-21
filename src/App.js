import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter,
  withRouter,
} from "react-router-dom";
import App from "./app-universal.jsx";
import "react-phone-number-input/style.css";
import config from "config";
import { Provider } from "react-redux";
import Store, { dispatch } from "./redux/store.js";
import axios from "axios";
import * as t from "./redux/types";

const MainApp = (props) => {
  return (
    <Provider store={Store}>
      <Router>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default MainApp;
