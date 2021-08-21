import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import MyHeader from '../../components/MyHeader';
import Avatar from '../../components/Avatar';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers';
import PrimaryBtn from '../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import rootColor from '../../constants/colors';
import {logout} from '../../redux/actions/userActions';
import {useState} from 'react';
import MyAlert from '../../components/MyAlert';

const AccountScreen = () => {
  const user = useSelector((state: RootState) => state.user);
  const [isShowAlert, setIsShowAlert] = useState(false);
  const navigation = useNavigation<StackNavigationProp<any>>();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.screen}>
      <MyHeader title="Tài khoản" canGoBack />

      {!user._id ? (
        <View style={styles.wraperCenter}>
          <Text style={styles.text}>Bạn cần đăng nhập</Text>
          <PrimaryBtn
            title="Đăng nhập"
            callback={() => navigation.navigate('AuthStack')}
          />
        </View>
      ) : (
        <>
          <Avatar
            name={user.displayName}
            description={user.email}
            sizeImage={80}
            row
            isCircle
          />
          <TouchableOpacity
            style={styles.settingContainer}
            activeOpacity={0.5}
            onPress={() => navigation.push('SettingScreen')}>
            <Feather name="user" color={rootColor.primaryColor} size={20} />
            <Text style={styles.settingText}>Đổi thông tin người dùng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingContainer} activeOpacity={0.5}>
            <AntDesign name="lock" color={rootColor.primaryColor} size={20} />
            <Text style={styles.settingText}>Đổi mật khẩu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingContainer}
            activeOpacity={0.5}
            onPress={() => setIsShowAlert(true)}>
            <MaterialIcons
              name="logout"
              size={22}
              color={rootColor.primaryColor}
            />
            <Text style={styles.settingText}>Đăng xuất</Text>
          </TouchableOpacity>
        </>
      )}
      <MyAlert
        state={isShowAlert}
        title="Bạn có muốn thoát"
        setState={setIsShowAlert}
        isConfirm
        callbackConfirm={handleLogout}
      />
    </View>
  );
};

export default AccountScreen;
