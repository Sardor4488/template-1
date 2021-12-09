import React, { useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { USER } from "../constant/imagepath_home";
import { useSelector } from "react-redux";
import AppLogo from "../constant/Logo.png";
import { ClearData } from "../redux/Actions";
import axios from "axios";
const Header = (props) => {
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  useEffect(() => {
    $(".main-nav a").on("click", function (e) {
      if ($(this).parent().hasClass("has-submenu")) {
        e.preventDefault();
      }
      if (!$(this).hasClass("submenu")) {
        $("ul", $(this).parents("ul:first")).slideUp(350);
        $("a", $(this).parents("ul:first")).removeClass("submenu");
        $(this).next("ul").slideDown(350);
        $(this).addClass("submenu");
      } else if ($(this).hasClass("submenu")) {
        $(this).removeClass("submenu");
        $(this).next("ul").slideUp(350);
      }
    });

    $(document).on("click", "#menu_close", function () {
      $("html").removeClass("menu-opened");
      $(".sidebar-overlay").removeClass("opened");
      $("main-wrapper").removeClass("slide-nav");
    });
  }, []);

  const logout = () => {
    axios
      .post("logout", token)
      .then((res) => {
        if (res.data.success) {
          ClearData();
          localStorage.clear();
        } else {
          alert("Texnik hatolik yuz berdi.");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Texnik hatolik yuz berdi.");
      });
  };

  const userdata = useSelector((state) => state?.Reducer.userdata);
  const { location } = props;
  let pathname = location.pathname;

  return (
    <header className="header">
      <div className="header-fixed">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <a id="mobile_btn" href="">
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </a>
            <Link to="/app/home" className="navbar-brand logo">
              <img
                src={AppLogo}
                className="img-fluid ms-4 logotipSize"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="/app/home" className="menu-logo">
                <img src={AppLogo} className="img-fluid" alt="Logo" />
              </Link>
              <a id="menu_close" className="menu-close" href="#">
                <i className="fas fa-times" />
              </a>
            </div>
            <ul className="main-nav">
              <li className={pathname.includes("home") ? "active" : ""}>
                <Link to="/app/home">Asosiy</Link>
              </li>

              <li className={pathname.includes("blog-grid") ? "active" : ""}>
                <Link to="/app/about">Biz haqimizda</Link>
              </li>
              <li className={pathname.includes("blog-grid") ? "active" : ""}>
                <Link to="/app/mentor/reviews-all">Fikrlar</Link>
              </li>
              <li
                className={
                  pathname.includes("blog-list") ||
                  pathname.includes("blog-grid") ||
                  pathname.includes("blog-details")
                    ? "has-submenu active"
                    : "has-submenu"
                }
              >
                <a href="">
                  Blog <i className="fas fa-chevron-down" />
                </a>
                <ul className="submenu">
                  <li
                    className={pathname.includes("blog-list") ? "active" : ""}
                  >
                    <Link to="/app/Blog/blog-list">Blog List</Link>
                  </li>
                  <li
                    className={pathname.includes("blog-grid") ? "active" : ""}
                  >
                    <Link to="/app/Blog/blog-grid">Blog Grid</Link>
                  </li>
                  <li
                    className={
                      pathname.includes("blog-details") ? "active" : ""
                    }
                  >
                    <Link to="/app/Blog/blog-details">Blog Details</Link>
                  </li>
                </ul>
              </li>
              <li className="login-link">
                <Link to="/login">Login / Signup</Link>
              </li>
            </ul>
          </div>
          {userdata ? (
            <ul className="nav header-navbar-rht">
              {/* User Menu */}
              <li className="nav-item dropdown has-arrow logged-item">
                <a
                  href="#"
                  className="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                  <span className="user-img">
                    <img
                      className="rounded-circle"
                      src={USER}
                      width={31}
                      alt="Darren Elder"
                    />
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div className="user-header">
                    <div className="avatar avatar-sm">
                      <img
                        src={USER}
                        alt="User Image"
                        className="avatar-img rounded-circle"
                      />
                    </div>
                    <div className="user-text">
                      <h6>
                        {userdata?.first_name} {userdata?.last_name}
                      </h6>
                      <p className="text-muted mb-0">{userdata?.role}</p>
                    </div>
                  </div>
                  <Link className="dropdown-item" to={`/app/${role}/dashboard`}>
                    Dashboard
                  </Link>
                  <Link
                    className="dropdown-item"
                    to={`/app/${role}/profile-settings`}
                  >
                    Profile Settings
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/app/home"
                    onClick={logout}
                  >
                    Logout
                  </Link>
                </div>
              </li>
              {/* /User Menu */}
            </ul>
          ) : (
            <ul className="nav header-navbar-rht">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-login" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default withRouter(Header);
