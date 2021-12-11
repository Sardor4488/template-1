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
  const fd = new FormData();
  if (data) {
    fd.append("email", data.email);
    fd.append("first_name", data.first_name);
    fd.append("last_name", data.last_name);
    fd.append("phone_number", data.phone_number);
    fd.append("telegram_number", data.telegram_number);
    fd.append("course_id", data.course_id);
    fd.append("price", data.price);
    fd.append("description", data.description);
    fd.append("image", data.image);
    fd.append("experience", data.experience);
    fd.append("language", data.language);
    fd.append("country", data.country);
    fd.append("region", data.region);
    fd.append("resume", data.resume);
    fd.append("birth_date", data.birth_date);
    fd.append("offert_price", data.offert_price);
    const config = {
      headers: {
        Authorization: "Bearer" + " " + token,
        "Content-Type": "multipart/form-data",
      },
    };
    console.log(data);
    axios
      .post(`teacher/update-teacher/${id}?_method=PUT`, fd, config)
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
