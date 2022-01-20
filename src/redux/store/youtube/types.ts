import {IFetchFailure, IState} from 'types/index';
import {YoutubeTypes} from './actionTypes';
export interface VideoListState extends IState {
  data: FetchYoutubeListSuccessPayload | null;
  coordinate: IVideoListParam | object;
}
export interface IVideoListParam {
  latitude: number;
  longitude: number;
  nextPageToken?: string;
}
export interface FetchVideoListRequestPayload {
  payload: IVideoListParam;
  type: typeof YoutubeTypes;
}
export interface FetchVideoListFailurePayload extends IFetchFailure {}

//? success payload types
export interface FetchYoutubeListSuccessPayload extends IKindEtag {
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: IItem[];
}
export interface IItem extends IKindEtag {
  id: {
    kind: string;
    videoId: string;
  };
  snippet: ISnippet;
}

interface IKindEtag {
  kind: string;
  etag: string;
}

export interface ISnippet {
  publishTime: Date;
  publishedAt: Date;
  title: string;
  description: string;
  channelTitle: string;
  thumbnails: IThumbnail;
}
export interface IThumbnail {
  default: IThumbnailData;
  medium: IThumbnailData;
  high: IThumbnailData;
}

export interface IThumbnailData {
  url: string;
  width: number;
  height: number;
}
//?:  Fetch Request TYPE
export interface FetchMoreVideoRequest {
  type: typeof YoutubeTypes.GET_MORE_VIDEO_REQUEST;
  payload: IVideoListParam;
}
export interface FetchVideoListRequest {
  type: typeof YoutubeTypes.GET_LIST_REQUEST;
  payload: IVideoListParam;
}

//?: FETCH MORE VIDEO SUCCESS TYPE
export type FetchMoreVideoRSuccess = {
  type: typeof YoutubeTypes.GET_MORE_VIDEO_SUCCESS;
  payload: FetchYoutubeListSuccessPayload;
};
//?: FETCH SUCCESS TYPE
export type FetchYoutubeListSuccess = {
  type: typeof YoutubeTypes.GET_LIST_SUCCESS;
  payload: FetchYoutubeListSuccessPayload;
};
//? FETCH FAILURE TYPE

export type FetchYoutubeListFailure = {
  type: typeof YoutubeTypes.GET_LIST_FAILURE;
  payload: IFetchFailure;
};
//?: All action Type
export type YoutubeListActions =
  | FetchVideoListRequest
  | FetchYoutubeListSuccess
  | FetchMoreVideoRequest
  | FetchMoreVideoRSuccess
  | FetchYoutubeListFailure;
