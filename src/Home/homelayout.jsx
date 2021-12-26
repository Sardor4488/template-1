import React, { Component, useEffect, useState } from "react";
import { Route, withRouter, Redirect, useHistory } from "react-router-dom";
// router service
import routerService from "./router_service";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/css/bootstrap.min.css";
import "./assets/css/modal.css";
import "./assets/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/plugins/fontawesome/css/all.min.css";
import "./assets/css/style.css";

import "./assets/js/jquery.min.js";
import "./assets/js/popper.min.js";
import "./assets/js/bootstrap.min.js";
import "./assets/js/script.js";
import StatusBar from "./components/StatusBar";
import { UserAuth } from "../Api";

const DefaultLayout = (props) => {
  const token = localStorage.getItem("access_token");
  const { location, match } = props;
  console.log(match);
  const history = useHistory();
  const [path, setPath] = useState("");
  useEffect(() => {
    UserAuth(setPath, history);
  }, []);
  return (
    <div className="main-wrapper">
      <Header />

      {routerService &&
        routerService.map((route, key) => (
          <Route
            key={key}
            exact={route.exact}
            path={`${match.url}${route.path}`}
            component={route.component}
          />
        ))}
      <Route path="/">
        <Redirect to={path} />
      </Route>
      {location.pathname.includes("chat") ||
      location.pathname.includes("voice-call") ||
      location.pathname.includes("video-call") ||
      location.pathname.includes("map-list") ||
      // location.pathname.includes("*") ||
      location.pathname.includes("map-grid") ? (
        ""
      ) : (
        <Footer />
      )}
      {location.pathname.includes("/app/home") || token == null ? (
        ""
      ) : (
        <StatusBar />
      )}
    </div>
  );
};
export default withRouter(DefaultLayout);

// export default withRouter(connect(null)(DefaultLayout));
