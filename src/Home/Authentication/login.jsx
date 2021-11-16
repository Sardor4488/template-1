import React, { Component, useState } from "react";
// import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { AppLogo } from "../../constant/imagepath_home";
import { loginMyteacher } from "../../Api/index";
import PhoneInput from "react-phone-number-input";
import Loading from "../components/Loading/Loading";
const Home = () => {
  const [inputType, setInputType] = useState("password");
  const [loading, setLoading] = useState(false);
  const [loginNumber, setLoginNumber] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const changeInputPassword = () => {
    if (inputType == "password") {
      setInputType("text");
    } else if (inputType == "text") {
      setInputType("password");
    }
  };

  const postLogin = (e) => {
    let loginObj = {
      phone_number: loginNumber,
      password: loginPassword,
    };
    e.preventDefault();
    loginMyteacher(loginObj, setLoading);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
                  <form onSubmit={postLogin}>
                    <div className="form-group">
                      <label className="form-control-label">
                        Telefon raqamingiz
                      </label>
                      <PhoneInput
                        international
                        // countryCallingCodeEditable={false}
                        defaultCountry="UZ"
                        value={loginNumber}
                        onChange={setLoginNumber}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">Parolingiz</label>
                      <div className="pass-group">
                        <input
                          type={inputType}
                          className="form-control pass-input"
                          onChange={(e) => setLoginPassword(e.target.value)}
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
      )}
    </>
  );
};

export default Home;
