import { dispatch } from "./store";
import * as t from "./types";

const LoadingOff = () => {
  const action = { type: t.LOADINGOFF };
  dispatch(action);
};
const LoadingOn = () => {
  const action = { type: t.LOADINGON };
  dispatch(action);
};
const UserData = (data) => {
  const action = { type: t.USERDATA, payload: data };
  dispatch(action);
};
const ClearData = () => {
  const action = { type: t.CLEARDATA };
  dispatch(action);
};
const TestLessonData = (data) => {
  const action = { type: t.TEST_LESSON_DATA, payload: data };
  dispatch(action);
};

const TeacherStudents = (data) => {
  const action = { type: t.TEACHER_STUDENTS, payload: data };
  dispatch(action);
};
const ADMINDATA = (data) => {
  dispatch({ type: t.ADMIN_DATA, payload: data });
};
const Lead_list = (data) => {
  const action = { type: t.LEAD_LIST, payload: data };
  dispatch(action);
};
const Teacher_list = (data) => {
  const action = { type: t.TEACHER_LIST, payload: data };
  dispatch(action);
};
const Home_Teacher_List = (data) => {
  dispatch({ type: t.HOME_TEACHER_LIST, payload: data });
};

export {
  LoadingOff,
  LoadingOn,
  UserData,
  ClearData,
  TestLessonData,
  TeacherStudents,
  ADMINDATA,
  Lead_list,
  Teacher_list,
  Home_Teacher_List,
};
