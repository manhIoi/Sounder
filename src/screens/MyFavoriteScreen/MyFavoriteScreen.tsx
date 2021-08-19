import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import PrimaryBtn from '../../components/PrimaryBtn';
import {spacing} from '../../constants/dimensions';
import {rootFonts} from '../../constants/fonts';
import {RootState} from '../../redux/reducers';
import styles from './styles';

const MyFavoriteScreen = () => {
  const user = useSelector((state: RootState) => state.user);
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  return (
    <View style={styles.container}>
      {!user._id ? (
        <View style={styles.wraperCenter}>
          <Text style={styles.text}>Bạn cần đăng nhập để tạo album</Text>
          <PrimaryBtn
            title="Đăng nhập"
            callback={() => navigation.navigate('AuthStack')}
          />
        </View>
      ) : (
        <View>
          <Text>Welcome</Text>
        </View>
      )}
    </View>
  );
};

export default MyFavoriteScreen;
