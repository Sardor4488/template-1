import React, { Component } from "react";
// import { Helmet } from "react-helmet";
import {
  USER_1,
  USER_2,
  USER_3,
  USER_4,
  USER_5,
  USER_6,
  USER_7,
} from "../../constant/imagepath_home";
import Sidebar from "./sidebar";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import { testLessons } from "../../Api/testLessons";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Bookings = () => {
  const userData = useSelector((state) => state.Reducer.userdata);

  useEffect(() => {
    if (userData) {
      testLessons(userData.user.teacher_id);
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
                      <table className="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>O'quvchilar</th>
                            <th>Dars sanasi</th>
                            <th className="text-center">Dars vaqti</th>
                            <th className="text-center">Harakat</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <Link
                                  to="/app/Mentor/studentProfile"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src={USER_2}
                                    alt="User Image"
                                  />
                                </Link>
                                <Link to="/app/Mentor/studentProfile">
                                  Tyrone Roberts
                                  <span>tyroneroberts@adobe.com</span>
                                </Link>
                              </h2>
                            </td>
                            <td>08 April 2020</td>
                            <td className="text-center">
                              <span className="pending">
                                9:00 AM - 10:00 AM
                              </span>
                            </td>
                            <td className="text-center">
                              <Link
                                to="/app/Mentor/studentProfile"
                                className="btn btn-sm bg-info-light"
                              >
                                <i className="far fa-eye" /> View
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
    </div>
  );
};

export default Bookings;
