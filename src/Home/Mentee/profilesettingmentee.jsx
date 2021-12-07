import React, { Component, useState } from "react";
// import { Helmet } from "react-helmet";

import { USER } from "../../constant/imagepath_home";
import Sidebar from "./sidebar";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { UpdateStudent } from "../../Api";
import PhoneInput from "react-phone-number-input";
const ProfileSettingMentee = () => {
  const userdata = useSelector((state) => state.Reducer.userdata);

  const [first_name, setFirstName] = useState(userdata?.first_name);
  const [last_name, setLastName] = useState(userdata?.last_name);
  const [phone_number, setPhoneNumber] = useState(userdata?.phone_number);
  const [email, setEmail] = useState(userdata?.email);
  const [telegram, setTelegram] = useState(userdata?.telegram_accaunt);
  const [birth_date, setBirthDate] = useState(userdata?.birth_date);
  const [region, setRegion] = useState(userdata?.region);
  const [country, setCountry] = useState(userdata?.country);
  const [image, setImage] = useState(userdata?.image);
  const [job, setJob] = useState(userdata?.job ? userdata?.job : "Talaba");
  const [experience, setExperience] = useState(
    userdata?.currentLevel ? userdata?.currentLevel : "Boshlang'ich"
  );
  const [target, setTarget] = useState(userdata?.target);
  // ERROR data
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [telegramError, setTelegramError] = useState(false);
  const [birthDateError, setBirthDateError] = useState(false);
  const [regionError, setRegionError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [jobError, setJobError] = useState(false);
  const [experienceError, setExperienceError] = useState(false);
  const [targetError, setTargetError] = useState(false);
  const handleImgChange = (e) => {
    const selected = e.target.files[0];
    const AllowedTypes = ["image/png", "image/jpg", "image/jpeg"];
    if (selected && AllowedTypes.includes(selected.type)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      console.log("file not");
    }
  };
  const updateprofile = (e) => {
    e.preventDefault();
    if (first_name == "" || first_name == undefined || first_name == null) {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
    if (last_name == "" || last_name == undefined || last_name == null) {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
    if (
      phone_number == "" ||
      phone_number == undefined ||
      phone_number == null
    ) {
      setPhoneNumberError(true);
    } else {
      setPhoneNumberError(false);
    }
    if (email == "" || email == undefined || email == null) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (telegram == "" || telegram == undefined || telegram == null) {
      setTelegramError(true);
    } else {
      setTelegramError(false);
    }
    if (birth_date == "" || birth_date == undefined || birth_date == null) {
      setBirthDateError(true);
    } else {
      setBirthDateError(false);
    }
    if (region == "" || region == undefined || region == null) {
      setRegionError(true);
    } else {
      setRegionError(false);
    }
    if (country == "" || country == undefined || country == null) {
      setCountryError(true);
    } else {
      setCountryError(false);
    }
    if (job == "" || job == undefined || job == null) {
      setJobError(true);
    } else {
      setJobError(false);
    }
    if (experience == "" || experience == undefined || experience == null) {
      setExperienceError(true);
    } else {
      setExperienceError(false);
    }
    if (target == "" || target == undefined || target == null) {
      setTargetError(true);
    } else {
      setTargetError(false);
      let data = {
        first_name,
        last_name,
        phone_number,
        email,
        telegram_number: telegram,
        birth_date,
        region,
        country,
        image,
        job,
        experience,
        target,
      };
      console.log(data);
    }
    // UpdateStudent(data, userdata?.id);
  };
  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/index">My teacher</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Profil sozlamalari
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Profil sozlamalari</h2>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            {/* Profile Sidebar */}
            <div className="col-md-5 col-lg-4 col-xl-3">
              {/* Sidebar */}
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
              {/* /Sidebar */}
            </div>
            {/* /Profile Sidebar */}
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body">
                  {/* Profile Settings Form */}
                  <form onSubmit={updateprofile}>
                    <div className="row form-row">
                      <div className="col-12 col-md-12">
                        <div className="form-group">
                          <div className="change-avatar">
                            <div className="profile-img">
                              <img
                                src={image ? image : USER}
                                alt="User Image"
                              />
                            </div>
                            <div className="upload-img">
                              <div className="change-photo-btn">
                                <span>
                                  <i className="fa fa-upload" />
                                  Rasm yuklash
                                </span>
                                <input
                                  type="file"
                                  onChange={(e) => handleImgChange(e)}
                                  accept="image/*"
                                  className="upload"
                                />
                              </div>
                              <small className="form-text text-muted">
                                Format: JPG, GIF yoki PNG. Hajmi 2MB dan
                                oshmasin!{" "}
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Ism</label>
                          <input
                            type="text"
                            className="form-control text-capitalize"
                            defaultValue={first_name}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                          {firstNameError && (
                            <p className="text-danger mt-2">
                              Bu joyni to'ldirish shart!
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Familya</label>
                          <input
                            type="text"
                            className="form-control text-capitalize"
                            defaultValue={last_name}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                          {lastNameError && (
                            <p className="text-danger mt-2">
                              Bu joyni to'ldirish shart!
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Tug'ilgan kun, oy, yil</label>
                          <input
                            type="date"
                            defaultValue={birth_date}
                            onChange={(e) => setBirthDate(e.target.value)}
                            className="form-control datetimepicker"
                          />
                          {birthDateError && (
                            <p className="text-danger mt-2">
                              Bu joyni to'ldirish shart!
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>E-mail</label>
                          <input
                            type="email"
                            className="form-control"
                            defaultValue={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          {emailError && (
                            <p className="text-danger mt-2">
                              Bu joyni to'ldirish shart!
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Telefon raqam</label>
                          <PhoneInput
                            international
                            defaultCountry="UZ"
                            value={phone_number}
                            onChange={setPhoneNumber}
                          />
                          {phoneNumberError && (
                            <p className="text-danger mt-2">
                              Bu joyni to'ldirish shart!
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Telegram akkauntingiz yoki raqamingiz</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={telegram}
                            onChange={(e) => setTelegram(e.target.value)}
                          />
                          {telegramError && (
                            <p className="text-danger mt-2">
                              Bu joyni to'ldirish shart!
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Qayerdansiz</label>
                          <input
                            type="text"
                            className="form-control text-capitalize"
                            defaultValue={region}
                            onChange={(e) => setRegion(e.target.value)}
                          />
                          {regionError && (
                            <p className="text-danger mt-2">
                              Bu joyni to'ldirish shart!
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Hozir qayerdasiz</label>
                          <input
                            type="text"
                            className="form-control text-capitalize"
                            defaultValue={country}
                            onChange={(e) => setCountry(e.target.value)}
                          />
                          {countryError && (
                            <p className="text-danger mt-2">
                              Bu joyni to'ldirish shart!
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Kasbingiz</label>
                          <select
                            className="form-control select"
                            defaultValue={job}
                            onChange={(e) => setJob(e.target.value)}
                          >
                            <option value="Talaba">Talaba</option>
                            <option value="Tadbirkor">Tadbirkor</option>
                            <option value="O'quvchi">O'quvchi</option>
                            <option value="Davlat ishchisi">
                              Davlat ishchisi (Shifokor, Harbiy va h.k)
                            </option>
                            <option value="Boshqa">Boshqa</option>
                          </select>
                          {jobError && (
                            <p className="text-danger mt-2">
                              Bu joyni to'ldirish shart!
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Hozirgi bilim darajangiz</label>
                          <select
                            defaultValue={experience}
                            className="form-control select"
                            onChange={(e) => setExperience(e.target.value)}
                          >
                            <option value="Boshlang'ich">Boshlang'ich</option>
                            <option value="O'rta">O'rta</option>
                            <option value="Yuqori">Yuqori</option>
                          </select>
                          {experienceError && (
                            <p className="text-danger mt-2">
                              Bu joyni to'ldirish shart!
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>Maqsadingiz</label>
                          <textarea
                            defaultValue={target}
                            onChange={(e) => setTarget(e.target.value)}
                            minLength="10"
                            maxLength="200"
                            className="form-control textarea"
                            cols="30"
                            rows="10"
                          ></textarea>
                          {targetError && (
                            <p className="text-danger mt-2">
                              Bu joyni to'ldirish shart!
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="submit-section">
                      <button
                        type="submit"
                        className="btn btn-primary submit-btn"
                      >
                        Saqlash
                      </button>
                    </div>
                  </form>
                  {/* /Profile Settings Form */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
};

export default ProfileSettingMentee;
