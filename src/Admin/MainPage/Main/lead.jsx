import React, { useState } from "react";
// import { Helmet } from "react-helmet";
import {
  AVATAR_07,
  AVATAR_08,
  USER_3,
  USER_8,
  USER,
  USER_1,
  USER_5,
  USER_6,
  USER_9,
  USER_4,
  USER_7,
} from "../../imagepath";
import { Link } from "react-router-dom";
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import "../antdstyle.css";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import FormGroup from "../../UI/input/MyInput";
import PhoneInput from "react-phone-number-input";
import { addLead } from "../../Api";

const Lead = () => {
  const data = [
    {
      id: 1,
      image: USER_3,
      name: "Allen Davis",
      course: "Integrated Sum",
      member_since_date: "5 Jul 2019",
      member_since_time: "12.59 AM",
      tel: "$3500.00",
    },
    {
      id: 2,
      image: USER_8,
      name: "John Gibbs",
      course: "Flow chart",
      member_since_date: "21 Apr 2018",
      member_since_time: "02.59 PM",
      tel: "$4100.00",
    },
    {
      id: 3,
      image: USER,
      name: "Jonathan Doe",
      course: "Maths",
      member_since_date: "14 Jan 2019",
      member_since_time: "02.59 AM",
      tel: "$3100.00",
    },
    {
      id: 4,
      image: USER_1,
      name: "Julie Pennington ",
      course: "Business Maths",
      member_since_date: "11 Jun 2019",
      member_since_time: "4.50 AM",
      tel: "$5000.00",
    },
    {
      id: 5,
      image: USER_7,
      name: "Katharine Berthold",
      course: "Basic Calculation",
      member_since_date: "23 Mar 2019",
      member_since_time: "02.50 PM",
      tel: "$4000.00",
    },
    {
      id: 6,
      image: USER_8,
      name: "Linda Tobin",
      course: "Math Grade II",
      member_since_date: "14 Dec 2018",
      member_since_time: "01.59 AM",
      tel: "$2000.00",
    },
    {
      id: 7,
      image: USER_9,
      name: "Olga Barlow",
      course: "Maths",
      member_since_date: "15 Feb 2018",
      member_since_time: "03.59 AM",
      tel: "$3500.00",
    },
    {
      id: 8,
      image: USER_4,
      name: "Patricia Manzi",
      course: "Flow chart",
      member_since_date: "24 Jan 2019",
      member_since_time: "02.59 PM",
      tel: "$3700.00",
    },
    {
      id: 9,
      image: USER_7,
      name: "Paul Richard",
      course: "Math Grade II",
      member_since_date: "11 Jan 2019",
      member_since_time: "02.59 PM",
      tel: "$3000.00",
    },
    {
      id: 10,
      image: USER_7,
      name: "Paul Richard",
      course: "Math Grade II",
      member_since_date: "11 Jan 2019",
      member_since_time: "02.59 PM",
      tel: "$3000.00",
    },
  ];
  const columns = [
    {
      title: "Ism Familiyasi",
      dataIndex: "name",
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link to="/admin/profile" className="avatar avatar-sm mr-2">
            <img
              className="avatar-img rounded-circle"
              src={record.image}
              alt="User Image"
            />
          </Link>
          <Link to="/admin/leadProfile">{text}</Link>
        </h2>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Telefon raqam",
      dataIndex: "tel",
      sorter: (a, b) => a.tel.length - b.tel.length,
    },
    {
      title: "E-mail",
      dataIndex: "course",
      sorter: (a, b) => a.course.length - b.course.length,
    },
    {
      title: "Reg vaqti",
      dataIndex: "member_since_date",
      render: (text, record) => (
        <span>
          {text}
          <br />
          <small>{record.member_since_time}</small>
        </span>
      ),
      sorter: (a, b) => a.member_since_date.length - b.member_since_date.length,
    },
    {
      title: "Account Status",
      dataIndex: "status",
      render: (text, record) => (
        <div className="status-toggle d-flex">
          <input
            type="checkbox"
            id="status_6"
            className="check"
            defaultChecked
          />
          <select className="select form-control">
            <option>Qayta qo'ng'iroq</option>
            <option>Ulanib bo'lmadi</option>
            <option>Sifatsiz Lead</option>
          </select>
        </div>
      ),
    },
  ];

  const [openModal, setOpenModal] = useState(false);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  // const [offert, setOffert] = useState(0);

  const toggleModal = () => {
    setOpenModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      first_name,
      last_name,
      email,
      phone_number,
      password,
      password_confirmation,
      offert: 1,
    };

    addLead(data);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row w-100">
              <div className="col-sm-12 col-md-6">
                <h3 className="page-title">Leadlar ro'yxati</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin/index">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="">Users</a>
                  </li>
                  <li className="breadcrumb-item active">Lead</li>
                </ul>
              </div>
              <div className="col-sm-12 col-md-6 d-flex justify-content-end align-items-center">
                <button className="btn btn-primary" onClick={toggleModal}>
                  Lead qo'shish
                </button>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <Table
                      className="table-hover table-center mb-0"
                      pagination={{
                        total: data.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        // onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      style={{ overflowX: "auto" }}
                      columns={columns}
                      // bordered
                      dataSource={data}
                      rowKey={(record) => record.id}
                      // onChange={handleTableChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={openModal} toggle={() => setOpenModal(false)} centered>
        <ModalHeader toggle={() => setOpenModal(false)}>
          Lead Qo'shish
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 col-md-6">
                <FormGroup
                  value={first_name}
                  setValue={setFirstName}
                  label={"Ism"}
                  type={"text"}
                  className={"text-capitalize"}
                />
              </div>
              <div className="col-12 col-md-6">
                <FormGroup
                  value={last_name}
                  setValue={setLastName}
                  label={"Familya"}
                  type={"text"}
                  className={"text-capitalize"}
                />
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label className="form-control-label">
                    Telefon raqamingiz
                  </label>
                  <PhoneInput
                    international
                    defaultCountry="UZ"
                    value={phone_number}
                    onChange={setPhoneNumber}
                  />
                </div>
              </div>
              <div className="col-12">
                <FormGroup
                  value={email}
                  setValue={setEmail}
                  label={"Email"}
                  type={"email"}
                />
              </div>
              <div className="col-12 col-md-6">
                <FormGroup
                  value={password}
                  setValue={setPassword}
                  label={"Parol"}
                  type={"password"}
                />
              </div>
              <div className="col-12 col-md-6">
                <FormGroup
                  value={password_confirmation}
                  setValue={setPasswordConfirmation}
                  label={"Parolni qayta kiriting"}
                  type={"password"}
                />
              </div>
              <div className="col-12 d-flex align-items-center justify-content-center">
                <button
                  onClick={() => setOpenModal(false)}
                  className={`btn btn-success px-2 py-1 ${
                    first_name === "" ||
                    last_name === "" ||
                    email === "" ||
                    phone_number === "" ||
                    password_confirmation === "" ||
                    password === ""
                      ? "disabled"
                      : ""
                  }`}
                  type="submit"
                >
                  Saqlash
                </button>
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Lead;
