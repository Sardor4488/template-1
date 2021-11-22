import axios from "axios";
import { LoadingOff, LoadingOn } from "../redux/Actions";

const token = localStorage.getItem("token");
const role = localStorage.getItem("role");
const url = role == "mentee" ? "student/student-me" : "teacher/teacher-me";
const UserAuth = (setPath) => {
  if (token) {
    LoadingOn();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const bodyParameters = {};
    axios
      .post(url, bodyParameters, config)
      .then((res) => {
        UserData(res.data);
        setPath(`/app/${role}/dashboard`);
        LoadingOff();
      })
      .catch((err) => {
        console.log(err.message);
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setPath(`/app/home`);
        LoadingOff();
      });
  } else if (token == "" || token == null || token == undefined) {
    setPath("app/home");
    LoadingOff();
  }
};

export { UserAuth };
