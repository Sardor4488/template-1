import React, { useState, useEffect } from "react";
import { USER_1 } from "../../constant/imagepath_home";
import Sidebar from "./sidebar";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import { testLessons } from "../../Api/testLessons";
import { useSelector } from "react-redux";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const Bookings = () => {
  const userData = useSelector((state) => state.Reducer.userdata);
  const [studentData, setStudentData] = useState([]);
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState({
    start_time: "",
    end_time: "",
    date: "",
  });
  const modalToggle = (index) => {
    setValue({
      ...value,
      start_time: studentData[index].start_time,
      end_time: studentData[index].end_time,
      date: studentData[index].date,
    });
    setModal(true);
  };

  useEffect(() => {
    if (userData) {
      testLessons(userData.user.teacher_id, setStudentData);
    }
  }, [userData]);

  return (
    <div>
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Sinov darslarim
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Sinov darslarim</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3">
              {/* Sidebar */}
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
              {/* /Sidebar */}
            </div>
            {/* Booking summary */}
            <div className="col-md-7 col-lg-8 col-xl-9">
              <h3 className="pb-3">Sinov darslarim</h3>
              {/* Mentee List Tab */}

              <div className="tab-pane show active" id="mentee-list">
                <div className="card card-table">
                  <div className="card-body">
                    <div className="table-responsive">
                      {studentData.length > 0 ? (
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>O'quvchilar</th>
                              <th>Dars sanasi</th>
                              <th className="text-center">Dars vaqti</th>
                              <th className="text-center">Harakat</th>
                            </tr>
                          </thead>
                          {studentData?.map((value, index) => {
                            return (
                              <tbody key={index}>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/app/Mentor/studentProfile"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={`${
                                            value.image
                                              ? `https://teach-api.uz/teach-api/public/storage/${value.image}`
                                              : USER_1
                                          }`}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/app/Mentor/studentProfile">
                                        {value.last_name} {value.first_name}
                                        <span>tyroneroberts@adobe.com</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>{value.date}</td>
                                  <td className="text-center">
                                    <span className="pending">
                                      {value.start_time} - {value.end_time}
                                    </span>
                                  </td>
                                  <td className="text-center">
                                    <div className="btn-group dropleft">
                                      <button
                                        type="button"
                                        className="btn btn-sm bg-info-light"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <i
                                          className="fa fa-ellipsis-v"
                                          aria-hidden="true"
                                        ></i>
                                      </button>
                                      <div className="dropdown-menu dropdown-menu-right">
                                        <ul className="p-0 m-0">
                                          <li
                                            onClick={() => modalToggle(index)}
                                            className="mb-2 dropdown-item"
                                          >
                                            Vaqtni o'zgartirish
                                          </li>
                                          <li className="dropdown-item">
                                            O'tildi
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            );
                          })}
                        </table>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* /Mentee List Tab */}
            </div>
            {/* /Booking summary */}
          </div>
        </div>
      </div>
      <Modal isOpen={modal} toggle={() => setModal(fasle)}>
        <ModalHeader toggle={() => setModal(fasle)}>
          <div>Tahrirlash</div>
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label>Dars sanasi</label>
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Start time</label>
                  <select className="form-control">
                    <option value="06:00">06:00</option>
                    <option value="07:00">07:00</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>End time</label>
                  <select className="form-control">
                    <option value="06:00">06:00</option>
                    <option value="07:00">07:00</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Bookings;
