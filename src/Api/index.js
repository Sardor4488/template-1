import axios from "axios";

const RegisterStudent =
  "https://teach-api.uz/teach-api/public/api/student-register";
export const registerStudents = (obj) => {
  axios.post(RegisterStudent, obj);
};
export const registerTeacher = (obj) => {
  axios.post(RegisterStudent, obj);
};
export const loginMyteacher = (obj) => {
  axios.post(RegisterStudent, obj);
};
