import axios from "axios";
const token = localStorage.getItem("admin_token");
const config = {
  headers: {
    Authorization: "Bearer " + token,
  },
};
const logout = (history) => {
  axios
    .post("logout", token, config)
    .then((res) => {
      if (res.data.success) {
        history.push("/admin_login");
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
