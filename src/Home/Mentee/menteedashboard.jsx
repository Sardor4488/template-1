import React from "react";
// import { Helmet } from "react-helmet";

import {
    USER_5,
    USER_7,
    USER_10,
    USER_12,
    USER_13,
    USER_14,
    USER_15,
} from "../../constant/imagepath_home";
import Sidebar from "./sidebar";
import StickyBox from "react-sticky-box";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import Loading from "../components/Loading/Loading";

const MenteeDashboard = () => {
    const authData = useSelector(state => state.Reducer.author);
    const loading = useSelector(state => state.Reducer.loading);
    return (
        <>
            {
                loading ? <Loading/> : <div>
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
                                        <Sidebar data={authData}/>
                                    </StickyBox>
                                    {/* /Sidebar */}
                                </div>
                                <div className="col-md-7 col-lg-8 col-xl-9">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-3 dash-board-list blue">
                                            <div className="dash-widget">
                                                <div className="circle-bar">
                                                    <div className="icon-col">
                                                        <i className="fas fa-calendar-check"/>
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
                                                        <i className="fas fa-star"/>
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
                                                        <i className="fas fa-graduation-cap"/>
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
                                                        <i className="fas fa-users"/>
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
                                                <div
                                                    className="card-header d-flex justify-content-between align-items-center">
                                                    <h4 className="card-title">Umumiy </h4> <Link to={"app/dictionary"}
                                                                                                  className="text-info">My
                                                    Teacher Lug'at <i className="fas fa-arrow-right"/></Link>
                                                </div>
                                                <div className="card-body">
                                                    <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                                                        <li className="nav-item"><a className="nav-link active"
                                                                                    href="#bottom-justified-tab1"
                                                                                    data-toggle="tab">Darslar </a></li>
                                                        <li className="nav-item"><a className="nav-link"
                                                                                    href="#bottom-justified-tab2"
                                                                                    data-toggle="tab"> Sinov
                                                            darslari</a></li>
                                                        <li className="nav-item"><a className="nav-link"
                                                                                    href="#bottom-justified-tab3"
                                                                                    data-toggle="tab"> Uyga vazifa</a>
                                                        </li>
                                                    </ul>
                                                    <div className="tab-content">
                                                        <div className="tab-pane show active"
                                                             id="bottom-justified-tab1">

                                                            {/* MAVZULAR  */}

                                                            <div className="  card-table">
                                                                <div className="card-body">
                                                                    <div className="table-responsive">
                                                                        <table
                                                                            className="table table-hover table-center mb-0">
                                                                            <thead>
                                                                            <tr>
                                                                                <th>Mavzu</th>
                                                                                <th>Dars kuni</th>
                                                                                <th className="text-center">Dars vaqti
                                                                                </th>
                                                                                <th className="text-center">Harakat</th>
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <h2 className="table-avatar">
                                                                                        <Link
                                                                                            to="/app/Mentee/mentee-profile">Matematika<span>Arfmetik amallar</span></Link>
                                                                                    </h2>
                                                                                </td>
                                                                                <td>08 April 2020</td>
                                                                                <td className="text-center"><span
                                                                                    className="pending">9:00 AM - 10:00 AM</span>
                                                                                </td>
                                                                                <td className="text-center"><Link
                                                                                    to="/app/Mentee/mentor-profile"
                                                                                    className="btn btn-sm bg-info-light"><i
                                                                                    className="far fa-eye"/> View</Link>
                                                                                </td>
                                                                            </tr>


                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* MAVZULAR  */}

                                                        </div>
                                                        <div className="tab-pane" id="bottom-justified-tab2">
                                                            Tab content 2
                                                        </div>
                                                        <div className="tab-pane" id="bottom-justified-tab3">
                                                            Tab content 3
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
            }

        </>
    );
}

export default MenteeDashboard;
