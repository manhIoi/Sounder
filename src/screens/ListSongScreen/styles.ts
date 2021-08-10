import {StyleSheet} from 'react-native';
import dimensions, {spacing} from '../../constants/dimensions';

const imgBannerW = dimensions.w;
const imgBannerH = dimensions.h * 0.7;

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBanner: {
    width: imgBannerW,
    height: imgBannerH,
  },
  listSong: {
    minHeight: dimensions.h - dimensions.statusbarH - spacing.normal * 2,
  },
});

export {imgBannerH, imgBannerW};
export default styles;
