import {moderateScale} from 'react-native-size-matters';

const colors = {
  primary: '#007acc',
  secondary: 'red',
};
export const spacing = [0, 4, 8, 12, 16, 24, 32, 48, 64];

function normalize(number: number, factor = 0.25) {
  return moderateScale(number, factor);
}
const appPadding = normalize(spacing[5]);

export {colors, normalize, appPadding};
