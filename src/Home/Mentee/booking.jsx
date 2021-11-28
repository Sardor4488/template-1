import React, { Component } from "react";
import { USER_2 } from "../../constant/imagepath_home";
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
