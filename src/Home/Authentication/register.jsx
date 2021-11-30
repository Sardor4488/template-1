import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
// import {registerMyTeacher} from "../../Api/index";
import Loading from "../components/Loading/Loading";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import * as t from "../../redux/types";
import { dispatch } from "../../redux/store";
import { UserData, LoadingOn, LoadingOff } from "../../redux/Actions";

const Register = (props) => {
  const { history } = props;
  const [loading, setLoading] = useState(false);
  const [registerPhoneNumber, setRegisterPhonePnumber] = useState("");
  const [url, setUrl] = useState("create-student");
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password_confirmation: "",
    offert: 0,
  });

  console.log(registerPhoneNumber?.length);

  // const RegisterStudent = (e) => {
  //   e.preventDefault();
  //   let data = {
  //     first_name: register.firstname,
  //     last_name: register.lastname,
  //     email: register.email,
  //     phone_number: registerPhoneNumber,
  //     password: register.password,
  //     password_confirmation: register.password_confirmation,
  //     offert: register.offert,
  //   };
  //     registerMyTeacher(url, data);
  // };
  console.log(url);
  const offerta = () => {
    if (data.offert === 0) {
      setData({ ...data, offert: 1 });
    } else {
      setData({ ...data, offert: 0 });
    }
  };
  const registerMyTeacher = (e) => {
    let regdata = {
      first_name: data.firstname,
      last_name: data.lastname,
      email: data.email,
      phone_number: registerPhoneNumber,
      password: data.password,
      password_confirmation: data.password_confirmation,
      offert: data.offert,
    };
    console.log(data);
    e.preventDefault();
    if (
      regdata.password.length < 8 &&
      regdata.password_confirmation.length < 8
    ) {
      alert("Parolingiz uzunligi 8 ta belgidan kam bo'lmasligi lozim.");
    } else if (regdata.password !== data.password_confirmation) {
      alert("Parrollaringiz bir biriga mos kelmayabdi");
    } else if (regdata.phone_number?.length > 13) {
      console.log(regdata.phone_number.length);
      alert("Telefon raqamingiz 13 ta belgidan oshib ketdi.");
    } else {
      LoadingOn();
      axios
        .post(url, regdata)
        .then((res) => {
          localStorage.setItem("token", res.data.access_token);
          localStorage.setItem("role", res.data.user_data.role);
          console.log(res);
          UserData(res.data.user_data);
          history.push(`app/${res.data.user_data.role}/dashboard`);
          LoadingOff();
        })
        .catch((err) => {
          // console.log(response.status);
          // console.log(response.message);
          // console.log(response.headers);
          console.log(err);
          localStorage.clear();
          LoadingOff();
        });
    }
  };

  return (
    <>
      <div className="bg-pattern-style bg-pattern-style-register">
        <div className="content">
          {/* Register Content */}
          <div className="account-content">
            <div className="d-flex justify-content-between align-content-center">
              <div
                className={`button_register text-uppercase ${
                  url == "create-student" && "active"
                } `}
                onClick={() => setUrl("create-student")}
              >
                O'quvchi
              </div>
              <div
                className={`button_register text-uppercase ${
                  url == "create-teacher" && "active" && "active"
                } `}
                onClick={() => setUrl("create-teacher")}
              >
                O'qituvchi
              </div>
            </div>
            <div className="account-box">
              <div className="login-right">
                {url == "create-student" ? (
                  <div className="login-header">
                    <h3>
                      <span>O'quvchi bo'lib</span> ro'yxatdan o'tish
                    </h3>
                    <p className="text-muted">
                      Iltimos, ro'yxatdan o'tish uchun quyidagi formani
                      to'ldiring:
                    </p>
                  </div>
                ) : (
                  <div className="login-header">
                    <h3>
                      <span>O'qituvchi bo'lib</span> ro'yxatdan o'tish
                    </h3>
                    <p className="text-muted">
                      Iltimos, ro'yxatdan o'tish uchun quyidagi formani
                      to'ldiring:
                    </p>
                  </div>
                )}
                {/* Register Form */}
                <form onSubmit={registerMyTeacher}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label">Ismingiz</label>
                        <input
                          id="first-name"
                          type="text"
                          className="form-control text-capitalize"
                          name="first_name"
                          autoFocus
                          required
                          onChange={(e) =>
                            setData({
                              ...data,
                              firstname: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label">
                          Familiyangiz
                        </label>
                        <input
                          id="last-name"
                          type="text"
                          className="form-control text-capitalize"
                          name="last_name"
                          required
                          onChange={(e) =>
                            setData({
                              ...data,
                              lastname: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">
                      Telefon raqamingiz
                    </label>
                    <PhoneInput
                      international
                      // countryCallingCodeEditable={false}
                      defaultCountry="UZ"
                      value={registerPhoneNumber}
                      onChange={setRegisterPhonePnumber}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">E-mail</label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      required
                      onChange={(e) =>
                        setData({
                          ...data,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label">
                          Parol o'ylab toping
                        </label>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          name="password"
                          required
                          onChange={(e) =>
                            setData({
                              ...data,
                              password: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label">
                          Parolni takrorlang
                        </label>
                        <input
                          id="password-confirm"
                          type="password"
                          className={`form-control`}
                          name="password_confirmation"
                          required
                          onChange={(e) =>
                            setData({
                              ...data,
                              password_confirmation: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-control-xs custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="agreeCheckboxUser"
                        id="agree_checkbox_user"
                        onClick={offerta}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="agree_checkbox_user"
                      >
                        Ommaviy oferta <Link to="/oferta">shartlariga</Link>
                        <span> roziman</span>
                      </label>{" "}
                    </div>
                  </div>
                  <button
                    className={`btn btn-primary login-btn ${
                      data.offert == 0 ? "disabled" : ""
                    }`}
                    type="submit"
                  >
                    Ro'yxatdan o'tish
                  </button>
                  {/* <button className="btn btn-primary login-btn" type="submit">Create Account</button> */}
                  <div className="account-footer text-center mt-3">
                    Ro'yxatdan o'tganmisiz?{" "}
                    <Link className="forgot-link mb-0" to="/login">
                      Kirish
                    </Link>
                  </div>
                </form>
                {/* /Register Form */}
              </div>
            </div>
          </div>
          {/* /Register Content */}
        </div>
      </div>
    </>
  );
};

export default Register;
