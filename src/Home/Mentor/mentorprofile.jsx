import React, { Component, useState } from "react";
import { USER } from "../../constant/imagepath_home";
import { Link } from "react-router-dom";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { useSelector } from "react-redux";
const MentorProfile = () => {
  const [state, setState] = useState({
    isvoicecallmodal: false,
    isvideocallmodal: false,
    isnewmodal: false,
    iseditModal: false,
    addnewtimeslot: [],
    edittimeslot: ["placeholder", "placeholder"],
  });

  const voicecallmodalClose = () => {
    setState({ isvoicecallmodal: false });
  };
  const videocallModalClose = () => {
    setState({ isvideocallmodal: false });
  };
  const newModalClose = () => {
    setState({ isnewmodal: false });
  };
  const editModalClose = () => {
    setState({ iseditModal: false });
  };
  const addnewtimeschedule = () => {
    const { addnewtimeslot } = state;
    var addnewrow = addnewtimeslot;
    addnewrow.push("placeholder");
    setState({ addnewtimeslot: addnewrow });
  };
  const removenewtimeschedule = (index) => {
    var contacts = [...state.addnewtimeslot];
    contacts.splice(index, 1);
    setState({ addnewtimeslot: contacts });
  };
  const edittimeschedule = () => {
    const { edittimeslot } = state;
    var addnewrow = edittimeslot;
    addnewrow.push("placeholder");
    setState({ edittimeslot: addnewrow });
  };
  const removeedittimeschedule = (index) => {
    var contacts = [...state.edittimeslot];
    contacts.splice(index, 1);
    setState({ edittimeslot: contacts });
  };
  const { addnewtimeslot, edittimeslot } = state;
  const userdata = useSelector((state) => state.Reducer.userdata);
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
                    <a href="/app/index">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Oqituvchi Kabineti
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Oqituvchi Kabineti</h2>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              {/* Mentor Widget */}
              <div className="card">
                <div className="card-body">
                  <div className="row w-100 d-flex align-items-center justify-content-between">
                    <div className="col-12 col-sm-8 my-2">
                      <div className=" d-flex align-items-center">
                        <div className="mentor-img mr-0 d-flex flex-wrap justify-content-center">
                          {userdata?.user?.image ? (
                            <img
                              className="pro-avatar-image"
                              src={`https://teach-api.uz/teach-api/public/storage/${userdata?.user?.image}`}
                              alt="user_image"
                            />
                          ) : (
                            <div className="pro-avatar">
                              {userdata?.user?.first_name.slice(0, 1)}
                              {userdata?.user?.last_name.slice(0, 1)}
                            </div>
                          )}
                          <div className="rating text-center">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                          </div>
                          <div className="mentor-details m-0">
                            <p className="user-location m-0">
                              <i className="fas fa-map-marker-alt" />
                              {userdata?.user?.region} {userdata?.user?.country}
                            </p>
                          </div>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="">
                            {userdata?.user?.first_name}{" "}
                            {userdata?.user?.last_name}
                          </h4>
                          <p className="mentor-type mb-0">
                            {userdata?.user?.course_name}
                          </p>{" "}
                          <div className="mentor-action">
                            <p className="mentor-type social-title">
                              {userdata?.user?.email}
                            </p>
                            <a href="#infonmation-mentor" className="btn-blue">
                              <i className="fas fa-book-reader" />
                            </a>
                            <a href="#location" className="btn-blue">
                              <i className="fas fa-map-marker-alt" />
                            </a>
                            <a href="#sectionTime" className="btn-blue">
                              <i className="fas fa-calendar-alt" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-sm-4 my-2 respons-button d-flex align-items-center justify-content-center flex-wrap ">
                      <span className="hire-rate text-center">
                        {userdata?.user?.price ? userdata?.user?.price : 0} USZ
                        / soat
                      </span>
                      <Link
                        className="blue-btn-radius"
                        to="/app/mentor/profile-settings"
                      >
                        Tahrirlash
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Mentor Widget */}
              {/* Mentor Details Tab */}
              <div className="card">
                <div className="card-body custom-border-card pb-0">
                  {/* About Details */}
                  <div className="widget about-widget custom-about mb-0">
                    <h4 className="widget-title">Men haqimda</h4>
                    <hr />
                    {userdata?.user?.description}
                  </div>
                  {/* /About Details */}
                </div>
              </div>
              <div className="card" id="sectionTime">
                <div className="card-body custom-border-card">
                  <h4 className="card-title"> Dars vaqtlari</h4>
                  <div className="profile-box">
                    <div className="row">
                      <div className="col-lg-7 w-100">
                        <div className="form-group">
                          <label className="date-information-label">
                            Dars o'tish uchun bo'sh vaqtlaringizni shu yerdan
                            belgilashingiz mumkin
                          </label>
                          <select className="select form-control w-25">
                            <option>1 Soat</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="schedule-widget mb-0">
                          {/* Schedule Header */}
                          <div className="schedule-header">
                            {/* Schedule Nav */}
                            <div className="schedule-nav">
                              <ul className="nav nav-tabs nav-justified">
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    data-toggle="tab"
                                    href="#slot_sunday"
                                  >
                                    Yakshanba
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link active"
                                    data-toggle="tab"
                                    href="#slot_monday"
                                  >
                                    Dushanba
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    data-toggle="tab"
                                    href="#slot_tuesday"
                                  >
                                    Seshanba
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    data-toggle="tab"
                                    href="#slot_wednesday"
                                  >
                                    Chorshanba
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    data-toggle="tab"
                                    href="#slot_thursday"
                                  >
                                    Payshanba
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    data-toggle="tab"
                                    href="#slot_friday"
                                  >
                                    Juma
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    data-toggle="tab"
                                    href="#slot_saturday"
                                  >
                                    Shanba
                                  </a>
                                </li>
                              </ul>
                            </div>
                            {/* /Schedule Nav */}
                          </div>
                          {/* /Schedule Header */}
                          {/* Schedule Content */}
                          <div className="tab-content schedule-cont">
                            {/* Sunday Slot */}
                            <div id="slot_sunday" className="tab-pane fade">
                              <h4 className="card-title d-flex justify-content-between">
                                <span>Bo'sh dars soatlari</span>
                                <a
                                  className="edit-link"
                                  onClick={() => setState({ isnewmodal: true })}
                                  data-toggle="modal"
                                  href="#add_time_slot"
                                >
                                  <i className="fa fa-plus-circle" /> Vaqt
                                  qo'shish
                                </a>
                              </h4>
                              <p className="text-muted mb-0">
                                Vaqt kiritilmagan
                              </p>
                            </div>
                            {/* /Sunday Slot */}
                            {/* Monday Slot */}
                            <div
                              id="slot_monday"
                              className="tab-pane fade show active"
                            >
                              <h4 className="card-title d-flex justify-content-between">
                                <span>Bo'sh dars soatlari</span>
                                <a
                                  className="edit-link"
                                  onClick={() =>
                                    setState({ iseditModal: true })
                                  }
                                  data-toggle="modal"
                                  href="#"
                                >
                                  <i className="fa fa-edit mr-1" />
                                  Tahrirlash
                                </a>
                              </h4>
                              {/* Slot List */}
                              <div className="user-times">
                                <div className="user-slot-list">
                                  8:00 pm - 11:30 pm
                                  <a href="" className="delete_schedule">
                                    <i className="fa fa-times" />
                                  </a>
                                </div>
                                <div className="user-slot-list">
                                  11:30 pm - 1:30 pm
                                  <a href="" className="delete_schedule">
                                    <i className="fa fa-times" />
                                  </a>
                                </div>
                                <div className="user-slot-list">
                                  3:00 pm - 5:00 pm
                                  <a href="" className="delete_schedule">
                                    <i className="fa fa-times" />
                                  </a>
                                </div>
                                <div className="user-slot-list">
                                  6:00 pm - 11:00 pm
                                  <a href="" className="delete_schedule">
                                    <i className="fa fa-times" />
                                  </a>
                                </div>
                              </div>
                              {/* /Slot List */}
                            </div>
                            {/* /Monday Slot */}
                            {/* Tuesday Slot */}
                            <div id="slot_tuesday" className="tab-pane fade">
                              <h4 className="card-title d-flex justify-content-between">
                                <span>Bo'sh dars soatlari</span>
                                <a
                                  className="edit-link"
                                  onClick={() => setState({ isnewmodal: true })}
                                  data-toggle="modal"
                                  href="#add_time_slot"
                                >
                                  <i className="fa fa-plus-circle" /> Add Slot
                                </a>
                              </h4>
                              <p className="text-muted mb-0">Mavjud emas</p>
                            </div>
                            {/* /Tuesday Slot */}
                            {/* Wednesday Slot */}
                            <div id="slot_wednesday" className="tab-pane fade">
                              <h4 className="card-title d-flex justify-content-between">
                                <span>Bo'sh dars soatlari</span>
                                <a
                                  className="edit-link"
                                  onClick={() => setState({ isnewmodal: true })}
                                  data-toggle="modal"
                                  href="#add_time_slot"
                                >
                                  <i className="fa fa-plus-circle" /> Vaqt
                                  qo'shish
                                </a>
                              </h4>
                              <p className="text-muted mb-0">Mavjud emas</p>
                            </div>
                            {/* /Wednesday Slot */}
                            {/* Thursday Slot */}
                            <div id="slot_thursday" className="tab-pane fade">
                              <h4 className="card-title d-flex justify-content-between">
                                <span>Bo'sh dars soatlari</span>
                                <a
                                  className="edit-link"
                                  onClick={() => setState({ isnewmodal: true })}
                                  data-toggle="modal"
                                  href="#add_time_slot"
                                >
                                  <i className="fa fa-plus-circle" /> Vaqt
                                  qo'shish
                                </a>
                              </h4>
                              <p className="text-muted mb-0">Mavjud emas</p>
                            </div>
                            {/* /Thursday Slot */}
                            {/* Friday Slot */}
                            <div id="slot_friday" className="tab-pane fade">
                              <h4 className="card-title d-flex justify-content-between">
                                <span>Bo'sh dars soatlari</span>
                                <a
                                  className="edit-link"
                                  onClick={() => setState({ isnewmodal: true })}
                                  data-toggle="modal"
                                  href="#add_time_slot"
                                >
                                  <i className="fa fa-plus-circle" /> Vaqt
                                  qo'shish
                                </a>
                              </h4>
                              <p className="text-muted mb-0">Mavjud emas</p>
                            </div>
                            {/* /Friday Slot */}
                            {/* Saturday Slot */}
                            <div id="slot_saturday" className="tab-pane fade">
                              <h4 className="card-title d-flex justify-content-between">
                                <span>Bo'sh dars soatlari</span>
                                <a
                                  className="edit-link"
                                  onClick={() => setState({ isnewmodal: true })}
                                  data-toggle="modal"
                                  href="#add_time_slot"
                                >
                                  <i className="fa fa-plus-circle" /> Vat
                                  qo'shish
                                </a>
                              </h4>
                              <p className="text-muted mb-0">Vaqt qo'shish</p>
                            </div>
                            {/* /Saturday Slot */}
                          </div>
                          {/* /Schedule Content */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" id="infonmation-mentor">
                <div className="card-body custom-border-card pb-0">
                  {/* Qualification Details */}
                  <div className="widget experience-widget mb-0">
                    <h4 className="widget-title">Ma'lumoti va malakasi</h4>
                    <hr />
                    <div className="experience-box">
                      <ul className="experience-list profile-custom-list">
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Qayerni tugatgan (o'qiyapti)</span>
                              <div className="row-result">
                                Coimbatore University
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Mutaxassisligi</span>
                              <div className="row-result">Mathematics</div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Sertifikatlari</span>
                              <div className="row-result">
                                IELTS, Topik va h.k
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Qaysi tilda dars o'tadi</span>
                              <div className="row-result">
                                {userdata?.user?.language}
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Pedagogik tajribasi</span>
                              <div className="row-result">
                                <span>
                                  {userdata?.user?.experience
                                    ? userdata?.user?.experience
                                    : 0}
                                </span>{" "}
                                yil
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Qualification Details */}
                </div>
              </div>
              <div className="card" id="location">
                <div className="card-body pb-1 custom-border-card">
                  {/* Location Details */}
                  <div className="widget awards-widget m-0">
                    <h4 className="widget-title">Manzil</h4>
                    <hr />
                    <div className="experience-box">
                      <ul className="experience-list profile-custom-list">
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Hozir qayerda yashaydi</span>
                              <div className="row-result">
                                {userdata?.user?.country}
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Doimiy yashash manzili</span>
                              <div className="row-result">
                                {userdata?.user?.region}
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Location Details */}
                </div>
              </div>

              <div>
                {/* Breadcrumb */}

                {/* /Page Content */}
                {/* Add Time Slot Modal */}
                <Modal
                  className="modal-dialog-centered"
                  isOpen={state.isnewmodal}
                  toggle={() => newModalClose()}
                >
                  <ModalHeader toggle={() => newModalClose()}>
                    {" "}
                    Add Time Slots
                  </ModalHeader>
                  <ModalBody>
                    <form>
                      <div className="hours-info">
                        <div className="row form-row hours-cont">
                          <div className="col-12 col-md-10">
                            <div className="row form-row">
                              <div className="col-12 col-md-6">
                                <div className="form-group">
                                  <label>Start Time</label>
                                  <select className="form-control">
                                    <option>Select</option>
                                    <option>12.00 am</option>
                                    <option>1.00 am</option>
                                    <option>2.00 am</option>
                                    <option>3.00 am</option>
                                    <option>4.00 am</option>
                                    <option>5.00 am</option>
                                    <option>6.00 am</option>
                                    <option>7.00 am</option>
                                    <option>8.00 am</option>
                                    <option>9.00 am</option>
                                    <option>10.00 am</option>
                                    <option>11.00 am</option>
                                    <option>12.00 pm</option>
                                    <option>1.00 pm</option>
                                    <option>2.00 pm</option>
                                    <option>3.00 pm</option>
                                    <option>4.00 pm</option>
                                    <option>5.00 pm</option>
                                    <option>6.00 pm</option>
                                    <option>7.00 pm</option>
                                    <option>8.00 pm</option>
                                    <option>9.00 pm</option>
                                    <option>10.00 pm</option>
                                    <option>11.00 pm</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-12 col-md-6">
                                <div className="form-group">
                                  <label>End Time</label>
                                  <select className="form-control">
                                    <option>Select</option>
                                    <option>12.00 am</option>
                                    <option>1.00 am</option>
                                    <option>2.00 am</option>
                                    <option>3.00 am</option>
                                    <option>4.00 am</option>
                                    <option>5.00 am</option>
                                    <option>6.00 am</option>
                                    <option>7.00 am</option>
                                    <option>8.00 am</option>
                                    <option>9.00 am</option>
                                    <option>10.00 am</option>
                                    <option>11.00 am</option>
                                    <option>12.00 pm</option>
                                    <option>1.00 pm</option>
                                    <option>2.00 pm</option>
                                    <option>3.00 pm</option>
                                    <option>4.00 pm</option>
                                    <option>5.00 pm</option>
                                    <option>6.00 pm</option>
                                    <option>7.00 pm</option>
                                    <option>8.00 pm</option>
                                    <option>9.00 pm</option>
                                    <option>10.00 pm</option>
                                    <option>11.00 pm</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {addnewtimeslot &&
                        addnewtimeslot.map((newrow, index) => (
                          <div className="hours-info" key={index}>
                            <div className="row form-row hours-cont">
                              <div className="col-12 col-md-10">
                                <div className="row form-row">
                                  <div className="col-12 col-md-6">
                                    <div className="form-group">
                                      <label>Start Time</label>
                                      <select className="form-control">
                                        <option>Select</option>
                                        <option>12.00 am</option>
                                        <option>1.00 am</option>
                                        <option>2.00 am</option>
                                        <option>3.00 am</option>
                                        <option>4.00 am</option>
                                        <option>5.00 am</option>
                                        <option>6.00 am</option>
                                        <option>7.00 am</option>
                                        <option>8.00 am</option>
                                        <option>9.00 am</option>
                                        <option>10.00 am</option>
                                        <option>11.00 am</option>
                                        <option>12.00 pm</option>
                                        <option>1.00 pm</option>
                                        <option>2.00 pm</option>
                                        <option>3.00 pm</option>
                                        <option>4.00 pm</option>
                                        <option>5.00 pm</option>
                                        <option>6.00 pm</option>
                                        <option>7.00 pm</option>
                                        <option>8.00 pm</option>
                                        <option>9.00 pm</option>
                                        <option>10.00 pm</option>
                                        <option>11.00 pm</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6">
                                    <div className="form-group">
                                      <label>End Time</label>
                                      <select className="form-control">
                                        <option>Select</option>
                                        <option>12.00 am</option>
                                        <option>1.00 am</option>
                                        <option>2.00 am</option>
                                        <option>3.00 am</option>
                                        <option>4.00 am</option>
                                        <option>5.00 am</option>
                                        <option>6.00 am</option>
                                        <option>7.00 am</option>
                                        <option>8.00 am</option>
                                        <option>9.00 am</option>
                                        <option>10.00 am</option>
                                        <option>11.00 am</option>
                                        <option>12.00 pm</option>
                                        <option>1.00 pm</option>
                                        <option>2.00 pm</option>
                                        <option>3.00 pm</option>
                                        <option>4.00 pm</option>
                                        <option>5.00 pm</option>
                                        <option>6.00 pm</option>
                                        <option>7.00 pm</option>
                                        <option>8.00 pm</option>
                                        <option>9.00 pm</option>
                                        <option>10.00 pm</option>
                                        <option>11.00 pm</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-md-2">
                                <label className="d-md-block d-sm-none d-none">
                                  &nbsp;
                                </label>
                                <a
                                  className="btn btn-danger trash"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => removenewtimeschedule(index)}
                                >
                                  <i
                                    style={{ color: "#fff" }}
                                    className="far fa-trash-alt"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      <div className="add-more mb-3">
                        <a
                          style={{ cursor: "pointer", color: "#1e88e5" }}
                          onClick={() => addnewtimeschedule()}
                        >
                          <i className="fa fa-plus-circle" /> Add More
                        </a>
                      </div>
                      <div className="submit-section text-center">
                        <button
                          type="button"
                          className="btn btn-primary submit-btn"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </ModalBody>
                </Modal>
                {/* Edit Time Slot Modal */}
                <Modal
                  className="modal-dialog-centered"
                  isOpen={state.iseditModal}
                  toggle={() => editModalClose()}
                >
                  <ModalHeader toggle={() => editModalClose()}>
                    {" "}
                    Edit Time Slots
                  </ModalHeader>
                  <ModalBody>
                    <form>
                      <div className="hours-info">
                        <div className="row form-row hours-cont">
                          <div className="col-12 col-md-10">
                            <div className="row form-row">
                              <div className="col-12 col-md-6">
                                <div className="form-group">
                                  <label>Start Time</label>
                                  <select className="form-control">
                                    <option>Select</option>
                                    <option>12.00 am</option>
                                    <option>1.00 am</option>
                                    <option>2.00 am</option>
                                    <option>3.00 am</option>
                                    <option>4.00 am</option>
                                    <option>5.00 am</option>
                                    <option>6.00 am</option>
                                    <option>7.00 am</option>
                                    <option>8.00 am</option>
                                    <option>9.00 am</option>
                                    <option>10.00 am</option>
                                    <option>11.00 am</option>
                                    <option>12.00 pm</option>
                                    <option>1.00 pm</option>
                                    <option>2.00 pm</option>
                                    <option>3.00 pm</option>
                                    <option>4.00 pm</option>
                                    <option>5.00 pm</option>
                                    <option>6.00 pm</option>
                                    <option>7.00 pm</option>
                                    <option>8.00 pm</option>
                                    <option>9.00 pm</option>
                                    <option>10.00 pm</option>
                                    <option>11.00 pm</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-12 col-md-6">
                                <div className="form-group">
                                  <label>End Time</label>
                                  <select className="form-control">
                                    <option>Select</option>
                                    <option>12.00 am</option>
                                    <option>1.00 am</option>
                                    <option>2.00 am</option>
                                    <option>3.00 am</option>
                                    <option>4.00 am</option>
                                    <option>5.00 am</option>
                                    <option>6.00 am</option>
                                    <option>7.00 am</option>
                                    <option>8.00 am</option>
                                    <option>9.00 am</option>
                                    <option>10.00 am</option>
                                    <option>11.00 am</option>
                                    <option>12.00 pm</option>
                                    <option>1.00 pm</option>
                                    <option>2.00 pm</option>
                                    <option>3.00 pm</option>
                                    <option>4.00 pm</option>
                                    <option>5.00 pm</option>
                                    <option>6.00 pm</option>
                                    <option>7.00 pm</option>
                                    <option>8.00 pm</option>
                                    <option>9.00 pm</option>
                                    <option>10.00 pm</option>
                                    <option>11.00 pm</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {edittimeslot &&
                          edittimeslot.map((timeslot, index) => (
                            <div
                              className="row form-row hours-cont"
                              key={index}
                            >
                              <div className="col-12 col-md-10">
                                <div className="row form-row">
                                  <div className="col-12 col-md-6">
                                    <div className="form-group">
                                      <label>Start Time</label>
                                      <select className="form-control">
                                        <option>Select</option>
                                        <option>12.00 am</option>
                                        <option>1.00 am</option>
                                        <option>2.00 am</option>
                                        <option>3.00 am</option>
                                        <option>4.00 am</option>
                                        <option>5.00 am</option>
                                        <option>6.00 am</option>
                                        <option>7.00 am</option>
                                        <option>8.00 am</option>
                                        <option>9.00 am</option>
                                        <option>10.00 am</option>
                                        <option>11.00 am</option>
                                        <option>12.00 pm</option>
                                        <option>1.00 pm</option>
                                        <option>2.00 pm</option>
                                        <option>3.00 pm</option>
                                        <option>4.00 pm</option>
                                        <option>5.00 pm</option>
                                        <option>6.00 pm</option>
                                        <option>7.00 pm</option>
                                        <option>8.00 pm</option>
                                        <option>9.00 pm</option>
                                        <option>10.00 pm</option>
                                        <option>11.00 pm</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6">
                                    <div className="form-group">
                                      <label>End Time</label>
                                      <select className="form-control">
                                        <option>Select</option>
                                        <option>12.00 am</option>
                                        <option>1.00 am</option>
                                        <option>2.00 am</option>
                                        <option>3.00 am</option>
                                        <option>4.00 am</option>
                                        <option>5.00 am</option>
                                        <option>6.00 am</option>
                                        <option>7.00 am</option>
                                        <option>8.00 am</option>
                                        <option>9.00 am</option>
                                        <option>10.00 am</option>
                                        <option>11.00 am</option>
                                        <option>12.00 pm</option>
                                        <option>1.00 pm</option>
                                        <option>2.00 pm</option>
                                        <option>3.00 pm</option>
                                        <option>4.00 pm</option>
                                        <option>5.00 pm</option>
                                        <option>6.00 pm</option>
                                        <option>7.00 pm</option>
                                        <option>8.00 pm</option>
                                        <option>9.00 pm</option>
                                        <option>10.00 pm</option>
                                        <option>11.00 pm</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-md-2">
                                <label className="d-md-block d-sm-none d-none">
                                  &nbsp;
                                </label>
                                <a
                                  className="btn btn-danger trash"
                                  onClick={() => removeedittimeschedule(index)}
                                >
                                  <i
                                    style={{ color: "#fff" }}
                                    className="far fa-trash-alt"
                                  />
                                </a>
                              </div>
                            </div>
                          ))}
                      </div>
                      <div className="add-more mb-3">
                        <a
                          className="add-hours"
                          style={{ cursor: "pointer", color: "#1e88e5" }}
                          onClick={() => edittimeschedule()}
                        >
                          <i className="fa fa-plus-circle" /> Add More
                        </a>
                      </div>
                      <div className="submit-section text-center">
                        <button
                          type="button"
                          className="btn btn-primary submit-btn"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </ModalBody>
                </Modal>
              </div>
              {/* /Mentor Details Tab */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Voice Call Modal */}
      <Modal
        className="modal-dialog-centered"
        isOpen={state.isvoicecallmodal}
        toggle={() => voicecallmodalClose()}
      >
        <ModalBody>
          <div className="call-box incoming-box">
            <div className="call-wrapper">
              <div className="call-inner">
                <div className="call-user">
                  <img alt="User Image" src={USER} className="call-avatar" />
                  <h4>Jonathan Doe</h4>
                  <span>Connecting...</span>
                </div>
                <div className="call-items">
                  <a
                    href=""
                    className="btn call-item call-end"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="material-icons">call_end</i>
                  </a>
                  <Link
                    to="/app/Pages/voice-call"
                    className="btn call-item call-start"
                  >
                    <i className="material-icons">call</i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
      {/* /Voice Call Modal */}
      {/* Video Call Modal */}
      <div className="modal fade call-modal" id="video_call">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              {/* Incoming Call */}
              <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <img
                        className="call-avatar"
                        src={USER}
                        alt="User Image"
                      />
                      <h4>Dr. Darren Elder</h4>
                      <span>Calling ...</span>
                    </div>
                    <div className="call-items">
                      <a
                        href=""
                        className="btn call-item call-end"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <i className="material-icons">call_end</i>
                      </a>
                      <Link
                        to="/app/Pages/video-call"
                        className="btn call-item call-start"
                      >
                        <i className="material-icons">videocam</i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Incoming Call */}
            </div>
          </div>
        </div>
      </div>
      {/* Video Call Modal */}
    </div>
  );
};

export default MentorProfile;
