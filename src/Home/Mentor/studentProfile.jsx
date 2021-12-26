import React, { useState, useEffect } from "react";
import { USER } from "../../constant/imagepath_home";
// import ModalPage from "../components/modal/Modal";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { Link, useParams, useLocation } from "react-router-dom";
import {
  USER_1,
  USER_2,
  USER_3,
  USER_4,
  USER_5,
  USER_6,
  USER_7,
} from "../../constant/imagepath_home";
import { useSelector } from "react-redux";
import { myStudents } from "../../Api/teacherStudentsApi";
const StudentProfile = () => {
  const [state, setState] = useState({
    isvoicecallmodal: false,
    isvideocallmodal: false,
    iseditModal: false,
  });

  const [count, setCount] = useState(12);
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState("06:00");
  const [endTime, setEndTime] = useState("06:00");
  const [subject, setSubject] = useState();
  const [array, setArray] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [index, setIndex] = useState();
  const { id } = useParams();
  const data = useSelector((state) => state.Reducer.teacher_of_students[id]);
  const location = useLocation();

  useEffect(() => {
    myStudents();
  }, [location.pathname]);

  console.log(data);

  const addLesson = (e) => {
    e.preventDefault();
    if (count === 0) {
      alert("O'quvchining sotib olgan darslari tugadi");
      setCount(0);
    }
    if (
      (date == "" || date == undefined,
      date == null ||
        startTime == "" ||
        startTime == undefined ||
        startTime == null ||
        endTime == "" ||
        endTime == undefined ||
        endTime == null ||
        subject == "" ||
        subject == undefined ||
        subject == null)
    ) {
      alert("Malumotlarni to'liq kiriting.");
    } else {
      let arrayclone = [...array];
      arrayclone.push({
        id: arrayclone?.length + 1,
        date: date,
        startTime: startTime,
        endTime: endTime,
        subject: subject,
      });
      setCount(count - 1);
      setArray(arrayclone);
      setSubject("");
    }
  };
  const handledelete = (i) => {
    let arrayclone = [...array];
    arrayclone.splice(i, 1);
    setArray(arrayclone);
    setCount(count - 1);
  };
  const handleEdit = (i) => {
    setIndex(i);
    setDate(array[i].date);
    setStartTime(array[i].startTime);
    setEndTime(array[i].endTime);
    setSubject(array[i].subject);
    setIsModal(true);
  };
  const handleModalClose = () => {
    setIsModal(false);
  };
  const save = () => {
    let arrayclone = [...array];
    arrayclone[index].date = date;
    arrayclone[index].startTime = startTime;
    arrayclone[index].endTime = endTime;
    arrayclone[index].subject = subject;
    setIsModal(false);
    setDate("");
    setStartTime("");
    setEndTime("");
    setSubject("");
  };

  const voicecallmodalClose = () => {
    setState({ isvoicecallmodal: false });
  };
  const videocallModalClose = () => {
    setState({ isvideocallmodal: false });
  };
  const editModalClose = () => {
    setState({ iseditModal: false });
  };
  const removeedittimeschedule = (index) => {
    var contacts = [...state.edittimeslot];
    contacts.splice(index, 1);
    setState({ edittimeslot: contacts });
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
                    <a href="/app/index">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Oquvchi Profili for Teacher
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Oquvchi Profili</h2>
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
                            {data?.image ? (
                              <img
                                className="pro-avatar-image"
                                src={`https://teach-api.uz/teach-api/public/storage/${data?.image}`}
                              />
                            ) : (
                              <div className="pro-avatar">
                                {data?.first_name.slice(0, 1)}
                                {data?.last_name.slice(0, 1)}
                              </div>
                            )}
                            <div className="mentor-details m-0">
                              <i className="fas fa-map-marker-alt" />
                              {data?.region} {data?.country}
                            </div>
                          </div>
                          <div className="user-info-cont">
                            <h4 className="">
                              {data?.first_name} {data?.last_name}
                            </h4>
                            <p className="mentor-type mb-0">
                              English Literature (M.A)
                            </p>
                            <div className="mentor-action">
                              <p className="mentor-type social-title">
                                {data?.email}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-4 my-2 respons-button d-flex align-items-center justify-content-center flex-wrap ">
                        <a href="#" className="blue-btn-radius">
                          Bog'lanish{" "}
                        </a>
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
                      <h4 className="widget-title">Qisqacha ma'lumot</h4>
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

                {/* <div className="card">
                  <div className="card-body custom-border-card pb-0">
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
                  </div>
                </div> */}

                {/* <div className="card">
                  <div className="card-body pb-1 custom-border-card">
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
                  </div>
                </div> */}

                <div className="card">
                  <div className="card-body custom-border-card pb-0">
                    {/* Form Lesson Date and time */}
                    <form onSubmit={addLesson}>
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label> Darslar soni </label>
                            <div className="form-control d-flex align-items-center">
                              {count}
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label> Dars sanasi </label>
                            <input
                              defaultValue={date || ""}
                              onChange={(e) => setDate(e.target.value)}
                              type="date"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label> Start time </label>
                            <select
                              value={startTime || ""}
                              className="form-control select"
                              onChange={(e) => setStartTime(e.target.value)}
                            >
                              <option value="06:00">06:00</option>
                              <option value="07:00">07:00</option>
                              <option value="08:00">08:00</option>
                              <option value="09:00">09:00</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label> End time </label>
                            <select
                              value={endTime || ""}
                              className="form-control select"
                              onChange={(e) => setEndTime(e.target.value)}
                            >
                              <option value="06:00">06:00</option>
                              <option value="07:00">07:00</option>
                              <option value="08:00">08:00</option>
                              <option value="09:00">09:00</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label>Mavzu</label>
                            <input
                              value={subject || ""}
                              onChange={(e) => setSubject(e.target.value)}
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-12 d-flex align-items-center justify-content-center p-3">
                          <button className="btn btn-primary" type="submit">
                            Saqlash
                          </button>
                        </div>
                      </div>
                    </form>
                    {/* /Form Lesson Date and time */}

                    {/* Table Date and Time */}
                    {array?.length > 0 && (
                      <div className="tab-pane show active" id="mentee-list">
                        <div className="card card-table">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Dars sanasi</th>
                                    <th className="text-center">Dars vaqti</th>
                                    <th>Mavzu</th>
                                    <th className="text-center">Harakat</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {array.map((v, i) => (
                                    <tr key={i}>
                                      <td>{v.id}</td>
                                      <td>{v.date}</td>
                                      <td className="text-center">
                                        <span className="pending">
                                          {v.startTime}-{v.endTime}
                                        </span>
                                      </td>
                                      <td>{v.subject}</td>
                                      <td className="text-center">
                                        <button
                                          className="btn btn-sm bg-info-light"
                                          onClick={() => handleEdit(i)}
                                        >
                                          <div className="fas fa-edit"></div>
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* /Table Date and Time */}
                  </div>
                </div>
                {/* /Mentor Details Tab */}
              </div>
              {/* /Mentor Widget */}
              {/* Mentor Details Tab */}
              {/* <ModalPage /> */}

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
      {/* Edit Lesson Date and Time Modal */}

      <Modal
        className="modal-dialog-centered"
        isOpen={isModal}
        toggle={() => handleModalClose()}
      >
        <ModalHeader
          close={
            <button className="close" onClick={() => handleModalClose()}>
              ×
            </button>
          }
          toggle={() => handleModalClose()}
        >
          Taxrirlash
        </ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label> Dars sanasi </label>
                <input
                  className="form-control"
                  value={date || ""}
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label>Start time</label>
                <select
                  className="form-control select"
                  value={startTime || ""}
                  onChange={(e) => setStartTime(e.target.value)}
                >
                  <option value="06:00">06:00</option>
                  <option value="07:00">07:00</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <select
                  className="form-control select"
                  value={endTime || ""}
                  onChange={(e) => setEndTime(e.target.value)}
                >
                  <option value="06:00">06:00</option>
                  <option value="07:00">07:00</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label> Mavzu </label>
                <input
                  className="form-control"
                  value={subject || ""}
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                />
              </div>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center p-3">
              <button className="btn btn-primary" onClick={save}>
                Saqlash
              </button>
            </div>
          </div>
        </ModalBody>
      </Modal>
      {/* /Edit Lesson Date and Time Modal */}
      {/* Video Call Modal */}
    </div>
  );
};

export default StudentProfile;
