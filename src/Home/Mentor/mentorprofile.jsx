import React, { Component } from "react";
import { USER } from "../../constant/imagepath_home";
import { Link } from "react-router-dom";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
class MentorProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isvoicecallmodal: false,
      isvideocallmodal: false,
      isnewmodal: false,
      iseditModal: false,
      addnewtimeslot: [],
      edittimeslot: ["placeholder", "placeholder"],
    };
  }

  voicecallmodalClose() {
    this.setState({ isvoicecallmodal: false });
  }
  videocallModalClose() {
    this.setState({ isvideocallmodal: false });
  }
  newModalClose() {
    this.setState({ isnewmodal: false });
  }
  editModalClose() {
    this.setState({ iseditModal: false });
  }
  addnewtimeschedule() {
    const { addnewtimeslot } = this.state;
    var addnewrow = addnewtimeslot;
    addnewrow.push("placeholder");
    this.setState({ addnewtimeslot: addnewrow });
  }
  removenewtimeschedule(index) {
    var contacts = [...this.state.addnewtimeslot];
    contacts.splice(index, 1);
    this.setState({ addnewtimeslot: contacts });
  }
  edittimeschedule() {
    const { edittimeslot } = this.state;
    var addnewrow = edittimeslot;
    addnewrow.push("placeholder");
    this.setState({ edittimeslot: addnewrow });
  }
  removeedittimeschedule(index) {
    var contacts = [...this.state.edittimeslot];
    contacts.splice(index, 1);
    this.setState({ edittimeslot: contacts });
  }
  render() {
    const { addnewtimeslot, edittimeslot } = this.state;
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
                    <div className="mentor-widget">
                      <div className="user-info-left align-items-center">
                        <div className="mentor-img d-flex flex-wrap justify-content-center">
                          <div className="pro-avatar">JD</div>
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
                          <h4 className="usr-name">Еуьшкщм Doe</h4>
                          <p className="mentor-type">
                            English Literature (M.A)
                          </p>
                          <div className="mentor-action">
                            <p className="mentor-type social-title">
                              Contact Me
                            </p>
                            <a href="" className="btn-blue">
                              <i className="fas fa-comments" />
                            </a>
                            <Link to="/app/Mentor/chat" className="btn-blue">
                              <i className="fas fa-envelope" />
                            </Link>
                            <a
                              href=""
                              className="btn-blue"
                              onClick={() =>
                                this.setState({ isvoicecallmodal: true })
                              }
                              data-toggle="modal"
                              data-target="#voice_call"
                            >
                              <i className="fas fa-video" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="user-info-right d-flex align-items-end flex-wrap">
                        <div className="hireme-btn text-center">
                          <span className="hire-rate">$500 / Hour</span>
                          <Link
                            className="blue-btn-radius"
                            to="/app/Mentee/booking"
                          >
                            Hire Me
                          </Link>
                        </div>
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
                      <h4 className="widget-title">About Me</h4>
                      <hr />
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
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
                <div className="card">
                  <div className="card-body custom-border-card pb-0">
                    {/* Personal Details */}
                    <div className="widget education-widget mb-0">
                      <h4 className="widget-title">Personal Details</h4>
                      <hr />
                      <div className="experience-box">
                        <ul className="experience-list profile-custom-list">
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Gender</span>
                                <div className="row-result">Male</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Date of Birth</span>
                                <div className="row-result">01 - 02 - 2000</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Where did you hear about us?</span>
                                <div className="row-result">
                                  Through web search
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Personal Details */}
                  </div>
                </div>
                <div className="card">
                  <div className="card-body custom-border-card pb-0">
                    {/* Qualification Details */}
                    <div className="widget experience-widget mb-0">
                      <h4 className="widget-title">Qualification</h4>
                      <hr />
                      <div className="experience-box">
                        <ul className="experience-list profile-custom-list">
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Undergraduate College</span>
                                <div className="row-result">
                                  Coimbatore University
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Undergraduate Major</span>
                                <div className="row-result">Mathematics</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Graduate College</span>
                                <div className="row-result">
                                  Coimbatore University
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Type of Degree</span>
                                <div className="row-result">B.Sc (Maths)</div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Qualification Details */}
                  </div>
                </div>
                <div className="card">
                  <div className="card-body pb-1 custom-border-card">
                    {/* Location Details */}
                    <div className="widget awards-widget m-0">
                      <h4 className="widget-title">Location</h4>
                      <hr />
                      <div className="experience-box">
                        <ul className="experience-list profile-custom-list">
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Address 1</span>
                                <div className="row-result">
                                  No : 5 ABC Avenue
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Address 2</span>
                                <div className="row-result">
                                  National highway road
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Country</span>
                                <div className="row-result">India</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>City</span>
                                <div className="row-result">Coimbatore</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>State</span>
                                <div className="row-result">Tamil Nadu</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Postal Code</span>
                                <div className="row-result">641001</div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Location Details */}
                  </div>
                </div>
                <div className="card">
                  <div className="card-body custom-border-card">
                    <h4 className="card-title"> Dars vaqtlari</h4>
                    <div className="profile-box">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label>
                              {" "}
                              Dars o'tish uchun bo'sh vaqtlaringizni shu yerdan
                              belgilashingiz mumkin
                            </label>
                            <select className="select form-control">
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
                                    onClick={() =>
                                      this.setState({ isnewmodal: true })
                                    }
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
                                      this.setState({ iseditModal: true })
                                    }
                                    data-toggle="modal"
                                    href="#edit_time_slot"
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
                                    onClick={() =>
                                      this.setState({ isnewmodal: true })
                                    }
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
                              <div
                                id="slot_wednesday"
                                className="tab-pane fade"
                              >
                                <h4 className="card-title d-flex justify-content-between">
                                  <span>Bo'sh dars soatlari</span>
                                  <a
                                    className="edit-link"
                                    onClick={() =>
                                      this.setState({ isnewmodal: true })
                                    }
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
                                    onClick={() =>
                                      this.setState({ isnewmodal: true })
                                    }
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
                                    onClick={() =>
                                      this.setState({ isnewmodal: true })
                                    }
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
                                    onClick={() =>
                                      this.setState({ isnewmodal: true })
                                    }
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
                <div>
                  {/* Breadcrumb */}

                  {/* /Page Content */}
                  {/* Add Time Slot Modal */}
                  <Modal
                    className="modal-dialog-centered"
                    isOpen={this.state.isnewmodal}
                    toggle={() => this.newModalClose()}
                  >
                    <ModalHeader toggle={() => this.newModalClose()}>
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
                                    onClick={() =>
                                      this.removenewtimeschedule(index)
                                    }
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
                            onClick={() => this.addnewtimeschedule()}
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
                    isOpen={this.state.iseditModal}
                    toggle={() => this.editModalClose()}
                  >
                    <ModalHeader toggle={() => this.editModalClose()}>
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
                                    onClick={() =>
                                      this.removeedittimeschedule(index)
                                    }
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
                            onClick={() => this.edittimeschedule()}
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
          isOpen={this.state.isvoicecallmodal}
          toggle={() => this.voicecallmodalClose()}
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
  }
}

export default MentorProfile;
