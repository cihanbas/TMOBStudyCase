import {all, fork} from 'redux-saga/effects';
import {youtubeSaga} from './youtube/sagas';

export function* rootSaga() {
  yield all([fork(youtubeSaga)]);
}
