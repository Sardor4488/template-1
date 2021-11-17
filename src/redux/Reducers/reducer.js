import * as t from "../types";
const initialState = {
  loading: false,
};

const Reducer = (state = initialState, action) => {
  switch (action) {
    case t.LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default Reducer;
