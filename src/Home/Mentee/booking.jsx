import React, { Component } from "react";
import { USER, USER_2, USER_3 } from "../../constant/imagepath_home";
import DateRangePicker from "react-bootstrap-daterangepicker";
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:
import "bootstrap/dist/css/bootstrap.css";
// you will also need the css that comes with bootstrap-daterangepicker
import "bootstrap-daterangepicker/daterangepicker.css";
import { Link } from "react-router-dom";

class Booking extends Component {
  onChange = (date) => {
    // Day.js object
    console.log(date);

    // to normal Date object
    console.log(date.toDate());
  };
  render() {
    return (
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
                      Booking
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Booking</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="booking-user-info">
                      <Link
                        to="/app/mentor/booking"
                        className="booking-user-img"
                      >
                        <img src={USER_2} alt="User Image" />
                      </Link>
                      <div className="booking-info">
                        <h4>
                          <Link to="/app/mentor/booking">Tyrone Roberts</Link>
                        </h4>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">
                            35
                          </span>
                        </div>
                        <p className="text-muted mb-0">
                          <i className="fas fa-map-marker-alt" /> Newyork, USA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Submit Section */}
                <div className="card">
                <div className="card-body custom-border-card pb-0">
                  {/* About Details */}
                  <div className="widget about-widget custom-about mb-0">
                    <h4 className="widget-title">O'qituvchi haqida ma'lumot</h4>
                    <hr />
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                    </p>
                  </div>
                  {/* /About Details */}
                </div>
              </div>

              <div className="card" id="infonmation-mentor">
                <div className="card-body custom-border-card pb-0">
                  {/* Qualification Details */}
                  <div className="widget experience-widget mb-0">
                    <h4 className="widget-title">Ma'lumoti va malakasi</h4>
                    <hr />
                    <div className="experience-box">
                      <ul className="experience-list profile-custom-list">
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Qayerni tugatgan (o'qiyapti)</span>
                              <div className="row-result">
                                Coimbatore University
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Mutaxassisligi</span>
                              <div className="row-result">Mathematics</div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Sertifikatlari</span>
                              <div className="row-result">
                                IELTS, Topik va h.k
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Qaysi tilda dars o'tadi</span>
                              <div className="row-result">
                                Rus, ingiliz, o'zbek
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Pedagogik tajribasi</span>
                              <div className="row-result">
                                <span>1</span> yil
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Qualification Details */}
                </div>
              </div>
              <div className="card" id="location">
                <div className="card-body pb-1 custom-border-card">
                  {/* Location Details */}
                  <div className="widget awards-widget m-0">
                    <h4 className="widget-title">Manzil</h4>
                    <hr />
                    <div className="experience-box">
                      <ul className="experience-list profile-custom-list">
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Hozir qayerda yashaydi</span>
                              <div className="row-result">Toshkent.sh</div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <span>Doiiy yashash manzili</span>
                              <div className="row-result">
                                National highway road
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Location Details */}
                </div>
              </div>
               </div>
               <div id="mentor_review" className="content">
          <div className="container-fluid">
            <div className="row">
               <div className="col-md-12 col-lg-12 col-xl-12">
                 <h3 className=" mb-3"> <span>Sardor Temirov</span> o'quvchilari tomonidan bildirilgan fikrlar</h3>
                <div className="doc-review review-listing">
                  {/* Review Listing */}
                  <ul className="comments-list">
                    {/* Comment List */}
                    <li>
                      <div className="comment">
                        <img className="avatar rounded-circle" alt="User Image" src={USER} />
                        <div className="comment-body">
                          <div className="meta-data">
                            <span className="comment-author">Richard Wilson</span>
                            <span className="comment-date">Reviewed 2 Days ago</span>
                            <div className="review-count rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <p className="recommended"><i className="far fa-thumbs-up" /> I recommend the consectetur</p>
                          <p className="comment-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation.
                            Curabitur non nulla sit amet nisl tempus
                          </p>
                          <div className="comment-reply">
                            <a className="comment-btn" href="#">
                              <i className="fas fa-reply" /> Reply
                            </a>
                            <p className="recommend-btn">
                              <span>Recommend?</span>
                              <a href="#" className="like-btn">
                                <i className="far fa-thumbs-up" /> Yes
                              </a>
                              <a href="#" className="dislike-btn">
                                <i className="far fa-thumbs-down" /> No
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Comment Reply */}
                      <ul className="comments-reply">
                        {/* Comment Reply List */}
                        <li>
                          <div className="comment">
                            <img className="avatar rounded-circle" alt="User Image" src={USER} />
                            <div className="comment-body">
                              <div className="meta-data">
                                <span className="comment-author">Dr. Darren Elder</span>
                                <span className="comment-date">Reviewed 3 Days ago</span>
                              </div>
                              <p className="comment-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam.
                                Curabitur non nulla sit amet nisl tempus
                              </p>
                              <div className="comment-reply">
                                <a className="comment-btn" href="#">
                                  <i className="fas fa-reply" /> Reply
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        {/* /Comment Reply List */}
                      </ul>
                      {/* /Comment Reply */}
                    </li>                   
                  </ul>
                  {/* /Comment List */}
                </div>
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
  }
}

export default Booking;
