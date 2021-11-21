import * as t from "../types";

const initialState = {
    loading: true,
    author: "",
    role:""
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case t.LOADING:
            return {...state, loading: action.payload};
        case t.AUTHOR:
            console.log("author");
            return {...state, author: action.payload , loading: false};
            case t.ROLE:
            return {...state, role: action.payload};
        default:
            return state;
    }
};

export default Reducer;
