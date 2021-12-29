import React, { useState } from "react";
// import { Helmet } from "react-helmet";

import { USER } from "../../constant/imagepath_home";
import Sidebar from "./sidebar";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";
import { Avatar } from "antd";
import Share from "./shareWebsite";
import PhoneInput from "react-phone-number-input";
import { FormGroup } from "reactstrap";

const MenteeDashboard = () => {
  const [more, setMore] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();

  const moreInfo = () => {
    setMore(!more);
  };
  const authData = useSelector((state) => state.Reducer.author);
  return (
    <>
      <div>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/app/index">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Umumiy
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Umumiy</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3">
                {/* Sidebar */}
                <StickyBox offsetTop={20} offsetBottom={20}>
                  <Sidebar data={authData} />
                </StickyBox>
                {/* /Sidebar */}
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row">
                  <div className="col-md-12 col-lg-3 dash-board-list blue">
                    <div className="dash-widget">
                      <div className="circle-bar">
                        <div className="icon-col">
                          <i className="fas fa-calendar-check" />
                        </div>
                      </div>
                      <div className="dash-widget-info">
                        <h3>23/83</h3>
                        <h6>Hamma darslar</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-3 dash-board-list yellow">
                    <div className="dash-widget">
                      <div className="circle-bar">
                        <div className="icon-col">
                          <i className="fas fa-star" />
                        </div>
                      </div>
                      <div className="dash-widget-info">
                        <h3>3/6</h3>
                        <h6>Shu oyda o'tildi</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-3 dash-board-list pink">
                    <div className="dash-widget">
                      <div className="circle-bar">
                        <div className="icon-col">
                          <i className="fas fa-graduation-cap" />
                        </div>
                      </div>
                      <div className="dash-widget-info">
                        <h3>14</h3>
                        <h6>Qoldirilgan darslar</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-3 dash-board-list yellow">
                    <div className="dash-widget">
                      <div className="circle-bar">
                        <div className="icon-col">
                          <i className="fas fa-users" />
                        </div>
                      </div>
                      <div className="dash-widget-info">
                        <h3>3/50</h3>
                        <h6>Mening do'stlarim</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h4 className="card-title">Umumiy </h4>{" "}
                        <Link to={"app/dictionary"} className="text-info">
                          My Teacher Lug'at <i className="fas fa-arrow-right" />
                        </Link>
                      </div>
                      <div className="card-body">
                        <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="#bottom-justified-tab1"
                              data-toggle="tab"
                            >
                              O'qituvchi tanlash
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#bottom-justified-tab2"
                              data-toggle="tab"
                            >
                              {" "}
                              Do'stlarni taklif qilish
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#bottom-justified-tab3"
                              data-toggle="tab"
                            >
                              {" "}
                              My teacher lug'at
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <div
                            className="tab-pane show active"
                            id="bottom-justified-tab1"
                          >
                            {/* MAVZULAR  */}

                            <div className="  card-table">
                              <div className="card-body">
                                <div className="row m-0 p-0">
                                  <div className="  col-12  card-mentors-lg   ">
                                    {/* Mentor Widget */}

                                    <div className="mentor-widget">
                                      <div className="user-info-left">
                                        <div className="mentor-img">
                                          <Link to="/app/Mentee/booking">
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
                                              <Link to="/app/mentor/booking">
                                                Ruby Perrin
                                              </Link>
                                            </li>
                                            <li className="text-secondary">
                                              <i className="fas fa-book text-black "></i>{" "}
                                              Matematika
                                            </li>
                                            <li>
                                              <i className="fas fa-wallet text-black"></i>{" "}
                                              550 000 UZS
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
                                              <span className="text-primary">
                                                25
                                              </span>{" "}
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
                                          more
                                            ? "about_text_size_long"
                                            : "about_text_size_short"
                                        }`}
                                      >
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Soluta fugiat quae
                                        expedita error tempora qui et
                                        repellendus Soluta fugiat quae expedita
                                        error tempora qui et repellendus Soluta
                                        fugiat quae expedita error tempora qui
                                        et repellendus Soluta fugiat quae
                                        expedita error tempora qui et
                                        repellendus Soluta fugiat quae expedita
                                        error tempora qui et repellendus Soluta
                                        fugiat quae expedita error tempora qui
                                        et repellendus sapiente quasi?{" "}
                                      </div>
                                      <div
                                        className={
                                          more ? "about_message" : "d-none"
                                        }
                                      >
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
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Doloremque nobis qui voluptates
                                            autem quos libero quod a voluptas id
                                            vero.
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
                                      <p
                                        className="text-primary more m-0"
                                        onClick={moreInfo}
                                      >
                                        {more ? "Yopish" : "Batafsil"}
                                      </p>
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
                              </div>
                            </div>
                            {/* MAVZULAR  */}
                          </div>
                          <div className="tab-pane" id="bottom-justified-tab2">
                            <div>
                              <h3>Ham pul ishlang, ham bilim ulashing!</h3>
                              <p>
                                MyTeacher platformasiga andriod mobil ilova
                                orqali siz o'z yaqinlaringizni taklif qilgan
                                holda, qo'shimcha daromad olishingiz (siz
                                to'plagan pul kartangizga o'tqazib beriladi),
                                yoki yig'gan pullaringizni Myteacherda darslar
                                sotib olish uchun ishlatishingiz mumkin. Xo'sh,
                                bu qanday ishlaydi? <br /> <br />
                                <span className="py-4">
                                  1. Siz yaqin kishingizdan MyTeacher ilovasni
                                  yuklab olishlarini so'raysiz; <br />
                                  2. Ushbu bo'limda do'stingizning myteacherda
                                  ro'yxatdan o'tgan telefon raqamini kirgizasiz;{" "}
                                  <br />
                                  3. TAKLIF QILISH tugmasini bosasiz. <br />
                                  <br />{" "}
                                </span>
                                Shundan so'ng do'stingiz, o'z telefonidagi
                                MyTeacher ilovasi orqali kelgan taklifnomani
                                qabul qiladi va sizning hisobingizga 1000 so'm
                                yoziladi. Siz o'z ishlab topgan pullaringizni
                                50ming so'mga yetganda kartangizga yechib
                                olishingiz, uni jamg'arishingiz, yoki bo'lmasa
                                MyTeacherdan darslar sotib olish uchun
                                ishlatishingiz mumkin bo'ladi.
                              </p>
                            </div>
                            <FormGroup className="d-flex justify-content-center align-items-center">
                              <PhoneInput
                                international
                                defaultCountry="UZ"
                                value={phoneNumber}
                                onChange={setPhoneNumber}
                              />

                              <button
                                type="submit"
                                className="btn ms-2 share-friend-button btn-primary"
                              >
                                Yuborish
                              </button>
                            </FormGroup>
                          </div>
                          <div className="tab-pane" id="bottom-justified-tab3">
                            <textarea
                              name="transletor"
                              id="transletor"
                              className="w-100 textArea p-3"
                              cols="30"
                              rows="10"
                            ></textarea>
                            <div className="transletor-answer p-3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-12">
                    <h4 className="mb-4">Mavzular</h4>

                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
    </>
  );
};

export default MenteeDashboard;
