import { put, select, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import api from './../../api';

import { AuthTypes } from '../types/index';

export function* syncUser() {
  try {
    // API session request. delay() to show loader.
    yield delay(500);
    // For now we just get the state from the persisted reducer.
    const loggedIn = yield select(state => state.auth.loggedIn);
    const user = yield select(state => state.auth.user);

    yield put({ type: AuthTypes.SYNC_USER_SUCCESS, loggedIn, user });
  } catch (error) {
    yield put({ type: AuthTypes.SYNC_USER_ERROR, error });
  }
}

export function* login() {

    const loginData = {
        grant_type:'password',
        client_id:'7JIkmd7eIhsi8eiE7OfXUElwDQZGpLuj',
        client_secret:'Rxr2oegr7ExPeN65SFmW5Fle-0u1rbs7swSkxgBdP-dH9lIS4LEjrLCjpjxY2zE2',
        audience: 'https://jocelio.auth0.com/api/v2/',
        username: 'jclls@hotmail.com',
        password: 'zgyMTNjYjI3Yzc5ZjA',
    };

    try {
        const response = yield call(api.login, loginData);
        yield put({ type: AuthTypes.LOGIN_SUCCESS, response });
    } catch (error) {
        yield put({ type: AuthTypes.LOGIN_ERROR, error });
    }
}


export function* logout() {
  try {
    // API logout request
    yield put({ type: AuthTypes.LOGOUT_SUCCESS });
  } catch (error) {
    yield put({ type: AuthTypes.LOGOUT_ERROR, error });
  }
}
