import axios from 'axios'
import { LoadingOff, LoadingOn, UserData } from '../redux/Actions'

const login = (data, history) => {
  LoadingOn()
  axios
    .post('login', data)
    .then((res) => {
      if (res.status) {
        UserData(res.data)
        localStorage.setItem('access_token', res.data.token)
        localStorage.setItem('role', res.data.user.role)
        localStorage.setItem('user_id', res.data.user.id)
        localStorage.setItem('teacher_id', res?.data?.user?.teacher_id)
        history.push(`app/${res.data.user.role}/dashboard`)
        LoadingOff()
      }
    })
    .catch((err) => {
      if (err.response.status == 401) {
        console.log(err.response.status)
      }
      console.log(err)
      LoadingOff()
    })
}

export { login }
