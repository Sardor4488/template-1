import React, { Component, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import HomeLayout from "./Home/homelayout.jsx";
import Login from "./Home/Authentication/login";
import Register from "./Home/Authentication/register";
import Forgotpassword from "./Home/Authentication/forgotpassword";

//Admin Layout
import AdminLayout from "./Admin/initialpage/Sidebar/DefaultLayout";
import AdminLogin from "./Admin/MainPage/Pages/Authentication/login";
import AdminRegister from "./Admin/MainPage/Pages/Authentication/register";
import AdminForgotpassword from "./Admin/MainPage/Pages/Authentication/forgotpassword";
import LockScreen from "./Admin/MainPage/Pages/Authentication/lockscreen";
import Dashboard from "./Home/Mentor/mentordashboard";
import MenteeDashboard from "./Home/Mentee/menteedashboard";
import axios from "axios";
import { dispatch } from "./redux/store.js";
import * as t from "./redux/types";

const AppUniversal = (props) => {
  const { location, history } = props;

  useEffect(() => {
    if (
      location.pathname.includes("login") ||
      location.pathname.includes("register") ||
      location.pathname.includes("forgotpassword") ||
      location.pathname.includes("otp") ||
      location.pathname.includes("lockscreen")
    ) {
      $("body").addClass("account-page");
    } else if (
      location.pathname.includes("error-404") ||
      location.pathname.includes("error-500")
    ) {
      $("body").addClass("error-page");
    } else if (location.pathname.includes("chat")) {
      $("body").addClass("chat-page");
    }
  }, []);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const url = role == "student" ? "student/student-me" : "teacher/teacher-me";
  const [path, setPath] = useState("");
  const author = () => {
    if (token) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const bodyParameters = {};
      axios
        .post(url, bodyParameters, config)
        .then((res) => {
          const action = { type: t.AUTHOR, payload: res.data };
          dispatch(action);
          // localStorage.setItem("role", res.data.role);
          // console.log(res);
          setPath(`/app/${role}/dashboard`);
          // history.push(
          //   res.data.role === "student"
          //     ? "app/mentee/dashboard"
          //     : "app/teacher/dashboard"
          // );
          // <Redirect
          //   to={
          //     res.data.role === "student"
          // //      ? "app/mentee/dashboard"
          //       : "app/teacher/dashboard"
          //   }
          //>;
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else if (token == "" || token == null || token == undefined) {
      // history.push("app/home");
      // <Redirect to={"app/home"} />;
      setPath("app/home");
    }
  };
  useEffect(() => {
    author();
  }, []);
  // if (location.pathname === "/") {
  //   return <Redirect to={"app/home"} />;
  // }
  return (
    <>
      <Switch>
        <Route path="/app" component={HomeLayout} />
        <Route path="/admin" component={AdminLayout} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={Forgotpassword} />
        <Route path="/admin_login" component={AdminLogin} />
        <Route path="/admin_register" component={AdminRegister} />
        <Route path="/admin_forgot-password" component={AdminForgotpassword} />
        <Route path="/lock-screen" component={LockScreen} />
        <Route path="/">
          <Redirect to={path} />
        </Route>
      </Switch>
    </>
  );
};
export default AppUniversal;
