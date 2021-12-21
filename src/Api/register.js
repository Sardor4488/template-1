import axios from 'axios'
import { LoadingOff, LoadingOn, UserData } from '../redux/Actions'

const register = (data, history, url) => {
  if (data.password.length < 8 && data.password_confirmation.length < 8) {
    alert("Parolingiz uzunligi 8 ta belgidan kam bo'lmasligi lozim.")
  } else if (data.password !== data.password_confirmation) {
    alert('Parrollaringiz bir biriga mos kelmayabdi')
  } else if (data.phone_number?.length > 13) {
    alert('Telefon raqamingiz 13 ta belgidan oshib ketdi.')
  } else {
    LoadingOn()
    axios
      .post(url, data)
      .then((res) => {
        if (res.status == 200) {
          UserData(res.data)
          localStorage.setItem('access_token', res.data.token)
          localStorage.setItem('role', res.data.user.role)
          localStorage.setItem('user_id', res.data.user.id)
          history.push(`app/${res.data.user.role}/dashboard`)
          LoadingOff()
        }
      })
      .catch((err) => {
        console.log(err)
        localStorage.clear()
        LoadingOff()
      })
  }
}

export { register }
