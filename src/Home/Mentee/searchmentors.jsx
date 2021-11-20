
import React, { Component } from 'react';
import {USER,USER_1,USER_2,USER_4,USER_5} from '../../constant/imagepath_home';
import StickyBox from "react-sticky-box";
import { Link, withRouter } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props)
  }
   render() {
     const{history} = this.props;
      return ( 
        <div>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-8 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/app/index">My teacher</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Qidiruv</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Qidiruv bo'yicha <span>123</span> ta o'qituvchi topildi </h2>
              </div>
              <div className="col-md-4 col-12 d-md-block d-none">
                <div className="sort-by">
                  <span className="sort-title">Saralash</span>
                  <span className="sortby-fliter">
                    <select className="select form-control">
                      <option>Tanlash</option>
                      <option className="sorting">Reyting</option>
                      <option className="sorting">Narx</option>
                      <option className="sorting">Eng yangi</option>
                      <option className="sorting">Fikrlarga ko'ra</option>
                    </select>
                  </span>
                </div>
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
                  <div className="card-header">
                    <h4 className="card-title mb-0">Qidiruv filtri</h4>
                  </div>
                  <div className="card-body">
                    <div className="filter-widget">
                    <div className="sort-by w-100">
                  <span className="sort-title">Fanni tanlang</span>
                  <span className="sortby-fliter">
                    <select className="select form-control">
                      <option>Tillar</option>
                      <option className="sorting">Aniq fanlar</option>
                      <option className="sorting">IT texnologiya</option>
                      <option className="sorting">Tabiy fanlar</option>
                      <option className="sorting">Gumanitar fanlar</option>
                    </select>
                  </span>
                </div>			
                    </div>
                    <div className="filter-widget">
                      <h4>Jinsi</h4>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" defaultChecked />
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
                      <h4>Kursni tanlang</h4>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" defaultChecked />
                          <span className="checkmark" /> Digital Marketer
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" defaultChecked />
                          <span className="checkmark" /> UNIX, Calculus, Trigonometry
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> Computer Programming
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> ASP.NET,Computer Gaming
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> HTML, Css
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> VB, VB.net
                        </label>
                      </div>
                    </div>
                    <div className="btn-search">
                      <button type="button" className="btn btn-block">Search</button>
                    </div>	
                  </div>
                </div>
                </StickyBox>
                {/* /Search Filter */}
              </div>
              <div className="col-md-12 col-lg-8 col-xl-9">
                {/* Mentor Widget */}
                <div className="card card-size">
                  <div className="card-body p-3">
                    <div className="mentor-widget">
                      <div className="user-info-left">
                        <div className="mentor-img">
                          <Link to="/app/Mentee/mentor-profile">
                            <img src={USER} className="img-fluid img-mentee " alt="User Image" />
                          </Link>
                        </div>
                        <div className="user-info-cont ps-4">
                          <h4 className="usr-name mb-3"><Link to="/app/Mentee/mentor-profile">Ruby Perrin</Link></h4>
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
                            <p className="user-location"><i className="fas fa-heart" /> <span>55</span> % O'quvchi sodiqligi </p>
                          </div>
                        </div>
                      </div>
                      <div className="user-info-right">
                        <div className="user-infos">
                          <ul>
                            <li><i className="far fa-comment py-3" /> <span>17</span> ta fikr</li>
                            <li><i className="fas fa-user-graduate py-3" /> <span className="text-primary">25</span> ta o'quvchi</li>
                            <li><i className="far fa-money-bill-alt py-3" /> <span>550 000</span> UZS <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" /> </li>
                          </ul>
                        </div>
                        <div className="mentor-booking">
                          <Link className="apt-btn" to="/app/Mentee/booking">Sinab ko'rish</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                
                {/* /Mentor Widget */}
                {/* Mentor Widget */}
               
                <div className="load-more text-center">
                  <a className="btn btn-primary btn-sm" href="">Yana ko'rish</a>	
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

export default withRouter(Search);
