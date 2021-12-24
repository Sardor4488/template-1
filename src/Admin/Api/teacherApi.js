import axios from "axios";
import { Teacher_list } from "../../redux/Actions";

const admin_token = localStorage.getItem("admin_token");

//headersga token qo'shib jo'natish
const config = {
  headers: {
    Authorization: "Bearer " + admin_token,
  },
};

export const TeacherApi = (data = {}) => {
  // console.log(data);
  axios
    .post("admin/get-mentors", data, config)
    .then((res) => {
      if (res.status == 200) {
        Teacher_list(res.data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
