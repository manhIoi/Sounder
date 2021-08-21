import {StyleSheet} from 'react-native';
import rootColor from '../../constants/colors';
import dimensions, {spacing} from '../../constants/dimensions';
import {rootFonts} from '../../constants/fonts';

const styles = StyleSheet.create({
  name: {
    borderBottomColor: rootColor.primaryColor,
    borderBottomWidth: 3,
    maxWidth: dimensions.w * 0.5,
    color: '#111',
    fontFamily: rootFonts.extraBold,
    fontSize: 25,
    textAlign: 'center',
    marginBottom: spacing.normal * 2,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.normal,
  },
});

export default styles;
