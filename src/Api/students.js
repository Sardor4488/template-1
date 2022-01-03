import axios from "axios";

const admin_token = localStorage.getItem("admin_token");

//headersga token qo'shib jo'natish
const config = {
  headers: {
    Authorization: "Bearer " + admin_token,
  },
};

const get_students = async () => {
  try {
    const res = await axios.post("students-list", config);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export { get_students };
