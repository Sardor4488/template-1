import React, { useState } from "react";
import {
  USER,
  USER_1,
  USER_2,
  USER_4,
  USER_5,
} from "../../constant/imagepath_home";
import StickyBox from "react-sticky-box";
import { Link, withRouter, useParams } from "react-router-dom";
import { Avatar } from "antd";

const Search = () => {
  const [more, setMore] = useState(false);
  const category = useParams();
  const moreInfo = () => {
    setMore(!more);
  };
  console.log(category);
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
            <div className="col-lg-3 col-xl-3">
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
            <div className="col-lg-9 col-xl-9 card-mentors-lg   ">
              {/* Mentor Widget */}
              <div className="card card-size">
                <div className="card-body">
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
                        <div className="rating ">
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
                    </div>
                    <div className="user-info-right">
                      <div className="user-infos mb-0">
                        <ul className="m-0 p-0">
                          <li className="usr-name">
                            <Link to="/app/Mentee/mentor-profile">
                              Ruby Perrin
                            </Link>
                          </li>
                          <li className="text-secondary">
                            <i className="fas fa-book text-black "></i>{" "}
                            Matematika
                          </li>
                          <li>
                            <i className="fas fa-wallet text-black"></i> 550 000
                            UZS
                          </li>
                          <li>
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
                          </li>
                        </ul>
                      </div>
                      <div className="user-infos">
                        <ul>
                          <li>
                            <i className="fas fa-comment text-black" />{" "}
                            <span>17</span> ta fikr
                          </li>
                          <li>
                            <i className="fas fa-user-graduate text-black" />{" "}
                            <span className="text-primary">25</span> ta o'quvchi
                          </li>
                          <li>
                            <i className="fas fa-heart text-black" />{" "}
                            <span>55</span> % sodiqlik
                            <i className="far fa-question-circle ps-1 text-black"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className={`pt-2  ${
                        more ? "about_text_size_long" : "about_text_size_short"
                      }`}
                    >
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Soluta fugiat quae expedita error tempora qui et
                      repellendus Soluta fugiat quae expedita error tempora qui
                      et repellendus Soluta fugiat quae expedita error tempora
                      qui et repellendus Soluta fugiat quae expedita error
                      tempora qui et repellendus Soluta fugiat quae expedita
                      error tempora qui et repellendus Soluta fugiat quae
                      expedita error tempora qui et repellendus sapiente quasi?{" "}
                    </div>
                    <div className={more ? "about_message" : "d-none"}>
                      <div className="row w-100 m-0">
                        <div className="col-6 d-flex align-items-center p-0">
                          <Avatar />
                          <p className="user_message_name mb-0  ms-3">
                            Sardor Safarov
                          </p>
                        </div>
                        <div className="col-6 text-end p-0">
                          <p className="m-0">01.10.2021</p>
                        </div>
                      </div>
                      <div className="d-block w-100 mt-3">
                        <p className="m-0 user_message_text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Doloremque nobis qui voluptates autem quos
                          libero quod a voluptas id vero.
                        </p>
                      </div>
                    </div>
                    <p className="text-primary m-0" onClick={moreInfo}>
                      {more ? "Yopish" : "Batafsil"}
                    </p>
                  </div>
                  <div className="mentor-booking w-100 d-flex justify-content-end">
                    <Link className="apt-btn p-1 " to="/app/Mentee/booking">
                      Band qilish
                    </Link>
                  </div>
                </div>
              </div>

              {/* /Mentor Widget */}
              {/* Mentor Widget */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
};

export default withRouter(Search);
