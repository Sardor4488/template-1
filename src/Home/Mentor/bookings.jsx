import React, { useState, useEffect } from 'react'
import { USER_1 } from '../../constant/imagepath_home'
import Sidebar from './sidebar'
import StickyBox from 'react-sticky-box'
import { Link } from 'react-router-dom'
import { testLessons } from '../../Api/teacherStudentsApi'
import { useSelector } from 'react-redux'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

const Bookings = () => {
  const data = useSelector((state) => state.Reducer.testLessonData)
  const [modal, setModal] = useState(false)
  const [value, setValue] = useState({
    start_time: '',
    end_time: '',
    date: '',
  })
  const modalToggle = (index) => {
    setValue({
      ...value,
      start_time: data[index].start_time,
      end_time: data[index].end_time,
      date: data[index].date,
    })
    setModal(true)
  }

  useEffect(() => {
    testLessons()
  }, [])

  console.log(data)

  return (
    <div>
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
                    Sinov darslarim
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Sinov darslarim</h2>
            </div>
          </div>
        </div>
      </div>

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
            {/* Booking summary */}
            <div className="col-md-7 col-lg-8 col-xl-9">
              <h3 className="pb-3">Sinov darslarim</h3>
              {/* Mentee List Tab */}
              {data.length > 0 ? (
                <div className="card card-table">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>O'quvchilar</th>
                            <th>Dars sanasi</th>
                            <th className="text-center">Dars vaqti</th>
                            <th className="text-center">Harakat</th>
                          </tr>
                        </thead>
                        {data?.map((value, index) => {
                          return (
                            <tbody key={index}>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <Link
                                      to={`/app/mentor/testStudentProfile/${index}`}
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src={`${
                                          value.image
                                            ? `https://teach-api.uz/teach-api/public/storage/${value.image}`
                                            : USER_1
                                        }`}
                                        alt="User Image"
                                      />
                                    </Link>
                                    <Link
                                      to={`/app/mentor/testStudentProfile/${index}`}
                                    >
                                      {value.first_name} {value.last_name}
                                      <span>{value.email}</span>
                                    </Link>
                                  </h2>
                                </td>
                                <td>{value.date}</td>
                                <td className="text-center">
                                  <span className="pending">
                                    {value.start_time} - {value.end_time}
                                  </span>
                                </td>
                                <td className="text-center">
                                  <div className="btn-group dropleft">
                                    <button
                                      type="button"
                                      className="btn btn-sm bg-info-light"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <i
                                        className="fa fa-ellipsis-v"
                                        aria-hidden="true"
                                      ></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <ul className="p-0 m-0">
                                        <li
                                          onClick={() => modalToggle(index)}
                                          className="mb-2 dropdown-item"
                                          style={{ cursor: 'pointer' }}
                                        >
                                          Vaqtni o'zgartirish
                                        </li>
                                        <li
                                          className="dropdown-item"
                                          style={{ cursor: 'pointer' }}
                                        >
                                          O'tildi
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          )
                        })}
                      </table>
                    </div>
                  </div>
                </div>
              ) : (
                <p>Sinov darslaringiz yo'q</p>
              )}
              {/* /Mentee List Tab */}
            </div>
            {/* /Booking summary */}
          </div>
        </div>
      </div>
      <Modal isOpen={modal} toggle={() => setModal(false)}>
        <ModalHeader toggle={() => setModal(false)}>
          <div>Tahrirlash</div>
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label>Dars sanasi</label>
                  <input
                    type="date"
                    value={value.date || ''}
                    onChange={(e) =>
                      setValue({ ...value, date: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Start time</label>
                  <select
                    className="form-control"
                    onChange={(e) =>
                      setValue({ ...value, start_time: e.target.value })
                    }
                  >
                    <option value="06:00">06:00</option>
                    <option value="07:00">07:00</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>End time</label>
                  <select
                    className="form-control"
                    onChange={(e) =>
                      setValue({ ...value, end_time: e.target.value })
                    }
                  >
                    <option value="06:00">06:00</option>
                    <option value="07:00">07:00</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                  </select>
                </div>
              </div>
              <div className="col-12 my-2 d-flex justify-content-center align-items-center">
                <button className="btn btn-primary" type="submit">
                  Saqlash
                </button>
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default Bookings
