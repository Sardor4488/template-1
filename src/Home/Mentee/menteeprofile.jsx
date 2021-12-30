import React, { useState } from "react";
import { USER } from "../../constant/imagepath_home";
import { Modal, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";
import { USER_2 } from "../../constant/imagepath_home";
import { useSelector } from "react-redux";

const MenteeProfile = () => {
  const [state, setState] = useState({
    isvoicecallmodal: false,
    isvideocallmodal: false,
  });

  const voicecallmodalClose = () => {
    setState({ ...state, isvoicecallmodal: false });
  };
  const videocallModalClose = () => {
    setState({ ...state, isvideocallmodal: false });
  };
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
                    <a href="/app/index">My teacher</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    O'quvchi profili
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">O'quvchi profili</h2>
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
                    <div className="col-12 col-sm-8">
                      <div className=" d-flex align-items-center">
                        <div className="mentor-img mr-0 d-flex flex-wrap justify-content-center">
                          {userdata?.user?.image ? (
                            <img
                              className="pro-avatar-image"
                              src={`http://teach-api.uz/storage/${userdata?.user?.image}`}
                              alt="user_image"
                            />
                          ) : (
                            <div className="pro-avatar">
                              {userdata?.user?.first_name.slice(0, 1)}
                              {userdata?.user?.last_name.slice(0, 1)}
                            </div>
                          )}
                          <div className="mentor-details m-0">
                            <p className="user-location m-0">
                              <i className="fas fa-map-marker-alt me-2" />
                              {userdata?.user?.country
                                ? userdata?.user?.country
                                : " Kiritilmagan"}
                            </p>
                          </div>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="">
                            {userdata?.user?.first_name}{" "}
                            {userdata?.user?.last_name}
                          </h4>
                          {/* <p className="mentor-type">
                            English Literature (M.A)
                          </p> */}
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-sm-4 respons-button ">
                      <Link
                        className="blue-btn-radius"
                        to="/app/mentee/profile-settings"
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
                    {userdata?.user?.target
                      ? userdata?.user?.target
                      : "Kiritilmagan"}
                  </div>
                  {/* /About Details */}
                </div>
              </div>
              <div className="card">
                <div className="card-body custom-border-card pb-0">
                  {/* Personal Details */}
                  <div className="widget education-widget mb-0">
                    <h4 className="widget-title"> Shaxsiy ma'lumotlar</h4>
                    <hr />
                    <div className="experience-box">
                      <ul className="experience-list profile-custom-list">
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Kasbingiz</span>
                              <div className="row-result">
                                {userdata?.user?.job
                                  ? userdata?.user?.job
                                  : "Kiritilmagan"}
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Tug'ilgan kuni</span>
                              <div className="row-result">
                                {userdata?.user?.birth_date
                                  ? userdata?.user?.birth_date
                                  : "Kiritilmagan"}
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Telefon raqam</span>
                              <div className="row-result">
                                {userdata?.user?.phone_number
                                  ? userdata?.user?.phone_number
                                  : "Kiritilmagan"}
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Personal Details */}
                </div>
                {/* /About Details */}
              </div>
              <div className="card">
                <div className="card-body custom-border-card pb-0">
                  {/* Qualification Details */}
                  <div className="widget experience-widget mb-0">
                    <h4 className="widget-title">O'rganishdan maqsad</h4>
                    <hr />
                    <div className="experience-box">
                      <ul className="experience-list profile-custom-list">
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Hozirgi bilm daraja</span>
                              <div className="row-result">
                                {userdata?.user?.experience
                                  ? userdata?.user?.experience
                                  : "Kiritilmagan"}
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>O'rganilayotgan fan</span>
                              <div className="row-result">Mathematics</div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Maqsad qilingan daraja</span>
                              <div className="row-result">Yuqori</div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Ajratilgan vaqt</span>
                              <div className="row-result">5-oy</div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /Personal Details */}
              </div>
              <div className="card">
                <div className="card-body custom-border-card ">
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
                <div className="card-body custom-border-card">
                  <div className="py-3">
                    <h4 className="widget-title">O'qituvchim</h4>
                    <table className="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>O'qituvchi ismi</th>
                          <th>Dars sanasi</th>
                          <th className="text-center">Dars vaqti</th>
                          {/* <th className="text-center">Harakat</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link
                                to="/app/Mentee/booking"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src={USER_2}
                                  alt="User Image"
                                />
                              </Link>
                              <Link to="/app/Mentee/booking">
                                Tyrone Roberts
                                <span>tyroneroberts@adobe.com</span>
                              </Link>
                            </h2>
                          </td>
                          <td>08 April 2020</td>
                          <td className="text-center">
                            <span className="pending">9:00 AM - 10:00 AM</span>
                          </td>
                          {/* <td className="text-center">
                                <Link
                                  to="/app/Mentee/mentor-profile"
                                  className="btn btn-sm bg-info-light"
                                >
                                  <i className="far fa-eye" /> View
                                </Link>
                              </td> */}
                        </tr>
                      </tbody>
                    </table>{" "}
                  </div>
                </div>
              </div>
            </div>

            {/* /Mentor Details Tab */}
          </div>
        </div>
      </div>
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

export default MenteeProfile;
