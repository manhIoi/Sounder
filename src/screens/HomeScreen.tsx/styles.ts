import {StyleSheet} from 'react-native';
import {rootFonts} from '../../constants/fonts';

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    fontFamily: rootFonts.regular,
  },
});
export default styles;
