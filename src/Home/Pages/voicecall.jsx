
import React, { Component } from 'react';
import {USER,USER_2} from '../../constant/imagepath_home';
import { Link } from 'react-router-dom';

class Voicecall extends Component {
   render() {
      return ( 
        <div className="content">
        <div className="container-fluid">
          {/* Call Wrapper */}
          <div className="call-wrapper">
            <div className="call-main-row">
              <div className="call-main-wrapper">
                <div className="call-view">
                  <div className="call-window">
                    {/* Call Header */}
                    <div className="fixed-header">
                      <div className="navbar">
                        <div className="user-details mr-auto">
                          <div className="float-left user-img">
                            <a className="avatar avatar-sm mr-2" href="/app/Mentee/mentor-profile" title="Jonathan Doe">
                              <img src={USER} alt="User Image" className="rounded-circle" />
                              <span className="status online" />
                            </a>
                          </div>
                          <div className="user-info float-left">
                            <Link to="/app/Mentee/mentor-profile"><span>Jonathan Doe</span></Link>
                            <span className="last-seen">Online</span>
                          </div>
                        </div>
                        <ul className="nav float-right custom-menu">
                          <li className="nav-item dropdown dropdown-action">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-cog" /></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="" className="dropdown-item">Settings</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Call Header */}
                    {/* Call Contents */}
                    <div className="call-contents">
                      <div className="call-content-wrap">
                        <div className="voice-call-avatar">
                          <img src={USER_2} alt="User Image" className="call-avatar" />
                          <span className="username">Jonathan Doe</span>
                          <span className="call-timing-count">00:59</span>
                        </div>
                        <div className="call-users">
                          <ul>
                            <li>
                              <a href="#">
                                <img src={USER} className="img-fluid" alt="User Image" />
                                <span className="call-mute"><i className="fa fa-microphone-slash" /></span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* /Call Contents */}
                    {/* Call Footer */}
                    <div className="call-footer">
                      <div className="call-icons">
                        <ul className="call-items">
                          <li className="call-item">
                            <a href="#" title="Enable Video" data-placement="top" data-toggle="tooltip">
                              <i className="fas fa-video camera" />
                            </a>
                          </li>
                          <li className="call-item">
                            <a href="#" title="Mute" data-placement="top" data-toggle="tooltip">
                              <i className="fa fa-microphone microphone" />
                            </a>
                          </li>
                          <li className="call-item">
                            <a href="#" title="Add User" data-placement="top" data-toggle="tooltip">
                              <i className="fa fa-user-plus" />
                            </a>
                          </li>
                        </ul>
                        <div className="end-call">
                          <a href="">
                            <i className="material-icons">call_end</i>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* /Call Footer */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Call Wrapper */}
        </div>	
      </div>
      );
   }
}

export default Voicecall;
