import axios from "axios";

const RegisterStudent =
  "http://teach-api.uz/teach-api/public/api/create-student";
const RegisteTeacher =
  "http://teach-api.uz/teach-api/public/api/create-teacher";
const Login = "http://teach-api.uz/teach-api/public/api/login";
export const registerStudents = (obj, setLoading) => {
  setLoading(true);
  axios
    .post(RegisterStudent, obj)
    .then((res) => {
      console.log(res);
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
    });
};
export const registerTeacher = (obj, setLoading) => {
  setLoading(true);
  axios
    .post(RegisteTeacher, obj)
    .then((res) => {
      console.log(res);
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
    });
};
export const loginMyteacher = (obj, setLoading) => {
  setLoading(true);
  axios
    .post(Login, obj)
    .then((res) => {
      console.log(res.data.access_token);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};
