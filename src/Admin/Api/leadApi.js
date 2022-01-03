import axios from "axios";
import { Lead_list } from "../../redux/Actions";
const admin_token = localStorage.getItem("admin_token");

//headersga token qo'shib jo'natish
const config = {
  headers: {
    Authorization: "Bearer " + admin_token,
  },
};

const getLead = () => {
  axios
    .get("admin/lead-list", config)
    .then((res) => {
      if (res.status == 200) {
        Lead_list(res.data?.leads_list);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const commentLead = (data) => {
  axios
    .post("admin/add-comment-user", data, config)
    .then((res) => {
      if (res.status == 200) {
        getLead();
        console.log(res);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const addLead = (data) => {
  axios
    .post("create-student", data)
    .then((res) => {
      if (res.status == 200) {
        getLead();
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteLead = async (id) => {
  try {
    const res = await axios.delete("delete_lead/" + id);
    if (res.status == 200) {
      getLead();
    }
  } catch (error) {
    console.log(error);
  }
};

export { getLead, addLead, commentLead, deleteLead };
