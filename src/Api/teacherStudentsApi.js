import axios from 'axios'
import {
  TestLessonData,
  LoadingOff,
  LoadingOn,
  TeacherStudents,
} from '../redux/Actions'

const teacherId = localStorage.getItem('teacher_id')

const myStudents = () => {
  axios
    .post(`teacher/my_students/${teacherId}`)
    .then((res) => {
      if (res.status == 200) {
        TeacherStudents(res.data.mystudent)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

const testLessons = () => {
  axios
    .post(`teacher/test_lessons/${teacherId}`)
    .then((res) => {
      if (res.status == 200) {
        TestLessonData(res.data.lessons)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

export { myStudents, testLessons }
