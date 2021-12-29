import React, { Component, useState } from "react";
import { USER } from "../../constant/imagepath_home";
import { Link } from "react-router-dom";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { useSelector } from "react-redux";
import { USER_2 } from "../../constant/imagepath_home";
import DateRangePicker from "react-bootstrap-daterangepicker";
import click from "../assets/payicon/click.png";
import payme from "../assets/payicon/payme.png";
import { Calendar } from "../../Data/Calendar";
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:
import "bootstrap/dist/css/bootstrap.css";
// you will also need the css that comes with bootstrap-daterangepicker
import "bootstrap-daterangepicker/daterangepicker.css";
// Import Swiper React components
import { Swiper } from "swiper/react/swiper";
import { SwiperSlide } from "swiper/react/swiper-slide";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);
const MentorBooking = () => {
  const [state, setState] = useState({
    isvoicecallmodal: false,
    isvideocallmodal: false,
    isnewmodal: false,
    iseditModal: false,
    addnewtimeslot: [],
    edittimeslot: ["placeholder", "placeholder"],
  });
  const onChange = (date) => {
    // Day.js object
    console.log(date);
  };
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
                          <div className="pro-avatar">ST</div>
                          <div className="rating text-center">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                          </div>
                          <div className="mentor-details m-0">
                            <p className="user-location m-0">
                              <i className="fas fa-map-marker-alt" /> Tamil
                              Nadu, India
                            </p>
                          </div>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="">Sardor Temirov</h4>
                          <p className="mentor-type mb-0">
                            English Literature (M.A)
                          </p>{" "}
                          <div className="mentor-action">
                            <p className="mentor-type social-title">
                              blabla@gmail.com
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
                        50 000 USZ / soat
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Mentor Widget */}
              {/* Mentor Details Tab */}
              <div>
                <div className="row">
                  <div className="col-12 col-sm-4 col-md-6">
                    <h4 className="mb-1">11 November 2019</h4>
                    <p className="text-muted">Monday</p>
                  </div>
                  {/* <div className="col-12 col-sm-8 col-md-6 text-sm-right">
                    <div className="bookingrange btn btn-white btn-sm mb-3">
                      <i className="far fa-calendar-alt mr-2" />
                      <DateRangePicker
                        initialSettings={{
                          endDate: new Date('2020-08-11T12:30:00.000Z'),
                          ranges: {
                            // 'Last 30 Days': [
                            //   new Date('2020-07-12T04:57:17.076Z'),
                            //   new Date('2020-08-10T04:57:17.076Z'),
                            // ],
                            // 'Last 7 Days': [
                            //   new Date('2020-08-04T04:57:17.076Z'),
                            //   new Date('2020-08-10T04:57:17.076Z'),
                            // ],
                            // 'Last Month': [
                            //   new Date('2020-06-30T18:30:00.000Z'),
                            //   new Date('2020-07-31T18:29:59.999Z'),
                            // ],
                            // 'This Month': [
                            //   new Date('2020-07-31T18:30:00.000Z'),
                            //   new Date('2020-08-31T18:29:59.999Z'),
                            // ],
                            Today: [new Date(), new Date()],
                            Yesterday: [new Date(), new Date()],
                          },
                          startDate: new Date('2020-08-10T04:30:00.000Z'),
                          timePicker: false,
                        }}
                      >
                        <input
                          type="text"
                          style={{ borderColor: 'transparent' }}
                        />
                      </DateRangePicker>
                      <i className="fas fa-chevron-down ml-2" />
                    </div>
                  </div> */}
                </div>
                {/* Schedule Widget */}

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

                {/* /Schedule Widget */}
                {/* Submit Section */}
                <div className="submit-section proceed-btn text-right">
                  <div className="row">
                    <div className="col-12 col-sm-6 d-flex align-items-center">
                      <img className="payIcon me-3" src={click} alt="click" />
                      <img className="payIcon" src={payme} alt="payme" />
                    </div>
                    <div className="col-12 col-sm-6 d-flex align-items-center justify-content-end">
                      <Link
                        to="/app/Mentee/checkout"
                        className="btn btn-primary submit-btn"
                      >
                        To'lovga o'tish
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body custom-border-card pb-0">
                  {/* About Details */}
                  <div className="widget about-widget custom-about mb-0">
                    <h4 className="widget-title">Men haqimda</h4>
                    <hr />
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                    </p>
                  </div>
                  {/* /About Details */}
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
                                Rus, ingiliz, o'zbek
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Pedagogik tajribasi</span>
                              <div className="row-result">
                                <span>1</span> yil
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
                              <div className="row-result">Toshkent.sh</div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Doimiy yashash manzili</span>
                              <div className="row-result">
                                National highway road
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

export default MentorBooking;
