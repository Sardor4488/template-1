import axios from "axios";

export const testLessons = (teacher_id) => {
  axios
    .post(`teacher/test_lessons/${teacher_id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
