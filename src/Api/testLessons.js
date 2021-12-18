import axios from "axios";

export const testLessons = (teacher_id, setStudentData) => {
  axios
    .post(`teacher/test_lessons/${teacher_id}`)
    .then((res) => {
      setStudentData(res.data.lessons);
    })
    .catch((err) => {
      console.log(err);
    });
};
