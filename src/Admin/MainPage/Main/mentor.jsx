import React, { useEffect, useState } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import "../antdstyle.css";
import { Link, useLocation } from "react-router-dom";
import { TeacherApi } from "../../Api/teacherApi";
import { useSelector } from "react-redux";
import { USER_1 } from "../../imagepath";

const Clients = () => {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const data = useSelector((state) => state?.Reducer?.teacher_list); //[List...] && [Statuses_list...]

  const filterData = (e) => {
    setSearch(e.target.value);
    const clone = { ...data };

    if (search) {
      clone?.List?.filter((v) =>
        v.last_name.toLowerCase().includes(search.toLowerCase())
      );
      console.log(clone);
    }
  };

  useEffect(() => {
    TeacherApi();
  }, [location.pathname]);

  const getCategoryTeacher = (id) => {
    TeacherApi({ status_id: data?.Statuses_list[id].id });
  };

  // birth_date: null
  // certificate: null
  // country: null
  // course_id: null
  // course_name: null
  // created_at: null
  // description: null
  // experience: null
  // id: null
  // image: null
  // language: null
  // loyalty: null
  // offert_price: null
  // price: null
  // rating: null
  // region: null
  // resume: null
  // telegram_number: null
  // updated_at: null
  // user_id: null
  // email: "higudsdsogsfshggihhdhghi@gmail.com"
  // role: "mentor"
  // first_name: "Mentor"
  // last_name: "Mentor"
  // phone_number: "+998996404777"
  // status_id: "8"

  const columns = [
    {
      title: "Ism Familiyasi",
      dataIndex: "first_name",
      render: (text, record, index) => (
        <h2 className="table-avatar">
          <Link
            to={`/admin/mentor-profile/${index}`}
            className="avatar avatar-sm mr-2"
          >
            <img
              className="avatar-img rounded-circle"
              src={
                record?.image
                  ? "https://teach-api.uz/teach-api/public/storage/" +
                    record?.image
                  : USER_1
              }
              alt="User Image"
            />
          </Link>
          <Link to={`/admin/mentor-profile/${index}`}>
            {record.first_name} {record.last_name}
          </Link>
        </h2>
      ),
      sorter: (a, b) => a.first_name.length - b.first_name.length,
    },
    {
      title: "Telefon Raqami",
      dataIndex: "phone_number",
      render: (text, record, index) => (
        <h2 className="table-avatar">{record.phone_number}</h2>
      ),
      sorter: (a, b) => a.phone_number.length - b.phone_number.length,
    },
    {
      title: "E-mail",
      dataIndex: "email",
      render: (text, record, index) => (
        <Link to={`/admin/mentor-profile/${index}`}>{record.email}</Link>
      ),
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "Reg vaqti",
      dataIndex: "created_at",
      render: (text, record) => (
        <span>
          <small>
            {text?.slice(0, 10)} <br /> {text?.slice(11, 19)}
          </small>
        </span>
      ),
      sorter: (a, b) => a.created_at.length - b.created_at.length,
    },
    {
      title: "Account Status",
      dataIndex: "created_at",
      render: (text, record, index) => (
        <h2 className="table-avatar">{record.status_id}</h2>
      ),
      sorter: (a, b) => a.status_id.length - b.status_id.length,
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">List of Mentor</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/admin/index">Dashboard</Link>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Users</a>
                </li>
                <li className="breadcrumb-item active">Mentor</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-sm-6 mb-3">
            <select
              onChange={(e) => getCategoryTeacher(e.target.value)}
              className="form-control"
            >
              {data?.Statuses_list?.map((value, index) => {
                return (
                  <option key={value.id} value={index}>
                    {value.description}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-sm-6 mb-3">
            <input
              value={search}
              onChange={filterData}
              className="form-control"
              placeholder="...search"
              type="text"
            />
          </div>
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
                      onShowSizeChange: onShowSizeChange,
                      itemRender: itemRender,
                    }}
                    style={{ overflowX: "auto" }}
                    columns={columns}
                    dataSource={data?.List}
                    rowKey={(record) => record.email}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
