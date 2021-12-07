import axios from "axios";

const getCourses = async () => {
  try {
    const res = await axios.get("courses");
    if (res.status) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

  const getExperience = async () => {
    try {
      const res = await axios.get("courses");
      if (res.status) {
        return res.data;
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getJob = async () => {
    try {
      const res = await axios.get("courses");
      if (res.status) {
        return res.data;
      }
    } catch (error) {
      console.error(error);
    }
  };

  export { getCourses, getExperience , getJob};
