import {Platform} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const colors = {
  primary: '#007acc',
  secondary: 'red',
  white: 'white',
  black: 'black',
};
export const spacing = [0, 4, 8, 12, 16, 24, 32, 48, 64];
const youtubeAPIKEY = 'AIzaSyBYx06ljYCbidxklTUsj3irXhCfSta0WBM';

function normalize(number: number, factor = 0.25) {
  return moderateScale(number, factor);
}
const isIOS = Platform.OS === 'ios';

const appPadding = normalize(spacing[5]);
const VideoItemHeight = 100;
const initialRegion = {
  latitude: 39.930273,
  longitude: 32.856041,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};
export {
  colors,
  normalize,
  appPadding,
  youtubeAPIKEY,
  isIOS,
  VideoItemHeight,
  initialRegion,
};
