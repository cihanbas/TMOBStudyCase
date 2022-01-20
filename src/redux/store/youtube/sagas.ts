import {all, call, put, takeLatest} from 'redux-saga/effects';
import {
  FetchVideoListRequestPayload,
  FetchYoutubeListSuccessPayload,
} from 'redux/store/youtube/types';
import api from 'services/endPoints';
import {fetchVideoByCoordFailure, fetchVideoByCoordSuccess} from './actions';
import {YoutubeTypes} from './actionTypes';

function* fetchYoutubeListSaga(action: FetchVideoListRequestPayload) {
  try {
    const response: FetchYoutubeListSuccessPayload = yield call(() =>
      api.getVideoListByLocation(action.payload),
    );

    yield put(
      fetchVideoByCoordSuccess({
        ...response,
      }),
    );
  } catch (e) {
    yield put(
      fetchVideoByCoordFailure({
        error: e?.message,
      }),
    );
  }
}

function* youtubeSaga() {
  yield all([takeLatest(YoutubeTypes.GET_LIST_REQUEST, fetchYoutubeListSaga)]);
}

export {youtubeSaga};
