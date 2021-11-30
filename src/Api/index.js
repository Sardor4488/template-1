import axios from "axios";
import { LoadingOff, LoadingOn, UserData } from "../redux/Actions";

const token = localStorage.getItem("token");
const role = localStorage.getItem("role");
console.log(token);
const url = role == "mentee" ? "student/get-student" : "teacher/teacher-me";
const UserAuth = (setPath) => {
  // if (token !== null) {
  //   LoadingOn();
  //   const bodyParameters = {};
  //   axios
  //     .post(url, bodyParameters)
  //     .then((res) => {
  //       UserData(res.data);
  //       setPath(`/app/${role}/dashboard`);
  //       LoadingOff();
  //     })
  //     .catch((err) => {
  //       LoadingOff();
  //       console.log(err);
  //       // console.log(err.response.data);
  //       console.log(err.response.status);
  //       // console.log(err.response.headers);
  //       if (err.response.status == 401) {
  //         localStorage.clear();
  //         alert("Xavfsizlik yuzasidan login paro'lingizni qaytadan kiriting.");
  //       } else if (err.response.status == 403) {
  //         alert(
  //           "Bazada bunday nomli foydalanuvchi topilmadi. Iltimos ro'yxatdan o'tishingizni so'rab qolamiz."
  //         );
  //       } else if (err.response.status == 500) {
  //         alert("Serverda muammo bor.");
  //       } else {
  //         localStorage.clear();
  //         setPath(`/app/home`);
  //       }
  //     });
  // } else if (token == "" || token == null || token == undefined) {
  //   setPath("app/home");
  //   localStorage.clear();
  //   LoadingOff();
  // }
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
export { UserAuth, UpdateStudent };
