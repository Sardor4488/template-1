import axios from "axios";

const myStudents = async (teacher_id) => {
  try {
    const res = await axios.get(`teacher/my_students/${teacher_id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { myStudents };

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
