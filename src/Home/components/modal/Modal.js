import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { modalTimeData } from "../../../Data";
import { Link } from "react-router-dom";
const ModalPage = () => {
  const [state, setState] = useState({
    isnewmodal: false,
    iseditModal: false,
  });
  const [value, setValue] = useState({
    startTime: "",
    endTime: "",
    theme: "",
  });
  const [data, setData] = useState([]);

  const [addnewtimeslot, setAddnewtimeslot] = useState([]);
  const [edittimeslot, setEdittimeslot] = useState([
    "placeholder",
    "placeholder",
  ]);
  const newModalClose = () => {
    setState({ isnewmodal: false });
  };
  const editModalClose = () => {
    setState({ iseditModal: false });
  };
  const addnewtimeschedule = () => {
    const addNewTimeSlot = [...addnewtimeslot];
    addNewTimeSlot.push("placeholder");
    setAddnewtimeslot(addNewTimeSlot);
  };
  const removenewtimeschedule = (index) => {
    const addNewTimeSlot = [...addnewtimeslot];
    addNewTimeSlot.splice(index, 1);
    setAddnewtimeslot(addNewTimeSlot);
  };
  const edittimeschedule = () => {
    const editTimeSlot = [...edittimeslot];
    editTimeSlot.push("placeholder");
    setEdittimeslot(editTimeSlot);
  };
  const removeedittimeschedule = (index) => {
    const editTimeSlot = [...edittimeslot];
    editTimeSlot.splice(index, 1);
    setEdittimeslot(editTimeSlot);
  };

  const addTimeTheme = (e) => {
    e.preventDefault();
    const time = [...data];
    time.push({
      startTime: value.startTime,
      endTime: value.endTime,
      theme: value.theme,
    });
    setData(time);
  };
  console.log(data);
  return (
    <div>
      <div className="content">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Schedule Timings</h4>
                    <div className="profile-box">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label>Timing Slot Duration</label>
                            <select className="select form-control">
                              <option>Select</option>
                              <option>15 mins</option>
                              <option>30 mins</option>
                              <option>45 mins</option>
                              <option>1 Hour</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="card schedule-widget mb-0">
                            {/* Schedule Header */}
                            <div className="schedule-header">
                              {/* Schedule Nav */}
                              <div className="schedule-nav">
                                <ul className="nav nav-tabs nav-justified">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      data-toggle="tab"
                                      href="#slot_sunday"
                                    >
                                      Yakshanba
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link active"
                                      data-toggle="tab"
                                      href="#slot_monday"
                                    >
                                      Dushanba
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      data-toggle="tab"
                                      href="#slot_tuesday"
                                    >
                                      Seshanba
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      data-toggle="tab"
                                      href="#slot_wednesday"
                                    >
                                      Chorshanba
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      data-toggle="tab"
                                      href="#slot_thursday"
                                    >
                                      Payshanba
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      data-toggle="tab"
                                      href="#slot_friday"
                                    >
                                      Juma
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      data-toggle="tab"
                                      href="#slot_saturday"
                                    >
                                      Shanba
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* /Schedule Nav */}
                            </div>
                            {/* /Schedule Header */}
                            {/* Schedule Content */}
                            <div className="tab-content schedule-cont">
                              {/* Sunday Slot */}
                              <div id="slot_sunday" className="tab-pane fade">
                                <h4 className="card-title d-flex justify-content-between">
                                  <span>Time Slots</span>
                                  <a
                                    className="edit-link"
                                    onClick={() =>
                                      setState({ isnewmodal: true })
                                    }
                                    data-toggle="modal"
                                    href="#add_time_slot"
                                  >
                                    <i className="fa fa-plus-circle" /> Add Slot
                                  </a>
                                </h4>
                                <p className="text-muted mb-0">Not Available</p>
                              </div>
                              {/* /Sunday Slot */}
                              {/* Monday Slot */}
                              <div
                                id="slot_monday"
                                className="tab-pane fade show active"
                              >
                                <h4 className="card-title d-flex justify-content-between">
                                  <span>Time Slots</span>
                                  <a
                                    className="edit-link"
                                    onClick={() =>
                                      setState({ iseditModal: true })
                                    }
                                    data-toggle="modal"
                                    href="#edit_time_slot"
                                  >
                                    <i className="fa fa-edit mr-1" />
                                    Edit
                                  </a>
                                </h4>
                                {/* Slot List */}
                                <div className="user-times">
                                  <div className="user-slot-list d-flex align-items-center">
                                    <p className="mb-0 me-2">
                                      8:00 pm - 11:30 pm
                                    </p>
                                    <div className="delete_schedule">
                                      <i className="fa fa-times" />
                                    </div>
                                  </div>
                                </div>
                                {/* /Slot List */}
                              </div>
                              {/* /Monday Slot */}
                              {/* Tuesday Slot */}
                              <div id="slot_tuesday" className="tab-pane fade">
                                <h4 className="card-title d-flex justify-content-between">
                                  <span>Time Slots</span>
                                  <a
                                    className="edit-link"
                                    onClick={() =>
                                      setState({ isnewmodal: true })
                                    }
                                    data-toggle="modal"
                                    href="#add_time_slot"
                                  >
                                    <i className="fa fa-plus-circle" /> Add Slot
                                  </a>
                                </h4>
                                <p className="text-muted mb-0">Not Available</p>
                              </div>
                              {/* /Tuesday Slot */}
                              {/* Wednesday Slot */}
                              <div
                                id="slot_wednesday"
                                className="tab-pane fade"
                              >
                                <h4 className="card-title d-flex justify-content-between">
                                  <span>Time Slots</span>
                                  <a
                                    className="edit-link"
                                    onClick={() =>
                                      setState({ isnewmodal: true })
                                    }
                                    data-toggle="modal"
                                    href="#add_time_slot"
                                  >
                                    <i className="fa fa-plus-circle" /> Add Slot
                                  </a>
                                </h4>
                                <p className="text-muted mb-0">Not Available</p>
                              </div>
                              {/* /Wednesday Slot */}
                              {/* Thursday Slot */}
                              <div id="slot_thursday" className="tab-pane fade">
                                <h4 className="card-title d-flex justify-content-between">
                                  <span>Time Slots</span>
                                  <a
                                    className="edit-link"
                                    onClick={() =>
                                      setState({ isnewmodal: true })
                                    }
                                    data-toggle="modal"
                                    href="#add_time_slot"
                                  >
                                    <i className="fa fa-plus-circle" /> Add Slot
                                  </a>
                                </h4>
                                <p className="text-muted mb-0">Not Available</p>
                              </div>
                              {/* /Thursday Slot */}
                              {/* Friday Slot */}
                              <div id="slot_friday" className="tab-pane fade">
                                <h4 className="card-title d-flex justify-content-between">
                                  <span>Time Slots</span>
                                  <a
                                    className="edit-link"
                                    onClick={() =>
                                      setState({ isnewmodal: true })
                                    }
                                    data-toggle="modal"
                                    href="#add_time_slot"
                                  >
                                    <i className="fa fa-plus-circle" /> Add Slot
                                  </a>
                                </h4>
                                <p className="text-muted mb-0">Not Available</p>
                              </div>
                              {/* /Friday Slot */}
                              {/* Saturday Slot */}
                              <div id="slot_saturday" className="tab-pane fade">
                                <h4 className="card-title d-flex justify-content-between">
                                  <span>Time Slots</span>
                                  <a
                                    className="edit-link"
                                    onClick={() =>
                                      setState({ isnewmodal: true })
                                    }
                                    data-toggle="modal"
                                    href="#add_time_slot"
                                  >
                                    <i className="fa fa-plus-circle" /> Add Slot
                                  </a>
                                </h4>
                                <p className="text-muted mb-0">Not Available</p>
                              </div>
                              {/* /Saturday Slot */}
                            </div>
                            {/* /Schedule Content */}
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
      </div>
      {/* /Page Content */}
      {/* Add Time Slot Modal */}
      <Modal
        className="modal-dialog-centered"
        isOpen={state.isnewmodal}
        toggle={() => newModalClose()}
      >
        <ModalHeader toggle={() => newModalClose()}>
          {" "}
          Add Time Slots
        </ModalHeader>
        <ModalBody>
          <form onSubmit={addTimeTheme}>
            <div className="hours-info">
              <div className="row form-row hours-cont">
                <div className="col-12 col-md-12">
                  <div className="row form-row">
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>Start Time</label>
                        <select
                          onChange={(e) =>
                            setValue({
                              ...value,
                              startTime: e.target.value,
                            })
                          }
                          className="form-control"
                        >
                          <option>Select</option>
                          <option value={"12.00"}>12.00 am</option>
                          <option value={"1.00"}>1.00 am</option>
                          <option value={"2.00"}>2.00 am</option>
                          <option value={"3.00"}>3.00 am</option>
                          <option value={"4.00"}>4.00 am</option>
                          <option value={"5.00"}>5.00 am</option>
                          <option value={"6.00"}>6.00 am</option>
                          <option value={"7.00"}>7.00 am</option>
                          <option value={"8.00"}>8.00 am</option>
                          <option value={"9.00"}>9.00 am</option>
                          <option value={"10.00"}>10.00 am</option>
                          <option value={"11.00"}>11.00 am</option>
                          <option value={"12.00"}>12.00 pm</option>
                          <option value={"1.00"}>1.00 pm</option>
                          <option value={"2.00"}>2.00 pm</option>
                          <option value={"3.00"}>3.00 pm</option>
                          <option value={"4.00"}>4.00 pm</option>
                          <option value={"5.00"}>5.00 pm</option>
                          <option value={"6.00"}>6.00 pm</option>
                          <option value={"7.00"}>7.00 pm</option>
                          <option value={"8.00"}>8.00 pm</option>
                          <option value={"9.00"}>9.00 pm</option>
                          <option value={"10.00"}>10.00 pm</option>
                          <option value={"11.00"}>11.00 pm</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>End Time</label>
                        <select
                          onChange={(e) =>
                            setValue({ ...value, endTime: e.target.value })
                          }
                          className="form-control"
                        >
                          <option>Select</option>
                          <option value={"12.00"}>12.00 am</option>
                          <option value={"1.00"}>1.00 am</option>
                          <option value={"2.00"}>2.00 am</option>
                          <option value={"3.00"}>3.00 am</option>
                          <option value={"4.00"}>4.00 am</option>
                          <option value={"5.00"}>5.00 am</option>
                          <option value={"6.00"}>6.00 am</option>
                          <option value={"7.00"}>7.00 am</option>
                          <option value={"8.00"}>8.00 am</option>
                          <option value={"9.00"}>9.00 am</option>
                          <option value={"10.00"}>10.00 am</option>
                          <option value={"11.00"}>11.00 am</option>
                          <option value={"12.00"}>12.00 pm</option>
                          <option value={"1.00"}>1.00 pm</option>
                          <option value={"2.00"}>2.00 pm</option>
                          <option value={"3.00"}>3.00 pm</option>
                          <option value={"4.00"}>4.00 pm</option>
                          <option value={"5.00"}>5.00 pm</option>
                          <option value={"6.00"}>6.00 pm</option>
                          <option value={"7.00"}>7.00 pm</option>
                          <option value={"8.00"}>8.00 pm</option>
                          <option value={"9.00"}>9.00 pm</option>
                          <option value={"10.00"}>10.00 pm</option>
                          <option value={"11.00"}>11.00 pm</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <label>Mavzu</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) =>
                          setValue({ ...value, theme: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {addnewtimeslot &&
              addnewtimeslot.map((newrow, index) => (
                <div className="hours-info" key={index}>
                  <div className="row form-row hours-cont">
                    <div className="col-12 col-md-10">
                      <div className="row form-row">
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Start Time</label>
                            <select
                              onChange={(e) =>
                                setValue({
                                  ...value,
                                  startTime: e.target.value,
                                })
                              }
                              className="form-control"
                            >
                              <option>Select</option>
                              <option value={"12.00"}>12.00 am</option>
                              <option value={"1.00"}>1.00 am</option>
                              <option value={"2.00"}>2.00 am</option>
                              <option value={"3.00"}>3.00 am</option>
                              <option value={"4.00"}>4.00 am</option>
                              <option value={"5.00"}>5.00 am</option>
                              <option value={"6.00"}>6.00 am</option>
                              <option value={"7.00"}>7.00 am</option>
                              <option value={"8.00"}>8.00 am</option>
                              <option value={"9.00"}>9.00 am</option>
                              <option value={"10.00"}>10.00 am</option>
                              <option value={"11.00"}>11.00 am</option>
                              <option value={"12.00"}>12.00 pm</option>
                              <option value={"1.00"}>1.00 pm</option>
                              <option value={"2.00"}>2.00 pm</option>
                              <option value={"3.00"}>3.00 pm</option>
                              <option value={"4.00"}>4.00 pm</option>
                              <option value={"5.00"}>5.00 pm</option>
                              <option value={"6.00"}>6.00 pm</option>
                              <option value={"7.00"}>7.00 pm</option>
                              <option value={"8.00"}>8.00 pm</option>
                              <option value={"9.00"}>9.00 pm</option>
                              <option value={"10.00"}>10.00 pm</option>
                              <option value={"11.00"}>11.00 pm</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>End Time</label>
                            <select
                              onChange={(e) =>
                                setValue({ ...value, endTime: e.target.value })
                              }
                              className="form-control"
                            >
                              <option>Select</option>
                              <option value={"12.00"}>12.00 am</option>
                              <option value={"1.00"}>1.00 am</option>
                              <option value={"2.00"}>2.00 am</option>
                              <option value={"3.00"}>3.00 am</option>
                              <option value={"4.00"}>4.00 am</option>
                              <option value={"5.00"}>5.00 am</option>
                              <option value={"6.00"}>6.00 am</option>
                              <option value={"7.00"}>7.00 am</option>
                              <option value={"8.00"}>8.00 am</option>
                              <option value={"9.00"}>9.00 am</option>
                              <option value={"10.00"}>10.00 am</option>
                              <option value={"11.00"}>11.00 am</option>
                              <option value={"12.00"}>12.00 pm</option>
                              <option value={"1.00"}>1.00 pm</option>
                              <option value={"2.00"}>2.00 pm</option>
                              <option value={"3.00"}>3.00 pm</option>
                              <option value={"4.00"}>4.00 pm</option>
                              <option value={"5.00"}>5.00 pm</option>
                              <option value={"6.00"}>6.00 pm</option>
                              <option value={"7.00"}>7.00 pm</option>
                              <option value={"8.00"}>8.00 pm</option>
                              <option value={"9.00"}>9.00 pm</option>
                              <option value={"10.00"}>10.00 pm</option>
                              <option value={"11.00"}>11.00 pm</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-2">
                      <label className="d-md-block d-sm-none d-none">
                        &nbsp;
                      </label>
                      <a
                        className="btn btn-danger trash"
                        style={{ cursor: "pointer" }}
                        onClick={() => removenewtimeschedule(index)}
                      >
                        <i
                          style={{ color: "#fff" }}
                          className="far fa-trash-alt"
                        />
                      </a>
                    </div>
                    <div className="col-12">
                      <label>Mavzu</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) =>
                          setValue({ ...value, theme: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            {/* <div className="add-more mb-3">
              <a
                style={{ cursor: "pointer", color: "#1e88e5" }}
                onClick={() => addnewtimeschedule()}
              >
                <i className="fa fa-plus-circle" /> Add More
              </a>
            </div> */}
            <div className="submit-section text-center mt-3">
              <button type="submit" className="btn btn-primary submit-btn">
                Saqlash
              </button>
            </div>
          </form>
        </ModalBody>
      </Modal>
      {/* Edit Time Slot Modal */}
      <Modal
        className="modal-dialog-centered"
        isOpen={state.iseditModal}
        toggle={() => editModalClose()}
      >
        <ModalHeader toggle={() => editModalClose()}>
          {" "}
          Edit Time Slots
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="hours-info">
              <div className="row form-row hours-cont">
                <div className="col-12 col-md-10">
                  <div className="row form-row">
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>Start Time</label>
                        <select className="form-control">
                          <option>Select</option>
                          <option>12.00 am</option>
                          <option>1.00 am</option>
                          <option>2.00 am</option>
                          <option>3.00 am</option>
                          <option>4.00 am</option>
                          <option>5.00 am</option>
                          <option>6.00 am</option>
                          <option>7.00 am</option>
                          <option>8.00 am</option>
                          <option>9.00 am</option>
                          <option>10.00 am</option>
                          <option>11.00 am</option>
                          <option>12.00 pm</option>
                          <option>1.00 pm</option>
                          <option>2.00 pm</option>
                          <option>3.00 pm</option>
                          <option>4.00 pm</option>
                          <option>5.00 pm</option>
                          <option>6.00 pm</option>
                          <option>7.00 pm</option>
                          <option>8.00 pm</option>
                          <option>9.00 pm</option>
                          <option>10.00 pm</option>
                          <option>11.00 pm</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>End Time</label>
                        <select className="form-control">
                          <option>Select</option>
                          <option>12.00 am</option>
                          <option>1.00 am</option>
                          <option>2.00 am</option>
                          <option>3.00 am</option>
                          <option>4.00 am</option>
                          <option>5.00 am</option>
                          <option>6.00 am</option>
                          <option>7.00 am</option>
                          <option>8.00 am</option>
                          <option>9.00 am</option>
                          <option>10.00 am</option>
                          <option>11.00 am</option>
                          <option>12.00 pm</option>
                          <option>1.00 pm</option>
                          <option>2.00 pm</option>
                          <option>3.00 pm</option>
                          <option>4.00 pm</option>
                          <option>5.00 pm</option>
                          <option>6.00 pm</option>
                          <option>7.00 pm</option>
                          <option>8.00 pm</option>
                          <option>9.00 pm</option>
                          <option>10.00 pm</option>
                          <option>11.00 pm</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {edittimeslot &&
                edittimeslot.map((timeslot, index) => (
                  <div className="row form-row hours-cont" key={index}>
                    <div className="col-12 col-md-10">
                      <div className="row form-row">
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Start Time</label>
                            <select className="form-control">
                              <option>Select</option>
                              <option>12.00 am</option>
                              <option>1.00 am</option>
                              <option>2.00 am</option>
                              <option>3.00 am</option>
                              <option>4.00 am</option>
                              <option>5.00 am</option>
                              <option>6.00 am</option>
                              <option>7.00 am</option>
                              <option>8.00 am</option>
                              <option>9.00 am</option>
                              <option>10.00 am</option>
                              <option>11.00 am</option>
                              <option>12.00 pm</option>
                              <option>1.00 pm</option>
                              <option>2.00 pm</option>
                              <option>3.00 pm</option>
                              <option>4.00 pm</option>
                              <option>5.00 pm</option>
                              <option>6.00 pm</option>
                              <option>7.00 pm</option>
                              <option>8.00 pm</option>
                              <option>9.00 pm</option>
                              <option>10.00 pm</option>
                              <option>11.00 pm</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>End Time</label>
                            <select className="form-control">
                              <option>Select</option>
                              <option>12.00 am</option>
                              <option>1.00 am</option>
                              <option>2.00 am</option>
                              <option>3.00 am</option>
                              <option>4.00 am</option>
                              <option>5.00 am</option>
                              <option>6.00 am</option>
                              <option>7.00 am</option>
                              <option>8.00 am</option>
                              <option>9.00 am</option>
                              <option>10.00 am</option>
                              <option>11.00 am</option>
                              <option>12.00 pm</option>
                              <option>1.00 pm</option>
                              <option>2.00 pm</option>
                              <option>3.00 pm</option>
                              <option>4.00 pm</option>
                              <option>5.00 pm</option>
                              <option>6.00 pm</option>
                              <option>7.00 pm</option>
                              <option>8.00 pm</option>
                              <option>9.00 pm</option>
                              <option>10.00 pm</option>
                              <option>11.00 pm</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-2">
                      <label className="d-md-block d-sm-none d-none">
                        &nbsp;
                      </label>
                      <a
                        className="btn btn-danger trash"
                        onClick={() => removeedittimeschedule(index)}
                      >
                        <i
                          style={{ color: "#fff" }}
                          className="far fa-trash-alt"
                        />
                      </a>
                    </div>
                  </div>
                ))}
            </div>
            <div className="add-more mb-3">
              <a
                className="add-hours"
                style={{ cursor: "pointer", color: "#1e88e5" }}
                onClick={() => edittimeschedule()}
              >
                <i className="fa fa-plus-circle" /> Add More
              </a>
            </div>
            <div className="submit-section text-center">
              <button type="submit" className="btn btn-primary submit-btn">
                Save Changes
              </button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalPage;
