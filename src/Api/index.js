import axios from "axios";
import * as t from "../redux/types"
import {dispatch} from "../redux/store";
const BaseUrl = "http://teach-api.uz/teach-api/public/api/";
export const registerStudents = (data) => {
    axios
        .post(BaseUrl + "create-student", data)
        .then((res) => {
            console.log(res.data.access_token);
            localStorage.setItem('token', res.data.access_token);
        })
        .catch((err) => {
            console.log(err);
        });
};
export const registerTeacher = (data) => {
    axios
        .post(BaseUrl + "create-teacher", data)
        .then((res) => {
            localStorage.setItem("token", res.data.access_token);
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};
export const loginMyteacher = (data) => {
    axios
        .post(BaseUrl + "login", data)
        .then((res) => {
            console.log(res.data.access_token);
            localStorage.setItem('token', res.data.access_token)
        })
        .catch((err) => {
            console.log(err);
        });
};

// const token = localStorage.getItem('token')
// axios.interceptors.request.use(
//     config => {
//         config.headers.autharization = `Bearer ${token}`;
//         return config;
//     }, error => {
//         return Promise.reject(error);
//     }
// )
