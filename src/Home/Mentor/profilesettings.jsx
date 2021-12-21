import React, { useState, useEffect } from "react";
import { USER } from "../../constant/imagepath_home";
import Sidebar from "./sidebar";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { useSelector } from "react-redux";
import { getCourses } from "../../Api/getApi";
import { UpdateTeacher } from "../../Api/updateApi";
import { experienceData, languageData, priceData } from "../../Data/index";
import AvatarImageCropper from "react-avatar-image-cropper";
import FormGroup from "../../UI/FormGroup/FormGroup";
import MySelect from "../../UI/Select/MySelect";
const ProfileSettings = () => {
  const userdata = useSelector((state) => state.Reducer.userdata);
  const [imgmodal, setImgModal] = useState(false);
  const [coursesData, setCoursesData] = useState([]);
  const [email, setEmail] = useState(userdata?.user?.email);
  const [first_name, setFirstName] = useState(userdata?.user?.first_name);
  const [last_name, setLastName] = useState(userdata?.user?.last_name);
  const [phone_number, setPhoneNumber] = useState(userdata?.user?.phone_number);
  const [telegram_number, setTelegramNumber] = useState(
    userdata?.user?.telegram_number
  );
  const [course_id, setCourseId] = useState(
    userdata?.user?.course_id ? userdata?.user?.course_id : 1
  );
  const [price, setPrice] = useState(10000);
  const [description, setDescription] = useState(userdata?.user?.description);
  const [experience, setExperience] = useState(
    userdata?.user?.experience ? userdata?.user?.experience : "1-3"
  );
  const [birth_date, setBirthDate] = useState(userdata?.user?.birth_date);
  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState(
    userdata?.user?.language ? userdata?.user?.language : "O'zbek"
  );
  const [country, setCountry] = useState(userdata?.user?.country);
  const [region, setRegion] = useState(userdata?.user?.region);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [resume, setResume] = useState(null);
  const [resumePost, setResumePost] = useState(userdata?.user?.resume);
  const [offert_price, setOffertprice] = useState(0);

  const [emailError, setEmailError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [telegramNumberError, setTelegramNumberError] = useState(false);
  const [courseIdError, setCourseIdError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [experienceError, setExperienceError] = useState(false);
  const [birthDateError, setBirthDateError] = useState(false);
  const [languageError, setLanguageError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [regionError, setRegionError] = useState(false);
  const [resumeError, setResumeError] = useState(false);
  
  const id = localStorage.getItem("user_id");
  const apply = (file) => {
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleLanguageDelete = (p) => {
    const languaged = [...languages];
    const filterData = languaged.filter((v) => v !== p);
    setLanguages(filterData);
    setLanguage(languaged);
  };
  const handleLanguageAdd = (e) => {
    const languagea = [...languages];
    languagea.filter((v) => v == e).length == 0 && languagea.push(e);
    setLanguages(languagea);
    setLanguage(languagea);
  };
  const array = [
    email,
    first_name,
    last_name,
    phone_number,
    telegram_number,
    course_id,
    price,
    description,
    experience,
    birth_date,
    language,
    country,
    region,
    resumePost,
  ];
  const arrayError = [
    setEmailError,
    setFirstNameError,
    setLastNameError,
    setPhoneNumberError,
    setTelegramNumberError,
    setCourseIdError,
    setPriceError,
    setDescriptionError,
    setExperienceError,
    setBirthDateError,
    setLanguageError,
    setCountryError,
    setRegionError,
    setResumeError,
  ];
  const updateTeacher = (e) => {
    e.preventDefault();
    let update = false;
    console.log("ishladi");
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== null || array[i] !== undefined || array[i] !== "") {
        arrayError[i](false);
        update = true;
      }
      if (array[i] == null || array[i] == undefined || array[i] == "") {
        arrayError[i](true);
        update = false;
      }
    }
    console.log(array);
    if (update) {
      const fd = new FormData();
      fd.append("email", email);
      fd.append("first_name", first_name);
      fd.append("last_name", last_name);
      fd.append("phone_number", phone_number);
      fd.append("telegram_number", telegram_number);
      fd.append("course_id", course_id);
      fd.append("price", price);
      fd.append("description", description);
      fd.append("image", image);
      fd.append("experience", experience);
      fd.append("language", language);
      fd.append("country", country);
      fd.append("region", region);
      fd.append("resume", resume);
      fd.append("birth_date", birth_date);
      fd.append("offert_price", offert_price);
      UpdateTeacher(fd, id);
    }
  };
  useEffect(() => {
    async function fetchCourses() {
      const res = await getCourses();
      setCoursesData(res);
    }
    fetchCourses();
  }, []);

  const offerta = () => {
    if (offert_price == 0) {
      setOffertprice(1);
    } else if (offert_price == 1) {
      setOffertprice(0);
    }
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
                    Kabinet sozlamari
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Kabinet sozlamari</h2>
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
                  <form onSubmit={updateTeacher}>
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
                                <span className="m-0">
                                  <i className="fa fa-upload" />
                                  Rasm yuklash
                                </span>
                              </div>
                              <small className="form-text text-muted">
                                Format:JPG, GIF yoki PNG. Maximum: 2MB
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
                          label={"Tug'ilgan yilingiz"}
                          value={birth_date}
                          setValue={setBirthDate}
                          type={"date"}
                          error={birthDateError}
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <MySelect
                          label={"Fan nomi"}
                          setValue={setCourseId}
                          array={coursesData}
                          error={courseIdError}
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
                            className=""
                            onChange={setPhoneNumber}
                          />
                          {phoneNumberError && (
                            <p className="text-danger mt-2">
                              Bu joyni to'ldirish shart
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <FormGroup
                          label={
                            "Telegram akkauntingiz yoki raqamingizni kiriting"
                          }
                          value={telegram_number}
                          setValue={setTelegramNumber}
                          type={"text"}
                          error={telegramNumberError}
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <MySelect
                          label={"Tajriba"}
                          setValue={setExperience}
                          array={experienceData}
                          error={experienceError}
                        />
                      </div>
                      <div className="col-12">
                        <MySelect
                          label={
                            "Qaysi tillarda dars o'ta olasiz? Bir nechta tanlashingiz mumkin"
                          }
                          setValue={handleLanguageAdd}
                          array={languageData}
                          error={languageError}
                          item={languages}
                          itemDelete={handleLanguageDelete}
                        />
                      </div>
                      <div className="col-12  ">
                        <label>
                          Bir soat darsingiz uchun necha pul olmoqchisiz iltimos
                          (<Link to="#">Narxlar bo'yicha kelishuv</Link>) bilan
                          tanishgan holda o'zizga mos narx kiriting
                        </label>
                        <MySelect
                          array={priceData}
                          setValue={setPrice}
                          error={priceError}
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Resyume yuklash</label>
                          <div className="change-photo-btn">
                            <span>
                              <i className="fa fa-upload"></i> Resume yuklash
                            </span>
                            <input
                              type="file"
                              id="resumeInput"
                              accept="application/*"
                              onChange={(e) => {
                                setResume(e.target.files[0]);
                                setResumePost(e.target.files[0]);
                              }}
                              className="upload"
                             />
                          </div>
                          {resumeError && (
                            <p className="text-danger mt-2">
                              Bu joyni to'ldirish shart
                            </p>
                          )}
                        </div>
                      </div>
                            <div className="col-12 col-md-6">
                            <FormGroup
                          label={"Biz haqimizda qayerdan eshitdingiz"}
                          value={region}
                          setValue={setRegion}
                          type={"text"}
                          error={regionError}
                        />
                            </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label className="w-75">
                            O’quvchilar sizni tanlashlari uchun o’zingizning
                            dars o’tish uslubingiz haqida to’liqroq ma’lumot
                            bering. Sifatli e’lon sifatli mijozlarni chaqiradi.
                          </label>
                          <textarea
                            type="text"
                            minLength="30"
                            maxLength="200"
                            value={description || ""}
                            onChange={(e) => setDescription(e.target.value)}
                            className="form-control"
                          />
                          {descriptionError && (
                            <p className="text-danger mt-2">
                              Bu joyni to'ldirish shart
                            </p>
                          )}
                        </div>
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
                      <div className="col-12">
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
                              Narxlar bilan
                              <Link to="#">tanishib</Link> chiqdim
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="submit-section">
                      <button
                        type="submit"
                        className={`btn btn-primary submit-btn ${
                          offert_price == 0 ? "disabled" : ""
                        }`}
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

export default ProfileSettings;
