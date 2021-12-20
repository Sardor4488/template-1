import React, { useEffect, useState } from 'react'
import { USER } from '../../constant/imagepath_home'
// import ModalPage from "../components/modal/Modal";
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { Link } from 'react-router-dom'
import {
  USER_1,
  USER_2,
  USER_3,
  USER_4,
  USER_5,
  USER_6,
  USER_7,
} from '../../constant/imagepath_home'
import { testLessons } from '../../Api/teacherStudentsApi'
import { useSelector } from 'react-redux'
const TestStudentProfile = () => {
  const userData = useSelector((state) => state.Reducer.userdata)
  const [data, setStudentData] = useState([])
  useEffect(() => {
    if (userData) {
      testLessons(userData.user.teacher_id, setStudentData)
    }
  }, [userData])
  console.log('data', ' ' + data)
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
                    <a href="/app/index">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Oquvchi Profili for Teacher
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Oquvchi Profili</h2>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                {/* Mentor Widget */}
                <div className="card">
                  <div className="card-body">
                    <div className="row w-100 d-flex align-items-center justify-content-between">
                      <div className="col-12 col-sm-8 my-2">
                        <div className=" d-flex align-items-center">
                          <div className="mentor-img mr-0 d-flex flex-wrap justify-content-center">
                            <div className="pro-avatar">ST</div>

                            <div className="mentor-details m-0">
                              <i className="fas fa-map-marker-alt" /> Tamil
                              Nadu, India
                            </div>
                          </div>
                          <div className="user-info-cont">
                            <h4 className="">Sardor Temirov</h4>
                            <p className="mentor-type mb-0">
                              English Literature (M.A)
                            </p>{' '}
                            <div className="mentor-action">
                              <p className="mentor-type social-title">
                                blabla@gmail.com
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-4 my-2 respons-button d-flex align-items-center justify-content-center flex-wrap ">
                        <a href="#" className="blue-btn-radius">
                          Bog'lanish
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Mentor Widget */}
                {/* Mentor Details Tab */}
                <div className="card">
                  <div className="card-body custom-border-card pb-0">
                    {/* About Details */}
                    <div className="widget about-widget custom-about mb-0">
                      <h4 className="widget-title">Qisqacha ma'lumot</h4>
                      <hr />
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
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

                <div className="card">
                  <div className="card-body custom-border-card pb-0">
                    {/* Personal Details */}
                    <div className="widget education-widget mb-0">
                      <h4 className="widget-title">Personal Details</h4>
                      <hr />
                      <div className="experience-box">
                        <ul className="experience-list profile-custom-list">
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Gender</span>
                                <div className="row-result">Male</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Date of Birth</span>
                                <div className="row-result">01 - 02 - 2000</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Where did you hear about us?</span>
                                <div className="row-result">
                                  Through web search
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
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
  )
}

export default TestStudentProfile
