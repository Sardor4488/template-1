import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddBlog extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title"> Blog qo'shish</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin/index">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Blog qo'shish</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  {/* Add details */}
                  <div className="row">
                    <div className="col-12 blog-details">
                      <form>
                        <div className="form-group">
                          <label>Blog nomi</label>
                          <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                          <label>Blog rasmlari</label>
                          <div>
                            <input className="form-control" type="file" />
                            <small className="form-text text-muted">
                              Fayl hajmi 50mb dan oshmasligi kerak Rasm formatlari: jpg, gif,
                              png. Rasm soni 10 tadan oshmasin.
                            </small>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Blog kategoriyalari</label>
                              <select
                                className="select select2-hidden-accessible form-control"
                                tabIndex={-1}
                                aria-hidden="true"
                              >
                                <option>Web Design</option>
                                <option>Web Development</option>
                                <option>App Development</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Blog sub kategoriyasi</label>
                              <select
                                className="select select2-hidden-accessible form-control"
                                tabIndex={-1}
                                aria-hidden="true"
                              >
                                <option>Html</option>
                                <option>Css</option>
                                <option>Javascript</option>
                                <option>PHP</option>
                                <option>Codeignitor</option>
                                <option>iOS</option>
                                <option>Android</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Blog matni</label>
                          <textarea
                            cols={30}
                            rows={6}
                            className="form-control"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-group">
                          <label className="display-block w-100">
                            Blog holati
                          </label>
                          <div>
                            <div className="custom-control custom-radio custom-control-inline">
                              <input
                                className="custom-control-input"
                                id="active"
                                name="active-blog"
                                defaultValue="active"
                                type="radio"
                                defaultChecked
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="active"
                              >
                                Faol
                              </label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                              <input
                                className="custom-control-input"
                                id="inactive"
                                name="active-blog"
                                defaultValue="inactive"
                                type="radio"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="inactive"
                              >
                                Nofaol
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="m-t-20 text-center">
                          <button className="btn btn-primary btn-lg">
                            Tasdiqlash
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* /Add details */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddBlog;
