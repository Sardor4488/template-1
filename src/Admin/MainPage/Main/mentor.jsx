import React, { useEffect } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import "../antdstyle.css";
import { Link, useLocation } from "react-router-dom";
import { TeacherApi } from "../../Api/teacher_api";

const Clients = () => {
  const location = useLocation();

  useEffect(() => {
    TeacherApi();
  }, [location.pathname]);

  const columns = [
    {
      title: "Mentor Name",
      dataIndex: "name",
      render: (text, record, index) => (
        <h2 className="table-avatar">
          <Link
            to={`/admin/mentor-profile/${index}`}
            className="avatar avatar-sm mr-2"
          >
            <img
              className="avatar-img rounded-circle"
              src={record.image}
              alt="User Image"
            />
          </Link>
          <Link to={`/admin/mentor-profile/${index}`}>{text}</Link>
        </h2>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Course",
      dataIndex: "course",
      sorter: (a, b) => a.course.length - b.course.length,
    },

    {
      title: "Member Since",
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
      title: "Earned",
      dataIndex: "earned",
      sorter: (a, b) => a.earned.length - b.earned.length,
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
          <label htmlFor="status_6" className="checktoggle">
            checkbox
          </label>
        </div>
      ),
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
                  <a href="">Users</a>
                </li>
                <li className="breadcrumb-item active">Mentor</li>
              </ul>
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
                      onShowSizeChange: onShowSizeChange,
                      itemRender: itemRender,
                    }}
                    style={{ overflowX: "auto" }}
                    columns={columns}
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
  );
};

export default Clients;
