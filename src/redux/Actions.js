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
  const action = { type: t.AUTHOR, payload: data };
  dispatch(action);
};
export { LoadingOff, LoadingOn, UserData };
