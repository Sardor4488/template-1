import React, { useEffect, useState } from 'react'
import { USER } from '../../constant/imagepath_home'
// import ModalPage from "../components/modal/Modal";
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { Link, useParams } from 'react-router-dom'
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
  const testLessonsData = useSelector((state) => state.Reducer.testLessonData)
  const { id } = useParams()
  const user = testLessonsData[id]

  useEffect(() => {
    if (userData) {
      testLessons(userData.user.teacher_id)
    }
  }, [userData])

  console.log(testLessonsData[id])

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
                            {user?.image ? (
                              <img
                                className="pro-avatar-image"
                                src={`	https://teach-api.uz/teach-api/public/storage/${user.image}`}
                              />
                            ) : (
                              <div className="pro-avatar">
                                {user?.first_name.slice(0, 1)}
                                {user?.last_name.slice(0, 1)}
                              </div>
                            )}

                            <div className="mentor-details m-0">
                              <i className="fas fa-map-marker-alt" />
                              <span className="ms-2">
                                {user?.region
                                  ? user?.region + ' ' + user?.country
                                  : 'Kiritilmagan'}
                              </span>
                            </div>
                          </div>
                          <div className="user-info-cont">
                            <h4 className="">
                              {user?.first_name} {user?.last_name}
                            </h4>
                            <p className="mentor-type mb-0">
                              {user?.course_name
                                ? user?.course_name
                                : 'Kiritilmagan'}
                            </p>{' '}
                            <div className="mentor-action">
                              <p className="mentor-type social-title">
                                {user?.email}
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
                  <div className="card-body custom-border-card">
                    {/* About Details */}
                    <div className="widget about-widget custom-about mb-0">
                      <h4 className="widget-title">Qisqacha ma'lumot</h4>
                      <hr />
                      {user?.region}
                    </div>
                    {/* /About Details */}
                  </div>
                </div>

                <div className="card">
                  <div className="card-body custom-border-card pb-0">
                    {/* Personal Details */}
                    <div className="widget education-widget mb-0">
                      <h4 className="widget-title">
                        O'quvchining shaxsiy malumotlari
                      </h4>
                      <hr />
                      <div className="experience-box">
                        <ul className="experience-list profile-custom-list">
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Qayerda yashaydi</span>
                                <div className="row-result">{user?.region}</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Hozir qayerda</span>
                                <div className="row-result">
                                  {user?.country}
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Kasbi</span>
                                <div className="row-result">{user?.job}</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Tug'ilgan sanasi</span>
                                <div className="row-result">
                                  {user?.birth_date}
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body custom-border-card">
                    {/* About Details */}
                    <div className="widget about-widget custom-about mb-0">
                      <h4 className="widget-title">Maqsadi</h4>
                      <hr />
                      {user?.target}
                    </div>
                    {/* /About Details */}
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
