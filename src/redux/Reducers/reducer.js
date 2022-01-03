import * as t from "../types";

const initialState = {
  loading: true,
  userdata: "",
  testLessonData: [],
  teacher_of_students: "",
  admin_data: "",
  lead_list: [],
  teacher_list: [],
  teacher_status_list: [],
  home_teacher_list: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.LOADINGOFF:
      return { ...state, loading: false };
    case t.LOADINGON:
      return { ...state, loading: true };
    case t.USERDATA:
      return { ...state, userdata: action.payload, loading: false };
    case t.CLEARDATA:
      return { ...state, userdata: "" };
    case t.TEST_LESSON_DATA:
      return { ...state, testLessonData: action.payload };
    case t.TEACHER_STUDENTS:
      return { ...state, teacher_of_students: action.payload };
    case t.ADMIN_DATA:
      return { ...state, admin_data: true };
    case t.LEAD_LIST:
      return { ...state, lead_list: action.payload };
    case t.HOME_TEACHER_LIST:
      return { ...state, home_teacher_list: action.payload };
    case t.TEACHER_LIST:
      return {
        ...state,
        teacher_list: action.payload.List,
        teacher_status_list: action.payload.Course_names,
      };
    default:
      return state;
  }
};

export default Reducer;
