import React, { Component } from "react";
// import { Helmet } from "react-helmet";
  import Sidebar from "./sidebar";
  import { Modal, ModalHeader, ModalBody } from "reactstrap";
  import StickyBox from "react-sticky-box";
  import { Link } from "react-router-dom";

class ScheduleTiming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isnewmodal: false,
      iseditModal: false,
      addnewtimeslot: [],
      edittimeslot: ["placeholder", "placeholder"],
    };
  }
  
  render() {
   
    return (
        <div>
          <span>delete</span>
        </div>
    );
  }
}

export default ScheduleTiming;
