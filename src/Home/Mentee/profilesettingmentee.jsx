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
import Validation from "./components/Validation";
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
  const [about_us, setAboutUs] = useState(
    userdata?.user?.about_us ? userdata?.user?.about_us : "Telegram"
  );
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [job, setJob] = useState(
    userdata?.user?.job ? userdata?.user?.job : "Talaba"
  );
  const [experience, setExperience] = useState(
    userdata?.user?.experience ? userdata?.user?.experience : "Boshlang'ich"
  );
  const [target, setTarget] = useState(userdata?.user?.target);
  const [errors, setErrors] = useState({});
  // ERROR data
  const id = localStorage.getItem("user_id");

  const updateprofile = (e) => {
    e.preventDefault();
    setErrors(
      Validation({
        first_name,
        last_name,
        phone_number,
        email,
        telegram,
        birth_date,
        region,
        country,
        about_us,
        job,
        experience,
        target,
      })
    );
    if (
      Object.keys(
        Validation({
          first_name,
          last_name,
          phone_number,
          email,
          telegram,
          birth_date,
          region,
          country,
          about_us,
          job,
          experience,
          target,
        })
      ).length == 0
    ) {
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
      fd.append("about_us", about_us);
      fd.append("experience", experience);
      fd.append("target", target);
      UpdateStudent(fd, id);
    } else {
      alert("Ma'lumotlaringizni to'liq kiriting.");
    }
  };
  // console.log(errors);
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
                                    ? `https://teach-api.uz/storage/${userdata?.user?.image}`
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
                          error={errors.first_name}
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <FormGroup
                          label={"Familiya"}
                          value={last_name}
                          setValue={setLastName}
                          type={"text"}
                          error={errors.last_name}
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <FormGroup
                          label={"Tug'ilgan kun, oy, yil"}
                          value={birth_date}
                          setValue={setBirthDate}
                          type={"date"}
                          error={errors.birth_date}
                        />
                      </div>

                      <div className="col-12 col-md-6">
                        <FormGroup
                          label={"E-mail"}
                          value={email}
                          setValue={setEmail}
                          type={"email"}
                          error={errors.email}
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
                          {errors.phone_number && (
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
                          error={errors.telegram}
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <FormGroup
                          label={"Qayerdansiz"}
                          value={region}
                          setValue={setRegion}
                          type={"text"}
                          error={errors.region}
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <FormGroup
                          label={"Hozir qayerdasiz"}
                          value={country}
                          setValue={setCountry}
                          type={"text"}
                          error={errors.country}
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <MySelect
                          label={"Kasbingiz"}
                          array={jobData}
                          setValue={setJob}
                          error={errors.job}
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <MySelect
                          label={"Hozirgi bilim darajangiz"}
                          setValue={setExperience}
                          array={experienceData}
                          error={errors.experience}
                        />
                      </div>
                      <div className="col-12  ">
                        <MySelect
                          label={"Biz haqimizda qayerdan eshitdingiz"}
                          array={aboutUsdata}
                          setValue={setAboutUs}
                          error={errors.about_us}
                        />
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>Maqsadingiz</label>
                          <textarea
                            defaultValue={target}
                            onChange={(e) => setTarget(e.target.value)}
                            className="form-control textarea"
                            cols="30"
                            rows="10"
                          ></textarea>
                          {errors.target && (
                            <p className="text-danger mt-2">
                              Bu joyni to'ldirish shart!
                            </p>
                          )}
                          {errors.target_length && (
                            <p className="text-danger mt-2">
                              So'zlarning uzunligi 20 tadan kam bo'lmasligi
                              lozim!
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="submit-section">
                      <button
                        type="submit"
                        className={`btn btn-primary submit-btn`}
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
