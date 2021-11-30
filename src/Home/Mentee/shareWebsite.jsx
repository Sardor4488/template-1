import React, { Component, useState } from "react";
// import { Helmet } from "react-helmet";

import Sidebar from "./sidebar";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import { FormGroup, Input } from "reactstrap";
import PhoneInput from "react-phone-number-input";

const Share = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
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
                    <Link to="/app/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Favourites
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Do'stimni taklif qilish</h2>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              {/* Sidebar */}
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
              {/* /Sidebar */}
            </div>
            <div className="col-12 col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                  <h4>Do'stlarim</h4>
                  <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>Ism</th>
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
        </div>
      </div>
    </div>
  );
};

export default Share;
