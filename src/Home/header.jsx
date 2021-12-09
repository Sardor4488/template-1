import React, { useEffect, useState } from "react";
import { withRouter, Link , useHistory} from "react-router-dom";
import { USER } from "../constant/imagepath_home";
import { useSelector } from "react-redux";
import AppLogo from "../constant/Logo.png";
import { ClearData } from "../redux/Actions";
import logoWhite from "./assets/img/logo-white.svg"
const Header = (props) => {
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
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    ClearData();
  };

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const userdata = useSelector((state) => state?.Reducer.userdata);
  console.log(userdata);
  const { location } = props;
  let pathname = location.pathname;
  const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
const headerSettings = useHistory().location.pathname;
console.log();
  return (
    <header className={` ${headerSettings.includes("/app/home") ? "mb-0 pb-0" : "mb-5 pb-3"}`}>
      <div className="has_menu_close" id="has_menu_close"></div>
      <div className={`header-fixed ${scrollPosition > 50 ? "bg-white": ""}`}>
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <a id="mobile_btn" href="">
              <span className={`bar-icon ${scrollPosition > 50 ? "text-white": " text-primary"} `}>
                <span />
                <span />
                <span />
              </span>
            </a>
            <Link to="/app/home" className="navbar-brand logo">
              <img
                src={scrollPosition > 50 ? AppLogo : logoWhite }
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
                <Link to="/app/home"  className={`${scrollPosition > 50 ? "text-dark": " text-white"}`}>Asosiy</Link>
              </li>
              <li className={pathname.includes("blog-grid") ? "active" : ""}>
                <Link to="/app/mentor/about-my-teacher" className={`${scrollPosition > 50 ? "text-dark": " text-white"}`}>Biz haqimizda</Link>
              </li>
              <li className={pathname.includes("blog-grid") ? "active" : ""}>
                <Link to="/app/mentor/reviews-all"  className={`${scrollPosition > 50 ? "text-dark": " text-white"}`}>Fikrlar</Link>
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

                <a href=""  className={`${scrollPosition > 50 ? "text-dark": " text-white"}`}>
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
                <Link to="/login">Kirish / Kirish</Link>
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
                <Link className={`nav-link ${scrollPosition > 50 ? "text-primary": " text-white"} `} to="/login">
                  Kirish
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-login " to="/register">
                <span>  A'zo bo'lish</span>
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
