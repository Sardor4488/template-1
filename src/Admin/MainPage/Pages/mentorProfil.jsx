import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { AVATAR_12 } from "../../imagepath";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { TeacherApi } from "../../Api/teacherApi";

const MentorProfile = () => {
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

  const [state, setState] = useState({
    iseditmodal: false,
  });

  console.log(data);

  const editModalClose = () => {
    setState({ iseditmodal: false });
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
                            onClick={() => this.setState({ iseditmodal: true })}
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
                        <form>
                          <div className="form-group">
                            <label>"Comment" qoldirish</label>
                            <input type="text" className="form-control" />
                          </div>
                          <button className="btn btn-primary" type="submit">
                            Saqlash
                          </button>
                        </form>
                      </div>
                      <div className="col-md-6">
                        <div className="card p-3 mt-4">Ulanib bo'lmadi</div>
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

export default MentorProfile;
