import axios from 'axios'
import { LoadingOff, LoadingOn, UserData } from '../redux/Actions'
const token = localStorage.getItem('access_token')
const UpdateStudent = (data, id) => {
  if (data) {
    const config = {
      headers: {
        Authorization: 'Bearer' + ' ' + token,
        'Content-Type': 'multipart/form-data',
      },
    }
    axios
      .post(`student/update-student/${id}?_method=PUT`, data, config)
      .then((res) => {
        if (res.status == 200) {
          UserData(res.data)
          alert('Malumotlaringiz saqlandi')
        }
      })
      .catch((err) => {
        alert('Malumotlaringiz saqlanmadi')
        console.log(err)
      })
  } else {
    console.log("Malumotlaringiz to'liq kiritilmagan.")
  }
}

const UpdateTeacher = (data, id) => {
  LoadingOn()
  if (data) {
    const config = {
      headers: {
        Authorization: 'Bearer' + ' ' + token,
        'Content-Type': 'multipart/form-data',
      },
    }
    console.log(data)
    axios
      .post(`teacher/update-teacher/${id}?_method=PUT`, data, config)
      .then((res) => {
        console.log(res)
        LoadingOff()
      })
      .catch((err) => {
        alert('Saqlanmadi')
        console.log(err)
        LoadingOff()
      })
  } else {
    console.log("Malumotlaringiz to'liq kiritilmagan.")
  }
}

const TeacherFreeTime = (id) => {
  if (id) {
    axios
      .post(`teacher/free_time/${id}`)
      .then((res) => {})
      .catch((err) => {})
  } else {
    return false
  }
}
export { UpdateStudent, UpdateTeacher, TeacherFreeTime }
