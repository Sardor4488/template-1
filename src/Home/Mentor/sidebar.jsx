import React, { Component } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const { location } = props;
  let pathname = location.pathname;
  const data = useSelector((state) => state.Reducer.userdata);
  return (
    <>
      <div className="profile-sidebar profile-sidebar-md-none">
        <div className="user-widget">
          <div className="pro-avatar">JD</div>
          <div className="rating">
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star" />
          </div>
          <div className="user-info-cont">
            <h4 className="usr-name">
              {data?.first_name} {data?.last_name}
            </h4>
            <p className="mentor-type">English (M.A)</p>
          </div>
        </div>
        <div className="progress-bar-custom">
          <h6>Complete your profiles &gt;</h6>
          <div className="pro-progress">
            <div className="tooltip-toggle" tabIndex={0} />
            <div className="tooltip">80%</div>
          </div>
        </div>
        <div className="custom-sidebar-nav">
          <ul>
            <li>
              <Link
                to="/app/mentor/dashboard"
                className={pathname.includes("dashboard") ? "active" : ""}
              >
                <i className="fas fa-home" />
                Umumiy{" "}
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/app/mentor/bookings"
                className={
                  pathname.includes("mentor/bookings") ? "active" : ""
                }
              >
                <i className="fas fa-clock" />
                Sinov darslarim{" "}
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/app/mentor/mentee-list"
                className={pathname.includes("mentee-list") ? "active" : ""}
              >
                <i className="fas fa-user-graduate" />
                O'quvchilarim{" "}
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li>
            {/* <li>
              <Link
                to="/app/mentor/schedule-timings"
                className={
                  pathname.includes("schedule-timings") ? "active" : ""
                }
              >
                <i className="fas fa-hourglass-start" />
                Dars vaqtlarim{" "}
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li> */}
            <li>
              <Link to="/app/mentor/chat">
                <i className="fas fa-comments" />
                Chat{" "}
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/app/mentor/invoices"
                className={pathname.includes("invoices") ? "active" : ""}
              >
                <i className="fas fa-file-invoice" />
                To'lovlar{" "}
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/app/mentor/blog"
                className={pathname.includes("blog") ? "active" : ""}
              >
                <i className="fab fa-blogger-b" />
                Blog{" "}
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/app/mentor/mentor-profile"
                className={pathname.includes("mentor-profile") ? "active" : ""}
              >
                <i className="fas fa-user" />
                Mening Profilim{" "}
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/app/mentor/profile-settings"
                className={
                  pathname.includes("profile-settings") ? "active" : ""
                }
              >
                <i className="fas fa-user-cog" />
                Sozlamalar{" "}
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/app/home">
                <i className="fas fa-sign-out-alt" />
                Chiqish{" "}
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default withRouter(Sidebar);
