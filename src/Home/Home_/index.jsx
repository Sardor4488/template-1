import React, { useEffect, useLayoutEffect, useState } from "react";
//slider
import OwlCarousel from "react-owl-carousel";
import { Link, withRouter } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import icon1 from "../assets/icons/homeIcon.svg";
import icon2 from "../assets/icons/homeIcon2.svg";
import Typical from "react-typical";
import { ICON_1, USER, BLOG_01, USER_1 } from "../../constant/imagepath_home";
import Slider from "@ant-design/react-slick";
import { Avatar } from "antd";
import { dataBlog, dataTeam } from "../../Data";
import { getHomeCategory, getHomeStatistcs } from "../../Api/getApi";
import { LoadingOff, LoadingOn } from "../../redux/Actions";
import ReactTypingEffect from "react-typing-effect";

const Home = (props) => {
  const [more, setMore] = useState(false);
  const [statistcs, setStatistcs] = useState([]);
  const [categories, setCategories] = useState([
    { name: "Tillar" },
    { name: "Aniq fanlar" },
    { name: "Tabiiy fanlar" },
    { name: "IT texnalogiya" },
    { name: "Ijtimoiy fanlar" },
  ]);
  const moreInfo = () => {
    setMore(!more);
  };
  const { location } = props;

  const settingSlider = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settingSliderTeam = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    getHomeCategory(setCategories);
    getHomeStatistcs(setStatistcs);
    return () => {
      setCategories("");
      setStatistcs("");
    };
  }, [location.pathname]);

  return (
    <div>
      <section id="section-search" className="section section-search ">
        <div className="container">
          <div className="banner-wrapper m-auto text-center">
            <div className="banner-header">
              <div className="mb-5">
                <div className="animate__text">
                  <div className="inner__text me-2">Online</div>
                  <ReactTypingEffect
                    text={[
                      " Ingiliz tili ",
                      " Rus tili ",
                      "Koreys tili",
                      "Nemis tili",
                      "Xitoy tili",
                    ]}
                    speed={100}
                    eraseSpeed={100}
                    eraseDelay={1000}
                    typingDelay={1000}
                    cursorRenderer={(cursor) => (
                      <div className="  text-primary">{cursor}</div>
                    )}
                    displayTextRenderer={(text, i) => {
                      return (
                        <div className="inner__text">
                          {text.split("").map((char, i) => {
                            const key = `${i}`;
                            return (
                              <span
                                key={key}
                                className="text-primary speed fw-bold "
                                style={({ color: "" }, { transition: "0.4s" })}
                              >
                                {char}
                              </span>
                            );
                          })}
                        </div>
                      );
                    }}
                  />

                  <div className="inner__text">kurslari</div>
                </div>

                <span className="text-white mb-3">
                  Eng saralangan va sinalgan ustozni shu yerdan toping{" "}
                </span>
              </div>

              <div className="row justify-content-center home_row">
                <div className="col-6 col-sm-4 col-md-4 col-lg-4 mb-3 d-flex justify-content-end align-items-center">
                  <div className="home_content">
                    <div className="home_content_item">
                      <Link to="mentee/search/languages" className="me-1">
                        <div className="home_content_child">
                          <div className="home_svg_content">
                            <svg
                              viewBox="0 0 56 56"
                              fill="none"
                              className="home_svg"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M30.03 35.1633L24.1033 29.3067L24.1733 29.2367C28.2333 24.71 31.1267 19.5067 32.83 14H39.6667V9.33334H23.3333V4.66667H18.6667V9.33334H2.33333V13.9767H28.3967C26.8333 18.48 24.36 22.75 21 26.4833C18.83 24.08 17.0333 21.4433 15.61 18.6667H10.9433C12.6467 22.47 14.98 26.0633 17.8967 29.3067L6.02 41.02L9.33333 44.3333L21 32.6667L28.2567 39.9233L30.03 35.1633ZM43.1667 23.3333H38.5L28 51.3333H32.6667L35.28 44.3333H46.3633L49 51.3333H53.6667L43.1667 23.3333ZM37.0533 39.6667L40.8333 29.5633L44.6133 39.6667H37.0533Z"
                                fill="#1e88e5"
                              />
                            </svg>
                          </div>
                          <div className="home_text_content">
                            <p className="home_item_title">
                              {categories[0]?.name}
                            </p>
                            <p className="home_item_text"> 12 nafar ustoz</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-4 col-lg-3 mb-3 d-flex justify-content-center align-items-center">
                  <div className="home_content">
                    <div className="home_content_item">
                      <Link to="mentee/search/exact-sciences" className="me-1">
                        <div className="home_content_child">
                          <div className="home_svg_content">
                            <svg
                              width="35"
                              height="35"
                              viewBox="0 0 56 56"
                              fill="none"
                              className="home_svg"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.9408 7.3072V2.1856C17.9408 0.9904 16.9721 0 15.7627 0H14.8635C13.6541 0 12.6515 0.9904 12.6515 2.1856V7.30667C10.8196 8.26293 9.57524 10.1408 9.57524 12.3264C9.57524 13.4192 9.88593 14.4437 10.4395 15.2971L2.83424 33.4976C1.34809 33.9755 0.241547 35.3413 0.241547 36.9803C0.241547 38.1072 0.760085 39.0976 1.55539 39.7803V49.1365C1.55539 49.6485 1.7627 50.1605 2.10839 50.5365C2.38516 50.8437 2.76532 51.0144 3.17993 51.0827V55.2827C3.17993 55.6587 3.49116 56 3.90578 56C4.32039 56 4.63162 55.6928 4.63162 55.2827V51.0827C5.0369 51.0138 5.41099 50.8231 5.70316 50.5365C6.07808 50.1651 6.28945 49.6618 6.29116 49.1365V39.7461C7.08593 39.0635 7.60501 38.0731 7.60501 36.9803C7.60501 36.4 7.46662 35.8197 7.19039 35.3413L14.5183 17.9269C14.7951 17.9611 15.0369 17.9952 15.3136 17.9952H15.5899V49.0341C15.592 49.4752 15.7429 49.9028 16.0185 50.2492C16.294 50.5957 16.6786 50.8409 17.111 50.9461V55.2827C17.111 55.6587 17.4222 56 17.8369 56C18.217 56 18.5627 55.6928 18.5627 55.2827V50.9803C19.4959 50.8096 20.1872 49.9904 20.1872 49.0341V15.3317C20.7408 14.4784 21.0515 13.4197 21.0515 12.3269C21.0515 10.1413 19.7726 8.22933 17.9408 7.3072ZM14.1037 2.1856C14.1037 1.77547 14.4494 1.4 14.8985 1.4H15.7977C16.2123 1.4 16.558 1.74133 16.558 2.1856V6.7952C16.1773 6.72693 15.7627 6.65867 15.3481 6.65867C14.9335 6.65867 14.5183 6.6928 14.1037 6.7952V2.1856ZM3.97524 34.7611C4.27005 34.7601 4.56216 34.8168 4.83481 34.9279C5.10745 35.039 5.35527 35.2023 5.56403 35.4085C5.7728 35.6147 5.93841 35.8596 6.05136 36.1294C6.16431 36.3991 6.22238 36.6883 6.22224 36.9803C6.22245 37.2723 6.16444 37.5615 6.05152 37.8313C5.9386 38.1011 5.773 38.3462 5.56423 38.5524C5.35545 38.7586 5.10761 38.922 4.83493 39.0332C4.56225 39.1443 4.2701 39.201 3.97524 39.2C3.68038 39.201 3.38823 39.1443 3.11555 39.0332C2.84287 38.922 2.59503 38.7586 2.38625 38.5524C2.17748 38.3462 2.01188 38.1011 1.89896 37.8313C1.78604 37.5615 1.72802 37.2723 1.72824 36.9803C1.69378 35.7515 2.73085 34.7611 3.97524 34.7611ZM4.90839 49.136C4.90839 49.2725 4.83947 49.4432 4.73609 49.5456C4.63162 49.648 4.49378 49.7163 4.32093 49.7163H4.18255C4.11362 49.6821 4.0097 49.6821 3.94024 49.6821C3.87132 49.6821 3.76793 49.6821 3.69847 49.7168H3.56009C3.42224 49.7168 3.28385 49.648 3.17993 49.5461C3.07655 49.4432 3.04155 49.3067 3.04155 49.136V40.4976C3.34807 40.5654 3.66117 40.5997 3.97524 40.6C4.28593 40.6 4.63216 40.5659 4.90839 40.4635V49.136ZM6.22224 34.112C5.73762 33.736 5.1157 33.4629 4.45878 33.3947L11.511 16.5605C11.9932 17.0032 12.5563 17.3508 13.17 17.5845L6.22224 34.112ZM11.0269 12.3264C11.0269 9.97013 12.9627 8.05813 15.3481 8.05813C17.7335 8.05813 19.6687 9.97013 19.6687 12.3264C19.6687 14.6821 17.7329 16.5947 15.3481 16.5947C12.9627 16.5947 11.0269 14.6821 11.0269 12.3264ZM18.1481 49.6139H17.6295C17.3183 49.6139 17.0415 49.3408 17.0415 49.0336V17.7216C17.664 17.5168 18.2515 17.2432 18.77 16.8336V48.9995C18.77 49.3408 18.4588 49.6139 18.1481 49.6139Z"
                                fill="#1e88e5"
                                stroke="#1e88e5"
                              />
                              <path
                                d="M16.3167 9.66348C15.9874 9.53013 15.6354 9.46061 15.2797 9.45868C13.724 9.45868 12.4452 10.7221 12.4452 12.2587C12.4452 12.6341 12.5147 13.0096 12.6525 13.3515C12.7564 13.6245 13.0327 13.7952 13.3094 13.7952C13.4133 13.7952 13.4823 13.7611 13.5862 13.7269C13.9319 13.5904 14.1047 13.1803 13.9663 12.8048C13.8955 12.6314 13.8602 12.4457 13.8624 12.2587C13.8645 11.8874 14.0147 11.5319 14.2801 11.2697C14.5455 11.0075 14.9048 10.8598 15.2797 10.8587C15.4525 10.8587 15.6253 10.8928 15.7982 10.9611C16.1783 11.0976 16.559 10.9269 16.7319 10.5856C16.8353 10.2443 16.6624 9.83414 16.3173 9.66294L16.3167 9.66348ZM55.724 31.688C55.724 20.6587 46.8405 11.6437 35.7783 11.3024V8.26348C35.7783 7.88801 35.4677 7.54614 35.0525 7.54614H25.8577C25.6849 7.54614 25.4776 7.61441 25.3392 7.75148C25.2711 7.81824 25.2176 7.89813 25.182 7.98619C25.1463 8.07426 25.1293 8.16863 25.1319 8.26348V55.248C25.1319 55.624 25.4426 55.9653 25.8577 55.9653H35.0525C35.2253 55.9653 35.4327 55.8971 35.571 55.7605C35.7094 55.624 35.7783 55.4533 35.7783 55.2485V52.0725C46.8405 51.7312 55.724 42.7168 55.724 31.6875V31.688ZM35.7439 20.4197H35.8823C42.1737 20.4197 47.2551 25.4731 47.2551 31.6539C47.2551 37.8341 42.1392 42.888 35.8823 42.888H35.7439V20.4197ZM26.5836 54.5317V51.1515H28.934C29.3147 51.1515 29.6598 50.8437 29.6598 50.4341C29.6598 50.0587 29.3491 49.7173 28.934 49.7173H26.5836V46.4731H30.8697C31.2504 46.4731 31.5961 46.1659 31.5961 45.7563C31.5961 45.3803 31.2849 45.0389 30.8697 45.0389H26.5836V41.7952H28.934C29.3147 41.7952 29.6598 41.488 29.6598 41.0779C29.6598 40.7024 29.3491 40.3611 28.934 40.3611H26.5836V37.1173H28.934C29.3147 37.1173 29.6598 36.8096 29.6598 36.4C29.6598 36.0245 29.3491 35.6827 28.934 35.6827H26.5836V32.4389H30.8697C31.2504 32.4389 31.5961 32.1317 31.5961 31.7221C31.5961 31.3461 31.2849 31.0048 30.8697 31.0048H26.5836V27.7269H28.934C29.3147 27.7269 29.6598 27.4197 29.6598 27.0096C29.6598 26.6341 29.3491 26.2928 28.934 26.2928H26.5836V23.0827H28.934C29.3147 23.0827 29.6598 22.7755 29.6598 22.3659C29.6598 21.9904 29.3491 21.6485 28.934 21.6485H26.5836V18.4053H30.8697C31.2504 18.4053 31.5961 18.0981 31.5961 17.6885C31.5961 17.3125 31.2849 16.9712 30.8697 16.9712H26.5836V13.7275H28.934C29.3147 13.7275 29.6598 13.4203 29.6598 13.0101C29.6598 12.6347 29.3491 12.2933 28.934 12.2933H26.5836V8.70774H34.3611V54.3275L26.5836 54.5323V54.5317ZM35.7439 50.6731V44.3221H35.8823C42.934 44.3221 48.6723 38.6539 48.6723 31.6875C48.6723 24.7221 42.934 19.0539 35.8823 19.0539H35.7439V12.7024C46.0452 13.0779 54.2723 21.4437 54.2723 31.688C54.3068 41.9317 46.0452 50.3317 35.7439 50.6731Z"
                                fill="#1e88e5"
                                stroke="#1e88e5"
                              />
                            </svg>
                          </div>
                          <div className="home_text_content">
                            <p className="home_item_title">
                              {" "}
                              {categories[1]?.name}
                            </p>
                            <p className="home_item_text"> 32 nafar ustoz</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-4 col-lg-4 mb-3 d-flex justify-content-start align-items-center">
                  <div className="home_content">
                    <div className="home_content_item">
                      <Link
                        to="mentee/search/natural-sciences"
                        className="me-1"
                      >
                        <div className="home_content_child">
                          <div className="home_svg_content">
                            <svg
                              width="35"
                              height="35"
                              viewBox="0 0 56 56"
                              fill="none"
                              className="home_svg"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M30.1038 51.8771H5.8785C4.91926 51.8771 4.02181 51.6923 3.21753 51.3233C1.57809 50.5537 0.587949 49.1695 0.2785 47.2923C0.0308453 45.5998 0.432983 43.8767 1.42312 42.369L16.0575 20.7076V3.63092L14.8819 1.04631C14.7888 0.861555 14.8197 0.64617 14.9128 0.461418C15.0364 0.277145 15.2218 0.184769 15.4391 0.184769H25.9584C26.1746 0.184769 26.36 0.277145 26.4841 0.461418C26.6077 0.64617 26.6077 0.861555 26.5459 1.04631L25.3699 3.81472V20.8301L31.8673 30.1228C32.0532 30.3994 31.9909 30.7995 31.7128 30.9843C31.4343 31.1686 31.0322 31.1073 30.8463 30.8302L24.2253 21.3532C24.1635 21.2609 24.1017 21.1379 24.1017 21.0149V3.66156C24.1017 3.56918 24.1326 3.50791 24.1635 3.41554L25.03 1.41533H16.4282L17.2634 3.26142C17.2943 3.35379 17.3257 3.41554 17.3257 3.50791V20.8923C17.3257 21.0153 17.2943 21.1383 17.2325 21.2307L2.47505 43.0769C1.63988 44.3075 1.29953 45.7539 1.51581 47.1075C1.73257 48.5539 2.50595 49.6002 3.74374 50.2153C4.36216 50.4924 5.07374 50.646 5.8785 50.646H30.1038C30.4442 50.646 30.7227 50.9232 30.7227 51.2616C30.7227 51.5999 30.4442 51.8771 30.1038 51.8771Z"
                                fill="#1e88e5"
                                stroke="#1e88e5"
                                strokeWidth="0.5"
                              />
                              <path
                                d="M40.4995 55.8152C32.0532 55.8152 25.1845 49.3537 25.1845 41.4462C25.1845 34.8923 29.8562 29.1999 36.5699 27.5386V14.4308L35.3326 12.2463C35.2867 12.1501 35.2629 12.045 35.2629 11.9385C35.2629 11.8321 35.2867 11.727 35.3326 11.6308C35.4253 11.446 35.6415 11.323 35.8588 11.323L45.0785 11.2924C45.2948 11.2924 45.5115 11.4154 45.6047 11.6001C45.7283 11.7844 45.7283 12.0309 45.6047 12.2152L44.336 14.4925V27.507C51.0802 29.1688 55.7523 34.7994 55.7523 41.4151C55.7832 49.3843 48.915 55.8148 40.4995 55.8148V55.8152ZM36.9102 12.5847L37.715 13.9694C37.7768 14.0617 37.8077 14.1536 37.8077 14.2771V28.0306C37.8077 28.3078 37.6218 28.5538 37.3438 28.6155L37.2197 28.6461C30.8463 30.0921 26.4218 35.3231 26.4218 41.4462C26.4218 48.7076 32.7339 54.5847 40.4991 54.5847C48.2652 54.5847 54.5763 48.6769 54.5763 41.4462C54.5763 35.2613 50.0905 30.0002 43.6553 28.6155C43.3768 28.5538 43.16 28.3078 43.16 28.0306V14.3384C43.16 14.246 43.1909 14.123 43.2218 14.0306L44.057 12.5229L36.9102 12.5847Z"
                                fill="#1e88e5"
                                stroke="#1e88e5"
                                strokeWidth="0.5"
                              />
                              <path
                                d="M28.8975 33.6001H8.50822C8.34406 33.5992 8.18692 33.534 8.07107 33.4187C7.95522 33.3033 7.89006 33.1473 7.88981 32.9845C7.88981 32.6461 8.16788 32.3695 8.50822 32.3695H28.898C29.2384 32.3695 29.5164 32.6461 29.5164 32.9845C29.5164 33.3229 29.2379 33.6001 28.898 33.6001H28.8975ZM54.979 39.4461H26.0821C25.9179 39.4453 25.7607 39.3802 25.6448 39.265C25.5288 39.1498 25.4636 38.9938 25.4632 38.831C25.4632 38.4922 25.7417 38.2155 26.0821 38.2155H54.979C55.3194 38.2155 55.5979 38.4922 55.5979 38.831C55.5979 39.1694 55.3194 39.4461 54.979 39.4461ZM5.4765 46.2771C5.36608 46.2796 5.25773 46.2472 5.16705 46.1847C4.8885 46 4.79532 45.631 4.95029 45.3538L10.0864 36.9845C10.2717 36.7078 10.643 36.6154 10.9215 36.7691C11.2001 36.9538 11.2933 37.3233 11.1383 37.6L6.00222 45.9694C5.87863 46.1847 5.69325 46.2771 5.47601 46.2771H5.4765ZM37.158 49.5385C37.0962 49.5385 37.0653 49.5385 37.0035 49.5079C31.4344 48.0615 30.9391 41.754 30.9082 41.6923C30.8773 41.3539 31.1559 41.0461 31.4962 41.0461C31.8366 41.0155 32.146 41.2922 32.146 41.631C32.146 41.631 32.2696 43.0463 32.9503 44.5847C33.8786 46.5849 35.3327 47.8461 37.2821 48.3386C37.6219 48.431 37.8078 48.7694 37.7151 49.0771C37.6842 49.3538 37.4366 49.5385 37.158 49.5385Z"
                                fill="#1e88e5"
                                stroke="#1e88e5"
                                strokeWidth="0.5"
                              />
                            </svg>
                          </div>
                          <div className="home_text_content">
                            <p className="home_item_title">
                              {categories[2]?.name}
                            </p>
                            <p className="home_item_text"> 65 nafar ustoz</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-5 col-lg-5 d-flex mb-3 mb-sm-0 justify-content-end align-items-center">
                  <div className="home_content">
                    <div className="home_content_item">
                      <Link to="mentee/search/it" className="me-1">
                        <div className="home_content_child">
                          <div className="home_svg_content">
                            <svg
                              width="35"
                              height="35"
                              viewBox="0 0 56 56"
                              fill="none"
                              className="home_svg"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M50.31 37.3323V37.3333C50.31 39.3542 48.6745 41 46.6667 41V42V43H55V45.6667H1V43H9.33333V42V41C7.31895 41 5.66667 39.3477 5.66667 37.3333V14C5.66667 11.9856 7.31895 10.3333 9.33333 10.3333H46.6667C48.6807 10.3333 50.3328 11.9851 50.3333 13.999C50.3333 13.9993 50.3333 13.9997
                        50.3333 14L50.31 37.3323ZM9.33333 13H8.33333V14V37.3333V38.3333H9.33333H46.6667H47.6667V37.3333V14V13H46.6667H9.33333Z"
                                fill="#1e88e5"
                                stroke="#1e88e5"
                                strokeWidth="2"
                              />
                              <line
                                x1="9"
                                y1="41.5"
                                x2="47"
                                y2="41.5"
                                stroke="#1e88e5"
                                strokeWidth="3"
                              />
                            </svg>
                          </div>
                          <div className="home_text_content">
                            <p className="home_item_title">
                              {categories[3]?.name}
                            </p>
                            <p className="home_item_text"> 11 nafar ustoz</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-5 col-lg-5 d-flex justify-content-start align-items-center">
                  <div className="home_content">
                    <div className="home_content_item">
                      <Link to="mentee/search/social-sciences" className="me-1">
                        <div className="home_content_child">
                          <div className="home_svg_content">
                            <svg
                              width="35"
                              height="35"
                              viewBox="0 0 56 56"
                              fill="none"
                              className="home_svg"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M46.1576 1.62935C45.9257 1.47487 45.6545 1.44445 45.3454 1.47487L37.1102 3.14038V1.07418C37.1102 0.827486 36.9553 0.611693 36.7233 0.45721C36.4913 0.302727 36.1436 0.272313 35.8725 0.334107L1.38413 7.33507C1.1419 7.35049 0.915812 7.43843 0.750882 7.58139C0.585953 7.72436 0.494287 7.91184 0.494141 8.10652V53.3217C0.494141 53.4762 0.571269 53.6307 0.686961 53.7851C0.764692 53.9696 0.958115 54.124 1.1901 54.1858L2.3886 54.6483C4.20594 55.358 6.13896 55.6969 8.11115 55.6969C8.88424 55.6969 9.61877 55.6351 10.3919 55.5424L10.7787 55.4811C10.8173 55.4811 10.8558 55.4811 10.895 55.4502L45.8473 47.2771C46.0491 47.2325 46.2268 47.1357 46.3527 47.0018C46.4786 46.8678 46.5456 46.7042 46.5433 46.5365V2.24631C46.5047 2.03052 46.389 1.78335 46.1571 1.62935H46.1576ZM35.1765 2.09183V3.57245L10.5088 8.50721C10.4316 8.50721 10.3159 8.53811 10.2376 8.53811C8.35878 8.84845 6.41072 8.75265 4.59338 8.26052L35.1759 2.09183H35.1765ZM3.24003 53.2295C3.24003 53.2295 3.20146 53.2295 3.24003 53.2295L2.42777 52.921V49.8989L5.67559 50.4227H5.86901C6.33299 50.4227 6.71983 50.1765 6.83553 49.8058C6.86454 49.706 6.86715 49.6024 6.84319 49.5018C6.81923 49.4011 6.76922 49.3056 6.6964 49.2214C6.62357 49.1372 6.52954 49.0661 6.42035 49.0128C6.31116 48.9594 6.18924 48.925 6.06244 48.9117L2.5055 48.3565H2.42777V44.1309L5.67619 44.6552H5.86962C6.33359 44.6552 6.72044 44.4085 6.83613 44.0382C6.86524 43.9384 6.86792 43.8348 6.84401 43.7341C6.82009 43.6334 6.7701 43.5379 6.69727 43.4536C6.62443 43.3693 6.53036 43.2982 6.42113 43.2448C6.31189 43.1914 6.18991 43.157 6.06304 43.1437L2.5061 42.5885H2.42837V38.3634L5.67619 38.8877H5.86962C6.33359 38.8877 6.72044 38.641 6.83613 38.2707C6.86524 38.1709 6.86792 38.0673 6.84401 37.9666C6.82009 37.8659 6.7701 37.7703 6.69727 37.6861C6.62443 37.6018 6.53036 37.5307 6.42113 37.4773C6.31189 37.4239 6.18991 37.3895 6.06304 37.3762L2.5061 36.821H2.42837V32.5959L5.67619 33.1207H5.86962C6.33359 33.1207 6.72044 32.8735 6.83613 32.5037C6.86524 32.4039 6.86792 32.3003 6.84401 32.1996C6.82009 32.0989 6.7701 32.0033 6.69727 31.919C6.62443 31.8347 6.53036 31.7636 6.42113 31.7103C6.31189 31.6569 6.18991 31.6224 6.06304 31.6091L2.5061 31.054H2.42837V26.7053L5.67619 27.2296H5.86962C6.33359 27.2296 6.72044 26.9829 6.83613 26.6126C6.86524 26.5128 6.86792 26.4092 6.84401 26.3085C6.82009 26.2078 6.7701 26.1122 6.69727 26.0279C6.62443 25.9436 6.53036 25.8725 6.42113 25.8191C6.31189 25.7658 6.18991 25.7313 6.06304 25.718L2.5061 25.1629H2.42837V20.9069L5.67619 21.4311H5.86962C6.33359 21.4311 6.72044 21.1845 6.83613 20.8142C6.86524 20.7144 6.86792 20.6108 6.84401 20.5101C6.82009 20.4094 6.7701 20.3138 6.69727 20.2295C6.62443 20.1452 6.53036 20.0741 6.42113 20.0207C6.31189 19.9674 6.18991 19.9329 6.06304 19.9196L2.5061 19.3645H2.42837V15.108L5.67619 15.6327H5.86962C6.33359 15.6327 6.72044 15.3856 6.83613 15.0158C6.86524 14.9159 6.86792 14.8123 6.84401 14.7116C6.82009 14.6109 6.7701 14.5154 6.69727 14.4311C6.62443 14.3468 6.53036 14.2757 6.42113 14.2223C6.31189 14.1689 6.18991 14.1345 6.06304 14.1212L2.5055 13.5656H2.42777V9.24776L2.81462 9.37086C4.97963 10.1109 7.2995 10.3885 9.58081 10.1727V54.0622C7.41061 54.3142 5.19623 54.0234 3.24003 53.2295ZM44.5717 45.9505L11.5524 53.6925V9.86424L44.5723 3.23307V45.9505H44.5717Z"
                                fill="#1e88e5"
                                stroke="#1e88e5"
                              />
                              <path
                                d="M18.6461 23.1611L18.6019 23.17L18.5736 23.1812C18.57 23.1815 18.5649 23.1817 18.5578 23.1819C18.5457 23.1822 18.5325 23.1822 18.512 23.1822C18.3914 23.1822 18.2237 23.1381 18.1587 23.1034C18.0429 23.0236 17.9881 22.9364 17.9684 22.862V17.0209C17.9686 17.02 17.9723 16.9828 18.037 16.9223C18.1053 16.8584 18.214 16.7979 18.3448 16.7688L38.5753 12.6729C38.8231 12.6514 38.9865 12.6891 39.0755 12.748C39.2255 12.848 39.2392 12.9286 39.2392 12.9486V18.8397C39.2392 18.852 39.2336 18.8928 39.177 18.9497C39.1209 19.0061 39.0273 19.0626 38.9019 19.0904L18.6461 23.1611ZM19.342 17.1154L18.94 17.1958V17.6058V21.924V22.5348L19.5388 22.4142L37.9049 18.7129L38.3061 18.632V18.2227V13.9358V13.326L37.7082 13.4455L19.342 17.1154ZM27.9126 26.978C27.8677 27.0364 27.781 27.0999 27.6605 27.1301L27.6157 27.1391L19.1871 28.8355L19.1422 28.8445L19.1145 28.8556C19.1109 28.8559 19.106 28.8561 19.0992 28.8563C19.0871 28.8566 19.074 28.8566 19.0537 28.8566C18.7941 28.8566 18.6313 28.7039 18.599 28.6092L18.5958 28.5997L18.5922 28.5903L18.592 28.5899C18.5891 28.5824 18.5786 28.5556 18.6235 28.4973C18.6728 28.4332 18.7725 28.3629 18.912 28.3373L18.912 28.3374L18.9204 28.3357L27.349 26.6398L27.3594 26.6377L27.3697 26.6352C27.4984 26.6036 27.6397 26.6228 27.7557 26.6796C27.8769 26.739 27.921 26.8124 27.93 26.8435L27.9361 26.8646L27.944 26.885L27.9441 26.8854C27.947 26.8929 27.9575 26.9197 27.9126 26.978ZM32.3541 26.1739L32.3503 26.1739C32.2236 26.1749 32.1099 26.1405 32.0284 26.089C31.9474 26.0379 31.9162 25.9828 31.9068 25.9498L31.9007 25.9288L31.8929 25.9084L31.8928 25.9081C31.8897 25.9 31.8791 25.8728 31.9242 25.8142C31.9734 25.7502 32.0731 25.6798 32.2128 25.6541L32.2128 25.6541L32.2206 25.6526L37.2858 24.6349L37.2962 24.6328L37.3066 24.6303C37.4352 24.5987 37.5764 24.6179 37.6923 24.6747C37.8134 24.734 37.8578 24.8075 37.867 24.8393L37.8731 24.86L37.8808 24.8801L37.881 24.8805C37.8839 24.888 37.8944 24.9148 37.8495 24.9733C37.8001 25.0374 37.7002 25.1079 37.5606 25.1336L37.5606 25.1336L37.5528 25.1351L32.4876 26.1528L32.4427 26.1618L32.4149 26.1729C32.4113 26.1732 32.4064 26.1734 32.3996 26.1736C32.3875 26.1739 32.3744 26.1739 32.3541 26.1739ZM20.0715 32.872L20.0715 32.872L20.0795 32.8704L23.6322 32.1616C23.778 32.1355 23.9316 32.1591 24.0506 32.2152C24.1747 32.2738 24.2113 32.3406 24.2182 32.3643L24.2243 32.3854L24.2322 32.4059L24.2323 32.4063C24.2352 32.4137 24.2457 32.4405 24.2008 32.4989C24.1516 32.5629 24.0518 32.6332 23.9124 32.6588L23.9123 32.6587L23.9048 32.6602L20.3478 33.3699L20.3026 33.3789L20.2745 33.3902C20.2709 33.3904 20.2659 33.3906 20.2591 33.3908C20.2471 33.3911 20.234 33.3911 20.2137 33.3911C19.9541 33.3911 19.7913 33.2385 19.759 33.1437L19.7558 33.1343L19.7522 33.125L19.752 33.1247C19.749 33.1168 19.7385 33.0898 19.7834 33.0315C19.8326 32.9675 19.9322 32.8974 20.0715 32.872ZM28.6551 31.8286L28.6135 31.8375L28.5876 31.8477C28.584 31.848 28.579 31.8482 28.572 31.8484C28.56 31.8487 28.547 31.8487 28.5266 31.8487C28.2774 31.8487 28.1174 31.708 28.0764 31.6129C28.0681 31.5721 28.0749 31.524 28.115 31.4688C28.1631 31.4027 28.2599 31.3304 28.4054 31.2944L37.2834 29.4162C37.4284 29.3908 37.5807 29.4144 37.699 29.4702C37.8216 29.5281 37.8592 29.5943 37.8668 29.6192C37.8788 29.6623 37.8748 29.7142 37.8309 29.7745C37.7828 29.8406 37.6861 29.9129 37.5406 29.9489L28.6551 31.8286Z"
                                fill="#1e88e5"
                                stroke="#1e88e5"
                              />
                            </svg>
                          </div>
                          <div className="home_text_content">
                            <p className="home_item_title">
                              {" "}
                              {categories[4]?.name}
                            </p>
                            <p className="home_item_text"> 41 nafar ustoz</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Home Banner */}
      <section className="section how-it-works">
        <div className="container">
          <div className="section-header text-center">
            <span>Saralangan o'qituvchilar platformasi</span>
            <h2>Bu qanday ishlaydi?</h2>
            <p className="sub-title">
              Bu platforma onlayn ustoz topishni sizga maksimum qulay va sodda
              qilib beradi. Marhamat, o'zingiz sinab ko'ring va biz bilan oson
              o'rganing.
            </p>
          </div>
          <div className="row m-0 p-0">
            <div className="col-12 col-md-6 mb-3 col-lg-4">
              <div className="feature-box text-center">
                <div className="feature-header">
                  <div className="feature-icon">
                    <span className="circle" />
                    <i>
                      <img src={ICON_1} alt="" />
                    </i>
                  </div>
                  <div className="feature-cont">
                    <div className="feature-text">Ro'yxatdan o'tamiz</div>
                  </div>
                </div>
                <p className="mb-0">
                  Shaxsiy kabinet ochish uchun shunchaki ro'yxatdan o'ting - bu
                  judayam oson.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-3 col-lg-4">
              <div className="feature-box text-center">
                <div className="feature-header">
                  <div className="feature-icon">
                    <span className="circle" />
                    <i>
                      <img className="w-50 h-50" src={icon2} alt="" />
                    </i>
                  </div>
                  <div className="feature-cont">
                    <div className="feature-text">Sinab ko'ramiz</div>
                  </div>
                </div>
                <p className="mb-0">
                  O'zingizga qulay vaqtga sinov darsi belgilang va qatnashib
                  ko'ring.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-3 col-lg-4">
              <div className="feature-box text-center">
                <div className="feature-header">
                  <div className="feature-icon">
                    <span className="circle" />
                    <i>
                      <img className="w-50 h-50" src={icon1} alt="home" />
                    </i>
                  </div>
                  <div className="feature-cont">
                    <div className="feature-text">Maqsad sari olg'a</div>
                  </div>
                </div>
                <p className="mb-0">
                  Shaxsiy o'qituvchingiz bilan maqsadlaringizga oson erishing!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section popular-courses">
        <div className="container">
          <div className="section-header text-center">
            <span>Mentoring Flow</span>
            <h2>Bizning TOP o'qituvchilarimiz</h2>
            <p className="sub-title">
              Bu yerda siz o'qituvchilarni narxi, bilim darajasi, reytingi hamda
              o'quvchilari tomonidan bildirilgan fikrlarga ko'ra saralab
              olishingiz mumkin. Sinov darsi uchun "Band qilish" tugmasini
              bosing. Darslar individual tarzda o'tiladi.
            </p>
          </div>
          <div className="row m-0 p-0">
            <div className="col-xl-6 col-12  card-mentors-lg   ">
              {/* Mentor Widget */}
              <div className="card card-size">
                <div className="card-body">
                  <div className="mentor-widget">
                    <div className="user-info-left">
                      <div className="mentor-img">
                        <Link to="/app/Mentor/booking">
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
                            <Link to="/app/Mentor/booking">Ruby Perrin</Link>
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
                          <br />
                          <span className="">
                            <Link to="/app/mentee/booking" className="more">
                              Barcha fikrlar
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                    <p
                      className="text-primary more m-0"
                      style={{ cursor: "pointer" }}
                      onClick={moreInfo}
                    >
                      {more ? "Yopish" : "Batafsil"}
                    </p>
                  </div>
                  <div className="mentor-booking w-100 d-flex justify-content-end">
                    <Link className="apt-btn p-1 " to="/app/mentor/booking">
                      Band qilish
                    </Link>
                  </div>
                </div>
              </div>

              {/* /Mentor Widget */}
              {/* Mentor Widget */}
            </div>
          </div>

          <div className="load-more text-center">
            <a className="btn btn-primary btn-sm" href="">
              Yana ko'rish
            </a>
          </div>
        </div>
      </section>
      {/* Path section start */}
      <section className="section path-section">
        <div className="section-header text-center">
          <div className="container">
            <span>Choose the</span>
            <h2>O'quvchilarimiz tomonidan bildirilgan fikrlar</h2>
            <p className="sub-title">
              Online o'rganish bugungi kunda keng ommalashayotgan bo'lsada,
              ko'pchilikning unga ishonmayotganini ko'ramiz. Quyida esa bizning
              o'quvchilar online o'rgangan holda qanday natijalarga
              erishayotganlari haqida o'qishingiz mumkin.
            </p>
          </div>
        </div>

        <div className="container">
          <Slider {...settingSlider}>
            <div className="px-3">
              <div className="card card-comments-mainPage ">
                <div className="p-3 px-0  px-sm-4">
                  <div className="d-flex align-items-center py-3 ">
                    <div className="avatar me-2">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User Image"
                        src={USER_1}
                      />
                    </div>
                    <div>
                      <h5 className="mb-0 text-primary">Temirov Sardor</h5>
                      <p className="mb-0">Qashqadaryo</p>
                    </div>
                  </div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt perferendis fugiat quo est eveniet beatae dignissimos
                  aliquid obcaecati similique molestiae.
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="card card-comments-mainPage ">
                <div className="p-3 px-0  px-sm-4">
                  <div className="d-flex align-items-center py-3 ">
                    <div className="avatar me-2">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User Image"
                        src={USER_1}
                      />
                    </div>
                    <div>
                      <h5 className="mb-0 text-primary">Temirov Sardor</h5>
                      <p className="mb-0">Qashqadaryo</p>
                    </div>
                  </div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt perferendis fugiat quo est eveniet beatae dignissimos
                  aliquid obcaecati similique molestiae.
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="card card-comments-mainPage ">
                <div className="p-3 px-0  px-sm-4">
                  <div className="d-flex align-items-center py-3 ">
                    <div className="avatar me-2">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User Image"
                        src={USER_1}
                      />
                    </div>
                    <div>
                      <h5 className="mb-0 text-primary">Temirov Sardor</h5>
                      <p className="mb-0">Qashqadaryo</p>
                    </div>
                  </div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt perferendis fugiat quo est eveniet beatae dignissimos
                  aliquid obcaecati similique molestiae.
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="card card-comments-mainPage ">
                <div className="p-3 px-0  px-sm-4">
                  <div className="d-flex align-items-center py-3 ">
                    <div className="avatar me-2">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User Image"
                        src={USER_1}
                      />
                    </div>
                    <div>
                      <h5 className="mb-0 text-primary">Temirov Sardor</h5>
                      <p className="mb-0">Qashqadaryo</p>
                    </div>
                  </div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt perferendis fugiat quo est eveniet beatae dignissimos
                  aliquid obcaecati similique molestiae.
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* Path section end */}
      {/* Blog Section */}
      <section className="section section-blogs">
        <div className="container">
          {/* Section Header */}
          <div className="section-header text-center">
            <h2>Nega aynan MyTeacher?</h2>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* /Section Header */}
          <div className="row m-0 p-0 blog-grid-row">
            {dataBlog &&
              dataBlog.map((v, i) => (
                <div className="col-md-6 col-lg-4 col-xl-3" key={i}>
                  {/* Blog Post */}
                  <div className="blog grid-blog">
                    <div className="blog-image">
                      <img
                        className="img-fluid"
                        src={BLOG_01}
                        alt="Post Image"
                      />
                    </div>
                    <div className="blog-content">
                      <h3 className="blog-title">
                        <p className="mb-0">{v.title}</p>
                      </h3>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Officiis, odio. Odit aliquam omnis eveniet
                        aperiam!
                      </p>
                    </div>
                  </div>
                  {/* /Blog Post */}
                </div>
              ))}
          </div>
          <div className="view-all text-center">
            <Link to="/register" className="btn btn-primary">
              Ro'yxatdan o'tish
            </Link>
          </div>
        </div>
      </section>
      {/* /Blog Section */}
      {/* Team */}
      <section className="section section-team" id="section-team">
        <div className="container">
          {/* Section Header */}
          <div className="section-header text-center">
            <h2>Bizning Professional Jamoa!</h2>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* /Section Header */}
          <Slider {...settingSliderTeam}>
            {dataTeam &&
              dataTeam.map((v, i) => (
                <div className="px-2" key={i}>
                  {/* Blog Post */}
                  <div className="blog grid-blog">
                    <div className="blog-image">
                      <img
                        className="img-0fluid rounded-circle"
                        src={
                          "https://www.myteacher.uz/images/team/1622616581.jpg"
                        }
                        alt="Post Image"
                      />
                    </div>
                    <div className="blog-content">
                      <h3 className="blog-title">
                        <p className="mb-0">{v.title}</p>
                      </h3>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Officiis, odio. Odit aliquam omnis eveniet
                        aperiam!
                      </p>
                    </div>
                  </div>
                  {/* /Blog Post */}
                </div>
              ))}
          </Slider>
        </div>
      </section>
      {/* /Team */}
      {/* Statistics Section */}
      <section className="section statistics-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="statistics-list text-center">
                <span>{statistcs.lesson_count}</span>
                <h3> O'tilgan darslar soni</h3>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="statistics-list text-center">
                <span>{statistcs.student_count}</span>
                <h3>O'quvchilar soni</h3>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="statistics-list text-center">
                <span>{statistcs.teacher_count}</span>
                <h3>O'qituvchilar soni</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default withRouter(Home);
