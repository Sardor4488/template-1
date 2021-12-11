import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { register } from "../../Api/register";

const Register = (props) => {
  const { history } = props;
  const [registerPhoneNumber, setRegisterPhonePnumber] = useState("");
  const [url, setUrl] = useState("create-student");
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password_confirmation: "",
    offert: 0,
  });
  const offerta = () => {
    if (data.offert === 0) {
      setData({ ...data, offert: 1 });
    } else {
      setData({ ...data, offert: 0 });
    }
  };
  const registerMyTeacher = (e) => {
    e.preventDefault();
    let regdata = {
      first_name: data.firstname,
      last_name: data.lastname,
      email: data.email,
      phone_number: registerPhoneNumber,
      password: data.password,
      password_confirmation: data.password_confirmation,
      offert: data.offert,
    };
    register(regdata, history, url);
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
