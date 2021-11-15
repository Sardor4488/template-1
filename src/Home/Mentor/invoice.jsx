
import React, { Component } from 'react';
import Sidebar from "./sidebar"
import {USER,USER_1,USER_2,USER_3,USER_4,USER_5,USER_6,USER_7,USER_8} from '../../constant/imagepath_home';
import StickyBox from "react-sticky-box";
import { Link } from 'react-router-dom';

class Invoices extends Component {
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
                    <li className="breadcrumb-item"><Link to="/app/index">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">To'lovlar</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">To'lovlar</h2>
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
                <Sidebar/></StickyBox>
                {/* /Sidebar */}
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="card card-table">
                  <div className="card-body">
                    {/* Invoice Table */}
                    <div className="table-responsive">
                      <table className="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>To'lov cheki</th>
                            <th>O'quvchi</th>
                            <th>To'lov</th>
                            <th> Vaqt</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <Link to="/app/Mentor/invoice-view">#INV-0010</Link>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                <Link to="/app/Mentor/studentProfile" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={USER_2} alt="User Image" />
                                </Link>
                                <Link to="/app/Mentor/studentProfile">Tyrone Roberts <span>16</span></Link>
                              </h2>
                            </td>
                            <td>$450</td>
                            <td>14 Nov 2019</td>
                            <td className="text-right">
                              <div className="table-action">
                                <Link to="/app/Mentor/invoice-view" className="btn btn-sm bg-info-light mr-1">
                                  <i className="far fa-eye" /> View
                                </Link>
                                <a href="" className="btn btn-sm bg-primary-light">
                                  <i className="fas fa-print" /> Print
                                </a>
                              </div>
                            </td>
                          </tr>
                          
                        </tbody>
                      </table>
                    </div>
                    {/* /Invoice Table */}
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

export default Invoices;
