import axios from 'axios'
import { Lead_list } from '../../redux/Actions'
const admin_token = localStorage.getItem('admin_token')

const config = {
  headers: {
    Authorization: 'Bearer ' + admin_token,
  },
}

const getLead = () => {
  axios
    .get('admin/lead-list', config)
    .then((res) => {
      if (res.status == 200) {
        Lead_list(res.data?.leads_list)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
const addLead = (data) => {
  axios
    .post('create-student', data)
    .then((res) => {
      if (res.status == 200) {
        getLead()
      }
    })
    .catch((error) => {
      console.log(error)
    })
}
const commentLead = (data) => {
  axios
    .post('admin/add-comment-lead', data, config)
    .then((res) => {
      if (res.status == 200) {
        getLead()
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

export { getLead, addLead, commentLead }
