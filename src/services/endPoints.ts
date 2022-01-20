import {
  FetchYoutubeListSuccessPayload,
  IVideoListParam,
} from 'redux/store/youtube/types';
import {youtubeAPIKEY} from 'utils/constants';
import axios from './';
const baseURL = 'https://youtube.googleapis.com/youtube/v3';

const api = {
  getVideoListByLocation: (params: IVideoListParam) => {
    const {latitude, longitude, nextPageToken = ''} = params;
    return axios.get<FetchYoutubeListSuccessPayload>(
      `${baseURL}/search/?part=snippet&type=video&location=${latitude}, ${longitude}&locationRadius=10km&maxResults=10&order=date&key=${youtubeAPIKEY}${
        nextPageToken ? '&pageToken=' + nextPageToken : ''
      }`,
    );
  },
};

export default api;
