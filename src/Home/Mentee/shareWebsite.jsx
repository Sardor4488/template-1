
import React, { Component, useState } from 'react';
// import { Helmet } from "react-helmet";

 import Sidebar from "./sidebar"
import StickyBox from "react-sticky-box";
import { Link } from 'react-router-dom';
import { FormGroup, Input } from 'reactstrap';
 import PhoneInput from 'react-phone-number-input';

const Share  = () =>  {
  const [phoneNumber, setPhoneNumber] = useState("")
      return ( 
        <div>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-8 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/app/index">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Favourites</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Do'stimni taklif qilish</h2>
              </div>
             
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row ">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                {/* Sidebar */}
                <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar/></StickyBox>
                 {/* /Sidebar */}
              </div>
              <div className="col-12 col-md-7 col-lg-8 col-xl-9">
                    <div className="card">
                      {/* <div className="card-header">
                        <h4 className="card-title">Bottom line justified</h4>
                      </div> */}
                      <div className="card-body">
                        <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                          <li className="nav-item"><a className="nav-link active" href="#bottom-justified-tab1" data-toggle="tab">Do'stlarni taklif qilish</a></li>
                          <li className="nav-item"><a className="nav-link" href="#bottom-justified-tab2" data-toggle="tab">Do'stlarim</a></li>
                         </ul>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="bottom-justified-tab1">
                            <div>
                              <h3>
                              Ham pul ishlang, ham bilim ulashing! 
                              </h3>
                              <p>
                              MyTeacher platformasiga andriod mobil ilova orqali siz o'z yaqinlaringizni taklif qilgan holda, qo'shimcha daromad olishingiz (siz to'plagan pul kartangizga o'tqazib beriladi), yoki yig'gan pullaringizni Myteacherda darslar sotib olish uchun ishlatishingiz mumkin. Xo'sh, bu qanday ishlaydi? <br /> <br />

                                <span className="py-4">
                                1. Siz yaqin kishingizdan MyTeacher ilovasni yuklab olishlarini so'raysiz; <br />
                                2. Ushbu bo'limda do'stingizning myteacherda ro'yxatdan o'tgan telefon raqamini kirgizasiz; <br />
                                3. TAKLIF QILISH tugmasini bosasiz. <br />

                               <br /> </span>
                        Shundan so'ng do'stingiz, o'z telefonidagi MyTeacher ilovasi orqali kelgan taklifnomani qabul qiladi va sizning hisobingizga 1000 so'm yoziladi. Siz o'z ishlab topgan pullaringizni 50ming so'mga yetganda kartangizga yechib olishingiz, uni jamg'arishingiz, yoki bo'lmasa MyTeacherdan darslar sotib olish uchun ishlatishingiz mumkin bo'ladi.
                              </p>
                            </div>
                           <FormGroup className="d-flex justify-content-center align-items-center">
                            <PhoneInput
                             international
                             defaultCountry="UZ"
                            value={phoneNumber}
                            onChange={setPhoneNumber}
                            />
                             
                             <button type="submit" className="btn ms-2 share-friend-button btn-primary">Yuborish</button>
                           </FormGroup>
                          </div>
                          <div className="tab-pane" id="bottom-justified-tab2">
                            Tab content 2
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
      

      );
}

export default Share;
