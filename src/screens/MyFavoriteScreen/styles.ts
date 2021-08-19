import {StyleSheet} from 'react-native';
import {spacing} from '../../constants/dimensions';
import {rootFonts} from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wraperCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: rootFonts.semiBold,
    marginBottom: spacing.normal,
  },
});

export default styles;
