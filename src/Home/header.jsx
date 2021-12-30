import React, { useEffect, useState } from "react";
import { withRouter, Link, useHistory, useLocation } from "react-router-dom";
import { USER } from "../constant/imagepath_home";
import { useSelector } from "react-redux";
import AppLogo from "../constant/Logo.png";
import { logout } from "../Api/logout";
import logoWhite from "./assets/img/logo-white.svg";
import { useLayoutEffect } from "react";
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

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  const [width, height] = useWindowSize();

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
  return (
    <header
      className={` ${
        headerSettings.includes("/app/home") ? "mb-0 pb-0" : "mb-5 pb-3"
      }`}
    >
      <div className="has_menu_close " id="has_menu_close"></div>
      <div
        className={`header-fixed ${
          scrollPosition > 50 ? "bg-white shadow" : ""
        }  `}
      >
        <nav
          className={`navbar navbar-expand-lg header-nav ${
            pathname.includes("/app/home") ? "  bg-transparent " : ""
          }`}
        >
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
              <li className={pathname.includes("/app/home") ? "active" : ""}>
                <Link
                  id="menu_close"
                  to="/app/home"
                  className={`${
                    scrollPosition > 50 && width > 992
                      ? "text-dark"
                      : " text-white"
                  }  ${
                    pathname.includes("/app/home") || width <= 992
                      ? "  text-white "
                      : " text-dark"
                  }    `}
                >
                  Asosiy
                </Link>
              </li>
              <li
                className={`pathname.includes("/app/about") ? "active" : ""   `}
              >
                <Link
                  id="menu_close"
                  to="/app/about"
                  className={` ${
                    scrollPosition > 50 && width > 992
                      ? "text-dark"
                      : " text-white"
                  } ${
                    pathname.includes("/app/home") || width <= 992
                      ? "  text-white "
                      : "text-dark"
                  }`}
                >
                  Biz haqimizda
                </Link>
              </li>
              <li className={pathname.includes("blog-grid") ? "active" : ""}>
                <Link
                  id="menu_close"
                  to="/app/reviwes-all"
                  className={`${
                    scrollPosition > 50 && width > 992
                      ? "text-dark"
                      : " text-white"
                  }  ${
                    pathname.includes("/app/home") || width <= 992
                      ? "  text-white "
                      : "text-dark"
                  } `}
                >
                  Fikrlar
                </Link>
              </li>
              <li className={pathname.includes("blog-grid") ? "active" : ""}>
                <Link
                  id="menu_close"
                  to="/app/Blog/blog-grid"
                  className={` ${
                    scrollPosition > 50 && width > 992
                      ? "text-dark"
                      : " text-white"
                  }  ${
                    pathname.includes("/app/home") || width <= 992
                      ? "  text-white "
                      : "text-dark"
                  } `}
                >
                  Blog
                </Link>
              </li>

              <li className="login-link">
                <Link to="/login">Kirish </Link>
              </li>
              <li className="login-link">
                <Link to="/register">Ro'ytdan o'tish</Link>
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
                          ? `https://teach-api.uz/storage/${userdata.user.image}`
                          : USER
                      }
                      width={31}
                      alt="Darren Elder"
                    />
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div className="user-text p-2 px-3">
                    <h6>
                      {userdata?.user?.first_name} {userdata?.user?.last_name}
                    </h6>
                    <p className="text-muted mb-0">
                      {userdata?.user?.role === "mentor"
                        ? "O'qituvchi"
                        : "O'quvchi"}
                    </p>
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
                  className={`nav-link${
                    pathname.includes("/app/home")
                      ? "  text-white "
                      : " text-primary  "
                  } ${scrollPosition > 50 ? "text-primary" : " text-white"} `}
                  to="/login"
                >
                  Kirish
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-login " to="/register">
                  <span>Ro'yxatdan o'tish</span>
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
