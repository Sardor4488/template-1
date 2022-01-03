import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { AVATAR_08, AVATAR_12 } from "../../imagepath";
import { Link, useParams, useLocation } from "react-router-dom";
import Ratings from "../Main/rating";
import { getLead } from "../../Api/leadApi";
import { useSelector } from "react-redux";
import { commentLead } from "../../Api/leadApi.js";
import PhoneInput from "react-phone-number-input";
import FormGroup from "../../UI/input/MyInput";
import MySelect from "../../UI/input/select/MySelect";
import { aboutUsdata, jobData, levelData } from "../../../Data";
import { UpdateStudent } from "../../../Api/updateApi";
import { TeacherApi } from "../../Api/teacherApi";
import { deleteLead } from "../../Api/leadApi";

const LeadProfile = () => {
  const location = useLocation();
  const [state, setState] = useState({ iseditmodal: false });

  const teacher_list = useSelector((state) => state?.Reducer?.teacher_list);
  const editModalClose = () => {
    setState({ iseditmodal: false });
  };
  const { lead_id } = useParams();
  const lead_list = useSelector((state) => state.Reducer.lead_list);
  const data = lead_list.filter((v) => v.id == lead_id)[0];
  const [comment, setComment] = useState("");
  const [openComment, setOpenComment] = useState(false);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [birth_date, setBirthDate] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [job, setJob] = useState("Talaba");
  const [experience, setExperience] = useState("Boshlang'ich");
  const [target, setTarget] = useState("");

  const commentSubmit = (e) => {
    e.preventDefault();
    commentLead({ user_id: data?.id, comment });
    setComment("");
  };

  console.log(data);

  useEffect(() => {
    getLead();
    TeacherApi({ status_id: 12 });
  }, [location.pathname]);

  const editLead = () => {
    setFirstName(data?.first_name);
    setLastName(data?.last_name);
    setPhoneNumber(data?.phone_number);
    setEmail(data?.email);
    setTelegram(data?.telegram_number);
    setBirthDate(data?.birth_date);
    setRegion(data?.region);
    setCountry(data?.country);
    setJob("Talaba");
    setExperience("Boshlang'ich");
    setTarget(data?.target);
    setState({ iseditmodal: true });
  };

  const updateLeadProfile = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("first_name", first_name);
    fd.append("last_name", last_name);
    fd.append("phone_number", phone_number);
    fd.append("email", email);
    fd.append("telegram_number", telegram);
    fd.append("birth_date", birth_date);
    fd.append("region", region);
    fd.append("country", country);
    fd.append("job", job);
    fd.append("experience", experience);
    fd.append("target", target);
    UpdateStudent(fd, data?.id);
    console.log(fd);
  };
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col">
              <h3 className="page-title">Lead profili</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/admin/index">Admin</Link>
                </li>
                <li className="breadcrumb-item active">Lead profili</li>
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
                      src={
                        data?.image
                          ? "https://teach-api.uz/storage/" + data?.image
                          : AVATAR_12
                      }
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
                    {data?.target ? data?.target : "Kritilmagan"}
                  </div>
                </div>
                <div
                  className="col-auto profile-btn btn btn-danger"
                  onClick={() => deleteLead(data?.id)}
                >
                  <i className="fas fa-trash-alt"></i>
                </div>
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
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#add_teacher_tab"
                  >
                    O'qituvchi biriktirish
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
                          <span>Shaxsiy ma'lumotlari</span>
                          <a
                            className="edit-link"
                            data-toggle="modal"
                            onClick={editLead}
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
                          <p className="col-sm-10">
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
                          <p className="col-sm-10">{data?.phone_number}</p>
                        </div>
                        <div className="row">
                          <p className="col-sm-2 text-muted mb-0">Manzili</p>
                          <div className="col-sm-10 mb-0">
                            <p className="mb-1 fw-bold">Qayerdan</p>
                            <p className="mb-1">
                              {data?.region ? data?.region : "Kiritilmagan"}
                            </p>
                            <p className="mb-1 fw-bold">Hozir qayerda</p>
                            <p>
                              {data?.country ? data?.country : "Kiritilmagan"}
                            </p>
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
                    <h5 className="card-title">Parolni o'zgartirish</h5>
                    <div className="row">
                      <div className="col-md-10 col-lg-6">
                        <form>
                          <div className="form-group">
                            <label>Yangi Parol</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>Parolni takrorlang</label>
                            <input type="password" className="form-control" />
                          </div>
                          <button className="btn btn-primary" type="submit">
                            Saqlash
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
                            <label>Izoh qoldirish</label>
                            <input
                              value={comment || ""}
                              onChange={(e) => setComment(e.target.value)}
                              type="text"
                              className="form-control"
                            />
                          </div>
                          <button
                            // onClick={addComment}
                            className={`btn btn-primary`}
                            type="submit"
                          >
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
                      <div className={`col-12 mt-3`}>
                        {data?.comments.length > 0
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
              {/* /Change Password Tab */}
              <div id="add_teacher_tab" className="tab-pane fade">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12   admin-card overflow-auto ">
                        <div className="search_panel w-100 d-flex justify-content-center mb-3 align-items-center">
                          <input
                            type="text"
                            className="form-control w-100 admin-mentor-search"
                            placeholder="Qidiruv..."
                          />
                        </div>
                        {teacher_list.length > 0 ? (
                          <table className="table table-hover table-center mb-0">
                            <thead>
                              <tr>
                                <th>Ism Familiyasi</th>
                                <th>Fanlari</th>
                                <th>Darajasi</th>
                                <th>Narxi</th>
                                <th>Biriktirish</th>
                              </tr>
                            </thead>
                            <tbody>
                              {teacher_list.map((v, i) => (
                                <tr key={i}>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to={`/admin/mentor-profile/${i}`}
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={AVATAR_08}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to={`/admin/mentor-profile/${i}`}>
                                        {v.first_name} {v.last_name}
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>{v.course_name}</td>
                                  <td>
                                    <Ratings rating={4.5} />
                                  </td>
                                  <td>{v.price}</td>
                                  <td>
                                    <button className="btn btn-primary">
                                      {" "}
                                      Biriktirish{" "}
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        ) : (
                          "O'qituvchilar topilmadi"
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
          O'quvchi malumotlari
        </ModalHeader>
        <ModalBody>
          <form onSubmit={updateLeadProfile}>
            <div className="row form-row">
              <div className="col-12 col-sm-6">
                <FormGroup
                  label={"Ism"}
                  type={"text"}
                  value={first_name}
                  setValue={setFirstName}
                  className={"text-capitalize"}
                />
              </div>
              <div className="col-12 col-sm-6">
                <FormGroup
                  label={"Familiya"}
                  type={"text"}
                  value={last_name}
                  setValue={setLastName}
                  className={"text-capitalize"}
                />
              </div>
              <div className="col-12">
                <FormGroup
                  label={"Tug'ilgan sana"}
                  value={birth_date}
                  setValue={setBirthDate}
                  type={"date"}
                />
              </div>
              <div className="col-12 col-sm-6">
                <FormGroup
                  label={"Email"}
                  type={"email"}
                  value={email}
                  setValue={setEmail}
                />
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label>Telefon raqami</label>
                  <PhoneInput
                    international
                    defaultCountry="UZ"
                    value={phone_number}
                    onChange={setPhoneNumber}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <FormGroup
                  label={"Telegram akkauntingiz yoki raqamingiz"}
                  type={"text"}
                  value={telegram}
                  setValue={setTelegram}
                />
              </div>
              <div className="col-12 col-sm-6">
                <FormGroup
                  label={"Qayerdansiz"}
                  type={"text"}
                  value={region}
                  setValue={setRegion}
                />
              </div>
              <div className="col-12 col-sm-6">
                <FormGroup
                  label={"Hozir qayerdasiz"}
                  type={"text"}
                  value={country}
                  setValue={setCountry}
                />
              </div>
              <div className="col-12 col-sm-6">
                <MySelect
                  label={"Kasbingiz"}
                  array={jobData}
                  setValue={setJob}
                />
              </div>
              <div className="col-12 col-sm-6">
                <MySelect
                  label={"Hozirgi bilim darajangiz"}
                  array={levelData}
                  setValue={setExperience}
                />
              </div>
              <div className="col-12">
                <MySelect
                  label={"Biz haqimizda qayerdan eshitdingiz"}
                  array={aboutUsdata}
                />
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label>Maqsadingiz</label>
                  <textarea
                    className="form-control"
                    cols="30"
                    rows="10"
                    value={target || ""}
                    onChange={(e) => setTarget(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Saqlash
            </button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LeadProfile;
