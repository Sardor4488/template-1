import React, { useEffect, useState } from "react";
import { withRouter, Link, useHistory, useLocation } from "react-router-dom";
import { USER } from "../constant/imagepath_home";
import { useSelector } from "react-redux";
import AppLogo from "../constant/Logo.png";
import { logout } from "../Api/logout";
import logoWhite from "./assets/img/logo-white.svg";
const Header = (props) => {
  const role = localStorage.getItem("role");

  useEffect(() => {
    $(".main-nav a").on("click", function (e) {
      if ($(this).parent().hasClass("has-submenu")) {
        e.preventDefault();
      }
      if (!$(this).hasClass("submenu")) {
        $("ul", $(this).parents("ul:first")).slideUp(380);
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
      $("#has_menu_close").removeClass("active");
    });
    $(document).on("click", "#has_menu_close", function () {
      $("html").removeClass("menu-opened");
      $(".sidebar-overlay").removeClass("opened");
      $("main-wrapper").removeClass("slide-nav");
      $("#has_menu_close").removeClass("active");
    });
  }, []);

  const userdata = useSelector((state) => state?.Reducer.userdata);
  const location = useLocation();
  const history = useHistory();
  let pathname = location.pathname;
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const headerSettings = useHistory().location.pathname;
  console.log();
  return (
    <header
      className={` ${ headerSettings.includes("/app/home") ? "mb-0 pb-0" : "mb-5 pb-3"}`}
    >
      <div className="has_menu_close " id="has_menu_close"></div>
      <div
        className={`header-fixed ${ scrollPosition > 50 ? "bg-white shadow" : ""}  `}
      >
        <nav className={`navbar navbar-expand-lg header-nav ${pathname.includes("/app/home") ? "  bg-transparent " : ""}`}>
          <div className="navbar-header">
            <a id="mobile_btn" href="">
              <span
                className={`bar-icon ${
                  scrollPosition > 50 ? "text-white" : " text-primary"
                }`}
              >
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
              <li className={pathname.includes("/app/home") ? "active" : "" }>
                <Link
                  to="/app/home"
                  className={`  ${pathname.includes("/app/home") ? "  text-white " : " text-dark"}  ${scrollPosition > 50 ? "text-dark" : " text-white"  }`}
                >
                  Asosiy
                </Link>
              </li>
              <li className={`pathname.includes("/app/about") ? "active" : ""   `}>
                <Link
                  to="/app/about"
                  className={` ${pathname.includes("/app/home") ? "  text-white " : "text-dark"} ${
                    scrollPosition > 50 ? "text-dark" : " text-white"
                  }`}
                >
                  Biz haqimizda
                </Link>
              </li>
              <li className={pathname.includes("blog-grid") ? "active" : ""}>
                <Link
                  to="/app/reviwes-all"
                  className={`  ${pathname.includes("/app/home") ? "  text-white " : "text-dark"} ${
                    scrollPosition > 50 ? "text-dark" : " text-white"
                  }`}
                >
                  Fikrlar
                </Link>
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
                <a
                  href=""
                  className={`  ${pathname.includes("/app/home") ? "  text-white " : "text-dark"} ${
                    scrollPosition > 50 ? "text-dark" : " text-white"
                  }`}
                >
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
                <Link to="/login">Kirish </Link>
              </li>
              <li className="login-link">
                <Link to="/register">A'zo bo'lish</Link>
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
                      src={
                        userdata.user.image
                          ? `https://teach-api.uz/teach-api/public/storage/${userdata.user.image}`
                          : USER
                      }
                      width={31}
                      alt="Darren Elder"
                    />
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                 
                  <Link className="dropdown-item" to={`/app/${role}/dashboard`}>
                    Dashboard
                  </Link>
                  <Link
                    className="dropdown-item"
                    to={`/app/${role}/profile-settings`}
                  >
                    Profile Settings
                  </Link>
                  <div
                    className="dropdown-item"
                    to="#"
                    onClick={() => logout(history)}
                  >
                    Logout
                  </div>
                </div>
              </li>
              {/* /User Menu */}
            </ul>
          ) : (
            <ul className="nav header-navbar-rht">
              <li className="nav-item">
                <Link
                  className={`nav-link${pathname.includes("/app/home") ? "  text-white " : " text-primary  "} ${
                    scrollPosition > 50 ? "text-primary" : " text-white"
                  } `}
                  to="/login"
                >
                  Kirish
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-login " to="/register">
                  <span> A'zo bo'lish</span>
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
