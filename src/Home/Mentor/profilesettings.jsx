import React, { Component, useState } from "react";
import { USER } from "../../constant/imagepath_home";
import Sidebar from "./sidebar";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { useSelector } from "react-redux";
const ProfileSettings = () => {
  const userdata = useSelector((state) => state.Reducer.userdata);
  const [lessonLanguage, setLessonLanguage] = useState([]);
  const [image, setImage] = useState(userdata?.image);
  const [firstName, setFirstName] = useState(userdata?.first_name);
  const [lastName, setLastName] = useState(userdata?.last_name);
  const [birthDate, setBrithData] = useState(userdata?.brith_data);
  const [subject, setSubject] = useState(userdata?.subject);
  const [email, setEmail] = useState(userdata?.email);
  const [phoneNumber, setPhoneNumber] = useState(userdata?.phone_number);
  const [telegram, setTelegram] = useState(userdata?.telegram_accaunt);
  const [error, setError] = useState(false);
  const [resume, setResume] = useState(userdata?.resume);
  const [resumeName, setResumeName] = useState(userdata?.resume);
  const [aboutTeacher, setAboutTeacher] = useState(userdata?.about_teacher);
  const [region, setRegion] = useState(userdata?.region);
  const [country, setCountry] = useState(userdata?.country);
  const [experience, setExperience] = useState(
    userdata?.skills ? userdata?.skills : "1-3"
  );
  const [lessonPrice, setLessonPrice] = useState(userdata?.lesson_price);

  const handleImgChange = (e) => {
    const selected = e.target.files[0];
    const AllowedTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && AllowedTypes.includes(selected.type)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selected);
      console.log("selected");
    } else {
      console.log("not found");
    }
  };
  const handleLanguageChange = (p) => {
    const language = [...lessonLanguage];
    const filterData = language.filter((v) => v !== p);
    setLessonLanguage(filterData);
  };
  const handleLanguageAdd = (e) => {
    const language = [...lessonLanguage];
    language.filter((v) => v == e.target.value).length == 0 &&
      language.push(e.target.value);
    setLessonLanguage(language);
  };
  const handleResumeChange = (e) => {
    let file = e.target.files[0];
    if (file) {
      console.log(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setResume(reader.result);
        setResumeName(file?.name);
      };
    } else {
      console.log("not-found");
    }
  };

  const updateTeacher = (e) => {
    e.preventDefault();
    if (
      firstName == "" ||
      firstName == undefined ||
      firstName == null ||
      lastName == "" ||
      lastName == undefined ||
      lastName == null ||
      birthDate == "" ||
      birthDate == undefined ||
      birthDate == null ||
      subject == "" ||
      subject == undefined ||
      subject == null ||
      email == "" ||
      email == undefined ||
      email == null ||
      phoneNumber == "" ||
      phoneNumber == undefined ||
      phoneNumber == null ||
      telegram == "" ||
      telegram == undefined ||
      telegram == null ||
      resume == "" ||
      resume == undefined ||
      resume == null ||
      aboutTeacher == "" ||
      aboutTeacher == undefined ||
      aboutTeacher == null ||
      region == "" ||
      region == undefined ||
      region == null ||
      country == "" ||
      country == undefined ||
      country == null ||
      experience == "" ||
      experience == undefined ||
      experience == null ||
      lessonPrice == "" ||
      lessonPrice == undefined ||
      lessonPrice == null ||
      lessonLanguage == [] ||
      lessonLanguage == undefined ||
      lessonLanguage == null
    ) {
      alert("Iltimos malumotlarni to'liq kiriting!");
    } else {
      let data = {
        image: image,
        first_name: firstName,
        last_name: lastName,
        birth_date: birthDate,
        subject: subject,
        email: email,
        phone_number: phoneNumber,
        telegram: telegram,
        resume: resume,
        aboutTeacher: aboutTeacher,
        experience: experience,
        region: region,
        country: country,
        lesson_price: lessonPrice,
        lessonLanguage: lessonLanguage,
      };
      console.log(data);
    }
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
                      <div className="col-12">
                        {error ? (
                          <h1>Iltimos malumotlarni to'liq kiriting </h1>
                        ) : (
                          ""
                        )}
                      </div>
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
                            defaultValue={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Familya</label>
                          <input
                            type="text"
                            defaultValue={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Tug'ilgan yilingiz</label>
                          <input
                            type="date"
                            defaultValue={birthDate}
                            onChange={(e) => setBrithData(e.target.value)}
                            className="form-control "
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Fan nomi</label>
                          <select
                            onChange={(e) => setSubject(e.target.value)}
                            defaultValue={subject}
                            className="form-control select"
                            required
                          >
                            <option value="Ingiliz tili">Ingiliz tili</option>
                            <option value="Rus tili">Rus tili</option>
                            <option value="Koreys tili">Koreys tili</option>
                            <option value="Matematika">Matematika</option>
                            <option value="Fizika">Fizika</option>
                          </select>
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
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Telefon raqam</label>
                          <PhoneInput
                            international
                            // countryCallingCodeEditable={false}
                            defaultCountry="UZ"
                            value={phoneNumber}
                            className=""
                            onChange={setPhoneNumber}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>
                            Telegram akkauntingiz yoki raqamingizni kiriting
                          </label>
                          <input
                            type="text"
                            defaultValue={telegram}
                            onChange={(e) => setTelegram(e.target.value)}
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Resyume yuklash</label>
                          <label htmlFor="resumeInput" className="form-control">
                            {resumeName && resumeName}
                          </label>
                          <input
                            type="file"
                            id="resumeInput"
                            onChange={(e) => handleResumeChange(e)}
                            className="hidden d-none form-control"
                          />
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
                            required
                          >
                            <option value="O'zbek">O'zbekcha</option>
                            <option value="Ingiliz">Ingilizcha</option>
                            <option value="Rus">Ruscha</option>
                            <option value="Koreys">Koreyscha</option>
                            <option value="Nemis">Nemischa</option>
                            <option value="Turk">Turkcha</option>
                          </select>
                          <div className="row pt-3 px-2 m-0">
                            {" "}
                            {lessonLanguage &&
                              lessonLanguage.map((v, i) => (
                                <div
                                  className="col-6 col-sm-4 col-lg-2 d-flex justify-content-center align-items-center p-0"
                                  key={v}
                                >
                                  <div className=" d-flex align-items-center justify-content-between p-1">
                                    <div className="me-2">{v}cha</div>{" "}
                                    <div>
                                      <i
                                        onClick={() => handleLanguageChange(v)}
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
                          <input
                            type="number"
                            defaultValue={lessonPrice}
                            onChange={(e) => setLessonPrice(e.target.value)}
                            className="form-control"
                            required
                          />
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
                            value={aboutTeacher}
                            onChange={(e) => setAboutTeacher(e.target.value)}
                            className="form-control"
                            required
                          />
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
                            required
                          />
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
                            required
                          />
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
                            required
                          >
                            <option value="1-3">1-3 yil</option>
                            <option value="3-5">3-5 yil</option>
                            <option value="5">5 yildan ortiq</option>
                          </select>
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

export default ProfileSettings;
