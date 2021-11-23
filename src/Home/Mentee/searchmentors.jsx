import React, { Component } from "react";
import {
  USER,
  USER_1,
  USER_2,
  USER_4,
  USER_5,
} from "../../constant/imagepath_home";
import StickyBox from "react-sticky-box";
import { Link, withRouter } from "react-router-dom";

const Search = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-8 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/index">My teacher</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Qidiruv
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">
                Qidiruv bo'yicha <span>123</span> ta o'qituvchi topildi{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-3">
              {/* Search Filter */}
              <StickyBox offsetTop={20} offsetBottom={20}>
                <div className="card search-filter">
                  <div className="card-header d-flex justify-content-between align-items-center ">
                    <h4 className="card-title mb-0">Filtr</h4>
                    <div className="sort-by text-end ">
                      <span className="sort-title"> </span>
                      <span className="sortby-fliter">
                        <select className="select form-control">
                          <option>Saralash</option>
                          <option className="sorting">Reyting</option>
                          <option className="sorting">Narx</option>
                          <option className="sorting">Eng yangi</option>
                          <option className="sorting">Fikrlarga ko'ra</option>
                        </select>
                      </span>
                    </div>
                  </div>
                  <div className="card-body pt-0">
                    <div className="filter-widget"></div>
                    <div className="filter-widget d-flex">
                      <div className="me-4">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="gender_type"
                            defaultChecked
                          />
                          <span className="checkmark" /> Erkak
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" />
                          <span className="checkmark" /> Ayol
                        </label>
                      </div>
                    </div>
                    <div className="filter-widget">
                      {/* SAFAROV  */}
                      <h4>Saralash</h4>
                      <div>
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="select_specialist"
                            defaultChecked
                          />
                          <span className="checkmark" /> Digital Marketer
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="select_specialist"
                            defaultChecked
                          />
                          <span className="checkmark" /> UNIX, Calculus,
                          Trigonometry
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> Computer Programming
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </StickyBox>
              {/* /Search Filter */}
            </div>
            <div className="  col-12 col-lg-8 col-xl-9 card-mentors-lg   ">
              {/* Mentor Widget */}
              <div className="card card-size">
                <div className="card-body ">
                  <div className="mentor-widget">
                    <div className="user-info-left">
                      <div className="mentor-img">
                        <Link to="/app/Mentee/mentor-profile">
                          <img
                            src={USER}
                            className="img-fluid img-mentee "
                            alt="User Image"
                          />
                        </Link>
                      </div>
                      <div className="user-info-cont ">
                        <h4 className="usr-name mb-3">
                          <Link to="/app/Mentee/mentor-profile">
                            Ruby Perrin
                          </Link>
                        </h4>
                        <p className="mentor-type mb-1">Matematika</p>
                        <p className="mb-1">
                          <span>550 000</span> UZS
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">
                            (17)
                          </span>
                        </div>
                        <div className="mentor-details"></div>
                      </div>
                    </div>
                    <div className="user-info-right">
                      <div className="user-infos">
                        <ul>
                          <li>
                            <i className="fas fa-comment pt-3" />{" "}
                            <span>17</span> ta fikr
                          </li>
                          <li>
                            <i className="fas fa-user-graduate " />{" "}
                            <span className="text-primary">25</span> ta o'quvchi
                          </li>
                          <li>
                            <i className="fas fa-heart pt-2" /> <span>55</span>{" "}
                            % sodiqlik
                            <i className="far fa-question-circle ps-1 "></i>
                          </li>
                        </ul>
                      </div>
                      <div className="mentor-booking">
                        <Link
                          className="apt-btn p-1 w-75 m-auto"
                          to="/app/Mentee/booking"
                        >
                          Band qilish
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Soluta fugiat quae expedita error tempora qui et repellendus
                    sapiente quasi?{" "}
                    <span className="text-primary">Batafsil</span>{" "}
                  </div>
                  <div className="col-12 pt-2"></div>
                </div>
              </div>

              {/* /Mentor Widget */}
              {/* Mentor Widget */}
            </div>

            {/* Mentor-md-show */}
            <div className="col-12 card-mentors-md d-none col-md-6">
              <div className="card w-100 px-3 pb-2">
                <div className="row mt-5">
                  <div className="col-6 col-lg-4">
                    <Link to="/app/Mentee/mentor-profile">
                      <img
                        src={USER}
                        className="img-fluid img-mentee "
                        alt="User Image"
                      />
                    </Link>
                    <div className="rating text-center mt-1  ">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">
                        (17)
                      </span>
                    </div>
                  </div>
                  <div className="col-6 col-lg-4 pe-0 line-height">
                    <h4 className="usr-name">
                      <Link to="/app/Mentee/mentor-profile">
                        Temirov Perrin
                      </Link>
                    </h4>
                    <p className="mentor-type mb-0">Digital Marketer </p>
                    <p className=" mb-0 line-height">
                      {" "}
                      <i className="far fa-money-bill-alt " />{" "}
                      <span>550 000</span> UZS{" "}
                      <i
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        title="Lorem Ipsum"
                      />
                    </p>
                    <span className=" line-height ">
                      <i className="fas fa-user-graduate  " />{" "}
                      <span className="text-primary">25</span> ta o'quvchi
                    </span>{" "}
                    <br />
                    <span>
                      {" "}
                      <i className="fas fa-heart pt-2" /> <span>55</span> %
                      sodiqlik
                      <i className="far fa-question-circle ps-1 "></i>
                    </span>
                    <p className="mb-2">
                      Dars tili: <span>O'zbek, rus</span>
                    </p>
                    <button className="btn btn-primary band-qilish">
                      Band qilish
                    </button>
                    <div className="rating d-none">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">
                        (17)
                      </span>
                    </div>
                    <div></div>
                  </div>
                  <div className="col-12 col-lg-4 container-mentee-mini-information">
                    {" "}
                    <ul className="ps-0 line-height d-none">
                      <li className="d-flex align-items-end d-none">
                        <i className="far fa-comment pb-1 pe-1" />{" "}
                        <span>17 </span> ta fikr
                      </li>
                      <li className="md-d-none">
                        <i className="fas fa-user-graduate py-3" />{" "}
                        <span className="text-primary">25</span> ta o'quvchi
                      </li>
                      <li className="mb-1">
                        <i className="fas fa-heart" /> <span>55</span> %
                        O'quvchi sodiqligi{" "}
                      </li>
                    </ul>
                    <ul className="ps-0 Md-Display-Flex ">
                      <li>
                        <button className="btn btn-primary band-qilish d-none">
                          Band qilish
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio natus ducimus velit veniam quis modi nostrum quisquam!
                    <Link to="">Batafsil</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
};

export default withRouter(Search);
