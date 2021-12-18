import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { register } from "../../Api/register";
import FormGroup from "../../UI/FormGroup/FormGroup";

const Register = (props) => {
  const { history } = props;
  const [url, setUrl] = useState("create-student");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [offert, setOffert] = useState(0);

  const offerta = () => {
    if (offert === 0) {
      setOffert(1);
    } else {
      setOffert(0);
    }
  };
  const registerMyTeacher = (e) => {
    e.preventDefault();
    let data = {
      first_name,
      last_name,
      email,
      phone_number,
      password,
      password_confirmation,
      offert,
    };
    register(data, history, url);
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
                      <FormGroup
                        label={"Ismingiz"}
                        type={"text"}
                        value={first_name}
                        setValue={setFirstName}
                        className={"text-capitalize"}
                      />
                    </div>
                    <div className="col-lg-6">
                      <FormGroup
                        label={"Familiyangiz"}
                        type={"text"}
                        value={last_name}
                        setValue={setLastName}
                        className={"text-capitalize"}
                      />
                    </div>

                    <div className="col-12 col-lg-12">
                      <div className="form-group">
                        <label className="form-control-label">
                          Telefon raqamingiz
                        </label>
                        <PhoneInput
                          international
                          // countryCallingCodeEditable={false}
                          defaultCountry="UZ"
                          value={phone_number}
                          onChange={setPhoneNumber}
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <FormGroup
                        label={"E-mail"}
                        type={"email"}
                        value={email}
                        setValue={setEmail}
                      />
                    </div>

                    <div className="col-lg-6">
                      <FormGroup
                        label={"Parol o'ylab toping"}
                        type={"password"}
                        value={password}
                        setValue={setPassword}
                        className={"text-capitalize"}
                      />
                    </div>

                    <div className="col-lg-6">
                      <FormGroup
                        label={"Parolni takrorlang"}
                        type={"password"}
                        value={password_confirmation}
                        setValue={setPasswordConfirmation}
                        className={"text-capitalize"}
                      />
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
                      </label>
                    </div>
                  </div>
                  <button
                    className={`btn btn-primary login-btn ${
                      offert == 0 ? "disabled" : ""
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
        {/* islom */}
      </div>
    </>
  );
};

export default Register;
