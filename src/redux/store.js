import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import RootReducer from "./Reducers/rootReducer";

const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...[thunk]))
);

export const dispatch = Store.dispatch;
export default Store;
