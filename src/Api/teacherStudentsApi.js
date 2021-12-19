import axios from 'axios'

const myStudents = async (teacher_id) => {
  try {
    const res = await axios.get(`teacher/my_students/${teacher_id}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
const testLessons = (teacher_id, setStudentData) => {
  axios
    .post(`teacher/test_lessons/${teacher_id}`)
    .then((res) => {
      setStudentData(res.data.lessons)
    })
    .catch((err) => {
      console.log(err)
    })
}

export { myStudents, testLessons }

// example-2
// axios
//   .post(`teacher/my_students/${teacher_id}`)
//   .then((res) => {
//     if (res.status) {
//       console.log(res);
//       return res.data;
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });
