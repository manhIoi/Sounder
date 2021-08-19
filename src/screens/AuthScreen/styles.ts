import {StyleSheet} from 'react-native';
import rootColor from '../../constants/colors';
import dimensions, {
  authFormDimensions,
  spacing,
} from '../../constants/dimensions';
import {rootFonts} from '../../constants/fonts';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: StyleSheet.absoluteFillObject,
  container: {
    width: dimensions.w,
    height: dimensions.h * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: dimensions.w * 0.6,
    height: 50,
    backgroundColor: rootColor.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.normal,
  },
  textBtn: {
    textTransform: 'uppercase',
    color: rootColor.whiteColor,
    fontFamily: rootFonts.semiBold,
    fontSize: 18,
  },
  form: {
    backgroundColor: rootColor.whiteColor,
    width: authFormDimensions.w,
    height: authFormDimensions.h,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  closeBtn: {
    width: 40,
    height: 40,
    backgroundColor: rootColor.primaryColor,
    borderRadius: 50,
    margin: -20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    zIndex: 10,
  },
});

export default styles;
