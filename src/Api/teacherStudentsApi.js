import axios from "axios";
import { TestLessonData, LoadingOff, LoadingOn } from "../redux/Actions";

const myStudents = async (teacher_id) => {
  try {
    const res = await axios.get(`teacher/my_students/${teacher_id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const testLessons = (teacher_id) => {
  LoadingOn();
  axios
    .post(`teacher/test_lessons/${teacher_id}`)
    .then((res) => {
      if (res.status) {
        TestLessonData(res.data.lessons);
        LoadingOff();
      }
    })
    .catch((err) => {
      console.log(err);
      LoadingOff();
    });
};

export { myStudents, testLessons };

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
