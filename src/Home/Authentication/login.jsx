import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import axios from "axios";

import { LoadingOff, LoadingOn, UserData } from "../../redux/Actions";
const Login = (props) => {
  const { history } = props;
  const [inputType, setInputType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const changeInputPassword = () => {
    if (inputType == "password") {
      setInputType("text");
    } else if (inputType == "text") {
      setInputType("password");
    }
  };
  const loginMyteacher = (e) => {
    e.preventDefault();
    let data = {
      email,
      password,
    };
    LoadingOn();
    axios
      .post("login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        localStorage.setItem("role", res.data.user.role);
        console.log(res.data.access_token);
        history.push(`app/${res.data.user.role}/dashboard`);
        UserData(res.data.user);
        LoadingOff();
      })
      .catch((err) => {
        console.log(err);
        LoadingOff();
      });
    console.log(data);
  };

  localStorage.clear();
  return (
    <>
      <div className="bg-pattern-style">
        <div className="content">
          {/* Login Tab Content */}
          <div className="account-content">
            <div className="account-box">
              <div className="login-right">
                <div className="login-header">
                  <h3>
                    <span>MyTeacher</span>ga kirish
                  </h3>
                  <p className="text-muted">Shaxsiy kabinetga kirish</p>
                </div>
                <form onSubmit={loginMyteacher}>
                  <div className="form-group">
                    <label className="form-control-label">E-mail</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email || ""}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Parolingiz</label>
                    <div className="pass-group">
                      <input
                        type={inputType}
                        className="form-control pass-input"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span
                        className={` ${
                          inputType == "password"
                            ? "fas fa-eye "
                            : "fas fa-eye-slash"
                        } toggle-password`}
                        onClick={changeInputPassword}
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <Link className="forgot-link" to="/forgot-password">
                      Parolni unutdingizmi?
                    </Link>
                  </div>
                  <button type="submit" className="btn btn-primary login-btn">
                    Kirish
                  </button>
                  {/* <button className="btn btn-primary login-btn" type="submit">Login</button> */}
                  <div className="text-center dont-have">
                    Ro'yxatdan o'tmaganmisiz?{" "}
                    <Link to="/register">Ro'yxatdan o'tish</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Login Tab Content */}
        </div>
      </div>
    </>
  );
};

export default Login;
