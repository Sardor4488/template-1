/**
 * App Header
 */
import React, { Component } from "react";
import { withRouter, Link, useHistory } from "react-router-dom";
import { logout } from "../../Api/Logout";
import {
  USER,
  USER_1,
  USER_2,
  USER_4,
  AVATAR_12,
  AVATAR_06,
  AdminLogo,
  US_FLAG,
  DE_FLAG,
  ES_FLAG,
  FR_FLAG,
} from "../../imagepath";

const Header = (props) => {
  const { location } = props;
  const history = useHistory();
  let pathname = location.pathname;

  return (
    <div className="header bg-white">
      {/* Logo */}
      <div className="header-left">
        <a href="#" className="logo">
          <img src={AdminLogo} alt="Logo" />
        </a>
        <a href="#" className="logo logo-small">
          <img src={AdminLogo} alt="Logo" width={30} height={30} />
        </a>
      </div>
      {/* /Logo */}
      <a href={"#"} id="toggle_btn">
        {" "}
        <i className="fas fa-bars" />
      </a>
      <div className="top-nav-search">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search here"
          />
          <button className="btn" type="submit">
            <i className="feather-search" />
          </button>
        </form>
      </div>
      {/* Mobile Menu Toggle */}
      <a className="mobile_btn" id="mobile_btn">
        {" "}
        <i className="fas fa-bars" />
      </a>
      {/* /Mobile Menu Toggle */}
      {/* Header Right Menu */}
      <ul className="nav user-menu">
        {/* Flag */}
        <li className="nav-item dropdown has-arrow flag-nav mr-2">
          <a
            className="nav-link dropdown-toggle align-items-center"
            data-toggle="dropdown"
            href="#"
            role="button"
          >
            <img
              src={US_FLAG}
              alt=""
              width={24}
              height={16}
              className="lang-flag mr-1"
            />{" "}
            English
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a href={"#"} className="dropdown-item">
              <img src={US_FLAG} alt="" height={16} /> English
            </a>
            <a href={"#"} className="dropdown-item">
              <img src={FR_FLAG} alt="" height={16} /> French
            </a>
            <a href={"#"} className="dropdown-item">
              <img src={ES_FLAG} alt="" height={16} /> Spanish
            </a>
            <a href={"#"} className="dropdown-item">
              <img src={DE_FLAG} alt="" height={16} /> German
            </a>
          </div>
        </li>
        {/* /Flag */}
        {/* Fullscreen */}
        <li className="nav-item dropdown">
          <a href="#" id="btnFullscreen" className=" ">
            <i className="feather-maximize"></i>
          </a>
        </li>
        {/* /Fullscreen */}
        {/* Notifications */}
        <li className="nav-item dropdown noti-dropdown">
          <a
            href="#"
            className="dropdown-toggle nav-link"
            data-toggle="dropdown"
          >
            <i className="feather-bell"></i>
            <span className="badge badge-pill">3</span>
          </a>
          <div className="dropdown-menu notifications">
            <div className="topnav-dropdown-header">
              <span className="notification-title">Notifications</span>
              <a href={"#"} className="clear-noti">
                {" "}
                Clear All{" "}
              </a>
            </div>
            <div className="noti-content">
              <ul className="notification-list">
                <li className="notification-message">
                  <a href="#">
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src={USER}
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Jonathan Doe</span>{" "}
                          Schedule{" "}
                          <span className="noti-title">his appointment</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">4 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="#">
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src={USER_1}
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Julie Pennington</span>{" "}
                          has booked her appointment to{" "}
                          <span className="noti-title">Ruby Perrin</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">6 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="#">
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src={USER_2}
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Tyrone Roberts</span>{" "}
                          sent a amount of $210 for his{" "}
                          <span className="noti-title">appointment</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">8 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="#">
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src={USER_4}
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Patricia Manzi</span>{" "}
                          send a message{" "}
                          <span className="noti-title"> to his Mentee</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">12 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href="#">View all Notifications</a>
            </div>
          </div>
        </li>
        {/* /Notifications */}
        <li className="nav-item dropdown has-arrow main-drop ml-3">
          <a
            href="#"
            className="dropdown-toggle nav-link"
            data-toggle="dropdown"
          >
            <span className="user-img">
              <img src={AVATAR_06} alt="" /> Admin
              <span className="status online" />
            </span>
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/admin/profile">
                <i className="feather-user" /> My Profile
              </Link>
            </li>
            <li onClick={() => logout(history)} className="dropdown-item">
              <i className="feather-power" /> Logout
            </li>
          </ul>
        </li>
      </ul>
      {/* /Header Right Menu */}
    </div>
  );
};

export default withRouter(Header);
