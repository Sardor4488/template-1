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
      setTeam(res.data.teams);
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

const edit_team = async (id, data, setModal) => {
  try {
    const res = await axios.put(`update-team/` + id, data, config);
    if (res.status == 200) {
      setModal(false);
      alert("O'zgartirildi!");
      console.log(res);
    }
  } catch (error) {
    console.log(error);
    alert("Saqlanmadi!");
  }
};

const delete_team = async (id) => {
  try {
    const res = await axios.delete("delete-team/" + id);
    if (res.status == 200) {
      alert("O'chirildi!");
      console.log(res);
    }
  } catch (error) {
    console.log(error);
    alert("O'chirib bo'lmadi!");
  }
};

export { add_team, get_team, edit_team, delete_team };
