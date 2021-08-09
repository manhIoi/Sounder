import {Dimensions} from 'react-native';

const dimensions = {
  w: Dimensions.get('screen').width,
  h: Dimensions.get('screen').height,
  statusbarH: 25,
};

const spacing = {
  normal: 10,
};

export default dimensions;
export {spacing};
