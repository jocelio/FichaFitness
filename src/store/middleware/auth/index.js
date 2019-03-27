import * as axios from 'axios';
import { LOGIN_SUCCESS, LOGOUT } from "../../types/AuthTypes";

const authMiddleware = state => next => action => {
  if (action.type === LOGIN_SUCCESS) {

    const authToken = action.response.data.access_token;

    axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;

  } else if (action.type === LOGOUT) {
    axios.defaults.headers.common.Authorization = ``;
  }
  return next(action);
};

export default authMiddleware;
