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
const getHomeCategory = async () => {
  try {
    const res = await axios.get("home-categoyr");
    if (res.status) {
      return res.data;
    }
  } catch (error) {
    console.error(error);
  }
};
const getHomeTeam = async () => {
  try {
    const res = await axios.get("home-team");
    if (res.status) {
      return res.data;
    }
  } catch (error) {
    console.error(error);
  }
};
const getHomeTopTeachers = async () => {
  try {
    const res = await axios.get("home-top-teachers");
    if (res.status) {
      return res.data;
    }
  } catch (error) {
    console.error(error);
  }
};
const getHomeStatistcs = async () => {
  try {
    const res = await axios.get("home-statistics");
    if (res.status) {
      return res.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export {
  getCourses,
  getHomeCategory,
  getHomeTeam,
  getHomeTopTeachers,
  getHomeStatistcs,
};
