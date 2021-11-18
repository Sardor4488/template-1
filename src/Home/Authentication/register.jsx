import React, { useState } from "react";
// import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { AppLogo } from "../../constant/imagepath_home";
import { registerStudents, registerTeacher } from "../../Api/index";
import Loading from "../components/Loading/Loading";
import PhoneInput from "react-phone-number-input";

const Home = () => {
  const [activeClassRegister, setActiveClassRegister] = useState(0);
  const changeRegister = (id) => {
    setActiveClassRegister(id);
  };
  const [loading, setLoading] = useState(false);
  const [registerPhoneNumber, setRegisterPhonePnumber] = useState("");
  const [register, setRegister] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password_confirmation: "",
    offert: 0,
  });

  const RegisterStudent = (e) => {
    e.preventDefault();
    let data = {
      first_name: register.firstname,
      last_name: register.lastname,
      email: register.email,
      phone_number: registerPhoneNumber,
      password: register.password,
      password_confirmation: register.password_confirmation,
      offert: register.offert,
    };
    if (activeClassRegister == 0) {
      registerStudents(data, setLoading);
    } else {
      registerTeacher(data, setLoading);
    }
    console.log(data);
  };

  const offerta = () => {
    if (register.offert == 0) {
      setRegister({ ...register, offert: 1 });
    } else {
      setRegister({ ...register, offert: 0 });
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-pattern-style bg-pattern-style-register">
          <div className="content">
            {/* Register Content */}
            <div className="account-content">
              <div className="d-flex justify-content-between align-content-center">
                <div
                  className={`button_register text-uppercase ${
                    activeClassRegister == 0 && "active"
                  } `}
                  onClick={() => changeRegister(0)}
                >
                  O'quvchi
                </div>
                <div
                  className={`button_register text-uppercase ${
                    activeClassRegister == 1 && "active"
                  } `}
                  onClick={() => changeRegister(1)}
                >
                  O'qituvchi
                </div>
              </div>
              <div className="account-box">
                <div className="login-right">
                  {activeClassRegister == 0 ? (
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
                  <form onSubmit={RegisterStudent}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-control-label">Ismingiz</label>
                          <input
                            id="first-name"
                            type="text"
                            className="form-control"
                            name="first_name"
                            autoFocus
                            required
                            onChange={(e) =>
                              setRegister({
                                ...register,
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
                            className="form-control"
                            name="last_name"
                            required
                            onChange={(e) =>
                              setRegister({
                                ...register,
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
                          setRegister({
                            ...register,
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
                              setRegister({
                                ...register,
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
                            className={`form-control `}
                            // ${passwordConfirm ? "form-outline-danger" : ""}
                            name="password_confirmation"
                            required
                            onChange={(e) =>
                              setRegister({
                                ...register,
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
                    <button className="btn btn-primary login-btn" type="submit">
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
      )}
    </>
  );
};

export default Home;
