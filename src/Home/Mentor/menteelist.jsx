import React, { Component } from "react";

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
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { myStudents } from "../../Api/teacherStudentsApi";
import { useState } from "react";
import { useSelector } from "react-redux";

const MenteeList = () => {
  const data = useSelector((state) => state.Reducer.teacher_of_students);
  const location = useLocation();

  useEffect(() => {
    myStudents();
  }, [location.pathname]);

  console.log(data);

  return (
    <div>
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    O'quvchilarim
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">O'quvchilarim</h2>
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
              <h3 className="pb-3">O'quvchilar</h3>
              {/* Mentee List Tab */}
              <div className="tab-pane show active" id="mentee-list">
                <div className="card card-table">
                  <div className="card-body">
                    <div className="table-responsive">
                      {data ? (
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>O'quvchilar</th>
                              <th>Dars sanasi</th>
                              <th className="text-center">Dars vaqti</th>
                              <th className="text-center">Harakat</th>
                            </tr>
                          </thead>
                          {data.map((v, i) => {
                            return (
                              <tbody key={i}>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to={`/app/mentor/studentProfile/${i}`}
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={
                                            v.image
                                              ? `https://teach-api.uz/teach-api/public/storage/${v.image}`
                                              : USER_1
                                          }
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link
                                        to={`/app/mentor/studentProfile/${i}`}
                                      >
                                        {v.first_name} {v.last_name}
                                        <span>{v.email}</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>{v.date}</td>
                                  <td className="text-center">
                                    <span className="pending">
                                      9:00 AM - 10:00 AM
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
                                          <li className="mb-2 dropdown-item">
                                            <Link
                                              to={`/app/mentor/studentProfile/${i}`}
                                            >
                                              Profilni ko'rish
                                            </Link>
                                          </li>
                                          <li
                                            onClick={() => modalToggle(index)}
                                            className="mb-2 dropdown-item"
                                            style={{ cursor: "pointer" }}
                                          >
                                            Vaqtni o'zgartirish
                                          </li>
                                          <li
                                            className="dropdown-item"
                                            style={{ cursor: "pointer" }}
                                          >
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
    </div>
  );
};

export default MenteeList;
