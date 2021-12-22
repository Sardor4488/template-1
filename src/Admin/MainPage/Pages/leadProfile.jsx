import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { AVATAR_08, AVATAR_12 } from "../../imagepath";
import { Link, useParams, useLocation } from "react-router-dom";
import Ratings from "../Main/rating";
import { getLead } from "../../Api/leadApi";
import { useSelector } from "react-redux";
import { commentLead } from "../../Api/leadApi.js";
const LeadProfile = () => {
  const location = useLocation();
  const [state, setState] = useState({ iseditmodal: false });
  const editModalClose = () => {
    setState({ iseditmodal: false });
  };
  const { lead_id } = useParams();
  const data = useSelector((state) => state.Reducer.lead_list[lead_id]);
  const [comment, setComment] = useState("");
  const [openComment, setOpenComment] = useState(false);

  const commentSubmit = (e) => {
    e.preventDefault();
    commentLead({ lead_id: data?.id, comment });
    setComment("");
  };

  console.log(data);

  useEffect(() => {
    getLead();
  }, [location.pathname]);

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
                    <i className="fa fa-map-marker" /> Florida, United States
                  </div>
                  <div className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
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
                          <span>Personal Details</span>
                          <a
                            className="edit-link"
                            data-toggle="modal"
                            onClick={() => setState({ iseditmodal: true })}
                            href="#edit_personal_details"
                          >
                            <i className="fa fa-edit mr-1" />
                            Edit
                          </a>
                        </h5>
                        <div className="row">
                          <p className="col-sm-2 text-muted mb-0 mb-sm-3">
                            Ismi
                          </p>

                          <p className="col-sm-10">
                            {data?.first_name} {data?.last_name}
                          </p>
                        </div>
                        <div className="row">
                          <p className="col-sm-2 text-muted mb-0 mb-sm-3">
                            Tug'ilgan sanasi
                          </p>
                          <p className="col-sm-10">24 Jul 1983</p>
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
                          <p className="col-sm-10">+99899 999 99 99</p>
                        </div>
                        <div className="row">
                          <p className="col-sm-2 text-muted mb-0">Address</p>
                          <p className="col-sm-10 mb-0">
                            4663 Agriculture Lane,
                            <br />
                            Miami,
                            <br />
                            Florida - 33165,
                            <br />
                            United States.
                          </p>
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
                            placeholder="Qidiruv"
                          />

                          <button className="btn btn-primary ml-1">
                            <i className="fas fa-search"></i>
                          </button>
                        </div>

                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>Ism Familiyasi</th>
                              <th>Fanlari</th>
                              <th>Darajasi</th>
                              <th>Narxi</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/admin/mentor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={AVATAR_08}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/admin/mentor-profile">
                                    James Amen
                                  </Link>
                                </h2>
                              </td>
                              <td>Maths</td>
                              <td>
                                <Ratings rating={5} />
                              </td>
                              <td>$3200.00</td>
                            </tr>
                          </tbody>
                        </table>
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
          Personal Details
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="row form-row">
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Allen"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Davis"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label>Date of Birth</label>
                  <div className="cal-icon">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="24-07-1983"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label>Email ID</label>
                  <input
                    type="email"
                    className="form-control"
                    defaultValue="allendavis@example.com"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label>Mobile</label>
                  <input
                    type="text"
                    defaultValue="+1 202-555-0125"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-12">
                <h5 className="form-title">
                  <span>Address</span>
                </h5>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="4663 Agriculture Lane"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Miami"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label>State</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Florida"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label>Zip Code</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={22434}
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label>Country</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="United States"
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Save Changes
            </button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LeadProfile;
