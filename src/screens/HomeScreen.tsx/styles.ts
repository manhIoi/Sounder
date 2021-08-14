import {StyleSheet} from 'react-native';
import dimensions, {headerH, spacing} from '../../constants/dimensions';
import {rootFonts} from '../../constants/fonts';

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: headerH,
  },
  headerSecondary: {
    width: dimensions.w,
    height: headerH,
    minHeight: headerH + dimensions.statusbarH,
    backgroundColor: 'rgba(0,0,0,0.05)',
    justifyContent: 'center',
    position: 'absolute',
    top: -headerH,
    zIndex: 100,
    paddingTop: dimensions.statusbarH,
    paddingLeft: spacing.normal,
  },
  heading: {
    fontSize: 30,
    fontFamily: rootFonts.regular,
  },
});
export default styles;
