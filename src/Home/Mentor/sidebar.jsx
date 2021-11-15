import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    const { location } = this.props;
    let pathname = location.pathname;
    return (
      <div className="profile-sidebar">
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
            <h4 className="usr-name">Jonathan Doe</h4>
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
                to="/app/Mentor/dashboard"
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
                to="/app/Mentor/bookings"
                className={pathname.includes("Mentor/bookings") ? "active" : ""}
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
                to="/app/Mentor/mentee-list"
                className={pathname.includes("mentee-list") ? "active" : ""}
              >
                <i className="fas fa-user-graduate" />
                O'quvchilarim{" "}
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/app/Mentor/schedule-timings"
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
            </li>
            <li>
              <Link to="/app/Mentor/chat">
                <i className="fas fa-comments" />
                Chat{" "}
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/app/Mentor/invoices"
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
                to="/app/Mentor/blog"
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
                to="/app/Mentor/mentor-profile"
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
              <Link to="/app/Mentor/profile-settings" className={pathname.includes("profile-settings") ? "active" : ""}>
              

                <i className="fas fa-user-cog" />
                Sozlamalar{" "}
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/login">
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
    );
  }
}

export default withRouter(Sidebar);
