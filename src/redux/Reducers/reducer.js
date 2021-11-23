import * as t from "../types";

const initialState = {
  loading: true,
  userdata: "",
  role: "",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.LOADINGOFF:
      return { ...state, loading: false };
    case t.LOADINGON:
      return { ...state, loading: true };
    case t.USERDATA:
      console.log("userData");
      return { ...state, userdata: action.payload, loading: false };
    case t.ROLE:
      return { ...state, role: action.payload };
    default:
      return state;
  }
};

export default Reducer;
