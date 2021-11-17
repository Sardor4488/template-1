import * as t from "../types";

const initialState = {
    loading: false,
    author: "",
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case t.LOADING:
            return {...state, loading: action.payload};
        case t.AUTHOR:
            console.log("keldi");
            return {...state, author: action.payload};
        default:
            return state;
    }
};

export default Reducer;
