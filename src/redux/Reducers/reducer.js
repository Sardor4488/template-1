import * as t from "../types";

const initialState = {
  loading: true,
  userdata: "",
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

    default:
      return state;
  }
};

export default Reducer;
