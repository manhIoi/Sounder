import {StyleSheet} from 'react-native';
import {spacing} from '../../constants/dimensions';
import {rootFonts} from '../../constants/fonts';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  wraperCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#111',
    fontFamily: rootFonts.semiBold,
    marginBottom: spacing.normal,
  },
  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.normal,
  },
  settingText: {
    marginLeft: spacing.normal,
    fontFamily: rootFonts.medium,
    fontSize: 18,
  },
});

export default styles;
