import { call, put, takeEvery, takeLatest, take } from 'redux-saga/effects';
import { USER, USER_SUCCESS } from '../redux/constants/constants';
import { getUserInfo } from '../redux/actions/actions';

// import { deleteDataSuccess, addUserSuccess, addUser } from "../actions";
import { getAPIUserInfo } from './postApi';

//Handle GET 
function* handleGetUserInfo(action) {
  try {
    const user = yield call(getAPIUserInfo, action.payload);
    const { data } = user;
    yield put({
      type: USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log('Lỗi xảy ra Api Saga', error);
  }
}

function* postsSaga() {
  yield takeEvery(USER, handleGetUserInfo);
}

export default postsSaga;
