
import React, { Component, useState } from 'react';
import {USER} from '../../constant/imagepath_home';
import Sidebar from "./sidebar"
import StickyBox from "react-sticky-box";
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';

const ProfileSettings =()=> {
  const [number, setNumber] = useState("");
      return ( 
        <div>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/app/index">My teacher</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Kabinet sozlamari</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Kabinet sozlamari</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              {/* Profile Sidebar */}
              <div className="col-md-5 col-lg-4 col-xl-3">
                {/* Sidebar */}
                <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar/></StickyBox>
                {/* /Sidebar */}
              </div>
              {/* /Profile Sidebar */}
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="card">
                  <div className="card-body">
                    {/* Profile Settings Form */}
                    <form>
                      <div className="row form-row">
                        <div className="col-12 col-md-12">
                          <div className="form-group">
                            <div className="change-avatar">
                              <div className="profile-img">
                                <img src={USER} alt="User Image" />
                              </div>
                              <div className="upload-img">
                                <div className="change-photo-btn">
                                  <span><i className="fa fa-upload" />Rasm yuklash</span>
                                  <input type="file" className="upload" />
                                </div>
                                <small className="form-text text-muted">Format:JPG, GIF yoki PNG. Maximum: 2MB</small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Ism</label>
                            <input type="text" className="form-control"   />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Familya</label>
                            <input type="text" className="form-control"   />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Tug'ilgan yilingiz</label>
                            <div className="cal-icon">
                              <input type="text" className="form-control datetimepicker"   />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Fan nomi</label>
                            <select className="form-control select">
                              <option>Ingiliz tili</option>
                              <option>Rus tili</option>
                              <option>Koreys tili</option>
                              <option>Matematika</option>
                              <option>Fizika</option>
                              
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>E-mail </label>
                            <input type="email" className="form-control"  />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Telefon raqam</label>
                            <PhoneInput
                        international
                        // countryCallingCodeEditable={false}
                        defaultCountry="UZ"
                        value={number}
                        className=""
                        onChange={setNumber}
                      />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Telegram akkauntingiz yoki raqamingizni kiriting</label>
                            <input type="text" className="form-control"   />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Resyume yuklash</label>
                            <label htmlFor="resumeInput" className="form-control">{}</label>
                            <input type="file" id="resumeInput" className="hidden d-none form-control"   />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                        <div className="filter-widget">
                      {/* SAFAROV  */}
                      <h4>Qaysi tillarda dars o'ta olasiz?</h4>
                     <div className="d-flex flex-wrap">
                     <div className="chackbox-with">
                        <label className="custom_check w-100">
                          <input type="checkbox" name="select_specialist" defaultChecked />
                          <span className="checkmark" /> O'zbek tili
                        </label>
                      </div>
                      <div className="chackbox-with">
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist"   />
                          <span className="checkmark" /> Ingiliz tili
                        </label>
                      </div>
                      <div className="chackbox-with">
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> Rus tili
                        </label>
                      </div>
                      <div className="chackbox-with">
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> Turk tili
                        </label>
                      </div>
                      <div className="chackbox-with">
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> Koreys tili
                        </label>
                      </div>
                      <div className="chackbox-with">
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> Nemis tili
                        </label>
                      </div>
                     </div>
                    </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Bir soat darsingiz uchun necha pul olmoqchisiz (iltimos <Link to="#">Narxlar bo'yicha kelishuv</Link> bilan tanishgan holda o'zizga mos narx kiriting)</label>
                             <input type="text"  className="form-control"   />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label className="w-75">O’quvchilar sizni tanlashlari uchun o’zingizning dars o’tish uslubingiz haqida to’liqroq ma’lumot bering. Sifatli e’lon sifatli mijozlarni chaqiradi.</label>
                            <textarea type="text" className="form-control"   />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Ayni damda turar joyingiz</label>
                            <input type="text" className="form-control"   />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Doyimiy turar joyingiz</label>
                            <input type="text" className="form-control"  />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Tajriba</label>
                            <input type="text" className="form-control"   />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Mamlakat</label>
                            <input type="text" className="form-control" defaultValue="Uzbekistan" />
                          </div>
                        </div>
                      </div>
                      <div className="submit-section">
                        <button type="submit" className="btn btn-primary submit-btn">Saqlash</button>
                      </div>
                    </form>
                    {/* /Profile Settings Form */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>		
        {/* /Page Content */}
      </div>
      );
   }

export default ProfileSettings;
