import React, { Component } from "react";
import { useSelector } from "react-redux";
import { withRouter, Link, useHistory } from "react-router-dom";
import { logout } from "../../Api/logout";
const Sidebar = (props) => {
  const history = useHistory();
  const userdata = useSelector((state) => state.Reducer.userdata);
  const { location } = props;
  let pathname = location.pathname;
  return (
    <div>
      <div className="profile-sidebar profile-sidebar-md-none">
        <div className="user-widget">
          {userdata?.user?.image ? (
            <img
              className="pro-avatar-image"
              src={`https://teach-api.uz/storage/${userdata?.user?.image}`}
              alt="user_image"
            />
          ) : (
            <div className="pro-avatar">
              {userdata?.user?.first_name.slice(0, 1)}
              {userdata?.user?.last_name.slice(0, 1)}
            </div>
          )}
          <div className="user-info-cont">
            <h4 className="usr-name">
              {userdata?.user?.first_name} {userdata?.user?.last_name}
            </h4>
            <p className="mentor-type"> Fan nomi</p>
          </div>
        </div>
        <div className="progress-bar-custom">
          <h6>O'zlashtirish ko'rsatgichi &gt;</h6>
          <div className="pro-progress">
            <div className="tooltip-toggle" tabIndex={0} />
            <div className="tooltip">80%</div>
          </div>
        </div>
        <div className="custom-sidebar-nav">
          <ul>
            <li>
              <Link
                to="/app/mentee/dashboard"
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
                to="/app/mentee/favourites"
                className={pathname.includes("favourites") ? "active" : ""}
              >
                <i className="fas fa-book-reader" />
                Dars{" "}
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li>
            {/* <li>
              <Link
                to="/app/menteebookings-mentee"
                className={pathname.includes("bookings-mentee") ? "active" : ""}
              >
                <i className="fas fa-clock" />
                Mavzular{" "}
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li> */}
            <li>
              <Link to="#" disabled className="disabled">
                <i className="fas fa-comments" />
                Yozishmalar{" "}
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li>
            {/* <li>
              <Link
                to="/app/mentee/favourites"
                className={pathname.includes("favourites") ? "active" : ""}
              >
                <i className="fas fa-check-square" />
                Uyga vazifa{" "}
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li> */}

            <li>
              <Link
                to="#"
                disabled
                className={pathname.includes("share-friends") ? "active" : ""}
              >
                <i className="fas fa-user-plus" />
                Do'stlarim
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                disabled
                className={pathname.includes("default") ? "active" : ""}
              >
                <i className="fas fa-check-square" />
                My teacher lug'at{" "}
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/app/mentee/invoices"
                className={pathname.includes("invoices") ? "active" : ""}
              >
                <i className="fas fa-wallet" />
                To'lovlar
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/app/mentee/mentee-profile"
                className={pathname.includes("profile-mentee") ? "active" : ""}
              >
                <i className="fas fa-user" />
                Mening profilim{" "}
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/app/mentee/profile-settings"
                className={
                  pathname.includes("profile-settings") ? "active" : ""
                }
              >
                <i className="fas fa-user-cog" />
                Sozlash{" "}
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => logout(history)}>
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
      {/* sidebar bottom  */}

      <div className="sidebar-bottom-show d-none  sidebar-bottom">
        <div className="row bg-white d-flex justufy-content-center align-items-center w-100">
          <div className="col-3 border text-center shadow bg-white py-3  ">
            <Link to="/app/index">
              {" "}
              <i className="fas fa-user" />{" "}
            </Link>
          </div>
          <div className="col-3 border text-center shadow bg-white py-3  ">
            <Link to="/app/index">
              {" "}
              <i className="fas fa-user-plus" />{" "}
            </Link>
          </div>
          <div className="col-3 border text-center shadow bg-white py-3  ">
            <Link to="/app/index">
              {" "}
              <i className="fas fa-home" />{" "}
            </Link>
          </div>
          <div className="col-3 border text-center shadow bg-white py-3  ">
            <Link to="/app/index">
              {" "}
              <i className="fas fa-home" />{" "}
            </Link>
          </div>
          {/* <div className="col-3"> <Link to="/app/index"> <i className="fas fa-home" />  </Link></div> */}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
