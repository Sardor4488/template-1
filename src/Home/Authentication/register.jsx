import React, { Component } from "react";
// import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { AppLogo } from "../../constant/imagepath_home";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeClassRegister: 0 };
  }

  changeRegister = (id) => {
    this.setState((state) => {
      return { activeClassRegister: id };
    });
  };

  render() {
    return (
      <div className="bg-pattern-style bg-pattern-style-register">
        <div className="content">
          {/* Register Content */}
          <div className="account-content">
            <div className="d-flex justify-content-between align-content-center">
              <div
                className={`button_register text-uppercase ${
                  this.state.activeClassRegister == 0 && "active"
                } `}
                onClick={() => this.changeRegister(0)}
              >
                O'rganaman
              </div>
              <div
                className={`button_register text-uppercase ${
                  this.state.activeClassRegister == 1 && "active"
                } `}
                onClick={() => this.changeRegister(1)}
              >
                O'rgataman
              </div>
            </div>
            <div className="account-box">
              <div className="login-right">
                {this.state.activeClassRegister == 0 ? (
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
                <form action="/app/index">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label">Ismingiz</label>
                        <input
                          id="first-name"
                          type="text"
                          className="form-control"
                          name="first_name"
                          autofocus
                          required
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
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">
                      Telefon raqamingiz
                    </label>
                    <input
                      id="tel"
                      type="tel"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">E-mail</label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      required
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
                          className="form-control"
                          name="password_confirmation"
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
                  <Link className="btn btn-primary login-btn" to="/app/index">
                    Ro'yxatdan o'tish
                  </Link>
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
    );
  }
}

export default Home;
