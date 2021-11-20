import React, { Component } from "react";
// import { Helmet } from "react-helmet";

import {
   USER,
   USER_2,
  USER_1,
} from "../../constant/imagepath_home";
import Sidebar from "./sidebar";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";

class MenteeDashboard extends Component {
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
                      <Link to="/app/index">My teacher</Link>
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
                  <Sidebar />
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
                <div className="row w-100">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h4 className="card-title">Umumiy </h4>{" "}
                         
                      </div>
                      <div className="card-body">
                        <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="#bottom-justified-tab1"
                              data-toggle="tab"
                            >
                              My teacher lug'at{" "}
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#bottom-justified-tab2"
                              data-toggle="tab"
                            >
                              {" "}
                              O'qituvchi tanlash
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#bottom-justified-tab3"
                              data-toggle="tab"
                            >
                              {" "}
                              To'lovlar
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content">
                         
                          <div className="tab-pane" id="bottom-justified-tab1">
                          <div className="row w-100">
d
                    {/* O'QITUVCHILAR */}

                          <div className="col-md-12   w-100">
                 <div className="border-bottom ">
                  <div className="card-body">
                    <div className="mentor-widget">
                      <div className="user-info-left">
                        <div className="mentor-img">
                          <Link to="/app/Mentee/mentor-profile">
                            <img src={USER} className="img-fluid" alt="User Image" />
                          </Link>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="usr-name"><Link to="/app/Mentee/mentor-profile">Ruby Perrin</Link></h4>
                          <p className="mentor-type">Digital Marketer</p>
                          <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                            <span className="d-inline-block average-rating">(17)</span>
                          </div>
                          <div className="mentor-details">
                            <p className="user-location"><i className="fas fa-map-marker-alt" /> Florida, USA</p>
                          </div>
                        </div>
                      </div>
                      <div className="user-info-right">
                        <div className="user-infos">
                          <ul>
                            <li><i className="far fa-comment" /> 17 Feedback</li>
                            <li><i className="fas fa-map-marker-alt" /> Florida, USA</li>
                            <li><i className="far fa-money-bill-alt" /> $300 - $1000 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" /> </li>
                          </ul>
                        </div>
                        <div className="mentor-booking">
                          <Link className="apt-btn" to="/app/Mentee/booking">Book Appointment</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                 <div className=" ">
                  <div className="card-body">
                    <div className="mentor-widget">
                      <div className="user-info-left">
                        <div className="mentor-img">
                          <Link to="/app/Mentee/mentor-profile">
                            <img src={USER_1} className="img-fluid" alt="User Image" />
                          </Link>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="usr-name"><Link to="/app/Mentee/mentor-profile">Darren Elder</Link></h4>
                          <p className="mentor-type">Digital Marketer</p>
                          <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                            <span className="d-inline-block average-rating">(35)</span>
                          </div>
                          <div className="mentor-details">
                            <p className="user-location"><i className="fas fa-map-marker-alt" /> Newyork, USA</p>
                          </div>
                        </div>
                      </div>
                      <div className="user-info-right">
                        <div className="user-infos">
                          <ul>
                            <li><i className="far fa-comment" /> 35 Feedback</li>
                            <li><i className="fas fa-map-marker-alt" /> Newyork, USA</li>
                            <li><i className="far fa-money-bill-alt" /> $50 - $300 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" /></li>
                          </ul>
                        </div>
                        <div className="mentor-booking">
                        <Link className="apt-btn" to="/app/Mentee/booking">Book Appointment</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                    {/* O'QITUVCHILAR */}
                
               
                <div className="load-more text-center">
                  <a className="btn btn-primary btn-sm" href="">Load More</a>	
                </div>	
              </div>
                            </div>
                          </div>

            {/* O'qituvchi tanlash */}


                                {/* My teacher tarjimon       */}
                                <div
                            className="tab-pane show active"
                            id="bottom-justified-tab2"
                          >
                             <textarea className=" w-100 my-3 myTeacher-transletor"></textarea>
                            <textarea className=" w-100 my-3 myTeacher-transletor"></textarea>
                            </div>

                                {/* My teacher tarjimon       */}

                            {/* To'lovlar */}
                          <div className="tab-pane" id="bottom-justified-tab3">
                          <div className="row align-items-center">


                          <div className="  card-table">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>Chek raqami</th>
                              <th>O'quvchi</th>
                              <th className="text-center">To'lov miqdori</th>
                              <th className="text-center">To'langan sana</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                            <td>
                              <Link to="/app/Mentee/invoice-view">
                                #INV-0010
                              </Link>
                            </td>
                            <td>
                              <h5 className="table-avatar">
                                <Link
                                  to="/app/Mentor/profile-mentee"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src={USER_2}
                                    alt="User Image"
                                  />
                                </Link>
                                <Link to="/app/Mentee/mentor-profile">
                                  Tyrone Roberts <span>16</span>
                                </Link>
                              </h5>
                            </td>
                            <td>$450</td>
                            <td>14 Nov 2019</td>
                            </tr>
                            
                            
                          </tbody>
                        </table>		
                      </div>
                    </div>
                  </div>
                </div>
                          </div>

                            {/* To'lovlar */}


                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
    );
  }
}

export default MenteeDashboard;
