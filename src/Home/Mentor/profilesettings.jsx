import React, { useState, useEffect } from "react";
import { USER } from "../../constant/imagepath_home";
import Sidebar from "./sidebar";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { useSelector } from "react-redux";
import { getCourses } from "../../Api/getApi";
import { UpdateTeacher } from "../../Api/updateApi";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import AvatarImageCropper from "react-avatar-image-cropper";
const ProfileSettings = () => {
  const userdata = useSelector((state) => state.Reducer.userdata);
  // const [update, setUpdate] = useState(false);
  const [imgmodal, setImgModal] = useState(false);
  const [coursesData, setCoursesData] = useState([]);
  const [email, setEmail] = useState(userdata?.user?.email);
  const [first_name, setFirstName] = useState(userdata?.user?.first_name);
  const [last_name, setLastName] = useState(userdata?.user?.last_name);
  const [phone_number, setPhoneNumber] = useState(userdata?.user?.phone_number);
  const [telegram_number, setTelegramNumber] = useState(
    userdata?.user?.telegram_number
  );
  const [course_id, setCourseId] = useState();
  const [price, setPrice] = useState(10000);
  const [description, setDescription] = useState(userdata?.user?.descripton);
  const [experience, setExperience] = useState(
    userdata?.user?.experience ? userdata?.user?.experience : "1-3"
  );
  const [birth_date, setBirthDate] = useState(userdata?.user?.birth_date);
  const [language, setLanguage] = useState(
    userdata.languages ? userdata.languages : []
  );
  const [country, setCountry] = useState(userdata?.user?.country);
  const [region, setRegion] = useState(userdata?.user?.region);
  const [image, setImage] = useState(userdata?.user?.image);
  const [imagePreview, setImagePreview] = useState("");
  const [resume, setResume] = useState(userdata?.user?.resume);
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

  // const base64ToFile = async (src) => {
  //   const blob = await fetch(src).then((res) => res.blob());
  //   console.log(blob);
  //   console.log('ishladi')
  // };
  const id = localStorage.getItem("user_id");
  const apply = (file) => {
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      // base64ToFile(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleLanguageDelete = (p) => {
    const languages = [...language];
    const filterData = languages.filter((v) => v !== p);
    setLanguage(filterData);
  };
  const handleLanguageAdd = (e) => {
    const languages = [...language];
    languages.filter((v) => v == e.target.value).length == 0 &&
      languages.push(e.target.value);
    setLanguage(languages);
  };
  const updateTeacher = (e) => {
    // const array = [
    //   email,
    //   first_name,
    //   last_name,
    //   phone_number,
    //   telegram_number,
    //   course_id,
    //   price,
    //   description,
    //   experience,
    //   birth_date,
    //   language,
    //   country,
    //   region,
    //   resume,
    // ];
    // const arrayError = [
    //   setEmailError,
    //   setFirstNameError,
    //   setLastNameError,
    //   setPhoneNumberError,
    //   setTelegramNumberError,
    //   setCourseIdError,
    //   setPriceError,
    //   setDescriptionError,
    //   setExperienceError,
    //   setBirthDateError,
    //   setLanguageError,
    //   setCountryError,
    //   setRegionError,
    //   setResumeError,
    // ];
    // for (let i = 0; i < array.length; i++) {
    //   if (array[i] == null || array[i] == undefined || array[i] == "") {
    //     arrayError[i](true);
    //     setUpdate(false);
    //   }
    //   if (array[i] !== null || array[i] !== undefined || array[i] !== "") {
    //     arrayError[i](false);
    //     setUpdate(true);
    //   }
    // }
    // if (update) {
    //   let data = {
    //     email,
    //     first_name,
    //     last_name,
    //     phone_number,
    //     telegram_number,
    //     image,
    //     course_id,
    //     price,
    //     description,
    //     experience,
    //     language,
    //     country,
    //     region,
    //     resume,
    //     birth_date,
    //     offert_price,
    //   };
    //   UpdateTeacher(data, id);
    // }
    e.preventDefault();
    if (email == "" || email == undefined || email == null) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
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
    if (
      telegram_number == "" ||
      telegram_number == undefined ||
      telegram_number == null
    ) {
      setTelegramNumberError(true);
    } else {
      setTelegramNumberError(false);
    }
    if (course_id == "" || course_id == undefined || course_id == null) {
      setCourseIdError(true);
    } else {
      setCourseIdError(false);
    }
    if (price == "" || price == undefined || price == null) {
      setPriceError(true);
    } else {
      setPriceError(false);
    }
    if (description == "" || description == undefined || description == null) {
      setDescriptionError(true);
    } else {
      setDescriptionError(false);
    }
    if (experience == "" || experience == undefined || experience == null) {
      setExperienceError(true);
    } else {
      setExperienceError(false);
    }
    if (birth_date == "" || birth_date == undefined || birth_date == null) {
      setBirthDateError(true);
    } else {
      setBirthDateError(false);
    }
    if (language == "" || language == undefined || language == null) {
      setLanguageError(true);
    } else {
      setLanguageError(false);
    }
    if (country == "" || country == undefined || country == null) {
      setCountryError(true);
    } else {
      setCountryError(false);
    }
    if (region == "" || region == undefined || region == null) {
      setRegionError(true);
    } else {
      setRegionError(false);
    }
    if (resume == "" || resume == undefined || resume == null) {
      setResumeError(true);
    } else {
      setFirstNameError(false);
      setLastNameError(false);
      setPhoneNumberError(false);
      setTelegramNumberError(false);
      setCourseIdError(false);
      setPriceError(false);
      setDescriptionError(false);
      setExperienceError(false);
      setBirthDateError(false);
      setLanguageError(false);
      setCountryError(false);
      setRegionError(false);
      setResumeError(false);

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
      fd.append("experience",  experience);
      fd.append("language", language);
      fd.append("country",  country);
      fd.append("region", region);
      fd.append("resume", resume);
      fd.append("birth_date", birth_date);
      fd.append("offert_price", offert_price);
   

      UpdateTeacher(fd, id);
      console.log(fd);
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
  console.log(userdata);
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
                                    : image
                                    ? `https://teach-api.uz/teach-api/public/storage/${image}`
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
                        <div className="form-group">
                          <label>Ism</label>
                          <input
                            type="text"
                            defaultValue={first_name}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="form-control"
                          />
                          {firstNameError && (
                            <p className="text-danger mt-2">
                              {" "}
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
                            defaultValue={last_name}
                            onChange={(e) => setLastName(e.target.value)}
                            className="form-control"
                          />
                          {lastNameError && (
                            <p className="text-danger mt-2">
                              {" "}
                              Bu joyni to'ldirish shart!
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Tug'ilgan yilingiz</label>
                          <input
                            type="date"
                            defaultValue={birth_date}
                            onChange={(e) => setBirthDate(e.target.value)}
                            className="form-control "
                          />
                          {birthDateError && (
                            <p className="text-danger mt-2">
                              {" "}
                              Bu joyni to'ldirish shart!
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Fan nomi</label>
                          <select
                            className="form-control select"
                            onChange={(e) => setCourseId(e.target.value)}
                          >
                            {coursesData &&
                              coursesData.map((v, i) => (
                                <option key={v.id} value={v.id}>
                                  {v.name}
                                </option>
                              ))}
                          </select>
                          {courseIdError && (
                            <p className="text-danger mt-2">
                              {" "}
                              Bu joyni to'ldirish shart!
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>E-mail </label>
                          <input
                            type="email"
                            defaultValue={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                          />
                          {emailError && (
                            <p className="text-danger mt-2">
                              {" "}
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
                            className=""
                            onChange={setPhoneNumber}
                          />
                          {phoneNumberError && (
                            <p className="text-danger mt-2">
                              {" "}
                              Bu joyni to'ldirish shart!
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>
                            Telegram akkauntingiz yoki raqamingizni kiriting
                          </label>
                          <input
                            type="text"
                            defaultValue={telegram_number}
                            onChange={(e) => setTelegramNumber(e.target.value)}
                            className="form-control"
                          />
                          {telegramNumberError && (
                            <p className="text-danger mt-2">
                              {" "}
                              Bu joyni to'ldirish shart!
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Tajriba</label>
                          <select
                            type="text"
                            defaultValue={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            className="form-control select"
                          >
                            <option value="1-3">1-3 yil</option>
                            <option value="3-5">3-5 yil</option>
                            <option value="5">5 yildan ortiq</option>
                          </select>
                          {experienceError && (
                            <p className="text-danger mt-2">
                              {" "}
                              Bu joyni to'ldirish shart!
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group">
                          <label>
                            Qaysi tillarda dars o'ta olasiz? Bir nechta
                            tanlashingiz mumkin
                          </label>
                          <select
                            className="form-control select"
                            onChange={(e) => handleLanguageAdd(e)}
                          >
                            <option value="O'zbek">O'zbekcha</option>
                            <option value="Ingiliz">Ingilizcha</option>
                            <option value="Rus">Ruscha</option>
                            <option value="Koreys">Koreyscha</option>
                            <option value="Nemis">Nemischa</option>
                            <option value="Turk">Turkcha</option>
                          </select>
                          {languageError && (
                            <p className="text-danger mt-2">
                              {" "}
                              Bu joyni to'ldirish shart!
                            </p>
                          )}
                          <div className="row pt-3 px-2 m-0">
                            {" "}
                            {language &&
                              language.map((v, i) => (
                                <div
                                  className="col-6 col-sm-4 col-lg-2 d-flex justify-content-center align-items-center p-0"
                                  key={i}
                                >
                                  <div className=" d-flex align-items-center justify-content-between p-1">
                                    <div className="me-2">{v}cha</div>{" "}
                                    <div>
                                      <i
                                        onClick={() => handleLanguageDelete(v)}
                                        className="fas fa-times"
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                      <div className="col-12  ">
                        <div className="form-group">
                          <label>
                            Bir soat darsingiz uchun necha pul olmoqchisiz
                            (iltimos{" "}
                            <Link to="#">Narxlar bo'yicha kelishuv</Link> bilan
                            tanishgan holda o'zizga mos narx kiriting)
                          </label>

                          <select
                            className="form-control select"
                            defaultValue={price}
                            onChange={(e) => setPrice(e.target.value)}
                          >
                            <option value="10000">10000 so'm</option>
                            <option value="15000">15000 so'm</option>
                            <option value="20000">20000 so'm</option>
                            <option value="25000">25000 so'm</option>
                            <option value="30000">30000 so'm</option>
                            <option value="35000">35000 so'm</option>
                            <option value="40000">40000 so'm</option>
                            <option value="45000">45000 so'm</option>
                            <option value="50000">50000 so'm</option>
                            <option value="55000">55000 so'm</option>
                            <option value="60000">60000 so'm</option>
                            <option value="65000">65000 so'm</option>
                            <option value="70000">70000 so'm</option>
                            <option value="75000">75000 so'm</option>
                            <option value="80000">80000 so'm</option>
                            <option value="85000">85000 so'm</option>
                            <option value="90000">90000 so'm</option>
                            <option value="95000">95000 so'm</option>
                            <option value="100000">100000 so'm</option>
                            <option value="105000">105000 so'm</option>
                            <option value="110000">110000 so'm</option>
                            <option value="115000">115000 so'm</option>
                            <option value="120000">120000 so'm</option>
                            <option value="125000">125000 so'm</option>
                            <option value="130000">130000 so'm</option>
                            <option value="135000">135000 so'm</option>
                            <option value="140000">140000 so'm</option>
                            <option value="145000">145000 so'm</option>
                            <option value="150000">150000 so'm</option>
                          </select>
                          {priceError && (
                            <p className="text-danger mt-2">
                              {" "}
                              Bu joyni to'ldirish shart!
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
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
                              onChange={(e) => setResume(e.target.files[0])}
                              className="upload"
                            />
                          </div>
                          {resumeError && (
                            <p className="text-danger mt-2">
                              {" "}
                              Bu joyni to'ldirish shart!{" "}
                            </p>
                          )}
                        </div>
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
                              {" "}
                              Bu joyni to'ldirish shart!{" "}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Qayerdansiz</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={region}
                            onChange={(e) => setRegion(e.target.value)}
                          />
                          {regionError && (
                            <p className="text-danger mt-2">
                              {" "}
                              Bu joyni to'ldirish shart!{" "}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Hozir qayerdasiz</label>
                          <input
                            type="text"
                            defaultValue={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="form-control"
                          />
                          {countryError && (
                            <p className="text-danger mt-2">
                              {" "}
                              Bu joyni to'ldirish shart!{" "}
                            </p>
                          )}
                        </div>
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
                              Ommaviy oferta{" "}
                              <Link to="/oferta">shartlariga</Link>
                              <span> roziman</span>
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
