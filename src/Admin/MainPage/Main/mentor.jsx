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
  const teacher_list = useSelector((state) => state?.Reducer?.teacher_list);

  const teacher_status_list = useSelector(
    (state) => state?.Reducer?.teacher_status_list
  );

  const filterData = (text) => {
    setSearch(text);
    const lists = { ...teacher_list };
    const filterList = lists?.filter(
      (v) =>
        v.first_name.toLowerCase().includes(text.toLowerCase()) ||
        v.last_name.toLowerCase().includes(text.toLowerCase())
    );
    setList(filterList);
  };

  const getCategoryTeacher = (id) => {
    localStorage.setItem("teacher_status_id", teacher_status_list[id].id);
    TeacherApi({ status_id: teacher_status_list[id].id });
  };

  const status_id = localStorage.getItem("teacher_status_id");

  useEffect(() => {
    if (status_id) {
      TeacherApi({ status_id });
    } else {
      TeacherApi();
    }
  }, [location.pathname]);

  const columns = [
    {
      title: "Ism Familiyasi",
      dataIndex: "first_name",
      render: (text, record, index) => (
        <h2 className="table-avatar">
          <Link
            to={`/admin/mentor-profile/${record.id}`}
            className="avatar avatar-sm mr-2"
          >
            <img
              className="avatar-img rounded-circle"
              src={
                record?.image
                  ? "https://teach-api.uz/storage/" + record?.image
                  : USER_1
              }
              alt="User Image"
            />
          </Link>
          <Link to={`/admin/mentor-profile/${record.id}`}>
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
        <h2 className="table-avatar">
          {" "}
          {
            teacher_status_list?.filter((v) => v.id == record.status_id)[0]
              .description
          }
        </h2>
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
              {teacher_status_list?.map((value, index) => {
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
              onChange={(e) => filterData(e.target.value)}
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
                      total: teacher_list?.length,
                      showTotal: (total, range) =>
                        `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                      showSizeChanger: true,
                      onShowSizeChange: onShowSizeChange,
                      itemRender: itemRender,
                    }}
                    style={{ overflowX: "auto" }}
                    columns={columns}
                    dataSource={teacher_list}
                    rowKey={(record) => record.phone_number}
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
