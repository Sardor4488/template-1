import axios from "axios";
import { LoadingOff, LoadingOn } from "../redux/Actions";

const token = localStorage.getItem("token");
const role = localStorage.getItem("role");
const url = role == "mentee" ? "student/student-me" : "teacher/teacher-me";
const UserAuth = (setPath) => {
  if (token !== null || token !== undefined || token !== "") {
    LoadingOn();
    const bodyParameters = {};
    axios
      .post(url, bodyParameters)
      .then((res) => {
        UserData(res.data);
        setPath(`/app/${role}/dashboard`);
        LoadingOff();
      })
      .catch((err) => {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        setPath(`/app/home`);
        LoadingOff();
      });
  } else if (token == "" || token == null || token == undefined) {
    setPath("app/home");
    LoadingOff();
  }
};

export { UserAuth };
