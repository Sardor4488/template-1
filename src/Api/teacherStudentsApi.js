import axios from "axios";
import {
  TestLessonData,
  LoadingOff,
  LoadingOn,
  TeacherStudents,
} from "../redux/Actions";

const teacherId = localStorage.getItem("teacher_id");

const myStudents = () => {
  LoadingOn();
  axios
    .post(`teacher/my_students/${teacherId}`)
    .then((res) => {
      if (res.status) {
        TeacherStudents(res.data.mystudent);
        LoadingOff();
      }
    })
    .catch((err) => {
      console.log(err);
      LoadingOff();
    });
};

const testLessons = () => {
  LoadingOn();
  axios
    .post(`teacher/test_lessons/${teacherId}`)
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
