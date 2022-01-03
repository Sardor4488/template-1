import axios from "axios";
const changePassword = async (id) => {
  try {
    const res = await axios.put("admin/change-password/" + id);
    if (res.status == 200) {
      console.log(res);
    }
  } catch (error) {
    console.log(error);
  }
};

export { changePassword };
