import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";

import { USER } from "../../constant/imagepath_home";
import Sidebar from "./sidebar";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { UpdateStudent } from "../../Api/updateApi";
import {
  aboutUsdata,
  jobData,
  levelData as experienceData,
} from "../../Data/index";
import AvatarImageCropper from "react-avatar-image-cropper";
import PhoneInput from "react-phone-number-input";
import MySelect from "../../UI/Select/MySelect";
import FormGroup from "../../UI/FormGroup/FormGroup";
const ProfileSettingMentee = () => {
  const userdata = useSelector((state) => state.Reducer.userdata);
  const [imgmodal, setImgModal] = useState(false);
  const [first_name, setFirstName] = useState(userdata?.user?.first_name);
  const [last_name, setLastName] = useState(userdata?.user?.last_name);
  const [phone_number, setPhoneNumber] = useState(userdata?.user?.phone_number);
  const [email, setEmail] = useState(userdata?.user?.email);
  const [telegram, setTelegram] = useState(userdata?.user?.telegram_number);
  const [birth_date, setBirthDate] = useState(userdata?.user?.birth_date);
  const [region, setRegion] = useState(userdata?.user?.region);
  const [country, setCountry] = useState(userdata?.user?.country);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [job, setJob] = useState(
    userdata?.user?.job ? userdata?.user?.job : "Talaba"
  );
  const [experience, setExperience] = useState(
    userdata?.user?.experience ? userdata?.user?.experience : "Boshlang'ich"
  );
  const [target, setTarget] = useState(userdata?.user?.target);
  // ERROR data
  const id = localStorage.getItem("user_id");
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
  const updateprofile = (e) => {
    e.preventDefault();

    const array = [
      email,
      first_name,
      last_name,
      phone_number,
      telegram,
      birth_date,
      country,
      region,
      job,
      experience,
      target,
    ];
    const arrayError = [
      setEmailError,
      setFirstNameError,
      setLastNameError,
      setPhoneNumberError,
      setTelegramError,
      setBirthDateError,
      setCountryError,
      setRegionError,
      setJobError,
      setExperienceError,
      setTargetError,
    ];
    let update = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== null || array[i] !== undefined || array[i] !== "") {
        update = true;
        arrayError[i](false);
      }
      if (array[i] === null || array[i] === undefined || array[i] === "") {
        update = false;
        arrayError[i](true);
      }
    }
    if (update) {
      const fd = new FormData();
      fd.append("first_name", first_name);
      fd.append("last_name", last_name);
      fd.append("phone_number", phone_number);
      fd.append("email", email);
      fd.append("telegram_number", telegram);
      fd.append("birth_date", birth_date);
      fd.append("region", region);
      fd.append("country", country);
      fd.append("image", image);
      fd.append("job", job);
      fd.append("experience", experience);
      fd.append("target", target);
      UpdateStudent(fd, id);
    }
  };

  const apply = (file) => {
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleImg = () => {
    setImgModal(true);
  };
  useEffect(() => {
    return () => {
      setImgModal(false);
    };
  }, [image, userdata]);
  return (
    <div>
      {imgmodal && (
        <div className={`modalimg`} onClick={() => setImgModal(false)}>
          <div
            style={{
              width: "250px",
              height: "250px",
              margin: "auto",
              borderRadius: "15px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <AvatarImageCropper
              text={"Rasm yuklash"}
              setImgModal={setImgModal}
              apply={apply}
              isBack={true}
            />
          </div>
        </div>
      )}

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
                                src={
                                  imagePreview
                                    ? imagePreview
                                    : userdata?.user?.image
                                    ? `https://teach-api.uz/teach-api/public/storage/${userdata?.user?.image}`
                                    : USER
                                }
                                alt="User Image"
                              />
                            </div>
                            <div className="upload-img">
                              <div
                                className="change-photo-btn"
                                onClick={handleImg}
                              >
                                <span>
                                  <i className="fa fa-upload" />
                                  Rasm yuklash
                                </span>
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
                        <FormGroup
                          label={"Ism"}
                          value={first_name}
                          setValue={setFirstName}
                          type={"text"}
                          error={firstNameError}
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <FormGroup
                          label={"Familiya"}
                          value={last_name}
                          setValue={setLastName}
                          type={"text"}
                          error={lastNameError}
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <FormGroup
                          label={"Tug'ilgan kun, oy, yil"}
                          value={birth_date}
                          setValue={setBirthDate}
                          type={"date"}
                          error={birthDateError}
                        />
                      </div>

                      <div className="col-12 col-md-6">
                        <FormGroup
                          label={"E-mail"}
                          value={email}
                          setValue={setEmail}
                          type={"email"}
                          error={emailError}
                        />
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
                        <FormGroup
                          label={"Telegram akkauntingiz yoki raqamingiz"}
                          value={telegram}
                          setValue={setTelegram}
                          type={"text"}
                          error={telegramError}
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <FormGroup
                          label={"Qayerdansiz"}
                          value={region}
                          setValue={setRegion}
                          type={"text"}
                          error={regionError}
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <FormGroup
                          label={"Hozir qayerdasiz"}
                          value={country}
                          setValue={setCountry}
                          type={"text"}
                          error={countryError}
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <MySelect
                          label={"Kasbingiz"}
                          array={jobData}
                          setValue={setJob}
                          error={jobError}
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <MySelect
                          label={"Hozirgi bilim darajangiz"}
                          setValue={setExperience}
                          array={experienceData}
                          error={experienceError}
                        />
                      </div>
                      <div className="col-12  ">
                        <MySelect
                          label={"Biz haqimizda qayerdan eshitdingiz"}
                          array={aboutUsdata}
                        />
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
