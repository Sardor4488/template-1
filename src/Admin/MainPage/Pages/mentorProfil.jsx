import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { AVATAR_12 } from "../../imagepath";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { TeacherApi } from "../../Api/teacherApi";
import { commentLead } from "../../Api/leadApi";
import FormGroup from "../../UI/input/MyInput";
import MySelect from "../../UI/input/select/MySelect";
import { getCourses } from "../../../Api/getApi";
import PhoneInput from "react-phone-number-input";
import {
  aboutUsdata,
  experienceData,
  languageData,
  priceData,
} from "../../../Data";

const MentorProfile = () => {
  const [coursesData, setCoursesData] = useState([]);
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [telegram_number, setTelegramNumber] = useState("");
  const [course_id, setCourseId] = useState("");
  const [price, setPrice] = useState(10000);
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState("");
  const [about_us, setAboutUs] = useState("Telegram");
  const [birth_date, setBirthDate] = useState("");
  const [language, setLanguage] = useState(["O'zbek"]);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const { mentor_id } = useParams();
  const location = useLocation();

  const data = useSelector((state) => state?.Reducer?.teacher_list[mentor_id]);
  const status_id = localStorage.getItem("teacher_status_id");
  useEffect(() => {
    if (status_id) {
      TeacherApi({ status_id });
    } else {
      TeacherApi();
    }
  }, [location.pathname]);

  useEffect(() => {
    async function fetchCourses() {
      const res = await getCourses();
      setCoursesData(res);
    }
    fetchCourses();
  }, []);

  const [state, setState] = useState({
    iseditmodal: false,
  });
  const [comment, setComment] = useState("");
  const [openComment, setOpenComment] = useState(false);
  const commentSubmit = (e) => {
    e.preventDefault();
    commentLead({ lead_id: data?.id, comment });
    setComment("");
  };

  const editModalClose = () => {
    setState({ iseditmodal: false });
  };

  const handleLanguages = (event) => {
    language?.filter((v) => v == event).length == 0 &&
      setLanguage([...language, event]);
  };

  const deleteLanguages = (v) => {
    const clone = [...language];
    if (clone.length > 1) {
      setLanguage(clone?.filter((value) => value !== v));
    }
  };

  const edit = () => {
    setState({ iseditmodal: true });
    setFirstName(data?.first_name);
    setLastName(data?.last_name);
    setPhoneNumber(data?.phone_number);
    setEmail(data?.email);
    setRegion(data?.region);
    setDescription(data?.description);
    setBirthDate(data?.birth_date)
    setCountry(data?.country)
  };

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col">
              <h3 className="page-title">O'quvchi profili</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/admin/index">Admin</Link>
                </li>
                <li className="breadcrumb-item active">O'quvchi profili</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-md-12">
            <div className="profile-header">
              <div className="row align-items-center">
                <div className="col-auto profile-image">
                  <a href="#">
                    <img
                      className="rounded-circle"
                      alt="User Image"
                      src={AVATAR_12}
                    />
                  </a>
                </div>
                <div className="col ml-md-n2 profile-user-info">
                  <h4 className="user-name text-start text-black mb-0">
                    {data?.first_name} {data?.last_name}
                  </h4>
                  <h6 className="text-muted">{data?.email}</h6>
                  <div className="pb-3">
                    <i className="fa fa-map-marker" />{" "}
                    {data?.region ? data?.region : "Kiritilmagan"}
                  </div>
                  <div className="about-text">
                    {data?.description
                      ? data?.description
                      : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
                  </div>
                </div>
                <div className="col-auto profile-btn"></div>
              </div>
            </div>
            <div className="profile-menu">
              <ul className="nav nav-tabs nav-tabs-solid">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#per_details_tab"
                  >
                    Qisqacha ma'lumot
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#password_tab"
                  >
                    Parol
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#comment_tab">
                    "Comment" qoldirish
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content profile-tab-cont">
              {/* Personal Details Tab */}
              <div className="tab-pane fade show active" id="per_details_tab">
                {/* Personal Details */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title d-flex justify-content-between">
                          <span>Qisqacha malumot</span>
                          <a
                            className="edit-link"
                            data-toggle="modal"
                            onClick={edit}
                            href="#edit_personal_details"
                          >
                            <i className="fa fa-edit mr-1" />
                            Taxrirlash
                          </a>
                        </h5>
                        <div className="row">
                          <p className="col-sm-2 text-muted mb-0 mb-sm-3">
                            Ism familiyasi
                          </p>
                          <p className="col-sm-10">
                            {data?.first_name} {data?.last_name}
                          </p>
                        </div>
                        <div className="row">
                          <p className="col-sm-2 text-muted mb-0 mb-sm-3">
                            Tug'ilgan sanasi
                          </p>
                          <p className="col-sm-8">
                            {data?.birth_date
                              ? data?.birth_date
                              : "Kiritilmagan"}
                          </p>
                        </div>
                        <div className="row">
                          <p className="col-sm-2 text-muted mb-0 mb-sm-3">
                            Email
                          </p>
                          <p className="col-sm-10">{data?.email}</p>
                        </div>
                        <div className="row">
                          <p className="col-sm-2 text-muted mb-0 mb-sm-3">
                            Telefon raqami
                          </p>
                          <p className="col-sm-10">
                            {data?.phone_number 
                              ? data?.phone_number
                              : "Kiritilmagan"}
                          </p>
                        </div>
                        <div className="row">
                          <p className="col-sm-2 text-muted mb-0">Manzili</p>
                          <div className="col-sm-10 mb-0">
                            <p>Qayerdan</p>
                            {data?.region ? data?.region : "Kiritilmagan"}
                            <p>Hozirgi manzili</p>
                            {data?.country ? data?.country : "Kiritilmagan"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Personal Details */}
              </div>
              {/* /Personal Details Tab */}
              {/* Change Password Tab */}
              <div id="password_tab" className="tab-pane fade">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Change Password</h5>
                    <div className="row">
                      <div className="col-md-10 col-lg-6">
                        <form>
                          <div className="form-group">
                            <label>Old Password</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>New Password</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" />
                          </div>
                          <button className="btn btn-primary" type="submit">
                            Save Changes
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Add comment for mentee Tab */}
              <div id="comment_tab" className="tab-pane fade">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6  ">
                        <form onSubmit={commentSubmit}>
                          <div className="form-group">
                            <label>"Comment" qoldirish</label>
                            <input
                              type="text"
                              className="form-control"
                              value={comment || ""}
                              onChange={(e) => setComment(e.target.value)}
                            />
                          </div>
                          <button className="btn btn-primary" type="submit">
                            Saqlash
                          </button>
                        </form>
                      </div>
                      <div className="col-md-6">
                        <div
                          style={{ cursor: "pointer" }}
                          className="p-3 mt-4 d-flex align-items-center"
                          onClick={() => setOpenComment(!openComment)}
                        >
                          Izohlarni ko'rish ({data?.comments?.length}) ta
                          <i
                            style={{
                              color: `#009DA6`,
                              transition: "0.5s ease",
                            }}
                            className={`fas fa-chevron-up ms-2 ${
                              openComment ? "rotate" : ""
                            }`}
                          ></i>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className={`col-12 mt-3`}>
                          {data?.comments?.length > 0
                            ? data?.comments?.map((value, index) => {
                                return (
                                  <div
                                    key={index}
                                    style={{
                                      transition: ".5s ease",
                                    }}
                                    className={`card ${
                                      openComment
                                        ? "comment_open px-3 pt-2 my-2"
                                        : "comment_close"
                                    }`}
                                  >
                                    <div className="card_body">
                                      <p>
                                        {index + 1}. {value.comment}
                                      </p>
                                    </div>
                                    <div className="card_footer text-end">
                                      <p className="mb-0">
                                        {value.created_at.slice(0, 10)}
                                      </p>
                                      <small className="mb-0 text-secondary">
                                        {value.created_at.slice(11, 16)}
                                      </small>
                                    </div>
                                  </div>
                                );
                              })
                            : "Hozircha izoh yoq !"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Change Password Tab */}
            </div>
          </div>
        </div>
      </div>

      <Modal
        className="modal-dialog-centered"
        isOpen={state.iseditmodal}
        toggle={() => editModalClose()}
      >
        <ModalHeader toggle={() => editModalClose()}>
          Shaxsiy ma'lumotlar
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="row form-row">
              <div className="col-12 col-sm-6">
                <FormGroup
                  type={"text"}
                  className={"text-capitalize"}
                  value={first_name}
                  setValue={setFirstName}
                  label={"Ism"}
                />
              </div>
              <div className="col-12 col-sm-6">
                <FormGroup
                  type={"text"}
                  className={"text-capitalize"}
                  value={last_name}
                  setValue={setLastName}
                  label={"Familya"}
                />
              </div>
              <div className="col-12">
                <FormGroup
                  type={"date"}
                  className={"text-capitalize"}
                  value={birth_date}
                  setValue={setBirthDate}
                  label={"Tug'ilgan sana"}
                />
              </div>
              <div className="col-12 col-sm-6">
                <FormGroup
                  type={"email"}
                  value={email}
                  setValue={setEmail}
                  label={"Email"}
                />
              </div>
              <div className="col-12 col-sm-6">
                <MySelect
                  label={"Fan nomi"}
                  setValue={setCourseId}
                  array={coursesData}
                />
              </div>

              <div className="col-12 col-sm-6">
                <label>Telefon raqam</label>
                <PhoneInput
                  international
                  defaultCountry="UZ"
                  value={phone_number}
                  onChange={setPhoneNumber}
                />
              </div>
              <div className="col-12 col-sm-6">
                <MySelect
                  label={"Tajribangiz"}
                  setValue={setExperience}
                  array={experienceData}
                />
              </div>

              <div className="col-12">
                <MySelect
                  label={"Bir soat darsingiz uchun qancha pul olmoqchisiz?"}
                  setValue={setPrice}
                  array={priceData}
                />
              </div>

              <div className="col-12 col-sm-12">
                <FormGroup
                  type={"text"}
                  value={telegram_number}
                  setValue={setTelegramNumber}
                  label={"Telegram akkaunt yoki telefon raqamingiz"}
                />
              </div>

              <div className="col-12 col-sm-12">
                <MySelect
                  label={"Qaysi tillarda dars o'ta olasiz?"}
                  setValue={handleLanguages}
                  array={languageData}
                />
              </div>

              {language.length > 0 && (
                <div className="col-12 col-sm-12 d-flex flex-wrap">
                  {language?.map((v) => (
                    <div className="mx-2 mb-2">
                      {v}
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => deleteLanguages(v)}
                        className="ms-1 text-danger"
                      >
                        <i className="fa fa-times"></i>
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div className="col-12 col-sm-12 mt-2">
                <MySelect
                  label={"Biz haqimizda qayerdan eshitdingiz?"}
                  setValue={setAboutUs}
                  array={aboutUsdata}
                />
              </div>
              <div className="col-12 col-sm-12">
                <div className="form-group">
                  <label>
                    O’quvchilar sizni tanlashlari uchun o’zingizning dars o’tish
                    uslubingiz haqida to’liqroq ma’lumot bering. Sifatli e’lon
                    sifatli mijozlarni chaqiradi.
                  </label>
                  <textarea
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-2">
              Save Changes
            </button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default MentorProfile;
