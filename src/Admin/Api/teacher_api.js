import axios from "axios";

export const TeacherApi = () => {
  axios
    .post("/admin/get-mentors")
    .then((res) => {
      if (res.status === 200) {
        console.log(res);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
