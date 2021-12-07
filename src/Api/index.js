import axios from "axios";
import { LoadingOff, LoadingOn, UserData } from "../redux/Actions";
const token = localStorage.getItem("token");
const role = localStorage.getItem("role");
const url = role == "mentee" ? "student/get-student" : "teacher/teacher-me/2";
const UserAuth = (setPath) => {
  console.log(token);
  if (token !== null) {
    LoadingOn();
    const bodyParameters = {};
    axios
      .post(url, bodyParameters)
      .then((res) => {
        console.log(res.data.student);
        // UserData(res.data);
        // setPath(`/app/${role}/dashboard`);
        LoadingOff();
      })
      .catch((err) => {
        LoadingOff();
        console.log(err);
        // console.log(err.response.data);
        console.log(err.response.status);
        // console.log(err.response.headers);
        if (err.response.status == 401) {
          // localStorage.clear();
          // alert("Xavfsizlik yuzasidan login paro'lingizni qaytadan kiriting.");
          setPath("/login");
        } else if (err.response.status == 500) {
          // alert("Serverda muammo bor.");
          // localStorage.clear();
        } else {
          // localStorage.clear();
          setPath(`/app/home`);
        }
      });
  } else if (token == "" || token == null || token == undefined) {
    setPath("app/home");
    // localStorage.clear();
    LoadingOff();
  }
};

const UpdateStudent = (data, id) => {
  console.log(data);
  axios
    .put("student/update-student/" + id, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  // UserData(res.data);
};

const UpdateTeacher = (data, id) => {
  const config = {
    headers: {
      "Content-type": "multipart/form-data",
      Authorization: "Bearer" + token,
    },
  };
  axios
    .post("teacher/update-teacher/2?_method=PUT", data, config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  // UserData(res.data);
};
export { UserAuth, UpdateStudent, UpdateTeacher };
