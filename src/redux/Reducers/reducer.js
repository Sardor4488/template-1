import * as t from "../types";

const initialState = {
  loading: true,
  userdata: "",
  testLessonData: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.LOADINGOFF:
      return { ...state, loading: false };
    case t.LOADINGON:
      return { ...state, loading: true };
    case t.USERDATA:
      return { ...state, userdata: action.payload };
    case t.CLEARDATA:
      return { ...state, userdata: "" };
    case t.TEST_LESSON_DATA:
      return { ...state, testLessonData: action.payload };

    default:
      return state;
  }
};

export default Reducer;
