import axios from "axios";

const config = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("admin_token"),
  },
};

const get_team = async (setTeam) => {
  try {
    const res = await axios.get("admin/get-teams", config);
    if (res.status == 200) {
      setTeam(res.data.teams)
    }
  } catch (error) {
    console.log(error);
  }
};

const add_team = async (data, setModal) => {
  try {
    const res = await axios.post("admin/add-team", data, config);
    if (res.status == 200) {
      console.log(res);
      get_team();
      setModal(false);
      alert("Malumotlar saqlandi!");
    }
  } catch (error) {
    console.log(error);
    alert("Malumotlar saqlanmadi!");
  }
};

export { add_team, get_team };
