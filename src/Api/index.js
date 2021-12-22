import axios from "axios";
import { LoadingOff, LoadingOn, UserData } from "../redux/Actions";
const token = localStorage.getItem("access_token");
const role = localStorage.getItem("role");
const id = localStorage.getItem("user_id");
const url = role == "mentee" ? "student/get-student" : "teacher/teacher-me";

const UserAuth = (setPath, history) => {
  if (token !== null) {
    LoadingOn();
    axios
      .post(url + "/" + id, {})
      .then((res) => {
        if (res.status == 200) {
          UserData(res.data);
          setPath(`/app/${role}/dashboard`);
          localStorage.setItem("teacher_id", res?.data?.user?.teacher_id);
          LoadingOff();
        }
      })
      .catch((err) => {
        LoadingOff();
        console.log(err);
        if (err.response.status == 401) {
          history.push("/login");
        } else if (err.response.status == 403) {
          history.push("/register");
          localStorage.clear();
        } else if (err.response.status == 500) {
          console.log(err);
          setPath(`/app/home`);
          // history.push('/app/home')
        } else {
          setPath(`/app/home`);
        }
      });
  } else if (token == "" || token == null || token == undefined) {
    setPath("app/home");
    LoadingOff();
  }
};

export { UserAuth };
