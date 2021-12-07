import React from "react";
import { ModalBody } from "reactstrap";

const Modalbody = () => {
  return (
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
                      {modalTimeData.map((v, i) => (
                        <option value={v} key={i}>
                          {v}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>End Time</label>
                    <select className="form-control">
                      <option>Select</option>
                      {modalTimeData.map((v, i) => (
                        <option value={v} key={i}>
                          {v}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row form-row hours-cont">
                <div className="col-12 col-md-10">
                  <div className="row form-row">
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>Start Time</label>
                        <select className="form-control">
                          <option>Select</option>
                          {modalTimeData.map((v, i) => (
                            <option value={v} key={i}>
                              {v}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>End Time</label>
                        <select className="form-control">
                          <option>Select</option>
                          {modalTimeData.map((v, i) => (
                            <option value={v} key={i}>
                              {v}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <label className="d-md-block d-sm-none d-none">&nbsp;</label>
                  <a className="btn btn-danger trash">
                    <i style={{ color: "#fff" }} className="far fa-trash-alt" />
                  </a>
                </div>
              </div> */}
        </div>
        <div className="add-more mb-3">
          <div
            className="add-hours"
            style={{ cursor: "pointer", color: "#1e88e5" }}
          >
            <i className="fa fa-plus-circle" /> Qo'shish
          </div>
        </div>
        <div className="submit-section text-center">
          <button type="button" className="btn btn-primary submit-btn">
            Save Changes
          </button>
        </div>
      </form>
    </ModalBody>
  );
};

export default Modalbody;
