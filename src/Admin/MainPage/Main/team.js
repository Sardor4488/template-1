import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { USER } from "../../imagepath";
import FormGroup from "../../UI/input/MyInput";
import AvatarImageCropper from "react-avatar-image-cropper";
const Team = () => {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [imgmodal, setImgModal] = useState(false);

  const toggleModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const apply = (file) => {
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleImg = () => {
    setImgModal(true);
  };
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
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
                Qo'shish
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 ">
            <div className="card">
              <div className="card-body">
                <img
                  src={USER}
                  className=" mb-3 mx-auto"
                  style={{
                    height: "250px",
                    width: "250px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                  alt="rasm"
                />
                <h4 className="fw-bold text-center">Sardor Safarov</h4>
                <p className="text-center"> Frontend</p>
                <small
                  className="text-secondary"
                  style={{ lineHeight: "10px" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur possimus alias quos neque sunt id eaque placeat
                  ratione earum molestiae.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={modal} toggle={closeModal} className="modal-center">
        <ModalHeader toggle={closeModal}>A'zo qo'shish</ModalHeader>
        <ModalBody>
          {imgmodal && (
            <div className={`modalimg`} onClick={() => setImgModal(false)}>
              <div
                style={{
                  borderRadius: "15px",
                  width: "250px",
                  height: "250px",
                  margin: "auto",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <AvatarImageCropper
                  text={"Rasm yuklash"}
                  setImgModal={setImgModal}
                  apply={apply}
                  isBack={true}
                />
              </div>
            </div>
          )}
          <form>
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <div className="change-avatar">
                    <div className="profile-img">
                      <img
                        src={imagePreview ? imagePreview : USER}
                        alt="User Image"
                      />
                    </div>
                    <div className="upload-img">
                      <div className="change-photo-btn" onClick={handleImg}>
                        <span className="m-0">
                          <i className="fa fa-upload" />
                          Rasm yuklash
                        </span>
                      </div>
                      <small className="form-text text-muted">
                        Format:JPG, GIF yoki PNG. Maximum: 2MB
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <FormGroup label={"Ism"} className={"text-capitalize"} />
              </div>
              <div className="col-md-6">
                <FormGroup label={"Familiya"} className={"text-capitalize"} />
              </div>
              <div className="col-sm-12">
                <FormGroup label={"Kasbi"} className={"text-capitalize"} />
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label>Qisqacha malumot</label>
                  <textarea
                    className="form-control"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
              <div className="col-12 text-center">
                <button className="btn btn-primary">Saqlash</button>
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Team;
