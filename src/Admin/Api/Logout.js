import axios from "axios";

const logout = (history) => {
  const token = localStorage.getItem("admin_token");
  axios
    .post("logout", token)
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
