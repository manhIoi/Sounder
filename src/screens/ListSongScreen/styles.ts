import {StyleSheet} from 'react-native';
import dimensions, {headerH, spacing} from '../../constants/dimensions';

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
    marginBottom: -headerH,
  },
  listSong: {
    minHeight: dimensions.h - dimensions.statusbarH - spacing.normal * 2,
    paddingTop: headerH,
  },
  loadingContainer: {
    width: imgBannerW,
    height: dimensions.h - imgBannerH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerHeader: {
    position: 'absolute',
    zIndex: 100,
  },
});

export {imgBannerH, imgBannerW};
export default styles;
