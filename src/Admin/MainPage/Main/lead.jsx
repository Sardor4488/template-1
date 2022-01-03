import React, { useEffect, useState } from "react";
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
import { addLead, getLead } from "../../Api/leadApi";
import { useSelector } from "react-redux";

const Lead = () => {
  const data = useSelector((state) => state.Reducer.lead_list);

  const columns = [
    {
      title: "Ism Familiyasi",
      dataIndex: "first_name",
      render: (text, record, index) => (
        <h2 className="table-avatar">
          <Link
            to={`/admin/leadProfile/${record.id}`}
            className="avatar avatar-sm mr-2"
          >
            <img
              className="avatar-img rounded-circle"
              src={
                record?.image
                  ? `https://teach-api.uz/storage/${record.image}`
                  : USER
              }
              alt="User Image"
            />
          </Link>
          <Link to={`/admin/leadProfile/${record.id}`}>
            {record.first_name} {record.last_name}
          </Link>
        </h2>
      ),
      sorter: (a, b) => a.first_name.length - b.first_name.length,
    },
    {
      title: "Telefon raqam",
      dataIndex: "phone_number",
      sorter: (a, b) => a.phone_number.length - b.phone_number.length,
    },
    {
      title: "E-mail",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "Reg vaqti",
      dataIndex: "created_at",
      render: (text, record) => (
        <span>
          <small>
            {text.slice(0, 10)} <br /> {text.slice(11, 19)}
          </small>
        </span>
      ),
      sorter: (a, b) => a.created_at.length - b.created_at.length,
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
          <select
            className="select form-control"
            defaultValue={"AAA"}
            defaultChecked
          >
            <option>Qayta qo'ng'iroq</option>
            <option>Ulanib bo'lmadi</option>
            <option>Sifatsiz Lead</option>
          </select>
        </div>
      ),
    },
  ];

  useEffect(() => {
    getLead();
  }, [location.pathname]);

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
                        showTotal: (total) => (
                          <p className="mt-1">Total: {total}</p>
                        ),
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      style={{ overflowX: "auto" }}
                      columns={columns}
                      bordered
                      dataSource={data}
                      rowKey={(record) => record.id}
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
