import axios from "axios";

export const addLead = (data) => {
  axios
    .post("create-student", data)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
