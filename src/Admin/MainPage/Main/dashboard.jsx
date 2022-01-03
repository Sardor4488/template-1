/**
 * Signin Firebase
 */

import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import {
  USER,
  USER_1,
  USER_2,
  USER_3,
  USER_4,
  AVATAR_06,
  AVATAR_07,
  AVATAR_08,
  AVATAR_12,
  AVATAR_14,
  AVATAR_17,
} from "../../imagepath";

import {
  AreaChart,
  ResponsiveContainer,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import AVATAR_05 from "../../assets/img/profiles/avatar-05.jpg";
import PROFILE_IMG from "../../assets/img/profile-img.png";
import Ratings from "./rating";
import "../index.css";
import Chart from "react-apexcharts";

const areachartdata = [
  { y: "2013", Revenue: 60 },
  { y: "2014", Revenue: 100 },
  { y: "2015", Revenue: 240 },
  { y: "2016", Revenue: 120 },
  { y: "2017", Revenue: 80 },
  { y: "2018", Revenue: 100 },
  { y: "2019", Revenue: 300 },
];
const linechartdata = [
  { y: "2015", Doctors: 100, Patients: 30 },
  { y: "2016", Doctors: 20, Patients: 60 },
  { y: "2017", Doctors: 90, Patients: 120 },
  { y: "2018", Doctors: 50, Patients: 80 },
  { y: "2019", Doctors: 120, Patients: 150 },
];
const AdminDashboard = () => {
  const barchartoptions = {
    colors: ["#009da6", "#ff9c27"],
    chart: {
      type: "bar",
      fontFamily: "Poppins, sans-serif",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };
  const barchartseries = [
    {
      name: "Received",
      type: "column",
      data: [10, 50, 450, 401, 454, 454, 874, 2578, 5645, 5454, 451, 21, 245],
    },
    {
      name: "Pending",
      type: "column",
      data: [20, 50, 450, 401, 454, 454, 874, 2578, 5645, 5454, 451, 21, 245],
    },
  ];

  const piechartoptions = {
    colors: ["#009da6", "#ff737b", "#ff9c27", "#1ec1b0"],
    chart: {
      fontFamily: "Poppins, sans-serif",
      height: 240,
      type: "donut",
    },
    labels: [
      "Instagram/Facebook",
      "Telegram",
      "Tanish orqali",
      "Google/Yandex",
    ],
    legend: { show: false },
  };
  const piechartseries = [1200, 1202, 1200, 1201];

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <div className="card">
              <div className="bg-soft-primary">
                <div className="row">
                  <div className="col-7">
                    <div className="text-primary p-3">
                      <h5 className="text-primary">Xush kelibsiz!</h5>
                      <p className="mb-3">Administrator</p>
                    </div>
                  </div>
                  <div className="align-self-end col-5">
                    <img src={PROFILE_IMG} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="pt-0 card-body">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="avatar-md profile-user mb-4">
                      <img
                        src={AVATAR_05}
                        alt=""
                        className="img-thumbnail rounded-circle img-fluid"
                      />
                    </div>
                    <div className="d-block">
                      <h5 className="text-truncate">Sarafroz</h5>
                      <p className="text-muted mb-0  text-truncate">
                        Administrator
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="pt-4">
                      <div className="row">
                        <div className="col-6">
                          <h5 className="font-size-15">12</h5>
                          <p className="text-muted mb-0">Meetings</p>
                        </div>
                        <div className="col-6">
                          <h5 className="font-size-15">$1245</h5>
                          <p className="text-muted mb-0">Daromad</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link
                          className="btn btn-primary waves-effect waves-light btn-sm"
                          to="/admin/profile"
                        >
                          Profilni ko'rish{" "}
                          <i className="mdi mdi-arrow-right ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card flex-fill">
              <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title">Mijozlar oqimi</h5>
                  <div className="dropdown">
                    <select className="form-control select">
                      <option value="weekly">Haftalik</option>
                      <option value="monthly">Oylik</option>
                      <option value="yearly">Yillik</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div>
                  {" "}
                  <Chart
                    options={piechartoptions}
                    series={piechartseries}
                    type="pie"
                  />
                </div>
                <div className="text-center text-muted">
                  <div className="row">
                    <div className="col-4">
                      <div className="mt-4">
                        <p className="mb-2 text-truncate">
                          <i className="fas fa-circle text-primary mr-1" /> R/X
                          soni
                        </p>
                        <h5>2000</h5>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="mt-4">
                        <p className="mb-2 text-truncate">
                          <i className="fas fa-circle text-warning mr-1" /> S/D
                          soni
                        </p>
                        <h5>1999</h5>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="mt-4">
                        <p className="mb-2 text-truncate">
                          <i className="fas fa-circle text-danger mr-1" /> T/Q
                          soni
                        </p>
                        <h5>2001</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12">
            <div className="row">
              <div className="col-xl-4 col-sm-6 col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="dash-widget-header">
                      <span className="dash-widget-icon text-primary bg-primary-light">
                        <i className="fas fa-user" />
                      </span>
                      <div className="dash-count">
                        <h3>168</h3>
                      </div>
                    </div>
                    <div className="dash-widget-info">
                      <h6 className="text-muted">O'quvchilar soni</h6>
                      <div className="progress progress-sm">
                        <div className="progress-bar bg-primary w-50" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6 col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="dash-widget-header">
                      <span className="dash-widget-icon text-success bg-success-light">
                        <i className="fas fa-credit-card" />
                      </span>
                      <div className="dash-count">
                        <h3>487</h3>
                      </div>
                    </div>
                    <div className="dash-widget-info">
                      <h6 className="text-muted">Sinov darslari soni</h6>
                      <div className="progress progress-sm">
                        <div className="progress-bar bg-success w-50" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6 col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="dash-widget-header">
                      <span className="dash-widget-icon text-warning bg-warning-light">
                        <i className="fas fa-star" />
                      </span>
                      <div className="dash-count">
                        <h3>485</h3>
                      </div>
                    </div>
                    <div className="dash-widget-info">
                      <h6 className="text-muted">Sotilgan darslar soni</h6>
                      <div className="progress progress-sm">
                        <div className="progress-bar bg-warning w-50" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card flex-fill">
              <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title">Sotuv analitikasi</h5>
                  <div>
                    <select id="select" className="form-select">
                      <option value="daily">Kunlik</option>
                      <option value="weekly">Haftalik</option>
                      <option value="monthly">Oylik</option>
                      <option value="yearly">Yillik</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap">
                  <div className="w-md-100 d-flex align-items-center mb-3 chart-content">
                    <div>
                      <span>Umumiy sotuv</span>
                      <p className="h3 text-primary mr-5">$1000</p>
                    </div>
                    <div>
                      <span>Kommissiya</span>
                      <p className="h3 text-success mr-5">$1000</p>
                    </div>
                    <div>
                      <span>Bonuslar</span>
                      <p className="h3 text-danger mr-5">$300</p>
                    </div>
                    <div>
                      <span>Daromad</span>
                      <p className="h3 text-dark mr-5">$700</p>
                    </div>
                  </div>
                </div>
                <div id="sales_chart">
                  {" "}
                  <Chart
                    options={barchartoptions}
                    series={barchartseries}
                    type="bar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 d-flex">
            {/* Recent Orders */}
            <div className="card card-table flex-fill">
              <div className="card-header d-flex justify-content-between align-items-center">
                <div className="admin-card">
                  <h4 className="card-title">O'qituvchilar</h4>
                </div>
                <div className="search_panel admin-card position-relative">
                  <input
                    type="text"
                    className="form-control w-100 admin-mentor-search"
                    placeholder="Qidiruv"
                  />
                  <div className="search-icon text-secondary">
                    <i className="fas fa-search"></i>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
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
                            <Link to="/admin/mentor-profile">James Amen</Link>
                          </h2>
                        </td>
                        <td>Maths</td>
                        <td>$3200.00</td>
                        <td>
                          <Ratings rating={5} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/admin/profile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={AVATAR_07}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/admin/profile">Jessica Fogarty</Link>
                          </h2>
                        </td>
                        <td>Business Maths</td>
                        <td>$3100.00</td>
                        <td>
                          <Ratings rating={5} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/admin/profile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={AVATAR_17}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/admin/profile">Jose Anderson</Link>
                          </h2>
                        </td>
                        <td>Algebra</td>
                        <td>$4000.00</td>
                        <td>
                          <Ratings rating={5} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/admin/profile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={AVATAR_06}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/admin/profile">Sofia Brient</Link>
                          </h2>
                        </td>
                        <td>Integrated Sum</td>
                        <td>$3200.00</td>
                        <td>
                          <Ratings rating={5} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/admin/profile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={AVATAR_14}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/admin/profile">Marvin Campbell</Link>
                          </h2>
                        </td>
                        <td>Flow chart</td>
                        <td>$3500.00</td>
                        <td>
                          <Ratings rating={5} />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* /Recent Orders */}
          </div>
          <div className="col-md-6 d-flex">
            {/* Feed Activity */}
            <div className="card  card-table flex-fill">
              <div className="card-header d-flex justify-content-between align-items-center">
                <div className="admin-card">
                  <h4 className="card-title">O'quvchilar</h4>
                </div>
                <div className="search_panel admin-card position-relative">
                  <input
                    type="text"
                    className="form-control w-100 admin-mentor-search"
                    placeholder="Qidiruv"
                  />
                  <div className="search-icon text-secondary">
                    <i className="fas fa-search"></i>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Ism Familiyasi</th>
                        <th>Tel.raqami</th>
                        <th>Registratsiya</th>
                        <th>To'lov</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/admin/leadProfile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={USER}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/admin/leadProfile">Temirov Doe </Link>
                          </h2>
                        </td>
                        <td>8286329170</td>
                        <td>20 Oct 2019</td>
                        <td className="text-right">$100.00</td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/admin/profile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={USER_1}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/admin/profile">Julie Pennington </Link>
                          </h2>
                        </td>
                        <td>2077299974</td>
                        <td>22 Oct</td>
                        <td className="text-right">$200.00</td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/admin/profile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={USER_2}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/admin/profile">Tyrone Roberts</Link>
                          </h2>
                        </td>
                        <td>2607247769</td>
                        <td>21 Oct 2019</td>
                        <td className="text-right">$250.00</td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/admin/profile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={USER_3}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/admin/profile">Allen Davis </Link>
                          </h2>
                        </td>
                        <td>5043686874</td>
                        <td>21 Sep 2019</td>
                        <td className="text-right">$150.00</td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/admin/profile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={USER_4}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/admin/profile">Patricia Manzi </Link>
                          </h2>
                        </td>
                        <td>9548207887</td>
                        <td>18 Sep 2019</td>
                        <td className="text-right">$350.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* /Feed Activity */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* Recent Orders */}
            <div className="card card-table">
              <div className="card-header d-flex align-items-center justify-content-between">
                <div className="admin-card w-50">
                  <h4 className="card-title">Sinov darslari</h4>
                </div>
                <div className="search_panel admin-card w-50 d-flex justify-content-end align-items-center position-relative">
                  <input
                    type="text"
                    className="form-control w-50 admin-mentor-search"
                    placeholder="Qidiruv"
                  />
                  <div className="search-icon text-secondary">
                    <i className="fas fa-search"></i>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>O'qituvchining ismi</th>
                        <th>Fan</th>
                        <th>O'quvchining ismi</th>
                        <th>Sinov dars sanasi</th>
                        <th>Status</th>
                        <th className="text-right">Amount</th>
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
                            <Link to="/admin/mentor-profile">James Amen</Link>
                          </h2>
                        </td>
                        <td>Maths</td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/admin/leadProfile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={USER}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/admin/leadProfile">Temirov Sardor </Link>
                          </h2>
                        </td>
                        <td>
                          9 Nov 2019{" "}
                          <span className="text-primary d-block">
                            11.00 AM - 11.15 AM
                          </span>
                        </td>
                        <td>
                          <div className="status-toggle">
                            <input
                              type="checkbox"
                              id="status_1"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="status_1" className="checktoggle">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td className="text-right">$200.00</td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/admin/profile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={AVATAR_07}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/admin/profile">Jessica Fogarty</Link>
                          </h2>
                        </td>
                        <td>Business Maths</td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/admin/profile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={USER_1}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/admin/profile">Julie Pennington </Link>
                          </h2>
                        </td>
                        <td>
                          5 Nov 2019{" "}
                          <span className="text-primary d-block">
                            11.00 AM - 11.35 AM
                          </span>
                        </td>
                        <td>
                          <div className="status-toggle">
                            <input
                              type="checkbox"
                              id="status_2"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="status_2" className="checktoggle">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td className="text-right">$300.00</td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/admin/profile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={AVATAR_17}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/admin/profile">Jose Anderson</Link>
                          </h2>
                        </td>
                        <td>Algebra</td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/admin/profile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={USER_2}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/admin/profile">Tyrone Roberts</Link>
                          </h2>
                        </td>
                        <td>
                          11 Nov 2019{" "}
                          <span className="text-primary d-block">
                            12.00 PM - 12.15 PM
                          </span>
                        </td>
                        <td>
                          <div className="status-toggle">
                            <input
                              type="checkbox"
                              id="status_3"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="status_3" className="checktoggle">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td className="text-right">$150.00</td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/admin/profile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={AVATAR_06}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/admin/profile">Sofia Brient</Link>
                          </h2>
                        </td>
                        <td>Integrated Sum</td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/admin/profile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={USER_3}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/admin/profile">Allen Davis </Link>
                          </h2>
                        </td>
                        <td>
                          7 Nov 2019
                          <span className="text-primary d-block">
                            1.00 PM - 1.20 PM
                          </span>
                        </td>
                        <td>
                          <div className="status-toggle">
                            <input
                              type="checkbox"
                              id="status_4"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="status_4" className="checktoggle">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td className="text-right">$150.00</td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/admin/profile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={AVATAR_14}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/admin/profile">Marvin Campbell</Link>
                          </h2>
                        </td>
                        <td>Flow chart</td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/admin/profile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={USER_4}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/admin/profile">Patricia Manzi </Link>
                          </h2>
                        </td>
                        <td>
                          15 Nov 2019{" "}
                          <span className="text-primary d-block">
                            1.00 PM - 1.15 PM
                          </span>
                        </td>
                        <td>
                          <div className="status-toggle">
                            <input
                              type="checkbox"
                              id="status_5"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="status_5" className="checktoggle">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td className="text-right">$200.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* /Recent Orders */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AdminDashboard);
