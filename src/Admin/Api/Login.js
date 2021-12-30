import axios from "axios";
import { ADMINDATA } from "../../redux/Actions";

const Admin_login = (data, history) => {
  axios
    .post("login", data)
    .then((res) => {
      if (res.status == 200) {
        ADMINDATA(res.data);
        localStorage.setItem("admin_token", res.data.token);
        localStorage.setItem("admin_role", res.data.user.role);
        console.log(res);
        history.push("/admin/index");
        window.location.reload();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export { Admin_login };
