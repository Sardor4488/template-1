import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { USER } from "../../imagepath";
import FormGroup from "../../UI/input/MyInput";
import AvatarImageCropper from "react-avatar-image-cropper";
import { add_team, delete_team, edit_team, get_team } from "../../Api/team_api";
import { useEffect } from "react";

const Team = () => {
  const [modal, setModal] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState("");
  const [imgmodal, setImgModal] = useState(false);
  const [full_name, setFullName] = useState("");
  const [description, setDescripton] = useState("");
  const [job, setJob] = useState("");
  const [team, setTeam] = useState([]);
  const [editId, setEditId] = useState(0);

  console.log(team);

  const edit = (id) => {
    const clone = team.filter((v) => v.id == id)[0];
    setFullName(clone.full_name);
    setJob(clone.job);
    setDescripton(clone.description);
    setImagePreview(`https://teach-api.uz/storage/${clone.image}`);
    setEditId(id);

    setModal(true);
  };

  const save = (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("image", image);
    fd.append("full_name", full_name);
    fd.append("description", description);
    fd.append("job", job);

    edit_team(editId, fd, setModal);
  };

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
      setImgModal(false);
    };
    reader.readAsDataURL(file);
  };
  const handleImg = () => {
    setImgModal(true);
  };
  useEffect(() => {
    get_team(setTeam);
    return () => {
      get_team(setTeam);
    };
  }, []);

  const Add_Team = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("image", image);
    fd.append("full_name", full_name);
    fd.append("description", description);
    fd.append("job", job);
    add_team(fd, setModal);
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
        <div className="row justify-content-center">
          {team.length > 0 &&
            team.map((v, i) => (
              <div
                className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4"
                key={i}
              >
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-center align-items-center mb-3">
                      <img
                        src={
                          v.image
                            ? "https://teach-api.uz/storage/" + v.image
                            : USER
                        }
                        style={{
                          height: "200px",
                          width: "200px",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                        alt="rasm"
                      />
                    </div>
                    <h4 className="fw-bold text-center">{v.full_name}</h4>
                    <p className="text-center">{v.job}</p>
                    <small
                      className="text-secondary"
                      style={{ lineHeight: "10px" }}
                    >
                      {v.description}
                    </small>
                  </div>
                  <div className="d-flex flex-wrap justify-content-center align-items-center w-100 py-2">
                    <button
                      className="btn btn-success text-center"
                      onClick={() => edit(v.id)}
                    >
                      Taxrirlash
                    </button>
                    <button
                      onClick={() => delete_team(v.id)}
                      className="btn btn-danger text-center ms-2"
                    >
                      O'chirish
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
                <FormGroup
                  label={"Ism va Familiyasi"}
                  className={"text-capitalize"}
                  value={full_name}
                  setValue={setFullName}
                />
              </div>
              <div className="col-md-6">
                <FormGroup
                  label={"Kasbi"}
                  value={job}
                  setValue={setJob}
                  className={"text-capitalize"}
                />
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label>Qisqacha malumot</label>
                  <textarea
                    className="form-control"
                    cols="30"
                    rows="10"
                    value={description || ""}
                    onChange={(e) => setDescripton(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="col-12 text-center">
                {editId > 0 ? (
                  <button onClick={save} className="btn btn-success">
                    O'zgartirish
                  </button>
                ) : (
                  <button onClick={Add_Team} className="btn btn-primary">
                    Saqlash
                  </button>
                )}
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Team;
