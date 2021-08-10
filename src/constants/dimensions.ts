import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const dimensions = {
  w: Dimensions.get('screen').width,
  h: Dimensions.get('screen').height,
  statusbarH: Math.ceil(getStatusBarHeight()),
};

const spacing = {
  normal: 10,
};

const {w, h} = dimensions;
const widthImg = w * 0.7;

const rangeItemCurrentSong = {
  w,
  h,
  widthImg,
  heightImg: widthImg,
  containerH: dimensions.h * 0.6,
  detailW: dimensions.w * 0.9,
  detailH: widthImg * 1.3,
};

export default dimensions;
export {spacing, rangeItemCurrentSong};
