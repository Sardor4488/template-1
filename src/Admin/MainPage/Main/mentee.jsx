
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {  AVATAR_07, AVATAR_08, USER_3, USER_8, USER, USER_1, USER_5, USER_6, USER_9, USER_4, USER_7  } from "../../imagepath"
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../paginationfunction"
import "../antdstyle.css"

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data : [
        {id:1, image:USER_3, name:"Allen Davis", course:"Integrated Sum",member_since_date:"5 Jul 2019",member_since_time:"12.59 AM",earned :"$3500.00"},
        {id:2, image:USER_8, name:"John Gibbs", course:"Flow chart",member_since_date:"21 Apr 2018",member_since_time:"02.59 PM",earned :"$4100.00"},
        {id:3, image:USER, name:"Jonathan Doe", course:"Maths",member_since_date:"14 Jan 2019",member_since_time:"02.59 AM",earned :"$3100.00"},
        {id:4, image:USER_1,name:"Julie Pennington ",course:"Business Maths",member_since_date:"11 Jun 2019",member_since_time:"4.50 AM",earned :"$5000.00"},
        {id:5, image:USER_7,name:"Katharine Berthold", course:"Basic Calculation",member_since_date:"23 Mar 2019",member_since_time:"02.50 PM",earned :"$4000.00"},
        {id:6, image:USER_8,name:"Linda Tobin", course:"Math Grade II",member_since_date:"14 Dec 2018",member_since_time:"01.59 AM",earned :"$2000.00"},
        {id:7, image:USER_9,name:"Olga Barlow", course:"Maths",member_since_date:"15 Feb 2018",member_since_time:"03.59 AM",earned :"$3500.00"},
        {id:8, image:USER_4,name:"Patricia Manzi", course:"Flow chart",member_since_date:"24 Jan 2019",member_since_time:"02.59 PM",earned :"$3700.00"},
        {id:9, image:USER_7,name:"Paul Richard", course:"Math Grade II",member_since_date:"11 Jan 2019",member_since_time:"02.59 PM",earned :"$3000.00"},
        {id:10, image:USER_7,name:"Paul Richard", course:"Math Grade II",member_since_date:"11 Jan 2019",member_since_time:"02.59 PM",earned :"$3000.00"}
       ]
    };
  }
   render() {
    const{data} = this.state
    const columns = [
      
      {
        title: 'Mentor Name',
        dataIndex: 'name',
        render: (text, record) => (            
            <h2 className="table-avatar">
                <Link to="/admin/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={record.image} alt="User Image" /></Link>
        <Link to="/admin/profile">{text}</Link>
            </h2>
          ), 
          sorter: (a, b) => a.name.length - b.name.length,
      },
      {
        title: 'Course',
        dataIndex: 'course',
        sorter: (a, b) => a.course.length - b.course.length,
      },
    
      {
        title: 'Member Since',
        dataIndex: 'member_since_date',
        render: (text, record) => (            
        <span>{text}<br/><small>{record.member_since_time}</small></span>
          ), 
        sorter: (a, b) => a.member_since_date.length - b.member_since_date.length,
      },
      {
        title: 'Earned',
        dataIndex: 'earned',
        sorter: (a, b) => a.earned.length - b.earned.length,
      },
      {
        title: 'Account Status',
        dataIndex: 'status',
        render: (text, record) => (
            <div className="status-toggle d-flex">
                <input type="checkbox" id="status_6" className="check" defaultChecked />
                <label htmlFor="status_6" className="checktoggle">checkbox</label>
          </div>
          ),
      }, 
  
    ]
      return ( 
        <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
            <div className="col-sm-12">
                <h3 className="page-title">List of Mentee</h3>
                <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/admin/index">Dashboard</Link></li>
                <li className="breadcrumb-item"><a href="">Users</a></li>
                <li className="breadcrumb-item active">Mentee</li>
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
                  <Table className="table-hover table-center mb-0"
                        pagination= { {total : data.length,
                          showTotal : (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          showSizeChanger : true,onShowSizeChange: onShowSizeChange ,itemRender : itemRender } }
                        style = {{overflowX : 'auto'}}
                        columns={columns}                 
                        // bordered
                        dataSource={data}
                        rowKey={record => record.id}
                        onChange={this.handleTableChange}
                      />
                    
                  </div>
                </div>
              </div>
            </div>			
          </div>
        </div>			
      </div> 
      );
   }
}

export default Clients;
