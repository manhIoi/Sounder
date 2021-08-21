import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import Avatar from '../../components/Avatar';
import MyHeader from '../../components/MyHeader';
import {RootState} from '../../redux/reducers';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import rootColor from '../../constants/colors';
import PrimaryBtn from '../../components/PrimaryBtn';

const SettingScreen = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <View style={{flex: 1}}>
      <MyHeader title="Thông tin người dùng" canGoBack />
      <View style={styles.avatarContainer}>
        <Avatar sizeImage={100} name={user.displayName} hideName />
        <TextInput defaultValue={user.displayName} style={styles.name} />
        <PrimaryBtn
          title="Xác nhận"
          callback={() => console.log('change name')}
        />
      </View>
    </View>
  );
};

export default SettingScreen;
