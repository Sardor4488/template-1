import axios from "axios";
import { Home_Teacher_List } from "../redux/Actions";

const getCourses = async () => {
  try {
    const res = await axios.get("courses");
    if (res.status == 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
const getHomeCategory = async (setCategories) => {
  try {
    const res = await axios.get("home-category");
    if (res.status == 200) {
      setCategories(res.data.categories);
    }
  } catch (error) {
    console.error(error);
  }
};
const getHomeTeam = async (setTeam) => {
  try {
    const res = await axios.get("home-team");
    if (res.status == 200) {
      setTeam(res.data.teams);
    }
  } catch (error) {
    console.error(error);
  }
};
const getHomeTopTeachers = async () => {
  try {
    const res = await axios.get("home-top-teachers");
    if (res.status == 200) {
      Home_Teacher_List(res.data.teachers);
    }
  } catch (error) {
    console.error(error);
  }
};
const getAllTeachers = async () => {
  try {
    const res = await axios.get("all-teachers");
    if (res.status == 200) {
      Home_Teacher_List(res.data.teachers);
    }
  } catch (error) {
    console.error(error);
  }
};
const getCategoryTeachers = async (id) => {
  try {
    const res = await axios.get(`categorySearchteacher/${id}`);
    if (res.status == 200) {
      Home_Teacher_List(res.data.teachers);
    }
  } catch (error) {
    console.error(error);
  }
};

const getHomeStatistcs = async (setStatistcs) => {
  try {
    const res = await axios.get("home-statistics");
    if (res.status == 200) {
      setStatistcs(res.data);
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
  getAllTeachers,
  getCategoryTeachers,
};
