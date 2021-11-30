import React, { useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { USER } from "../constant/imagepath_home";
import { useSelector } from "react-redux";
import AppLogo from "../constant/Logo.png";
import { ClearData } from "../redux/Actions";
const Header = (props) => {
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
                <Link to="/app/home">Home</Link>
              </li>
              <li
                className={
                  pathname.includes("/mentor/dashboard") ||
                  pathname.includes("mentor/bookings") ||
                  pathname.includes("schedule-timings") ||
                  pathname.includes("/mentor/chat") ||
                  pathname.includes("invoice") ||
                  pathname.includes("reviews") ||
                  pathname.includes("/mentor/blog") ||
                  pathname.includes("/mentor/profile-settings") ||
                  pathname.includes("mentor-register") ||
                  pathname.includes("profile-mentee") ||
                  pathname.includes("mentee-list") ||
                  pathname.includes("add-blog") ||
                  pathname.includes("edit-blog")
                    ? "has-submenu active"
                    : "has-submenu"
                }
              >
                <a href="">
                  O'qituvchi <i className="fas fa-chevron-down" />
                </a>
                <ul className="submenu">
                  <li
                    className={
                      pathname.includes("/mentor/dashboard") ? "active" : ""
                    }
                  >
                    <Link to="/app/mentor/dashboard">O'qituvchi Dashboard</Link>
                  </li>
                  <li
                    className={
                      pathname.includes("mentor/bookings") ? "active" : ""
                    }
                  >
                    <Link to="/app/mentor/bookings">Bookings</Link>
                  </li>
                  <li
                    className={
                      pathname.includes("schedule-timings") ? "active" : ""
                    }
                  >
                    <Link to="/app/mentor/schedule-timings">
                      Schedule Timing
                    </Link>
                  </li>
                  <li
                    className={pathname.includes("mentee-list") ? "active" : ""}
                  >
                    <Link to="/app/mentor/mentee-list">Mentee List</Link>
                  </li>
                  <li
                    className={
                      pathname.includes("mentor-profile") ? "active" : ""
                    }
                  >
                    <Link to="/app/mentor/mentor-profile">Mentee Profile</Link>
                  </li>
                  <li
                    className={
                      pathname.includes("/mentor/blog") ||
                      pathname.includes("add-blog") ||
                      pathname.includes("edit-blog")
                        ? "has-submenu active"
                        : "has-submenu"
                    }
                  >
                    <Link to="/app/mentor/blog">Blog</Link>
                    <ul className="submenu">
                      <li
                        className={
                          pathname.includes("/mentor/blog") ? "active" : ""
                        }
                      >
                        <Link to="/app/mentor/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/app/Blog/blog-details">Blog View</Link>
                      </li>
                      <li
                        className={
                          pathname.includes("add-blog") ? "active" : ""
                        }
                      >
                        <Link to="/app/mentor/add-blog">Add Blog</Link>
                      </li>
                      <li
                        className={
                          pathname.includes("edit-blog") ? "active" : ""
                        }
                      >
                        <Link to="/app/mentor/edit-blog">Edit Blog</Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={
                      pathname.includes("/mentor/chat") ? "active" : ""
                    }
                  >
                    <Link to="/app/mentor/chat">Chat</Link>
                  </li>
                  <li className={pathname.includes("invoice") ? "active" : ""}>
                    <Link to="/app/mentor/invoices">Invoices</Link>
                  </li>
                  <li
                    className={
                      pathname.includes("/mentor/profile-settings")
                        ? "active"
                        : ""
                    }
                  >
                    <Link to="/app/mentor/profile-settings">
                      Profile Settings
                    </Link>
                  </li>
                  <li className={pathname.includes("reviews") ? "active" : ""}>
                    <Link to="/app/mentor/reviews">Reviews</Link>
                  </li>
                  <li
                    className={
                      pathname.includes("mentor-register") ? "active" : ""
                    }
                  >
                    <Link to="/app/mentor/mentor-register">
                      mentor Register
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={
                  pathname.includes("mentor-profile") ||
                  pathname.includes("checkout") ||
                  pathname.includes("booking-success") ||
                  pathname.includes("map-grid") ||
                  pathname.includes("map-list") ||
                  pathname.includes("search") ||
                  pathname.includes("bookings-mentee") ||
                  pathname.includes("dashboard-mentee") ||
                  pathname.includes("favourites") ||
                  pathname.includes("Mentee/chat-mentee") ||
                  pathname.includes("profile-settings-mentee") ||
                  pathname.includes("change-password")
                    ? "has-submenu active"
                    : "has-submenu"
                }
              >
                <a href="">
                  O'quvchi <i className="fas fa-chevron-down" />
                </a>
                <ul className="submenu">
                  <li
                    className={
                      pathname.includes("map-grid") ||
                      pathname.includes("map-list")
                        ? "has-submenu active"
                        : "has-submenu"
                    }
                  >
                    <a href="#">mentors</a>
                    <ul className="submenu">
                      <li
                        className={
                          pathname.includes("map-grid") ? "active" : ""
                        }
                      >
                        <Link to="/app/mentee/map-grid">Map Grid</Link>
                      </li>
                      <li
                        className={
                          pathname.includes("map-list") ? "active" : ""
                        }
                      >
                        <Link to="/app/mentee/map-list">Map List</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={pathname.includes("search") ? "active" : ""}>
                    <Link to="/app/mentee/search">Search mentor</Link>
                  </li>
                  <li
                    className={
                      pathname.includes("mentor-profile") ? "active" : ""
                    }
                  >
                    <Link to="/app/mentee/mentee-profile">
                      O'qituvchi Profile
                    </Link>
                  </li>
                  <li
                    className={
                      pathname.includes("bookings-mentee") ? "active" : ""
                    }
                  >
                    <Link to="/app/mentee/bookings-mentee">Bookings</Link>
                  </li>
                  <li className={pathname.includes("checkout") ? "active" : ""}>
                    <Link to="/app/mentee/checkout">Checkout</Link>
                  </li>
                  <li
                    className={
                      pathname.includes("booking-success") ? "active" : ""
                    }
                  >
                    <Link to="/app/mentee/booking-success">
                      Booking Success
                    </Link>
                  </li>
                  <li
                    className={
                      pathname.includes("dashboard-mentee") ? "active" : ""
                    }
                  >
                    <Link to="/app/mentee/dashboard">Oquvchi Dashboard</Link>
                  </li>
                  <li
                    className={pathname.includes("favourites") ? "active" : ""}
                  >
                    <Link to="/app/mentee/favourites">Favourites</Link>
                  </li>
                  <li
                    className={
                      pathname.includes("mentee/chat-mentee") ? "active" : ""
                    }
                  >
                    <Link to="/app/mentee/chat-mentee">Chat</Link>
                  </li>
                  <li
                    className={
                      pathname.includes("profile-settings") ? "active" : ""
                    }
                  >
                    <Link to="/app/mentee/profile-settings">
                      Profile Settings
                    </Link>
                  </li>
                  <li
                    className={
                      pathname.includes("change-password") ? "active" : ""
                    }
                  >
                    <Link to="/app/mentee/change-password">
                      Change Password
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={
                  pathname.includes("voice-call") ||
                  pathname.includes("video-call") ||
                  pathname.includes("components") ||
                  pathname.includes("blank-page")
                    ? "has-submenu active"
                    : "has-submenu"
                }
              >
                <a href="">
                  Pages <i className="fas fa-chevron-down" />
                </a>
                <ul className="submenu">
                  <li
                    className={pathname.includes("voice-call") ? "active" : ""}
                  >
                    <Link to="/app/Pages/voice-call">Voice Call</Link>
                  </li>
                  <li
                    className={pathname.includes("video-call") ? "active" : ""}
                  >
                    <Link to="/app/Pages/video-call">Video Call</Link>
                  </li>
                  <li>
                    <Link to="/app/mentee/search">Search mentors</Link>
                  </li>
                  <li
                    className={pathname.includes("components") ? "active" : ""}
                  >
                    <Link to="/app/Pages/components">Components</Link>
                  </li>
                  <li className="has-submenu">
                    <a href="">Invoices</a>
                    <ul className="submenu">
                      <li>
                        <Link to="/app/mentor/invoices">Invoices</Link>
                      </li>
                      <li>
                        <Link to="/app/mentor/invoice-view">Invoice View</Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={pathname.includes("blank-page") ? "active" : ""}
                  >
                    <Link to="/app/Pages/blank-page">Starter Page</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/forgot-password">Forgot Password</Link>
                  </li>
                </ul>
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
              <li>
                <a href="/admin/index" target="_blank">
                  Admin
                </a>
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
