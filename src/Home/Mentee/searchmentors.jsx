import React, { useEffect, useState } from "react";
import { USER } from "../../constant/imagepath_home";
import StickyBox from "react-sticky-box";
import { Link, withRouter, useParams } from "react-router-dom";
import { Avatar } from "antd";
import { getAllTeachers, getCategoryTeachers } from "../../Api/getApi";
import { useSelector } from "react-redux";
import StarRatings from "react-star-ratings";

const Search = () => {
  const [more, setMore] = useState(false);
  const { id } = useParams();
  const data = useSelector((state) => state?.Reducer.home_teacher_list);
  console.log(data);

  const moreInfo = (id) => {
    setMore(id);
  };

  useEffect(() => {
    if (id <= 5) {
      getCategoryTeachers(id);
    } else {
      getAllTeachers();
    }
  }, []);

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

            {/* comments_count: 1
course_id: 1
description: "ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
experience: "1-3"
id: 58
image: "profile/ofIKkPnHfHAwfBVBe0SY7uDKlmnfCHrUXctg2vhz.png"
language: "O'zbek"
loyalty: 0
rating: 10
star_raytings: 0
star_raytings_count: 0
student_count: 0
teacher_id: 3 */}

            <div className="col-lg-9">
              <div className="row w-100 p-0 m-0">
                {data.length > 0
                  ? data.map((value, index) => {
                      return (
                        <div key={value.id} className="col-12 card-mentors-lg">
                          {/* Mentor Widget */}
                          <div className="card card-size">
                            <div className="card-body">
                              <div className="mentor-widget">
                                <div className="user-info-left">
                                  <div className="mentor-img">
                                    <Link to="/app/mentor/booking">
                                      <img
                                        src={
                                          value.image
                                            ? `https://teach-api.uz/storage/${value.image}`
                                            : USER
                                        }
                                        className="img-fluid img-mentee "
                                        alt="User Image"
                                      />
                                    </Link>

                                    <div className="rating ">
                                      <StarRatings
                                        rating={value?.star_raytings}
                                        starDimension="17px"
                                        starSpacing="2px"
                                        starRatedColor="yellow"
                                      />
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
                                          {value.first_name
                                            ? value.first_name
                                            : ""}
                                        </Link>
                                        <Link
                                          className="ms-2"
                                          to="/app/Mentee/mentor-profile"
                                        >
                                          {value.last_name
                                            ? value.last_name
                                            : ""}
                                        </Link>
                                      </li>
                                      <li className="text-secondary">
                                        <i className="fas fa-book text-black "></i>
                                        {value.course_name
                                          ? value.course_name
                                          : "Kirilmagan"}
                                      </li>
                                      <li>
                                        <i className="fas fa-wallet text-black"></i>
                                        {value.price
                                          ? value.price
                                          : "Kirilmagan"}
                                      </li>
                                      <li>
                                        <div className="rating">
                                          <StarRatings
                                            rating={value?.star_raytings}
                                            starDimension="17px"
                                            starSpacing="2px"
                                            starRatedColor="yellow"
                                          />

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
                                        <span className="text-primary">25</span>{" "}
                                        ta o'quvchi
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
                                    more == value.id
                                      ? "about_text_size_long"
                                      : "about_text_size_short"
                                  }`}
                                >
                                  {value?.description}
                                </div>
                                {value?.comments.length > 0 ? (
                                  <div
                                    className={
                                      more == value.id
                                        ? "about_message"
                                        : "d-none"
                                    }
                                  >
                                    <div className="row w-100 m-0">
                                      <div className="col-6 d-flex align-items-center p-0">
                                        <img
                                          style={{
                                            width: "20px",
                                            height: "20px",
                                            borderRadius: "50%",
                                          }}
                                          src={
                                            value?.comments[0].image
                                              ? "https://teach-api.uz/storage/" +
                                                value?.comments[0].image
                                              : USER
                                          }
                                          alt="user"
                                        />
                                        <p className="user_message_name mb-0  ms-3">
                                          {value?.comments[0].first_name}
                                          {value?.comments[0].last_name}
                                        </p>
                                      </div>
                                      <div className="col-6 text-end p-0">
                                        <p className="m-0">
                                          {value?.comments[0].created_at.slice(
                                            0,
                                            10
                                          )}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="d-block w-100 mt-3">
                                      <p className="m-0 user_message_text">
                                        {value?.comments[0].content}
                                        <br />
                                        <span className="">
                                          <Link
                                            to="/app/mentee/booking"
                                            className="more"
                                          >
                                            Barcha fikrlar
                                          </Link>
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                ) : (
                                  <div
                                    className={
                                      more == value.id
                                        ? "about_message"
                                        : "d-none"
                                    }
                                  >
                                    Fikirlar mavjud emas
                                  </div>
                                )}

                                <div
                                  className="text-primary more m-0"
                                  style={{ cursor: "pointer" }}
                                >
                                  {more == value.id ? (
                                    <p onClick={() => moreInfo(0)}>Yopish</p>
                                  ) : (
                                    <p onClick={() => moreInfo(value.id)}>
                                      Batafsil
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="mentor-booking w-100 d-flex justify-content-end">
                                <Link
                                  className="apt-btn p-1 "
                                  to="/app/mentor/booking"
                                >
                                  Band qilish
                                </Link>
                              </div>
                            </div>
                          </div>

                          {/* /Mentor Widget */}
                          {/* Mentor Widget */}
                        </div>
                      );
                    })
                  : "O'qituvchilar topilmadi!"}
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
