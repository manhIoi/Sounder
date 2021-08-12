import {StyleSheet} from 'react-native';
import {rangeItemCurrentSong} from '../../constants/dimensions';
const {w, h, widthImg, heightImg, containerH, detailW, detailH} =
  rangeItemCurrentSong;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    zIndex: -1,
    backgroundColor: 'rgba(0,0,0,0.09)',
    width: w,
    height: h,
  },
  img: {
    position: 'absolute',
    resizeMode: 'cover',
  },
});

export default styles;
