import React, { Component } from "react";
// import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { AppLogo } from "../../constant/imagepath_home";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { inputType: "password" };
  }

  changeInputPassword = () => {
    this.setState((state) => {
      if (this.state.inputType == "password") {
        return { inputType: "text" };
      } else if (this.state.inputType == "text") {
        return { inputType: "password" };
      }
    });
  };

  render() {
    return (
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
                <form action="/app/index">
                  <div className="form-group">
                    <label className="form-control-label">
                      Telefon raqamingiz
                    </label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Parolingiz</label>
                    <div className="pass-group">
                      <input
                        type={this.state.inputType}
                        className="form-control pass-input"
                      />
                      <span
                        className={` ${
                          this.state.inputType == "password"
                            ? "fas fa-eye "
                            : "fas fa-eye-slash"
                        } toggle-password`}
                        onClick={this.changeInputPassword}
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <Link className="forgot-link" to="/forgot-password">
                      Parolni unutdingizmi?
                    </Link>
                  </div>
                  <Link className="btn btn-primary login-btn" to="/app/index">
                    Kirish
                  </Link>
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
    );
  }
}

export default Home;
