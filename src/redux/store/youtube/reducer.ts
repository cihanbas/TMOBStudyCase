import {IItem} from 'redux/store/youtube/types';
import {YoutubeTypes} from './actionTypes';
import {VideoListState, YoutubeListActions} from './types';

const initialState: VideoListState = {
  pending: false,
  data: null,
  error: null,
  coordinate: {},
};
export default (state = initialState, action: YoutubeListActions) => {
  switch (action.type) {
    case YoutubeTypes.GET_LIST_REQUEST:
      return {
        ...state,
        pending: true,
        data: null,
        coordinate: action.payload,
      };

    case YoutubeTypes.GET_LIST_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload,
        error: null,
        coordinate: {
          ...state.coordinate,
          nextPageToken: action.payload.nextPageToken,
        },
      };

    case YoutubeTypes.GET_LIST_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    default:
      return {...state};
  }
};
