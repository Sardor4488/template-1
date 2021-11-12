
import React, { Component } from 'react';
import {USER,USER_3,USER_8,IMG_01} from '../../constant/imagepath_home';
import { Link } from 'react-router-dom';

class Components extends Component {
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
                    <li className="breadcrumb-item"><a href="/app/index">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Components</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Components</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container">
            <div className="comp-sec-wrapper">
              {/* Avatar */}
              <section className="comp-section">
                <div className="comp-header">
                  <h3 className="comp-title">Avatar</h3>
                  <div className="line" />
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Sizing</h4>
                      </div>
                      <div className="card-body">
                        <div className="avatar avatar-xxl">
                          <img className="avatar-img rounded-circle" alt="User Image" src={USER_8} />
                        </div>
                        <div className="avatar avatar-xl">
                          <img className="avatar-img rounded-circle" alt="User Image" src={USER_8} />
                        </div>
                        <div className="avatar avatar-lg">
                          <img className="avatar-img rounded-circle" alt="User Image" src={USER_8} />
                        </div>
                        <div className="avatar">
                          <img className="avatar-img rounded-circle" alt="User Image" src={USER_8} />
                        </div>
                        <div className="avatar avatar-sm">
                          <img className="avatar-img rounded-circle" alt="User Image" src={USER_8} />
                        </div>
                        <div className="avatar avatar-xs">
                          <img className="avatar-img rounded-circle" alt="User Image" src={USER_8} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Avatar With Status</h4>
                      </div>
                      <div className="card-body">
                        <div className="avatar avatar-online">
                          <img className="avatar-img rounded-circle" alt="User Image" src={USER_8} />
                        </div>
                        <div className="avatar avatar-offline">
                          <img className="avatar-img rounded-circle" alt="User Image" src={USER_8} />
                        </div>
                        <div className="avatar avatar-away">
                          <img className="avatar-img rounded-circle" alt="User Image" src={USER_8} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Shape</h4>
                      </div>
                      <div className="card-body">
                        <div className="avatar">
                          <img className="avatar-img rounded" alt="User Image" src={USER_8} />
                        </div>
                        <div className="avatar">
                          <img className="avatar-img rounded-circle" alt="User Image" src={USER_8} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Group</h4>
                      </div>
                      <div className="card-body">
                        <div className="avatar-group">
                          <div className="avatar">
                            <img className="avatar-img rounded-circle border border-white" alt="User Image" src={USER_8} />
                          </div>
                          <div className="avatar">
                            <img className="avatar-img rounded-circle border border-white" alt="User Image" src={USER} />
                          </div>
                          <div className="avatar">
                            <img className="avatar-img rounded-circle border border-white" alt="User Image" src={USER_3} />
                          </div>
                          <div className="avatar">
                            <span className="avatar-title rounded-circle border border-white">CF</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* /Avatar */}
              {/* Alerts */}
              <section className="comp-section">
                <div className="comp-header">
                  <h3 className="comp-title">Alerts</h3>
                  <div className="line" />
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="alert alert-primary alert-dismissible fade show" role="alert">
                      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="alert alert-secondary alert-dismissible fade show" role="alert">
                      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                      <strong>Warning!</strong> There was a problem with your <a href="#" className="alert-link">network connection</a>.
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                      <strong>Error!</strong> A <a href="#" className="alert-link">problem</a> has been occurred while submitting your data.
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                      <strong>Success!</strong> Your <a href="#" className="alert-link">message</a> has been sent successfully.
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="alert alert-info alert-dismissible fade show" role="alert">
                      <strong>Note!</strong> Please read the <a href="#" className="alert-link">comments</a> carefully.
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="alert alert-light alert-dismissible fade show" role="alert">
                      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="alert alert-dark alert-dismissible fade show mb-0" role="alert">
                      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              {/* /Alerts */}
              {/* Breadcrumbs */}
              <section className="comp-section">
                <div className="comp-header">
                  <h3 className="comp-title">Breadcrumbs</h3>
                  <div className="line" />
                </div>
                <div className="card">
                  <div className="card-body">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">Home</li>
                      </ol>
                    </nav>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Products</li>
                      </ol>
                    </nav>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Products</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Accessories</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </section>
              {/* /Breadcrumbs */}
              {/* Buttons */}
              <section className="comp-section comp-buttons">
                <div className="comp-header">
                  <h3 className="comp-title">Buttons</h3>
                  <div className="line" />
                </div>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Default Button</h4>
                    <button type="button" className="btn btn-primary">Primary</button>&nbsp;
                    <button type="button" className="btn btn-secondary">Secondary</button>&nbsp;
                    <button type="button" className="btn btn-success">Success</button>&nbsp;
                    <button type="button" className="btn btn-danger">Danger</button>&nbsp;
                    <button type="button" className="btn btn-warning">Warning</button>&nbsp;
                    <button type="button" className="btn btn-info">Info</button>&nbsp;
                    <button type="button" className="btn btn-light">Light</button>&nbsp;
                    <button type="button" className="btn btn-dark">Dark</button>&nbsp;
                    <button type="button" className="btn btn-link">Link</button>
                    <hr />
                    <h4 className="card-title">Button Sizes</h4>
                    <p>
                      <button type="button" className="btn btn-primary btn-lg">Primary</button>&nbsp;
                      <button type="button" className="btn btn-secondary btn-lg">Secondary</button>&nbsp;
                      <button type="button" className="btn btn-success btn-lg">Success</button>&nbsp;
                      <button type="button" className="btn btn-danger btn-lg">Danger</button>&nbsp;
                      <button type="button" className="btn btn-warning btn-lg">Warning</button>&nbsp;
                      <button type="button" className="btn btn-info btn-lg">Info</button>&nbsp;
                      <button type="button" className="btn btn-light btn-lg">Light</button>&nbsp;
                      <button type="button" className="btn btn-dark btn-lg">Dark</button>
                    </p>
                    <p>
                      <button type="button" className="btn btn-primary">Primary</button>&nbsp;
                      <button type="button" className="btn btn-secondary">Secondary</button>&nbsp;
                      <button type="button" className="btn btn-success">Success</button>&nbsp;
                      <button type="button" className="btn btn-danger">Danger</button>&nbsp;
                      <button type="button" className="btn btn-warning">Warning</button>&nbsp;
                      <button type="button" className="btn btn-info">Info</button>&nbsp;
                      <button type="button" className="btn btn-light">Light</button>&nbsp;
                      <button type="button" className="btn btn-dark">Dark</button>
                    </p>
                    <p>
                      <button type="button" className="btn btn-primary btn-sm">Primary</button>&nbsp;
                      <button type="button" className="btn btn-secondary btn-sm">Secondary</button>&nbsp;
                      <button type="button" className="btn btn-success btn-sm">Success</button>&nbsp;
                      <button type="button" className="btn btn-danger btn-sm">Danger</button>&nbsp;
                      <button type="button" className="btn btn-warning btn-sm">Warning</button>&nbsp;
                      <button type="button" className="btn btn-info btn-sm">Info</button>&nbsp;
                      <button type="button" className="btn btn-light btn-sm">Light</button>&nbsp;
                      <button type="button" className="btn btn-dark btn-sm">Dark</button>
                    </p>
                    <hr />
                    <h4 className="card-title">Button Groups</h4>
                    <div className="btn-toolbar">
                      <div className="btn-group btn-group-lg">
                        <button type="button" className="btn btn-primary">Left</button>
                        <button type="button" className="btn btn-primary">Middle</button>
                        <button type="button" className="btn btn-primary">Right</button>
                      </div>
                    </div>
                    <br />
                    <div className="btn-toolbar">
                      <div className="btn-group">
                        <button type="button" className="btn btn-primary">Left</button>
                        <button type="button" className="btn btn-primary">Middle</button>
                        <button type="button" className="btn btn-primary">Right</button>
                      </div>
                    </div>
                    <br />
                    <div className="btn-toolbar">
                      <div className="btn-group btn-group-sm">
                        <button type="button" className="btn btn-primary">Left</button>
                        <button type="button" className="btn btn-primary">Middle</button>
                        <button type="button" className="btn btn-primary">Right</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Rounded Button */}
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Rounded Button</h4>
                    <p className="card-text">use <code>.btn-rounded</code> in class <code>.btn</code> class to get Rounded button</p>
                  </div>
                  <div className="card-body">
                    <button type="button" className="btn btn-rounded btn-primary">Primary</button>&nbsp;
                    <button type="button" className="btn btn-rounded btn-secondary">Secondary</button>&nbsp;
                    <button type="button" className="btn btn-rounded btn-success">Success</button>&nbsp;
                    <button type="button" className="btn btn-rounded btn-danger">Danger</button>&nbsp;
                    <button type="button" className="btn btn-rounded btn-warning">Warning</button>&nbsp;
                    <button type="button" className="btn btn-rounded btn-info">Info</button>&nbsp;
                    <button type="button" className="btn btn-rounded btn-light">Light</button>&nbsp;
                    <button type="button" className="btn btn-rounded btn-dark">Dark</button>
                    <hr />
                    <p>use <code>.btn-rounded</code> in class <code>.btn-outline-*</code> class to get Rounded Outline button</p>
                    <button type="button" className="btn btn-rounded btn-outline-primary">Primary</button>&nbsp;
                    <button type="button" className="btn btn-rounded btn-outline-secondary">Secondary</button>&nbsp;
                    <button type="button" className="btn btn-rounded btn-outline-success">Success</button>&nbsp;
                    <button type="button" className="btn btn-rounded btn-outline-danger">Danger</button>&nbsp;
                    <button type="button" className="btn btn-rounded btn-outline-warning">Warning</button>&nbsp;
                    <button type="button" className="btn btn-rounded btn-outline-info">Info</button>&nbsp;
                    <button type="button" className="btn btn-rounded btn-outline-light">Light</button>&nbsp;
                    <button type="button" className="btn btn-rounded btn-outline-dark">Dark</button>
                  </div>
                </div>
                {/* /Rounded Button */}
                {/* Outline Buttons */}
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Outline Buttons</h4>
                    <p className="card-text">Use <code>.btn-outline-*</code> class for outline buttons.</p>
                  </div>
                  <div className="card-body">
                    <div className="row row-sm align-items-center">
                      <div className="col-12 col-xl mb-3 mb-xl-0">Normal</div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button type="button" className="btn btn-block btn-outline-primary">Primary</button>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button type="button" className="btn btn-block btn-outline-secondary">Secondary</button>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button type="button" className="btn btn-block btn-outline-success">Success</button>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button type="button" className="btn btn-block btn-outline-warning">Warning</button>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button type="button" className="btn btn-block btn-outline-danger">Danger</button>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button type="button" className="btn btn-block btn-outline-info">Info</button>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button type="button" className="btn btn-block btn-outline-light">Light</button>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button type="button" className="btn btn-block btn-outline-dark">Dark</button>
                      </div>
                    </div>
                    <div className="row row-sm align-items-center mt-3">
                      <div className="col-12 col-xl mb-3 mb-xl-0">Active</div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button type="button" className="btn btn-block btn-outline-primary active">Primary</button>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button type="button" className="btn btn-block btn-outline-secondary active">Secondary</button>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button type="button" className="btn btn-block btn-outline-success active">Success</button>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button type="button" className="btn btn-block btn-outline-warning active">Warning</button>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button type="button" className="btn btn-block btn-outline-danger active">Danger</button>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button type="button" className="btn btn-block btn-outline-info active">Info</button>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button type="button" className="btn btn-block btn-outline-light active">Light</button>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button type="button" className="btn btn-block btn-outline-dark active">Dark</button>
                      </div>
                    </div>
                    <div className="row row-sm align-items-center mt-3">
                      <div className="col-12 col-xl mb-3 mb-xl-0">Disabled</div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button disabled type="button" className="btn btn-block btn-outline-primary">Primary</button>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button disabled type="button" className="btn btn-block btn-outline-secondary">Secondary</button>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button disabled type="button" className="btn btn-block btn-outline-success">Success</button>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button disabled type="button" className="btn btn-block btn-outline-warning">Warning</button>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button disabled type="button" className="btn btn-block btn-outline-danger">Danger</button>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button disabled type="button" className="btn btn-block btn-outline-info">Info</button>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button disabled type="button" className="btn btn-block btn-outline-light">Light</button>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                        <button disabled type="button" className="btn btn-block btn-outline-dark">Dark</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Outline Buttons */}
              </section>
              {/* Buttons */}
              {/* Cards */}
              <section className="comp-section comp-cards">
                <div className="comp-header">
                  <h3 className="comp-title">Cards</h3>
                  <div className="line" />
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4 d-flex">
                    <div className="card flex-fill">
                      <img alt="Card Image" src={IMG_01} className="card-img-top" />
                      <div className="card-header">
                        <h5 className="card-title mb-0">Card with image and links</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a className="card-link" href="#">Card link</a>
                        <a className="card-link" href="#">Another link</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 d-flex">
                    <div className="card flex-fill">
                      <img alt="Card Image" src={IMG_01} className="card-img-top" />
                      <div className="card-header">
                        <h5 className="card-title mb-0">Card with image and button</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a className="btn btn-primary" href="#">Go somewhere</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 d-flex">
                    <div className="card flex-fill">
                      <img alt="Card Image" src={IMG_01} className="card-img-top" />
                      <div className="card-header">
                        <h5 className="card-title mb-0">Card with image and list</h5>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <h5 className="card-title mb-0">Card with links</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a className="card-link" href="#">Card link</a>
                        <a className="card-link" href="#">Another link</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <h5 className="card-title mb-0">Card with button</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a className="btn btn-primary" href="#">Go somewhere</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <h5 className="card-title mb-0">Card with list</h5>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        This is my header
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                      <div className="card-footer text-muted">
                        This is my footer
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <ul role="tablist" className="nav nav-tabs card-header-tabs float-right">
                          <li className="nav-item">
                            <a href="#tab-1" data-toggle="tab" className="nav-link active">Active</a>
                          </li>
                          <li className="nav-item">
                            <a href="#tab-2" data-toggle="tab" className="nav-link">Link</a>
                          </li>
                          <li className="nav-item">
                            <a href="#tab-3" data-toggle="tab" className="nav-link disabled">Disabled</a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <div className="tab-content pt-0">
                          <div role="tabpanel" id="tab-1" className="tab-pane fade show active">
                            <h5 className="card-title">Card with tabs</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a className="btn btn-primary" href="#">Go somewhere</a>
                          </div>
                          <div role="tabpanel" id="tab-2" className="tab-pane fade text-center">
                            <h5 className="card-title">Card with tabs</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a className="btn btn-primary" href="#">Go somewhere</a>
                          </div>
                          <div role="tabpanel" id="tab-3" className="tab-pane fade">
                            <h5 className="card-title">Card with tabs</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a className="btn btn-primary" href="#">Go somewhere</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <ul role="tablist" className="nav nav-pills card-header-pills float-right">
                          <li className="nav-item">
                            <a href="#tab-4" data-toggle="tab" className="nav-link active">Active</a>
                          </li>
                          <li className="nav-item">
                            <a href="#tab-5" data-toggle="tab" className="nav-link">Link</a>
                          </li>
                          <li className="nav-item">
                            <a href="#tab-6" data-toggle="tab" className="nav-link disabled">Disabled</a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <div className="tab-content pt-0">
                          <div role="tabpanel" id="tab-4" className="tab-pane fade show active">
                            <h5 className="card-title">Card with pills</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a className="btn btn-primary" href="#">Go somewhere</a>
                          </div>
                          <div role="tabpanel" id="tab-5" className="tab-pane fade text-center">
                            <h5 className="card-title">Card with pills</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a className="btn btn-primary" href="#">Go somewhere</a>
                          </div>
                          <div role="tabpanel" id="tab-6" className="tab-pane fade">
                            <h5 className="card-title">Card with pills</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a className="btn btn-primary" href="#">Go somewhere</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* /Cards */}
              {/* Dropdowns */}
              <section className="comp-section comp-dropdowns">
                <div className="comp-header">
                  <h3 className="comp-title">Dropdowns</h3>
                  <div className="line" />
                </div>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Dropdowns within Text</h4>
                    <div className="dropdown">
                      <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false"> Dropdown </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                      </div>
                    </div>
                    <hr />
                    <h4 className="card-title">Dropdowns within Buttons</h4>
                    <div className="btn-group">
                      <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>&nbsp;
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Separated link</a>
                      </div>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>&nbsp;
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Separated link</a>
                      </div>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>&nbsp;
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Separated link</a>
                      </div>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>&nbsp;
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Separated link</a>
                      </div>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>&nbsp;
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Separated link</a>
                      </div>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Separated link</a>
                      </div>
                    </div>
                    <hr />
                    <h4 className="card-title">Split button dropdowns</h4>
                    <div className="btn-group">
                      <button type="button" className="btn btn-primary">Action</button>
                      <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>&nbsp;
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Separated link</a>
                      </div>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-secondary">Action</button>
                      <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>&nbsp;
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Separated link</a>
                      </div>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-info">Action</button>
                      <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>&nbsp;
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Separated link</a>
                      </div>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-success">Action</button>
                      <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>&nbsp;
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Separated link</a>
                      </div>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-warning">Action</button>
                      <button type="button" className="btn btn-warning dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>&nbsp;
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Separated link</a>
                      </div>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-danger">Action</button>
                      <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Separated link</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* /Dropdowns */}
              {/* Pagination */}
              <section className="comp-section">
                <div className="comp-header">
                  <h3 className="comp-title">Pagination</h3>
                  <div className="line" />
                </div>
                <div className="card">
                  <div className="card-body">
                    <div>
                      <ul className="pagination">
                        <li className="page-item disabled">
                          <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active">
                          <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                          <a className="page-link" href="#">Next</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="pagination">
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="pagination pagination-lg">
                        <li className="page-item disabled">
                          <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active">
                          <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                          <a className="page-link" href="#">Next</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="pagination pagination-sm mb-0">
                        <li className="page-item disabled">
                          <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active">
                          <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                          <a className="page-link" href="#">Next</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              {/* /Pagination */}
              {/* Progress */}
              <section className="comp-section">
                <div className="comp-header">
                  <h3 className="comp-title">Progress</h3>
                  <div className="line" />
                </div>
                <div className="progress-example card">
                  <div className="card-header">
                    <h4 className="card-title">Large Progress Bars</h4>
                  </div>
                  <div className="card-body pb-0">
                    <div className="row">
                      <div className="col-md-6">
                        <div>
                          <div className="progress progress-lg">
                            <div className="progress-bar" role="progressbar" style={{width: '10%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <div className="progress progress-lg">
                            <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <div className="progress progress-lg">
                            <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <div className="progress progress-lg">
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <div className="progress progress-lg">
                            <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="progress progress-lg">
                          <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-lg">
                          <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-lg">
                          <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-lg">
                          <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-lg">
                          <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="progress-example card">
                  <div className="card-header">
                    <h4 className="card-title">Default Progress Bars</h4>
                  </div>
                  <div className="card-body pb-0">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{width: '10%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                          <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                          <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                          <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                          <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="progress">
                          <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                          <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                          <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                          <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress">
                          <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="progress-example card">
                  <div className="card-header">
                    <h4 className="card-title">Medium Progress Bars</h4>
                  </div>
                  <div className="card-body pb-0">
                    <div className="row">
                      <div className="col-md-6">
                        <div>
                          <div className="progress progress-md">
                            <div className="progress-bar" role="progressbar" style={{width: '10%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <div className="progress progress-md">
                            <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <div className="progress progress-md">
                            <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <div className="progress progress-md">
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <div className="progress progress-md">
                            <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="progress progress-md">
                          <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-md">
                          <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-md">
                          <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-md">
                          <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-md">
                          <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="progress-example card">
                  <div className="card-header">
                    <h4 className="card-title">Small Progress Bars</h4>
                  </div>
                  <div className="card-body pb-0">
                    <div className="row">
                      <div className="col-md-6">
                        <div>
                          <div className="progress progress-sm">
                            <div className="progress-bar" role="progressbar" style={{width: '10%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <div className="progress progress-sm">
                            <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <div className="progress progress-sm">
                            <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <div className="progress progress-sm">
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <div className="progress progress-sm">
                            <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="progress progress-sm">
                          <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-sm">
                          <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-sm">
                          <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-sm">
                          <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-sm">
                          <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="progress-example card">
                  <div className="card-header">
                    <h4 className="card-title">Extra Small Progress Bars</h4>
                  </div>
                  <div className="card-body pb-0">
                    <div className="row">
                      <div className="col-md-6">
                        <div>
                          <div className="progress progress-xs">
                            <div className="progress-bar w-75" role="progressbar" style={{width: '10%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <div className="progress progress-xs">
                            <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <div className="progress progress-xs">
                            <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <div className="progress progress-xs">
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <div className="progress progress-xs">
                            <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="progress progress-xs">
                          <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-xs">
                          <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-xs">
                          <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-xs">
                          <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-xs">
                          <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* /Progress */}
              {/* Tabs */}
              <section className="comp-section">
                <div className="comp-header">
                  <h3 className="comp-title">Tabs</h3>
                  <div className="line" />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Basic tabs</h4>
                      </div>
                      <div className="card-body">
                        <ul className="nav nav-tabs">
                          <li className="nav-item"><a className="nav-link active" href="#basictab1" data-toggle="tab">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="#basictab2" data-toggle="tab">Profile</a></li>
                          <li className="nav-item"><a className="nav-link" href="#basictab3" data-toggle="tab">Messages</a></li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="basictab1">
                            Tab content 1
                          </div>
                          <div className="tab-pane" id="basictab2">
                            Tab content 2
                          </div>
                          <div className="tab-pane" id="basictab3">
                            Tab content 3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Basic justified tabs</h4>
                      </div>
                      <div className="card-body">
                        <ul className="nav nav-tabs nav-justified">
                          <li className="nav-item"><a className="nav-link active" href="#basic-justified-tab1" data-toggle="tab">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="#basic-justified-tab2" data-toggle="tab">Profile</a></li>
                          <li className="nav-item dropdown">
                            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">Dropdown</a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#basic-justified-tab3" data-toggle="tab">Dropdown 1</a>
                              <a className="dropdown-item" href="#basic-justified-tab4" data-toggle="tab">Dropdown 2</a>
                            </div>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="basic-justified-tab1">
                            Tab content 1
                          </div>
                          <div className="tab-pane" id="basic-justified-tab2">
                            Tab content 2
                          </div>
                          <div className="tab-pane" id="basic-justified-tab3">
                            Tab content 3
                          </div>
                          <div className="tab-pane" id="basic-justified-tab4">
                            Tab content 4
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Top line tabs</h4>
                      </div>
                      <div className="card-body">
                        <ul className="nav nav-tabs nav-tabs-top">
                          <li className="nav-item"><a className="nav-link active" href="#top-tab1" data-toggle="tab">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="#top-tab2" data-toggle="tab">Profile</a></li>
                          <li className="nav-item"><a className="nav-link" href="#top-tab3" data-toggle="tab">Messages</a></li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="top-tab1">
                            Tab content 1
                          </div>
                          <div className="tab-pane" id="top-tab2">
                            Tab content 2
                          </div>
                          <div className="tab-pane" id="top-tab3">
                            Tab content 3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Top line justified</h4>
                      </div>
                      <div className="card-body">
                        <ul className="nav nav-tabs nav-tabs-top nav-justified">
                          <li className="nav-item"><a className="nav-link active" href="#top-justified-tab1" data-toggle="tab">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="#top-justified-tab2" data-toggle="tab">Profile</a></li>
                          <li className="nav-item"><a className="nav-link" href="#top-justified-tab3" data-toggle="tab">Messages</a></li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="top-justified-tab1">
                            Tab content 1
                          </div>
                          <div className="tab-pane" id="top-justified-tab2">
                            Tab content 2
                          </div>
                          <div className="tab-pane" id="top-justified-tab3">
                            Tab content 3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Bottom line tabs</h4>
                      </div>
                      <div className="card-body">
                        <ul className="nav nav-tabs nav-tabs-bottom">
                          <li className="nav-item"><a className="nav-link active" href="#bottom-tab1" data-toggle="tab">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="#bottom-tab2" data-toggle="tab">Profile</a></li>
                          <li className="nav-item"><a className="nav-link" href="#bottom-tab3" data-toggle="tab">Messages</a></li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="bottom-tab1">
                            Tab content 1
                          </div>
                          <div className="tab-pane" id="bottom-tab2">
                            Tab content 2
                          </div>
                          <div className="tab-pane" id="bottom-tab3">
                            Tab content 3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Bottom line justified</h4>
                      </div>
                      <div className="card-body">
                        <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                          <li className="nav-item"><a className="nav-link active" href="#bottom-justified-tab1" data-toggle="tab">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="#bottom-justified-tab2" data-toggle="tab">Profile</a></li>
                          <li className="nav-item"><a className="nav-link" href="#bottom-justified-tab3" data-toggle="tab">Messages</a></li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="bottom-justified-tab1">
                            Tab content 1
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
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Solid tabs</h4>
                      </div>
                      <div className="card-body">
                        <ul className="nav nav-tabs nav-tabs-solid">
                          <li className="nav-item"><a className="nav-link active" href="#solid-tab1" data-toggle="tab">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="#solid-tab2" data-toggle="tab">Profile</a></li>
                          <li className="nav-item"><a className="nav-link" href="#solid-tab3" data-toggle="tab">Messages</a></li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="solid-tab1">
                            Tab content 1
                          </div>
                          <div className="tab-pane" id="solid-tab2">
                            Tab content 2
                          </div>
                          <div className="tab-pane" id="solid-tab3">
                            Tab content 3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Solid justified</h4>
                      </div>
                      <div className="card-body">
                        <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                          <li className="nav-item"><a className="nav-link active" href="#solid-justified-tab1" data-toggle="tab">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="#solid-justified-tab2" data-toggle="tab">Profile</a></li>
                          <li className="nav-item"><a className="nav-link" href="#solid-justified-tab3" data-toggle="tab">Messages</a></li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="solid-justified-tab1">
                            Tab content 1
                          </div>
                          <div className="tab-pane" id="solid-justified-tab2">
                            Tab content 2
                          </div>
                          <div className="tab-pane" id="solid-justified-tab3">
                            Tab content 3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Solid Rounded</h4>
                      </div>
                      <div className="card-body">
                        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                          <li className="nav-item"><a className="nav-link active" href="#solid-rounded-tab1" data-toggle="tab">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="#solid-rounded-tab2" data-toggle="tab">Profile</a></li>
                          <li className="nav-item"><a className="nav-link" href="#solid-rounded-tab3" data-toggle="tab">Messages</a></li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="solid-rounded-tab1">
                            Tab content 1
                          </div>
                          <div className="tab-pane" id="solid-rounded-tab2">
                            Tab content 2
                          </div>
                          <div className="tab-pane" id="solid-rounded-tab3">
                            Tab content 3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Rounded justified</h4>
                      </div>
                      <div className="card-body">
                        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified">
                          <li className="nav-item"><a className="nav-link active" href="#solid-rounded-justified-tab1" data-toggle="tab">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="#solid-rounded-justified-tab2" data-toggle="tab">Profile</a></li>
                          <li className="nav-item"><a className="nav-link" href="#solid-rounded-justified-tab3" data-toggle="tab">Messages</a></li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="solid-rounded-justified-tab1">
                            Tab content 1
                          </div>
                          <div className="tab-pane" id="solid-rounded-justified-tab2">
                            Tab content 2
                          </div>
                          <div className="tab-pane" id="solid-rounded-justified-tab3">
                            Tab content 3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* /Tabs */}
              {/* Typography */}
              <section className="comp-section">
                <div className="comp-header">
                  <h3 className="comp-title">Typography</h3>
                  <div className="line" />
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Headings</h4>
                      </div>
                      <div className="card-body">
                        <h1>h1. Bootstrap heading</h1>
                        <h2>h2. Bootstrap heading</h2>
                        <h3>h3. Bootstrap heading</h3>
                        <h4>h4. Bootstrap heading</h4>
                        <h5>h5. Bootstrap heading</h5>
                        <h6>h6. Bootstrap heading</h6>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Blockquotes</h4>
                      </div>
                      <div className="card-body">
                        <blockquote>
                          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        </blockquote>
                        <blockquote className="blockquote mb-0">
                          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <h4 className="card-title">Text element</h4>
                      </div>
                      <div className="card-body">
                        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                        <p><del>This line of text is meant to be treated as deleted text.</del></p>
                        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                        <p><u>This line of text will render as underlined</u></p>
                        <p><small>This line of text is meant to be treated as fine print.</small></p>
                        <p><strong>This line rendered as bold text.</strong></p>
                        <p><em>This line rendered as italicized text.</em></p>
                        <p className="text-monospace mb-0">This is in monospace</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <h4 className="card-title">Coloured Link</h4>
                      </div>
                      <div className="card-body">
                        <p className="text-primary">.text-primary</p>
                        <p className="text-secondary">.text-secondary</p>
                        <p className="text-success">.text-success</p>
                        <p className="text-danger">.text-danger</p>
                        <p className="text-warning">.text-warning</p>
                        <p className="text-info">.text-info</p>
                        <p className="text-light bg-dark">.text-light</p>
                        <p className="text-dark">.text-dark</p>
                        <p className="text-muted">.text-muted</p>
                        <p className="text-white bg-dark mb-0">.text-white</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <h4 className="card-title">Coloured text</h4>
                      </div>
                      <div className="card-body">
                        <p><a href="#" className="text-primary">Primary link</a></p>
                        <p><a href="#" className="text-secondary">Secondary link</a></p>
                        <p><a href="#" className="text-success">Success link</a></p>
                        <p><a href="#" className="text-danger">Danger link</a></p>
                        <p><a href="#" className="text-warning">Warning link</a></p>
                        <p><a href="#" className="text-info">Info link</a></p>
                        <p><a href="#" className="text-light bg-dark">Light link</a></p>
                        <p><a href="#" className="text-dark">Dark link</a></p>
                        <p><a href="#" className="text-muted">Muted link</a></p>
                        <p><a href="#" className="text-white bg-dark mb-0">White link</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <h4 className="card-title">Bullet Lists</h4>
                      </div>
                      <div className="card-body">
                        <ul className="mb-0">
                          <li>Lorem ipsum dolor sit amet</li>
                          <li>Consectetur adipiscing elit</li>
                          <li>Integer molestie lorem at massa</li>
                          <li>Facilisis in pretium nisl aliquet</li>
                          <li>Nulla volutpat aliquam velit
                            <ul>
                              <li>Phasellus iaculis neque</li>
                              <li>Purus sodales ultricies</li>
                              <li>Vestibulum laoreet porttitor sem</li>
                              <li>Ac tristique libero volutpat at</li>
                            </ul>
                          </li>
                          <li>Faucibus porta lacus fringilla vel</li>
                          <li>Aenean sit amet erat nunc</li>
                          <li>Eget porttitor lorem</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <h4 className="card-title">Bullet Numbers</h4>
                      </div>
                      <div className="card-body">
                        <ol className="mb-0">
                          <li>Lorem ipsum dolor sit amet</li>
                          <li>Consectetur adipiscing elit</li>
                          <li>Integer molestie lorem at massa</li>
                          <li>Facilisis in pretium nisl aliquet</li>
                          <li>Nulla volutpat aliquam velit
                            <ul>
                              <li>Phasellus iaculis neque</li>
                              <li>Purus sodales ultricies</li>
                              <li>Vestibulum laoreet porttitor sem</li>
                              <li>Ac tristique libero volutpat at</li>
                            </ul>
                          </li>
                          <li>Faucibus porta lacus fringilla vel</li>
                          <li>Aenean sit amet erat nunc</li>
                          <li>Eget porttitor lorem</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <h4 className="card-title">Unstyled Lists</h4>
                      </div>
                      <div className="card-body">
                        <ul className="list-unstyled mb-0">
                          <li>Lorem ipsum dolor sit amet</li>
                          <li>Consectetur adipiscing elit</li>
                          <li>Integer molestie lorem at massa</li>
                          <li>Facilisis in pretium nisl aliquet</li>
                          <li>Nulla volutpat aliquam velit
                            <ul>
                              <li>Phasellus iaculis neque</li>
                              <li>Purus sodales ultricies</li>
                              <li>Vestibulum laoreet porttitor sem</li>
                              <li>Ac tristique libero volutpat at</li>
                            </ul>
                          </li>
                          <li>Faucibus porta lacus fringilla vel</li>
                          <li>Aenean sit amet erat nunc</li>
                          <li>Eget porttitor lorem</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* /Typography */}
            </div>	
          </div>
        </div>		
        {/* /Page Content */}
      </div>
      );
   }
}

export default Components;
