import {IFetchFailure} from 'types/index';
import {YoutubeTypes} from './actionTypes';
import {
  FetchVideoListRequest,
  FetchYoutubeListFailure,
  FetchYoutubeListSuccess,
  FetchYoutubeListSuccessPayload,
  IVideoListParam,
} from './types';
// ? Fetch Video By Coordinate Actions
const fetchVideoByCoordRequest = (
  payload: IVideoListParam,
): FetchVideoListRequest => ({
  type: YoutubeTypes.GET_LIST_REQUEST,
  payload,
});

const fetchVideoByCoordSuccess = (
  payload: FetchYoutubeListSuccessPayload,
): FetchYoutubeListSuccess => ({
  type: YoutubeTypes.GET_LIST_SUCCESS,
  payload,
});

const fetchVideoByCoordFailure = (
  payload: IFetchFailure,
): FetchYoutubeListFailure => ({
  type: YoutubeTypes.GET_LIST_FAILURE,
  payload,
});

export {
  fetchVideoByCoordRequest,
  fetchVideoByCoordSuccess,
  fetchVideoByCoordFailure,
};
