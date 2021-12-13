import axios from "axios";
import { ClearData } from "../redux/Actions";

const logout = (history) => {
  const token = localStorage.getItem("access_token");
  axios
    .post("logout", token)
    .then((res) => {
      if (res.data.success) {
        ClearData();
        history.push("/app/home");
        localStorage.clear();
        alert("Success");
      } else {
        alert("Texnik xatolik yuz berdi.");
      }
    })
    .catch((err) => {
      console.log(err);
      alert("Error", err);
    });
};

export { logout };
