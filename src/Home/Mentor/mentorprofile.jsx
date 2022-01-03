import React, { useEffect, useState, useMemo } from "react";
import { USER } from "../../constant/imagepath_home";
import { Link } from "react-router-dom";
import { TeacherFreeTime } from "../../Api/updateApi";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { useSelector } from "react-redux";
import { modalTimeData } from "../../Data/index";
import { data, datasheudle } from "../../Data/teacherProfile";
import TimeSelect from "../../UI/Select/TimeSelect";
import MyInput from "../../UI/Input/MyInput";
import { Swiper } from "swiper/react/swiper";
import { SwiperSlide } from "swiper/react/swiper-slide";
import { Calendar } from "../../Data/Calendar";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
const MentorProfile = () => {
  const [addnewtimeslot, setAddnewtimeslot] = useState([]);
  const [weekDays, setWeekDays] = useState("monday");
  const [day, setDay] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [time, setTime] = useState();
  const [date, setDate] = useState();
  const modalOpen = () => {
    setIsModal(true);
  };
  const modalClose = () => {
    setIsModal(false);
  };

  const addNewTime = (e) => {
    e.preventDefault();
    const cloneDay = [...day];
    const filterCloneDay = cloneDay.filter(
      (v) => v?.time === time && v?.date === date
    );
    if (filterCloneDay.length == 0 && time !== "Tanlang" && time && date) {
      cloneDay.push({ time, date });
      setDay(cloneDay);
      let addnewrow = [...addnewtimeslot];
      addnewrow.push(1);
      setAddnewtimeslot(addnewrow);
    }
  };
  const removeTime = (index) => {
    let removerow = [...addnewtimeslot];
    removerow.splice(index, 1);
    setAddnewtimeslot(removerow);
  };
  const saveTime = (e) => {
    e.preventDefault();
    const cloneDay = [...day];
    const filterCloneDay = cloneDay.filter(
      (v) => v?.time === time && v?.date === date
    );
    if (filterCloneDay.length == 0 && time !== "Tanlang" && time) {
      cloneDay.push({ time, date });
      setDay(cloneDay);
      modalClose();
    }
  };
  const userdata = useSelector((state) => state.Reducer.userdata);

  useEffect(() => {
    TeacherFreeTime();
  }, []);

  useMemo(() => {
    console.log(day);
  }, [day]);
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
                              src={`https://teach-api.uz/storage/${userdata?.user?.image}`}
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
                              <i className="fas fa-map-marker-alt me-2" />
                              {userdata?.user?.country
                                ? userdata?.user?.country
                                : "Kiritilmagan"}
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
                <div className="card-body custom-border-card">
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
                      <div className="col-12">
                        <div className="calendarMentor">
                          <Swiper navigation={true} className="mySwiper">
                            {Calendar.length > 0 &&
                              Calendar.map((v, i) => {
                                return (
                                  <SwiperSlide key={i}>
                                    <div className="card booking-schedule schedule-widget">
                                      {/* Schedule Header */}
                                      <div className="schedule-header">
                                        <div className="row">
                                          <div className="col-md-12">
                                            {/* Day Slot */}
                                            <div className="day-slot">
                                              <ul>
                                                {v.dayOfWeek.map((v, i) => (
                                                  <li key={i}>
                                                    <span>
                                                      {v.weekDays.slice(0, 3)}
                                                    </span>
                                                    <span className="slot-date">
                                                      <small className="slot-year">
                                                        {v.day}
                                                      </small>
                                                    </span>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                            {/* /Day Slot */}
                                          </div>
                                        </div>
                                      </div>
                                      {/* /Schedule Header */}
                                      {/* Schedule Content */}
                                      <div className="schedule-cont">
                                        <div className="row">
                                          <div className="col-md-12">
                                            {/* Time Slot */}
                                            <div className="time-slot">
                                              <ul className="clearfix">
                                                {v.dayOfWeek.map((v, i) => {
                                                  return (
                                                    <li key={i}>
                                                      {v.hours.length > 0 ? (
                                                        v.hours.map((v, i) => {
                                                          return (
                                                            <a
                                                              className="timing"
                                                              href="#"
                                                              key={i}
                                                            >
                                                              <span>{v}</span>
                                                            </a>
                                                          );
                                                        })
                                                      ) : (
                                                        <a
                                                          className="timing"
                                                          href="#"
                                                          key={i}
                                                        >
                                                          <span>Vaqt yo'q</span>
                                                        </a>
                                                      )}
                                                    </li>
                                                  );
                                                })}
                                              </ul>
                                            </div>
                                            {/* /Time Slot */}
                                          </div>
                                        </div>
                                      </div>
                                      {/* /Schedule Content */}
                                    </div>
                                  </SwiperSlide>
                                );
                              })}
                          </Swiper>
                        </div>
                        <div className="col-12 d-flex justify-content-end">
                          <button
                            className="btn btn-primary"
                            onClick={modalOpen}
                          >
                            Vaqt qo'shish
                          </button>
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
                              <div className="row-result">Kiritilmagan</div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Mutaxassisligi</span>
                              <div className="row-result">
                                {userdata?.user?.course_name}
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Sertifikatlari</span>
                              <div className="row-result">Kiritilmagan</div>
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
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Telefon raqami</span>
                              <div className="row-result">
                                {userdata?.user?.phone_number}
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Telegram</span>
                              <div className="row-result">
                                {userdata?.user?.telegram_number}
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Tug'ilgan sanasi</span>
                              <div className="row-result">
                                {userdata?.user?.birth_date}
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
                  isOpen={isModal}
                  toggle={modalClose}
                >
                  <ModalHeader toggle={modalClose}>
                    {" "}
                    Bo'sh vaqtlaringizni belgilang
                  </ModalHeader>
                  <ModalBody>
                    <form>
                      <div className="hours-info">
                        <div className="row form-row hours-cont">
                          <div className="col-12 col-md-10">
                            <div className="row form-row">
                              <div className="col-md-6">
                                <TimeSelect
                                  label={"Boshlanadi-tugaydi"}
                                  array={modalTimeData}
                                  setValue={setTime}
                                />
                              </div>
                              <div className="col-md-6">
                                <label>Sana</label>
                                <MyInput
                                  type={"date"}
                                  onChange={(e) => setDate(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                          {addnewtimeslot &&
                            addnewtimeslot.map((v, i) => (
                              <div className="col-12" key={i}>
                                <div className="row form-row">
                                  <div className="col-10 col-md-5">
                                    <TimeSelect
                                      label={"Boshlanadi-tugaydi"}
                                      array={modalTimeData}
                                      setValue={setTime}
                                    />
                                  </div>
                                  <div className="col-10 col-md-5">
                                    <label>Sana</label>
                                    <MyInput
                                      type={"date"}
                                      onChange={(e) => setDate(e.target.value)}
                                    />
                                  </div>
                                  <div className="col-2 col-md-2">
                                    <div className="form-group">
                                      <label>&nbsp;</label>
                                      <div
                                        className="btn btn-danger trash"
                                        onClick={() => removeTime(i)}
                                      >
                                        <i className="far fa-trash-alt"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                      <div className="add-more mb-3">
                        <div
                          style={{ cursor: "pointer", color: "#1e88e5" }}
                          onClick={(e) => addNewTime(e)}
                        >
                          <i className="fa fa-plus-circle" /> Yana qo'shish
                        </div>
                      </div>
                      <div className="submit-section text-center">
                        <button
                          type="button"
                          onClick={(e) => saveTime(e)}
                          className="btn btn-primary submit-btn"
                        >
                          Saqlash
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
    </div>
  );
};

export default MentorProfile;

{
  /* <Modal
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
      </Modal> */
}

{
  /* <div className="modal fade call-modal" id="video_call">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
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
            </div>
          </div>
        </div>
      </div> */
}
