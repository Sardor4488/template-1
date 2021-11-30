import React, { Component } from "react";
// import { Helmet } from "react-helmet";

import {
  USER,
  USER_1,
  USER_2,
  USER_3,
  USER_4,
  USER_5,
  USER_6,
  USER_7,
  USER_8,
  USER_9,
  USER_10,
  USER_11,
} from "../../constant/imagepath_home";
import Sidebar from "./sidebar";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";

class Favorites extends Component {
  render() {
    return (
      <div>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-8 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/app/index">My teacher</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dars
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Dars</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                {/* Sidebar */}
                <StickyBox offsetTop={20} offsetBottom={20}>
                  <Sidebar />
                </StickyBox>
                {/* /Sidebar */}
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Darslar bo'limi</h4>
                  </div>
                  <div className="card-body">
                    <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          href="#bottom-justified-tab1"
                          data-toggle="tab"
                        >
                          Sinov darslari
                        </a>
                      </li>
                      <li className="nav-item d-flex justify-content-center align-items-center">
                        <a
                          className="nav-link"
                          href="#bottom-justified-tab2"
                          data-toggle="tab"
                        >
                          Darslar
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#bottom-justified-tab3"
                          data-toggle="tab"
                        >
                          Uyga vazifalar
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div
                        className="tab-pane show active"
                        id="bottom-justified-tab1"
                      >
                        {/* Sinov darsi  */}

                        <div className="  card-table">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>Mavzu</th>
                                    <th>Dars kuni</th>
                                    <th className="text-center">Dars vaqti</th>
                                    <th className="text-center">Harakat</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/app/mentee/mentee-profile">
                                          Matematika
                                          <span>Arfmetik amallar</span>
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
                                        to="/app/mentee/mentee-profile"
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

                        {/* Sinov darsi  */}
                      </div>
                      <div className="tab-pane" id="bottom-justified-tab2">
                        {/* Mavzular  */}

                        <div className="  card-table">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>Mavzu</th>
                                    <th>Dars kuni</th>
                                    <th className="text-center">Dars vaqti</th>
                                    <th className="text-center">Harakat</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/app/Mentee/mentee-profile">
                                          Matematika
                                          <span>Arfmetik amallar</span>
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
                                        to="/app/Mentee/mentor-profile"
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

                        {/* Mavzular  */}
                      </div>
                      <div className="tab-pane" id="bottom-justified-tab3">
                        Tab content 3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Favorites;
