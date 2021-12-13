import axios from "axios";
import { LoadingOff, LoadingOn, UserData } from "../redux/Actions";
const token = localStorage.getItem("access_token");
const id = localStorage.getItem("user_id");
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
  if (data) {
    const config = {
      headers: {
        Authorization: "Bearer" + " " + token,
        "Content-Type": "multipart/form-data",
      },
    };
    console.log(data);
    axios
      .post(`teacher/update-teacher/${id}?_method=PUT`, data, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    return false;
  }
};

export { UpdateStudent, UpdateTeacher };
