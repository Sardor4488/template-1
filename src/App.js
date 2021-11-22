import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./app-universal.jsx";
import "react-phone-number-input/style.css";
import config from "config";

const MainApp = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
};

export default MainApp;
